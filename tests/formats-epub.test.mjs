import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blobOf,
  makeEpubFixture,
  makeZip,
  setupBrowserEnv,
} from './formats-test-helpers.mjs';

const env = setupBrowserEnv();
const { parseBook, extensionOf } = await import('../web/src/formats/index.js');

const MALICIOUS_PATTERNS = [
  /<script/i,
  /<iframe/i,
  /<object/i,
  /<embed/i,
  /<style/i,
  /javascript:/i,
  /onerror\s*=/i,
  /onclick\s*=/i,
  /onmouseover\s*=/i,
  /\sstyle\s*=/i,
  /\ssrc\s*=/i,
];

function allBlocks(book) {
  return book.chapters.flatMap((chapter) => chapter.blocks);
}

test('extensionOf normalises extensions', () => {
  assert.equal(extensionOf('book.EPUB'), 'epub');
  assert.equal(extensionOf('dir/name.tar.MD'), 'md');
  assert.equal(extensionOf('C:\\books\\我的书.txt'), 'txt');
  assert.equal(extensionOf('no-extension'), '');
  assert.equal(extensionOf(''), '');
  assert.equal(extensionOf(null), '');
});

test('EPUB3 nav: metadata, spine chapters, nested TOC, images and links', async () => {
  env.created.length = 0;
  env.revoked.length = 0;
  const book = await parseBook(blobOf(makeEpubFixture()), { fileName: 'pride.epub' });

  assert.equal(book.format, 'epub');
  assert.equal(book.title, '傲慢与偏见');
  assert.equal(book.author, 'Jane Austen');
  assert.equal(book.language, 'zh-CN');
  assert.equal(book.chapters.length, 4);
  assert.deepEqual(book.chapters.map((chapter) => chapter.title), [
    '第一章 启程',
    '第二章 秘密',
    '第三章 真相',
    '第四章 尾声',
  ]);
  assert.deepEqual(book.chapters.map((chapter) => chapter.id), ['ch0', 'ch1', 'ch2', 'ch3']);

  // TOC must cover every spine chapter and preserve the nested nav depth.
  const covered = new Set(book.toc.map((entry) => entry.chapterIndex));
  assert.deepEqual([...covered].sort((a, b) => a - b), [0, 1, 2, 3]);
  const nested = book.toc.find((entry) => entry.anchor === 'sec2');
  assert.ok(nested, 'nested nav entry with anchor should exist');
  assert.equal(nested.chapterIndex, 1);
  assert.equal(nested.depth, 1);

  const ch1 = book.chapters[0];
  assert.ok(ch1.blocks.some((block) => block.kind === 'heading' && block.level === 1));
  assert.ok(ch1.blocks.some((block) => block.kind === 'paragraph'));
  assert.ok(ch1.blocks.some((block) => block.kind === 'quote'));
  assert.equal(ch1.blocks.filter((block) => block.kind === 'list-item').length, 2);
  const paragraph = ch1.blocks.find((block) => block.kind === 'paragraph');
  assert.match(paragraph.html, /<b>第一段<\/b>/);
  assert.match(paragraph.html, /<em>强调<\/em>/);
  assert.match(paragraph.html, /<code>行内代码<\/code>/);
  assert.ok(paragraph.text.includes('第一段'), 'plain text is available for translation');
  // Malicious markup is gone but link text survives.
  assert.ok(!paragraph.html.includes('javascript:'));
  assert.ok(paragraph.text.includes('恶意链接'));

  // Image block comes from a relative ZIP entry and becomes a blob URL.
  const image = ch2Blocks(book).find((block) => block.kind === 'image');
  assert.ok(image, 'figure image should become an image block');
  assert.match(image.src, /^blob:test\//);
  assert.equal(image.alt, '插图一');
  assert.equal(image.caption, '图 1：一幅插图');
  assert.ok(env.created.some((item) => item.url === image.src));

  // Internal links resolve to numeric data-chapter (+ anchor); external links keep href.
  const linksHtml = book.chapters[1].blocks.map((block) => block.html || '').join('\n');
  assert.match(linksHtml, /data-chapter="2" data-anchor="sec3"/);
  assert.match(linksHtml, /data-chapter="1" data-anchor="sec2"/);
  assert.match(linksHtml, /href="https:\/\/example\.com\/page\?a=1&amp;b=2"/);
  assert.ok(!linksHtml.includes('data-chapter="undefined"'));

  // Table, code, rule, and the remote tracking image is NOT fetched.
  const ch3 = book.chapters[2];
  const table = ch3.blocks.find((block) => block.kind === 'table');
  assert.ok(table, 'table block should exist');
  assert.match(table.html, /<table>/);
  assert.match(table.html, /<th>名称<\/th>/);
  assert.match(table.html, /<caption>数据表<\/caption>/);
  assert.ok(table.text.includes('单元格') || table.text.includes('甲'));
  const code = ch3.blocks.find((block) => block.kind === 'code');
  assert.equal(code.text, 'const a = 1 < 2;\nconsole.log("ok");');
  assert.ok(ch3.blocks.some((block) => block.kind === 'rule'));
  assert.ok(!ch3.blocks.some((block) => block.kind === 'image'), 'remote images must be dropped');
  assert.ok(book.warnings.some((warning) => warning.includes('外部网络图片')));

  // Cover is exposed as an extra field and tracked for revocation.
  assert.match(book.cover, /^blob:test\//);
  assert.ok(env.created.some((item) => item.url === book.cover));

  // Every inline html is sanitized.
  for (const block of allBlocks(book)) {
    if (!block.html) continue;
    for (const pattern of MALICIOUS_PATTERNS) {
      assert.ok(!pattern.test(block.html), `unsafe markup leaked: ${block.html.slice(0, 120)}`);
    }
  }

  // dispose() revokes every URL exactly once and clears the tracking list.
  const imageUrls = allBlocks(book).filter((block) => block.kind === 'image').map((block) => block.src);
  book.dispose();
  for (const url of [...imageUrls, book.cover]) {
    assert.ok(env.revoked.includes(url), `${url} should be revoked`);
  }
  assert.deepEqual(env.created.filter((item) => !env.revoked.includes(item.url)), []);
  book.dispose();
});

function ch2Blocks(book) {
  return book.chapters[1].blocks;
}

test('EPUB2 NCX fallback builds the same chapter mapping', async () => {
  const book = await parseBook(blobOf(makeEpubFixture({ withNav: false, withNcx: true })), {
    fileName: 'pride-ncx.epub',
  });
  assert.equal(book.format, 'epub');
  assert.equal(book.chapters.length, 4);
  assert.equal(book.toc.length >= 5, true);
  const covered = new Set(book.toc.map((entry) => entry.chapterIndex));
  assert.deepEqual([...covered].sort((a, b) => a - b), [0, 1, 2, 3]);
  const nested = book.toc.find((entry) => entry.anchor === 'sec2');
  assert.ok(nested);
  assert.equal(nested.depth, 1);
  assert.equal(book.chapters[1].title, '第二章 秘密');
  book.dispose();
});

test('EPUB without nav/NCX derives a chapter TOC from headings', async () => {
  const book = await parseBook(blobOf(makeEpubFixture({ withNav: false, withNcx: false })), {
    fileName: 'pride-plain.epub',
  });
  assert.equal(book.chapters.length, 4);
  assert.equal(book.toc.length, 4);
  assert.deepEqual(book.toc.map((entry) => entry.chapterIndex), [0, 1, 2, 3]);
  assert.ok(book.warnings.some((warning) => warning.includes('目录')));
  book.dispose();
});

test('EPUB with OEBPS/Text + OEBPS/images layout resolves relative paths', async () => {
  env.created.length = 0;
  env.revoked.length = 0;
  const book = await parseBook(blobOf(makeEpubFixture({ nestedText: true })), { fileName: 'nested.epub' });
  assert.equal(book.chapters.length, 4);
  const ch2Image = book.chapters[1].blocks.find((block) => block.kind === 'image');
  assert.match(ch2Image.src, /^blob:test\//);
  assert.equal(ch2Image.alt, '插图一');
  const ch4Image = book.chapters[3].blocks.find((block) => block.kind === 'image');
  assert.match(ch4Image.src, /^blob:test\//);
  assert.equal(ch4Image.alt, '尾图');
  const ch2Html = book.chapters[1].blocks.map((block) => block.html || '').join('\n');
  assert.match(ch2Html, /data-chapter="2" data-anchor="sec3"/);
  assert.match(ch2Html, /data-chapter="1" data-anchor="sec2"/);
  book.dispose();
  assert.deepEqual(env.created.filter((item) => !env.revoked.includes(item.url)), []);
});

test('EPUB font obfuscation (encryption.xml with fonts only) is not treated as DRM', async () => {
  const encryptionXml = `<?xml version="1.0" encoding="UTF-8"?>
<encryption xmlns="urn:oasis:names:tc:opendocument:xmlns:container" xmlns:enc="http://www.w3.org/2001/04/xmlenc#">
  <enc:EncryptedData>
    <enc:EncryptionMethod Algorithm="http://www.idpf.org/2008/embedding"/>
    <enc:CipherData><enc:CipherReference URI="OEBPS/fonts/serif.otf"/></enc:CipherData>
  </enc:EncryptedData>
</encryption>`;
  const book = await parseBook(blobOf(makeEpubFixture({
    extraFiles: {
      'META-INF/encryption.xml': encryptionXml,
      'OEBPS/fonts/serif.otf': new Uint8Array([0, 1, 2, 3, 4, 5]),
    },
  })), { fileName: 'fonts-obfuscated.epub' });
  assert.equal(book.chapters.length, 4);
  book.dispose();
});

test('EPUB corrupt input rejects with a Chinese message', async () => {
  await assert.rejects(
    parseBook(new Blob([new Uint8Array([1, 2, 3, 4, 5])]), { fileName: 'broken.epub' }),
    (error) => error instanceof Error && /EPUB/.test(error.message) && /[\u4e00-\u9fff]/.test(error.message),
  );
  const zipWithoutContainer = makeZip({
    mimetype: 'application/epub+zip',
    'OEBPS/content.opf': '<package/>',
  });
  await assert.rejects(
    parseBook(new Blob([zipWithoutContainer]), { fileName: 'no-container.epub' }),
    (error) => error instanceof Error && /container\.xml/.test(error.message),
  );
});

test('EPUB with DRM encryption.xml is rejected clearly', async () => {
  const fixture = makeEpubFixture();
  const files = {
    'mimetype': 'application/epub+zip',
    'META-INF/container.xml': `<?xml version="1.0"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>`,
    'META-INF/encryption.xml': `<?xml version="1.0"?><encryption xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><EncryptedData><EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#aes128-cbc"/><CipherData><CipherReference URI="ch1.xhtml"/></CipherData><EncryptionProperties><EncryptionProperty><Compression Type="application/xhtml+xml"/></EncryptionProperty></EncryptionProperties></EncryptedData></encryption>`,
    'content.opf': '<package><metadata/><manifest/><spine/></package>',
  };
  void fixture;
  await assert.rejects(
    parseBook(new Blob([makeZip(files)]), { fileName: 'drm.epub' }),
    (error) => error instanceof Error && /DRM/.test(error.message),
  );
});
