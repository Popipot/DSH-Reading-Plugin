import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blobOf,
  setupBrowserEnv,
} from './formats-test-helpers.mjs';

setupBrowserEnv();
const { parseBook, extensionOf } = await import('../web/src/formats/index.js');

function txtBlob(text) {
  return blobOf(new TextEncoder().encode(text));
}

test('parseBook dispatch: extension wins, mime fallback, content sniffing', async () => {
  const byExtension = await parseBook(txtBlob('Hello.\n'), { fileName: 'hello.TXT' });
  assert.equal(byExtension.format, 'txt');
  assert.equal(byExtension.chapters.length, 1);

  const byMime = await parseBook(txtBlob('Hello from mime.\n'), { fileName: '', mime: 'text/plain; charset=utf-8' });
  assert.equal(byMime.format, 'txt');

  const bySniff = await parseBook(txtBlob('Sniffed plain text.\n'), {});
  assert.equal(bySniff.format, 'txt');

  const htmlBySniff = await parseBook(txtBlob('<!doctype html><html><body><h1>Sniffed HTML</h1></body></html>'), {});
  assert.equal(htmlBySniff.format, 'html');
  assert.equal(htmlBySniff.title, 'Sniffed HTML');
  htmlBySniff.dispose();
});

test('parseBook rejects unsupported formats with a Chinese message', async () => {
  await assert.rejects(
    parseBook(txtBlob('whatever'), { fileName: 'report.docx' }),
    (error) => error instanceof Error && /不支持的文件格式/.test(error.message) && /docx/.test(error.message),
  );
});

test('parseBook routes PDF away from the format engine', async () => {
  await assert.rejects(
    parseBook(txtBlob('%PDF-1.7 fake'), { fileName: 'book.pdf' }),
    (error) => error instanceof Error && /PDF/.test(error.message) && /[\u4e00-\u9fff]/.test(error.message),
  );
  await assert.rejects(
    parseBook(txtBlob('%PDF-1.7 fake'), { fileName: 'no-extension', mime: 'application/pdf' }),
    (error) => error instanceof Error && /PDF/.test(error.message),
  );
});

test('parseBook returns a stable normalized shape', async () => {
  const book = await parseBook(txtBlob('第1章 一\n\n内容。\n'), { fileName: 'shape.txt' });
  assert.equal(typeof book.format, 'string');
  assert.equal(typeof book.title, 'string');
  assert.ok(Array.isArray(book.chapters));
  assert.ok(Array.isArray(book.toc));
  assert.ok(Array.isArray(book.warnings));
  assert.equal(typeof book.dispose, 'function');
  for (const chapter of book.chapters) {
    assert.equal(typeof chapter.id, 'string');
    assert.equal(typeof chapter.title, 'string');
    assert.ok(Array.isArray(chapter.blocks));
    for (const block of chapter.blocks) {
      assert.equal(typeof block.id, 'string');
      assert.equal(typeof block.kind, 'string');
      assert.ok(block.kind.length > 0);
    }
  }
  book.dispose();
});

test('extensionOf stays exported from the format entry point', () => {
  assert.equal(extensionOf('a.b.c.EPUB'), 'epub');
  assert.equal(extensionOf('x.mobi'), 'mobi');
});
