/**
 * Pure text-shaping helpers for the PDF engine.
 *
 * `groupPdfText(items)` turns the flat `items` array produced by
 * `PDFPageProxy.getTextContent()` into whole-page text plus translation-sized
 * paragraph segments. It deliberately has no dependency on pdfjs-dist, DOM or
 * Node built-ins so it can be unit tested with fabricated items.
 *
 * Item shape (only these fields are read):
 *   {
 *     str: string,
 *     transform?: [a, b, c, d, e, f], // e/f are the glyph-run origin in PDF space
 *     width?: number,                 // run advance width in PDF space
 *     height?: number,                // font height in PDF space
 *     hasEOL?: boolean,               // this run ends a line
 *     dir?: string,
 *   }
 * Marked-content items (beginMarkedContent / endMarkedContent ...) have no
 * `str` and are ignored.
 */

const CJK_RE =
  /[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/;

const SENTENCE_END_RE = /[.。！？!?；;…]$/;
const LONG_SEGMENT_LIMIT = 1400;

function isCjkChar(ch) {
  return !!ch && CJK_RE.test(ch);
}

function clampTextWhitespace(value) {
  return String(value)
    .replace(/\u0000/g, "")
    .replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g, " ")
    .replace(/\s+/g, " ");
}

function finiteNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function readGeometry(item) {
  const t = item && item.transform;
  if (!Array.isArray(t) || t.length < 6) {
    return null;
  }
  const x = finiteNumber(t[4]);
  const y = finiteNumber(t[5]);
  if (x === null || y === null) {
    return null;
  }
  const width = finiteNumber(item.width);
  const height = finiteNumber(item.height);
  return {
    x,
    y,
    width: width === null ? null : Math.abs(width),
    height: height === null || height <= 0 ? null : height,
  };
}

function estimateRunWidth(str, height) {
  // Only used when an item has no usable width. CJK glyphs are roughly one em
  // wide, latin text roughly half an em.
  let em = 0;
  for (const ch of str) {
    em += isCjkChar(ch) ? 1 : 0.5;
  }
  return em * (height || 10);
}

function createLine(geometry) {
  return {
    text: "",
    startX: geometry ? geometry.x : 0,
    endX: geometry ? geometry.x : 0,
    y: geometry ? geometry.y : 0,
    height: geometry && geometry.height ? geometry.height : 0,
    hasGeometry: !!geometry,
  };
}

function appendRunToLine(line, raw, geometry) {
  const text = clampTextWhitespace(raw);
  if (!text) {
    return;
  }

  let separator = "";
  if (line.text) {
    const prevChar = line.text[line.text.length - 1];
    const nextChar = text[0];
    if (prevChar === " " || nextChar === " " || line.text.endsWith(" ")) {
      separator = "";
    } else if (isCjkChar(prevChar) || isCjkChar(nextChar)) {
      separator = "";
    } else if (geometry && line.hasGeometry) {
      const gap = geometry.x - line.endX;
      const em = Math.max(line.height || 0, geometry.height || 0, 1);
      separator = gap > em * 0.18 ? " " : "";
    }
  }

  line.text = (line.text + separator + text).replace(/^ +/, "");

  if (geometry && line.hasGeometry) {
    const advance =
      geometry.width === null
        ? estimateRunWidth(text, geometry.height || line.height)
        : geometry.width;
    line.endX = Math.max(line.endX, geometry.x + advance);
    line.startX = Math.min(line.startX, geometry.x);
    if (geometry.height) {
      line.height = Math.max(line.height, geometry.height);
    }
  }
}

function lineStartsNewLine(previousLine, geometry, forcedBreak) {
  if (!previousLine || forcedBreak) {
    return true;
  }
  if (!geometry || !previousLine.hasGeometry) {
    return false;
  }
  const height = Math.max(previousLine.height || 0, geometry.height || 0, 1);
  const dy = Math.abs(geometry.y - previousLine.y);
  // Normal leading is roughly 1.0-1.4 x the font height; a baseline jump
  // beyond that is a new line even when the producer forgot to set hasEOL.
  if (dy > height * 0.58) {
    return true;
  }
  // A run that starts back to the left after visible horizontal progress is a
  // wrapped line.
  if (
    geometry.x < previousLine.endX - height * 2 &&
    previousLine.endX - previousLine.startX > height
  ) {
    return true;
  }
  return false;
}

