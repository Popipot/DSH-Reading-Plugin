import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

/**
 * The annotation model is layout-free by design, so jsdom is enough to test
 * the range math. jsdom does not implement Range#getClientRects; only the
 * tests that exercise geometry install a fake range object.
 */
const dom = new JSDOM(
  '<!doctype html><html><body><main id="stage"></main></body></html>',
  { url: 'http://localhost/' },
);
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.Node = dom.window.Node;
globalThis.Range = dom.window.Range;

const {
  HIGHLIGHT_COLORS,
  HIGHLIGHT_WIDTHS,
  UNDERLINE_COLORS,
  STYLE_LABELS,
  blockTextOffset,
  rangeFromOffsets,
  selectionRangeText,
  collectFlowSelection,
  normalizedRectsForSelection,
  createAnnotation,
  resolveFlowRanges,
} = await import('../web/src/annotations/model.js');
const { annotationStyles } = await import('../web/src/annotations/styles.js');

const stage = () => document.getElementById('stage');

function mount(html) {
  const host = stage();
  host.innerHTML = html;
  return host;
}

function clearSelection() {
  window.getSelection().removeAllRanges();
}

function selectRange(startNode, startOffset, endNode, endOffset) {
  const range = document.createRange();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  return selection;
}

function textNode(root, index = 0) {
  const walker = document.createTreeWalker(root, 4 /* NodeFilter.SHOW_TEXT */);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes[index];
}

function fakePage(rect) {
  const page = document.createElement('div');
  page.getBoundingClientRect = () => ({
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    right: rect.left + rect.width,
    bottom: rect.top + rect.height,
  });
  document.body.appendChild(page);
  return page;
}

/* ------------------------------------------------------------------------- *
 * constants + style string contract
 * ------------------------------------------------------------------------- */

