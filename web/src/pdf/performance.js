// Image snapshots have an explicit RGBA pixel budget and release ownership on
// replacement/eviction. They outlive DOM rows, but never outlive a document.
export class PageBitmapCache {
  constructor(limit = 48 * 1024 * 1024) { this.limit = limit; this.bytes = 0; this.entries = new Map(); }
  get(page) {
    const entry = this.entries.get(page);
    if (entry) { this.entries.delete(page); this.entries.set(page, entry); }
    return entry;
  }
  set(page, entry) {
    this.delete(page);
    const bytes = entry.bitmap.width * entry.bitmap.height * 4;
    if (bytes > this.limit) { entry.bitmap.close(); return; }
    this.entries.set(page, { ...entry, bytes });
    this.bytes += bytes;
    while (this.bytes > this.limit) this.delete(this.entries.keys().next().value);
  }
  delete(page) {
    const entry = this.entries.get(page);
    if (!entry) return;
    this.bytes -= entry.bytes;
    entry.bitmap.close();
    this.entries.delete(page);
  }
  clear() { for (const page of this.entries.keys()) this.delete(page); }
}

// Prefix sums of known page-height corrections. Unknown pages use the first
// page's estimate; no offscreen DOM or page parsing is required to jump anywhere.
export class PageLayoutIndex {
  constructor(count, height, gap = 20) {
    this.count = count; this.defaultHeight = height; this.gap = gap;
    this.heights = new Map(); this.tree = new Float64Array(count + 1);
    this.paddingTop = 18;
  }
  setHeight(page, height) {
    let delta = height - (this.heights.get(page) ?? this.defaultHeight);
    this.heights.set(page, height);
    for (let i = page; i <= this.count; i += i & -i) this.tree[i] += delta;
  }
  top(page) {
    let sum = (page - 1) * (this.defaultHeight + this.gap);
    for (let i = page - 1; i > 0; i -= i & -i) sum += this.tree[i];
    return this.paddingTop + sum;
  }
  height(page) { return this.heights.get(page) ?? this.defaultHeight; }
  pageAt(y) {
    let low = 1, high = this.count;
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      if (this.top(mid) <= y) low = mid; else high = mid - 1;
    }
    return low;
  }
  entryAt(y) { const page = this.pageAt(y); return { page, top: this.top(page), height: this.height(page) }; }
}
