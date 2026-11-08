export const PDF_TRANSLATION_VERSION = 'reader-a-2';

export function normalizeGlossary(value) {
  return String(value || '').split(/\r?\n/u).map(line => line.trim()).filter(Boolean).join('\n').slice(0, 4000);
}

export function protectPdfText(text, protectedTokens = []) {
  const tokens = [...new Set([
    ...protectedTokens,
    ...(text.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu) || []),
  ])].filter(token => token && text.includes(token)).sort((a, b) => b.length - a.length);
  const replacements = [];
  let masked = text;
  for (const token of tokens) {
    const placeholder = `⟦KEEP_${replacements.length}⟧`;
    const pieces = masked.split(token);
    if (pieces.length === 1) continue;
    masked = pieces.join(placeholder);
    replacements.push({ placeholder, token, count: pieces.length - 1 });
  }
  return {
    text: masked,
    restore(result) {
      let output = String(result || '');
      for (const { placeholder, token, count } of replacements) {
        const pieces = output.split(placeholder);
        if (pieces.length - 1 !== count) throw new Error('译文遗漏或重复了公式或引用标记，请重试本段。');
        output = pieces.join(token);
      }
      if (/⟦KEEP_\d+⟧/u.test(output)) throw new Error('译文包含无法对应的公式标记，请重试本段。');
      return output;
    },
  };
}

export async function translationCacheKey(config, source) {
  if (!globalThis.crypto?.subtle) return null;
  const bytes = new TextEncoder().encode(JSON.stringify([
    PDF_TRANSLATION_VERSION, config.documentId, source, 'zh-CN',
    config.model?.provider, config.model?.model, config.model?.promptVersion,
    normalizeGlossary(config.glossary),
  ]));
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return `${config.documentId}:${Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('')}`;
}

