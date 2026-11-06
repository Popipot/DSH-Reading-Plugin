// Standalone HTML file parser. Scripts, frames, forms and event handlers are
// stripped by the shared sanitizer; only the document body becomes blocks.
import {
  findAllByLocalName,
  findFirstByLocalName,
  getAttr,
  normalizeText,
  parseHtmlDocument,
} from './sanitize.js';
import { extractBlocks } from './html-blocks.js';
import {
  asChineseError,
  basename,
  createUrlTracker,
  createWarningSink,
  dataUriToBlob,
  decodeBytes,
  readBlobBytes,
} from './util.js';

function fallbackTitle(fileName) {
  const base = basename(String(fileName || ''));
  return base.replace(/\.[A-Za-z0-9]+$/, '') || '未命名文档';
}

export async function parseHtmlFile(blob, options = {}) {
  const { fileName = '' } = options;
  const { warnings, warn } = createWarningSink();
  const tracker = createUrlTracker();
  try {
    const bytes = await readBlobBytes(blob);
    const text = decodeBytes(bytes);
    const doc = parseHtmlDocument(text);
    if (!doc) throw new Error('HTML 文件格式错误，无法解析。');
    const body = doc.body || doc.documentElement;
    if (!body) throw new Error('HTML 文件中没有可阅读的内容。');

    let blockCounter = 0;
    const ctx = {
      nextId: () => `b${(blockCounter += 1)}`,
      warn,
      resolveImage: (src) => {
        const raw = String(src || '').trim();
        if (!raw) return null;
        if (/^data:/i.test(raw)) {
          const imageBlob = dataUriToBlob(raw);
          if (!imageBlob) {
            warn('已跳过一张无法解码的内嵌图片。');
            return null;
          }
          return { src: tracker.create(imageBlob) };
        }
        if (/^(https?:)?\/\//i.test(raw)) {
          warn('已跳过外部网络图片（避免跟踪与隐私泄露）。');
          return null;
        }
        warn('已跳过 HTML 中的本地图片（无法定位图片文件）。');
        return null;
      },
      resolveLink: (href) => {
        const raw = String(href || '').trim();
        if (!raw) return null;
        if (/^(https?:\/\/|mailto:)/i.test(raw)) return { external: true, href: raw };
        if (raw.startsWith('#')) return { chapter: 0, anchor: raw.slice(1) };
        return null;
      },
    };

    const blocks = extractBlocks(body, ctx);
    if (blocks.length === 0) throw new Error('HTML 文件中没有可阅读的内容。');

    const titleEl = findFirstByLocalName(doc, 'title');
    const firstHeading = blocks.find((block) => block.kind === 'heading' && block.text);
    const title = normalizeText(titleEl?.textContent || '') || firstHeading?.text || fallbackTitle(fileName);
    const language = getAttr(doc.documentElement, 'lang') || '';
    const authors = [];
    for (const meta of findAllByLocalName(doc, 'meta')) {
      if (String(getAttr(meta, 'name') || '').toLowerCase() === 'author') {
        const author = normalizeText(getAttr(meta, 'content') || '');
        if (author && !authors.includes(author)) authors.push(author);
      }
    }

    const book = {
      title,
      chapters: [{ id: 'ch0', title, blocks }],
      toc: [{ title, chapterIndex: 0, depth: 0 }],
      warnings,
      dispose: () => tracker.dispose(),
    };
    if (language) book.language = language;
    if (authors.length > 0) book.author = authors.join(', ');
    return book;
  } catch (error) {
    tracker.dispose();
    throw asChineseError(error, '无法解析 HTML 文件');
  }
}
