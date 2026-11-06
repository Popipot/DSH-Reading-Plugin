import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createBlobTransport } from '../web/src/pdf/engine.js';
import { PageBitmapCache, PageLayoutIndex } from '../web/src/pdf/performance.js';

const engine = { PDFDataRangeTransport: class {
  constructor(length, initialData, done) { this.length = length; this.initialData = initialData; this.progressiveDone = done; }
} };
const pause = () => new Promise(resolve => setTimeout(resolve, 15));

test('large local PDFs read a bounded prefix then only the requested ranges', async () => {
  const blob = new Blob([new Uint8Array(5_000_000)]);
  const reads = [];
  const source = await createBlobTransport(engine, blob, { onRead: stats => reads.push(stats.bytes) });
  const responses = [];
  source.range.onDataRange = (begin, bytes) => responses.push([begin, bytes.length]);
  assert.equal(source.range.initialData.length, 256 * 1024);
  assert.equal(source.disableAutoFetch, true);
  assert.equal(source.disableStream, true);
  source.range.requestDataRange(4_900_000, 5_000_000);
  await pause();
  assert.deepEqual(responses, [[4_900_000, 100_000]]);
  assert.equal(reads.at(-1), 256 * 1024 + 100_000);
  assert.equal(blob.size, 5_000_000);
});

test('cancellation discards in-flight ranges and stops queued I/O', async () => {
  let release;
  let sliceCalls = 0;
  const blob = { size: 2_000_000, slice(begin, end) {
    sliceCalls++;
    return { arrayBuffer: () => begin === 0 ? Promise.resolve(new ArrayBuffer(end)) : new Promise(resolve => { release = () => resolve(new ArrayBuffer(end - begin)); }) };
  } };
  const { range } = await createBlobTransport(engine, blob);
  let delivered = 0;
  range.onDataRange = () => delivered++;
  range.requestDataRange(300_000, 400_000);
  range.abort();
  range.requestDataRange(500_000, 600_000);
  release();
  await pause();
  assert.equal(delivered, 0);
  assert.equal(sliceCalls, 2);
});

test('range read failures report once rather than leaving a live broken queue', async () => {
  const failures = [];
  const blob = { size: 1000000, slice(begin, end) { return { arrayBuffer: () => begin === 0 ? Promise.resolve(new ArrayBuffer(end)) : Promise.reject(new Error('disk unavailable')) }; } };
  const { range } = await createBlobTransport(engine, blob, { onError: error => failures.push(error.message) });
  range.requestDataRange(300000, 500000);
  await pause();
  assert.equal(range.aborted, true);
  assert.deepEqual(failures, ['disk unavailable']);
});

test('an already aborted open does not start file I/O', async () => {
  const controller = new AbortController(); controller.abort();
  await assert.rejects(createBlobTransport(engine, { slice() { throw Error('unexpected I/O'); } }, { signal: controller.signal }), { name: 'AbortError' });
});

test('snapshot cache evicts least recently used images within the pixel budget', () => {
  const closed = [];
  const bitmap = id => ({ width: 10, height: 10, close() { closed.push(id); } });
  const cache = new PageBitmapCache(800);
  cache.set(1, { bitmap: bitmap(1) }); cache.set(2, { bitmap: bitmap(2) });
  cache.get(1); cache.set(3, { bitmap: bitmap(3) });
  assert.deepEqual([...cache.entries.keys()], [1, 3]);
  assert.deepEqual(closed, [2]);
  cache.set(1, { bitmap: bitmap(4) });
  assert.deepEqual(closed, [2, 1]);
  cache.clear(); assert.equal(cache.bytes, 0);
  assert.deepEqual(closed, [2, 1, 3, 4]);
});

test('oversized snapshots are released instead of exceeding the cache budget', () => {
  const cache = new PageBitmapCache(100);
  let closed = false;
  cache.set(1, { bitmap: { width: 100, height: 100, close() { closed = true; } } });
  assert.equal(closed, true); assert.equal(cache.bytes, 0);
});

test('virtual layout matches mixed page sizes and all distant navigation targets', () => {
  const layout = new PageLayoutIndex(1029, 792);
  const sizes = new Map([[2, 1200], [50, 400], [500, 1400], [1029, 500]]);
  for (const [page, height] of sizes) layout.setHeight(page, height);
  let top = 18;
  for (let page = 1; page <= 1029; page++) {
    assert.equal(layout.top(page), top);
    assert.equal(layout.pageAt(top + 1), page);
    assert.equal(layout.entryAt(top + 20).height, sizes.get(page) || 792);
    top += (sizes.get(page) || 792) + 20;
  }
  assert.equal(layout.top(1030), top);
  assert.equal(layout.pageAt(-100), 1);
  assert.equal(layout.pageAt(top + 1000), 1029);
});

test('remeasuring a page updates distant prefix sums without stale corrections', () => {
  const layout = new PageLayoutIndex(100000, 800);
  layout.setHeight(5, 1200); layout.setHeight(5, 600);
  assert.equal(layout.top(90000), 18 + 89999 * 820 - 200);
  layout.setHeight(5, 800);
  assert.equal(layout.top(90000), 18 + 89999 * 820);
});
