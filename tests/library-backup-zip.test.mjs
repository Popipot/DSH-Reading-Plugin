import assert from 'node:assert/strict';
import test from 'node:test';
import { zipSync, unzipSync, strToU8 } from 'fflate';
import {
  BACKUP_BYTES, BACKUP_ENTRIES, createZip, inspectZip, sha256, zipReader,
} from '../web/src/backup/zip.js';
import { inspectLibraryBackup } from '../web/src/backup/library.js';

const manifestName = 'manifest.json';
const recordName = 'records/00001.json';
const archive = entries => new Blob([zipSync(entries)]);
const manifest = overrides => strToU8(JSON.stringify({
  format: 'dsh-reader-library', version: 1, includeOriginals: true, entries: [], ...overrides,
}));
const inspect = file => inspectLibraryBackup(file);

test('stored export interoperates with ZIP readers and accepts Deflate imports', async () => {
  const data = '中文 · PDF · Sicherung'.repeat(256);
  const file = await createZip(new Map([[manifestName, new Blob([data])]]));
  assert.equal(new TextDecoder().decode(unzipSync(new Uint8Array(await file.arrayBuffer()))[manifestName]), data);
  for (const zipped of [file, archive({ [manifestName]: strToU8(data) })]) {
    const entry = (await inspectZip(zipped)).get(manifestName);
    assert.equal(await (await zipReader()(entry)).text(), data);
  }
});

test('invalid versions and forged SHA-256 are rejected before accessing storage', async () => {
  await assert.rejects(inspect(archive({ [manifestName]: manifest({ version: 2 }) })), /版本/);
  const record = strToU8(JSON.stringify({ kind: 'annotation', value: { id: 'legacy', bookId: 'book', kind: 'pdf', style: 'note' } }));
  const entries = [{ path: recordName, bytes: record.length, sha256: 'a'.repeat(64) }];
  await assert.rejects(inspect(archive({ [manifestName]: manifest({ entries }), [recordName]: record })), /SHA-256/);
  entries[0].sha256 = await sha256(record);
  await assert.rejects(inspect(archive({ [manifestName]: manifest({ entries: [...entries, ...entries] }), [recordName]: record })), /重复/);
  await assert.rejects(inspect(archive({ [manifestName]: manifest(), '../manifest.json': record })), /路径/);
});

function zipFields(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const eocd = bytes.length - 22;
  const central = view.getUint32(eocd + 16, true);
  return { view, eocd, central };
}

test('physical duplicate names and path discrepancies are rejected', async () => {
  const second = 'records/00002.json';
  const bytes = zipSync({ [manifestName]: manifest(), [recordName]: strToU8('1'), [second]: strToU8('2') });
  const { central } = zipFields(bytes);
  for (const offset of [0, central]) {
    const name = strToU8(second);
    const rawStart = bytes.findIndex((_, at) => at >= offset
      && name.every((byte, i) => bytes[at + i] === byte));
    assert.ok(rawStart >= offset);
    bytes.set(strToU8(recordName), rawStart);
  }
  await assert.rejects(inspectZip(new Blob([bytes])), /重复/);
});

test('the declared expanded-byte and entry caps include manifest overhead', async () => {
  const bytes = zipSync({ [manifestName]: strToU8('manifest'.repeat(8)), [recordName]: strToU8('record'.repeat(16)) });
  const { view, eocd, central } = zipFields(bytes);
  const second = central + 46 + view.getUint16(central + 28, true);
  const offset = view.getUint32(second + 42, true);
  const manifestSize = view.getUint32(central + 24, true);
  view.setUint32(second + 24, BACKUP_BYTES - manifestSize, true);
  view.setUint32(offset + 22, BACKUP_BYTES - manifestSize, true);
  assert.equal((await inspectZip(new Blob([bytes]))).size, 2);
  await assert.rejects(zipReader()((await inspectZip(new Blob([bytes]))).get(recordName)), /损坏/);
  view.setUint32(second + 24, BACKUP_BYTES - manifestSize + 1, true);
  view.setUint32(offset + 22, BACKUP_BYTES - manifestSize + 1, true);
  await assert.rejects(inspectZip(new Blob([bytes])), /1024 MiB/);
  view.setUint16(eocd + 8, BACKUP_ENTRIES + 2, true);
  view.setUint16(eocd + 10, BACKUP_ENTRIES + 2, true);
  await assert.rejects(inspectZip(new Blob([bytes])), /10000/);
});

test('actual expanded length cannot exceed the claimed length and a cancelled ZIP is rejected', async () => {
  const bytes = zipSync({ [manifestName]: strToU8('A'.repeat(100000)) });
  const { view, central } = zipFields(bytes);
  view.setUint32(22, 1, true);
  view.setUint32(central + 24, 1, true);
  const zip = await inspectZip(new Blob([bytes]));
  await assert.rejects(zipReader()(zip.get(manifestName)), /损坏/);
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(inspectZip(new Blob([bytes]), controller.signal), { name: 'AbortError' });
});
