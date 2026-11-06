import test from 'node:test';
import assert from 'node:assert/strict';
import { IMPORT_ALLOWED_DOMAINS } from '../lib/import-source.js';

test('online import only exposes public-domain / open-access sources', () => {
  assert.ok(IMPORT_ALLOWED_DOMAINS.includes('gutenberg.org'));
  assert.ok(IMPORT_ALLOWED_DOMAINS.includes('standardebooks.org'));
  assert.ok(IMPORT_ALLOWED_DOMAINS.includes('arxiv.org'));
  assert.ok(IMPORT_ALLOWED_DOMAINS.includes('archive.org'));
  assert.ok(IMPORT_ALLOWED_DOMAINS.every((domain) => !/zlib|libgen|sci-hub/iu.test(domain)));
});
