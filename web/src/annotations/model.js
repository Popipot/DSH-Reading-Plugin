/**
 * Annotation model and DOM range math for dsh-reader.
 *
 * The reader does not use the native `Selection` as the source of truth: a
 * flow annotation stores character offsets into each block body, so the mark
 * can be restored after a re-render at a different width, font size or zoom.
 * This module owns that translation between live DOM ranges and model data.
 *
 * Design rules:
 *  - Only text inside `.dshr-block__body` counts. Translation cards live
 *    outside that body and must never shift an offset.
 *  - Nested inline markup is indexed by text node, so <em>/<strong>/<span>
 *    boundaries do not matter.
 *  - Every helper is defensive: a detached node, a removed block or a stale
 *    range returns a clamped value or null, it never throws.
 *  - No React, no IO, no Node built-ins; safe in the browser and in jsdom.
 */

export const HIGHLIGHT_COLORS = Object.freeze([
  { id: 'yellow', label: '黄', value: '#f5d76e' },
  { id: 'green', label: '绿', value: '#8fd18b' },
  { id: 'pink', label: '粉', value: '#f3a6c0' },
  { id: 'blue', label: '蓝', value: '#94c9f0' },
]);

export const HIGHLIGHT_WIDTHS = Object.freeze([
  { id: 'thin', label: '细', value: 4 },
  { id: 'medium', label: '中', value: 9 },
  { id: 'wide', label: '宽', value: 16 },
]);

export const UNDERLINE_COLORS = Object.freeze([
  { id: 'ink', label: '墨', value: '#3f3a33' },
  { id: 'red', label: '朱', value: '#c2543f' },
  { id: 'amber', label: '赭', value: '#a9772b' },
  { id: 'blue', label: '蓝', value: '#3f6f97' },
]);

export const STYLE_LABELS = Object.freeze({
  highlight: '荧光笔',
  underline: '下划线',
  note: '便签',
});

export const ANNOTATION_STYLES = Object.freeze([
  { id: 'highlight', label: STYLE_LABELS.highlight },
  { id: 'underline', label: STYLE_LABELS.underline },
  { id: 'note', label: STYLE_LABELS.note },
]);

export function styleLabel(style) {
  return STYLE_LABELS[style] || '标注';
}

const BLOCK_ATTR = 'data-anno-block';
const BODY_SELECTOR = '.dshr-block__body';
const DEFAULT_WIDTH = 9;
const DEFAULT_STYLE = 'highlight';
const COLOR_PATTERN = /^(?:#(?:[0-9a-f]{3,8})|(?:rgb|hsl)a?\([^)]*\))$/i;

/* ------------------------------------------------------------------------- *
 * Small utilities
 * ------------------------------------------------------------------------- */

function docOf(node) {
  if (!node) return null;
  if (node.ownerDocument) return node.ownerDocument;
  if (node.nodeType === 9) return node;
  return typeof globalThis !== 'undefined' && globalThis.document ? globalThis.document : null;
}

function toInteger(value, fallback = 0) {
  const number = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.trunc(number);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value, digits = 5) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function normalizeText(value) {
  return String(value == null ? '' : value)
    .replace(/\s+/gu, ' ')
    .trim();
}

function isSkippedElement(element) {
  if (!element || element.nodeType !== 1) return false;
  const tag = element.tagName;
  if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEXTAREA' || tag === 'SVG' || tag === 'CANVAS') {
    return true;
  }
  const classList = element.classList;
  if (classList && (classList.contains('dshr-translation') || classList.contains('dshr-anno-ignore'))) return true;
  if (typeof element.hasAttribute === 'function' && element.hasAttribute('data-anno-ignore')) return true;
  return false;
}

/* ------------------------------------------------------------------------- *
 * Text index: the only source of offsets
 * ------------------------------------------------------------------------- */

/**
 * Walk `root` in document order and collect usable text nodes with their
 * starting offsets. Elements that are not reader prose (translation cards,
 * scripts, annotation chrome) are skipped entirely.
 */
