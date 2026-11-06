// Shared helpers for the dsh-reader format engine.
// Browser-only: no Node built-ins are imported here.

/** Lowercase extension without the dot. */
export function extensionOf(fileName) {
  if (typeof fileName !== 'string' || !fileName) return '';
  const base = fileName.split(/[\\/]/).pop() || '';
  const match = /\.([A-Za-z0-9]+)$/.exec(base);
  return match ? match[1].toLowerCase() : '';
}

export function basename(path) {
  const text = String(path || '').replace(/\\/g, '/');
  const index = text.lastIndexOf('/');
  return index >= 0 ? text.slice(index + 1) : text;
}

export function dirname(path) {
  const text = String(path || '').replace(/\\/g, '/');
  const index = text.lastIndexOf('/');
  return index > 0 ? text.slice(0, index) : '';
}

/** Collapse `.` / `..` / duplicate slashes; strip a leading slash. */
export function normalizeZipPath(path) {
  const parts = [];
  for (const segment of String(path || '').replace(/\\/g, '/').split('/')) {
    if (!segment || segment === '.') continue;
    if (segment === '..') {
      parts.pop();
      continue;
    }
    parts.push(segment);
  }
  return parts.join('/');
}

/** Split `path#fragment` (also strips a query string). */
export function splitHref(href) {
  const raw = String(href || '');
  const hashIndex = raw.indexOf('#');
  const beforeHash = hashIndex >= 0 ? raw.slice(0, hashIndex) : raw;
  let fragment = hashIndex >= 0 ? raw.slice(hashIndex + 1) : '';
  try {
    fragment = decodeURIComponent(fragment);
  } catch {
    /* keep the raw fragment */
  }
  const queryIndex = beforeHash.indexOf('?');
  return {
    path: queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash,
    fragment,
  };
}

/**
 * Resolve a document-internal href against the directory of the document that
 * contains it. Returns a normalized archive path or `null` for absolute /
 * remote URLs.
 */
export function resolveArchivePath(baseDir, href) {
  if (!href) return null;
  const raw = String(href).trim();
  if (!raw || raw.startsWith('#')) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(raw) || raw.startsWith('//')) return null;
  const { path } = splitHref(raw);
  if (!path) return null;
  let decoded = path;
  try {
    decoded = decodeURIComponent(path);
  } catch {
    /* malformed escape: use as-is */
  }
  decoded = decoded.replace(/\\/g, '/');
  const combined = decoded.startsWith('/')
    ? decoded.slice(1)
    : (baseDir ? `${baseDir}/${decoded}` : decoded);
  return normalizeZipPath(combined) || null;
}

/** Case-insensitive ZIP entry index with O(1) paths. */
export function createEntryIndex(entries) {
  const map = new Map();
  const names = [];
  for (const [rawName, bytes] of Object.entries(entries || {})) {
    if (!bytes || /\/$/.test(rawName)) continue;
    const name = normalizeZipPath(rawName);
    if (!name) continue;
    const lower = name.toLowerCase();
    if (map.has(lower)) continue;
    map.set(lower, { name, bytes });
    names.push(name);
  }
  return {
    names,
    get(path) {
      const normalized = normalizeZipPath(path || '');
      if (!normalized) return null;
      return map.get(normalized.toLowerCase()) || null;
    },
    has(path) {
      return Boolean(this.get(path));
    },
  };
}

const IMAGE_MIME = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  jpe: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  avif: 'image/avif',
  bmp: 'image/bmp',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  jxl: 'image/jxl',
};

export function mimeFromPath(path) {
  return IMAGE_MIME[extensionOf(path)] || 'application/octet-stream';
}

const MIME_EXT = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/bmp': 'bmp',
  'image/tiff': 'tiff',
  'image/svg+xml': 'svg',
};