test('publishes the contracted palettes and widths', () => {
  assert.deepEqual(HIGHLIGHT_COLORS.map((color) => color.id), ['yellow', 'green', 'pink', 'blue']);
  for (const color of HIGHLIGHT_COLORS) {
    assert.match(color.value, /^#[0-9a-f]{6}$/i);
    assert.ok(color.label);
  }
  assert.deepEqual(HIGHLIGHT_WIDTHS.map((width) => width.value), [4, 9, 16]);
  assert.deepEqual(HIGHLIGHT_WIDTHS.map((width) => width.id), ['thin', 'medium', 'wide']);
  assert.ok(UNDERLINE_COLORS.length >= 3);
  assert.deepEqual(Object.keys(STYLE_LABELS), ['highlight', 'underline', 'note']);
});

test('annotation stylesheet uses dshr-anno- classes and keeps the layer pointer transparent', () => {
  assert.equal(typeof annotationStyles, 'string');
  assert.ok(annotationStyles.length > 1200);
  assert.match(annotationStyles, /\.dshr-anno-layer\s*\{[^}]*pointer-events:\s*none/s);
  assert.match(annotationStyles, /\.dshr-anno-note-btn\s*\{[^}]*pointer-events:\s*auto/s);
  assert.match(annotationStyles, /\[data-ds-dark-theme\]/);
});

/* ------------------------------------------------------------------------- *
 * blockTextOffset
 * ------------------------------------------------------------------------- */

test('blockTextOffset counts nested inline markup and clamps out-of-range offsets', () => {
  const host = mount(
    '<div class="dshr-block__body" id="body"><p>Hello <em>br<strong>ave</strong></em> world<span>!</span></p></div>',
  );
  const body = host.querySelector('#body');
  const paragraph = body.firstChild;
  const em = paragraph.childNodes[1];
  const strong = em.childNodes[1];
  const emText = em.firstChild;
  const strongText = strong.firstChild;
  const spanText = paragraph.childNodes[3].firstChild;

  assert.equal(blockTextOffset(body, paragraph.firstChild, 3), 3);
  assert.equal(blockTextOffset(body, emText, 2), 8);
  assert.equal(blockTextOffset(body, strongText, 1), 9);
  assert.equal(blockTextOffset(body, spanText, 1), 18);
  assert.equal(blockTextOffset(body, spanText, 99), 18);
  assert.equal(blockTextOffset(body, emText, 0), 6);
  assert.equal(blockTextOffset(body, em, 0), 6);
  assert.equal(blockTextOffset(body, em, 1), 8);
  assert.equal(blockTextOffset(body, em, 2), 11);
  assert.equal(blockTextOffset(body, paragraph, 4), 18);
  assert.equal(blockTextOffset(body, body, 0), 0);
  assert.equal(blockTextOffset(body, body, 1), 18);
  assert.equal(blockTextOffset(body, body, 99), 18);
  assert.equal(blockTextOffset(null, emText, 0), 0);
  assert.equal(blockTextOffset(body, null, 0), 0);
});

test('blockTextOffset ignores translation cards for both body and block roots', () => {
  const host = mount(
    '<div class="dshr-block" id="block"><div class="dshr-block__body" id="body"><p>Alpha <b>Beta</b></p></div><div class="dshr-translation"><p>阿尔法贝塔</p></div></div>',
  );
  const block = host.querySelector('#block');
  const body = host.querySelector('#body');
  const beta = body.querySelector('b').firstChild;
  const translationText = block.querySelector('.dshr-translation p').firstChild;

  assert.equal(blockTextOffset(body, beta, 2), 8);
  assert.equal(blockTextOffset(body, body, 1), 10);
  assert.equal(blockTextOffset(block, beta, 4), 10);
  assert.equal(blockTextOffset(block, translationText, 1), 10);
  assert.equal(blockTextOffset(block, block, 2), 10);
});

/* ------------------------------------------------------------------------- *
 * rangeFromOffsets
 * ------------------------------------------------------------------------- */

test('rangeFromOffsets rebuilds cross-element ranges and round trips', () => {
  const host = mount(
    '<div class="dshr-block__body" id="body"><p>Hello <em>br<strong>ave</strong></em> world<span>!</span></p></div>',
  );
  const body = host.querySelector('#body');

  const range = rangeFromOffsets(body, 6, 11);
  assert.ok(range);
  assert.equal(range.toString(), 'brave');
  assert.equal(blockTextOffset(body, range.startContainer, range.startOffset), 6);
  assert.equal(blockTextOffset(body, range.endContainer, range.endOffset), 11);

  const whole = rangeFromOffsets(body, 0, 18);
  assert.ok(whole);
  assert.equal(whole.toString(), 'Hello brave world!');

  const swapped = rangeFromOffsets(body, 11, 6);
  assert.ok(swapped);
  assert.equal(swapped.toString(), 'brave');

  const clamped = rangeFromOffsets(body, 99, 120);
  assert.ok(clamped);
  assert.ok(clamped.collapsed);

  assert.equal(rangeFromOffsets(null, 0, 3), null);
  assert.equal(rangeFromOffsets(mount('<div class="dshr-block__body"></div>'), 0, 3), null);
});

test('rangeFromOffsets works on a block root while translation stays excluded', () => {
  const host = mount(
    '<div class="dshr-block" id="block"><div class="dshr-block__body"><p>Alpha <b>Beta</b></p></div><div class="dshr-translation"><p>阿尔法贝塔</p></div></div>',
  );
  const range = rangeFromOffsets(host.querySelector('#block'), 0, 9);
  assert.ok(range);
  assert.equal(range.toString(), 'Alpha Bet');
});

/* ------------------------------------------------------------------------- *
 * selectionRangeText
 * ------------------------------------------------------------------------- */

test('selectionRangeText clamps a range to the readable body', () => {
  const host = mount(
    '<div class="dshr-block__body" id="body"><p>Hello <em>br<strong>ave</strong></em> world<span>!</span></p></div>',
  );
  const body = host.querySelector('#body');
  const strongText = body.querySelector('strong').firstChild;
  const spanText = body.querySelector('span').firstChild;

  const range = document.createRange();
  range.setStart(strongText, 1);
  range.setEnd(spanText, 1);
  assert.deepEqual(selectionRangeText(body, range), { start: 9, end: 18, text: 've world!' });

  // A selection that starts before the block must be clamped to offset 0.
  const before = document.createRange();
  before.setStart(document.body, 0);
  before.setEnd(body, 1);
  assert.deepEqual(selectionRangeText(body, before), { start: 0, end: 18, text: 'Hello brave world!' });

  // A range entirely before the block has no intersection.
  const disjoint = document.createRange();
  disjoint.setStart(document.body, 0);
  disjoint.setEnd(stage(), 0);
  assert.equal(selectionRangeText(body, disjoint), null);
  assert.equal(selectionRangeText(null, range), null);
  assert.equal(selectionRangeText(body, null), null);
});

test('selectionRangeText ignores translation text inside the outer block', () => {
  const host = mount(
    '<div class="dshr-block" id="block"><div class="dshr-block__body" id="body"><p>Alpha <b>Beta</b></p></div><div class="dshr-translation"><p>阿尔法贝塔</p></div></div>',
  );
  const body = host.querySelector('#body');
  const beta = body.querySelector('b').firstChild;
  const translationText = host.querySelector('.dshr-translation p').firstChild;
  const range = document.createRange();
  range.setStart(beta, 2);
  range.setEnd(translationText, 3);
  assert.deepEqual(selectionRangeText(body, range), { start: 8, end: 10, text: 'ta' });
});

/* ------------------------------------------------------------------------- *
 * collectFlowSelection
 * ------------------------------------------------------------------------- */

const FLOW_HTML = `
  <div class="dshr-content" id="content">
    <div class="dshr-content__inner">
      <div class="dshr-block" data-anno-block="b1">
        <div class="dshr-block__body"><p>第一段文字，包含<em>强调</em>内容。</p></div>
        <div class="dshr-translation"><p>第一段翻译。</p></div>
      </div>
      <div class="dshr-block" data-anno-block="b2">
        <div class="dshr-block__body"><p>第二段文字，也有<strong>重点</strong>。</p></div>
      </div>
    </div>
  </div>
`;

function flowSetup() {
  const host = mount(FLOW_HTML);
  const container = host.querySelector('#content');
  const bodies = [...container.querySelectorAll('.dshr-block__body')];
  const em = bodies[0].querySelector('em').firstChild;
  const strong = bodies[1].querySelector('strong').firstChild;
  return { container, bodies, em, strong };
}

test('collectFlowSelection returns one range per block for a multi-block selection', () => {
  const { container, bodies, em, strong } = flowSetup();
  // Start at "强" in block one, end after "重" in block two.
  selectRange(em, 0, strong, 2);
  const picked = collectFlowSelection(container, window.getSelection());
  assert.ok(picked, 'selection should be collected');
  assert.equal(picked.ranges.length, 2);
  assert.deepEqual(picked.ranges.map((range) => range.blockId), ['b1', 'b2']);
  assert.deepEqual(picked.ranges[0], { blockId: 'b1', start: 8, end: 13, text: '强调内容。' });
  assert.deepEqual(picked.ranges[1], { blockId: 'b2', start: 0, end: 10, text: '第二段文字，也有重点' });
  assert.equal(picked.text, '强调内容。\n第二段文字，也有重点');
  assert.equal(typeof picked.rect.left, 'number');
  // The original body text is untouched by annotation bookkeeping.
  assert.equal(bodies[0].textContent, '第一段文字，包含强调内容。');
  clearSelection();
});

test('collectFlowSelection trims leading selection whitespace and keeps offsets aligned', () => {
  const { container, bodies } = flowSetup();
  const firstText = bodies[0].querySelector('p').firstChild; // "第一段文字，包含"
  selectRange(firstText, 0, bodies[0].querySelector('em').firstChild, 0);
  const picked = collectFlowSelection(container, window.getSelection());
  assert.ok(picked);
  assert.deepEqual(picked.ranges[0], { blockId: 'b1', start: 0, end: 8, text: '第一段文字，包含' });
  clearSelection();
});

test('collectFlowSelection excludes translation text from the payload', () => {
  const { container, em } = flowSetup();
  const translationText = container.querySelector('.dshr-translation p').firstChild;
  // Starts in the body and keeps dragging into the translation card.
  selectRange(em, 0, translationText, 2);
  const picked = collectFlowSelection(container, window.getSelection());
  assert.ok(picked);
  assert.equal(picked.ranges.length, 1);
  assert.equal(picked.ranges[0].blockId, 'b1');
  assert.equal(picked.ranges[0].text, '强调内容。');
  clearSelection();

  // A selection that only touches translation text has nothing to annotate.
  selectRange(translationText, 0, translationText, 3);
  assert.equal(collectFlowSelection(container, window.getSelection()), null);
  clearSelection();
});

test('collectFlowSelection returns null for missing or foreign selections', () => {
  const { container } = flowSetup();
  assert.equal(collectFlowSelection(container, null), null);
  assert.equal(collectFlowSelection(null, window.getSelection()), null);

  const outside = document.createElement('p');
  outside.textContent = '正文之外的一段文字';
  document.body.appendChild(outside);
  selectRange(outside.firstChild, 0, outside.firstChild, 3);
  assert.equal(collectFlowSelection(container, window.getSelection()), null);
  outside.remove();
  clearSelection();
});

/* ------------------------------------------------------------------------- *
 * resolveFlowRanges / quote fallback
 * ------------------------------------------------------------------------- */

test('resolveFlowRanges trusts stored offsets when the text still matches', () => {
  const { container } = flowSetup();
  const resolved = resolveFlowRanges(container, {
    style: 'highlight',
    quote: '强调',
    ranges: [{ blockId: 'b1', start: 8, end: 10, text: '强调' }],
  });
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].blockId, 'b1');
  assert.equal(resolved[0].start, 8);
  assert.equal(resolved[0].text, '强调');
  assert.equal(resolved[0].range.toString(), '强调');
});

