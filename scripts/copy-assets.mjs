import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.join(root, 'dist/reader-assets');

await fs.mkdir(assets, { recursive: true });

const required = [
  'pdf.bundle.js',
  'pdf.worker.mjs',
  'pdf.renderer.mjs',
  path.join('cmaps', 'UniGB-UCS2-H.bcmap'),
  path.join('standard_fonts', 'FoxitSerif.pfb'),
];
const missing = [];
for (const relative of required) {
  try {
    const info = await fs.stat(path.join(assets, relative));
    if (!info.isFile() || info.size === 0) missing.push(relative);
  } catch {
    missing.push(relative);
  }
}
if (missing.length > 0) {
  console.error('[dsh-reader] missing PDF assets after build:', missing.join(', '));
  console.error('[dsh-reader] run `npm run build:pdf` before `npm run build:assets`.');
  process.exit(1);
}
console.log('[dsh-reader] PDF assets verified');
