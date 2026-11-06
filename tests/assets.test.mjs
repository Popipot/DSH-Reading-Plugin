import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { registerAssetRoutes } from '../lib/assets.js';

test('PDF executable assets revalidate and versioned URLs preserve MIME and ETag', async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'dshr-assets-'));
  try {
    await mkdir(path.join(dir, 'dist/reader-assets'), { recursive: true });
    await writeFile(path.join(dir, 'dist/reader-assets/pdf.worker.mjs'), 'export const version = 1;');
    let handler;
    registerAssetRoutes({ register(route) { handler = route.handler; return () => {}; } }, dir);
    const request = async (headers = {}) => {
      const response = { headers: {}, setHeader(key, value) { this.headers[key] = value; }, end(body) { this.body = body; } };
      await handler({ method: 'GET', url: '/dsh-reader-assets/pdf.worker.mjs?v=revision-2', headers }, response);
      return response;
    };
    const response = await request();
    assert.equal(response.statusCode, 200);
    assert.equal(response.headers['cache-control'], 'no-cache');
    assert.match(response.headers['content-type'], /^text\/javascript/);
    assert.match(String(response.body), /version = 1/);
    assert.equal((await request({ 'if-none-match': response.headers.etag })).statusCode, 304);
  } finally {
    // mkdtemp returns the exact isolated directory owned by this test.
    assert.ok(path.resolve(dir).startsWith(path.resolve(os.tmpdir()) + path.sep + 'dshr-assets-'));
    await rm(dir, { recursive: true, force: true });
  }
});
