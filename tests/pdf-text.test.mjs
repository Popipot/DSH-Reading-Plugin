import assert from "node:assert/strict";
import { test } from "node:test";

import {
  groupPdfText,
  extractPdfParagraphs,
  __textInternals,
} from "../web/src/pdf/text.js";

const { LONG_SEGMENT_LIMIT } = __textInternals;

/**
 * Fabricate a PDF.js text item. `width` defaults to a rough latin estimate so
 * tests do not need to be precise unless they assert on geometric joins.
 */
function item(str, options = {}) {
  const {
    x = 72,
    y = 700,
    width = str.length * 6,
    height = 12,
    hasEOL = false,
  } = options;
  return {
    str,
    dir: "ltr",
    width,
    height,
    transform: [1, 0, 0, 1, x, y],
    fontName: "g_d0_f1",
    hasEOL,
  };
}

test("empty and non-array input yields an empty result", () => {
  for (const input of [undefined, null, [], [{ type: "beginMarkedContent" }]]) {
    assert.deepEqual(groupPdfText(input), { text: "", segments: [] });
  }
});

test("groups two paragraphs and joins wrapped lines", () => {
  const items = [
    item("The quick brown fox", { y: 700, hasEOL: true }),
    item("jumps over the lazy dog.", { y: 685, hasEOL: true }),
    item("Second paragraph starts here.", { y: 655, hasEOL: true }),
    item("And it continues on this line.", { y: 640, hasEOL: true }),
  ];
  const { text, segments } = groupPdfText(items);

  assert.equal(segments.length, 2);
  assert.equal(
    segments[0].src,
    "The quick brown fox jumps over the lazy dog."
  );
  assert.equal(
    segments[1].src,
    "Second paragraph starts here. And it continues on this line."
  );
  assert.equal(
    text,
    segments.map((segment) => segment.src).join("\n\n")
  );
  assert.ok(segments.every((segment) => typeof segment.src === "string"));
});

test("inserts a space for same-line runs separated by a horizontal gap", () => {
  const items = [
    item("Hello", { width: 30, hasEOL: false }),
    item("world", { x: 108, width: 30, hasEOL: true }),
  ];
  assert.equal(groupPdfText(items).segments[0].src, "Hello world");
});

test("preserves a raised exponent attached to a mathematical letter", () => {
  const runs = [
    item("(", { x: 520.168, y: 465.317, width: 3.318, height: 9.9626 }),
    item("𝑁", { x: 524.263, y: 465.317, width: 6.645, height: 9.9626 }),
    item("2", { x: 531.715, y: 468.934, width: 3.972, height: 6.9738 }),
    item(")", { x: 536.184, y: 465.317, width: 3.318, height: 9.9626 }),
  ];
  const [segment] = groupPdfText(runs, { metadata: true }).segments;
  assert.equal(segment.src, "(𝑁²)");
  assert.deepEqual(segment.itemIndices, [0, 1, 2, 3]);
  runs[2] = item("2", { x: 531.715, y: 465.317, width: 3.972, height: 9.9626 });
  assert.equal(groupPdfText(runs).text, "(𝑁2)");
});

test("reconstructs a raised signed exponent without changing a baseline subtraction", () => {
  const makeFormula = y => [
    item("𝑂(𝑀", { x: 10, y: 200, width: 20, height: 10 }),
    item("−", { x: 30.5, y, width: 4, height: 7 }),
    item("1", { x: 34.5, y, width: 4, height: 7 }),
    item(")", { x: 39, y: 200, width: 4, height: 10 }),
    item("up to 9× fewer", { x: 50, y: 200, width: 60, height: 10 }),
  ];
  const [raised] = extractPdfParagraphs(makeFormula(203.6), 1, 612).segments;
  assert.equal(raised.src, "𝑂(𝑀⁻¹) up to 9× fewer");
  assert.deepEqual(raised.protectedTokens, ["𝑂(𝑀⁻¹)", "9×"]);
  assert.deepEqual(raised.itemIndices, [0, 1, 2, 3, 4]);
  assert.equal(groupPdfText(makeFormula(200)).text, "𝑂(𝑀−1) up to 9× fewer");
});