test('resolveFlowRanges falls back to the quote when offsets are stale', () => {
  const { container } = flowSetup();
  const resolved = resolveFlowRanges(container, {
    style: 'highlight',
    quote: '重点',
    ranges: [{ blockId: 'b1', start: 900, end: 960, text: '已经不存在的文字' }],
  });
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].blockId, 'b2');
  assert.equal(resolved[0].text, '重点');
  assert.equal(resolved[0].range.toString(), '重点');
});

test('resolveFlowRanges finds the quote again when the block id disappeared', () => {
  const { container } = flowSetup();
  const resolved = resolveFlowRanges(container, {
    style: 'underline',
    quote: '第二段文字',
    ranges: [{ blockId: 'deleted-block', start: 0, end: 4, text: '第二段文' }],
  });
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].blockId, 'b2');
  assert.equal(resolved[0].text, '第二段文字');
});

test('resolveFlowRanges matches quotes across whitespace rewraps', () => {
  const host = mount(
    '<div class="dshr-content" id="content"><div class="dshr-block" data-anno-block="p1"><div class="dshr-block__body"><p></p></div></div></div>',
  );
  const container = host.querySelector('#content');
  const body = container.querySelector('.dshr-block__body');
  body.firstChild.textContent = 'The quick\n   brown fox jumps over the lazy dog.';
  const resolved = resolveFlowRanges(container, {
    style: 'highlight',
    quote: 'quick brown fox',
    ranges: [{ blockId: 'p1', start: 0, end: 0, text: '' }],
  });
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].text.replace(/\s+/gu, ' '), 'quick brown fox');
  assert.equal(resolved[0].range.toString().replace(/\s+/gu, ' '), 'quick brown fox');
});