function collectTextIndex(root) {
  const nodes = [];
  const starts = [];
  const positions = new Map();
  let total = 0;
  if (!root) return { nodes, starts, positions, total, text: '' };

  const walk = (parent) => {
    for (let child = parent.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        const value = child.nodeValue || '';
        positions.set(child, nodes.length);
        nodes.push(child);
        starts.push(total);
        total += value.length;
      } else if (child.nodeType === 1 && !isSkippedElement(child)) {
        walk(child);
      }
    }
  };
  walk(root);

  let text = '';
  for (let i = 0; i < nodes.length; i += 1) text += nodes[i].nodeValue || '';
  return { nodes, starts, positions, total, text };
}

function makeBoundaryRange(doc, node, offset) {
  if (!doc || !node) return null;
  let range;
  try {
    range = doc.createRange();
    const limit = node.nodeType === 3
      ? (node.nodeValue ? node.nodeValue.length : 0)
      : (node.childNodes ? node.childNodes.length : 0);
    range.setStart(node, clamp(toInteger(offset), 0, limit));
    range.collapse(true);
    return range;
  } catch {
    return null;
  }
}

/** Offset of (node, offset) inside an index, clamped to [0, index.total]. */
function offsetFromIndex(index, root, node, offset) {
  if (!node) return 0;
  if (node.nodeType === 3) {
    const position = index.positions.get(node);
    const value = node.nodeValue || '';
    if (position !== undefined) {
      return index.starts[position] + clamp(toInteger(offset), 0, value.length);
    }
  }

  if (node === root || root.contains(node)) {
    const doc = docOf(root);
    const boundary = makeBoundaryRange(doc, node, offset);
    if (!boundary) return 0;
    const probe = doc.createRange();
    for (let i = 0; i < index.nodes.length; i += 1) {
      try {
        probe.setStart(index.nodes[i], 0);
        probe.collapse(true);
        if (boundary.compareBoundaryPoints(0 /* START_TO_START */, probe) <= 0) {
          return index.starts[i];
        }
      } catch {
        /* keep probing: a detached node must not abort the walk */
      }
    }
    return index.total;
  }

  // The point is outside the root (for example inside a translation card).
  // Clamp it to the nearest edge of the readable body.
  try {
    const position = root.compareDocumentPosition(node);
    if (position & 4 /* DOCUMENT_POSITION_FOLLOWING */) return index.total;
    return 0;
  } catch {
    return 0;
  }
}

function offsetForRangePoint(index, root, node, offset) {
  if (!node) return 0;
  if (root === node || root.contains(node)) return offsetFromIndex(index, root, node, offset);
  try {
    const position = root.compareDocumentPosition(node);
    return position & 4 /* DOCUMENT_POSITION_FOLLOWING */ ? index.total : 0;
  } catch {
    return 0;
  }
}

function pointAtOffset(index, offset) {
  if (!index.nodes.length) return null;
  const target = clamp(toInteger(offset), 0, index.total);
  for (let i = 0; i < index.nodes.length; i += 1) {
    const length = index.nodes[i].nodeValue ? index.nodes[i].nodeValue.length : 0;
    const start = index.starts[i];
    if (target < start + length) {
      return { node: index.nodes[i], offset: target - start };
    }
    if (target === start + length && length > 0) {
      return { node: index.nodes[i], offset: length };
    }
  }
  const last = index.nodes[index.nodes.length - 1];
  return { node: last, offset: last.nodeValue ? last.nodeValue.length : 0 };
}

/* ------------------------------------------------------------------------- *
 * Public range math
 * ------------------------------------------------------------------------- */

/**
 * Character offset of a DOM position inside `root`, counting only prose text.
 * `root` is normally a `.dshr-block__body`; passing the outer `.dshr-block`
 * also works because translation cards are skipped.
 *
 * @returns {number} clamped offset (0 when root/node are unusable)
 */
export function blockTextOffset(root, node, offset) {
  if (!root || !node) return 0;
  const index = collectTextIndex(root);
  return offsetFromIndex(index, root, node, offset);
}

/**
 * Inverse of {@link blockTextOffset}: build a DOM Range covering
 * `[start, end)` of the readable text inside `root`.
 *
 * @returns {Range|null}
 */
