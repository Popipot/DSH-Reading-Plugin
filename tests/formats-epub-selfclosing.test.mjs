import test from 'node:test';
import assert from 'node:assert/strict';
import { setupBrowserEnv, makeZip, blobOf } from './formats-test-helpers.mjs';

// Regression: Gutenberg/Pandoc XHTML often contains self-closing inline
// anchors (`<h2><a id="chap01"/>Title</h2>`). Parsing those documents with the
// HTML parser leaves the <a> open, nesting every later paragraph inside it and
// collapsing the whole chapter into one block. EPUB chapters must be parsed as
// XML first.
const nav = `<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Book</title></head>
<body><nav epub:type="toc"><ol><li><a href="ch1.xhtml">Chapter One</a></li></ol></nav></body>
</html>`;

const chapter = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head><title>One</title></head>
<body><div class="chapter">
<h2><a id="chap01"/>Chapter One</h2>
<p>First paragraph.</p>
<p>Second paragraph with <i>inline</i> markup.</p>
<p>Third paragraph.</p>
</div></body></html>`;

const opf = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="id">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="id">urn:test</dc:identifier><dc:title>Fixture</dc:title><dc:language>en</dc:language>
</metadata>
<manifest>
<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
<item id="ch1" href="ch1.xhtml" media-type="application/xhtml+xml"/>
</manifest>
<spine><itemref idref="ch1"/></spine>
</package>`;

test('EPUB: self-closing inline anchor does not swallow the chapter paragraphs', async () => {
  const env = setupBrowserEnv();
  try {
    const { parseBook } = await import('../web/src/formats/index.js');
    const zip = makeZip({
      mimetype: 'application/epub+zip',
      'META-INF/container.xml': `<?xml version="1.0"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>`,
      'OEBPS/content.opf': opf,
      'OEBPS/nav.xhtml': nav,
      'OEBPS/ch1.xhtml': chapter,
    });
    const book = await parseBook(blobOf(zip), { fileName: 'fixture.epub' });
    const blocks = book.chapters[0].blocks;
    const paragraphs = blocks.filter((block) => block.kind === 'paragraph');
    assert.equal(paragraphs.length, 3, `expected 3 paragraphs, got ${paragraphs.length}`);
    assert.equal(paragraphs[0].text, 'First paragraph.');
    assert.equal(paragraphs[2].text, 'Third paragraph.');
    assert.ok(paragraphs[1].html.includes('<i>inline</i>'));
    assert.equal(book.toc[0].title, 'Chapter One');
  } finally {
    env.restore();
  }
});
