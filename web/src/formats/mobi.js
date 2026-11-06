// MOBI / PalmDOC reader.
//
// The heavy lifting is done by @lingo-reader/mobi-parser (browser-safe bundle,
// verified with esbuild against a real Project Gutenberg MOBI). A built-in
// fallback handles type TEXtREAd (plain PalmDOC) files and BOOKMOBI files the
// library cannot open; it supports uncompressed and PalmDOC-LZ77 records.
import { initKf8File, initMobiFile } from '@lingo-reader/mobi-parser';
import {
  normalizeText,
  parseHtmlDocument,
} from './sanitize.js';
import { extractBlocks } from './html-blocks.js';
import { plainTextToChapters } from './text.js';
import {
  asChineseError,
  buildToc,
  createUrlTracker,
  createWarningSink,
  dataUriToBlob,
  readBlobBytes,
  titleFromFileName,
} from './util.js';

const COMPRESSION_NONE = 0;
const COMPRESSION_PALMDOC = 2;
const COMPRESSION_HUFFCDIC = 17480;

const MOBI_ENCODINGS = {
  65001: 'utf-8',
  65000: 'utf-7',
  1250: 'windows-1250',
  1251: 'windows-1251',
  1252: 'windows-1252',
  932: 'shift_jis',
  936: 'gb18030',
  949: 'euc-kr',
  950: 'big5',
};

function asciiAt(bytes, offset, length) {
  let text = '';
  for (let index = 0; index < length; index += 1) {
    const code = bytes[offset + index] ?? 0;
    text += code >= 32 && code < 127 ? String.fromCharCode(code) : '';
  }
  return text;
}

function be16(bytes, offset) {
  return ((bytes[offset] ?? 0) << 8) | (bytes[offset + 1] ?? 0);
}

function be32(bytes, offset) {
  return (((bytes[offset] ?? 0) * 0x1000000)
    + (((bytes[offset + 1] ?? 0) << 16) | ((bytes[offset + 2] ?? 0) << 8) | (bytes[offset + 3] ?? 0))) >>> 0;
}

function le16(bytes, offset) {
  return ((bytes[offset + 1] ?? 0) << 8) | (bytes[offset] ?? 0);
}

function le32(bytes, offset) {
  return (((bytes[offset + 3] ?? 0) * 0x1000000)
    + (((bytes[offset + 2] ?? 0) << 16) | ((bytes[offset + 1] ?? 0) << 8) | (bytes[offset] ?? 0))) >>> 0;
}

/** Parse and validate the PDB/PalmDOC header without trusting the contents. */
export function inspectMobiPdb(bytes) {
  if (bytes.length < 86) throw new Error('文件太小，不是有效的 MOBI/PalmDOC 文件。');
  const type = asciiAt(bytes, 60, 4).trim();
  const creator = asciiAt(bytes, 64, 4).trim();
  const pdbType = `${type}${creator}`;
  if (pdbType !== 'BOOKMOBI' && pdbType !== 'TEXtREAd') {
    throw new Error('文件不是 MOBI/PalmDOC 格式（缺少 PDB 文件头）。');
  }
  const numRecords = be16(bytes, 76);
  if (numRecords < 1) throw new Error('MOBI 记录表为空。');
  if (78 + numRecords * 8 + 2 > bytes.length) throw new Error('MOBI 记录表已损坏。');
  const offsets = [];
  for (let recordIndex = 0; recordIndex < numRecords; recordIndex += 1) {
    const offset = be32(bytes, 78 + recordIndex * 8);
    if (offset < 78 || offset >= bytes.length) throw new Error('MOBI 记录偏移无效，文件可能已损坏。');
    if (offsets.length > 0 && offset < offsets[offsets.length - 1]) throw new Error('MOBI 记录顺序无效。');
    offsets.push(offset);
  }
  const record0Offset = offsets[0];
  if (record0Offset + 16 > bytes.length) throw new Error('MOBI 文件头已损坏。');
  const compression = be16(bytes, record0Offset);
  const textLength = be32(bytes, record0Offset + 4);
  const recordCount = be16(bytes, record0Offset + 8);
  const recordSize = be16(bytes, record0Offset + 10);
  const encryption = be16(bytes, record0Offset + 12);
  if (encryption !== 0) throw new Error('该 MOBI 文件受 DRM 保护，无法打开。');
  if (![COMPRESSION_NONE, 1, COMPRESSION_PALMDOC, COMPRESSION_HUFFCDIC].includes(compression)) {
    throw new Error(`不支持的 MOBI 压缩方式（${compression}）。`);
  }
  let version = 0;
  let encoding = 65001;
  let isKf8 = false;
  if (pdbType === 'BOOKMOBI' && asciiAt(bytes, record0Offset + 16, 4) === 'MOBI') {
    version = le32(bytes, record0Offset + 36);
    encoding = le32(bytes, record0Offset + 28) || 65001;
    isKf8 = version === 8;
  }
  return {
    pdbType,
    numRecords,
    offsets,
    compression,
    textLength,
    recordCount,
    recordSize,
    encryption,
    version,
    encoding,
    isKf8,
  };
}