export async function readBlobBytes(blob) {
  if (!blob || typeof blob.arrayBuffer !== 'function') {
    throw new Error('无法读取文件数据：请选择一个有效的文档文件。');
  }
  let buffer;
  try {
    buffer = await blob.arrayBuffer();
  } catch {
    throw new Error('无法读取文件数据，文件可能已被移动或损坏。');
  }
  const bytes = new Uint8Array(buffer);
  if (bytes.length === 0) throw new Error('文件内容为空。');
  return bytes;
}

/** Collect deduplicated, bounded, user-facing parse warnings. */
export function createWarningSink(limit = 40) {
  const warnings = [];
  const seen = new Set();
  let overflowed = false;
  const warn = (message) => {
    const text = String(message || '').trim();
    if (!text || seen.has(text)) return;
    seen.add(text);
    if (warnings.length < limit) {
      warnings.push(text);
    } else if (!overflowed) {
      overflowed = true;
      warnings.push('还有更多解析警告未显示。');
    }
  };
  return { warnings, warn };
}

/** Make sure every error that reaches the UI has a readable Chinese message. */
export function asChineseError(error, prefix) {
  if (error instanceof Error && /[\u4e00-\u9fff]/.test(error.message)) return error;
  const detail = error instanceof Error ? error.message : String(error ?? '');
  const message = detail ? `${prefix}：${detail}` : `${prefix}。`;
  return new Error(/[。！？]$/.test(message) ? message : `${message}。`);
}

/**
 * Fill chapter titles from TOC labels and assemble a TOC that covers every
 * chapter (chapters missing from the source TOC get a fallback entry).
 */
export function buildToc(chapters, sourceEntries) {
  const valid = (Array.isArray(sourceEntries) ? sourceEntries : []).filter((entry) => (
    entry
    && Number.isInteger(entry.chapterIndex)
    && entry.chapterIndex >= 0
    && entry.chapterIndex < chapters.length
    && entry.title
  ));
  for (let index = 0; index < chapters.length; index += 1) {
    const first = valid.find((entry) => entry.chapterIndex === index);
    const heading = chapters[index].blocks.find((block) => block.kind === 'heading' && block.text);
    chapters[index].title = (first?.title || heading?.text || `第 ${index + 1} 章`).slice(0, 120);
  }
  if (valid.length === 0) {
    return chapters.map((chapter, chapterIndex) => ({ title: chapter.title, chapterIndex, depth: 0 }));
  }
  const toc = [];
  const seen = new Set();
  for (let index = 0; index < chapters.length; index += 1) {
    const forChapter = valid.filter((entry) => entry.chapterIndex === index);
    if (forChapter.length === 0) {
      const fallback = { title: chapters[index].title, chapterIndex: index, depth: 0 };
      const key = `${index}|${fallback.title}|0`;
      if (!seen.has(key)) {
        seen.add(key);
        toc.push(fallback);
      }
      continue;
    }
    for (const entry of forChapter) {
      const depth = Number.isInteger(entry.depth) && entry.depth >= 0 ? entry.depth : 0;
      const anchor = entry.anchor ? String(entry.anchor).slice(0, 300) : '';
      const key = `${entry.chapterIndex}|${entry.title}|${depth}|${anchor}`;
      if (seen.has(key)) continue;
      seen.add(key);
      toc.push({ title: entry.title, chapterIndex: entry.chapterIndex, depth, ...(anchor ? { anchor } : {}) });
    }
  }
  return toc;
}

/** Fallback display title from a file name. */
export function titleFromFileName(fileName, fallback = '未命名文档') {
  const base = basename(String(fileName || ''));
  return base.replace(/\.[A-Za-z0-9]+$/, '') || fallback;
}

/** Best-effort object URL tracker. All URLs are revoked by `dispose()`. */
export function createUrlTracker() {
  const urls = [];
  return {
    urls,
    create(blob) {
      const url = URL.createObjectURL(blob);
      urls.push(url);
      return url;
    },
    add(url) {
      if (url && !urls.includes(url)) urls.push(url);
      return url;
    },
    dispose() {
      while (urls.length > 0) {
        const url = urls.pop();
        try {
          URL.revokeObjectURL(url);
        } catch {
          /* revoking twice is harmless */
        }
      }
    },
  };
}

