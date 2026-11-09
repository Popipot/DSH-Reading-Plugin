import { normalizedRectsForSelection } from '../annotations/model.js';

const normalizeQuote = value => String(value ?? '').replace(/\s+/gu, ' ').trim();

export function capturePdfAnchor(range, layer, frame, page) {
  if (!layer?.contains(range.startContainer) || !layer.contains(range.endContainer)) return null;
  const prefix = range.cloneRange();
  prefix.selectNodeContents(layer);
  prefix.setEnd(range.startContainer, range.startOffset);
  const start = prefix.toString().length;
  const end = start + range.toString().length;
  const selected = end > start && rangeAtOffsets(layer, start, end);
  const rects = selected ? normalizedRectsForSelection(selected, frame) : [];
  return validRects(rects) ? { version: 1, page, start, end, rects } : null;
}

function validRects(rects) {
  return Array.isArray(rects) && rects.length > 0 && rects.every(rect => rect
    && [rect.x, rect.y, rect.w, rect.h].every(Number.isFinite)
    && rect.x >= 0 && rect.y >= 0 && rect.w > 0 && rect.h > 0
    && rect.x + rect.w <= 1.0001 && rect.y + rect.h <= 1.0001);
}

function geometryMatches(saved, actual) {
  if (!validRects(saved) || !validRects(actual) || saved.length !== actual.length) return false;
  return saved.every((rect, index) => {
    const other = actual[index];
    const x = rect.x + rect.w / 2, y = rect.y + rect.h / 2;
    const ox = other.x + other.w / 2, oy = other.y + other.h / 2;
    return Math.abs(x - ox) <= Math.min(.012, rect.w / 3)
      && Math.abs(y - oy) <= Math.min(.012, rect.h / 3);
  });
}

function rangeAtOffsets(layer, start, end) {
  const document = layer.ownerDocument;
  const nodes = document.createTreeWalker(layer, 4);
  let position = 0, startNode = null, startOffset = 0;
  for (let node = nodes.nextNode(); node; node = nodes.nextNode()) {
    const next = position + node.length;
    if (!startNode && start < next) { startNode = node; startOffset = start - position; }
    if (startNode && end <= next) {
      const range = document.createRange();
      range.setStart(startNode, startOffset);
      range.setEnd(node, end - position);
      return range;
    }
    position = next;
  }
  return null;
}

function rangeQuote(range) {
  const content = range.cloneContents();
  for (const breakElement of content.querySelectorAll('br')) breakElement.replaceWith('\n');
  return normalizeQuote(content.textContent);
}

export function resolvePdfAnchor(anchor, quote, frame) {
  if (!frame || anchor?.version !== 1 || anchor.page !== Number(frame.dataset.page)
    || !Number.isSafeInteger(anchor.start) || !Number.isSafeInteger(anchor.end)
    || anchor.start < 0 || anchor.end <= anchor.start || !validRects(anchor.rects)) return null;
  const layer = frame.querySelector('.dshr-pdf-text-layer');
  const range = layer && rangeAtOffsets(layer, anchor.start, anchor.end);
  if (!range) return null;
  const selected = rangeQuote(range);
  if (!selected || selected !== normalizeQuote(quote)) return null;
  const rects = normalizedRectsForSelection(range, frame);
  return geometryMatches(anchor.rects, rects) ? rects : null;
}