function recordBytes(bytes, offsets, index) {
  const start = offsets[index];
  if (start == null) return null;
  const end = offsets[index + 1] ?? bytes.length;
  if (end <= start) return new Uint8Array(0);
  return bytes.subarray(start, end);
}

/** PalmDOC LZ77 decompression (compression type 2). */
export function decompressPalmDoc(input) {
  const data = input instanceof Uint8Array ? input : new Uint8Array(input);
  const output = [];
  let index = 0;
  while (index < data.length) {
    const byte = data[index];
    index += 1;
    if (byte === 0) {
      output.push(0);
    } else if (byte <= 8) {
      for (let count = 0; count < byte && index < data.length; count += 1) {
        output.push(data[index]);
        index += 1;
      }
    } else if (byte <= 0x7f) {
      output.push(byte);
    } else if (byte <= 0xbf) {
      if (index >= data.length) break;
      const pair = (byte << 8) | data[index];
      index += 1;
      const distance = (pair >> 3) & 0x7ff;
      const length = (pair & 0x07) + 3;
      const start = output.length - distance;
      for (let count = 0; count < length; count += 1) {
        output.push(start + count >= 0 ? output[start + count] : 0);
      }
    } else {
      output.push(0x20);
      output.push(byte ^ 0x80);
    }
  }
  return Uint8Array.from(output);
}

function concatBytes(chunks) {
  let total = 0;
  for (const chunk of chunks) total += chunk.length;
  const output = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.length;
  }
  return output;
}

function decodeMobiBytes(bytes, encodingLabel) {
  const candidates = [];
  if (encodingLabel) candidates.push(encodingLabel);
  candidates.push('utf-8', 'gb18030', 'windows-1252');
  for (const candidate of candidates) {
    try {
      return new TextDecoder(candidate, { fatal: true }).decode(bytes);
    } catch {
      /* try the next candidate */
    }
  }
  return new TextDecoder('utf-8').decode(bytes);
}

function readTextBytes(bytes, info) {
  const recordCount = info.recordCount > 0 ? info.recordCount : info.numRecords - 1;
  const chunks = [];
  for (let recordIndex = 1; recordIndex <= recordCount; recordIndex += 1) {
    const raw = recordBytes(bytes, info.offsets, recordIndex);
    if (!raw) break;
    if (info.compression === COMPRESSION_HUFFCDIC) {
      throw new Error('该 MOBI 使用 HUFF/CDIC 压缩，内置解析器无法处理。');
    }
    chunks.push(info.compression === COMPRESSION_PALMDOC ? decompressPalmDoc(raw) : raw);
  }
  if (chunks.length === 0) throw new Error('MOBI 文件中没有文本内容。');
  let textBytes = concatBytes(chunks);
  if (info.textLength > 0 && info.textLength <= textBytes.length) {
    textBytes = textBytes.subarray(0, info.textLength);
  }
  return textBytes;
}