test('resolveFlowRanges covers a multi-block quote with no ranges at all', () => {
  const { container } = flowSetup();
  const resolved = resolveFlowRanges(container, {
    style: 'note',
    quote: '强调内容。\n重点',
  });
  assert.equal(resolved.length, 2);
  assert.deepEqual(resolved.map((item) => item.blockId), ['b1', 'b2']);
  assert.equal(resolved[0].text, '强调内容。');
  assert.equal(resolved[1].text, '重点');
});

test('resolveFlowRanges never throws on malformed input', () => {
  const { container } = flowSetup();
  assert.deepEqual(resolveFlowRanges(container, null), []);
  assert.deepEqual(resolveFlowRanges(null, { quote: 'x' }), []);
  assert.deepEqual(resolveFlowRanges(container, {}), []);
  assert.deepEqual(resolveFlowRanges(container, { ranges: 'nope', quote: '' }), []);
  assert.deepEqual(
    resolveFlowRanges(container, { ranges: [null, 5, { blockId: '' }, { blockId: 'b1' }], quote: '' }),
    [],
  );
});

/* ------------------------------------------------------------------------- *
 * normalizedRectsForSelection
 * ------------------------------------------------------------------------- */

function rect(left, top, width, height) {
  return { left, top, width, height, right: left + width, bottom: top + height };
}

