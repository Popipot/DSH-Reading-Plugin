import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { registerAiRoutes, buildTranslatePrompt, normalizeTranslateBody } from '../lib/ai.js';

function harness(stream) {
  const routes = new Map();
  const ctx = { get(name) {
    if (name === 'agentDefaultModel') return { currentSelection: () => ({ provider: 'translation-test', model: 'fixture-v1' }) };
    if (name === 'llm') return { listModels: async () => [], stream };
  } };
  registerAiRoutes({ register(route) { routes.set(route.path, route.handler); return () => {}; } }, ctx);
  return body => {
    const req = new EventEmitter();
    Object.assign(req, { method: 'POST', url: '/dsh-reader/ai/translate', headers: { 'x-dsh-reader': '1', 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' }, socket: { remoteAddress: 'fixture' } });
    const res = new EventEmitter();
    Object.assign(res, { writableEnded: false, destroyed: false, headers: {},
      setHeader(key, value) { this.headers[key] = value; },
      end(value) { this.body = value && JSON.parse(value); this.writableEnded = true; },
    });
    const finished = routes.get(req.url)(req, res);
    queueMicrotask(() => { req.emit('data', Buffer.from(JSON.stringify(body))); req.emit('end'); });
    return { req, res, finished };
  };
}

test('PDF request normalization and prompt carry bounded glossary and immutable markers as data', () => {
  const body = normalizeTranslateBody({ segments: [{ id: 'p1-s0', text: 'Energy ⟦KEEP_0⟧ [12]' }], glossary: 'gate = 栅极',
    expectedModel: { provider: 'translation-test', model: 'fixture-v1', promptVersion: 'academic-zh-2' } });
  const prompt = buildTranslatePrompt(body);
  assert.match(prompt, /gate = 栅极/u);
  assert.match(prompt, /KEEP_数字/u);
  assert.match(prompt, /仅作为词语译法资料/u);
  assert.equal(body.expectedModel.model, 'fixture-v1');
});

test('server pins the expected model and returns model/prompt metadata with paragraph ids', async () => {
  let prompt;
  const send = harness(async function* (options) {
    prompt = options.messages[0].content[0].text;
    yield { type: 'text-delta', text: '{"translations":[{"id":"s0","zh":"能量 ⟦KEEP_0⟧"}]}' };
  });
  const call = send({ segments: [{ id: 'p2-s0', text: 'Energy ⟦KEEP_0⟧' }], glossary: 'energy = 能量',
    expectedModel: { provider: 'translation-test', model: 'fixture-v1', promptVersion: 'academic-zh-2' } });
  await call.finished;
  assert.equal(call.res.statusCode, 200);
  assert.deepEqual(call.res.body.translations, [{ id: 'p2-s0', zh: '能量 ⟦KEEP_0⟧' }]);
  assert.equal(call.res.body.model.model, 'fixture-v1');
  assert.equal(call.res.body.promptVersion, 'academic-zh-2');
  assert.match(prompt, /energy = 能量/u);
});

test('a changed model is rejected before running the LLM', async () => {
  let calls = 0;
  const send = harness(async function* () { calls += 1; });
  const call = send({ segments: [{ id: 'x', text: 'English source.' }], expectedModel: { provider: 'translation-test', model: 'old-model' } });
  await call.finished;
  assert.equal(call.res.statusCode, 409);
  assert.equal(call.res.body.error.code, 'MODEL_CHANGED');
  assert.equal(calls, 0);
});

test('closing the client request aborts the actual LLM stream without a retry', async () => {
  let started;
  const ready = new Promise(resolve => { started = resolve; });
  let signal;
  let calls = 0;
  const send = harness(async function* (options) {
    calls += 1; signal = options.signal; started();
    await new Promise((_, reject) => options.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
  });
  const call = send({ segments: [{ id: 'x', text: 'English source.' }] });
  await ready;
  call.res.destroyed = true;
  call.res.emit('close');
  await call.finished;
  assert.equal(signal.aborted, true);
  assert.equal(calls, 1);
  assert.equal(call.res.body, undefined);
});
