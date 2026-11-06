/*
 * Browser half of the reader's AI features.
 *
 * Every call is same-origin and carries the `X-DSH-Reader` marker the Host
 * route requires. The Host owns the model choice and credentials; this module
 * never sees an API key.
 */

const HEADERS = Object.freeze({
  'content-type': 'application/json',
  'x-dsh-reader': '1',
});

class ReaderApiError extends Error {
  constructor(message, code = 'REQUEST_FAILED', status = 0) {
    super(message);
    this.name = 'ReaderApiError';
    this.code = code;
    this.status = status;
  }
}

async function readError(response) {
  let body = null;
  try {
    body = await response.json();
  } catch {
    // A proxy or an older Host may answer with plain text.
  }
  return new ReaderApiError(
    body?.error?.message || body?.message || `翻译服务不可用（HTTP ${response.status}）。`,
    body?.error?.code || body?.code || 'REQUEST_FAILED',
    response.status,
  );
}

async function postJson(path, payload, { signal } = {}) {
  let response;
  try {
    response = await fetch(path, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
      signal,
      credentials: 'same-origin',
    });
  } catch (error) {
    if (error?.name === 'AbortError') throw error;
    throw new ReaderApiError('无法连接到 DSH 主进程，请确认 DSH 正在运行。', 'NETWORK', 0);
  }
  if (!response.ok) throw await readError(response);
  return response;
}

export function isAbortError(error) {
  return error?.name === 'AbortError';
}

/**
 * Translate a batch of segments. The Host returns the same ids so the caller
 * can attach translations even if the model reorders output.
 *
 * @param {{ id: string, text: string }[]} segments
 * @param {{ context?: string, title?: string, signal?: AbortSignal }} [options]
 * @returns {Promise<Record<string, string>>}
 */
export async function translateSegments(segments, options = {}) {
  const clean = segments
    .map((segment) => ({ id: String(segment.id), text: String(segment.text ?? '') }))
    .filter((segment) => segment.text.trim() !== '');
  if (clean.length === 0) return {};
  const response = await postJson('/dsh-reader/ai/translate', {
    segments: clean,
    context: String(options.context ?? '').slice(0, 1200),
    title: String(options.title ?? '').slice(0, 300),
    glossary: String(options.glossary ?? '').slice(0, 4000),
    ...(options.expectedModel ? { expectedModel: options.expectedModel } : {}),
  }, { signal: options.signal });
  const body = await response.json().catch(() => null);
  if (!body || typeof body !== 'object' || !Array.isArray(body.translations)) {
    throw new ReaderApiError('翻译服务返回了无法识别的结果。', 'BAD_RESPONSE', response.status);
  }
  const out = {};
  for (const item of body.translations) {
    if (item && typeof item.id === 'string' && typeof item.zh === 'string' && item.zh.trim() !== '') {
      out[item.id] = item.zh;
    }
  }
  if (Object.keys(out).length === 0) {
    throw new ReaderApiError('翻译服务没有返回可用译文，请稍后重试。', 'EMPTY_TRANSLATION', response.status);
  }
  return options.includeMetadata
    ? { translations: out, model: body.model, promptVersion: body.promptVersion }
    : out;
}

export async function getTranslationModel({ signal } = {}) {
  const response = await fetch('/dsh-reader/ai/status', { signal, credentials: 'same-origin', headers: { 'x-dsh-reader': '1' }, cache: 'no-store' });
  if (!response.ok) throw await readError(response);
  return response.json();
}

function parseSseBlock(block) {
  const data = block
    .split(/\r?\n/u)
    .filter((line) => line.startsWith('data:'))
    .map((line) => line.slice(5).trimStart())
    .join('\n');
  if (data === '') return null;
  try {
    return JSON.parse(data);
  } catch {
    return { type: 'delta', text: data };
  }
}

/**
 * Stream one AI answer. `onDelta` receives visible text, `onMeta` receives
 * non-text status events, and the returned promise resolves when the Host's
 * terminal event arrives.
 *
 * @param {{ messages: { role: 'user'|'assistant', content: string }[], selection?: string, context?: string, signal?: AbortSignal }} payload
 * @param {{ onDelta: (text: string) => void, onMeta?: (event: any) => void }} handlers
 */
export async function streamAI(payload, { onDelta, onMeta } = {}) {
  const response = await postJson('/dsh-reader/ai/chat', payload, { signal: payload.signal });
  if (!response.body) {
    throw new ReaderApiError('当前浏览器不支持流式响应。', 'NO_STREAM', response.status);
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let finished = false;
  let failure = null;

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let boundary = buffer.search(/\r?\n\r?\n/u);
      while (boundary !== -1) {
        const block = buffer.slice(0, boundary);
        const separator = buffer.slice(boundary).match(/^\r?\n\r?\n/u)?.[0] ?? '\n\n';
        buffer = buffer.slice(boundary + separator.length);
        const event = parseSseBlock(block);
        if (event) {
          if (event.type === 'delta' && typeof event.text === 'string') {
            onDelta?.(event.text);
          } else if (event.type === 'error') {
            failure = new ReaderApiError(event.message || 'AI 回答失败。', event.code || 'AI_FAILED');
          } else if (event.type === 'done') {
            finished = true;
          } else {
            onMeta?.(event);
          }
        }
        boundary = buffer.search(/\r?\n\r?\n/u);
      }
    }
    if (buffer.trim() !== '') {
      const event = parseSseBlock(buffer);
      if (event?.type === 'delta' && typeof event.text === 'string') onDelta?.(event.text);
      if (event?.type === 'error') failure = new ReaderApiError(event.message || 'AI 回答失败。', event.code || 'AI_FAILED');
      if (event?.type === 'done') finished = true;
    }
  } finally {
    reader.releaseLock?.();
  }

  if (failure) throw failure;
  if (!finished) {
    // A closed stream without the terminal marker is still a complete answer;
    // the Host also closes on cancellation, which the signal already covers.
  }
}

export { ReaderApiError };

/**
 * Download a book from one of the Host's allow-listed public sources and wrap
 * it as a File so the normal import pipeline (saveBook → openBook) can consume
 * it. The Host proxies the request to avoid browser CORS limits.
 *
 * @param {string} url
 * @param {{ signal?: AbortSignal }} [options]
 * @returns {Promise<File>}
 */
export async function fetchRemoteBook(url, { signal } = {}) {
  const response = await postJson('/dsh-reader/import/fetch', { url: String(url || '') }, { signal });
  const blob = await response.blob();
  if (!blob.size) throw new ReaderApiError('来源返回了空文件。', 'EMPTY', 0);
  let filename = 'book';
  const encoded = response.headers.get('x-dsh-reader-filename');
  if (encoded) {
    try { filename = decodeURIComponent(encoded); } catch { filename = encoded; }
  }
  return new File([blob], filename, { type: blob.type || 'application/octet-stream' });
}

/**
 * Ask the Host for a short, deterministic one-shot explanation. The reader uses
 * the streaming route for its panel; this helper exists for tests and compact
 * menu actions.
 */
export async function explainOnce({ selection, context, question, signal }) {
  let text = '';
  await streamAI({
    messages: [{ role: 'user', content: String(question || '请解释这段文字。') }],
    selection: String(selection ?? ''),
    context: String(context ?? ''),
    signal,
  }, {
    onDelta: (delta) => { text += delta; },
  });
  return text;
}