/** Decode a `data:` URI into a Blob, or return null. */
export function dataUriToBlob(dataUri) {
  const match = /^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(dataUri || ''));
  if (!match) return null;
  const mime = match[1] || 'application/octet-stream';
  const meta = match[2] || '';
  const payload = match[3] || '';
  const isBase64 = /;base64/i.test(meta);
  try {
    let binary;
    if (isBase64) {
      const cleaned = payload.replace(/\s+/g, '');
      binary = atob(cleaned);
    } else {
      binary = decodeURIComponent(payload);
    }
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i) & 0xff;
    return new Blob([bytes], { type: mime });
  } catch {
    return null;
  }
}

function labelFromCharset(charset) {
  const label = String(charset || '').trim().toLowerCase();
  if (!label) return 'utf-8';
  if (/^(utf-?8|utf8)$/.test(label)) return 'utf-8';
  if (/^utf-?16(le)?$/.test(label)) return 'utf-16le';
  if (/^utf-?16be$/.test(label)) return 'utf-16be';
  if (/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(label)) return 'gb18030';
  if (/^(big5|big5-hkscs|cp950)$/.test(label)) return 'big5';
  if (/^(shift_jis|sjis|windows-31j|cp932)$/.test(label)) return 'shift_jis';
  if (/^(euc-kr|ks_c_5601-1987|cp949)$/.test(label)) return 'euc-kr';
  if (/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(label)) return 'windows-1252';
  return label;
}

function decodeRange(bytes, encoding, fatal = false) {
  return new TextDecoder(encoding, { fatal }).decode(bytes);
}

const DECLARATION_RE = /(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i;

function sniffDeclaredEncoding(bytes) {
  const head = decodeRange(bytes.subarray(0, Math.min(bytes.length, 512)), 'windows-1252');
  const match = DECLARATION_RE.exec(head);
  if (!match) return '';
  return match[1] || match[2] || '';
}

/**
 * Decode bytes that are supposed to be UTF-8/UTF-16 (EPUB, OPF, NCX, HTML).
 * Honours BOMs and an XML/HTML `encoding=`/`charset=` declaration.
 */
export function decodeBytes(input, { defaultEncoding = 'utf-8', sniffDeclaration = true } = {}) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (bytes.length === 0) return '';
  if (bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) {
    return decodeRange(bytes.subarray(3), 'utf-8');
  }
  if (bytes[0] === 0xff && bytes[1] === 0xfe) {
    return decodeRange(bytes.subarray(2), 'utf-16le');
  }
  if (bytes[0] === 0xfe && bytes[1] === 0xff) {
    return decodeRange(bytes.subarray(2), 'utf-16be');
  }
  let encoding = defaultEncoding || 'utf-8';
  if (sniffDeclaration) {
    const declared = sniffDeclaredEncoding(bytes);
    if (declared) encoding = labelFromCharset(declared);
  }
  encoding = labelFromCharset(encoding);
  try {
    return decodeRange(bytes, encoding, true);
  } catch {
    try {
      return decodeRange(bytes, 'utf-8', true);
    } catch {
      return decodeRange(bytes, 'utf-8', false);
    }
  }
}

/** Heuristic guard against feeding binary garbage into the text parser. */
export function looksBinary(text) {
  if (!text) return false;
  const sample = text.slice(0, 4096);
  if (!sample) return false;
  let bad = 0;
  for (let i = 0; i < sample.length; i += 1) {
    const code = sample.charCodeAt(i);
    if (code === 0xfffd || code === 0 || (code < 9) || (code > 13 && code < 32)) bad += 1;
  }
  return bad / sample.length > 0.08;
}

export { MIME_EXT };
