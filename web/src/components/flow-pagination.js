export const BOOK_PADDING_TOP = 48;
export const BOOK_PADDING_BOTTOM = 56;
const EPSILON = 0.5;

// Break at whole text lines. Oversized objects must advance by a viewport's
// usable area; snapping back to their top would make the page impossible to turn.
export function buildFlowPageStarts(lines, viewport) {
  const usable = Math.max(1, viewport - BOOK_PADDING_TOP - BOOK_PADDING_BOTTOM);
  const ordered = lines.filter(line => Number.isFinite(line.top) && line.bottom > line.top)
    .toSorted((a, b) => a.top - b.top);
  const starts = [0];
  for (const line of ordered) {
    while (line.bottom > starts.at(-1) + BOOK_PADDING_TOP + usable + EPSILON) {
      const current = starts.at(-1);
      const aligned = line.top - BOOK_PADDING_TOP;
      starts.push(aligned > current + EPSILON ? aligned : current + usable);
    }
  }
  return starts;
}

export function pageIndexOfTop(starts, top) {
  let low = 0;
  let high = starts.length - 1;
  while (low < high) {
    const middle = Math.ceil((low + high) / 2);
    if (starts[middle] <= top + EPSILON) low = middle;
    else high = middle - 1;
  }
  return low;
}

// Only explicit navigation or a layout replacement changes the cursor. Native
// scroll notifications and animation completions cannot infer a different page.
export function createPageCursor() {
  let starts = [0];
  let index = 0;
  return {
    get page() { return index + 1; },
    get pages() { return starts.length; },
    get top() { return starts[index]; },
    get starts() { return starts; },
    replace(next, anchorTop) {
      starts = next.length ? next : [0];
      index = pageIndexOfTop(starts, Math.max(0, anchorTop || 0));
    },
    turn(direction) {
      const next = Math.max(0, Math.min(starts.length - 1, index + Math.sign(direction)));
      if (next === index) return false;
      index = next;
      return true;
    },
  };
}

export function collectFlowLines(scrollElement, stage) {
  const rootRect = scrollElement.getBoundingClientRect();
  const records = [];
  const add = (rect, source) => {
    if (rect.height < 2 || rect.width < 0.1) return;
    records.push({ top: rect.top - rootRect.top + scrollElement.scrollTop,
      bottom: rect.bottom - rootRect.top + scrollElement.scrollTop, ...source });
  };
  // Walk each text node once. A table/translation/pre is a container of lines,
  // not one giant line overlapping every page inside that container.
  const walker = document.createTreeWalker(stage, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!node.nodeValue?.trim() || node.parentElement.closest('[aria-hidden="true"],script,style')) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) add(rect, { node });
  }
  for (const element of stage.querySelectorAll('img,svg,hr,video,canvas')) {
    add(element.getBoundingClientRect(), { element, atomic: true });
  }
  records.sort((a, b) => a.top - b.top);
  const lines = [];
  for (const record of records) {
    const previous = lines.at(-1);
    const overlap = previous && Math.min(previous.bottom, record.bottom) - Math.max(previous.top, record.top);
    if (previous && !previous.atomic && !record.atomic
      && overlap > Math.min(previous.bottom - previous.top, record.bottom - record.top) * 0.5) {
      previous.bottom = Math.max(previous.bottom, record.bottom);
    } else lines.push({ ...record });
  }
  return lines;
}

export function captureFlowAnchor(lines, top, root) {
  const contentTop = top + BOOK_PADDING_TOP;
  const line = lines.find(item => item.bottom > contentTop + 0.5) || lines.at(-1);
  if (!line) return null;
  const element = line.element || line.node?.parentElement.closest('.dshr-block__body,.dshr-translation,.dshr-chapter__kicker') || line.node?.parentElement;
  const rootRect = root.getBoundingClientRect();
  const rect = element?.getBoundingClientRect();
  const ratio = rect?.height ? (contentTop - (rect.top - rootRect.top + root.scrollTop)) / rect.height : 0;
  if (!line.node) return { element, ratio };
  // Find only the active line's first character. This is a stable text position
  // even when a font or viewport change wraps that paragraph into new lines.
  const range = document.createRange();
  let low = 1;
  let high = line.node.length;
  while (low < high) {
    const middle = (low + high) >> 1;
    range.setStart(line.node, 0);
    range.setEnd(line.node, middle);
    const rects = range.getClientRects();
    const last = rects[rects.length - 1];
    const y = last ? last.top - rootRect.top + root.scrollTop : -Infinity;
    if (y < line.top - 1) low = middle + 1;
    else high = middle;
  }
  const offset = Math.max(0, low - 1);
  let textOffset = offset;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node && node !== line.node; node = walker.nextNode()) textOffset += node.length;
  return { node: line.node, offset, textOffset, element, ratio };
}

export function resolveFlowAnchor(anchor, root, fallback) {
  if (!anchor) return fallback;
  const rootRect = root.getBoundingClientRect();
  // React/translation updates may replace text nodes without replacing their
  // block. Recover the same character within that block, rather than its top.
  if (!anchor.node?.isConnected && anchor.element?.isConnected && Number.isFinite(anchor.textOffset)) {
    let remaining = anchor.textOffset;
    const walker = document.createTreeWalker(anchor.element, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (remaining < node.length) { anchor.node = node; anchor.offset = remaining; break; }
      remaining -= node.length;
    }
  }
  if (anchor.node?.isConnected && root.contains(anchor.node) && anchor.node.length) {
    const range = document.createRange();
    const offset = Math.min(anchor.offset, anchor.node.length - 1);
    range.setStart(anchor.node, offset);
    range.setEnd(anchor.node, offset + 1);
    const rect = range.getBoundingClientRect();
    if (rect.height) return rect.top - rootRect.top + root.scrollTop - BOOK_PADDING_TOP;
  }
  if (anchor.element?.isConnected && root.contains(anchor.element)) {
    const rect = anchor.element.getBoundingClientRect();
    return rect.top - rootRect.top + root.scrollTop + Math.max(0, anchor.ratio) * rect.height - BOOK_PADDING_TOP;
  }
  return fallback;
}