export function rangeFromOffsets(root, start, end) {
  if (!root) return null;
  const index = collectTextIndex(root);
  if (!index.nodes.length || index.total === 0) return null;
  let from = clamp(toInteger(start), 0, index.total);
  let to = clamp(toInteger(end), 0, index.total);
  if (to < from) [from, to] = [to, from];
  const startPoint = pointAtOffset(index, from);
  const endPoint = pointAtOffset(index, to);
  const doc = docOf(root);
  if (!doc || !startPoint || !endPoint) return null;
  try {
    const range = doc.createRange();
    range.setStart(startPoint.node, startPoint.offset);
    range.setEnd(endPoint.node, endPoint.offset);
    return range;
  } catch {
    return null;
  }
}

/**
 * Intersection of a live selection range with the readable text of `root`.
 * Parts of the range that fall outside the body (translation text, block
 * chrome) are clamped away.
 *
 * @returns {{start:number,end:number,text:string}|null}
 */
export function selectionRangeText(root, range) {
  if (!root || !range) return null;
  const index = collectTextIndex(root);
  if (index.total === 0) return null;
  const start = clamp(
    offsetForRangePoint(index, root, range.startContainer, range.startOffset),
    0,
    index.total,
  );
  const end = clamp(
    offsetForRangePoint(index, root, range.endContainer, range.endOffset),
    0,
    index.total,
  );
  if (end <= start) return null;
  return { start, end, text: index.text.slice(start, end) };
}

function safeClientRects(range) {
  const rects = [];
  if (!range) return rects;
  try {
    const list = typeof range.getClientRects === 'function' ? range.getClientRects() : null;
    if (list && typeof list.length === 'number') {
      for (let i = 0; i < list.length; i += 1) {
        const rect = list[i];
        if (rect) rects.push(rect);
      }
    }
  } catch {
    /* jsdom/older engines may not implement hit-testing */
  }
  if (rects.length === 0) {
    try {
      const rect = typeof range.getBoundingClientRect === 'function' ? range.getBoundingClientRect() : null;
      if (rect && (rect.width || rect.height)) rects.push(rect);
    } catch {
      /* ignore */
    }
  }
  return rects;
}

function unionRects(rects) {
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  for (let i = 0; i < rects.length; i += 1) {
    const rect = rects[i];
    const width = Number(rect.width) || 0;
    const height = Number(rect.height) || 0;
    if (!width && !height) continue;
    const rectLeft = Number(rect.left) || 0;
    const rectTop = Number(rect.top) || 0;
    left = Math.min(left, rectLeft);
    top = Math.min(top, rectTop);
    right = Math.max(right, rectLeft + width);
    bottom = Math.max(bottom, rectTop + height);
  }
  if (!Number.isFinite(left)) return { left: 0, top: 0, width: 0, height: 0, right: 0, bottom: 0 };
  return {
    left,
    top,
    width: right - left,
    height: bottom - top,
    right,
    bottom,
  };
}

function trimSlice(text, start, end) {
  let from = start;
  let to = end;
  while (from < to && /\s/u.test(text[from])) from += 1;
  while (to > from && /\s/u.test(text[to - 1])) to -= 1;
  return { start: from, end: to, text: text.slice(from, to) };
}

/**
 * Convert the browser Selection into the payload the reader needs for a flow
 * annotation: one `{blockId,start,end,text}` entry per touched block, a quote
 * and a viewport rect for the floating toolbar.
 *
 * Only blocks carrying `data-anno-block` with a `.dshr-block__body` inside are
 * considered; translation cards are ignored, and multi-block selections yield
 * several ranges in document order.
 *
 * @returns {{text:string,rect:object,ranges:Array<{blockId:string,start:number,end:number,text:string}>}|null}
 */