test('normalizedRectsForSelection normalizes, clips and sorts page rects', () => {
  const page = fakePage({ left: 100, top: 50, width: 500, height: 700 });
  const fakeRange = {
    getClientRects: () => [
      rect(610, 80, 40, 20), // fully outside to the right: dropped
      rect(120, 80, 200, 20), // normalized to the page
      rect(90, 90, 50, 20), // clipped from the left
      rect(200, 120, 0, 20), // zero width: dropped
    ],
    getBoundingClientRect: () => rect(120, 80, 200, 20),
  };
  const result = normalizedRectsForSelection(fakeRange, page);
  assert.equal(result.length, 2);
  assert.ok(Math.abs(result[0].x - 0.04) < 1e-4);
  assert.ok(Math.abs(result[0].y - 30 / 700) < 1e-4);
  assert.ok(Math.abs(result[0].w - 0.4) < 1e-4);
  assert.ok(Math.abs(result[0].h - 20 / 700) < 1e-4);
  assert.ok(Math.abs(result[1].x - 0) < 1e-4);
  assert.ok(Math.abs(result[1].w - 0.08) < 1e-4);
  assert.ok(Math.abs(result[1].y - 40 / 700) < 1e-4);
  assert.ok(result[0].y <= result[1].y, 'rects should be sorted top-to-bottom');

  // A range with no layout data (jsdom) yields no rects.
  assert.deepEqual(normalizedRectsForSelection({ getClientRects: () => [], getBoundingClientRect: () => rect(0, 0, 0, 0) }, page), []);
  // Degenerate page boxes and missing inputs are safe.
  assert.deepEqual(normalizedRectsForSelection(fakeRange, fakePage({ left: 0, top: 0, width: 0, height: 0 })), []);
  assert.deepEqual(normalizedRectsForSelection(null, page), []);
  assert.deepEqual(normalizedRectsForSelection(fakeRange, null), []);
});

/* ------------------------------------------------------------------------- *
 * createAnnotation
 * ------------------------------------------------------------------------- */

