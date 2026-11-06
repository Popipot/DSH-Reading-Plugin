// Convert a chapter DOM tree into NormalizedBook blocks.
//
// The extractor is format-agnostic: EPUB, MOBI, single-file HTML and Markdown
// all funnel their content through `extractBlocks` (or the `make*Block`
// helpers), so sanitisation and plain-text extraction behave identically.
import {
  escapeHtml,
  findAllByLocalName,
  getAttr,
  localNameOf,
  normalizeText,
  sanitizeInline,
  sanitizeTable,
  createElement,
} from './sanitize.js';

const HEADING_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

const SKIP_TAGS = new Set([
  'script', 'style', 'noscript', 'template', 'head', 'title', 'meta', 'link',
  'base', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet', 'form',
  'input', 'select', 'textarea', 'button', 'audio', 'video', 'source', 'track',
  'canvas', 'map', 'area', 'math', 'nav',
]);

const CONTAINER_TAGS = new Set([
  'div', 'section', 'article', 'main', 'header', 'footer', 'aside', 'center',
  'details', 'summary', 'fieldset', 'body', 'html', 'hgroup', 'dl',
]);

const BLOCK_TAGS = new Set([
  ...HEADING_TAGS,
  'p', 'div', 'section', 'article', 'main', 'header', 'footer', 'aside',
  'center', 'details', 'summary', 'fieldset', 'body', 'html', 'hgroup', 'dl',
  'dt', 'dd', 'blockquote', 'pre', 'table', 'ul', 'ol', 'li', 'figure',
  'figcaption', 'hr', 'address', 'picture', 'svg', 'img', 'image',
]);

const FLATTEN_SELECTOR = [
  ...HEADING_TAGS,
  'p', 'div', 'section', 'article', 'header', 'footer', 'aside', 'center',
  'details', 'summary', 'fieldset', 'blockquote', 'ul', 'ol', 'li', 'dl', 'dt',
  'dd', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'caption', 'pre',
  'figure', 'figcaption', 'address', 'hgroup',
].join(',');

export function blockId(ctx) {
  return ctx.nextId();
}

function isHidden(element) {
  if (!element || element.nodeType !== 1) return false;
  if (element.hasAttribute?.('hidden')) return true;
  if (getAttr(element, 'aria-hidden') === 'true') return true;
  const style = getAttr(element, 'style') || '';
  return /display\s*:\s*none|visibility\s*:\s*hidden/i.test(style);
}

function warn(ctx, message) {
  if (typeof ctx?.warn === 'function') ctx.warn(message);
}

function hasBlockDescendant(element) {
  for (const child of Array.from(element?.children || [])) {
    const tag = localNameOf(child);
    if (BLOCK_TAGS.has(tag) && tag !== 'span' && tag !== 'a') return true;
    if (hasBlockDescendant(child)) return true;
  }
  return false;
}

/** Insert `<br>` after every block-level wrapper so it becomes inline-ready. */
function flattenForInline(element) {
  const blocks = Array.from(element.querySelectorAll(FLATTEN_SELECTOR));
  for (let i = blocks.length - 1; i >= 0; i -= 1) {
    const block = blocks[i];
    if (!block.parentNode) continue;
    const fragment = element.ownerDocument.createDocumentFragment();
    while (block.firstChild) fragment.appendChild(block.firstChild);
    fragment.appendChild(element.ownerDocument.createElement('br'));
    block.parentNode.replaceChild(fragment, block);
  }
  return element;
}

/** Remove image elements from a clone while remembering the originals. */
function stripImages(clone) {
  for (const image of findAllByLocalName(clone, 'img')) image.remove();
  for (const image of findAllByLocalName(clone, 'image')) image.remove();
}

/** All `<img>` / SVG `<image>` elements below `root`, in document order. */
export function collectImages(root) {
  const images = [];
  const walk = (node) => {
    for (const child of Array.from(node?.children || [])) {
      const tag = localNameOf(child);
      if (tag === 'img') {
        images.push(child);
      } else if (tag === 'image') {
        images.push(child);
      } else if (tag === 'svg') {
        images.push(...findAllByLocalName(child, 'image'));
      } else if (tag !== 'script' && tag !== 'style') {
        walk(child);
      }
    }
  };
  walk(root);
  return images;
}

/**
 * @typedef {Object} BlockContext
 * @property {() => string} nextId
 * @property {(message: string) => void} [warn]
 * @property {(src: string) => {src: string, alt?: string}|null} [resolveImage]
 * @property {(href: string) => ({external: true, href: string}|{chapter: number, anchor?: string}|null)} [resolveLink]
 */

