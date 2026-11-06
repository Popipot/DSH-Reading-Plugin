import dns from 'node:dns/promises';
import net from 'node:net';

const MARKER = 'x-dsh-reader';
const IMPORT_PATH = '/dsh-reader/import/fetch';
const MAX_BODY_BYTES = 8 * 1024;
const MAX_FILE_BYTES = 120 * 1024 * 1024;
const MAX_REDIRECTS = 4;
const FETCH_TIMEOUT_MS = 90_000;

/**
 * A deliberately small allow-list of public-domain / open-access sources.
 * This is a legal-source importer, not a general web proxy: Z-Library and
 * similar shadow libraries are intentionally absent.
 */
const ALLOWED_DOMAINS = Object.freeze([
  'gutenberg.org',
  'gutenberg.net.au',
  'standardebooks.org',
  'arxiv.org',
  'openlibrary.org',
  'archive.org',
  'europepmc.org',
  'ncbi.nlm.nih.gov',
  'plos.org',
  'doaj.org',
  'wikisource.org',
]);

const EXTENSION_BY_MIME = Object.freeze({
  'application/pdf': 'pdf',
  'application/epub+zip': 'epub',
  'application/x-mobipocket-ebook': 'mobi',
  'application/vnd.amazon.ebook': 'azw',
  'application/x-mobi8-ebook': 'azw3',
  'text/plain': 'txt',
  'text/markdown': 'md',
  'text/html': 'html',
  'application/xhtml+xml': 'html',
});

const SUPPORTED_EXTENSIONS = new Set(['pdf', 'epub', 'mobi', 'azw', 'azw3', 'txt', 'md', 'html', 'htm']);

class ImportError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = 'ImportError';
    this.status = status;
    this.code = code;
  }
}

function sendJson(res, status, value) {
  if (res.writableEnded) return;
  const body = JSON.stringify(value);
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.setHeader('x-content-type-options', 'nosniff');
  res.end(body);
}

function sendError(res, error) {
  if (res.headersSent) {
    try { res.end(); } catch { /* connection gone */ }
    return;
  }
  sendJson(res, error?.status ?? 500, {
    error: {
      code: error?.code ?? 'INTERNAL',
      message: error?.message ?? '在线导入失败。',
    },
  });
}

function hostAllowed(hostname) {
  const host = String(hostname || '').toLowerCase();
  return ALLOWED_DOMAINS.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

function privateIPv4(address) {
  const parts = address.split('.').map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return true;
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a >= 224) return true;
  return false;
}

function privateAddress(address) {
  const family = net.isIP(address);
  if (family === 4) return privateIPv4(address);
  if (family !== 6) return true;
  const normalized = address.toLowerCase();
  if (normalized === '::' || normalized === '::1') return true;
  if (normalized.startsWith('fc') || normalized.startsWith('fd')) return true;
  if (normalized.startsWith('fe8') || normalized.startsWith('fe9') || normalized.startsWith('fea') || normalized.startsWith('feb')) return true;
  if (normalized.startsWith('ff')) return true;
  if (normalized.startsWith('::ffff:')) return privateIPv4(normalized.slice(7));
  return false;
}

async function assertPublicHost(hostname) {
  let addresses;
  try {
    addresses = await dns.lookup(hostname, { all: true, verbatim: true });
  } catch {
    throw new ImportError(502, 'DNS', `无法解析来源域名：${hostname}`);
  }
  if (!addresses.length) throw new ImportError(502, 'DNS', `无法解析来源域名：${hostname}`);
  for (const item of addresses) {
    if (privateAddress(item.address)) {
      throw new ImportError(403, 'PRIVATE_HOST', '该来源指向内网地址，已拒绝。');
    }
  }
}

