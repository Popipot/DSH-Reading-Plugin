// EPUB parser: container.xml -> OPF -> manifest/spine -> chapters, with EPUB3
// nav.xhtml or EPUB2 NCX table of contents and inline images as object URLs.
import { unzipSync } from 'fflate';
import {
  findAllByLocalName,
  findFirstByLocalName,
  getAttr,
  localNameOf,
  normalizeText,
  parseHtmlDocument,
  parseXmlDocument,
} from './sanitize.js';
import { collectImages, extractBlocks } from './html-blocks.js';
import {
  asChineseError,
  basename,
  buildToc,
  createEntryIndex,
  createUrlTracker,
  createWarningSink,
  dataUriToBlob,
  decodeBytes,
  dirname,
  mimeFromPath,
  readBlobBytes,
  resolveArchivePath,
  splitHref,
  titleFromFileName,
} from './util.js';

const XHTML_MEDIA_TYPES = new Set([
  'application/xhtml+xml',
  'text/html',
  'application/xml',
  'text/xml',
  'text/xhtml',
]);

function isExternalHref(href) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

function isSchemeHref(href) {
  return /^[a-z][a-z0-9+.-]*:/i.test(href);
}

function uniquePush(list, value) {
  if (value && !list.includes(value)) list.push(value);
}

