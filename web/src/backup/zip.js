const MiB = 1024 * 1024;
export const BACKUP_BYTES = 1024 * MiB;
export const BACKUP_ENTRIES = 10000;
const MAX_ZIP_OVERHEAD = 4 * MiB;
const UTF8 = 0x800;
const names = /^(?:manifest\.json|records\/\d{5}\.json|files\/\d{5}\.bin)$/u;
const encoder = new TextEncoder();
export const decoder = new TextDecoder('utf-8', { fatal: true });

export function invalidZip() {
  return new Error('ZIP 条目损坏、重复或使用了不支持的路径或编码。');
}

export function backupLimit() {
  return new Error('备份展开后须在 1024 MiB 以内，载荷最多 10000 项。');
}

export function checkCancelled(signal) {
  signal?.throwIfAborted();
}

const table = Uint32Array.from({ length: 256 }, (_, byte) => {
  for (let i = 0; i < 8; i += 1) byte = (byte >>> 1) ^ (byte & 1 ? 0xedb88320 : 0);
  return byte;
});
const updateCrc = (crc, bytes) => {
  for (let i = 0; i < bytes.length; i += 1) crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 255];
  return crc;
};

export async function sha256(bytes) {
  if (!globalThis.crypto?.subtle) throw new Error('此环境无法核验 SHA-256 文件摘要。');
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  return [...digest].map(byte => byte.toString(16).padStart(2, '0')).join('');
}

async function blobCrc(blob, signal) {
  let crc = -1;
  for (let offset = 0; offset < blob.size; offset += MiB) {
    checkCancelled(signal);
    const chunk = new Uint8Array(await blob.slice(offset, offset + MiB).arrayBuffer());
    crc = updateCrc(crc, chunk);
  }
  return (~crc) >>> 0;
}

function header(size, fields, name = new Uint8Array()) {
  const bytes = new Uint8Array(size + name.length);
  const view = new DataView(bytes.buffer);
  for (const [offset, value, width = 2] of fields) {
    if (width === 4) view.setUint32(offset, value, true);
    else view.setUint16(offset, value, true);
  }
  bytes.set(name, size);
  return bytes;
}

// Store already-compressed documents as Blob parts to avoid copying a whole library.
export async function createZip(entries, signal) {
  const payload = [];
  const central = [];
  let offset = 0, centralSize = 0, expanded = 0;
  if (entries.size > BACKUP_ENTRIES + 1) throw backupLimit();
  for (const [path, blob] of entries) {
    checkCancelled(signal);
    if (!names.test(path)) throw invalidZip();
    expanded += blob.size;
    if (expanded > BACKUP_BYTES) throw backupLimit();
    const name = encoder.encode(path);
    const crc = await blobCrc(blob, signal);
    const fields = [[6, UTF8], [12, 33], [14, crc, 4], [18, blob.size, 4], [22, blob.size, 4], [26, name.length]];
    const local = header(30, [[0, 0x04034b50, 4], [4, 20], ...fields], name);
    const entry = header(46, [[0, 0x02014b50, 4], [4, 20], [6, 20],
      ...fields.map(([at, value, width]) => [at + 2, value, width]), [42, offset, 4]], name);
    payload.push(local, blob);
    central.push(entry);
    offset += local.length + blob.size;
    centralSize += entry.length;
  }
  const end = header(22, [[0, 0x06054b50, 4], [8, entries.size], [10, entries.size],
    [12, centralSize, 4], [16, offset, 4]]);
  checkCancelled(signal);
  return new Blob([...payload, ...central, end], { type: 'application/zip' });
}

const viewOf = async (blob, offset, size) => new DataView(await blob.slice(offset, offset + size).arrayBuffer());
const short = (view, offset) => view.getUint16(offset, true);
const word = (view, offset) => view.getUint32(offset, true);
const textAt = (view, offset, size) => decoder.decode(new Uint8Array(view.buffer, view.byteOffset + offset, size));

