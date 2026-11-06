import test from 'node:test';
import assert from 'node:assert/strict';

import {
  annotationLabel,
  bandOffset,
  bandRatio,
  clampNumber,
  handDrawnUnderline,
  hashSeed,
  hashUnit,
} from '../web/src/annotations/marks.js';

test('bandRatio maps thin/medium/wide to a readable fraction and clamps input', () => {
  assert.ok(Math.abs(bandRatio(4) - 0.36) < 1e-9);
  assert.ok(Math.abs(bandRatio(9) - (0.36 + (5 / 12) * 0.34)) < 1e-9);
  assert.ok(Math.abs(bandRatio(16) - 0.7) < 1e-9);
  assert.equal(bandRatio(0), bandRatio(4));
  assert.equal(bandRatio(999), bandRatio(16));
  assert.equal(bandRatio(undefined), bandRatio(9));
  assert.equal(bandRatio('bad'), bandRatio(9));
  // Thin < medium < wide, and every band leaves room inside the line box.
  assert.ok(bandRatio(4) < bandRatio(9) && bandRatio(9) < bandRatio(16));
  assert.ok(bandRatio(16) < 1);
});

test('bandOffset drops the band toward the lower part of the line', () => {
  assert.ok(bandOffset(0.36) > bandOffset(0.5));
  assert.ok(bandOffset(0.5) > bandOffset(0.7));
  for (const ratio of [0.2, 0.36, 0.5, 0.7, 0.9]) {
    const offset = bandOffset(ratio);
    assert.ok(offset >= 0 && offset + ratio <= 1.001, `ratio ${ratio} stays inside the line box`);
  }
  assert.ok(bandOffset(1000) >= 0);
  assert.ok(clampNumber(5, 0, 1) === 1 && clampNumber(-5, 0, 1) === 0 && clampNumber('x', 2, 3) === 2);
});

test('hand-drawn underline is deterministic per annotation and finite', () => {
  const first = handDrawnUnderline(hashSeed('anno-1'), 180);
  const second = handDrawnUnderline(hashSeed('anno-1'), 180);
  const other = handDrawnUnderline(hashSeed('anno-2'), 180);
  assert.equal(first, second);
  assert.notEqual(first, other);
  assert.match(first, /^M0\.6 /);
  assert.match(first, /C/);
  assert.match(first, /S/);
  const numbers = first.match(/-?\d+(?:\.\d+)?/g).map(Number);
  assert.ok(numbers.length >= 8);
  assert.ok(numbers.every((number) => Number.isFinite(number)));
  assert.ok(numbers.indexOf(NaN) === -1);
  assert.ok(handDrawnUnderline(1, 2).length > 0, 'tiny widths still produce a path');
});

test('hash helpers are stable and spread across the 32-bit range', () => {
  assert.equal(hashSeed('abc'), hashSeed('abc'));
  assert.notEqual(hashSeed('abc'), hashSeed('abd'));
  assert.equal(hashSeed(''), hashSeed(null));
  const units = [hashUnit(hashSeed('a'), 1), hashUnit(hashSeed('a'), 2), hashUnit(hashSeed('a'), 3)];
  assert.ok(units.every((value) => value >= 0 && value < 1));
  assert.ok(new Set(units).size > 1);
});

test('annotationLabel prefers notes, then quotes, and truncates', () => {
  assert.equal(annotationLabel({ note: '  一条批注  ' }), '一条批注');
  assert.equal(annotationLabel({ quote: '一段引用' }), '一段引用');
  assert.equal(annotationLabel({}), '批注');
  assert.equal(annotationLabel(null), '批注');
  const long = '这'.repeat(50);
  const label = annotationLabel({ note: long });
  assert.equal(label.length, 35);
  assert.ok(label.endsWith('…'));
});