function assertAllowedUrl(raw) {
  let url;
  try {
    url = new URL(String(raw || ''));
  } catch {
    throw new ImportError(400, 'BAD_URL', '请输入完整的 http(s) 链接。');
  }
  if (url.protocol !== 'https:') throw new ImportError(400, 'BAD_PROTOCOL', '只支持 https 链接。');
  if (!hostAllowed(url.hostname)) {
    throw new ImportError(403, 'SOURCE_NOT_ALLOWED', '目前只支持古登堡、Standard Ebooks、arXiv、Open Library、Internet Archive 等公开来源的直链。');
  }
  return url;
}

function filenameFromDisposition(header) {
  if (!header) return '';
  const utf8 = /filename\*\s*=\s*UTF-8''([^;]+)/iu.exec(header);
  if (utf8) {
    try { return decodeURIComponent(utf8[1].trim()); } catch { return utf8[1].trim(); }
  }
  const quoted = /filename\s*=\s*"([^"]+)"/iu.exec(header);
  if (quoted) return quoted[1].trim();
  const bare = /filename\s*=\s*([^;]+)/iu.exec(header);
  return bare ? bare[1].trim() : '';
}

function safeFilename(value) {
  const base = String(value || '')
    .replace(/[\\/:*?"<>|\u0000-\u001f]/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .slice(0, 180);
  return base || 'book';
}

function resolvedFilename(url, headers) {
  let name = filenameFromDisposition(headers.get('content-disposition'));
  let extension = '';
  const pathName = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || '');
  if (!name && pathName) name = pathName;
  const pathExt = /\.([a-z0-9]{2,5})$/iu.exec(name)?.[1]?.toLowerCase() || '';
  if (SUPPORTED_EXTENSIONS.has(pathExt)) extension = pathExt;
  if (!extension) {
    const mime = String(headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    extension = EXTENSION_BY_MIME[mime] || '';
  }
  if (!extension) throw new ImportError(415, 'NOT_A_BOOK', '这个链接没有返回 PDF/EPUB/MOBI/TXT 等可读文件。');
  name = safeFilename(name || 'book');
  if (!SUPPORTED_EXTENSIONS.has(/\.([a-z0-9]{2,5})$/iu.exec(name)?.[1]?.toLowerCase() || '')) {
    name = `${name.replace(/\.[a-z0-9]{2,5}$/iu, '')}.${extension}`;
  }
  return name;
}

async function fetchBook(url) {
  let current = url;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop += 1) {
    await assertPublicHost(current.hostname);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    let response;
    try {
      response = await fetch(current, {
        method: 'GET',
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          'user-agent': 'dsh-reader/0.1 (+https://github.com/deepseek-ai/deepseek-harness)',
          accept: 'application/pdf,application/epub+zip,application/x-mobipocket-ebook,application/vnd.amazon.ebook,text/plain,text/markdown,text/html;q=0.6,*/*;q=0.1',
        },
      });
    } catch (error) {
      clearTimeout(timer);
      if (error?.name === 'AbortError') throw new ImportError(504, 'TIMEOUT', '下载超时，请稍后重试。');
      throw new ImportError(502, 'FETCH', '无法连接来源站点，请检查网络或链接。');
    }
    clearTimeout(timer);
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location) throw new ImportError(502, 'REDIRECT', '来源站点返回了无效跳转。');
      current = assertAllowedUrl(new URL(location, current).toString());
      continue;
    }
    if (!response.ok) {
      throw new ImportError(502, 'UPSTREAM', `来源站点返回 HTTP ${response.status}。`);
    }
    const length = Number(response.headers.get('content-length') || 0);
    if (Number.isFinite(length) && length > MAX_FILE_BYTES) {
      throw new ImportError(413, 'TOO_LARGE', '文件超过 120 MB，暂不支持在线导入。');
    }
    const chunks = [];
    let total = 0;
    try {
      for await (const chunk of response.body) {
        total += chunk.length;
        if (total > MAX_FILE_BYTES) throw new ImportError(413, 'TOO_LARGE', '文件超过 120 MB，暂不支持在线导入。');
        chunks.push(Buffer.from(chunk));
      }
    } catch (error) {
      if (error instanceof ImportError) throw error;
      throw new ImportError(502, 'DOWNLOAD', '下载文件时连接中断。');
    }
    if (total === 0) throw new ImportError(502, 'EMPTY', '来源返回了空文件。');
    return {
      buffer: Buffer.concat(chunks, total),
      filename: resolvedFilename(current, response.headers),
      contentType: String(response.headers.get('content-type') || 'application/octet-stream').split(';')[0],
    };
  }
  throw new ImportError(508, 'TOO_MANY_REDIRECTS', '跳转次数过多。');
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const length = Number(req.headers['content-length'] || 0);
    if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
      reject(new ImportError(413, 'BODY_TOO_LARGE', '请求体过大。'));
      return;
    }
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new ImportError(413, 'BODY_TOO_LARGE', '请求体过大。'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        const value = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
        if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('bad');
        resolve(value);
      } catch {
        reject(new ImportError(400, 'BAD_JSON', '请求体不是合法 JSON。'));
      }
    });
    req.on('error', () => reject(new ImportError(400, 'REQUEST', '读取请求体失败。')));
  });
}

