// Shared harness for the format-engine tests.
// Sets up jsdom globals *before* the format modules import DOMPurify, and stubs
// URL.createObjectURL / revokeObjectURL so object-URL lifetimes can be asserted.
import { JSDOM } from 'jsdom';
import { zipSync } from 'fflate';

export function setupBrowserEnv() {
  const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.DOMParser = dom.window.DOMParser;
  globalThis.Node = dom.window.Node;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.XMLSerializer = dom.window.XMLSerializer;

  const created = [];
  const revoked = [];
  let sequence = 0;
  const originalCreate = URL.createObjectURL;
  const originalRevoke = URL.revokeObjectURL;
  URL.createObjectURL = (blob) => {
    const url = `blob:test/${sequence += 1}`;
    created.push({ url, blob });
    return url;
  };
  URL.revokeObjectURL = (url) => {
    revoked.push(url);
  };
  return {
    dom,
    created,
    revoked,
    /** URLs created but never revoked. */
    leaked: () => created.map((item) => item.url).filter((url) => !revoked.includes(url)),
    restore() {
      URL.createObjectURL = originalCreate;
      URL.revokeObjectURL = originalRevoke;
    },
  };
}

export function blobOf(input) {
  if (input instanceof Blob) return input;
  if (input instanceof Uint8Array) return new Blob([input]);
  if (input instanceof ArrayBuffer) return new Blob([input]);
  return new Blob([String(input)]);
}

/** Build a ZIP from a map of path -> string | Uint8Array | [Uint8Array, opts]. */
export function makeZip(files) {
  const zippable = {};
  for (const [path, value] of Object.entries(files)) {
    if (value instanceof Uint8Array) {
      zippable[path] = [value, { level: path === 'mimetype' ? 0 : 6 }];
    } else if (Array.isArray(value)) {
      zippable[path] = value;
    } else {
      zippable[path] = [new TextEncoder().encode(String(value)), { level: path === 'mimetype' ? 0 : 6 }];
    }
  }
  return zipSync(zippable);
}

// 1x1 transparent PNG.
const PNG_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
export function pngBytes() {
  return Uint8Array.from(Buffer.from(PNG_BASE64, 'base64'));
}

/**
 * A Gutenberg-style EPUB: EPUB3 nav + spine + relative images + a malicious
 * chapter. `opts.withNav = false, withNcx = true` produces an EPUB2-style book.
 * `opts.nestedText = true` puts chapters in OEBPS/Text and images in
 * OEBPS/images, the layout used by Project Gutenberg's own EPUBs.
 */