function readFallbackMetadata(bytes, info) {
  const metadata = { title: '', author: '', language: '' };
  if (info.pdbType !== 'BOOKMOBI') return metadata;
  const record0 = info.offsets[0];
  const label = MOBI_ENCODINGS[info.encoding] || 'utf-8';
  const titleOffset = le32(bytes, record0 + 84);
  const titleLength = le32(bytes, record0 + 88);
  if (titleOffset > 0 && titleLength > 0 && record0 + titleOffset + titleLength <= bytes.length) {
    metadata.title = normalizeText(decodeMobiBytes(
      bytes.subarray(record0 + titleOffset, record0 + titleOffset + titleLength),
      label,
    ));
  }
  const headerLength = le32(bytes, record0 + 20);
  const exthFlag = le32(bytes, record0 + 128);
  const exthStart = record0 + 16 + headerLength;
  if ((exthFlag & 0x40) && asciiAt(bytes, exthStart, 4) === 'EXTH' && exthStart + 12 <= bytes.length) {
    const exthLength = le32(bytes, exthStart + 4);
    const count = le32(bytes, exthStart + 8);
    const limit = Math.min(bytes.length, exthStart + exthLength, exthStart + 12 + count * 8 + 4096);
    let index = exthStart + 12;
    for (let record = 0; record < count && index + 8 <= limit; record += 1) {
      const type = le32(bytes, index);
      const length = le32(bytes, index + 4);
      if (length < 8 || index + length > bytes.length) break;
      const payload = bytes.subarray(index + 8, index + length);
      const value = normalizeText(decodeMobiBytes(payload, label));
      if (type === 100 && value && !metadata.author) metadata.author = value;
      else if (type === 503 && value) metadata.title = value;
      else if (type === 524 && value && !metadata.language) metadata.language = value;
      index += length;
    }
  }
  return metadata;
}

function chapterIndexFromPosition(spine, position) {
  if (!Number.isFinite(position) || position < 0) return null;
  for (let index = 0; index < spine.length; index += 1) {
    const start = Number(spine[index]?.start);
    const end = Number(spine[index]?.end);
    if (Number.isFinite(start) && Number.isFinite(end) && position >= start && position < end) return index;
  }
  for (let index = 0; index < spine.length; index += 1) {
    const start = Number(spine[index]?.start);
    if (Number.isFinite(start) && start > position) return index;
  }
  return spine.length > 0 ? spine.length - 1 : null;
}

function selectorAnchor(selector) {
  const text = String(selector || '');
  if (text.startsWith('#')) return text.slice(1);
  return '';
}