function assertRequest(req) {
  if (req.method !== 'POST') throw new ImportError(405, 'METHOD', '只支持 POST。');
  if (req.headers[MARKER] !== '1') throw new ImportError(403, 'MARKER', '缺少阅读器请求标记。');
  const type = String(req.headers['content-type'] || '').toLowerCase();
  if (!type.startsWith('application/json')) throw new ImportError(415, 'CONTENT_TYPE', '请求体必须是 application/json。');
  const site = req.headers['sec-fetch-site'];
  if (site !== undefined && site !== 'same-origin' && site !== 'none') {
    throw new ImportError(403, 'CROSS_SITE', '不接受跨站请求。');
  }
}

function rateLimiter(limit = 8, windowMs = 10 * 60 * 1000) {
  const buckets = new Map();
  return (key) => {
    const now = Date.now();
    if (buckets.size > 512) {
      for (const [bucketKey, bucket] of buckets) {
        if (now - bucket.startedAt > windowMs) buckets.delete(bucketKey);
      }
    }
    let bucket = buckets.get(key);
    if (!bucket || now - bucket.startedAt > windowMs) {
      bucket = { startedAt: now, count: 0 };
      buckets.set(key, bucket);
    }
    bucket.count += 1;
    return bucket.count <= limit;
  };
}

export function registerImportRoutes(webServer) {
  const allowed = rateLimiter();

  async function handle(req, res) {
    try {
      assertRequest(req);
      const ip = req.socket?.remoteAddress || 'local';
      if (!allowed(ip)) throw new ImportError(429, 'RATE_LIMIT', '在线导入请求过于频繁，请稍后再试。');
      const body = await readJsonBody(req);
      const url = assertAllowedUrl(body.url);
      const book = await fetchBook(url);
      const encodedName = encodeURIComponent(book.filename);
      res.statusCode = 200;
      res.setHeader('content-type', book.contentType === 'text/html' ? 'application/octet-stream' : book.contentType);
      res.setHeader('content-length', book.buffer.length);
      res.setHeader('content-disposition', `attachment; filename="${book.filename.replace(/[^\x20-\x7e]/gu, '_')}"`);
      res.setHeader('x-dsh-reader-filename', encodedName);
      res.setHeader('cache-control', 'no-store');
      res.setHeader('x-content-type-options', 'nosniff');
      res.end(book.buffer);
    } catch (error) {
      sendError(res, error);
    }
  }

  const dispose = webServer.register({ kind: 'exact', path: IMPORT_PATH, handler: handle });
  return () => dispose();
}

export const IMPORT_ALLOWED_DOMAINS = ALLOWED_DOMAINS;
