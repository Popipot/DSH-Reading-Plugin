// Self-contained Chrome integration check, using CDP without extra dependencies.
// Usage: npm run build && node scripts/check-pdf-browser.mjs [path/to/real.pdf]
import { build } from 'esbuild';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerAssetRoutes } from '../lib/assets.js';
import { translationFixtureService } from './translation-fixture-server.mjs';
import { complexPdfFixture } from './pdf-complex-fixture.mjs';

const project = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(project, 'output/playwright');
await mkdir(output, { recursive: true });
const flowCheck = process.argv.includes('--flow');
const translationCheck = process.argv.includes('--translation');
const performanceCheck = process.argv.includes('--performance');
const suppliedPdf = flowCheck || translationCheck ? null : process.argv.slice(2).find(arg => !arg.startsWith('--'));
function fixture(pages = 1029, paragraphs = false) {
  const objects = ['<< /Type /Catalog /Pages 2 0 R >>', '', '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];
  const kids = [];
  for (let page = 1; page <= pages; page += 1) {
    kids.push(`${objects.length + 1} 0 R`);
    const content = paragraphs ? Array.from({ length: 8 }, (_, index) => `BT /F1 12 Tf 72 ${740 - index * 78} Td (Page ${page} paragraph ${index}. Gate control follows reference [12].) Tj 0 -16 Td (A scientific explanation about the gate and band gap.) Tj ET`).join('\n')
      : `BT /F1 24 Tf 72 700 Td (Regression page ${page}) Tj ET`;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${objects.length + 2} 0 R >>`);
    objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  }
  objects[1] = `<< /Type /Pages /Kids [${kids.join(' ')}] /Count ${pages} >>`;
  // Large unreferenced stream stresses file transport without pretending to
  // reproduce the complex fonts/images in the user's textbook.
  const padding = paragraphs ? '' : ' '.repeat(80_000_000);
  objects.push(`<< /Length ${padding.length} >>\nstream\n${padding}\nendstream`);
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (const [index, body] of objects.entries()) {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
  }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf);
}
const pdf = flowCheck ? Buffer.alloc(0) : translationCheck ? fixture(24, true) : suppliedPdf ? await readFile(path.resolve(suppliedPdf)) : performanceCheck ? complexPdfFixture() : fixture();
const bundle = await build({
  entryPoints: [path.join(project, flowCheck ? 'scripts/flow-browser-harness.jsx' : translationCheck ? 'scripts/translation-browser-harness.jsx' : performanceCheck ? 'scripts/pdf-performance-harness.jsx' : 'scripts/pdf-browser-harness.jsx')],
  bundle: true, write: false, format: 'esm', platform: 'browser', target: 'chrome120', jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
});
let assets;
registerAssetRoutes({ register(route) { assets = route.handler; return () => {}; } }, project);
const fixtureService = translationFixtureService();
const server = createServer(async (req, res) => {
  if (translationCheck && await fixtureService(req, res)) return;
  if (req.url.startsWith('/dsh-reader-assets/')) return assets(req, res);
  if (req.url === '/fixture.pdf') { res.setHeader('content-type', 'application/pdf'); res.end(pdf); return; }
  if (req.url === '/fixture.mobi') { res.end(await readFile(path.join(project, 'test/fixtures/formats-mobi/pg1342.mobi'))); return; }
  if (req.url === '/harness.js') { res.setHeader('content-type', 'text/javascript'); res.end(bundle.outputFiles[0].text); return; }
  res.setHeader('content-type', 'text/html');
  res.end('<!doctype html><style>html,body,#app{height:100%;margin:0}</style><div id="app"></div><script type="module" src="/harness.js"></script>');
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const url = `http://127.0.0.1:${server.address().port}/${process.argv.includes('--dynamic') ? '?dynamic=1' : ''}`;
const executable = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const profileDir = path.resolve(output, `chrome-${process.pid}-${Date.now()}`);
if (!profileDir.startsWith(path.resolve(output) + path.sep)) throw new Error('Browser profile must stay inside test output');
const browser = spawn(executable, [
  ...(process.argv.includes('--hidpi') ? ['--force-device-scale-factor=2'] : []),
  '--headless=new', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=0',
  `--user-data-dir=${profileDir}`, '--window-size=1280,900', url,
], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
let socket;
try {
  const endpoint = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Chrome startup timed out')), 15000);
    browser.once('error', (error) => { clearTimeout(timer); reject(error); });
    browser.stderr.on('data', (data) => {
      const match = String(data).match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
  });
  const targets = await (await fetch(`${endpoint.replace(/^ws:/, 'http:').split('/devtools')[0]}/json/list`)).json();
  const target = targets.find((item) => item.type === 'page');
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));
  let sequence = 0;
  const pending = new Map();
  socket.addEventListener('message', (event) => {
    const response = JSON.parse(event.data);
    if (response.id) { pending.get(response.id)?.(response); pending.delete(response.id); }
  });
  const command = (method, params) => new Promise((resolve) => {
    const id = ++sequence;
    pending.set(id, resolve);
    socket.send(JSON.stringify({ id, method, params }));
  });
  let result;
  const deadline = Date.now() + 90000;
  while (Date.now() < deadline) {
    const response = await command('Runtime.evaluate', { expression: 'JSON.stringify(window.__pdfCheck)', returnByValue: true });
    const value = response.result?.result?.value;
    result = value ? JSON.parse(value) : null;
    if (result && result.state !== 'running') break;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  const shot = await command('Page.captureScreenshot', { format: 'png' });
  const reportBase = flowCheck ? 'flow-regression' : translationCheck ? 'translation-regression' : performanceCheck ? suppliedPdf ? 'pdf-real-performance' : 'pdf-complex-performance' : 'pdf-regression';
  const report = reportBase + (process.argv.includes('--hidpi') ? '-hidpi' : '');
  if (shot.result?.data) await writeFile(path.join(output, `${report}.png`), Buffer.from(shot.result.data, 'base64'));
  await writeFile(path.join(output, `${report}.json`), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (result?.state !== 'passed') process.exitCode = 1;
} finally {
  socket?.close();
  browser.kill();
  server.closeAllConnections();
  await new Promise((resolve) => server.close(resolve));
  await rm(profileDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }).catch(() => {});
}
