import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { pdfStyles } from "../web/src/pdf/styles.js";
import { groupPdfText } from "../web/src/pdf/text.js";

const viewerSource = await readFile(
  new URL("../web/src/pdf/PdfViewer.jsx", import.meta.url),
  "utf8"
);
const entrySource = await readFile(
  new URL("../web/src/pdf/pdf-entry.js", import.meta.url),
  "utf8"
);
const engineSource = await readFile(new URL('../web/src/pdf/engine.js', import.meta.url), 'utf8');
const buildSource = await readFile(
  new URL("../scripts/build-pdf.mjs", import.meta.url),
  "utf8"
);
const fixture = await readFile(
  new URL("../test/fixtures/pdf-simple.pdf", import.meta.url)
);

test("PdfViewer exports the documented module surface", () => {
  assert.match(viewerSource, /export function PdfViewer\(/);
  assert.match(viewerSource, /export default PdfViewer;/);
  assert.match(viewerSource, /export \{ groupPdfText, pdfStyles \};/);
});

test("PdfViewer never imports pdfjs-dist statically", () => {
  assert.doesNotMatch(
    viewerSource,
    /from\s+["']pdfjs-dist(?:\/[^"']*)?["']/
  );
  assert.doesNotMatch(viewerSource, /import\s*\(\s*["']pdfjs-dist/);
  // The lazy bundle URL and worker URL must stay absolute and Host-controlled.
  assert.match(viewerSource, /\/dsh-reader-assets\//);
  assert.match(viewerSource, /pdf\.bundle\.js/);
  assert.match(engineSource, /pdf\.worker\.mjs/);
  assert.match(engineSource, /GlobalWorkerOptions\.workerSrc/);
});

test("the lazy engine entry re-exports what the viewer needs", () => {
  assert.match(entrySource, /from "pdfjs-dist"/);
  for (const name of ["getDocument", "GlobalWorkerOptions", "TextLayer"]) {
    assert.match(entrySource, new RegExp(`\\b${name}\\b`));
  }
});

test("build-pdf.mjs emits the documented reader assets", () => {
  assert.match(buildSource, /reader-assets/);
  assert.match(buildSource, /pdf\.bundle\.js/);
  assert.match(buildSource, /pdf\.worker\.mjs/);
  assert.match(buildSource, /cmaps/);
  assert.match(buildSource, /standard_fonts/);
  assert.match(buildSource, /format: "esm"/);
});

test("pdfStyles is prefixed, theme-aware and includes the PDF.js text layer", () => {
  assert.equal(typeof pdfStyles, "string");
  assert.ok(pdfStyles.length > 5000);
  assert.match(pdfStyles, /\.dshr-pdf-root/);
  assert.match(pdfStyles, /\.dshr-pdf-text-layer/);
  assert.match(pdfStyles, /\.dshr-pdf-text-layer\[data-main-rotation="90"\]/);
  assert.match(pdfStyles, /\[data-ds-dark-theme\]/);
  assert.match(pdfStyles, /@media \(prefers-color-scheme: dark\)/);
  // No unscoped rules that could restyle the whole host app.
  assert.doesNotMatch(pdfStyles, /(^|\n)\s*\.textLayer\s*\{/);
  assert.doesNotMatch(pdfStyles, /(^|\n)\s*body\s*\{/);
});

test("groupPdfText stays a pure exported helper", () => {
  const result = groupPdfText([]);
  assert.deepEqual(result, { text: "", segments: [] });
});

test("the checked-in PDF fixture is a valid PDF header", () => {
  assert.equal(fixture.subarray(0, 5).toString("latin1"), "%PDF-");
  assert.ok(fixture.length > 500);
  assert.match(fixture.subarray(-20).toString("latin1"), /%%EOF/);
});