export function collectFlowSelection(container, selection) {
  if (!container || !selection || !selection.rangeCount) return null;
  const doc = docOf(container);
  if (!doc) return null;
  let range;
  try {
    range = selection.getRangeAt(0);
  } catch {
    return null;
  }
  if (!range) return null;
  try {
    if (!container.contains(range.commonAncestorContainer)) return null;
  } catch {
    return null;
  }

  const ranges = [];
  let blocks;
  try {
    blocks = container.querySelectorAll(`[${BLOCK_ATTR}]`);
  } catch {
    return null;
  }
  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i];
    const blockId = block.getAttribute(BLOCK_ATTR);
    if (!blockId) continue;
    const body = block.classList && block.classList.contains('dshr-block__body')
      ? block
      : block.querySelector(BODY_SELECTOR);
    if (!body) continue;
    const index = collectTextIndex(body);
    if (index.total === 0) continue;

    let bodyRange;
    try {
      bodyRange = doc.createRange();
      bodyRange.selectNodeContents(body);
    } catch {
      continue;
    }
    // Spec quirk: compareBoundaryPoints(START_TO_END) compares this range's
    // *end* with the source range's start; END_TO_START compares this start
    // with the source end. Treat the four comparisons as named constants so
    // the clipping logic below stays readable.
    let startsAfterBodyEnd = false;
    let endsBeforeBodyStart = false;
    let startsBeforeBodyStart = false;
    let endsAfterBodyEnd = false;
    try {
      startsAfterBodyEnd = range.compareBoundaryPoints(3 /* END_TO_START: this.start vs body.end */, bodyRange) >= 0;
      endsBeforeBodyStart = range.compareBoundaryPoints(1 /* START_TO_END: this.end vs body.start */, bodyRange) <= 0;
      startsBeforeBodyStart = range.compareBoundaryPoints(0 /* START_TO_START */, bodyRange) < 0;
      endsAfterBodyEnd = range.compareBoundaryPoints(2 /* END_TO_END */, bodyRange) > 0;
    } catch {
      continue;
    }
    if (startsAfterBodyEnd || endsBeforeBodyStart) continue;

    const rawStart = startsBeforeBodyStart
      ? 0
      : offsetFromIndex(index, body, range.startContainer, range.startOffset);
    const rawEnd = endsAfterBodyEnd
      ? index.total
      : offsetFromIndex(index, body, range.endContainer, range.endOffset);
    const start = clamp(toInteger(rawStart), 0, index.total);
    const end = clamp(toInteger(rawEnd), 0, index.total);
    if (end <= start) continue;
    const trimmed = trimSlice(index.text, start, end);
    if (trimmed.end <= trimmed.start) continue;
    ranges.push({ blockId, start: trimmed.start, end: trimmed.end, text: trimmed.text });
  }

  if (ranges.length === 0) return null;
  let text = '';
  for (let i = 0; i < ranges.length; i += 1) {
    if (i > 0) text += '\n';
    text += ranges[i].text;
  }
  text = text.replace(/\u00a0/gu, ' ').trim();
  if (!text) return null;
  return { text, rect: unionRects(safeClientRects(range)), ranges };
}

/**
 * Map the client rects of a selection onto a PDF page frame as normalized
 * `{x,y,w,h}` (0..1). Rects outside the frame are clipped; layout-less ranges
 * (jsdom) yield an empty list.
 *
 * @param {Range} range
 * @param {Element} pageElement `.dshr-pdf-frame` (or any positioned page box)
 * @returns {Array<{x:number,y:number,w:number,h:number}>}
 */
export function normalizedRectsForSelection(range, pageElement) {
  if (!range || !pageElement) return [];
  let pageRect;
  try {
    pageRect = pageElement.getBoundingClientRect();
  } catch {
    return [];
  }
  if (!pageRect) return [];
  const pageWidth = Number(pageRect.width) || 0;
  const pageHeight = Number(pageRect.height) || 0;
  if (pageWidth <= 0 || pageHeight <= 0) return [];
  const pageLeft = Number(pageRect.left) || 0;
  const pageTop = Number(pageRect.top) || 0;
  const pageRight = pageLeft + pageWidth;
  const pageBottom = pageTop + pageHeight;

  const source = safeClientRects(range);
  if (source.length === 0) return [];
  const rects = [];
  for (let i = 0; i < source.length; i += 1) {
    const rect = source[i];
    if (!rect) continue;
    const width = Number(rect.width) || 0;
    const height = Number(rect.height) || 0;
    if (width <= 0 || height <= 0) continue;
    const left = Number(rect.left) || 0;
    const top = Number(rect.top) || 0;
    const clippedLeft = Math.max(left, pageLeft);
    const clippedTop = Math.max(top, pageTop);
    const clippedRight = Math.min(left + width, pageRight);
    const clippedBottom = Math.min(top + height, pageBottom);
    if (clippedRight - clippedLeft < 0.5 || clippedBottom - clippedTop < 0.5) continue;
    rects.push({
      x: round(clamp((clippedLeft - pageLeft) / pageWidth, 0, 1)),
      y: round(clamp((clippedTop - pageTop) / pageHeight, 0, 1)),
      w: round(clamp((clippedRight - clippedLeft) / pageWidth, 0, 1)),
      h: round(clamp((clippedBottom - clippedTop) / pageHeight, 0, 1)),
    });
  }
  rects.sort((a, b) => (a.y - b.y) || (a.x - b.x));
  return rects;
}

