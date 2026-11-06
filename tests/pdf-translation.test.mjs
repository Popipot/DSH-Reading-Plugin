import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PdfTranslationController, translationCacheKey, protectPdfText } from '../web/src/pdf/translation-controller.js';
import { extractPdfParagraphs } from '../web/src/pdf/text.js';

const tick = () => new Promise(resolve => setTimeout(resolve, 10));
const source = (page, count = 5) => ({ segments: Array.from({ length: count }, (_, index) => ({ id: `p${page}-s${index}`, src: `Page ${page} paragraph ${index}. Scientific prose.` })) });
const model = { provider: 'fixture', model: 'model-a', promptVersion: 'test-1' };
function harness() {
  const calls = [];
  const cache = new Map();
  let snapshot;
  const controller = new PdfTranslationController({ prefetchDelay: 20,
    cache: { get: async key => cache.get(key), put: async row => cache.set(row.key, row) },
    translate: (segments, options) => new Promise((resolve, reject) => calls.push({ segments, options, resolve, reject })),
    onChange: state => { snapshot = state; },
  });
  const config = { documentId: 'book-a', enabled: true, canTranslate: true, model, glossary: '', prefetch: true, title: 'Fixture' };
  controller.configure(config);
  const finish = call => call.resolve({ translations: Object.fromEntries(call.segments.map(segment => [segment.id, `中文 ${segment.text}`])), model });
  return { controller, calls, config, cache, finish, snapshot: () => snapshot };
}

test('translation cache identity includes source, document, model, glossary and prompt version', async () => {
  const config = { documentId: 'a', model, glossary: 'gate = 栅极' };
  const key = await translationCacheKey(config, 'A scientific paragraph.');
  for (const [other, text] of [
    [{ ...config, documentId: 'b' }, 'A scientific paragraph.'],
    [{ ...config, model: { ...model, model: 'other' } }, 'A scientific paragraph.'],
    [{ ...config, model: { ...model, promptVersion: 'other' } }, 'A scientific paragraph.'],
    [{ ...config, glossary: 'gate = 门' }, 'A scientific paragraph.'],
    [config, 'A changed paragraph.'],
  ]) assert.notEqual(await translationCacheKey(other, text), key);
  assert.equal(await translationCacheKey({ ...config, glossary: '  gate = 栅极\n' }, 'A scientific paragraph.'), key);
});

test('formula, citation and DOI placeholders are restored and missing markers reject the segment', () => {
  const text = 'Energy $E=mc^2$ follows [12] and 10.1234/paper. Also ∑x.';
  const protectedText = protectPdfText(text, ['∑x']);
  assert.doesNotMatch(protectedText.text, /E=mc/);
  assert.equal(protectedText.restore(protectedText.text), text);
  assert.throws(() => protectedText.restore('Incomplete translation'), /遗漏/u);
});

test('paragraphs publish incrementally with bounded concurrency, before the whole page completes', async () => {
  const h = harness();
  try {
    h.controller.setFocus(2, ['p2-s3']);
    h.controller.registerPage(2, source(2));
    await tick();
    assert.equal(h.calls.length, 2);
    assert.equal(h.calls[0].segments[0].id, 'p2-s3', 'visible paragraphs must start before offscreen ones');
    h.finish(h.calls[0]);
    await tick();
    const rows = h.snapshot().pages[2];
    assert.equal(rows.filter(row => row.status === 'done').length, 1);
    assert.ok(rows.some(row => row.status !== 'done'));
    assert.ok(h.controller.jobs.size <= 2);
    assert.ok(h.calls.some(call => call.options.context.includes('paragraph')));
  } finally { h.controller.dispose(); }
});

test('navigation aborts the old page, does not send its queued paragraphs, and ignores late results', async () => {
  const h = harness();
  try {
    h.controller.setFocus(1);
    h.controller.registerPage(1, source(1, 8));
    await tick();
    const old = [...h.calls];
    h.controller.setFocus(9);
    h.controller.registerPage(9, source(9, 2));
    await tick();
    assert.ok(old.every(call => call.options.signal.aborted));
    old.forEach(h.finish);
    await tick();
    assert.equal(h.calls.filter(call => call.segments[0].id.startsWith('p1-')).length, 2);
    assert.ok(h.snapshot().pages[9].every(row => row.zh === ''));
    assert.equal(h.snapshot().pages[1], undefined);
  } finally { h.controller.dispose(); }
});

test('switching document or glossary isolates completions even when transport ignores abort', async () => {
  const h = harness();
  try {
    h.controller.registerPage(1, source(1)); await tick();
    const old = [...h.calls];
    h.controller.configure({ ...h.config, documentId: 'book-b', glossary: 'gate = 栅极' });
    h.controller.registerPage(1, source(1)); await tick();
    old.forEach(h.finish); await tick();
    assert.ok(h.snapshot().pages[1].every(row => row.zh === ''));
    assert.ok(h.calls.slice(old.length).every(call => call.options.glossary === 'gate = 栅极'));
    assert.equal(h.cache.size, 0);
  } finally { h.controller.dispose(); }
});

test('failed and missing segments can be retried without retranslating successful paragraphs', async () => {
  const h = harness();
  try {
    h.controller.registerPage(1, source(1, 2)); await tick();
    h.finish(h.calls[0]);
    h.calls[1].resolve({ translations: {}, model }); await tick();
    assert.equal(h.snapshot().pages[1][0].status, 'done');
    assert.equal(h.snapshot().pages[1][1].status, 'error');
    h.controller.retry(1, 'p1-s1'); await tick();
    assert.equal(h.calls.length, 3);
    assert.deepEqual(h.calls[2].segments.map(segment => segment.id), ['p1-s1']);
    h.finish(h.calls[2]); await tick();
    assert.ok(h.snapshot().pages[1].every(row => row.status === 'done'));
    const previous = h.snapshot().pages[1][0].zh;
    h.controller.retry(1, 'p1-s0'); await tick();
    assert.equal(h.calls.length, 4);
    assert.equal(h.snapshot().pages[1][0].zh, previous, 'manual retranslation keeps the last readable result');
    h.calls[3].reject(new Error('temporary service failure')); await tick();
    assert.equal(h.snapshot().pages[1][0].zh, previous);
    assert.equal(h.snapshot().pages[1][1].status, 'done');
  } finally { h.controller.dispose(); }
});

