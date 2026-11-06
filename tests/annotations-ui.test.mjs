import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

/**
 * Server-render smoke test for the annotation React components.
 *
 * The reader's real bundle uses esbuild with the automatic JSX runtime and React
 * as an external, so this test builds the same component graph to CommonJS,
 * keeps React external (resolved from the plugin's node_modules) and renders a
 * few representative states. It catches broken imports, hook order problems and
 * accidental loss of the Chinese UI copy without needing a browser.
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nodeRequire = createRequire(path.join(root, 'package.json'));

const harnessSource = `
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AnnotationsPanel } from './web/src/annotations/AnnotationsPanel.jsx';
import { AnnotationComposer } from './web/src/annotations/AnnotationComposer.jsx';
import { PdfAnnotationLayer } from './web/src/annotations/PdfAnnotationLayer.jsx';
import { FlowAnnotationLayer } from './web/src/annotations/FlowAnnotationLayer.jsx';

const book = { title: '测试书', chapters: [{ id: 'ch1', title: '第一章' }, { id: 'ch2', title: '第二章' }] };
const annotations = [
  {
    id: 'a1', kind: 'flow', style: 'highlight', color: '#f5d76e', width: 9,
    note: '这里是重点', quote: '一段引用', chapterId: 'ch1',
    ranges: [{ blockId: 'b1', start: 0, end: 4, text: '一段引用' }],
    createdAt: 1, updatedAt: 2,
  },
  {
    id: 'a2', kind: 'pdf', style: 'note', color: '#f3a6c0', width: 9,
    note: '便签内容', quote: 'PDF 引用', page: 3,
    rects: [{ x: 0.1, y: 0.2, w: 0.3, h: 0.04 }], createdAt: 3,
  },
];
const handlers = { onClose() {}, onOpenAnnotation() {}, onJump() {}, onDelete() {}, onSave() {} };

export const panel = renderToStaticMarkup(React.createElement(AnnotationsPanel, {
  open: true, annotations, book, ...handlers,
}));
export const panelEmpty = renderToStaticMarkup(React.createElement(AnnotationsPanel, {
  open: true, annotations: [], book, ...handlers,
}));
export const panelClosed = renderToStaticMarkup(React.createElement(AnnotationsPanel, {
  open: false, annotations, book, ...handlers,
}));
export const composer = renderToStaticMarkup(React.createElement(AnnotationComposer, {
  open: true, mode: 'create',
  draft: { style: 'highlight', color: '#f5d76e', width: 9, quote: '一段选中文字' },
  ...handlers,
}));
export const composerEdit = renderToStaticMarkup(React.createElement(AnnotationComposer, {
  open: true, mode: 'edit',
  draft: { id: 'a1', style: 'underline', color: '#c2543f', width: 9, quote: '编辑中的引用', note: '备注' },
  ...handlers,
}));
export const composerClosed = renderToStaticMarkup(React.createElement(AnnotationComposer, {
  open: false, mode: 'create', draft: null, ...handlers,
}));
export const pdfLayer = renderToStaticMarkup(React.createElement(PdfAnnotationLayer, {
  annotations, onOpenAnnotation() {},
}));
export const pdfLayerFiltered = renderToStaticMarkup(React.createElement(PdfAnnotationLayer, {
  annotations, page: 9, onOpenAnnotation() {},
}));
export const flowLayer = renderToStaticMarkup(React.createElement(FlowAnnotationLayer, {
  containerRef: { current: null }, annotations, chapterId: 'ch1', layoutVersion: 0, onOpenAnnotation() {},
}));
`;

const build = await esbuild.build({
  stdin: {
    contents: harnessSource,
    resolveDir: root,
    sourcefile: 'annotation-ui-harness.jsx',
    loader: 'jsx',
  },
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  jsxImportSource: 'react',
  external: ['react', 'react/jsx-runtime', 'react-dom/server'],
  define: { 'process.env.NODE_ENV': '"development"' },
  logLevel: 'silent',
});
const compiled = build.outputFiles[0].text;
const harnessModule = { exports: {} };
// eslint-disable-next-line no-new-func
new Function('require', 'module', 'exports', '__filename', '__dirname', compiled)(
  nodeRequire,
  harnessModule,
  harnessModule.exports,
  path.join(root, 'tests', 'annotation-ui-harness.cjs'),
  path.join(root, 'tests'),
);
const rendered = harnessModule.exports;

test('annotations panel renders grouped notes, empty and closed states', () => {
  assert.ok(rendered.panel.includes('dshr-anno-panel'));
  assert.ok(rendered.panel.includes('标注笔记'));
  assert.ok(rendered.panel.includes('一段引用'));
  assert.ok(rendered.panel.includes('这里是重点'));
  assert.ok(rendered.panel.includes('第一章'));
  assert.ok(rendered.panel.includes('便签内容'));
  assert.ok(rendered.panel.includes('第 3 页'));
  assert.ok(rendered.panel.includes('定位'));
  assert.ok(rendered.panel.includes('删除'));
  assert.ok(rendered.panel.includes('dshr-anno-panel__filter'));
  assert.ok(rendered.panelEmpty.includes('还没有任何标注'));
  assert.ok(rendered.panelEmpty.includes('选中正文中的一段文字'));
  assert.ok(rendered.panelEmpty.includes('PDF 页面同样支持'));
  assert.equal(rendered.panelClosed, '');
});

test('composer renders style tabs, swatches, width picker and quote preview', () => {
  assert.ok(rendered.composer.includes('dshr-anno-composer'));
  for (const text of ['荧光笔', '下划线', '便签', '笔触粗细', '效果预览', '保存标注', '一段选中文字', '粗细']) {
    assert.ok(rendered.composer.includes(text), `composer should include ${text}`);
  }
  assert.ok(rendered.composer.includes('dshr-anno-swatch'));
  assert.ok(rendered.composer.includes('dshr-anno-width'));
  assert.ok(!rendered.composer.includes('删除'), 'create mode has no delete button');

  assert.ok(rendered.composerEdit.includes('编辑标注'));
  assert.ok(rendered.composerEdit.includes('删除'));
  assert.ok(rendered.composerEdit.includes('保存修改'));
  assert.ok(rendered.composerEdit.includes('dshr-anno-composer__preview is-underline'));
  assert.equal(rendered.composerClosed, '');
});

test('PDF overlay draws normalized bands and note buttons, and honors the page filter', () => {
  assert.ok(rendered.pdfLayer.includes('dshr-anno-pdf-layer'));
  assert.ok(rendered.pdfLayer.includes('dshr-anno-pdf-band'));
  assert.ok(rendered.pdfLayer.includes('dshr-anno-note-btn'));
  assert.ok(rendered.pdfLayer.includes('data-anno-id="a2"'));
  assert.match(rendered.pdfLayer, /class="dshr-anno-pdf-band" style="left:10%;top:[\d.]+%;width:30%;height:[\d.]+%/);
  assert.match(rendered.pdfLayer, /class="dshr-anno-note-btn" style="left:40\.4[\d]*%;top:20%/);
  assert.equal(rendered.pdfLayerFiltered.includes('dshr-anno-note-btn'), false);
});

test('flow overlay renders a pointer-transparent layer container', () => {
  assert.ok(rendered.flowLayer.includes('dshr-anno-layer'));
  assert.ok(rendered.flowLayer.includes('data-anno-layer="flow"'));
});
