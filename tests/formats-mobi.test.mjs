import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {
  blobOf,
  makePalmDatabase,
  setupBrowserEnv,
} from './formats-test-helpers.mjs';

const env = setupBrowserEnv();
const { parseBook } = await import('../web/src/formats/index.js');

const here = path.dirname(fileURLToPath(import.meta.url));
const MOBI_FIXTURE = path.join(here, '..', 'test', 'fixtures', 'formats-mobi', 'pg1342.mobi');
const HAS_MOBI_FIXTURE = existsSync(MOBI_FIXTURE);
const MOBI_SKIP_REASON = '未找到 test/fixtures/formats-mobi/pg1342.mobi（需联网下载 Project Gutenberg 公共领域 MOBI），已跳过真实 MOBI 解析测试。';

test('MOBI: real Project Gutenberg book parses via the MOBI library', { skip: HAS_MOBI_FIXTURE ? false : MOBI_SKIP_REASON }, async () => {
  const bytes = new Uint8Array(readFileSync(MOBI_FIXTURE));
  const book = await parseBook(new Blob([bytes]), { fileName: 'pride-and-prejudice.mobi', mime: 'application/x-mobipocket-ebook' });
  assert.equal(book.format, 'mobi');
  assert.match(book.title, /Pride and Prejudice/i);
  assert.match(book.author || '', /Austen/i);
  assert.equal(book.language, 'en');
  assert.ok(book.chapters.length >= 30, `expected many chapters, got ${book.chapters.length}`);
  assert.ok(book.toc.length >= 20, `expected a real TOC, got ${book.toc.length}`);
  assert.ok(book.toc.every((entry) => Number.isInteger(entry.chapterIndex) && entry.chapterIndex >= 0 && entry.chapterIndex < book.chapters.length));
  const covered = new Set(book.toc.map((entry) => entry.chapterIndex));
  for (let index = 0; index < book.chapters.length; index += 1) {
    assert.ok(covered.has(index), `chapter ${index} missing from TOC`);
  }
  const paragraphs = book.chapters.flatMap((chapter) => chapter.blocks).filter((block) => block.kind === 'paragraph');
  assert.ok(paragraphs.length > 100, 'expected many paragraph blocks');
  assert.ok(paragraphs.every((block) => typeof block.text === 'string' && block.text.length > 0));
  // One of the early TOC entries should match a chapter title.
  assert.ok(book.chapters.some((chapter) => /Chapter 1/i.test(chapter.title)));
  assert.doesNotThrow(() => book.dispose());
  assert.doesNotThrow(() => book.dispose());
});

test('MOBI: TEXtREAd plain PalmDOC (uncompressed) uses the built-in fallback', async () => {
  const text = '第一章 开始\n\n这是第一段。\n\n第二章 结束\n\n这是第二段。\n';
  const bytes = makePalmDatabase({ type: 'TEXtREAd', text, compression: 1 });
  const book = await parseBook(blobOf(bytes), { fileName: '旧的 Palm 书.prc' });
  assert.equal(book.format, 'mobi');
  assert.equal(book.title, '旧的 Palm 书');
  assert.equal(book.chapters.length, 2);
  assert.equal(book.chapters[0].title, '第一章 开始');
  assert.equal(book.chapters[0].blocks[0].kind, 'heading');
  assert.equal(book.chapters[1].blocks.find((block) => block.kind === 'paragraph').text, '这是第二段。');
  book.dispose();
});

test('MOBI: TEXtREAd with PalmDOC LZ77 compression is decompressed', async () => {
  const text = '第一章 压缩\n\n中文内容包含 UTF-8 多字节字符：测试。\n';
  const bytes = makePalmDatabase({ type: 'TEXtREAd', text, compression: 2 });
  const book = await parseBook(blobOf(bytes), { fileName: '压缩.prc' });
  assert.equal(book.chapters.length, 1);
  assert.equal(book.chapters[0].title, '第一章 压缩');
  assert.equal(book.chapters[0].blocks.find((block) => block.kind === 'paragraph').text, '中文内容包含 UTF-8 多字节字符：测试。');
  book.dispose();
});

test('MOBI: BOOKMOBI fallback splits HTML chapters on pagebreak markers', async () => {
  const text = '<html><body><h1>第一章</h1><p>第一段。</p><mbp:pagebreak/><h1>第二章</h1><p>第二段。</p></body></html>';
  const bytes = makePalmDatabase({ type: 'BOOKMOBI', text, compression: 2 });
  const book = await parseBook(blobOf(bytes), { fileName: 'fallback.mobi' });
  assert.equal(book.format, 'mobi');
  assert.equal(book.chapters.length, 2);
  assert.deepEqual(book.chapters.map((chapter) => chapter.title), ['第一章', '第二章']);
  assert.equal(book.chapters[0].blocks.find((block) => block.kind === 'paragraph').text, '第一段。');
  assert.equal(book.chapters[1].blocks.find((block) => block.kind === 'paragraph').text, '第二段。');
  book.dispose();
});

test('MOBI: DRM-protected files are rejected clearly', async () => {
  const bytes = makePalmDatabase({ type: 'TEXtREAd', text: 'Protected text' });
  bytes[96 + 13] = 2; // PalmDOC header encryption field = 2 (big-endian)
  await assert.rejects(
    parseBook(blobOf(bytes), { fileName: 'drm.mobi' }),
    (error) => error instanceof Error && /DRM|受保护/.test(error.message) && /[\u4e00-\u9fff]/.test(error.message),
  );
});

test('MOBI: unknown compression is rejected clearly', async () => {
  const bytes = makePalmDatabase({ type: 'TEXtREAd', text: 'Text' });
  bytes[96] = 0x03;
  bytes[97] = 0xef; // 1007, unsupported
  await assert.rejects(
    parseBook(blobOf(bytes), { fileName: 'weird.mobi' }),
    (error) => error instanceof Error && /压缩方式/.test(error.message),
  );
});

test('MOBI: HUFF/CDIC fallback reports the compression type', async () => {
  const bytes = makePalmDatabase({ type: 'BOOKMOBI', text: 'Text', compression: 1 });
  bytes[96] = 0x44;
  bytes[97] = 0x48; // 17480 = 0x4448
  await assert.rejects(
    parseBook(blobOf(bytes), { fileName: 'huff.mobi' }),
    (error) => error instanceof Error && /HUFF|CDIC/.test(error.message),
  );
});

test('MOBI: non-PDB garbage rejects with a Chinese message', async () => {
  await assert.rejects(
    parseBook(new Blob([new TextEncoder().encode('this is not a mobi file at all, just text')]), { fileName: 'fake.mobi' }),
    (error) => error instanceof Error && /MOBI|PDB/.test(error.message) && /[\u4e00-\u9fff]/.test(error.message),
  );
});