/** Resolve links inside a sanitized fragment and replace hrefs with data attrs. */
export function applyLinks(container, ctx) {
  if (!container || typeof ctx?.resolveLink !== 'function') return;
  const anchors = Array.from(container.getElementsByTagName?.('a') || []);
  for (const anchor of anchors) {
    const href = anchor.getAttribute('href');
    anchor.removeAttribute('href');
    anchor.removeAttribute('data-chapter');
    anchor.removeAttribute('data-anchor');
    if (!href) continue;
    let resolved = null;
    try {
      resolved = ctx.resolveLink(href);
    } catch {
      resolved = null;
    }
    if (!resolved) continue;
    if (resolved.external) {
      if (resolved.href) anchor.setAttribute('href', resolved.href);
      continue;
    }
    if (Number.isInteger(resolved.chapter) && resolved.chapter >= 0) {
      anchor.setAttribute('data-chapter', String(resolved.chapter));
      if (resolved.anchor) {
        anchor.setAttribute('data-anchor', String(resolved.anchor).slice(0, 300));
      }
    }
  }
}

function finishInline(wrapper, ctx) {
  const clean = sanitizeInline(wrapper.innerHTML);
  if (!clean) return null;
  const holder = createElement('div');
  holder.innerHTML = clean;
  applyLinks(holder, ctx);
  const html = holder.innerHTML
    .replace(/^(?:\s*<br\s*\/?>\s*)+/i, '')
    .replace(/(?:\s*<br\s*\/?>\s*)+$/i, '');
  if (!html) return null;
  const text = normalizeText(holder.textContent);
  if (!text) return null;
  return { html, text };
}

/** Build a block from already-sanitized inline html. */
export function makeInlineBlock(ctx, kind, dirtyHtml, extra = {}) {
  const clean = sanitizeInline(dirtyHtml);
  if (!clean) return null;
  const holder = createElement('div');
  holder.innerHTML = clean;
  applyLinks(holder, ctx);
  const html = holder.innerHTML;
  const text = normalizeText(holder.textContent);
  if (!text) return null;
  return { id: blockId(ctx), kind, html, text, ...extra };
}

/** Build a block from plain text (escaped into html). */
export function makeTextBlock(ctx, kind, plainText, extra = {}) {
  const text = normalizeText(plainText);
  if (!text) return null;
  return { id: blockId(ctx), kind, html: escapeHtml(text), text, ...extra };
}

export function makeCodeBlock(ctx, codeText) {
  const text = String(codeText ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/\u00a0/g, ' ')
    .replace(/^\n+|\n+$/g, '');
  if (!text.trim()) return null;
  return { id: blockId(ctx), kind: 'code', html: escapeHtml(text), text };
}

/** Build a table block from sanitized `<table>` markup (or any table html). */
export function makeTableBlock(ctx, dirtyHtml, extra = {}) {
  const clean = sanitizeTable(dirtyHtml);
  if (!clean) return null;
  const holder = createElement('div');
  holder.innerHTML = clean;
  const table = holder.querySelector('table');
  if (!table) return null;
  applyLinks(holder, ctx);
  const html = holder.innerHTML;
  const text = normalizeText(holder.textContent);
  if (!text) return null;
  return { id: blockId(ctx), kind: 'table', html, text, ...extra };
}

export function makeImageBlock(ctx, { src, alt = '', caption = '' } = {}) {
  if (!src) return null;
  const block = { id: blockId(ctx), kind: 'image', src };
  const cleanAlt = normalizeText(alt);
  const cleanCaption = normalizeText(caption);
  if (cleanAlt) block.alt = cleanAlt;
  if (cleanCaption) block.caption = cleanCaption;
  return block;
}

export function makeRuleBlock(ctx) {
  return { id: blockId(ctx), kind: 'rule' };
}

/** Collect all blocks of a chapter DOM tree. */
export function extractBlocks(root, ctx) {
  const blocks = [];
  if (!root) return blocks;
  walkContainer(root, ctx, blocks);
  return blocks;
}

function walkContainer(parent, ctx, blocks) {
  let inlineNodes = [];
  const flushInline = () => {
    if (inlineNodes.length === 0) return;
    const wrapper = createElement('div');
    for (const node of inlineNodes) wrapper.appendChild(node.cloneNode(true));
    const meaningful = normalizeText(wrapper.textContent) !== '' || collectImages(wrapper).length > 0;
    inlineNodes = [];
    if (!meaningful) return;
    emitParagraphLike('paragraph', wrapper, ctx, blocks);
  };

  for (const child of Array.from(parent.childNodes || [])) {
    if (child.nodeType === 3) {
      if (String(child.textContent || '').trim()) inlineNodes.push(child);
      continue;
    }
    if (child.nodeType !== 1) continue;
    if (isHidden(child)) continue;
    const tag = localNameOf(child);
    if (SKIP_TAGS.has(tag)) continue;
    if (BLOCK_TAGS.has(tag)) {
      flushInline();
      handleBlock(child, tag, ctx, blocks);
    } else {
      inlineNodes.push(child);
    }
  }
  flushInline();
}