/* ------------------------------------------------------------------------- *
 * Quote fallback
 * ------------------------------------------------------------------------- */

/**
 * Whitespace-insensitive normalization that keeps a map back to the original
 * string offsets: every run of whitespace becomes a single space and every
 * normalized character remembers where it came from.
 */
function normalizeWithMap(value) {
  const source = String(value == null ? '' : value);
  let text = '';
  const map = [];
  let pendingSpace = -1;
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (/\s/u.test(char)) {
      if (pendingSpace < 0 && text.length > 0) pendingSpace = i;
      continue;
    }
    if (pendingSpace >= 0) {
      map.push(pendingSpace);
      text += ' ';
      pendingSpace = -1;
    }
    map.push(i);
    text += char;
  }
  return { text, map };
}

function normalizeQuoteOffsets(text, normalizedText, map, from, length) {
  const total = text.length;
  const start = map[from];
  if (start === undefined) return null;
  const end = from + length < map.length ? map[from + length] : total;
  if (!(end > start)) return null;
  return { start, end };
}

/**
 * Locate `quote` inside `text` allowing whitespace differences (paragraph
 * rewrapping, collapsed newlines). Falls back to a long prefix when a stored
 * quote was clipped by a block boundary.
 */
function findQuoteInText(text, quote) {
  if (!text || !quote) return null;
  const source = String(text);
  const needle = String(quote).trim();
  if (!needle) return null;
  const direct = source.indexOf(needle);
  if (direct >= 0) return { start: direct, end: direct + needle.length };

  const normalized = normalizeWithMap(source);
  const normalizedNeedle = normalizeText(needle);
  if (!normalizedNeedle) return null;
  const normalizedIndex = normalized.text.indexOf(normalizedNeedle);
  if (normalizedIndex >= 0) {
    const found = normalizeQuoteOffsets(
      source,
      normalized.text,
      normalized.map,
      normalizedIndex,
      normalizedNeedle.length,
    );
    if (found) return found;
  }

  const prefixBudget = Math.min(normalizedNeedle.length, 48);
  for (let length = prefixBudget; length >= 12; length -= 4) {
    const prefix = normalizedNeedle.slice(0, length);
    const index = normalized.text.indexOf(prefix);
    if (index < 0) continue;
    const start = normalized.map[index];
    if (start === undefined) continue;
    const end = Math.min(source.length, start + normalizedNeedle.length);
    if (end > start) return { start, end };
  }
  return null;
}

function textMatches(slice, expected, quote) {
  const actual = normalizeText(slice);
  if (!actual) return false;
  const candidates = [];
  const stored = normalizeText(expected);
  if (stored) candidates.push(stored);
  const full = normalizeText(quote);
  if (full && full !== stored) candidates.push(full);
  if (candidates.length === 0) return true;
  return candidates.some((candidate) => {
    if (actual === candidate) return true;
    if (actual.length < 8 || candidate.length < 8) return false;
    return actual.includes(candidate) || candidate.includes(actual);
  });
}

function resolvedRange(entry, start, end) {
  const from = clamp(toInteger(start), 0, entry.index.total);
  const to = clamp(toInteger(end), 0, entry.index.total);
  if (to <= from) return null;
  const range = rangeFromOffsets(entry.body, from, to);
  if (!range) return null;
  return {
    blockId: entry.blockId,
    start: from,
    end: to,
    text: entry.index.text.slice(from, to),
    range,
  };
}

