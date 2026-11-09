const fingerprints = new WeakMap();
let digestQueue = Promise.resolve();

export function validFingerprint(value) {
  return Number.isSafeInteger(value?.bytes) && value.bytes > 0
    && typeof value.sha256 === 'string' && /^[a-f0-9]{64}$/.test(value.sha256);
}

export function sameFingerprint(left, right) {
  return validFingerprint(left) && validFingerprint(right)
    && left.bytes === right.bytes && left.sha256 === right.sha256;
}

// Cache only by immutable Blob instance. The library ID is not a file version.
export function fingerprintPdf(blob) {
  if (!blob?.size || blob.size > 320 * 1024 * 1024) return Promise.reject(new Error('请选择 320 MiB 以内的 PDF。'));
  const cached = fingerprints.get(blob);
  if (cached) return cached;
  const pending = digestQueue.then(async () => {
    if (!globalThis.crypto?.subtle) throw new Error('此环境无法核验 SHA-256 文件摘要。');
    const buffer = await blob.arrayBuffer();
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', buffer));
    return { bytes: blob.size, sha256: [...digest].map(byte => byte.toString(16).padStart(2, '0')).join('') };
  });
  digestQueue = pending.catch(() => {});
  fingerprints.set(blob, pending);
  pending.catch(() => { fingerprints.delete(blob); });
  return pending;
}
