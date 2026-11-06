// Deterministic local fake translator. Browser checks never call a real model.
export function translationFixtureService() {
  const stats = { requests: [], completed: [], aborted: 0, model: 'v1' };
  let dropped = false;
  const json = (res, status, body) => { res.statusCode = status; res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(body)); };
  return async (req, res) => {
    if (req.url === '/translation-stats') { json(res, 200, stats); return true; }
    if (req.url === '/translation-model-v2' && req.method === 'POST') { stats.model = 'v2'; json(res, 200, {}); return true; }
    if (req.url === '/dsh-reader/ai/status') { json(res, 200, { ready: true, provider: 'fixture', model: stats.model, promptVersion: 'academic-zh-2' }); return true; }
    if (req.url !== '/dsh-reader/ai/translate') return false;
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString());
    stats.requests.push({ title: body.title, ids: body.segments.map(segment => segment.id), glossary: body.glossary, model: body.expectedModel?.model });
    if (body.expectedModel && body.expectedModel.model !== stats.model) { json(res, 409, { error: { code: 'MODEL_CHANGED', message: '测试模型已切换' } }); return true; }
    const model = stats.model;
    res.once('close', () => { if (!res.writableEnded) stats.aborted += 1; });
    const delay = body.segments.some(segment => segment.id === 'selection') ? 700 : body.segments.some(segment => segment.id.endsWith('-s1')) ? 500 : body.segments[0]?.id.endsWith('-s0') ? 90 : 180;
    await new Promise(resolve => setTimeout(resolve, delay));
    if (res.destroyed) return true;
    const translations = body.segments.filter(segment => {
      if (!dropped && segment.id === 'p2-s2') { dropped = true; return false; }
      return true;
    }).map(segment => ({ id: segment.id, zh: `【${model} · ${body.title}】${body.glossary ? '术语表已应用。' : ''}中文译文：${segment.text}` }));
    stats.completed.push({ title: body.title, model, ids: translations.map(segment => segment.id) });
    json(res, 200, { translations, model: { provider: 'fixture', model }, promptVersion: 'academic-zh-2' });
    return true;
  };
}