function collectFlowBlocks(container) {
  const blocks = [];
  if (!container) return blocks;
  let elements;
  try {
    elements = container.querySelectorAll(`[${BLOCK_ATTR}]`);
  } catch {
    return blocks;
  }
  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    const blockId = element.getAttribute(BLOCK_ATTR);
    if (!blockId) continue;
    const body = element.classList && element.classList.contains('dshr-block__body')
      ? element
      : element.querySelector(BODY_SELECTOR);
    if (!body) continue;
    const index = collectTextIndex(body);
    if (index.total === 0) continue;
    blocks.push({ blockId, body, index });
  }
  return blocks;
}

/**
 * Resolve a stored flow annotation to live DOM ranges. Stored offsets are
 * trusted only when the text they point at still matches; otherwise the quote
 * is located again inside the block, then across the whole chapter. The result
 * never contains overlapping duplicate blocks and is always safe to render.
 *
 * @param {Element} container `.dshr-content` (or `.dshr-content__inner`)
 * @param {object} annotation flow annotation with `ranges` and/or `quote`
 * @returns {Array<{blockId:string,start:number,end:number,text:string,range:Range}>}
 */
export function resolveFlowRanges(container, annotation) {
  const resolved = [];
  if (!container || !annotation) return resolved;
  const blocks = collectFlowBlocks(container);
  if (blocks.length === 0) return resolved;
  const byId = new Map();
  for (let i = 0; i < blocks.length; i += 1) {
    if (!byId.has(blocks[i].blockId)) byId.set(blocks[i].blockId, blocks[i]);
  }
  const quote = typeof annotation.quote === 'string' ? annotation.quote : '';
  const specs = Array.isArray(annotation.ranges) ? annotation.ranges : [];

  for (let i = 0; i < specs.length; i += 1) {
    const spec = specs[i];
    if (!spec || typeof spec !== 'object') continue;
    const entry = byId.get(String(spec.blockId == null ? '' : spec.blockId));
    if (!entry) continue;
    const start = clamp(toInteger(spec.start), 0, entry.index.total);
    const end = clamp(toInteger(spec.end), 0, entry.index.total);
    const hasRange = end > start;
    if (hasRange) {
      const slice = entry.index.text.slice(start, end);
      if (textMatches(slice, spec.text, quote)) {
        const result = resolvedRange(entry, start, end);
        if (result) resolved.push(result);
        continue;
      }
    }
    const fallback = findQuoteInText(entry.index.text, quote || spec.text);
    if (fallback) {
      const result = resolvedRange(entry, fallback.start, fallback.end);
      if (result) resolved.push(result);
      continue;
    }
    // Last resort: keep the stored offsets clamped, the mark may be slightly
    // short or long but the user still sees it on the right block.
    if (hasRange) {
      const result = resolvedRange(entry, start, end);
      if (result) resolved.push(result);
    }
  }

  if (resolved.length === 0 && quote) {
    const parts = quote
      .split(/\n+/u)
      .map((part) => part.trim())
      .filter((part) => part.length >= 2);
    const needles = parts.length > 0 ? parts : [quote.trim()];
    const covered = new Set();
    for (let i = 0; i < blocks.length; i += 1) {
      const entry = blocks[i];
      if (covered.has(entry.blockId)) continue;
      let start = Infinity;
      let end = -Infinity;
      for (let j = 0; j < needles.length; j += 1) {
        const found = findQuoteInText(entry.index.text, needles[j]);
        if (!found) continue;
        start = Math.min(start, found.start);
        end = Math.max(end, found.end);
      }
      if (!Number.isFinite(start) || end <= start) continue;
      covered.add(entry.blockId);
      const result = resolvedRange(entry, start, end);
      if (result) resolved.push(result);
    }
  }

  return resolved;
}

/* ------------------------------------------------------------------------- *
 * Annotation factory
 * ------------------------------------------------------------------------- */

let annotationSequence = 0;