function handleBlock(element, tag, ctx, blocks) {
  if (HEADING_TAGS.has(tag)) {
    emitParagraphLike('heading', element, ctx, blocks, { level: Number(tag.slice(1)), stripImages: true, flatten: false });
    return;
  }
  switch (tag) {
    case 'p':
      emitParagraphLike('paragraph', element, ctx, blocks);
      return;
    case 'li':
    case 'dt':
      emitParagraphLike('list-item', element, ctx, blocks, { flatten: true });
      return;
    case 'dd':
      emitParagraphLike('paragraph', element, ctx, blocks, { flatten: true });
      return;
    case 'blockquote':
      emitParagraphLike('quote', element, ctx, blocks, { flatten: true });
      return;
    case 'pre':
      emitCodeBlock(element, ctx, blocks);
      return;
    case 'table':
      emitTableBlock(element, ctx, blocks);
      return;
    case 'hr':
      blocks.push(makeRuleBlock(ctx));
      return;
    case 'figure': {
      emitFigure(element, ctx, blocks);
      return;
    }
    case 'img':
    case 'image':
      emitImage(element, ctx, blocks, '');
      return;
    case 'picture':
    case 'svg': {
      for (const image of collectImages(element)) emitImage(image, ctx, blocks, '');
      return;
    }
    case 'ul':
    case 'ol': {
      for (const item of Array.from(element.children || [])) {
        if (localNameOf(item) === 'li') emitParagraphLike('list-item', item, ctx, blocks, { flatten: true });
        else walkContainer(item, ctx, blocks);
      }
      return;
    }
    case 'dl': {
      walkContainer(element, ctx, blocks);
      return;
    }
    case 'figcaption':
      return;
    default: {
      if (CONTAINER_TAGS.has(tag) || hasBlockDescendant(element)) {
        walkContainer(element, ctx, blocks);
      } else {
        emitParagraphLike('paragraph', element, ctx, blocks);
      }
    }
  }
}

function emitParagraphLike(kind, element, ctx, blocks, options = {}) {
  const clone = element.cloneNode(true);
  const images = collectImages(clone);
  if (images.length > 0) {
    for (const image of images) image.remove();
  }
  if (options.stripImages) {
    stripImages(clone);
  }
  if (options.flatten !== false) flattenForInline(clone);
  const inline = finishInline(clone, ctx);
  if (inline) {
    const block = { id: blockId(ctx), kind, html: inline.html, text: inline.text };
    if (options.level) block.level = options.level;
    blocks.push(block);
  }
  if (!options.stripImages && images.length > 0) {
    const originals = collectImages(element);
    for (const image of originals) emitImage(image, ctx, blocks, '');
  }
}

function emitImage(element, ctx, blocks, caption) {
  const raw = getAttr(element, 'src') || getAttr(element, 'xlink:href') || getAttr(element, 'href');
  if (!raw) return;
  let resolved = null;
  try {
    resolved = typeof ctx?.resolveImage === 'function' ? ctx.resolveImage(raw) : null;
  } catch {
    resolved = null;
  }
  if (!resolved || !resolved.src) return;
  const alt = getAttr(element, 'alt') || getAttr(element, 'title') || resolved.alt || '';
  const block = makeImageBlock(ctx, { src: resolved.src, alt, caption: caption || resolved.caption || '' });
  if (block) blocks.push(block);
}

function emitFigure(element, ctx, blocks) {
  const captionEl = findAllByLocalName(element, 'figcaption')[0] || null;
  const caption = captionEl ? normalizeText(captionEl.textContent) : '';
  const images = collectImages(element);
  if (images.length > 0) {
    images.forEach((image, index) => {
      emitImage(image, ctx, blocks, index === 0 ? caption : '');
    });
  }
  const clone = element.cloneNode(true);
  stripImages(clone);
  for (const cap of findAllByLocalName(clone, 'figcaption')) cap.remove();
  if (hasBlockDescendant(clone)) flattenForInline(clone);
  const inline = finishInline(clone, ctx);
  if (inline && inline.text !== caption) {
    blocks.push({ id: blockId(ctx), kind: 'paragraph', html: inline.html, text: inline.text });
  }
}

function emitCodeBlock(element, ctx, blocks) {
  const codeEl = findAllByLocalName(element, 'code')[0] || element;
  const text = String(codeEl.textContent || '').replace(/\r\n?/g, '\n');
  if (!text.trim()) return;
  const clean = sanitizeInline(codeEl.innerHTML);
  const block = makeCodeBlock(ctx, text);
  if (!block) return;
  if (clean) block.html = clean;
  blocks.push(block);
}

function emitTableBlock(element, ctx, blocks) {
  const clone = element.cloneNode(true);
  const clean = sanitizeTable(clone.outerHTML);
  if (!clean) {
    warn(ctx, '已跳过一个无法解析的表格。');
    return;
  }
  const block = makeTableBlock(ctx, clean);
  if (block) blocks.push(block);
}
