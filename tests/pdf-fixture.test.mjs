import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { groupPdfText } from "../web/src/pdf/text.js";

const FIXTURE_URL = new URL("../test/fixtures/pdf-simple.pdf", import.meta.url);

// The generic pdfjs-dist build is browser-first; Node tests intentionally use
// the legacy build, which is the supported Node entry point. This also keeps
// the production bundle lazily loaded and out of the test process.
const PDFJS_NODE_ENTRY = "pdfjs-dist/legacy/build/pdf.mjs";

test("fixture PDF loads through PDF.js and groups into paragraphs", async () => {
  const { getDocument } = await import(PDFJS_NODE_ENTRY);
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