test('createAnnotation fills contracted defaults', () => {
  const before = Date.now();
  const annotation = createAnnotation('book-1', { quote: '  一段引用  ' });
  assert.equal(annotation.bookId, 'book-1');
  assert.equal(annotation.kind, 'flow');
  assert.equal(annotation.style, 'highlight');
  assert.equal(annotation.color, HIGHLIGHT_COLORS[0].value);
  assert.equal(annotation.width, 9);
  assert.equal(annotation.note, '');
  assert.equal(annotation.quote, '一段引用');
  assert.ok(annotation.id.startsWith('anno-'));
  assert.ok(annotation.createdAt >= before);
  assert.ok(annotation.updatedAt >= annotation.createdAt);
  assert.equal(annotation.ranges, undefined);
});

test('createAnnotation sanitizes flow ranges and pdf rects', () => {
  const annotation = createAnnotation('book-2', {
    kind: 'flow',
    style: 'note',
    color: 'pink',
    note: '这里很重要',
    quote: '重点',
    chapterId: 'ch-3',
    chapterIndex: 2,
    ranges: [
      { blockId: 'b1', start: '4', end: 9, text: '一段文字' },
      { blockId: 'b1', start: 12, end: 8, text: '倒序应丢弃' },
      { blockId: '', start: 0, end: 3 },
      null,
    ],
    rects: [{ x: 0.1, y: 0.2, w: 0.3, h: 0.1 }],
  });
  assert.equal(annotation.kind, 'flow');
  assert.equal(annotation.style, 'note');
  assert.equal(annotation.color, '#f3a6c0');
  assert.equal(annotation.chapterId, 'ch-3');
  assert.equal(annotation.chapterIndex, 2);
  assert.deepEqual(annotation.ranges, [{ blockId: 'b1', start: 4, end: 9, text: '一段文字' }]);
  assert.equal(annotation.page, undefined);
  assert.equal(annotation.rects, undefined);

  const pdf = createAnnotation('book-2', {
    kind: 'pdf',
    style: 'underline',
    color: 'red',
    page: 7,
    ranges: [{ blockId: 'b1', start: 0, end: 2, text: 'xx' }],
    rects: [
      { x: 0.1, y: 0.2, w: 0.3, h: 0.04 },
      { x: 1.4, y: -0.2, w: 0.5, h: 0.5 },
      { x: 0.2, y: 0.2, w: 0, h: 0.1 },
    ],
  });
  assert.equal(pdf.kind, 'pdf');
  assert.equal(pdf.style, 'underline');
  assert.equal(pdf.color, UNDERLINE_COLORS[1].value);
  assert.equal(pdf.page, 7);
  assert.equal(pdf.ranges, undefined);
  assert.equal(pdf.rects.length, 1);
  assert.deepEqual(pdf.rects[0], { x: 0.1, y: 0.2, w: 0.3, h: 0.04 });
});

test('createAnnotation clamps width to the nearest contracted value and keeps ids', () => {
  assert.equal(createAnnotation('book', { width: 3 }).width, 4);
  assert.equal(createAnnotation('book', { width: 7 }).width, 9);
  assert.equal(createAnnotation('book', { width: 100 }).width, 16);
  assert.equal(createAnnotation('book', { width: 'nope' }).width, 9);
  assert.equal(createAnnotation('book', { id: 'keep-me' }).id, 'keep-me');
  const custom = createAnnotation('book', { color: '#123456', updatedAt: 10, createdAt: 20 });
  assert.equal(custom.color, '#123456');
  assert.ok(custom.updatedAt >= custom.createdAt);
  assert.equal(createAnnotation('book', { style: 'unknown-style' }).style, 'highlight');
  assert.equal(createAnnotation('book', { kind: 'weird' }).kind, 'flow');
});

test('createAnnotation copies range data instead of aliasing the draft', () => {
  const ranges = [{ blockId: 'b1', start: 0, end: 3, text: 'abc' }];
  const annotation = createAnnotation('book', { ranges, quote: 'abc' });
  ranges[0].start = 99;
  assert.equal(annotation.ranges[0].start, 0);
  assert.notEqual(annotation.ranges, ranges);
});