/** PDF translation scheduling is independent of canvas and page navigation. */
export class PdfTranslationController {
  constructor({ translate, cache, onChange = () => {}, onModelChanged = () => {}, prefetchDelay = 700, requestTimeout = 120000 }) {
    this.translate = translate;
    this.cache = cache;
    this.onChange = onChange;
    this.onModelChanged = onModelChanged;
    this.prefetchDelay = prefetchDelay;
    this.requestTimeout = requestTimeout;
    this.sources = new Map();
    this.entries = new Map();
    this.jobs = new Map();
    this.preparing = new Map();
    this.epoch = 0;
    this.sequence = 0;
    this.activePage = 1;
    this.visibleIds = new Set();
    this.config = {};
    this.disposed = false;
  }
  configure(config) {
    if (this.disposed) return;
    const next = { ...config, glossary: normalizeGlossary(config.glossary) };
    const namespace = JSON.stringify([next.documentId, next.model, next.glossary, PDF_TRANSLATION_VERSION]);
    const changed = namespace !== this.namespace;
    if (changed) {
      const oldDocument = this.config.documentId;
      this.epoch += 1;
      this.abortJobs();
      if (oldDocument && oldDocument !== next.documentId) this.sources.clear();
      this.entries.clear();
      this.preparing.clear();
      this.namespace = namespace;
      this.cacheIssue = '';
    }
    this.config = next;
    if (!next.enabled || !next.canTranslate) this.abortJobs();
    if (next.prefetch === false) for (const job of [...this.jobs.values()]) if (job.page !== this.activePage) this.abortJob(job);
    if (changed) for (const [page, source] of this.sources) this.registerPage(page, source);
    this.emit();
    this.pump();
  }
  setFocus(page, visibleIds = []) {
    if (this.disposed) return;
    if (page !== this.activePage) {
      this.activePage = page;
      this.prefetchAfter = Date.now() + this.prefetchDelay;
      clearTimeout(this.timer);
      this.timer = null;
      for (const job of [...this.jobs.values()]) if (job.page !== page) this.abortJob(job);
      // Keep a small metadata/result window, independently of the canvas cache.
      for (const oldPage of this.sources.keys()) if (Math.abs(oldPage - page) > 3) {
        this.sources.delete(oldPage);
        for (const [key, entry] of this.entries) if (entry.page === oldPage) this.entries.delete(key);
      }
    }
    this.visibleIds = new Set(visibleIds);
    this.emit();
    this.pump();
  }
  registerPage(page, source) {
    if (this.disposed) return;
    this.sources.set(page, source);
    const pending = [];
    for (const [index, segment] of (source.segments || []).entries()) {
      const id = segment.id || `p${page}-s${index}`;
      const uid = `${page}:${id}`;
      const previous = this.entries.get(uid);
      if (previous?.src === segment.src && previous.sourceNeedsReview === segment.sourceNeedsReview) continue;
      const entry = { ...segment, id, uid, index, page, status: 'checking', zh: '', cached: false };
      this.entries.set(uid, entry);
      if (segment.sourceNeedsReview) entry.status = 'source-review';
      else pending.push(entry);
    }
    if (pending.length) {
      const token = Symbol();
      const epoch = this.epoch;
      this.preparing.set(page, token);
      void Promise.all(pending.map(entry => this.prepare(entry, epoch))).finally(() => {
        if (this.preparing.get(page) !== token) return;
        this.preparing.delete(page);
        this.pump();
      });
    }
    this.emit();
  }
  fresh(entry, epoch) {
    return !this.disposed && epoch === this.epoch && this.entries.get(entry.uid) === entry;
  }
  async prepare(entry, epoch) {
    try {
      const compact = entry.src.replace(/\s/gu, '');
      if (compact && (compact.match(/[\u3400-\u9fff]/gu) || []).length / compact.length >= 0.55) {
        entry.zh = entry.src; entry.status = 'done'; entry.passthrough = true;
        this.emit(); return;
      }
      entry.key = await translationCacheKey(this.config, entry.src);
      if (!this.fresh(entry, epoch)) return;
      const row = entry.key && await this.cache?.get(entry.key);
      if (!this.fresh(entry, epoch)) return;
      if (typeof row?.zh === 'string' && row.zh.trim()) { entry.zh = row.zh; entry.cached = true; entry.status = 'done'; }
      else entry.status = 'queued';
    } catch {
      if (!this.fresh(entry, epoch)) return;
      entry.status = 'queued';
      this.cacheIssue = '本地缓存暂不可用，本次译文仍可阅读。';
    }
    this.emit();
    this.pump();
  }
  abortJob(job) {
    clearTimeout(job.timeout);
    job.controller.abort();
    this.jobs.delete(job.id);
    for (const entry of job.entries) if (this.entries.get(entry.uid) === entry && entry.job === job.id) entry.status = 'queued';
  }
  abortJobs() {
    clearTimeout(this.timer);
    this.timer = null;
    for (const job of [...this.jobs.values()]) this.abortJob(job);
  }
  pump() {
    if (this.disposed || !this.config.enabled || !this.config.canTranslate || !this.config.documentId) return;
    while (this.jobs.size < 2) {
      const active = [...this.entries.values()].filter(entry => entry.page === this.activePage);
      const currentPending = active.some(entry => entry.status === 'queued' || entry.status === 'checking' || entry.status === 'loading');
      const candidates = [...this.entries.values()].filter(entry => entry.status === 'queued' && !this.preparing.has(entry.page)
        && (entry.page === this.activePage || (this.config.prefetch !== false && !currentPending && entry.page === this.activePage + 1)))
        .sort((a, b) => (a.page - this.activePage) - (b.page - this.activePage)
          || Number(this.visibleIds.has(b.id)) - Number(this.visibleIds.has(a.id)) || a.index - b.index);
      if (!candidates.length) return;
      const first = candidates[0];
      if (first.page !== this.activePage && Date.now() < (this.prefetchAfter || 0)) {
        if (!this.timer) this.timer = setTimeout(() => { this.timer = null; this.pump(); }, this.prefetchAfter - Date.now());
        return;
      }
      const entries = [];
      let chars = 0;
      const limit = active.some(entry => entry.status === 'done') ? 3 : 1;
      for (const entry of candidates) {
        if (entry.page !== first.page || entries.length >= limit || chars + entry.src.length > 3000 && entries.length) break;
        entries.push(entry); chars += entry.src.length;
      }
      const job = { id: ++this.sequence, epoch: this.epoch, controller: new AbortController(), page: first.page, entries, config: this.config };
      this.jobs.set(job.id, job);
      for (const entry of entries) { entry.status = 'loading'; entry.job = job.id; entry.error = ''; }
      job.timeout = setTimeout(() => {
        if (this.jobs.get(job.id) !== job) return;
        this.abortJob(job);
        for (const entry of entries) if (this.fresh(entry, job.epoch)) { entry.status = 'error'; entry.error = '本段翻译超时，请重试或稍后继续。'; }
        this.emit(); this.pump();
      }, this.requestTimeout);
      this.emit();
      void this.run(job);
    }
  }
  async run(job) {
    const valid = entry => !job.controller.signal.aborted && this.fresh(entry, job.epoch) && entry.job === job.id;
    try {
      const source = this.sources.get(job.page)?.segments || [];
      const protectedEntries = job.entries.map(entry => protectPdfText(entry.src, entry.protectedTokens));
      const firstIndex = job.entries[0].index;
      const neighbours = source.slice(Math.max(0, firstIndex - 1), firstIndex + job.entries.length + 1);
      if (firstIndex === 0) neighbours.unshift(this.sources.get(job.page - 1)?.segments?.at(-1));
      if (firstIndex + job.entries.length >= source.length) neighbours.push(this.sources.get(job.page + 1)?.segments?.[0]);
      const context = neighbours.filter(segment => segment && !segment.sourceNeedsReview).map(segment => segment.src).join('\n').slice(0, 1200);
      const response = await this.translate(job.entries.map((entry, index) => ({ id: entry.id, text: protectedEntries[index].text })), {
        title: job.config.title, context, glossary: job.config.glossary,
        expectedModel: job.config.model, signal: job.controller.signal, includeMetadata: true,
      });
      if (response.model && (response.model.provider !== job.config.model?.provider || response.model.model !== job.config.model?.model)
        || response.promptVersion && response.promptVersion !== job.config.model?.promptVersion) {
        const error = new Error('默认模型已变化，请刷新翻译服务。'); error.code = 'MODEL_CHANGED'; throw error;
      }
      for (const [index, entry] of job.entries.entries()) {
        if (!valid(entry)) continue;
        try {
          const translated = response.translations?.[entry.id];
          if (!translated?.trim()) throw new Error('本段没有返回译文，请重试。');
          entry.zh = protectedEntries[index].restore(translated);
          entry.status = 'done'; entry.cached = false;
          if (entry.key) void Promise.resolve(this.cache?.put({ key: entry.key, bookId: job.config.documentId, zh: entry.zh }))
            .catch(() => { if (valid(entry)) { this.cacheIssue = '译文已完成，但本地缓存未能保存。'; this.emit(); } });
        } catch (error) { entry.status = 'error'; entry.error = error.message; }
        this.emit();
      }
    } catch (error) {
      for (const entry of job.entries) if (valid(entry)) { entry.status = 'error'; entry.error = error.message || '本段翻译失败。'; }
      if (!job.controller.signal.aborted && job.epoch === this.epoch && error.code === 'MODEL_CHANGED') this.onModelChanged();
    } finally {
      clearTimeout(job.timeout);
      this.jobs.delete(job.id);
      if (!this.disposed) { this.emit(); this.pump(); }
    }
  }
  retry(page, id) {
    if (page === this.activePage) for (const job of [...this.jobs.values()]) if (job.page !== page) this.abortJob(job);
    for (const entry of this.entries.values()) if (entry.page === page && (id ? entry.id === id : entry.status === 'error')) {
      if (entry.status === 'loading' || entry.status === 'checking' || entry.sourceNeedsReview) continue;
      entry.status = 'queued'; entry.error = ''; entry.cached = false;
    }
    this.emit(); this.pump();
  }
  emit() {
    if (this.disposed) return;
    const pages = {};
    for (const entry of this.entries.values()) {
      (pages[entry.page] ||= []).push({ ...entry });
    }
    for (const rows of Object.values(pages)) rows.sort((a, b) => a.index - b.index);
    this.onChange({ pages, cacheIssue: this.cacheIssue || '' });
  }
  dispose() { this.disposed = true; this.abortJobs(); this.sources.clear(); this.entries.clear(); }
}