test("keeps a stacked reciprocal radical and its subscript in a single protected formula", () => {
  const runs = [
    item("Scale by", { x: 390, y: 179, width: 47, height: 9.96 }),
    item("1", { x: 446.27, y: 182.93, width: 3.97, height: 6.97 }),
    item("√", { x: 440.73, y: 180.22, width: 6.54, height: 6.97 }),
    item("d", { x: 447.27, y: 174.8, width: 4.15, height: 6.97 }),
    item("k", { x: 451.42, y: 173.74, width: 3.78, height: 4.98 }),
  ];
  const [segment] = extractPdfParagraphs(runs, 4, 612).segments;
  assert.equal(segment.src, "Scale by 1/√d_k");
  assert.ok(segment.protectedTokens.includes("1/√d_k"));
  assert.deepEqual(segment.itemIndices, [0, 1, 2, 3, 4]);
  assert.equal(runs[2].str, "√");
  runs[1] = item("1", { x: 439, y: 179, width: 3.97, height: 6.97 });
  assert.doesNotMatch(extractPdfParagraphs(runs, 4, 612).text, /1\//u);
});

test("does not insert spaces between CJK runs", () => {
  const items = [
    { ...item("你好", { width: 24, hasEOL: false }), height: 12 },
    { ...item("世界", { x: 96, width: 24, hasEOL: true }), height: 12 },
  ];
  assert.equal(groupPdfText(items).segments[0].src, "你好世界");
});

test("joins hyphenated line wraps without a stray space", () => {
  const items = [
    item("a well-", { y: 700, width: 42, hasEOL: true }),
    item("known fact", { y: 688, width: 60, hasEOL: true }),
  ];
  assert.equal(groupPdfText(items).segments[0].src, "a well-known fact");
});

test("starts a new segment on a font-size change", () => {
  const items = [
    item("Chapter One", { y: 720, height: 22, width: 120, hasEOL: true }),
    item("Body text begins here.", { y: 690, height: 12, hasEOL: true }),
  ];
  const { segments } = groupPdfText(items);
  assert.equal(segments.length, 2);
  assert.equal(segments[0].src, "Chapter One");
  assert.equal(segments[1].src, "Body text begins here.");
});

test("starts a new segment on first-line indentation", () => {
  const items = [
    item("First paragraph line one", { x: 72, y: 700, hasEOL: true }),
    item("first paragraph line two", { x: 72, y: 685, hasEOL: true }),
    item("indented new paragraph", { x: 90, y: 670, hasEOL: true }),
  ];
  const { segments } = groupPdfText(items);
  assert.equal(segments.length, 2);
  assert.equal(
    segments[0].src,
    "First paragraph line one first paragraph line two"
  );
  assert.equal(segments[1].src, "indented new paragraph");
});

test("ignores marked-content items without a str", () => {
  const items = [
    { type: "beginMarkedContent", id: "m1" },
    item("Visible text", { hasEOL: true }),
    { type: "endMarkedContent" },
    { type: "beginMarkedContent", id: "m2" },
    item("More text", { y: 688, hasEOL: true }),
    { type: "endMarkedContent" },
  ];
  assert.equal(groupPdfText(items).segments[0].src, "Visible text More text");
});

test("does not mutate the caller's items", () => {
  const items = [item("Hello", { hasEOL: true })];
  const snapshot = JSON.stringify(items);
  groupPdfText(items);
  assert.equal(JSON.stringify(items), snapshot);
});

test("splits oversized paragraphs into translation-sized segments", () => {
  const sentence = "This is a sentence that keeps repeating. ";
  const longText = sentence.repeat(
    Math.ceil((LONG_SEGMENT_LIMIT * 2.5) / sentence.length)
  );
  const { segments } = groupPdfText([item(longText, { hasEOL: true })]);

  assert.ok(segments.length >= 2, "expected the long paragraph to split");
  assert.ok(
    segments.every((segment) => segment.src.length <= LONG_SEGMENT_LIMIT),
    "no segment should exceed the configured limit"
  );
  assert.ok(
    segments.every((segment) => /\.$/.test(segment.src)),
    "segments should preferably end on a sentence boundary"
  );
});

test("copes with items that have no geometry", () => {
  const items = [
    { str: "line one", hasEOL: true },
    { str: "line two", hasEOL: true },
    { str: "line three", hasEOL: true },
  ];
  const { text, segments } = groupPdfText(items);
  assert.equal(segments.length, 1);
  assert.equal(text, "line one line two line three");
});
