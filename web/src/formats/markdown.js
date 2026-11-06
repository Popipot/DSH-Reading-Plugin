// A compact, safe Markdown reader. Raw HTML in the source is escaped rather
// than parsed, so a malicious .md cannot inject scripts or event handlers.
import {
  escapeHtml,
  normalizeText,
} from './sanitize.js';
import {
  makeCodeBlock,
  makeImageBlock,
  makeInlineBlock,
  makeRuleBlock,
  makeTableBlock,
} from './html-blocks.js';
import {
  asChineseError,
  basename,
  createUrlTracker,
  createWarningSink,
  dataUriToBlob,
  readBlobBytes,
} from './util.js';
import { decodeTextFile } from './text.js';

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;
const IMAGE_RE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;

function safeLinkUrl(raw) {
  const url = String(raw || '').trim();
  if (!url) return '';
  if (/^(https?:\/\/|mailto:)/i.test(url)) return url;
  if (url.startsWith('#')) return url;
  return '';
}

function renderInline(raw) {
  let text = escapeHtml(String(raw ?? '').trim());
  const stash = [];
  const save = (html) => {
    const token = `\u0000${stash.length}\u0000`;
    stash.push(html);
    return token;
  };
  text = text.replace(/`([^`]+)`/g, (_, code) => save(`<code>${code}</code>`));
  text = text.replace(LINK_RE, (_, label, url) => {
    const safe = safeLinkUrl(url);
    if (!safe) return label;
    return save(`<a href="${safe}">${label}</a>`);
  });
  text = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_]+)__/g, '<strong>$1</strong>')
    .replace(/~~([^~]+)~~/g, '<s>$1</s>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/(^|[^_])_([^_\n]+)_(?!_)/g, '$1<em>$2</em>');
  text = text.replace(/\u0000(\d+)\u0000/g, (_, index) => stash[Number(index)] ?? '');
  return text;
}

function fallbackTitle(fileName) {
  const base = basename(String(fileName || ''));
  return base.replace(/\.[A-Za-z0-9]+$/, '') || '未命名文档';
}

/** Split a Markdown table row into trimmed cells. */
function splitTableRow(line) {
  return String(line).trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
}

function isTableSeparator(line) {
  if (!/\|/.test(line)) return false;
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isTableStart(line, nextLine) {
  return Boolean(nextLine) && line.includes('|') && isTableSeparator(nextLine)
    && splitTableRow(line).length === splitTableRow(nextLine).length;
}

function isMarkdownBlockStart(line, nextLine) {
  if (/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(line)) return true;
  if (/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(line)) return true;
  if (/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(line)) return true;
  if (isTableStart(line, nextLine)) return true;
  return false;
}

export function parseMarkdownText(text, options = {}) {
  const { fileName = '' } = options;
  const { warnings, warn } = createWarningSink();
  const tracker = createUrlTracker();
  let blockCounter = 0;
  const ctx = {
    nextId: () => `b${(blockCounter += 1)}`,
    warn,
    resolveLink: (href) => {
      const raw = String(href || '').trim();
      if (!raw) return null;
      if (/^(https?:\/\/|mailto:)/i.test(raw)) return { external: true, href: raw };
      if (raw.startsWith('#')) return { chapter: 0, anchor: raw.slice(1) };
      return null;
    },
  };

  const blocks = [];
  const pendingImages = [];

  function convertInline(raw) {
    let source = String(raw ?? '');
    const images = [];
    source = source.replace(IMAGE_RE, (match, alt, url) => {
      const cleanAlt = normalizeText(alt);
      if (/^data:image\//i.test(url)) {
        const blob = dataUriToBlob(url);
        if (blob) {
          const image = makeImageBlock(ctx, { src: tracker.create(blob), alt: cleanAlt });
          if (image) images.push(image);
        } else {
          warn('已跳过一张无法解码的 Markdown 内嵌图片。');
        }
      } else if (/^https?:/i.test(url)) {
        warn('已跳过 Markdown 中的外部图片（避免网络跟踪）。');
      } else {
        warn('已跳过 Markdown 中的本地图片（无法定位图片文件）。');
      }
      return cleanAlt ? ` ${cleanAlt} ` : ' ';
    });
    return { html: renderInline(source), images };
  }

  function pushInline(kind, raw, extra = {}) {
    const { html, images } = convertInline(raw);
    const block = makeInlineBlock(ctx, kind, html, extra);
    if (block) blocks.push(block);
    for (const image of images) blocks.push(image);
    return Boolean(block);
  }

  const lines = String(text ?? '').replace(/\r\n?/g, '\n').replace(/\u0000/g, '').split('\n');
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = /^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(line);
    if (fence) {
      const marker = fence[1];
      const codeLines = [];
      index += 1;
      const closing = new RegExp(`^\\s*${marker[0] === '`' ? '`' : '~'}{${marker.length},}\\s*$`);
      while (index < lines.length) {
        if (closing.test(lines[index])) {
          index += 1;
          break;
        }
        codeLines.push(lines[index]);
        index += 1;
      }
      const block = makeCodeBlock(ctx, codeLines.join('\n'));
      if (block) blocks.push(block);
      continue;
    }

    const heading = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (heading) {
      pushInline('heading', heading[2], { level: heading[1].length });
      index += 1;
      continue;
    }

    if (/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(line)) {
      blocks.push(makeRuleBlock(ctx));
      index += 1;
      continue;
    }

    if (isTableStart(line, lines[index + 1])) {
      const header = splitTableRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      const thead = `<thead><tr>${header.map((cell) => `<th>${renderInline(cell)}</th>`).join('')}</tr></thead>`;
      const tbody = rows.length > 0
        ? `<tbody>${rows.map((row) => `<tr>${header.map((_, cellIndex) => `<td>${renderInline(row[cellIndex] || '')}</td>`).join('')}</tr>`).join('')}</tbody>`
        : '';
      const block = makeTableBlock(ctx, `<table>${thead}${tbody}</table>`);
      if (block) blocks.push(block);
      continue;
    }

    if (/^\s{0,3}>/.test(line)) {
      const quoteLines = [];
      while (index < lines.length && /^\s{0,3}>/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^\s{0,3}>\s?/, ''));
        index += 1;
      }
      const htmlParts = [];
      const images = [];
      for (const quoteLine of quoteLines) {
        const converted = convertInline(quoteLine);
        if (converted.html) htmlParts.push(converted.html);
        images.push(...converted.images);
      }
      const block = makeInlineBlock(ctx, 'quote', htmlParts.join('<br>'));
      if (block) blocks.push(block);
      for (const image of images) blocks.push(image);
      continue;
    }

    if (/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(line)) {
      while (index < lines.length) {
        const item = /^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(lines[index]);
        if (!item) break;
        pushInline('list-item', item[1]);
        index += 1;
        while (index < lines.length
          && /^\s{2,}\S/.test(lines[index])
          && !/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(lines[index])
          && !isMarkdownBlockStart(lines[index], lines[index + 1])) {
          index += 1;
        }
      }
      continue;
    }

    const paragraphLines = [];
    while (index < lines.length && lines[index].trim() && !isMarkdownBlockStart(lines[index], lines[index + 1])) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    if (paragraphLines.length === 0) {
      index += 1;
      continue;
    }
    const htmlParts = [];
    for (const paragraphLine of paragraphLines) {
      const hardBreak = /(?: {2,}|\\)$/.test(paragraphLine);
      const converted = convertInline(paragraphLine.replace(/(?: {2,}|\\)$/, ''));
      if (converted.html) htmlParts.push(hardBreak ? `${converted.html}<br>` : converted.html);
      pendingImages.push(...converted.images);
    }
    const block = makeInlineBlock(ctx, 'paragraph', htmlParts.join(' '));
    if (block) blocks.push(block);
    while (pendingImages.length > 0) blocks.push(pendingImages.shift());
  }

  const firstHeading = blocks.find((block) => block.kind === 'heading' && block.text);
  const title = firstHeading?.text || fallbackTitle(fileName);
  if (blocks.length === 0) {
    tracker.dispose();
    throw new Error('Markdown 文件中没有可阅读的内容。');
  }
  return {
    title,
    chapters: [{ id: 'ch0', title, blocks }],
    toc: [{ title, chapterIndex: 0, depth: 0 }],
    warnings,
    dispose: () => tracker.dispose(),
  };
}

export async function parseMarkdown(blob, options = {}) {
  try {
    const bytes = await readBlobBytes(blob);
    const { text } = decodeTextFile(bytes);
    return parseMarkdownText(text, options);
  } catch (error) {
    throw asChineseError(error, '无法解析 Markdown 文件');
  }
}