function blocksBreak(block, line) {
  const previous = block.lastLine;
  if (!previous) {
    return false;
  }
  const previousHeight = previous.height || 10;
  const lineHeight = line.height || previousHeight;
  const em = Math.max(previousHeight, lineHeight, 1);
  const baselineDelta = previous.y - line.y;

  // Next run above the previous one (column / reading-order restart).
  if (baselineDelta < -em * 1.2) {
    return true;
  }

  // Noticeably larger leading than normal line spacing: paragraph gap.
  if (baselineDelta > em * 1.68) {
    return true;
  }

  // Headings / captions / footnotes have a different point size.
  const ratio = lineHeight / previousHeight;
  if (ratio > 1.18 || ratio < 0.84) {
    return true;
  }

  // First-line indentation relative to the block's left margin.
  if (line.startX - block.leftX > em * 1.25) {
    return true;
  }

  // A short line that ends a sentence and stalls noticeably before the next
  // baseline is almost always a paragraph break (for PDFs with generous
  // paragraph spacing below the 1.68 em threshold above).
  if (
    SENTENCE_END_RE.test(previous.text) &&
    baselineDelta > em * 1.35 &&
    previous.endX < block.rightX - em * 2
  ) {
    return true;
  }

  return false;
}

function joinLines(lines) {
  let out = "";
  for (const line of lines) {
    const text = line.text.trim();
    if (!text) {
      continue;
    }
    if (!out) {
      out = text;
      continue;
    }
    const prevChar = out[out.length - 1];
    const nextChar = text[0];
    if (prevChar === "-" || isCjkChar(prevChar) || isCjkChar(nextChar)) {
      out += text;
    } else {
      out += " " + text;
    }
  }
  return out;
}

function splitLongSegment(text) {
  if (text.length <= LONG_SEGMENT_LIMIT) {
    return [text];
  }
  const parts = [];
  let rest = text;
  while (rest.length > LONG_SEGMENT_LIMIT) {
    const lowerBound = Math.floor(LONG_SEGMENT_LIMIT * 0.55);
    const windowEnd = Math.min(rest.length, LONG_SEGMENT_LIMIT);
    let cut = -1;
    for (let i = windowEnd; i > lowerBound; i -= 1) {
      if (SENTENCE_END_RE.test(rest[i - 1]) || rest[i - 1] === "\n") {
        cut = i;
        break;
      }
    }
    if (cut <= 0) {
      cut = rest.lastIndexOf(" ", windowEnd);
      if (cut < lowerBound) {
        cut = windowEnd;
      }
    }
    const piece = rest.slice(0, cut).trim();
    if (piece) {
      parts.push(piece);
    }
    rest = rest.slice(cut).trim();
  }
  if (rest) {
    parts.push(rest);
  }
  return parts;
}

/**
 * Group raw PDF.js text items into page text and paragraph segments.
 *
 * @param {Array<object>} items - items from `getTextContent()` (may be nullish)
 * @returns {{ text: string, segments: Array<{ src: string }> }}
 */
