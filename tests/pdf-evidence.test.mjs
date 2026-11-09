import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { fingerprintPdf, sameFingerprint } from '../web/src/evidence/identity.js';
import { capturePdfAnchor, resolvePdfAnchor } from '../web/src/evidence/pdf-anchor.js';

test('PDF evidence verifies every byte, independent of filename', async () => {
  const original = Buffer.alloc(1024 * 1024 + 8, 97);
  const changed = Buffer.from(original);
  changed[changed.length - 1] = 98;
  const first = new File([original], 'paper.pdf');
  const fingerprint = await fingerprintPdf(first);
  assert.deepEqual(fingerprint, {
    bytes: original.length,
    sha256: createHash('sha256').update(original).digest('hex'),
  });
  assert.equal(sameFingerprint(fingerprint, await fingerprintPdf(new File([original], 'renamed.pdf'))), true);
  assert.equal(sameFingerprint(fingerprint, await fingerprintPdf(new File([changed], 'paper.pdf'))), false);
  assert.equal(sameFingerprint(fingerprint, { ...fingerprint, bytes: fingerprint.bytes - 1 }), false);
});

test('PDF evidence restores wrapped text and rejects a repeated quote at different coordinates', () => {
  const { window } = new JSDOM(`<div data-page="3"><div class="dshr-pdf-text-layer">
    <span>Repeated heading</span><br><span>with a second line</span><br>
    <span>Repeated heading</span><br><span>with a second line</span>
  </div></div>`);
  const document = window.document;
  const frame = document.querySelector('[data-page]');
  const layer = frame.firstElementChild;
  const spans = [...layer.querySelectorAll('span')];
  const box = (left, top, width, height) => ({ left, top, width, height });
  frame.getBoundingClientRect = () => box(0, 0, 500, 500);
  window.Range.prototype.getClientRects = function () {
    const first = spans.indexOf(this.startContainer.parentElement);
    const last = spans.indexOf(this.endContainer.parentElement);
    return spans.slice(first, last + 1).map((_, index) => box(40, 50 + (first + index) * 30, 120, 18));
  };
  const select = start => {
    const range = document.createRange();
    range.setStart(spans[start].firstChild, 0);
    range.setEnd(spans[start + 1].firstChild, spans[start + 1].textContent.length);
    return capturePdfAnchor(range, layer, frame, 3);
  };
  const first = select(0);
  const second = select(2);
  const quote = 'Repeated heading with a second line';
  assert.deepEqual(resolvePdfAnchor(first, quote, frame), first.rects);
  assert.deepEqual(resolvePdfAnchor(second, quote, frame), second.rects);
  assert.equal(resolvePdfAnchor({ ...first, rects: second.rects }, quote, frame), null);
  assert.equal(resolvePdfAnchor(first, 'Repeated heading with a different line', frame), null);
});