export async function parseEpub(blob, options = {}) {
  const { fileName = '' } = options;
  const { warnings, warn } = createWarningSink();
  const tracker = createUrlTracker();
  try {
    const bytes = await readBlobBytes(blob);

    let entries;
    try {
      entries = unzipSync(bytes);
    } catch {
      throw new Error('EPUB 压缩包已损坏，无法解压。');
    }
    const index = createEntryIndex(entries);
    if (index.names.length === 0) throw new Error('EPUB 压缩包不包含任何文件。');

    // Almost all EPUB DRM schemes encrypt the content documents. Font
    // obfuscation (encryption.xml listing only fonts) is left alone.
    const encryptionEntry = index.get('META-INF/encryption.xml');
    if (encryptionEntry) {
      const encryptionText = decodeBytes(encryptionEntry.bytes);
      if (/<encrypteddata/i.test(encryptionText) && /application\/(xhtml\+xml|epub\+zip)/i.test(encryptionText)) {
        throw new Error('该 EPUB 文件受 DRM 保护，无法打开。');
      }
    }

    let containerEntry = index.get('META-INF/container.xml');
    if (!containerEntry) {
      const candidate = index.names.find((name) => /container\.xml$/i.test(name));
      if (candidate) containerEntry = index.get(candidate);
    }
    if (!containerEntry) throw new Error('缺少 META-INF/container.xml，不是有效的 EPUB 文件。');

    const containerDoc = parseXmlDocument(decodeBytes(containerEntry.bytes));
    if (!containerDoc) throw new Error('META-INF/container.xml 格式错误。');
    const rootfile = findAllByLocalName(containerDoc, 'rootfile')[0];
    const opfFullPath = rootfile ? getAttr(rootfile, 'full-path') : '';
    if (!opfFullPath) throw new Error('container.xml 中没有指定 OPF 内容清单。');

    const opfEntry = index.get(opfFullPath) || index.get(resolveArchivePath('', opfFullPath));
    if (!opfEntry) throw new Error(`找不到 EPUB 内容清单文件：${opfFullPath}`);
    const opfDir = dirname(opfEntry.name);
    const opfDoc = parseXmlDocument(decodeBytes(opfEntry.bytes));
    if (!opfDoc) throw new Error('EPUB 内容清单（OPF）格式错误。');

    const metadataEl = findFirstByLocalName(opfDoc, 'metadata');
    const metaRoot = metadataEl || opfDoc;
    const titles = findAllByLocalName(metaRoot, 'title')
      .map((el) => normalizeText(el.textContent))
      .filter(Boolean);
    const creators = [];
    for (const el of findAllByLocalName(metaRoot, 'creator')) uniquePush(creators, normalizeText(el.textContent));
    const languages = findAllByLocalName(metaRoot, 'language')
      .map((el) => normalizeText(el.textContent))
      .filter(Boolean);
    const metaTags = findAllByLocalName(metaRoot, 'meta');
    const coverMetaId = metaTags
      .filter((el) => String(getAttr(el, 'name') || '').toLowerCase() === 'cover')
      .map((el) => getAttr(el, 'content') || '')
      .find(Boolean) || '';

    const manifestEl = findFirstByLocalName(opfDoc, 'manifest');
    if (!manifestEl) throw new Error('OPF 内容清单缺少 manifest 列表。');
    const manifest = new Map();
    for (const itemEl of findAllByLocalName(manifestEl, 'item')) {
      const id = getAttr(itemEl, 'id');
      if (!id || manifest.has(id)) continue;
      const href = getAttr(itemEl, 'href') || '';
      const itemPath = resolveArchivePath(opfDir, href);
      manifest.set(id, {
        id,
        href,
        path: itemPath,
        mediaType: String(getAttr(itemEl, 'media-type') || '').toLowerCase(),
        properties: String(getAttr(itemEl, 'properties') || '').toLowerCase(),
      });
    }

    const spineEl = findFirstByLocalName(opfDoc, 'spine');
    if (!spineEl) throw new Error('OPF 内容清单缺少 spine 阅读顺序。');
    const itemRefs = findAllByLocalName(spineEl, 'itemref');
    if (itemRefs.length === 0) throw new Error('EPUB 的阅读顺序（spine）为空。');

    // First pass: decide which spine entries become chapters, so that internal
    // links may point forwards to a later chapter while we extract.
    const spineItems = [];
    const pathToChapter = new Map();
    const nameToChapter = new Map();
    for (const itemRef of itemRefs) {
      const idref = getAttr(itemRef, 'idref');
      const item = idref ? manifest.get(idref) : null;
      if (!item) {
        warn(`阅读顺序中的条目“${idref || '未知'}”不在清单中，已跳过。`);
        continue;
      }
      // The EPUB3 navigation document may be listed in the spine but is a TOC,
      // not a reading chapter.
      if (/\bnav\b/.test(item.properties)) continue;
      if (!item.path) {
        warn(`章节文件“${item.href || item.id}”位于外部网络，已跳过。`);
        continue;
      }
      const entry = index.get(item.path);
      if (!entry) {
        warn(`找不到章节文件：${item.path}`);
        continue;
      }
      const mediaType = item.mediaType || '';
      const isHtml = XHTML_MEDIA_TYPES.has(mediaType)
        || /\.(x?html?|htm)$/i.test(item.path);
      const isImage = mediaType.startsWith('image/') || /\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(item.path);
      if (!isHtml && !isImage) {
        warn(`不支持的章节类型（${mediaType || '未知'}）：${item.path}`);
        continue;
      }
      const chapterIndex = spineItems.length;
      spineItems.push({ item, entry, isImage, chapterIndex });
      pathToChapter.set(item.path.toLowerCase(), chapterIndex);
      const lowerName = basename(item.path).toLowerCase();
      if (!nameToChapter.has(lowerName)) nameToChapter.set(lowerName, chapterIndex);
    }
    if (spineItems.length === 0) throw new Error('EPUB 中没有找到可显示的章节内容。');

    let blockCounter = 0;
    const nextId = () => `b${(blockCounter += 1)}`;

    function resolveTocTarget(href, baseDir) {
      const raw = String(href || '').trim();
      if (!raw || isExternalHref(raw) || raw.startsWith('//') || isSchemeHref(raw)) return null;
      const { path, fragment } = splitHref(raw);
      let targetPath = path ? resolveArchivePath(baseDir, raw) : null;
      let chapterIndex = targetPath ? pathToChapter.get(targetPath.toLowerCase()) : undefined;
      if (chapterIndex == null && targetPath) {
        chapterIndex = nameToChapter.get(basename(targetPath).toLowerCase());
      }
      if (chapterIndex == null) return null;
      return { chapterIndex, anchor: fragment };
    }

    const chapters = [];
    for (const spineItem of spineItems) {
      const { item, entry, isImage, chapterIndex } = spineItem;
      if (isImage) {
        const mime = item.mediaType.startsWith('image/') ? item.mediaType : mimeFromPath(item.path);
        const url = tracker.create(new Blob([entry.bytes], { type: mime }));
        chapters.push({
          id: `ch${chapterIndex}`,
          title: '',
          blocks: [{ id: nextId(), kind: 'image', src: url }],
        });
        continue;
      }

      const chapterDir = dirname(item.path);
      const resolveImage = (src) => {
        const raw = String(src || '').trim();
        if (!raw) return null;
        if (/^data:/i.test(raw)) {
          const blob = dataUriToBlob(raw);
          if (!blob) {
            warn('已跳过一张无法解码的内嵌图片。');
            return null;
          }
          return { src: tracker.create(blob) };
        }
        if (/^(https?:)?\/\//i.test(raw)) {
          warn('已跳过外部网络图片（避免跟踪与隐私泄露）。');
          return null;
        }
        if (isSchemeHref(raw)) return null;
        const resolvedPath = resolveArchivePath(chapterDir, raw);
        const imageEntry = resolvedPath ? index.get(resolvedPath) : null;
        if (!imageEntry) {
          warn(`找不到图片文件：${basename(resolvedPath || raw)}`);
          return null;
        }
        const mime = mimeFromPath(resolvedPath);
        return { src: tracker.create(new Blob([imageEntry.bytes], { type: mime })) };
      };

      const resolveLink = (href) => {
        const raw = String(href || '').trim();
        if (!raw) return null;
        if (isExternalHref(raw)) return { external: true, href: raw };
        if (raw.startsWith('//') || isSchemeHref(raw)) return null;
        const { path, fragment } = splitHref(raw);
        if (!path) return { chapter: chapterIndex, anchor: fragment };
        const targetPath = resolveArchivePath(chapterDir, raw);
        let target = targetPath ? pathToChapter.get(targetPath.toLowerCase()) : undefined;
        if (target == null && targetPath) target = nameToChapter.get(basename(targetPath).toLowerCase());
        if (target == null) return null;
        return { chapter: target, anchor: fragment };
      };

      let rawText = '';
      try {
        rawText = decodeBytes(entry.bytes);
      } catch {
        warn(`第 ${chapterIndex + 1} 章的编码无法识别，已尽量按 UTF-8 读取。`);
      }
      // EPUB content documents are XHTML. Parse them as XML first so
      // self-closing inline anchors such as `<a id="chap01"/>` (very common in
      // Gutenberg/Pandoc output) do not swallow every following paragraph, as
      // the HTML parser would. Fall back to HTML for malformed books.
      const xmlDoc = parseXmlDocument(rawText);
      const xmlBody = xmlDoc
        ? findFirstByLocalName(xmlDoc, 'body') || xmlDoc.documentElement || null
        : null;
      const htmlDoc = xmlBody ? null : parseHtmlDocument(rawText);
      const body = xmlBody || htmlDoc?.body || htmlDoc?.documentElement || null;
      const blocks = body
        ? extractBlocks(body, { nextId, warn, chapterIndex, resolveImage, resolveLink })
        : [];
      if (blocks.length === 0) warn(`第 ${chapterIndex + 1} 章没有可显示的内容。`);
      chapters.push({ id: `ch${chapterIndex}`, title: '', blocks });
    }

    // ---- Table of contents -------------------------------------------------
    const navItem = [...manifest.values()].find((item) => /\bnav\b/.test(item.properties) && item.path);
    const ncxId = getAttr(spineEl, 'toc');
    const ncxItem = (ncxId && manifest.get(ncxId))
      || [...manifest.values()].find((item) => item.mediaType === 'application/x-dtbncx+xml' && item.path)
      || null;

    const readNavEntries = (item) => {
      const entry = index.get(item.path);
      if (!entry) {
        warn(`找不到 EPUB 导航文件：${item.path}`);
        return [];
      }
      const text = decodeBytes(entry.bytes);
      const doc = parseXmlDocument(text) || parseHtmlDocument(text);
      if (!doc) {
        warn('无法解析 EPUB 导航目录。');
        return [];
      }
      const navs = findAllByLocalName(doc, 'nav');
      const tocNav = navs.find((nav) => {
        const type = String(getAttr(nav, 'type') || getAttr(nav, 'epub:type') || '').toLowerCase();
        return type.split(/\s+/).includes('toc');
      }) || navs[0] || null;
      if (!tocNav) return [];
      const list = findFirstByLocalName(tocNav, 'ol') || findFirstByLocalName(tocNav, 'ul');
      if (!list) return [];
      const entries = [];
      const navBaseDir = dirname(item.path);
      const ownIndex = pathToChapter.get(item.path.toLowerCase());
      const walk = (listEl, depth) => {
        for (const li of Array.from(listEl.children || [])) {
          if (localNameOf(li) !== 'li') continue;
          let labelEl = null;
          let sublist = null;
          for (const child of Array.from(li.children || [])) {
            const tag = localNameOf(child);
            if (!labelEl && (tag === 'a' || tag === 'span')) labelEl = child;
            if (!sublist && (tag === 'ol' || tag === 'ul')) sublist = child;
          }
          if (labelEl && localNameOf(labelEl) === 'a') {
            const title = normalizeText(labelEl.textContent).slice(0, 200);
            const href = getAttr(labelEl, 'href') || '';
            let target = resolveTocTarget(href, navBaseDir);
            if (!target && href.startsWith('#') && ownIndex != null) {
              const { fragment } = splitHref(href);
              target = { chapterIndex: ownIndex, anchor: fragment };
            }
            if (title && target) {
              entries.push({
                title,
                chapterIndex: target.chapterIndex,
                depth,
                ...(target.anchor ? { anchor: target.anchor } : {}),
              });
            }
          }
          if (sublist) walk(sublist, depth + 1);
        }
      };
      walk(list, 0);
      return entries;
    };

    const readNcxEntries = (item) => {
      const entry = index.get(item.path);
      if (!entry) {
        warn(`找不到 EPUB NCX 目录文件：${item.path}`);
        return [];
      }
      const text = decodeBytes(entry.bytes);
      const doc = parseXmlDocument(text) || parseHtmlDocument(text);
      if (!doc) {
        warn('无法解析 EPUB NCX 目录。');
        return [];
      }
      const entries = [];
      const ncxBaseDir = dirname(item.path);
      for (const point of findAllByLocalName(doc, 'navpoint')) {
        const navLabel = findFirstByLocalName(point, 'navlabel');
        const titleEl = navLabel ? findFirstByLocalName(navLabel, 'text') : findFirstByLocalName(point, 'text');
        const title = normalizeText(titleEl?.textContent || '').slice(0, 200);
        const contentEl = Array.from(point.children || []).find((child) => localNameOf(child) === 'content')
          || findFirstByLocalName(point, 'content');
        const target = resolveTocTarget(getAttr(contentEl, 'src') || '', ncxBaseDir);
        if (!title || !target) continue;
        let depth = 0;
        for (let parent = point.parentNode; parent; parent = parent.parentNode) {
          if (localNameOf(parent) === 'navpoint') depth += 1;
        }
        entries.push({
          title,
          chapterIndex: target.chapterIndex,
          depth,
          ...(target.anchor ? { anchor: target.anchor } : {}),
        });
      }
      return entries;
    };

    let navEntries = [];
    if (navItem) {
      navEntries = readNavEntries(navItem);
      if (navEntries.length === 0) warn('EPUB 导航文件没有可用的目录项。');
    }
    let ncxEntries = [];
    if (navEntries.length === 0 && ncxItem) ncxEntries = readNcxEntries(ncxItem);

    const tocSource = navEntries.length > 0 ? navEntries : ncxEntries;
    if (tocSource.length === 0) {
      warn('未找到 EPUB 目录，已按章节标题生成。');
    }

    const toc = buildToc(chapters, tocSource);

    // ---- Cover (best effort, exposed as an extra `cover` field) -----------
    let coverPath = '';
    const coverImageItem = [...manifest.values()].find((item) => /\bcover-image\b/.test(item.properties) && item.path);
    if (coverImageItem) {
      coverPath = coverImageItem.path;
    } else if (coverMetaId && manifest.get(coverMetaId)?.path) {
      coverPath = manifest.get(coverMetaId).path;
    } else {
      const guide = findFirstByLocalName(opfDoc, 'guide');
      if (guide) {
        const reference = findAllByLocalName(guide, 'reference')
          .find((ref) => /\bcover\b/.test(String(getAttr(ref, 'type') || '').toLowerCase()));
        if (reference) {
          coverPath = resolveArchivePath(opfDir, getAttr(reference, 'href') || '') || '';
        }
      }
    }

    let cover = '';
    if (coverPath) {
      const coverEntry = index.get(coverPath);
      if (coverEntry) {
        const mime = mimeFromPath(coverPath);
        if (mime.startsWith('image/')) {
          cover = tracker.create(new Blob([coverEntry.bytes], { type: mime }));
        } else if (/\.(x?html?|htm)$/i.test(coverPath)) {
          const coverDoc = parseHtmlDocument(decodeBytes(coverEntry.bytes));
          const image = collectImages(coverDoc?.body || coverDoc?.documentElement || coverDoc)[0];
          const src = image ? (getAttr(image, 'src') || getAttr(image, 'xlink:href') || '') : '';
          const imagePath = src ? resolveArchivePath(dirname(coverPath), src) : null;
          const imageEntry = imagePath ? index.get(imagePath) : null;
          if (imageEntry) {
            cover = tracker.create(new Blob([imageEntry.bytes], { type: mimeFromPath(imagePath) }));
          }
        }
      }
    }

    const title = titles[0] || titleFromFileName(fileName);
    const book = {
      title,
      chapters,
      toc,
      warnings,
      dispose: () => tracker.dispose(),
    };
    if (creators.length > 0) book.author = creators.join(', ');
    if (languages.length > 0) book.language = languages[0];
    if (cover) book.cover = cover;
    return book;
  } catch (error) {
    tracker.dispose();
    throw asChineseError(error, '无法解析 EPUB 文件');
  }
}