function buildFromLibrary(impl, info, { fileName, tracker, warn }) {
  let metadata = {};
  try {
    metadata = impl.getMetadata() || {};
  } catch {
    metadata = {};
  }
  let spine = [];
  try {
    spine = impl.getSpine() || [];
  } catch {
    spine = [];
  }
  if (!Array.isArray(spine) || spine.length === 0) throw new Error('MOBI 文件中没有阅读顺序。');

  const idToIndex = new Map();
  spine.forEach((chapter, index) => {
    if (chapter?.id != null) idToIndex.set(String(chapter.id), index);
  });

  let blockCounter = 0;
  const nextId = () => `b${(blockCounter += 1)}`;

  const resolveImage = (src) => {
    const raw = String(src || '').trim();
    if (!raw) return null;
    if (/^blob:/i.test(raw)) {
      tracker.add(raw);
      return { src: raw };
    }
    if (/^data:/i.test(raw)) {
      const blob = dataUriToBlob(raw);
      if (!blob) {
        warn('已跳过一张无法解码的 MOBI 内嵌图片。');
        return null;
      }
      return { src: tracker.create(blob) };
    }
    if (/^(https?:)?\/\//i.test(raw)) {
      warn('已跳过 MOBI 中的外部网络图片。');
      return null;
    }
    warn('已跳过一张无法解析的 MOBI 图片。');
    return null;
  };

  const makeLinkResolver = (chapterIndex) => (href) => {
    const raw = String(href || '').trim();
    if (!raw) return null;
    if (/^(https?:|mailto:)/i.test(raw)) return { external: true, href: raw };
    if (raw.startsWith('#')) return { chapter: chapterIndex, anchor: raw.slice(1) };
    if (raw.startsWith('//') || /^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(raw)) return null;
    try {
      const resolved = impl.resolveHref(raw);
      if (resolved?.id != null) {
        const target = idToIndex.get(String(resolved.id));
        if (target != null) {
          const anchor = selectorAnchor(resolved.selector);
          return anchor ? { chapter: target, anchor } : { chapter: target };
        }
      }
    } catch {
      /* fall through to filepos handling */
    }
    const filepos = /filepos:(\d+)/i.exec(raw);
    if (filepos) {
      const target = chapterIndexFromPosition(spine, Number(filepos[1]));
      if (target != null) return { chapter: target };
    }
    return null;
  };

  const chapters = [];
  for (let index = 0; index < spine.length; index += 1) {
    let html = '';
    try {
      const processed = impl.loadChapter(spine[index].id);
      html = processed?.html || '';
    } catch {
      warn(`第 ${index + 1} 章加载失败，已跳过该章内容。`);
    }
    let blocks = [];
    if (html) {
      const doc = parseHtmlDocument(html);
      const body = doc?.body || doc?.documentElement || null;
      if (body) {
        blocks = extractBlocks(body, {
          nextId,
          warn,
          chapterIndex: index,
          resolveImage,
          resolveLink: makeLinkResolver(index),
        });
      }
    }
    chapters.push({ id: `ch${index}`, title: '', blocks });
  }

  const entries = [];
  const walkToc = (items, depth) => {
    if (!Array.isArray(items)) return;
    for (const item of items) {
      if (!item) continue;
      const title = normalizeText(item.label || item.title || '').slice(0, 200);
      const href = String(item.href || '');
      let chapterIndex = null;
      let anchor = '';
      if (href) {
        try {
          const resolved = impl.resolveHref(href);
          if (resolved?.id != null) {
            const target = idToIndex.get(String(resolved.id));
            if (target != null) {
              chapterIndex = target;
              anchor = selectorAnchor(resolved.selector);
            }
          }
        } catch {
          /* ignore */
        }
        if (chapterIndex == null) {
          const filepos = /filepos:(\d+)/i.exec(href);
          if (filepos) chapterIndex = chapterIndexFromPosition(spine, Number(filepos[1]));
        }
      }
      if (title && chapterIndex != null) {
        entries.push({ title, chapterIndex, depth, ...(anchor ? { anchor } : {}) });
      }
      walkToc(item.children, depth + 1);
    }
  };
  try {
    walkToc(impl.getToc?.() || [], 0);
  } catch {
    warn('MOBI 目录读取失败，已按章节标题生成目录。');
  }
  const toc = buildToc(chapters, entries);
  const title = normalizeText(metadata.title || '') || titleFromFileName(fileName);
  const authors = Array.isArray(metadata.author) ? metadata.author : [metadata.author];
  const author = authors.map((name) => normalizeText(name || '')).filter(Boolean).join(', ');
  let cover = '';
  try {
    const coverUrl = impl.getCoverImage();
    if (coverUrl) {
      tracker.add(coverUrl);
      cover = coverUrl;
    }
  } catch {
    /* cover is optional */
  }
  const book = { title, chapters, toc };
  if (author) book.author = author;
  const language = normalizeText(metadata.language || '');
  if (language) book.language = language;
  if (cover) book.cover = cover;
  return book;
}

function splitMobiHtml(text) {
  return String(text || '').split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi);
}

