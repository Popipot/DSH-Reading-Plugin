import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blobOf,
  setupBrowserEnv,
  pngBytes,
} from './formats-test-helpers.mjs';

const env = setupBrowserEnv();
const { parseBook } = await import('../web/src/formats/index.js');

const PNG_DATA_URI = `data:image/png;base64,${Buffer.from(pngBytes()).toString('base64')}`;

const UNSAFE_PATTERNS = [
  /<script/i,
  /<iframe/i,
  /<object/i,
  /<embed/i,
  /javascript:/i,
  /onerror\s*=/i,
  /onclick\s*=/i,
  /onmouseover\s*=/i,
  /\sstyle\s*=/i,
];

function assertSanitized(book) {
  for (const chapter of book.chapters) {
    for (const block of chapter.blocks) {
      if (!block.html) continue;
      for (const pattern of UNSAFE_PATTERNS) {
        assert.ok(!pattern.test(block.html), `unsafe markup leaked: ${block.html.slice(0, 160)}`);
      }
    }
  }
}

test('HTML file: metadata, blocks, data-URI image and sanitisation', async () => {
  env.created.length = 0;
  env.revoked.length = 0;
  const html = `<!doctype html>
<html lang="en"><head>
  <title>测试页面</title>
  <meta name="author" content="Alice">
  <script>window.__pwned = true;</script>
  <style>body { background: url(https://tracker.example/x); }</style>
</head><body>
  <h1 onclick="alert(1)">标题</h1>
  <p onmouseover="alert(2)" style="color:red">段落 <b>加粗</b>
    <a href="javascript:alert(1)">坏链</a>
    <a href="https://example.com/a">好链</a>
    <a href="#note">锚点</a></p>
  <ul><li>条目一</li><li>条目二</li></ul>
  <blockquote>引用内容</blockquote>
  <table><tr><td>单元格</td></tr></table>
  <pre><code>const x = 1;</code></pre>
  <hr>
  <p><img src="${PNG_DATA_URI}" alt="内嵌图"></p>
  <p><img src="https://tracker.example/pixel.gif" alt="远程图"></p>
  <iframe src="https://evil.example/"></iframe>
  <object data="https://evil.example/x"></object>
</body></html>`;
  const book = await parseBook(blobOf(new TextEncoder().encode(html)), { fileName: 'page.html' });
  assert.equal(book.format, 'html');
  assert.equal(book.title, '测试页面');
  assert.equal(book.author, 'Alice');
  assert.equal(book.language, 'en');
  assert.equal(book.chapters.length, 1);

  const kinds = new Set(book.chapters[0].blocks.map((block) => block.kind));
  for (const kind of ['heading', 'paragraph', 'list-item', 'quote', 'table', 'code', 'rule', 'image']) {
    assert.ok(kinds.has(kind), `missing ${kind} block`);
  }
  const images = book.chapters[0].blocks.filter((block) => block.kind === 'image');
  assert.equal(images.length, 1, 'only the data-URI image is kept');
  assert.match(images[0].src, /^blob:test\//);
  assert.equal(images[0].alt, '内嵌图');
  assert.ok(book.warnings.some((warning) => warning.includes('外部网络图片')));

  const paragraphHtml = book.chapters[0].blocks
    .filter((block) => block.kind === 'paragraph')
    .map((block) => block.html)
    .join('\n');
  assert.match(paragraphHtml, /data-chapter="0" data-anchor="note"/);
  assert.match(paragraphHtml, /href="https:\/\/example\.com\/a"/);
  assertSanitized(book);

  const imageUrl = images[0].src;
  book.dispose();
  assert.ok(env.revoked.includes(imageUrl));
  assert.deepEqual(env.created.filter((item) => !env.revoked.includes(item.url)), []);
});

test('HTML file: title falls back to first heading, no author/language', async () => {
  const html = '<html><body><h1>只有一个标题</h1><p>内容</p></body></html>';
  const book = await parseBook(blobOf(new TextEncoder().encode(html)), { fileName: 'untitled.html' });
  assert.equal(book.title, '只有一个标题');
  assert.equal(book.author, undefined);
  assert.equal(book.language, undefined);
  book.dispose();
});

test('HTML file rejects documents with no readable content', async () => {
  await assert.rejects(
    parseBook(blobOf(new TextEncoder().encode('<html><head><title>空</title></head><body><script>1</script></body></html>')), { fileName: 'empty.html' }),
    (error) => error instanceof Error && /HTML/.test(error.message) && /[\u4e00-\u9fff]/.test(error.message),
  );
});

test('Markdown: headings, inline markup, lists, quote, code, table, rule, images', async () => {
  env.created.length = 0;
  env.revoked.length = 0;
  const markdown = `# 标题一

这是一个 **加粗** 和 *斜体* 以及 \`代码\` 的段落，包含 [外部链接](https://example.com/a) 和 [锚点](#section)。
还能看到 <script>alert(1)</script> 原文。

## 小节

- 列表 **一**
- 列表二

> 引用一行
> 引用二行

\`\`\`js
const a = 1 < 2;
\`\`\`

| 名称 | 数值 |
| --- | --- |
| 甲 | 1 |

---

![内嵌](${PNG_DATA_URI})
![远程](https://tracker.example/x.png)
`;
  const book = await parseBook(blobOf(new TextEncoder().encode(markdown)), { fileName: 'notes.md' });
  assert.equal(book.format, 'md');
  assert.equal(book.title, '标题一');
  assert.equal(book.chapters.length, 1);
  const blocks = book.chapters[0].blocks;
  const heading1 = blocks.find((block) => block.kind === 'heading' && block.level === 1);
  assert.equal(heading1.text, '标题一');
  const heading2 = blocks.find((block) => block.kind === 'heading' && block.level === 2);
  assert.equal(heading2.text, '小节');
  const paragraph = blocks.find((block) => block.kind === 'paragraph');
  assert.match(paragraph.html, /<strong>加粗<\/strong>/);
  assert.match(paragraph.html, /<em>斜体<\/em>/);
  assert.match(paragraph.html, /<code>代码<\/code>/);
  assert.match(paragraph.html, /data-chapter="0" data-anchor="section"/);
  assert.match(paragraph.html, /href="https:\/\/example\.com\/a"/);
  assert.ok(!paragraph.html.includes('<script>alert(1)</script>'));
  assert.ok(paragraph.text.includes('<script>alert(1)</script>'), 'raw html stays visible as text');
  assert.equal(blocks.filter((block) => block.kind === 'list-item').length, 2);
  const quote = blocks.find((block) => block.kind === 'quote');
  assert.match(quote.text, /引用一行/);
  assert.match(quote.text, /引用二行/);
  const code = blocks.find((block) => block.kind === 'code');
  assert.equal(code.text, 'const a = 1 < 2;');
  const table = blocks.find((block) => block.kind === 'table');
  assert.match(table.html, /<table>/);
  assert.match(table.html, /<th>名称<\/th>/);
  assert.ok(blocks.some((block) => block.kind === 'rule'));
  const images = blocks.filter((block) => block.kind === 'image');
  assert.equal(images.length, 1);
  assert.match(images[0].src, /^blob:test\//);
  assert.ok(book.warnings.some((warning) => warning.includes('外部图片')));
  assertSanitized(book);
  const imageUrl = images[0].src;
  book.dispose();
  assert.ok(env.revoked.includes(imageUrl));
});

test('Markdown: dangerous link protocols are rendered as text', async () => {
  const markdown = 'A [bad](javascript:alert(1)) link and [data](data:text/html;base64,PHNjcmlwdD4=) link.';
  const book = await parseBook(blobOf(new TextEncoder().encode(markdown)), { fileName: 'bad.md' });
  const paragraph = book.chapters[0].blocks[0];
  assert.ok(!paragraph.html.includes('javascript:'));
  assert.ok(!paragraph.html.includes('data:text/html'));
  assert.ok(paragraph.text.includes('bad'));
  assertSanitized(book);
  book.dispose();
});

test('Markdown: empty document rejects with Chinese message', async () => {
  await assert.rejects(
    parseBook(blobOf(new TextEncoder().encode('\n\n   \n')), { fileName: 'empty.md' }),
    (error) => error instanceof Error && /Markdown/.test(error.message) && /[\u4e00-\u9fff]/.test(error.message),
  );
});
