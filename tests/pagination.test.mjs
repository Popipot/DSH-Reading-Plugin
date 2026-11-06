import assert from 'node:assert/strict';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';
import {
  BOOK_PADDING_TOP, BOOK_PADDING_BOTTOM, buildFlowPageStarts, createPageCursor, pageIndexOfTop, resolveFlowAnchor,
} from '../web/src/components/flow-pagination.js';

test('long objects span reachable pages instead of snapping back to the object top', () => {
  const lines = [{ top: 48, bottom: 75 }, { top: 100, bottom: 4000 }, { top: 4020, bottom: 4048 }];
  const starts = buildFlowPageStarts(lines, 600);
  assert.ok(starts.length > 7);
  assert.ok(starts.every((top, index) => index === 0 || top > starts[index - 1]));
  // Every vertical part of the oversized object can be brought into the paper.
  for (let y = 100; y < 4000; y += 10) {
    assert.ok(starts.some(top => y >= top + 48 && y <= top + 544), `unreachable object position ${y}`);
  }
});

test('fractional line geometry never loses text or adds mutable correction pages', () => {
  let seed = 19;
  const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  for (let sample = 0; sample < 80; sample += 1) {
    const viewport = 300 + random() * 700;
    let y = BOOK_PADDING_TOP;
    const lines = Array.from({ length: 150 }, () => {
      const top = y;
      const bottom = top + 12 + random() * 40;
      y = bottom + 3 + random() * 15;
      return { top, bottom };
    });
    const starts = buildFlowPageStarts(lines, viewport);
    assert.equal(starts[0], 0);
    for (const line of lines) {
      assert.ok(starts.some(top => line.top >= top + BOOK_PADDING_TOP - 0.5
        && line.bottom <= top + viewport - BOOK_PADDING_BOTTOM + 0.5), 'a complete line must be reachable');
    }
    assert.deepEqual(buildFlowPageStarts(lines.toReversed(), viewport), starts);
  }
});

test('page cursor advances exactly once per accepted intent and reverses to the same positions', () => {
  const cursor = createPageCursor();
  const starts = [0, 492.25, 984.5, 1500.1];
  cursor.replace(starts, 0);
  for (let i = 1; i < starts.length; i += 1) {
    assert.equal(cursor.turn(1), true);
    assert.equal(cursor.page, i + 1);
    assert.equal(cursor.top, starts[i]);
  }
  assert.equal(cursor.turn(1), false);
  assert.equal(cursor.page, 4);
  for (let i = 2; i >= 0; i -= 1) {
    assert.equal(cursor.turn(-1), true);
    assert.equal(cursor.top, starts[i]);
  }
  assert.equal(cursor.turn(-1), false);
});

test('reflow chooses a page from an explicit content anchor, with no broad 24px tolerance', () => {
  assert.equal(pageIndexOfTop([0, 100, 120], 99), 0);
  const cursor = createPageCursor();
  cursor.replace([0, 400, 800, 1200], 805);
  assert.equal(cursor.page, 3);
  cursor.replace([0, 600, 1200], 1210);
  assert.equal(cursor.page, 3);
  assert.equal(cursor.top, 1200);
  assert.deepEqual(buildFlowPageStarts([], 600), [0]);
});

test('replacing inline DOM preserves the anchored character inside the same text block', () => {
  const dom = new JSDOM('<div id="reader"><div id="block">Hello world</div></div>');
  const originalDocument = globalThis.document;
  const originalFilter = globalThis.NodeFilter;
  globalThis.document = dom.window.document;
  globalThis.NodeFilter = dom.window.NodeFilter;
  try {
    const reader = document.getElementById('reader');
    const block = document.getElementById('block');
    const anchor = { node: block.firstChild, offset: 7, textOffset: 7, element: block, ratio: 0 };
    reader.getBoundingClientRect = () => ({ top: 0 });
    dom.window.Range.prototype.getBoundingClientRect = () => ({ top: 450, height: 24 });
    block.innerHTML = '<b>Hello</b> world';
    assert.equal(resolveFlowAnchor(anchor, reader, 0), 450 - BOOK_PADDING_TOP);
    assert.equal(anchor.node.nodeValue[anchor.offset], 'o');
    assert.equal(anchor.node.isConnected, true);
  } finally {
    globalThis.document = originalDocument;
    globalThis.NodeFilter = originalFilter;
    dom.window.close();
  }
});