function makeAnnotationId() {
  const cryptoObject = typeof globalThis !== 'undefined' ? globalThis.crypto : undefined;
  if (cryptoObject && typeof cryptoObject.randomUUID === 'function') {
    try {
      return `anno-${cryptoObject.randomUUID()}`;
    } catch {
      /* fall through to the counter */
    }
  }
  annotationSequence += 1;
  return `anno-${Date.now().toString(36)}-${annotationSequence.toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeColor(value, palette) {
  const source = typeof value === 'string' ? value.trim() : '';
  if (source) {
    if (COLOR_PATTERN.test(source)) return source;
    const byId = palette.find((entry) => entry.id === source);
    if (byId) return byId.value;
  }
  return palette[0].value;
}

function normalizeWidth(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return DEFAULT_WIDTH;
  let best = HIGHLIGHT_WIDTHS[1].value;
  let distance = Infinity;
  for (let i = 0; i < HIGHLIGHT_WIDTHS.length; i += 1) {
    const candidate = HIGHLIGHT_WIDTHS[i].value;
    const nextDistance = Math.abs(candidate - numeric);
    if (nextDistance < distance) {
      best = candidate;
      distance = nextDistance;
    }
  }
  return best;
}

function normalizeFlowRanges(ranges) {
  if (!Array.isArray(ranges)) return undefined;
  const normalized = [];
  for (let i = 0; i < ranges.length; i += 1) {
    const item = ranges[i];
    if (!item || typeof item !== 'object') continue;
    const blockId = item.blockId == null ? '' : String(item.blockId).trim();
    if (!blockId) continue;
    const start = Math.max(0, toInteger(item.start));
    const end = Math.max(start, toInteger(item.end));
    if (end <= start) continue;
    normalized.push({
      blockId,
      start,
      end,
      text: typeof item.text === 'string' ? item.text : '',
    });
  }
  return normalized.length > 0 ? normalized : undefined;
}

function normalizePdfRects(rects) {
  if (!Array.isArray(rects)) return undefined;
  const normalized = [];
  for (let i = 0; i < rects.length; i += 1) {
    const item = rects[i];
    if (!item || typeof item !== 'object') continue;
    const x = clamp(Number(item.x), 0, 1);
    const y = clamp(Number(item.y), 0, 1);
    const rawWidth = clamp(Number(item.w), 0, 1 - x);
    const rawHeight = clamp(Number(item.h), 0, 1 - y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (!(rawWidth > 0) || !(rawHeight > 0)) continue;
    normalized.push({
      x: round(x),
      y: round(y),
      w: round(rawWidth),
      h: round(rawHeight),
    });
  }
  return normalized.length > 0 ? normalized : undefined;
}

/**
 * Build the canonical persisted annotation object. `bookId` is owned by the
 * caller, everything else is sanitized and filled with defaults.
 *
 * @param {string} bookId
 * @param {object} payload partial annotation (style/color/width/note/quote/...)
 * @returns {object} annotation
 */
export function createAnnotation(bookId, payload) {
  const source = payload && typeof payload === 'object' ? payload : {};
  const now = Date.now();
  const createdAt = Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : now;
  const updatedAt = Number.isFinite(Number(source.updatedAt)) ? Number(source.updatedAt) : now;
  const style = Object.prototype.hasOwnProperty.call(STYLE_LABELS, source.style) ? source.style : DEFAULT_STYLE;
  const palette = style === 'underline' ? UNDERLINE_COLORS : HIGHLIGHT_COLORS;
  const kind = source.kind === 'pdf' ? 'pdf' : 'flow';

  const annotation = {
    id: source.id ? String(source.id) : makeAnnotationId(),
    bookId: String(bookId || source.bookId || ''),
    kind,
    style,
    color: normalizeColor(source.color, palette),
    width: normalizeWidth(source.width),
    note: typeof source.note === 'string' ? source.note : '',
    quote: typeof source.quote === 'string' ? source.quote.trim() : '',
    createdAt,
    updatedAt: Math.max(createdAt, updatedAt),
  };

  if (kind === 'flow') {
    if (source.chapterId != null && String(source.chapterId).trim()) {
      annotation.chapterId = String(source.chapterId).trim();
    }
    if (Number.isInteger(Number(source.chapterIndex)) && Number(source.chapterIndex) >= 0) {
      annotation.chapterIndex = Number(source.chapterIndex);
    }
    const ranges = normalizeFlowRanges(source.ranges);
    if (ranges) annotation.ranges = ranges;
  } else {
    if (Number.isInteger(Number(source.page)) && Number(source.page) >= 1) {
      annotation.page = Number(source.page);
    }
    const rects = normalizePdfRects(source.rects);
    if (rects) annotation.rects = rects;
  }
  return annotation;
}
