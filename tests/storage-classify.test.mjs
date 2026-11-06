import test from 'node:test';
import assert from 'node:assert/strict';
import {
  inferCategory,
  categoryLabel,
  DEFAULT_SETTINGS,
  CATEGORIES,
} from '../web/src/storage.js';

test('PDF defaults to paper, explicit book signals override', () => {
  assert.equal(inferCategory({ format: 'pdf', title: 'Attention Is All You Need', size: 2_200_000 }), 'paper');
  assert.equal(inferCategory({ format: 'pdf', title: 'The Cambridge Textbook of Physics', size: 30_000_000 }), 'book');
  assert.equal(inferCategory({ format: 'pdf', title: 'A very large scanned volume', size: 80_000_000 }), 'book');
});

test('book formats and short documents classify by format', () => {
  assert.equal(inferCategory({ format: 'epub', title: 'Alice' }), 'book');
  assert.equal(inferCategory({ format: 'mobi', title: 'Alice' }), 'book');
  assert.equal(inferCategory({ format: 'txt', title: 'Notes' }), 'book');
  assert.equal(inferCategory({ format: 'md', title: 'README' }), 'document');
  assert.equal(inferCategory({ format: 'html', title: 'Clipping' }), 'document');
});

test('categories have labels and the v2 appearance defaults exist', () => {
  assert.deepEqual(CATEGORIES.map((item) => item.id), ['book', 'paper', 'document']);
  assert.equal(categoryLabel('paper'), '文献');
  assert.equal(categoryLabel('unknown'), '未分类');
  assert.equal(DEFAULT_SETTINGS.backgroundPreset, 'paper');
  assert.equal(DEFAULT_SETTINGS.brightness, 1);
  assert.equal(DEFAULT_SETTINGS.autoTranslate, false);
  assert.equal(DEFAULT_SETTINGS.fontFamily, 'serif');
  assert.equal(DEFAULT_SETTINGS.readingMode, 'scroll');
  assert.equal(DEFAULT_SETTINGS.pageAnimation, 'slide');
  assert.equal(DEFAULT_SETTINGS.bookAnimation, 'slide');
});