function buildFromFallback(bytes, info, { fileName, warn }) {
  if (info.compression === COMPRESSION_HUFFCDIC) {
    throw new Error('该 MOBI 文件使用 HUFF/CDIC 压缩，内置解析器无法处理。');
  }
  const metadata = readFallbackMetadata(bytes, info);
  const raw = readTextBytes(bytes, info);
  const encodingLabel = mobiEncodingLabel(info.encoding);
  const text = decodeMobiBytes(raw, encodingLabel);
  const title = metadata.title || titleFromFileName(fileName);
  let blockCounter = 0;
  const nextId = () => `b${(blockCounter += 1)}`;
  const hasMarkup = /<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(text);
  let chapters;
  if (hasMarkup) {
    const segments = splitMobiHtml(text);
    const encoder = new TextEncoder();
    const ranges = [];
    let cursor = 0;
    for (const segment of segments) {
      const length = encoder.encode(segment).length;
      ranges.push({ start: cursor, end: cursor + length });
      cursor += length;
    }
    chapters = [];
    segments.forEach((segment, segmentIndex) => {
      if (!segment.trim()) return;
      const doc = parseHtmlDocument(segment);
      const body = doc?.body || doc?.documentElement || null;
      const chapterIndex = chapters.length;
      const blocks = body
        ? extractBlocks(body, {
          nextId,
          warn,
          chapterIndex,
          resolveImage: () => {
            warn('内置 MOBI 解析器无法提取图片资源。');
            return null;
          },
          resolveLink: (href) => {
            const link = String(href || '').trim();
            if (!link) return null;
            if (/^(https?:|mailto:)/i.test(link)) return { external: true, href: link };
            if (link.startsWith('#')) return { chapter: chapterIndex, anchor: link.slice(1) };
            const filepos = /filepos:(\d+)/i.exec(link);
            if (filepos) {
              const position = Number(filepos[1]);
              for (let rangeIndex = 0; rangeIndex < ranges.length; rangeIndex += 1) {
                if (position >= ranges[rangeIndex].start && position < ranges[rangeIndex].end) {
                  // Skip empty segments while mapping a position to a chapter.
                  const keptBefore = segments.slice(0, rangeIndex).filter((part) => part.trim()).length;
                  return keptBefore < chapters.length ? { chapter: keptBefore } : null;
                }
              }
            }
            return null;
          },
        })
        : [];
      chapters.push({ id: `ch${chapterIndex}`, title: '', blocks });
    });
  } else {
    chapters = plainTextToChapters(text, { nextId, title });
  }
  if (!chapters || chapters.length === 0) throw new Error('MOBI 文件中没有可阅读的内容。');
  const toc = buildToc(chapters, []);
  const book = { title, chapters, toc };
  if (metadata.author) book.author = metadata.author;
  if (metadata.language) book.language = metadata.language;
  return book;
}

function mobiEncodingLabel(code) {
  return MOBI_ENCODINGS[code] || '';
}

export async function parseMobi(blob, options = {}) {
  const { fileName = '' } = options;
  const { warnings, warn } = createWarningSink();
  const tracker = createUrlTracker();
  let impl = null;
  try {
    const bytes = await readBlobBytes(blob);
    const info = inspectMobiPdb(bytes);

    // Plain PalmDOC (.prc / TEXtREAd) has no MOBI header; go straight to the
    // built-in parser. Modern books use BOOKMOBI and the library first.
    if (info.pdbType === 'BOOKMOBI') {
      const preferKf8 = info.isKf8 || /^(azw3?|kf8)$/i.test(String(fileName).split('.').pop() || '');
      try {
        impl = preferKf8 ? await initKf8File(bytes) : await initMobiFile(bytes);
      } catch (firstError) {
        try {
          impl = preferKf8 ? await initMobiFile(bytes) : await initKf8File(bytes);
        } catch {
          impl = null;
        }
        if (!impl) {
          warn('MOBI 解析库无法打开该文件，已回退到内置解析器（可能缺少图片与目录信息）。');
        }
      }
      if (impl) {
        try {
          const spine = impl.getSpine?.() || [];
          if (!Array.isArray(spine) || spine.length === 0) {
            impl.destroy?.();
            impl = null;
            warn('MOBI 阅读顺序为空，已回退到内置解析器。');
          }
        } catch {
          impl.destroy?.();
          impl = null;
          warn('MOBI 解析库返回异常，已回退到内置解析器。');
        }
      }
    }

    const partial = impl
      ? buildFromLibrary(impl, info, { fileName, tracker, warn })
      : buildFromFallback(bytes, info, { fileName, warn });

    return {
      ...partial,
      warnings,
      dispose: () => {
        try {
          impl?.destroy?.();
        } catch {
          /* already destroyed */
        }
        tracker.dispose();
      },
    };
  } catch (error) {
    try {
      impl?.destroy?.();
    } catch {
      /* ignore */
    }
    tracker.dispose();
    throw asChineseError(error, '无法解析 MOBI 文件');
  }
}
