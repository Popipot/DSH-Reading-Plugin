// Entry point for the dsh-reader document format engine.
//
//   parseBook(blob, { fileName, mime }) -> NormalizedBook
//   extensionOf(fileName) -> lowercase extension without the dot
//
// Supported formats: EPUB, MOBI/PalmDOC (AZW/KF8), TXT, Markdown, HTML.
// PDF is handled by the separate PDF viewer and is rejected here with a clear
// message. No Node built-ins are used.
import { parseEpub } from './epub.js';
import { parseHtmlFile } from './html-file.js';
import { parseMarkdown } from './markdown.js';
import { parseMobi } from './mobi.js';
import { parseTxt } from './text.js';
import {
  asChineseError,
  extensionOf,
  looksBinary,
  titleFromFileName,
} from './util.js';

const PARSERS = {
  epub: { parse: parseEpub, format: 'epub' },
  mobi: { parse: parseMobi, format: 'mobi' },
  prc: { parse: parseMobi, format: 'mobi' },
  azw: { parse: parseMobi, format: 'mobi' },
  azw3: { parse: parseMobi, format: 'mobi' },
  kf8: { parse: parseMobi, format: 'mobi' },
  txt: { parse: parseTxt, format: 'txt' },
  text: { parse: parseTxt, format: 'txt' },
  md: { parse: parseMarkdown, format: 'md' },
  markdown: { parse: parseMarkdown, format: 'md' },
  mdown: { parse: parseMarkdown, format: 'md' },
  mkd: { parse: parseMarkdown, format: 'md' },
  html: { parse: parseHtmlFile, format: 'html' },
  htm: { parse: parseHtmlFile, format: 'html' },
  xhtml: { parse: parseHtmlFile, format: 'html' },
  xht: { parse: parseHtmlFile, format: 'html' },
};

const MIME_PARSERS = {
  'application/epub+zip': PARSERS.epub,
  'application/x-mobipocket-ebook': PARSERS.mobi,
  'application/x-mobi': PARSERS.mobi,
  'application/vnd.amazon.ebook': PARSERS.mobi,
  'text/plain': PARSERS.txt,
  'text/markdown': PARSERS.md,
  'text/x-markdown': PARSERS.md,
  'text/html': PARSERS.html,
  'application/xhtml+xml': PARSERS.html,
};

const SUPPORTED_DESCRIPTION = 'EPUB、MOBI/KF8、TXT、Markdown 和 HTML';

export { extensionOf };

function unsupportedError(extension) {
  const label = extension ? `“.${extension}”` : '该文件';
  return new Error(`不支持的文件格式：${label}。目前支持 ${SUPPORTED_DESCRIPTION}。`);
}

function pdfError() {
  return new Error('PDF 文件请使用 PDF 阅读模式打开（PDF 由独立的阅读器处理）。');
}

async function sniffFormat(blob) {
  let head;
  try {
    head = new Uint8Array(await blob.slice(0, 256).arrayBuffer());
  } catch {
    return null;
  }
  if (head.length >= 8) {
    const signature = String.fromCharCode(...head.subarray(0, 4));
    if (signature === '%PDF') return 'pdf';
    if (head[0] === 0x50 && head[1] === 0x4b) return 'epub';
    let pdbType = '';
    for (let index = 60; index < 68; index += 1) {
      const code = head[index] ?? 0;
      pdbType += code >= 32 && code < 127 ? String.fromCharCode(code) : ' ';
    }
    if (pdbType === 'BOOKMOBI' || pdbType === 'TEXtREAd') return 'mobi';
  }
  const text = new TextDecoder('utf-8').decode(head.subarray(0, Math.min(head.length, 200)));
  if (/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(text)) return 'html';
  if (!looksBinary(text)) return 'txt';
  return null;
}

/**
 * Parse a document Blob into the NormalizedBook shape defined in CONTRACTS.md.
 * @param {Blob} blob
 * @param {{ fileName?: string, mime?: string }} [options]
 * @returns {Promise<object>}
 */
export async function parseBook(blob, options = {}) {
  const fileName = typeof options.fileName === 'string' ? options.fileName : '';
  const mime = typeof options.mime === 'string' ? options.mime : '';
  const extension = extensionOf(fileName);

  if (extension === 'pdf') throw pdfError();

  let selected = PARSERS[extension] || null;
  if (!selected) {
    const mimeKey = mime.toLowerCase().split(';')[0].trim();
    if (mimeKey === 'application/pdf') throw pdfError();
    selected = MIME_PARSERS[mimeKey] || null;
  }
  if (!selected && !extension) {
    const sniffed = await sniffFormat(blob);
    if (sniffed === 'pdf') throw pdfError();
    selected = sniffed ? PARSERS[sniffed] || null : null;
  }
  if (!selected) throw unsupportedError(extension);

  try {
    const book = await selected.parse(blob, { fileName, mime });
    return {
      ...book,
      title: book.title || titleFromFileName(fileName),
      format: selected.format,
      warnings: Array.isArray(book.warnings) ? book.warnings : [],
    };
  } catch (error) {
    throw asChineseError(error, '无法打开文档');
  }
}
