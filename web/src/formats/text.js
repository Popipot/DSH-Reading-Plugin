// Plain-text parser with BOM-aware UTF-8/UTF-16 detection, GB18030 fallback and
// Chinese/English chapter heading detection.
import {
  escapeHtml,
  normalizeText,
} from './sanitize.js';
import {
  asChineseError,
  basename,
  createWarningSink,
  looksBinary,
  readBlobBytes,
} from './util.js';

const CN_NUM = '[0-9０-９零〇一二三四五六七八九十百千万两]';

const CN_CHAPTER_RE = new RegExp(`^\\s*(第\\s*${CN_NUM}+\\s*[章節节回卷篇])(?:[\\s:：·、.．—–-].*)?$`);
const CN_SPECIAL_RE = /^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/;
const EN_CHAPTER_RE = /^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i;

const MAX_HEADING_LENGTH = 72;

function isCjk(char) {
  return /[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(char);
}

function joinLines(lines) {
  let out = '';
  for (const raw of lines) {
    const line = String(raw).trim();
    if (!line) continue;
    if (!out) {
      out = line;
      continue;
    }
    const previous = out[out.length - 1];
    const next = line[0];
    out += isCjk(previous) && isCjk(next) ? line : ` ${line}`;
  }
  return out;
}

/** True when a line looks like a chapter heading (not a sentence starting the same way). */
export function isChapterHeading(line) {
  const text = String(line || '').trim();
  if (!text || text.length > MAX_HEADING_LENGTH) return false;
  if (CN_CHAPTER_RE.test(text) || CN_SPECIAL_RE.test(text)) {
    return !/[，,。；;]/.test(text);
  }
  if (EN_CHAPTER_RE.test(text)) {
    const words = text.split(/\s+/).filter(Boolean).length;
    // Allow real chapter titles ("CHAPTER III. A Caucus-Race and a Long
    // Tale" is eight words), while rejecting prose that happens to start with
    // "Chapter N". A trailing sentence stop on a longer run remains prose.
    if (words > 14) return false;
    // A trailing period on a sentence-like run is prose ("Chapter 1 tells the
    // whole story."), but chapter titles may legitimately end in ? or !.
    if (/\.$/u.test(text) && words > 3) return false;
    return true;
  }
  return false;
}

/**
 * Decode a text file using the contract's chain:
 * BOM -> heuristic UTF-16 -> UTF-8 fatal -> GB18030 -> UTF-8 replacement.
 */
export function decodeTextFile(bytes) {
  if (!bytes || bytes.length === 0) throw new Error('文本文件内容为空。');
  if (bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) {
    return { text: new TextDecoder('utf-8').decode(bytes.subarray(3)), encoding: 'utf-8' };
  }
  if (bytes[0] === 0xff && bytes[1] === 0xfe) {
    return { text: new TextDecoder('utf-16le').decode(bytes.subarray(2)), encoding: 'utf-16le' };
  }
  if (bytes[0] === 0xfe && bytes[1] === 0xff) {
    return { text: new TextDecoder('utf-16be').decode(bytes.subarray(2)), encoding: 'utf-16be' };
  }
  // BOM-less UTF-16 is common on Windows. Count NUL bytes in the first block.
  const sampleLength = Math.min(bytes.length, 4096);
  let evenNulls = 0;
  let oddNulls = 0;
  for (let i = 0; i < sampleLength; i += 2) {
    if (bytes[i] === 0) evenNulls += 1;
    if (i + 1 < sampleLength && bytes[i + 1] === 0) oddNulls += 1;
  }
  const pairs = Math.ceil(sampleLength / 2);
  if (pairs > 4 && oddNulls / pairs > 0.35 && evenNulls / pairs < 0.05) {
    return { text: new TextDecoder('utf-16le').decode(bytes), encoding: 'utf-16le' };
  }
  if (pairs > 4 && evenNulls / pairs > 0.35 && oddNulls / pairs < 0.05) {
    return { text: new TextDecoder('utf-16be').decode(bytes), encoding: 'utf-16be' };
  }
  try {
    return { text: new TextDecoder('utf-8', { fatal: true }).decode(bytes), encoding: 'utf-8' };
  } catch {
    /* not valid UTF-8 */
  }
  try {
    return { text: new TextDecoder('gb18030', { fatal: true }).decode(bytes), encoding: 'gb18030' };
  } catch {
    /* not valid GB18030 */
  }
  return { text: new TextDecoder('utf-8').decode(bytes), encoding: 'utf-8' };
}

function paragraphGroups(lines) {
  const groups = [];
  let current = [];
  const flush = () => {
    if (current.length > 0) {
      groups.push(current);
      current = [];
    }
  };
  for (const line of lines) {
    if (!String(line).trim()) flush();
    else current.push(line);
  }
  flush();
  return groups;
}

function looksLinePerParagraph(lines) {
  const nonEmpty = lines.map((line) => line.trim()).filter(Boolean);
  if (nonEmpty.length < 2) return false;
  const sentenceEndings = nonEmpty.filter((line) => /[。！？!?…"”’」』）)]$/.test(line)).length;
  return sentenceEndings / nonEmpty.length >= 0.5;
}

/** Split chapter text into human-readable paragraphs. */
export function splitParagraphs(chapterLines) {
  const lines = chapterLines.map((line) => String(line));
  const groups = paragraphGroups(lines);
  if (groups.length > 1) return groups.map((group) => joinLines(group)).filter(Boolean);
  const nonEmpty = lines.map((line) => line.trim()).filter(Boolean);
  if (nonEmpty.length <= 1) return nonEmpty;
  // Chinese web novels often put one paragraph per line with no blank lines.
  if (looksLinePerParagraph(nonEmpty)) return nonEmpty;
  return groups.map((group) => joinLines(group)).filter(Boolean);
}

/**
 * Split plain text into chapters. Exported for the MOBI PalmDOC fallback.
 * @returns {{title: string, lines: string[], heading: string}[]}
 */
export function splitTextChapters(text, { fallbackTitle = '正文' } = {}) {
  const normalized = String(text || '').replace(/\r\n?/g, '\n').replace(/\u0000/g, '');
  const lines = normalized.split('\n');
  const chapters = [];
  let current = { title: '', lines: [], heading: '' };
  const flush = () => {
    if (current.heading || current.lines.some((line) => line.trim())) {
      chapters.push(current);
    }
    current = { title: '', lines: [], heading: '' };
  };
  for (const line of lines) {
    if (isChapterHeading(line)) {
      flush();
      const heading = line.trim();
      current = { title: heading, lines: [], heading };
      continue;
    }
    current.lines.push(line);
  }
  flush();
  if (chapters.length === 0) {
    return [{ title: fallbackTitle, lines, heading: '' }];
  }
  return chapters;
}

/** Convert plain text into normalized chapters (used by TXT and MOBI fallback). */
export function plainTextToChapters(text, { nextId, title = '正文' } = {}) {
  let chunks = splitTextChapters(text, { fallbackTitle: title });
  // A printed table of contents often appears as a run of heading-only
  // "chapters" before the real text. Drop only such runs (≥ 3); a single
  // heading-only chapter can be a legitimate short chapter and is kept.
  const hasBody = (chunk) => chunk.lines.some((line) => String(line).trim());
  const compacted = [];
  for (let index = 0; index < chunks.length; index += 1) {
    if (hasBody(chunks[index])) {
      compacted.push(chunks[index]);
      continue;
    }
    let end = index;
    while (end + 1 < chunks.length && !hasBody(chunks[end + 1])) end += 1;
    if (end - index + 1 >= 3) {
      index = end;
      continue;
    }
    compacted.push(...chunks.slice(index, end + 1));
    index = end;
  }
  chunks = compacted.length > 0 ? compacted : chunks;
  return chunks.map((chunk, index) => {
    const blocks = [];
    if (chunk.heading) {
      blocks.push({
        id: nextId(),
        kind: 'heading',
        level: 1,
        html: escapeHtml(chunk.heading),
        text: normalizeText(chunk.heading),
      });
    }
    for (const paragraph of splitParagraphs(chunk.lines)) {
      blocks.push({
        id: nextId(),
        kind: 'paragraph',
        html: escapeHtml(paragraph),
        text: paragraph,
      });
    }
    return {
      id: `ch${index}`,
      title: chunk.title || title || `第 ${index + 1} 章`,
      blocks,
    };
  });
}

function fallbackTitle(fileName) {
  const base = basename(String(fileName || ''));
  return base.replace(/\.[A-Za-z0-9]+$/, '') || '未命名文本';
}

export async function parseTxt(blob, options = {}) {
  const { fileName = '' } = options;
  const { warnings, warn } = createWarningSink();
  try {
    const bytes = await readBlobBytes(blob);
    const { text, encoding } = decodeTextFile(bytes);
    if (looksBinary(text)) throw new Error('文本文件包含大量无法识别的字符，可能不是纯文本文件。');
    if (encoding === 'gb18030') warn('已按 GB18030 编码读取文本（非 UTF-8）。');
    const bookTitle = fallbackTitle(fileName);
    let blockCounter = 0;
    const nextId = () => `b${(blockCounter += 1)}`;
    const chapters = plainTextToChapters(text, { nextId, title: bookTitle });
    if (chapters.length === 0 || chapters.every((chapter) => chapter.blocks.length === 0)) {
      throw new Error('文本文件中没有可阅读的内容。');
    }
    if (!chapters[0].title) chapters[0].title = bookTitle;
    const toc = chapters.map((chapter, chapterIndex) => ({
      title: chapter.title,
      chapterIndex,
      depth: 0,
    }));
    return {
      title: bookTitle,
      chapters,
      toc,
      warnings,
      encoding,
      dispose: () => {},
    };
  } catch (error) {
    throw asChineseError(error, '无法解析文本文件');
  }
}