export function makeEpubFixture(opts = {}) {
  const {
    withNav = true,
    withNcx = false,
    title = '傲慢与偏见',
    author = 'Jane Austen',
    language = 'zh-CN',
    nestedText = false,
    extraFiles = {},
  } = opts;

  const textDir = nestedText ? 'Text/' : '';
  const chapterImage = nestedText ? '../images/fig1.png' : 'images/fig1.png';
  const chapterImageFromRoot = nestedText ? '../images/fig1.png' : '../OEBPS/images/fig1.png';

  const navXhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>目录</title></head>
<body>
<nav epub:type="toc" id="toc">
  <h1>目录</h1>
  <ol>
    <li><a href="${textDir}ch1.xhtml">第一章 启程</a></li>
    <li><a href="${textDir}ch2.xhtml">第二章 秘密</a>
      <ol><li><a href="${textDir}ch2.xhtml#sec2">本节：秘密</a></li></ol>
    </li>
    <li><a href="${textDir}ch3.xhtml">第三章 真相</a></li>
    <li><a href="${textDir}ch4.xhtml">第四章 尾声</a></li>
  </ol>
</nav>
</body>
</html>`;

  const ncx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head><meta name="dtb:uid" content="urn:uuid:test"/></head>
  <docTitle><text>${title}</text></docTitle>
  <navMap>
    <navPoint id="n1" playOrder="1"><navLabel><text>第一章 启程</text></navLabel><content src="${textDir}ch1.xhtml"/></navPoint>
    <navPoint id="n2" playOrder="2"><navLabel><text>第二章 秘密</text></navLabel><content src="${textDir}ch2.xhtml"/>
      <navPoint id="n2a" playOrder="3"><navLabel><text>本节：秘密</text></navLabel><content src="${textDir}ch2.xhtml#sec2"/></navPoint>
    </navPoint>
    <navPoint id="n3" playOrder="4"><navLabel><text>第三章 真相</text></navLabel><content src="${textDir}ch3.xhtml"/></navPoint>
    <navPoint id="n4" playOrder="5"><navLabel><text>第四章 尾声</text></navLabel><content src="${textDir}ch4.xhtml"/></navPoint>
    <navPoint id="n5" playOrder="6"><navLabel><text>第四章 尾声（补充）</text></navLabel><content src="${textDir}ch4.xhtml#sec4"/></navPoint>
  </navMap>
</ncx>`;

  const ch1 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head><title>第一章</title>
<script>window.__pwned = true;</script>
<style>body{background:url(https://tracker.example/css)}</style>
</head><body>
<h1>第一章 启程</h1>
<p onclick="window.__pwned=1" style="color:red">这是 <b>第一段</b>，包含 <em>强调</em>、<code>行内代码</code> 与 <span class="x">普通文字</span>。
  <a href="javascript:alert(1)">恶意链接</a><iframe src="https://evil.example"></iframe><script>alert('x')</script></p>
<blockquote><p>这是一段引用。</p></blockquote>
<ul><li>列表一</li><li>列表二 <strong>加粗</strong></li></ul>
</body></html>`;

  const ch2 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head><title>第二章</title></head><body>
<h1 id="sec2">第二章 秘密</h1>
<p>前往<a href="${textDir}ch3.xhtml#sec3">第三章</a>，也可以回到<a href="#sec2">本节</a>，或者访问<a href="https://example.com/page?a=1&amp;b=2">外部网站</a>。</p>
<figure>
  <img src="${chapterImage}" alt="插图一" />
  <figcaption>图 1：一幅插图</figcaption>
</figure>
<blockquote><p>引用第一段。</p><p>引用第二段。</p></blockquote>
</body></html>`;

  const ch3 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head><title>第三章</title></head><body>
<h1 id="sec3">第三章 真相</h1>
<p>这一章包含表格、代码与分隔线。 <img src="https://tracker.example/pixel.gif" alt="跟踪像素" /></p>
<table>
  <caption>数据表</caption>
  <thead><tr><th>名称</th><th>数值</th></tr></thead>
  <tbody><tr><td>甲</td><td>1</td></tr><tr><td>乙</td><td>2</td></tr></tbody>
</table>
<pre><code>const a = 1 &lt; 2;
console.log("ok");</code></pre>
<hr />
</body></html>`;

  const ch4 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head><title>第四章</title></head><body>
<h1 id="sec4">第四章 尾声</h1>
<p><img src="${chapterImageFromRoot}" alt="尾图" /></p>
<p>最后一段文字，用于验证正文与翻译文本。</p>
</body></html>`;

  const coverXhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head><title>封面</title></head><body>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1">
  <image xlink:href="images/cover.png" width="1" height="1" />
</svg>
</body></html>`;

  const manifestItems = [
    '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
    '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',
    '<item id="css" href="style.css" media-type="text/css"/>',
    '<item id="cover-image" href="images/cover.png" media-type="image/png" properties="cover-image"/>',
    '<item id="cover-page" href="cover.xhtml" media-type="application/xhtml+xml"/>',
    '<item id="fig1" href="images/fig1.png" media-type="image/png"/>',
    `<item id="ch1" href="${textDir}ch1.xhtml" media-type="application/xhtml+xml"/>`,
    `<item id="ch2" href="${textDir}ch2.xhtml" media-type="application/xhtml+xml"/>`,
    `<item id="ch3" href="${textDir}ch3.xhtml" media-type="application/xhtml+xml"/>`,
    `<item id="ch4" href="${textDir}ch4.xhtml" media-type="application/xhtml+xml"/>`,
  ].filter((item) => (withNav || !item.includes('properties="nav"')) && (withNcx || !item.includes('toc.ncx')));
  const navMeta = withNav ? '<itemref idref="nav" linear="no"/>' : '';

  const opf = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid" version="3.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${title}</dc:title>
    <dc:creator>${author}</dc:creator>
    <dc:language>${language}</dc:language>
    <dc:identifier id="bookid">urn:uuid:test-book</dc:identifier>
    <meta name="cover" content="cover-image"/>
  </metadata>
  <manifest>${manifestItems.join('\n')}</manifest>
  <spine toc="ncx">${navMeta}
    <itemref idref="ch1"/><itemref idref="ch2"/><itemref idref="ch3"/><itemref idref="ch4"/>
  </spine>
  <guide><reference type="cover" title="封面" href="cover.xhtml"/></guide>
</package>`;

  const container = `<?xml version="1.0" encoding="utf-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>`;

  const files = {
    'mimetype': 'application/epub+zip',
    'META-INF/container.xml': container,
    'OEBPS/content.opf': opf,
    'OEBPS/style.css': 'body { font-family: serif; }',
    [`OEBPS/${textDir}ch1.xhtml`]: ch1,
    [`OEBPS/${textDir}ch2.xhtml`]: ch2,
    [`OEBPS/${textDir}ch3.xhtml`]: ch3,
    [`OEBPS/${textDir}ch4.xhtml`]: ch4,
    'OEBPS/cover.xhtml': coverXhtml,
    'OEBPS/images/fig1.png': pngBytes(),
    'OEBPS/images/cover.png': pngBytes(),
    ...extraFiles,
  };
  if (withNav) files['OEBPS/nav.xhtml'] = navXhtml;
  if (withNcx) files['OEBPS/toc.ncx'] = ncx;
  return makeZip(files);
}

/** Reverse-lookup GB18030 bytes for a string (2-byte BMP range is enough for tests). */
export function gb18030Encode(text) {
  const decoder = new TextDecoder('gb18030');
  const table = new Map();
  for (let lead = 0x81; lead <= 0xfe; lead += 1) {
    for (let trail = 0x40; trail <= 0xfe; trail += 1) {
      if (trail === 0x7f) continue;
      const char = decoder.decode(Uint8Array.of(lead, trail));
      if (char.length === 1 && char !== '\uFFFD' && char !== '\u0000' && !table.has(char)) {
        table.set(char, [lead, trail]);
      }
    }
  }
  const bytes = [];
  for (const char of String(text)) {
    const code = char.codePointAt(0);
    if (code < 0x80) {
      bytes.push(code);
      continue;
    }
    const mapped = table.get(char);
    if (!mapped) throw new Error(`GB18030 test encoder has no mapping for ${char}`);
    bytes.push(mapped[0], mapped[1]);
  }
  return Uint8Array.from(bytes);
}

/** Compress bytes in valid PalmDOC LZ77 form using literal runs only. */
export function palmDocCompress(bytes) {
  const output = [];
  let index = 0;
  while (index < bytes.length) {
    const byte = bytes[index];
    if (byte >= 0x09 && byte <= 0x7f) {
      output.push(byte);
      index += 1;
      continue;
    }
    const start = index;
    while (index < bytes.length && !(bytes[index] >= 0x09 && bytes[index] <= 0x7f) && index - start < 8) {
      index += 1;
    }
    output.push(index - start, ...bytes.subarray(start, index));
  }
  return Uint8Array.from(output);
}

/**
 * Build a minimal Palm database. `type` is TEXtREAd or BOOKMOBI.
 * Used to exercise the built-in PalmDOC fallback and header validation.
 */
export function makePalmDatabase({ type = 'TEXtREAd', text = '', compression = 1 } = {}) {
  const encoder = new TextEncoder();
  const textBytes = encoder.encode(text);
  const textRecord = compression === 2 ? palmDocCompress(textBytes) : textBytes;
  const recordCount = 1;
  const record0Length = type === 'BOOKMOBI' ? 32 : 16;
  const headerSize = 78 + 2 * 8 + 2;
  const record0Offset = headerSize;
  const record0 = new Uint8Array(record0Length);
  const record0View = new DataView(record0.buffer);
  record0View.setUint16(0, compression, false);
  record0View.setUint32(4, textBytes.length, false);
  record0View.setUint16(8, recordCount, false);
  record0View.setUint16(10, 4096, false);
  record0View.setUint16(12, 0, false);
  const record1Offset = record0Offset + record0.length;
  const total = record1Offset + textRecord.length;
  const bytes = new Uint8Array(total);
  const name = encoder.encode('Test Book'.padEnd(32, '\u0000'));
  bytes.set(name.subarray(0, 32), 0);
  const dataView = new DataView(bytes.buffer);
  bytes.set(encoder.encode(type === 'BOOKMOBI' ? 'BOOK' : 'TEXt').subarray(0, 4), 60);
  bytes.set(encoder.encode(type === 'BOOKMOBI' ? 'MOBI' : 'REAd').subarray(0, 4), 64);
  dataView.setUint32(68, 1234, false);
  dataView.setUint16(76, 2, false);
  dataView.setUint32(78, record0Offset, false);
  dataView.setUint32(82, 0, false);
  dataView.setUint32(86, record1Offset, false);
  dataView.setUint32(90, 0, false);
  bytes.set(record0, record0Offset);
  bytes.set(textRecord, record1Offset);
  return bytes;
}
