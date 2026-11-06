import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entry = path.join(root, 'web/src/index.jsx');
const outDir = path.join(root, 'client');
const bodyFile = path.join(root, '.build/client-body.cjs');
const targetFile = path.join(outDir, 'client.js');

await fs.mkdir(path.dirname(bodyFile), { recursive: true });
await fs.mkdir(outDir, { recursive: true });

const result = await esbuild.build({
  entryPoints: [entry],
  bundle: true,
  outfile: bodyFile,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome120', 'safari17'],
  jsx: 'automatic',
  jsxImportSource: 'react',
  external: ['react', 'react/jsx-runtime'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  logLevel: 'info',
  minify: true,
  legalComments: 'none',
  metafile: true,
});

const body = await fs.readFile(bodyFile, 'utf8');
const wrapped = `window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {\nvar module = { exports: {} }; var exports = module.exports;\n${body}\nreturn module.exports;\n}});\n`;
await fs.writeFile(targetFile, wrapped, 'utf8');
await fs.rm(bodyFile, { force: true });
try { await fs.rmdir(path.dirname(bodyFile)); } catch { /* non-empty or shared */ }

const bytes = (await fs.stat(targetFile)).size;
console.log(`[dsh-reader] client/client.js ${(bytes / 1024).toFixed(1)} KiB`);
if (result.warnings.length > 0) {
  for (const warning of result.warnings) console.warn('[dsh-reader] warning:', warning.text);
}
