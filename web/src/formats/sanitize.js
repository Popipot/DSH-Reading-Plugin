// HTML sanitisation and small DOM helpers shared by every format parser.
// The sanitizer is whitelist-based: unknown tags are removed (content kept) and
// every attribute except `href` on links is stripped.
import createDOMPurify from 'dompurify';

export const INLINE_TAGS = Object.freeze([
  'b', 'strong', 'i', 'em', 'u', 's', 'sub', 'sup', 'code', 'span',
  'a', 'br', 'ruby', 'rt', 'rp', 'small', 'mark',
]);

// Table structure is only used for the `table` block kind. `FlowReader` renders
// that block's html directly, so the wrapper tags must survive sanitisation.
const TABLE_CONTEXT_TAGS = Object.freeze([
  'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'colgroup', 'col',
]);

const INLINE_CONFIG = Object.freeze({
  ALLOWED_TAGS: [...INLINE_TAGS],
  ALLOWED_ATTR: ['href'],
  ALLOW_DATA_ATTR: false,
  ALLOW_ARIA_ATTR: false,
  KEEP_CONTENT: true,
  FORBID_TAGS: ['script', 'style', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet', 'form', 'input', 'button', 'select', 'textarea', 'meta', 'link', 'base', 'svg', 'math', 'template', 'noscript'],
  FORBID_ATTR: ['style', 'src', 'srcset', 'formaction', 'xlink:href', 'onerror', 'onload', 'onclick'],
});

const TABLE_CONFIG = Object.freeze({
  ...INLINE_CONFIG,
  ALLOWED_TAGS: [...INLINE_TAGS, ...TABLE_CONTEXT_TAGS],
});

let purifier = null;

function getPurifier() {
  if (purifier) return purifier;
  // In the browser (and in jsdom once a global window exists) the default export
  // is an instance that already knows the document. If the module was evaluated
  // without a window, fall back to constructing an instance lazily.
  if (typeof createDOMPurify?.sanitize === 'function' && createDOMPurify.isSupported) {
    purifier = createDOMPurify;
  } else {
    const win = typeof window !== 'undefined' ? window : globalThis.window;
    if (!win) throw new Error('无法清理 HTML：当前环境缺少浏览器 window。');
    purifier = createDOMPurify(win);
  }
  if (!purifier || typeof purifier.sanitize !== 'function') {
    throw new Error('无法清理 HTML：当前环境不支持 DOMPurify。');
  }
  return purifier;
}

/** Sanitise inline markup for heading / paragraph / quote / list / code blocks. */
export function sanitizeInline(dirtyHtml) {
  if (!dirtyHtml) return '';
  try {
    return getPurifier().sanitize(String(dirtyHtml), INLINE_CONFIG);
  } catch {
    return '';
  }
}

/** Sanitise a table while keeping table structure. */
export function sanitizeTable(dirtyHtml) {
  if (!dirtyHtml) return '';
  try {
    return getPurifier().sanitize(String(dirtyHtml), TABLE_CONFIG);
  } catch {
    return '';
  }
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Collapse whitespace to a single line, preserving text content. */
export function normalizeText(value) {
  return String(value ?? '')
    .replace(/\u00a0/g, ' ')
    .replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g, ' ')
    .replace(/[ ]*\n[ ]*/g, ' ')
    .replace(/ {2,}/g, ' ')
    .trim();
}

export function createElement(tagName = 'div') {
  return document.createElement(tagName);
}

export function parseHtmlDocument(html) {
  try {
    return new DOMParser().parseFromString(String(html ?? ''), 'text/html');
  } catch {
    return null;
  }
}

/** XML parse that reports malformed input as `null` instead of a parsererror doc. */
export function parseXmlDocument(xml) {
  try {
    const doc = new DOMParser().parseFromString(String(xml ?? ''), 'application/xml');
    if (!doc || !doc.documentElement) return null;
    if (doc.documentElement.localName?.toLowerCase() === 'parsererror') return null;
    if (findFirstByLocalName(doc, 'parsererror')) return null;
    return doc;
  } catch {
    return null;
  }
}

export function localNameOf(element) {
  return String(element?.localName || element?.nodeName || '').toLowerCase();
}

export function findAllByLocalName(root, name) {
  const result = [];
  if (!root) return result;
  const target = String(name).toLowerCase();
  const walk = (node) => {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType !== 1) continue;
      if (localNameOf(child) === target) result.push(child);
      walk(child);
    }
  };
  walk(root);
  return result;
}

export function findFirstByLocalName(root, name) {
  if (!root) return null;
  const target = String(name).toLowerCase();
  let found = null;
  const walk = (node) => {
    for (let child = node.firstChild; child && !found; child = child.nextSibling) {
      if (child.nodeType !== 1) continue;
      if (localNameOf(child) === target) {
        found = child;
        return;
      }
      walk(child);
    }
  };
  walk(root);
  return found;
}

/** Attribute lookup that tolerates namespaced names (`epub:type`, xlink:href). */
export function getAttr(element, name) {
  if (!element || !name) return null;
  const direct = element.getAttribute?.(name);
  if (direct != null) return direct;
  const lower = String(name).toLowerCase();
  const attrs = element.attributes;
  if (!attrs) return null;
  for (let i = 0; i < attrs.length; i += 1) {
    const attr = attrs[i];
    if (!attr) continue;
    const attrName = String(attr.name || '').toLowerCase();
    if (attrName === lower) return attr.value;
    if (!lower.includes(':') && String(attr.localName || '').toLowerCase() === lower) return attr.value;
  }
  return null;
}
