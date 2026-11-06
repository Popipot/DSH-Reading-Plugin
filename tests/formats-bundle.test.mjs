// Regression test for browser-bundle safety: the format engine is loaded inside
// the reader's esbuild browser bundle, so this builds it the same way and makes
// sure no Node built-ins leak in (especially from @lingo-reader/mobi-parser).
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

test('format engine bundles for the browser without Node built-ins', async () => {
  const result = await esbuild.build({
    stdin: {
      contents: 'import { parseBook, extensionOf } from "./web/src/formats/index.js"; export { parseBook, extensionOf };',
      resolveDir: root,
      sourcefile: 'formats-bundle-entry.js',
      loader: 'js',
    },
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'browser',
    target: ['chrome120', 'safari17'],
    minify: true,
    legalComments: 'none',
    logLevel: 'silent',
    metafile: true,
  });
  assert.equal(result.errors.length, 0);
  const output = result.outputFiles[0].text;
  assert.ok(output.length > 10000, 'bundle should contain the format engine');
  assert.ok(output.length < 900000, `format engine bundle is unexpectedly large (${output.length} bytes)`);
  assert.ok(!/\bfrom\s*["']node:/.test(output), 'bundled code must not import node: built-ins');
  assert.ok(!/require\(["'](?:fs|path|os|util|zlib)["']\)/.test(output), 'bundled code must not require Node core modules');
  assert.ok(!output.includes('process.binding'), 'bundled code must not rely on Node internals');
  // The MOBI parser dependency must be resolved from its browser entry.
  assert.ok(output.includes('BOOKMOBI'), 'MOBI parser should be bundled');
});
