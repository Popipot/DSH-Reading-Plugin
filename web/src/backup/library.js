import {
  getBook, previewBackupConflicts, readBackupLibrary, reattachBackupBook, restoreBackupLibrary,
} from '../storage.js';
import { validFingerprint } from '../evidence/identity.js';
import {
  BACKUP_BYTES, BACKUP_ENTRIES, backupLimit, checkCancelled, createZip, decoder,
  inspectZip, invalidZip, sha256, zipReader,
} from './zip.js';

const VERSION = 1;
const FORMAT = 'dsh-reader-library';
const MAX_SOURCE_BYTES = 320 * 1024 * 1024;
const MAX_MANIFEST_BYTES = 2 * 1024 * 1024;
const recordPath = /^records\/(\d{5})\.json$/u;
const binaryPath = id => `files/${id}.bin`;
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const isString = value => typeof value === 'string';
const id = value => isString(value) && value.length > 0 && value.length <= 8192;
const ids = value => Array.isArray(value) && value.every(id);
const integer = value => Number.isSafeInteger(value) && value >= 0;
const hex = value => isString(value) && /^[a-f0-9]{64}$/u.test(value);
const optionalText = (value, keys) => keys.every(key => value[key] == null || isString(value[key]));
const jsonBlob = value => new Blob([JSON.stringify(value)], { type: 'application/json' });

function recordError() {
  return new Error('备份中的书架记录或文档关联无效。');
}

function validSource(source) {
  return isObject(source) && id(source.name) && isString(source.type)
    && integer(source.lastModified) && integer(source.bytes) && source.bytes <= MAX_SOURCE_BYTES && hex(source.sha256);
}

function validResearch(research) {
  return isObject(research) && optionalText(research, ['question', 'synthesis'])
    && Array.isArray(research.groups)
    && research.groups.every(group => isObject(group) && id(group.id) && ids(group.ids)
      && optionalText(group, ['name', 'comparison']));
}

function validAnchor(anchor) {
  return anchor?.version === 1 && integer(anchor.page) && anchor.page > 0
    && integer(anchor.start) && integer(anchor.end) && anchor.end > anchor.start
    && Array.isArray(anchor.rects) && anchor.rects.length > 0
    && anchor.rects.every(rect => isObject(rect) && [rect.x, rect.y, rect.w, rect.h].every(Number.isFinite)
      && rect.x >= 0 && rect.y >= 0 && rect.w > 0 && rect.h > 0
      && rect.x + rect.w <= 1.0001 && rect.y + rect.h <= 1.0001);
}

function recordKey({ kind, value, source }) {
  if (!isObject(value) || 'blob' in value || 'backupSource' in value || (kind !== 'book' && source !== undefined)) throw recordError();
  switch (kind) {
    case 'book':
      if (id(value.id) && validSource(source) && value.size === source.bytes && integer(value.lastOpenedAt)
        && ['pdf', 'epub', 'mobi', 'azw', 'azw3', 'txt', 'md', 'markdown', 'html', 'htm'].includes(value.format)
        && isString(value.title) && optionalText(value, ['author', 'language', 'year', 'doi', 'fileRevision'])
        && (value.progress == null || isObject(value.progress))
        && (value.cover == null || value.cover === '' || (isString(value.cover) && /^data:image\/(?:png|jpeg|webp|gif);base64,[a-z\d+/=]+$/iu.test(value.cover)))) return value.id;
      break;
    case 'annotation':
      if (id(value.id) && id(value.bookId) && isString(value.kind) && isString(value.style)
        && optionalText(value, ['quote', 'note', 'color'])
        && (value.rects == null || (Array.isArray(value.rects) && value.rects.every(isObject)))) return value.id;
      break;
    case 'collection':
      if (id(value.id) && isString(value.name) && ids(value.bookIds)
        && (value.research == null || validResearch(value.research))) return value.id;
      break;
    case 'evidence':
      if (id(value.id) && id(value.bookId) && isString(value.quote) && validAnchor(value.anchor)
        && optionalText(value, ['title', 'author', 'year', 'doi', 'printLabel', 'note', 'sourceRevision', 'fileRevision', 'identityError'])
        && (value.topicIds == null || ids(value.topicIds)) && (value.identity == null || validFingerprint(value.identity))
        && (value.translation == null || (isObject(value.translation)
          && isString(value.translation.text) && optionalText(value.translation, ['scope', 'source'])))) return value.id;
      break;
    case 'translationPreference':
      if (id(value.bookId) && isObject(value.preferences) && optionalText(value.preferences, ['glossary'])) return value.bookId;
      break;
    case 'translationCache':
      if (id(value.key) && id(value.bookId) && (isString(value.zh) || isString(value.text))) return value.key;
      break;
    default:
      break;
  }
  throw recordError();
}

async function parseJson(blob) {
  try { return JSON.parse(decoder.decode(await blob.arrayBuffer())); }
  catch { throw new Error('备份 JSON 无法读取。'); }
}

