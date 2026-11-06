// Shared by the reader and cover generation: one versioned engine, real parsing
// worker, optional renderer worker, and random-access local Blob transport.
export const PDF_ASSET_VERSION = '6.5.438-reader3';
const BASE = '/dsh-reader-assets/';
let enginePromise;
function engineModuleUrl() { return `${BASE}pdf.bundle.js?v=${PDF_ASSET_VERSION}`; }

export function loadPdfEngine() {
  return enginePromise ||= import(engineModuleUrl()).then(engine => {
    if (!engine?.getDocument || !engine.GlobalWorkerOptions) throw new Error('PDF 引擎资源格式不正确');
    engine.GlobalWorkerOptions.workerSrc = `${BASE}pdf.worker.mjs?v=${PDF_ASSET_VERSION}`;
    engine.GlobalWorkerOptions.rendererSrc = `${BASE}pdf.renderer.mjs?v=${PDF_ASSET_VERSION}`;
    return engine;
  }).catch(error => { enginePromise = null; throw error; });
}

export const abortError = () => new DOMException('PDF operation cancelled', 'AbortError');
const checkSignal = signal => { if (signal?.aborted) throw abortError(); };

// PDF.js calls transportReady before requesting ranges. Each response owns its
// byte buffer, so transferring it cannot detach the stored Blob or another read.
export async function createBlobTransport(engine, blob, { signal, onRead, onError } = {}) {
  checkSignal(signal);
  const chunkSize = 256 * 1024;
  const initialData = new Uint8Array(await blob.slice(0, Math.min(chunkSize, blob.size)).arrayBuffer());
  checkSignal(signal);
  const stats = { bytes: initialData.length, reads: 1, total: blob.size };
  class BlobTransport extends engine.PDFDataRangeTransport {
    constructor() { super(blob.size, initialData, true); }
    aborted = false;
    queue = [];
    active = 0;
    requestDataRange(begin, end) {
      if (this.aborted || signal?.aborted) return;
      this.queue.push({ begin, end });
      this.pump();
    }
    pump() {
      while (!this.aborted && this.active < 2 && this.queue.length) {
        const { begin, end } = this.queue.shift();
        this.active++;
        blob.slice(begin, end).arrayBuffer().then(buffer => {
          if (this.aborted || signal?.aborted) return;
          const chunk = new Uint8Array(buffer);
          if (chunk.length !== end - begin) throw new Error('PDF 分段读取不完整');
          stats.bytes += chunk.length;
          stats.reads++;
          onRead?.({ ...stats });
          this.onDataRange(begin, chunk);
        }).catch(error => {
          if (this.aborted || signal?.aborted) return;
          this.abort();
          onError?.(error);
        }).finally(() => { this.active--; this.pump(); });
      }
    }
    abort() { this.aborted = true; this.queue.length = 0; }
  }
  onRead?.({ ...stats });
  return { range: new BlobTransport(), stats, rangeChunkSize: chunkSize,
    disableStream: true, disableAutoFetch: true };
}

export async function openPdfDocument(data, { signal, onProgress, onRead, onError } = {}) {
  checkSignal(signal);
  const engine = await loadPdfEngine();
  checkSignal(signal);
  let task, range, worker, timer, closed = false, closePromise;
  let rejectFailure;
  const failure = new Promise((_, reject) => { rejectFailure = reject; });
  // A failure can arrive during startup before the loading race is installed.
  failure.catch(() => {});
  const close = () => {
    if (closePromise) return closePromise;
    closed = true;
    clearTimeout(timer);
    range?.abort();
    signal?.removeEventListener('abort', onAbort);
    closePromise = Promise.resolve().then(() => task?.destroy()).catch(() => {}).finally(() => worker?.destroy());
    return closePromise;
  };
  const onAbort = () => { rejectFailure(abortError()); void close(); };
  signal?.addEventListener('abort', onAbort, { once: true });
  try {
    worker = new engine.PDFWorker({ verbosity: 0 });
    await Promise.race([worker.promise, failure, new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('PDF 后台线程启动超时，请检查 Host 的 Worker 资源与安全策略。')), 10000);
    })]);
    clearTimeout(timer);
    checkSignal(signal);
    if (typeof Worker !== 'function' || !(worker.port instanceof Worker)) {
      throw new Error('PDF 后台线程不可用，请检查 /dsh-reader-assets/pdf.worker.mjs 和 Host 的 Worker 安全策略。');
    }
    let source;
    if (typeof Blob !== 'undefined' && data instanceof Blob) {
      source = await createBlobTransport(engine, data, { signal, onRead, onError: error => {
        rejectFailure(error); onError?.(error); void close();
      } });
      range = source.range;
    } else {
      const bytes = data instanceof ArrayBuffer ? new Uint8Array(data) : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
      source = { data: bytes.slice() };
    }
    checkSignal(signal);
    if (closed) throw abortError();
    task = engine.getDocument({ ...source, worker,
      cMapUrl: `${BASE}cmaps/`, cMapPacked: true,
      standardFontDataUrl: `${BASE}standard_fonts/`, wasmUrl: `${BASE}wasm/`, iccUrl: `${BASE}iccs/`,
      isEvalSupported: false, disableWorkerRendering: false, verbosity: 0 });
    task.onProgress = onProgress;
    const pdf = await Promise.race([task.promise, failure]);
    checkSignal(signal);
    if (closed) throw abortError();
    return { engine, pdf, close, source };
  } catch (error) { await close(); throw error; }
}