export function groupPdfText(items, { metadata = false } = {}) {
  const lines = [];
  let currentLine = null;
  let forcedBreak = false;

  if (Array.isArray(items)) {
    for (const [index, item] of items.entries()) {
      if (!item || typeof item.str !== "string") {
        continue;
      }
      if (!item.str.trim()) {
        if (item.hasEOL) {
          forcedBreak = true;
        }
        continue;
      }

      const geometry = readGeometry(item);
      if (lineStartsNewLine(currentLine, geometry, forcedBreak)) {
        currentLine = createLine(geometry);
        currentLine.itemIndices = [];
        lines.push(currentLine);
      }
      appendRunToLine(currentLine, item.str, geometry);
      currentLine.itemIndices.push(item.__pdfItemIndex ?? index);
      forcedBreak = !!item.hasEOL;
    }
  }

  const blocks = [];
  let currentBlock = null;
  for (const line of lines) {
    if (!line.text.trim()) {
      continue;
    }
    if (!currentBlock || blocksBreak(currentBlock, line)) {
      currentBlock = {
        lines: [line],
        lastLine: line,
        leftX: line.startX,
        rightX: line.endX,
      };
      blocks.push(currentBlock);
    } else {
      currentBlock.lines.push(line);
      currentBlock.lastLine = line;
      currentBlock.leftX = Math.min(currentBlock.leftX, line.startX);
      currentBlock.rightX = Math.max(currentBlock.rightX, line.endX);
    }
  }

  const segments = [];
  for (const block of blocks) {
    const text = joinLines(block.lines);
    for (const piece of splitLongSegment(text)) {
      const src = piece.trim();
      if (src) {
        segments.push({ src, ...(metadata ? { itemIndices: block.lines.flatMap(line => line.itemIndices) } : {}) });
      }
    }
  }

  return {
    text: segments.map((segment) => segment.src).join("\n\n"),
    segments,
  };
}

export const __textInternals = {
  // Exposed for tests only; not part of the public contract.
  splitLongSegment,
  LONG_SEGMENT_LIMIT,
};

export default groupPdfText;

// Reorder only when substantial text on both sides provides strong evidence of
// a two-column gutter. Wide title/abstract lines separate horizontal bands.
export function orderPdfTextItems(items, pageWidth) {
  const indexed = (items || []).filter(item => typeof item?.str === 'string').map((item, index) => ({ ...item, __pdfItemIndex: index }));
  // Preserve indices from the original array, including marked-content records.
  let index = 0;
  for (let original = 0; original < (items || []).length; original += 1) {
    if (typeof items[original]?.str === 'string') indexed[index++].__pdfItemIndex = original;
  }
  if (!pageWidth) return indexed;
  const long = indexed.filter(item => item.str.trim().length > 15 && item.width > pageWidth * 0.12);
  const left = long.filter(item => item.transform?.[4] < pageWidth * 0.3 && item.transform[4] + item.width < pageWidth * 0.53);
  const right = long.filter(item => item.transform?.[4] >= pageWidth * 0.48);
  if (left.length < 4 || right.length < 4) return indexed;
  const wideYs = [...new Set(long.filter(item => item.transform?.[4] < pageWidth * 0.4 && item.transform[4] + item.width > pageWidth * 0.6)
    .map(item => Math.round(item.transform[5])))].sort((a, b) => b - a);
  const key = item => {
    const y = item.transform?.[5] || 0;
    const band = wideYs.filter(wideY => wideY > y + 3).length * 2;
    const wide = wideYs.some(wideY => Math.abs(wideY - y) <= 3);
    return [band + (wide ? 1 : 0), wide ? 0 : item.transform?.[4] >= pageWidth * 0.48 ? 2 : 1, -y, item.transform?.[4] || 0];
  };
  return indexed.sort((a, b) => {
    const ka = key(a), kb = key(b);
    for (let i = 0; i < ka.length; i += 1) if (ka[i] !== kb[i]) return ka[i] - kb[i];
    return a.__pdfItemIndex - b.__pdfItemIndex;
  });
}

export function extractPdfParagraphs(items, page, pageWidth) {
  const grouped = groupPdfText(orderPdfTextItems(items, pageWidth), { metadata: true });
  return { text: grouped.text, segments: grouped.segments.map((segment, index) => ({
    ...segment, id: `p${page}-s${index}`,
    protectedTokens: [...new Set(segment.itemIndices.map(itemIndex => items[itemIndex]?.str?.trim())
      .filter(text => text && /[∑∫√≈≠≤≥∂∞]/u.test(text) && !/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(text)))],
  })) };
}
