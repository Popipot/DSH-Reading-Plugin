import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { groupPdfText } from "../web/src/pdf/text.js";

const FIXTURE_URL = new URL("../test/fixtures/pdf-simple.pdf", import.meta.url);

// Use the supported Node entry point with the same parser Worker we ship.
const PDFJS_NODE_ENTRY = "pdfjs-dist/legacy/build/pdf.mjs";
const { getDocument, GlobalWorkerOptions } = await import(PDFJS_NODE_ENTRY);
GlobalWorkerOptions.workerSrc = new URL("../dist/reader-assets/pdf.worker.mjs", import.meta.url).href;

test("fixture PDF loads through PDF.js and groups into paragraphs", async () => {
  const data = new Uint8Array(await readFile(FIXTURE_URL));
  const loadingTask = getDocument({
    data,
    verbosity: 0,
    isEvalSupported: false,
  });

  try {
    const documentProxy = await loadingTask.promise;
    assert.equal(documentProxy.numPages, 1);

    const page = await documentProxy.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
    assert.equal(Math.round(viewport.width), 612);
    assert.equal(Math.round(viewport.height), 792);
    assert.equal(page.rotate, 0);

    const textContent = await page.getTextContent();
    assert.ok(textContent.items.length >= 5);

    const { text, segments } = groupPdfText(textContent.items);
    assert.ok(segments.length >= 2, "expected at least two paragraph segments");
    assert.match(text, /Hello dsh-reader PDF/);
    assert.match(
      text,
      /First paragraph line one\. First paragraph line two\./
    );
    assert.match(
      segments[segments.length - 1].src,
      /Second paragraph starts here\./
    );
    assert.equal(
      text,
      segments.map((segment) => segment.src).join("\n\n")
    );

    page.cleanup();
  } finally {
    await loadingTask.destroy();
  }
});

test("the packaged worker fills a missing Type 1 mapping and preserves an explicit mapping", async () => {
  const font = await readFile(new URL("../dist/reader-assets/standard_fonts/FoxitSymbol.pfb", import.meta.url));
  const stream = (body, dictionary = "") => {
    const bytes = Buffer.from(body);
    return Buffer.concat([Buffer.from(`<< /Length ${bytes.length} ${dictionary} >>\nstream\n`), bytes, Buffer.from("\nendstream")]);
  };
  const cmap = "/CIDInit /ProcSet findresource begin 12 dict begin begincmap /CMapType 2 def " +
    "1 begincodespacerange <00> <FF> endcodespacerange 1 beginbfchar <28> <005A> endbfchar " +
    "endcmap CMapName currentdict /CMap defineresource pop end end";
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F 4 0 R >> >> /Contents 8 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /ChromSymbolOTF /FontDescriptor 5 0 R /FirstChar 40 /LastChar 164 /ToUnicode 7 0 R >>",
    "<< /Type /FontDescriptor /FontName /ChromSymbolOTF /Flags 4 /FontBBox [-180 -290 1100 1000] " +
      "/ItalicAngle 0 /Ascent 1000 /Descent -250 /CapHeight 750 /StemV 80 /FontFile3 6 0 R >>",
    stream(font, "/Subtype /Type1C"),
    stream(cmap),
    stream("BT /F 14 Tf 72 720 Td <28A4> Tj ET"),
  ];
  const chunks = [Buffer.from("%PDF-1.4\n")];
  const offsets = ["0000000000 65535 f \n"];
  let position = chunks[0].length;
  for (const [index, object] of objects.entries()) {
    offsets.push(`${String(position).padStart(10, "0")} 00000 n \n`);
    const bytes = Buffer.concat([Buffer.from(`${index + 1} 0 obj\n`), Buffer.from(object), Buffer.from("\nendobj\n")]);
    chunks.push(bytes);
    position += bytes.length;
  }
  chunks.push(Buffer.from(`xref\n0 ${offsets.length}\n${offsets.join("")}trailer\n<< /Root 1 0 R /Size ${offsets.length} >>\nstartxref\n${position}\n%%EOF\n`));
  const task = getDocument({ data: Uint8Array.from(Buffer.concat(chunks)), disableFontFace: true, verbosity: 0 });
  try {
    const page = await (await task.promise).getPage(1);
    // The PDF maps the first character to Z; the font maps the second to ⁄.
    assert.equal((await page.getTextContent()).items.map(item => item.str).join(""), "Z⁄");
  } finally {
    await task.destroy();
  }
});