export async function inspectZip(blob, signal) {
  if (blob.size > BACKUP_BYTES + MAX_ZIP_OVERHEAD) throw backupLimit();
  if (blob.size < 22) throw invalidZip();
  const tailSize = Math.min(blob.size, 65557);
  const tail = await viewOf(blob, blob.size - tailSize, tailSize);
  let end = tailSize - 22;
  while (end >= 0 && (word(tail, end) !== 0x06054b50 || end + 22 + short(tail, end + 20) !== tailSize)) end -= 1;
  if (end < 0 || short(tail, end + 4) || short(tail, end + 6)) throw invalidZip();
  const count = short(tail, end + 10), size = word(tail, end + 12), start = word(tail, end + 16);
  if (count > BACKUP_ENTRIES + 1 || size > MAX_ZIP_OVERHEAD) throw backupLimit();
  if (!count || short(tail, end + 8) !== count || start + size !== blob.size - tailSize + end) throw invalidZip();
  const central = await viewOf(blob, start, size);
  const entries = new Map();
  let at = 0, expanded = 0;
  for (let i = 0; i < count; i += 1) {
    if (at + 46 > size || word(central, at) !== 0x02014b50 || short(central, at + 34)) throw invalidZip();
    const flags = short(central, at + 8), method = short(central, at + 10);
    const crc = word(central, at + 16), compressed = word(central, at + 20), bytes = word(central, at + 24);
    const nameSize = short(central, at + 28);
    const next = at + 46 + nameSize + short(central, at + 30) + short(central, at + 32);
    const offset = word(central, at + 42);
    if ((flags & ~UTF8) || ![0, 8].includes(method) || (method === 0 && compressed !== bytes)
      || nameSize > 24 || next > size || offset + 30 + nameSize + compressed > start) throw invalidZip();
    const name = textAt(central, at + 46, nameSize);
    if (!names.test(name) || entries.has(name)) throw invalidZip();
    entries.set(name, { name, nameSize, offset, flags, method, crc, compressed, bytes });
    at = next;
    expanded += bytes;
    if (expanded > BACKUP_BYTES) throw backupLimit();
  }
  if (at !== size || !entries.has('manifest.json')) throw invalidZip();
  let nextOffset = 0;
  for (const entry of [...entries.values()].sort((a, b) => a.offset - b.offset)) {
    checkCancelled(signal);
    const { offset, name, nameSize, flags, method, crc, compressed, bytes } = entry;
    if (offset !== nextOffset) throw invalidZip();
    const local = await viewOf(blob, offset, 30 + nameSize);
    if (word(local, 0) !== 0x04034b50 || short(local, 6) !== flags || short(local, 8) !== method
      || word(local, 14) !== crc || word(local, 18) !== compressed || word(local, 22) !== bytes
      || short(local, 26) !== nameSize || textAt(local, 30, nameSize) !== name) throw invalidZip();
    const data = offset + 30 + nameSize + short(local, 28);
    nextOffset = data + compressed;
    if (nextOffset > start) throw invalidZip();
    entry.blob = blob.slice(data, nextOffset);
  }
  if (nextOffset !== start) throw invalidZip();
  return entries;
}

export function zipReader(signal) {
  let remaining = BACKUP_BYTES;
  return async ({ blob, bytes, crc, method }) => {
    checkCancelled(signal);
    if (bytes > remaining) throw backupLimit();
    const parts = [];
    const stream = method === 0 ? blob.stream() : blob.stream().pipeThrough(new DecompressionStream('deflate-raw'));
    const reader = stream.getReader();
    let seen = 0, digest = -1;
    try {
      while (true) {
        checkCancelled(signal);
        const { value, done } = await reader.read();
        if (done) break;
        seen += value.byteLength;
        remaining -= value.byteLength;
        if (remaining < 0) throw backupLimit();
        if (seen > bytes) throw invalidZip();
        digest = updateCrc(digest, value);
        if (method !== 0) parts.push(value);
      }
      if (seen !== bytes || (~digest >>> 0) !== crc) throw invalidZip();
      return method === 0 ? blob : new Blob(parts);
    } finally {
      await reader.cancel().catch(() => {});
      reader.releaseLock();
    }
  };
}