test('pause retains finished text and resume uses its cache without duplicate requests', async () => {
  const h = harness();
  try {
    h.controller.registerPage(1, source(1, 2)); await tick();
    h.finish(h.calls[0]); await tick();
    h.controller.configure({ ...h.config, enabled: false });
    assert.equal(h.snapshot().pages[1][0].status, 'done');
    assert.ok(h.calls[1].options.signal.aborted);
    h.controller.configure(h.config); await tick();
    assert.equal(h.calls.length, 3);
    h.finish(h.calls[2]); await tick();
    h.controller.dispose();
    let next;
    const reopened = new PdfTranslationController({ cache: { get: async key => h.cache.get(key) },
      translate: () => { throw new Error('cache hit must not translate'); }, onChange: state => { next = state; } });
    reopened.configure(h.config); reopened.registerPage(1, source(1, 2)); await tick();
    assert.ok(next.pages[1].every(row => row.cached && row.status === 'done'));
    reopened.dispose();
  } finally { h.controller.dispose(); }
});

test('next-page prefetch waits for visible-page completion and can be disabled', async () => {
  const h = harness();
  try {
    h.controller.setFocus(1);
    h.controller.registerPage(1, source(1, 1)); h.controller.registerPage(2, source(2, 1)); await tick();
    assert.equal(h.calls.length, 1);
    h.controller.configure({ ...h.config, prefetch: false });
    h.finish(h.calls[0]); await tick();
    assert.equal(h.calls.length, 1);
    h.controller.configure(h.config); await tick();
    assert.equal(h.calls[1].segments[0].id, 'p2-s0');
  } finally { h.controller.dispose(); }
});

test('PDF text extraction retains original item indices and reads two columns in column order', () => {
  const items = [{ type: 'beginMarkedContent' }];
  for (let line = 0; line < 4; line += 1) for (const [column, x] of [['Left', 50], ['Right', 330]]) {
    items.push({ str: `${column} line ${line} scientific prose.`, transform: [12, 0, 0, 12, x, 720 - line * 16], width: 220, height: 12, hasEOL: true });
  }
  const before = JSON.stringify(items);
  const paragraphs = extractPdfParagraphs(items, 2, 612);
  assert.match(paragraphs.segments[0].src, /^Left line 0.*Left line 3/u);
  assert.match(paragraphs.segments[1].src, /^Right line 0/u);
  assert.ok(paragraphs.segments[0].itemIndices.every(index => items[index].str.startsWith('Left')));
  assert.equal(paragraphs.segments[1].id, 'p2-s1');
  assert.equal(JSON.stringify(items), before);
});

test('a transport that ignores abort still times out without keeping the translation queue locked', async () => {
  let state;
  const controller = new PdfTranslationController({ requestTimeout: 25, translate: () => new Promise(() => {}),
    onChange: snapshot => { state = snapshot; } });
  try {
    controller.configure({ documentId: 'timeout', enabled: true, canTranslate: true, model });
    controller.registerPage(1, source(1, 1));
    await new Promise(resolve => setTimeout(resolve, 60));
    assert.equal(state.pages[1][0].status, 'error');
    assert.match(state.pages[1][0].error, /超时/u);
    assert.equal(controller.jobs.size, 0);
  } finally { controller.dispose(); }
});

test('Chinese paragraphs remain readable without a configured model or a network request', async () => {
  let state;
  const controller = new PdfTranslationController({ translate: () => { throw new Error('unnecessary request'); }, onChange: snapshot => { state = snapshot; } });
  try {
    controller.configure({ documentId: 'chinese', enabled: true, canTranslate: false, model });
    controller.registerPage(1, { segments: [{ id: 'p1-s0', src: '这是一段已经使用中文写成的文献内容。' }] });
    await tick();
    assert.equal(state.pages[1][0].status, 'done');
    assert.equal(state.pages[1][0].zh, '这是一段已经使用中文写成的文献内容。');
  } finally { controller.dispose(); }
});

test('a full-width heading remains between the two-column regions above and below it', () => {
  const items = [];
  for (let row = 0; row < 4; row += 1) for (const [name, x] of [['Left', 50], ['Right', 330]]) {
    items.push({ str: `${name} above ${row} scientific text.`, transform: [12, 0, 0, 12, x, 720 - row * 16], width: 220, height: 12, hasEOL: true });
  }
  items.push({ str: 'A full width middle heading spanning the document', transform: [18, 0, 0, 18, 50, 500], width: 500, height: 18, hasEOL: true });
  for (let row = 0; row < 4; row += 1) for (const [name, x] of [['Left', 50], ['Right', 330]]) {
    items.push({ str: `${name} below ${row} scientific text.`, transform: [12, 0, 0, 12, x, 450 - row * 16], width: 220, height: 12, hasEOL: true });
  }
  const text = extractPdfParagraphs(items, 1, 612).text;
  assert.ok(text.indexOf('Right above 3') < text.indexOf('full width middle'));
  assert.ok(text.indexOf('full width middle') < text.indexOf('Left below 0'));
  assert.ok(text.indexOf('Left below 3') < text.indexOf('Right below 0'));
});
