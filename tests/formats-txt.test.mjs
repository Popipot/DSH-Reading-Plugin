import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blobOf,
  gb18030Encode,
  setupBrowserEnv,
} from './formats-test-helpers.mjs';

const env = setupBrowserEnv();
const { parseBook } = await import('../web/src/formats/index.js');

function utf16leBytes(text) {
  const bytes = [];
  for (const char of String(text)) {
    const code = char.codePointAt(0);
    if (code > 0xffff) {
      const offset = code - 0x10000;
      const high = 0xd800 + (offset >> 10);
      const low = 0xdc00 + (offset & 0x3ff);
      bytes.push(high & 0xff, high >> 8, low & 0xff, low >> 8);
    } else {
      bytes.push(code & 0xff, code >> 8);
    }
  }
  return Uint8Array.from(bytes);
}

test('TXT UTF-8 with BOM splits Chinese and English chapters', async () => {
  const text = '\uFEFF第一章 开始\r\n\r\n这是第一段。\r\n这是第一段的第二行。\r\n\r\n第二章 结束\r\n\r\nChapter 3\r\n\r\nEnglish paragraph.\r\n';
  const book = await parseBook(blobOf(new TextEncoder().encode(text)), { fileName: '我的小说.txt' });
  assert.equal(book.format, 'txt');
  assert.equal(book.title, '我的小说');
  assert.equal(book.chapters.length, 3);
  assert.deepEqual(book.chapters.map((chapter) => chapter.title), ['第一章 开始', '第二章 结束', 'Chapter 3']);
  assert.equal(book.toc.length, 3);
  const first = book.chapters[0];
  assert.equal(first.blocks[0].kind, 'heading');
  assert.equal(first.blocks[0].level, 1);
  const paragraphs = first.blocks.filter((block) => block.kind === 'paragraph');
  assert.equal(paragraphs.length, 2);
  assert.equal(paragraphs[0].text, '这是第一段。');
  assert.equal(paragraphs[1].text, '这是第一段的第二行。');
  assert.equal(book.chapters[2].blocks.filter((block) => block.kind === 'paragraph').length, 1);
});

test('TXT GB18030 fallback decodes correctly', async () => {
  const text = '第一章 测试\n\n中文内容第一段。\n\n第二章 继续\n\n第二段。\n';
  const bytes = gb18030Encode(text);
  const book = await parseBook(blobOf(bytes), { fileName: 'gbk小说.txt' });
  assert.equal(book.chapters.length, 2);
  assert.equal(book.chapters[0].title, '第一章 测试');
  assert.equal(book.chapters[0].blocks.find((block) => block.kind === 'paragraph').text, '中文内容第一段。');
  assert.ok(book.warnings.some((warning) => /GB18030/.test(warning)));
});

test('TXT UTF-16LE BOM decodes correctly', async () => {
  const text = '序章\n\n这是一段 UTF-16 文本。\n';
  const bytes = utf16leBytes(text);
  const withBom = new Uint8Array(bytes.length + 2);
  withBom[0] = 0xff;
  withBom[1] = 0xfe;
  withBom.set(bytes, 2);
  const book = await parseBook(blobOf(withBom), { fileName: 'utf16.txt' });
  assert.equal(book.chapters.length, 1);
  assert.equal(book.chapters[0].title, '序章');
  assert.equal(book.chapters[0].blocks.find((block) => block.kind === 'paragraph').text, '这是一段 UTF-16 文本。');
});

test('TXT without headings falls back to a single chapter', async () => {
  const text = 'Just a plain document.\n\nSecond paragraph here.\n';
  const book = await parseBook(blobOf(new TextEncoder().encode(text)), { fileName: 'notes.txt' });
  assert.equal(book.chapters.length, 1);
  assert.equal(book.chapters[0].title, 'notes');
  assert.equal(book.chapters[0].blocks.length, 2);
  assert.equal(book.chapters[0].blocks[0].text, 'Just a plain document.');
});

test('TXT one-paragraph-per-line Chinese novels are split correctly', async () => {
  const text = '第一章 开端\n这是第一段。\n这是第二段。\n\n第二章 转折\n这是第三段。\n';
  const book = await parseBook(blobOf(new TextEncoder().encode(text)), { fileName: 'novel.txt' });
  assert.equal(book.chapters.length, 2);
  const firstTexts = book.chapters[0].blocks.filter((block) => block.kind === 'paragraph').map((block) => block.text);
  assert.deepEqual(firstTexts, ['这是第一段。', '这是第二段。']);
});

test('TXT rejects empty and binary files with Chinese errors', async () => {
  await assert.rejects(
    parseBook(new Blob([new Uint8Array(0)]), { fileName: 'empty.txt' }),
    (error) => error instanceof Error && /空/.test(error.message),
  );
  const binary = new Uint8Array(600);
  binary.fill(0);
  await assert.rejects(
    parseBook(new Blob([binary]), { fileName: 'binary.txt' }),
    (error) => error instanceof Error && /[\u4e00-\u9fff]/.test(error.message),
  );
});

test('TXT paragraphs preserve text for translation', async () => {
  const book = await parseBook(blobOf(new TextEncoder().encode('Hello world.\n\nAnother line.')), { fileName: 'en.txt' });
  for (const block of book.chapters[0].blocks) {
    assert.equal(typeof block.text, 'string');
    assert.ok(block.text.length > 0);
    assert.equal(block.html, block.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
  }
  env.created.length = 0;
});