async function sourceInfo(value, blob) {
  if (!blob) return value.backupSource;
  return {
    name: blob.name || `${value.title}.${value.format}`,
    type: blob.type,
    lastModified: integer(blob.lastModified) ? blob.lastModified : 0,
    bytes: blob.size,
    sha256: await sha256(await blob.arrayBuffer()),
  };
}

function summarize(rows) {
  const books = rows.filter(row => row.kind === 'book');
  return {
    documents: books.length,
    originals: books.filter(row => row.value.blob).length,
    titles: books.slice(0, 8).map(row => row.value.title),
    collections: rows.filter(row => row.kind === 'collection').length,
    annotations: rows.filter(row => row.kind === 'annotation').length,
    evidence: rows.filter(row => row.kind === 'evidence').length,
    translations: rows.filter(row => row.kind === 'translationCache' || row.kind === 'translationPreference').length,
  };
}

export async function createLibraryBackup({ includeOriginals = true, signal } = {}) {
  const rows = await readBackupLibrary();
  const entries = new Map();
  const manifest = { format: FORMAT, version: VERSION, includeOriginals, entries: [] };
  let total = 0;
  async function add(path, blob, digest) {
    total += blob.size;
    if (total > BACKUP_BYTES || entries.size >= BACKUP_ENTRIES) throw backupLimit();
    manifest.entries.push({ path, bytes: blob.size, sha256: digest ?? await sha256(await blob.arrayBuffer()) });
    entries.set(path, blob);
  }
  for (const [i, { kind, value }] of rows.entries()) {
    checkCancelled(signal);
    const entryId = String(i + 1).padStart(5, '0');
    const { blob, backupSource, ...metadata } = value;
    const source = kind === 'book' ? await sourceInfo(value, blob) : undefined;
    const record = { kind, value: metadata, ...(source ? { source } : {}) };
    recordKey(record);
    await add(`records/${entryId}.json`, jsonBlob(record));
    if (kind === 'book' && includeOriginals && blob) await add(binaryPath(entryId), blob, source.sha256);
  }
  entries.set('manifest.json', jsonBlob(manifest));
  return createZip(entries, signal);
}

export async function inspectLibraryBackup(file, signal) {
  const zip = await inspectZip(file, signal);
  const read = zipReader(signal);
  const manifestEntry = zip.get('manifest.json');
  if (manifestEntry.bytes > MAX_MANIFEST_BYTES) throw invalidZip();
  const manifest = await parseJson(await read(manifestEntry));
  if (manifest?.format !== FORMAT || manifest.version !== VERSION) throw new Error('此备份格式或版本不受支持。');
  if (!Array.isArray(manifest.entries) || typeof manifest.includeOriginals !== 'boolean') throw invalidZip();
  if (manifest.entries.length > BACKUP_ENTRIES) throw backupLimit();
  const expected = new Map();
  for (const entry of manifest.entries) {
    if (!isObject(entry) || entry.path === 'manifest.json' || expected.has(entry.path)
      || !hex(entry.sha256) || !integer(entry.bytes) || zip.get(entry.path)?.bytes !== entry.bytes) throw invalidZip();
    expected.set(entry.path, entry);
  }
  if (expected.size + 1 !== zip.size) throw invalidZip();
  async function verified(path) {
    const blob = await read(zip.get(path));
    const digest = await sha256(await blob.arrayBuffer());
    checkCancelled(signal);
    if (digest !== expected.get(path).sha256) throw new Error('备份条目的 SHA-256 校验失败。');
    return blob;
  }

  const rows = [], keys = new Set(), binaries = new Set();
  for (const path of expected.keys()) {
    const match = recordPath.exec(path);
    if (!match) continue;
    const record = await parseJson(await verified(path));
    if (!isObject(record)) throw recordError();
    const { kind, value, source } = record;
    const key = JSON.stringify([kind, recordKey(record)]);
    if (keys.has(key)) throw new Error('备份中存在重复记录 ID。');
    keys.add(key);
    if (kind === 'book') {
      value.backupSource = source;
      const binary = binaryPath(match[1]);
      const entry = expected.get(binary);
      if (entry) {
        if (!manifest.includeOriginals || entry.bytes !== source.bytes || entry.sha256 !== source.sha256) throw recordError();
        const blob = await verified(binary);
        value.blob = new File([blob], source.name, { type: source.type, lastModified: source.lastModified });
        binaries.add(binary);
      }
    }
    rows.push({ kind, value });
  }
  if (rows.length + binaries.size !== expected.size) throw invalidZip();
  const conflicts = await previewBackupConflicts(rows);
  checkCancelled(signal);
  return {
    summary: summarize(rows),
    conflictCount: conflicts.length,
    restore: (policy, restoreSignal) => restoreBackupLibrary(rows, { policy, expectedConflicts: conflicts, signal: restoreSignal }),
  };
}

export async function attachLibraryOriginal(id, file) {
  const source = (await getBook(id))?.backupSource;
  if (!validSource(source) || file.size !== source.bytes || await sha256(await file.arrayBuffer()) !== source.sha256) {
    throw new Error('所选文件与备份中的原文指纹不一致，请选择原版本。');
  }
  await reattachBackupBook(id, file, source);
}
