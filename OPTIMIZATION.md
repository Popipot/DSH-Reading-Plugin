# DSH Reader PDF 优化流程

> **更新说明**：第 1–8 节保留先前优化记录，其中的“最终结果”是历史结论。PDF 修复见第 9、12 节；全格式横版分页修复见第 10 节；非 PDF 翻页动画方案 A 与本轮验证见第 13 节。

> 记录时间：2026-11-05  
> 插件版本：0.1.0  
> 运行环境：DeepSeek Harness / Electron 44（Renderer 兼容 Chromium）+ React 19  
> 目标文件：用户书库中的 `Th.Global.Edition.Thomas_L.Floyd` PDF（80,435,198 字节，1,029 页）

这份文档不是功能清单，而是这次 PDF 阅读性能优化的**实际流程、根因、验证数据和可复用检查表**。

---

## 1. 优化目标

原始症状按出现顺序：

1. 横版 PDF 的下一页按钮没有反应，或翻页后立刻回跳。
2. 第 3–4 页翻不过去，PDF 顶部工具栏的 `›` 与阅读器两侧箭头行为不一致。
3. 打开阅读插件时卡住；重装插件无效。
4. 打开书本本身卡很久。
5. 横版 PDF 一页翻完之后，下一页又要卡很久；希望回到最初连续阅读时的流畅度，并放开 PDF 缓存限制。

最终目标：

- 打开插件立即显示书架。
- 打开 1,029 页 PDF 的横版阅读不创建 1,000+ 页面节点。
- 连续翻页命中已渲染页面时保持几十毫秒级响应。
- 页码、PDF 工具栏和阅读器箭头始终一致。
- 超大字体的书籍冷启动不阻塞侧栏。

---

## 2. 优化总流程

```text
建立可复现样本
  └─ 从 DSH IndexedDB 提取用户真实 PDF
      └─ 固定 1029 页 / 80MB 基准
          └─ 用真实 Chromium/Playwright 驱动插件
              └─ 记录页面节点数、canvas 尺寸、翻页耗时、scrollTop、控制台错误
                  └─ 定位到「DOM 规模 / canvas 缓存 / 滚动锚点」三类根因
                      └─ 分层修复
                          ├─ 阅读器层：页面行、纸张边距、翻页状态
                          ├─ PDF 层：页面节点、canvas、缓存窗口、prefetch
                          ├─ 交互层：键盘、工具栏、动画、方向
                          └─ 启动层：上次阅读恢复、重型 PDF 冷启动
                              └─ 回归测试
                                  └─ 打包
```

### 每轮固定动作

1. **先复现再改代码**：用书库真实文件，不用小页数 PDF 代替。
2. **量化而不是目测**：
   - `.dshr-pdf-page` 节点数量
   - 每个 canvas 的 `width/height`
   - 翻页耗时（从点击到 active canvas 可用）
   - `scrollTop` 采样
   - 控制台 `pageerror`
3. **一次只改一类根因**，改完立即构建、再测。
4. **保留其它阅读模式**：横版流式分页、滚动模式、翻译、批注不能被性能修复破坏。
5. **测试通过后再打包**；`npm test` 必须 140/140。

---

## 3. 根因与修复

### 3.1 横版流式页面：半行与回跳

**现象**

- 页面底部出现半行字。
- 切换横版或翻章时滚动位置会被拉回。

**根因**

- 只按视口高度切页，没有按真实行盒切页。
- 页面重排（字号、行高、目录宽度、译文卡片）之后，旧页面起点失效。
- PDF 横版重新 fit 页面时，`PdfViewer` 的滚动锚点恢复晚一帧执行，覆盖了翻页后的 `scrollTop`。

**修复**

- `collectFlowLines()` 使用 `Range.getClientRects()` 读取真实行盒，`buildFlowPageStarts()` 将断点落在完整行。
- 页面上、下纸张边距和遮罩（`BOOK_PADDING_TOP = 48`，`BOOK_PADDING_BOTTOM = 56`）。
- `normalizeBookPage()` 在页面稳定后检查底部跨界行，整行隐藏并把该行顶部插入下一页起点。
- 横版 PDF 模式下禁用 `restoreScrollAnchor` 和延迟锚点恢复。
- 滚动、字号、宽度、译文变化后重新测量。

### 3.2 PDF 页码/工具栏不同步

**现象**

- 阅读器两侧箭头可以翻页。
- PDF 顶部工具栏的 `›` 翻页后页码仍停在上一页，下一次操作看起来“翻不过去”。

**根因**

- 工具栏 `jumpToPage` 在连续滚动模式使用了 `-10px` 的顶部留白。
- 横版页码从页面元素精确行首计算，10px 偏差被算回上一页。
- 后面的强制 pin 逻辑会与工具栏翻页抢 `scrollTop`。

**修复**

- 横版 PDF 使用单页状态导航，不再依赖 10px 偏移。
- 页码索引容差从 8px 提高到 24px。
- 移除会与工具栏抢滚动位置的强制 pin。
- 工具栏 `‹ ›`、两侧箭头、键盘统一走同一套当前页状态。

### 3.3 打开插件卡住：自动恢复重型 PDF

**现象**

- 进入插件立刻卡住，书架都不出来。
- 重装插件、重启 DSH 仍复现。

**根因**

- 自动恢复上次阅读时，直接把 80MB PDF 从 IndexedDB 读入并创建全部页面节点。
- 冷启动侧栏在主线程上承担 PDF 解析和 1,029 个页面节点的创建。

**修复**

- 冷启动时如果上次文档超过 24MB 或超过 300 页，不自动打开。
- 先绘制书架，显示「继续上次阅读」卡片；用户点击后才加载。
- 同一 DSH 会话内（切换窗口/面板 remount）仍自动恢复，不牺牲原先体验。
- 打开超过 24MB 的 PDF 显示「正在打开大型 PDF…」提示。
- 卸载并重新安装 `desktop` profile 插件，确认不是安装缓存问题。

### 3.4 打开书本卡住：1029 个页面节点和 canvas

**现象**

- 书架正常，点击书后长时间无响应。
- 打开 80MB PDF 后内存和 CPU 明显升高。

**根因**

- 连续 PDF 阅读器为 1,029 页各创建一个 `.dshr-pdf-page`。
- 每页默认 `<canvas>` 的 backing store 是 300×150，未渲染页面也占内存。
- `record.blob` 和传给 PDF.js 的 ArrayBuffer 同时留在当前阅读状态，重复占用约 80MB。

**修复**

- 横版 PDF 只挂载一个小窗口，不再创建 1,029 个页面节点。
- 未渲染 canvas 初始为 `1×1`，真正渲染时由 PDF.js 扩展。
- 打开 PDF 后从 `current.record` 移除 `blob`，只保留 ArrayBuffer。
- 冷启动重文档使用「继续上次阅读」卡片。

### 3.5 翻一页后又卡很久：canvas 被卸载/误判已渲染

**现象**

- 第一页打开后还算快。
- 翻到下一页又等待很久，甚至空白/转圈。
- 回退或连续翻页时越来越慢。

**根因**

1. 最初修复“打开卡”时只挂载当前页，翻页会卸载上一页组件，已渲染 canvas 丢失。
2. 新页面挂载后，`pageStates` 里仍是 `rendered = true`，`scheduleRender()` 误判为已渲染而直接返回，新 canvas 永远没有绘制。
3. 隐藏的预加载页面被 IntersectionObserver 判定为不可见，立即 `evictPage()`，缓存被清空。
4. `PdfPageRow` 的 ref 回调是内联函数，每次父组件渲染都会 detach/attach canvas，再次重置渲染状态。

**修复**

- 横版 PDF 挂载窗口：当前页 + 前后各 2 页（最多 5 个页面节点）。
- 横版模式下**禁用隐藏页驱逐**，保留预渲染 canvas 和文本层作为缓存。
- `PdfPageRow` 使用稳定的 `pageRef` / `frameRef`（`useCallback`），避免重渲染时反复挂载。
- 新 canvas 挂载时显式重置该页的 `rendered` / `textLayerReady` / `lastRenderScale`，然后重新排队渲染。
- 当前页优先渲染；下一页 30ms 后预渲染；其它邻页 1 秒后预热。
- 最大并发渲染从 2 提高到 2（保持稳定），队列按当前页优先。

### 3.6 可选：滚动模式

滚动模式仍然保留连续页面的完整布局，这是滚动阅读本身需要的。大 PDF 的横版模式使用缓存窗口；滚动模式若也遇到卡顿，可沿用同一窗口化思路扩展，但当前优化范围以横版为主。

---

## 4. 最终实现结构

### 横版 PDF

```text
App
 └─ PdfViewer paged
     ├─ 当前页 + 前后各 2 页的可见窗口
     ├─ 非当前页 display:none（保留 canvas 缓存）
     ├─ 当前页优先渲染
     ├─ +1 页 30ms 后渲染
     └─ ±2 页 1s 后预热
 └─ PagedReader pdfMode
     ├─ 不创建 PDF 页面行
     ├─ 监听 dshr-pdf-page-state
     └─ 左右箭头/键盘发送 dshr-pdf-page-turn
```

### 关键参数

| 参数 | 值 |
|---|---|
| 横版缓存窗口 | 当前页 ±2，最多 5 页 |
| 当前页渲染 | 立即 |
| 下一页预热 | 30ms |
| 更远邻页预热 | 1s + 120ms/页 |
| 最大并发渲染 | 2 |
| 未渲染 canvas | 1×1 |
| 重型文档冷启动阈值 | >24MB 或 >300 页 |

### 关键文件

| 文件 | 作用 |
|---|---|
| `web/src/app.jsx` | 插件壳、打开/关闭书、上次阅读、重型 PDF 卡片、键盘 |
| `web/src/components/PagedReader.jsx` | 横版翻页控制器、页码状态、PDF 外部页面状态 |
| `web/src/pdf/PdfViewer.jsx` | PDF.js、页面窗口、canvas 缓存、prefetch、工具栏 |
| `web/src/pdf/styles.js` | PDF 页面布局、纸张边距、状态面板 |
| `web/src/components/LibraryView.jsx` | 书架和「继续上次阅读」卡片 |
| `web/src/styles.js` | 顶部栏、动画选择器、书架卡片样式 |
| `web/src/storage.js` | 阅读模式/进度持久化 |
| `web/src/appearance/*` | 外观设置 |
| `tests/*.test.mjs` | 140 项单元/集成测试 |
| `scripts/build-client.mjs` | 客户端 bundle |
| `scripts/build-pdf.mjs` | PDF.js 懒加载资源 |

---

## 5. 验证基准

### 样本

- 来源：用户 DSH 书库 IndexedDB 中的真实文件
- 大小：80,435,198 字节（约 76.7 MB）
- 页数：1,029
- 格式：PDF 1.6

### 验证工具

- Playwright Core + Chrome
- 视口：1600×1000，深色主题
- 步骤：导入 → 切到横版 → 读取页面节点/canvas/页码 → 连续点击下一页 → 用顶部工具栏翻页 → 记录耗时和 scrollTop

### 关键结果

| 指标 | 结果 |
|---|---|
| 横版页面节点 | 5 页窗口（不是 1,029） |
| 打开重型 PDF | 书架先出现，再点「继续上次阅读」 |
| 冷启动书架首屏 | 约 0.4s |
| 成功打开后的当前页 | 1 页 canvas，页码正常 |
| 连续翻页（缓存命中） | 40–60ms/页 |
| 页码状态 | `1 / 1029` 等随页面更新 |
| 控制台错误 | 0 |
| 单元/集成测试 | 140/140 |

> 具体毫秒数会随机器负载变化；优化目标是避免每页重新栅格化和 1,029 个节点的创建，而不是追求固定绝对时间。

---

## 6. 复现与回归检查表

### 构建

```powershell
cd dsh-reader
npm install
npm run build
npm test
```

### 安装到 DSH

```powershell
$env:DSH_DESKTOP_NODE_EXECUTABLE='D:\Software\deepseek harness\DeepSeek Harness.exe'
dsh plugin --profile desktop add 'link:C:\Users\WZY\Documents\deepseek-harness\default-workspace\dsh-reader'
```

重启 DSH（必须完全退出进程，而不是只关闭面板）后：

1. 打开阅读插件，确认书架在 1 秒内出现。
2. 点击 1,029 页 PDF 的「继续上次阅读」卡片。
3. 切到「横版」，确认只存在少量 `.dshr-pdf-page`。
4. 连续点击下一页 10 次，确认页码连续、无回跳。
5. 点击 PDF 顶部工具栏 `‹ ›`，确认页码同步。
6. 用 `PageDown` / `PageUp` / 方向键重复。
7. 切回滚动模式，确认连续页面仍可阅读。
8. 运行 `npm test`，必须 140/140。

### 性能排查命令（Playwright 控制台）

```js
// 页面节点与 canvas 缓存
[...document.querySelectorAll('.dshr-pdf-page')].map((row) => ({
  page: row.getAttribute('data-page'),
  active: row.getAttribute('data-active'),
  rendered: row.querySelector('.dshr-pdf-frame')?.getAttribute('data-rendered'),
  canvas: (() => {
    const c = row.querySelector('canvas.dshr-pdf-canvas');
    return c ? [c.width, c.height] : null;
  })(),
}))
```

如果出现：

- `canvas: [1,1]`：该页尚未渲染，检查是否在缓存窗口/prefetch 队列中。
- 页面节点接近页数：说明仍在走连续布局，检查 `paged` 分支。
- 翻页后 active 页 canvas 仍为 1×1：检查渲染状态重置和 `scheduleRender()` 队列。

---

## 7. 已知边界

1. **第一页首次打开仍需 PDF.js 解析 80MB 文件**，无法做到与打开小文本文件完全相同的首帧时间；后续页面应命中缓存。
2. **横版缓存是有限窗口**，不是把 1,029 页全部栅格化在内存里；这是为了避免再次出现打开卡死。窗口之外的页面会按需重新渲染。
3. **PDF 横版当前是直接页面切换**，通用流式书的横向滑页/覆盖/3D 动画仍保留；PDF 翻页优先保证正确性和速度。
4. **扫描版 PDF** 的页面渲染开销取决于页面图像大小；大页图仍受 PDF.js 栅格化限制。
5. **滚动模式**为连续阅读保留完整页面列表；如果后续需要，可对滚动模式再做窗口化。

---

## 8. 提交/打包约定

- 修改 `web/src` 后必须运行 `npm run build:client`。
- 修改 PDF 资源/打包脚本后必须运行完整 `npm run build`。
- 提交前必须运行 `npm test`（当前基线 140/140）。
- 发布源包时排除 `node_modules`，保留 `client/`、`dist/`、`docs/`、`tests/`、`web/`、`lib/`、`scripts/` 和所有根配置/说明文件。
- 任何涉及 PDF 加载/缓存的改动，都必须用真实大 PDF 做一次「打开 + 连续翻页 + 工具栏翻页 + 键盘翻页」回归。


---

## 9. 基础功能修复复查（2026-11-05）

本轮优先处理打开、浏览、翻页、资源释放；不扩展新的阅读功能。前文的性能数据是历史记录，不能作为当前宿主版本已修复的依据。

### 9.1 代码中确认的缺陷

| 问题 | 原因 | 当前处理 |
|---|---|---|
| 横版翻页后回跳 | PdfViewer 的滚动监听和初始化 RAF 仍执行 updateCurrentPageFromScroll；隐藏的缓存页 rect 为零，页面偏移不再单调，二分搜索能反向覆盖显式页码 | 横版完全禁止滚动位置推断页码；PagedReader 也不再为 PDF 对齐滚动页；关闭浏览器滚动锚定 |
| 恢复位置与翻页互相干扰 | App 将不断变化的 progress.page 作为 initialPage；恢复定时器还依赖此值，可能在父组件更新时被取消 | initialPage 固定为打开时保存的进度；每份文档只执行一次初始定位；切换模式显式保持当前页 |
| 同一页面重复渲染 | observer、prefetch、refresh 都可调度同一页；队列只检查是否已排队，没有检查正在渲染 | 正在执行的页面不重复入队，当前页排在队首；缩放在任务结束后补画；旧文档任务不能修改新文档的并发计数 |
| 越读越占资源 | 页面离开横版窗口后只删除 DOM ref，没有取消任务、清空 canvas、清理文本和 PDFPageProxy | 卸载时释放该页资源并取消任务；快速离开再返回时重新绘制新画布 |
| 滚动模式打开大文件负担大 | 仍一次挂载每一页的 canvas、文本层和批注组件 | 当前页前后各 3 页最多挂载 7 个完整页面；远页保留轻量占位以维持连续滚动和跳页。占位节点数仍随总页数增长，这不是完全消除 O(N) 布局 |
| 打开大 PDF 时额外复制字节 | App 执行 Blob.arrayBuffer，PdfViewer 再同步复制完整 Uint8Array | App 保留 Blob，PdfViewer 使用 Blob URL 异步读取并在关闭/失败时撤销；兼容原 Uint8Array 接口且不转移调用者的 buffer |
| 后台预热挤占阅读交互 | 隐藏邻页同时创建文本层，绘制块连续执行 | 邻页预热画布；到可见时才创建文本层，并复用已绘制画布；绘制块之间让出事件循环 |
| 每次保存进度附带书库扫描 | 700ms 合并保存后仍 refreshBooks，逐项读取整个书库 | 持久化进度后只更新内存中的相应书架项 |
| 触控板一次手势连翻多页 | PDF 翻页不经过动画 busy 锁，一串 wheel 事件均触发跳页 | 按滚轮事件间隔合并惯性事件，按钮和键盘仍可快速连续翻页 |

### 9.2 宿主更新相关的防护（尚未确认是此次 DSH 卡顿的直接根因）

1. PDF.js 可能在 Worker 创建失败后回退到主线程。现在先检查 PDFWorker 的实际 port 为原生 Worker，再交付文件；否则显示可重试的错误，避免大型 PDF 静默在 DSH 主线程解析。关闭时等待 PDF.js transport 清理后再销毁 Worker，避免未处理的异步拒绝。
2. 引擎与 Worker 原先均缓存一小时。现在可执行资源使用 no-cache + ETag 重新校验，并为本轮引擎/Worker URL 增加共同版本标记，避免升级后混用缓存。将来升级 pdfjs-dist 时应同步更新 PDF_ASSET_VERSION。
3. 本轮未连接正在运行的 DSH Electron 实例，也未读取其控制台、CSP 或真实书库。因此不能断言 DSH 更新具体改变了哪项行为。

### 9.3 验证结果

- npm test：148/148，通过原有 140 项和新增 8 项行为/资源缓存测试。
- npm run build：客户端、PDF 懒加载引擎、Worker、CMaps、字体和其它资源构建通过；client/ 与 dist/ 已重新生成。
- node scripts/check-pdf-browser.mjs：本机 Chrome 无头模式实际执行 PDF.js、原生 Worker、canvas、文本层与 React 组件，全部通过。
- 浏览器场景：从第 500 页打开；工具栏与两侧箭头交替翻 12 页；延迟 scroll 后页码保持；PageDown；一次 10 个 wheel 事件只翻一页；跳到第 1000 页；改变容器尺寸与缩放；可见页文本提取仅回调一次；切换滚动后跳到第 400 页；返回横版；关闭并重新打开；无未处理的浏览器错误。
- 页面画布数量：横版最多 5 个，滚动最多 7 个；PDF.js 内部字体测量 canvas 不计入阅读页面画布。

本轮默认样本为 **80,290,377 字节 / 1029 页的合成 PDF**，文本页加未引用的大数据流，用于测试传输体积、页面数量和导航竞态，**不是原先 Thomas/Floyd 教材**。最终一次运行在 Blob 已取得后，至第 500 页画布可用约 172ms，12 次翻页的可用画布检查约 20–42ms。这些数字包含 20ms 轮询粒度，不等于精确的渲染耗时，也不包含 IndexedDB 取书时间。

**剩余验证边界**：复杂字体、扫描图、混合页面尺寸、GPU 和宿主安全策略仍需在当前 DSH 中使用真实文件复查。合成样本通过不能证明所有真实 PDF 都达到上述耗时。后台线程不可用时会明确停止加载，需要修复宿主资源/权限后才能继续阅读。

### 9.4 可重复检查

先运行 npm run build，再运行 npm test 和 npm run test:pdf-browser。浏览器检查只连接本地临时 HTTP 服务、使用隔离的 Chrome 配置，关闭后清理配置；JSON 与截图保存在 output/playwright/pdf-regression.json 和 output/playwright/pdf-regression.png。

也可运行 npm run test:pdf-browser -- "真实文件.pdf" 替换默认样本；当前固定导航场景要求至少 1029 页，样本不足时应调整脚本中的页码。

在 DSH 中加载本轮生成的客户端后，使用真实教材检查打开、前后连续翻页、工具栏、键盘、模式切换和关闭重开。如仍卡顿，应记录 Worker 加载状态、控制台错误、首次卡住的页码与该页内容，而不是继续叠加滚动位置补偿。

已只读核对本机 desktop profile：dsh-reader 依赖通过 link 指向本项目，且已加入 bundles，因此本轮生成的 client/ 与 dist/ 位于其既有安装来源；重新加载插件或重启 DSH 后使用新构建，无需重复安装。


---

## 10. EPUB 与全格式横版分页机制修复（2026-11-05）

### 10.1 已复现的问题

在隔离的真实 Chrome 中，将含 55 行长表格的 EPUB 交给实际 parseBook / FlowReader / PagedReader 渲染，旧实现第 4 次翻页出现 **scrollTop 1464 → 1464**，无法继续。修复前报告与截图保存在 output/playwright/flow-before.json 和 flow-before.png。

这不是 EPUB 解码器的个别错误。EPUB、MOBI、TXT、Markdown 和 HTML 最终都进入 FlowReader，共用旧的 PagedReader，因此此前只修复 PDF 无法解决此问题。

### 10.2 根因

1. **多处代码争夺滚动位置**：翻页、ResizeObserver 对齐、normalizeBookPage、保存进度恢复和批注延迟定位均可写 scrollTop。页码还反过来从这个不断被修改的值推断。
2. **把容器当成一行**：文本行测量中同时加入整个表格、pre、译文卡片的矩形。这些矩形跨越多页；normalizeBookPage 的 crossingTop 分支会将已经翻到内部的位置拉回容器顶部。
3. **边翻页边更改断点**：normalizeBookPage 每次都可能插入新的页面起点，并根据即时滚动位置再次修正；动画期间的 getClientRects 还可能包含视觉变换，而不是稳定的排版坐标。
4. **正文 DOM 在普通重渲染中被替换**：BlockContent 不做记忆化，每次生成新的 dangerouslySetInnerHTML 属性对象，可能重建未变化的正文节点，破坏文本位置锚点并触发额外重排。
5. **延迟恢复和 CSS 平滑滚动**：章节恢复可能在分页控件监听挂载前执行；平滑滚动尚未到达目标，首次分页测量就读取旧位置。父组件回调变化、旧章节动画和批注定时器也可能干扰后来接受的导航。

### 10.3 当前机制

- 新增 components/flow-pagination.js：可重复的行分页算法和显式页游标。页码只由接受的导航或有内容锚点的布局替换改变，不由 scroll 事件反推。
- 移除翻页后的 normalizeBookPage 和滚动纠偏断点插入。上下遮罩只决定绘制范围，不写滚动位置，也不修改分页表。
- 每个文本节点只测量一次；表格、长译文、代码按真实文字行分页；超高图片等对象分段前进，不能回到同一个对象顶部形成循环。
- 末页以独立尾部占位保证目标可达，不再为了满足最大 scrollTop 而删掉有效末页。占位不参与文本测量。
- 动画仅负责呈现。繁忙期间不测量受变换的文本矩形；快速点击排队；动画取消、抛错或长期不完成均有清理路径，不会永久锁住下一页。
- 异步译文、图片、字体、宽度变化由 ResizeObserver / MutationObserver / load / fonts 触发重新分页，并保留当前字符位置。原节点替换时，可从所在正文块内的文本偏移找回字符。
- BlockContent 使用 React.memo，进度与外观设置变化不重建相同的正文 DOM；CSS 仍正常更新字体和排版。
- FlowReader 的初始恢复、批注跳转通过 dshr-flow-navigate 交给当前控制器；后来的显式导航使过期定位失效。分页控件尚未挂载时，初始位置也立即写入，避免 CSS smooth scrolling 竞态。
- 控件和事件限定在所属 reader 实例；翻页按钮不再向整个 document 广播。
- PDF 继续由 PdfViewer 的原生页码状态控制，PagedReader 只转发导航和显示外部状态；不引入 PDF 的 DOM 滚动页码推断。

### 10.4 回归范围

- npm test：**158/158**；新增分页覆盖性质、长对象、字符节点替换、重复 scroll/resize、快速连点、动画不结束、多阅读器及过期导航隔离测试。
- npm run build：生成更新的 client/ 和 dist/。
- npm run test:flow-browser：实际浏览器、格式解析器和 React 阅读组件。EPUB/HTML/Markdown/TXT 使用可重复的生成文件；MOBI 使用仓库自带 Project Gutenberg 样本，选取最长章节前 80 个块控制回归规模。
- 整个测试章节遍历结果：EPUB 52 页、HTML 52 页、Markdown 50 页、TXT 46 页、MOBI 测试节选 20 页，全部走到章末；覆盖三种动画的前后翻页。
- 动态场景：快速连续点击、原生 scroll 干扰、动画中插入长译文、图片延迟变高、字体/行高/宽度变化且锚定字符仍在纸张内、取消动画后继续翻页、滚动与横版切换、恢复保存进度、父组件重渲染、过期批注定位、切章时取消旧动画。
- npm run test:pdf-browser：此前 PDF 工具栏、两侧箭头、键盘、滚轮、跳页、缩放、文本层、模式切换与关闭重开回归继续通过。

浏览器脚本为缩短多格式遍历耗时，对 WAAPI 动画时长乘以 0.08，仍运行真实的动画与完成/取消信号；不是完整真实书库或所有排版组合的穷举，也不是 DSH Electron 宿主实测。结果分别保存在 output/playwright/flow-regression.json 与 pdf-regression.json。

### 10.5 后续修改约束

横版导航只能由每个阅读器的页码状态拥有滚动写权限。新格式如果归一化为 FlowReader 内容，自动使用同一分页机制；不要再增加基于 scrollTop 的强制 pin、延时回跳补偿或翻页后修改断点的分支。新增恢复/定位入口应走控制器事件并有失效机制。发布前同时执行单元测试、流式浏览器检查和 PDF 浏览器检查。


---

## 11. PDF 固定译文侧栏（方案 A，2026-11-06）

用户确认采用“原 PDF + 固定译文侧栏 + 段落联动 + 按需翻译”。本轮已实现并重新构建客户端与 PDF 资源，同时更新 Host 翻译接口。

### 11.1 阅读交互

开启顶部“实时翻译”后，译文侧栏显示当前页的段落与进度。当前可见段落优先，先展示已完成段落，不再等整页所有分块结束；后续请求小批处理，最多并发 2 个。可暂停/继续、重试失败段落，或手动重译某一已完成段落；重译期间保留旧结果。

悬停原文段落可定位侧栏对应译文，悬停译文可关联高亮原文，点击“定位原文”在原文滚动区定位。定位只操作所属滚动容器，不使用可能连带滚动宿主的 scrollIntoView。译文区的鼠标滚轮、方向键和 PageDown 不会触发原文翻页。划词翻译继续可用，切换选区/文档时取消并隔离旧划词请求。

原来的 PDF 页下译文卡片已移除。译文更新、字号与术语表变化不向原 PDF 页面插入内容；原文分页、画布与批注坐标继续由 PdfViewer 独立控制。分页箭头和页码状态条根据原文 viewport 定位，避开译文侧栏。宽度小于 700px 的阅读容器采用上下排列。

### 11.2 文本与翻译质量措施

- 从 PDF.js text items 提取段落，保留原始 item 索引与稳定段落 id，再关联原生 TextLayer span，不添加阻挡文本选择的透明点击覆盖层。
- 对有足够左右正文证据的双栏布局保守重排阅读顺序；跨栏标题按水平区域分隔。复杂多栏、旋转、表格等情况仍可能受原始 PDF 文本顺序影响。
- 请求带同页相邻段落上下文，在已取得的情况下也使用前/后页临近段落；不将整本书塞入每次请求。
- 保护可识别的公式片段、LaTeX、数字引用及网址/DOI占位符。模型遗漏占位符时提示该段失败，不静默接受损坏结果。此措施不等于完整数学公式识别或 OCR。
- 侧栏提供每份文档独立的手动术语表，格式为“原词 = 中文译法”；点击“应用并更新译文”后切换缓存命名空间。没有额外调用模型自动提取术语。
- 中文占比较高的段落直接保留原文，不发送翻译请求。

### 11.3 调度、取消和缓存

新增 translation-controller.js 与 usePdfTranslation.js，翻译调度不依赖 canvas 渲染任务。翻页取消无关任务，未发送的旧页段落不继续排队；迟到结果需通过文档/设置 epoch、任务编号和 AbortSignal 检查。暂停、隐藏侧栏、切书、术语表变化或模型变化都能隔离过期任务。单任务有 120 秒客户端超时，防止不响应取消的传输长期占用队列。

可选择预译下一页：在当前页内容可读后，后台提取下一页文本而不创建额外页面 DOM；当前页任务结束后再低优先级翻译。预译完成后翻到下一页复用结果。关闭预译可取消已经发出的预译请求。

缓存保存在本机 IndexedDB 的 pdfTranslations 表。SHA-256 键覆盖文档 id、原文、目标语言、模型/provider、术语表，以及客户端和 Host 提示词版本。缓存读写失败只降级为当前会话阅读，不能阻塞 PDF。书库数据库从 v2 升级至 v3，只新增表；旧书籍、批注、背景等数据保留。删除文档或清空书库时清理相应译文与文档偏好，并在写缓存时再次确认文档尚未被删除。

Host 的状态接口返回模型与提示词版本；翻译请求可携带期望模型，失配时返回 MODEL_CHANGED，客户端刷新服务后使用新命名空间。请求连接关闭时将取消信号传给实际 llm.stream。已消耗的模型计算不能由本地取消撤销，最终取消时机取决于模型适配器。

### 11.4 验证

- npm test：174 项通过；新增调度、缓存身份、可见段落优先、增量结果、缺失段落、重试/重译、迟到结果、暂停恢复、预译、超时、中文跳过、双栏/跨栏标题、占位符与 Host 取消/模型校验测试。
- npm run build：客户端、PDF 懒加载引擎及资源构建通过。
- npm run test:translation-browser：实际 PDF.js、原生 Worker、IndexedDB、React 组件及 ReaderPage 书架入口；使用 24 页、每页 8 段的可重复 PDF 和确定性本地模拟翻译服务，不调用真实模型。
- 浏览器覆盖：v2 进度保留迁移；逐段可读；缺失段单独重试；原文页高不变；公式/引用标记还原；双向高亮；侧栏输入不翻原文；字号不重复翻译；文档术语表；关闭重开 8 段命中缓存；暂停实际中止请求；切书隔离；模型切换；预译命中；滚动/横版切换；540px 阅读容器；翻页控件避让；顶栏开关关闭重开；更换划词选区不被旧结果覆盖；删除/清空缓存。
- 同时执行普通 PDF 与五种流式格式的横版浏览器回归，以避免重现此前翻页回滚。

结果与截图保存在 output/playwright/translation-regression.json 和 translation-regression.png。界面截图内的译文是模拟服务生成的测试文本，不代表真实翻译质量。当前没有对用户真实文献或当前 DSH Electron 实例做模型质量评测。

### 11.5 使用与边界

本轮更新包含 Host 接口与本地缓存 schema，**请完整退出并重启 DSH** 后使用；desktop profile 仍链接本项目，无需重复安装。

打开 PDF 后开启“实时翻译”。侧栏字号、显示原文、段落联动、预译与术语表按文档保存；暂停仅控制本次阅读的任务。关闭侧栏会停止新任务，重新开启时复用已有译文。

方案 A 不包含扫描件 OCR、自动术语提取、跨页段落完整合并或保留排版的译文 PDF 导出。原 PDF 的公式、图表与排版仍是核对依据；实际译文质量取决于所选 DSH 默认模型。后续改动必须维持翻译调度与阅读导航分离，并通过三组浏览器回归。


## 12. PDF 性能方案 A：双 Worker、随机读取与分级缓存（2026-11-06）

本节是当前实现；前文历史参数与跑分不能代替本节的验证。目标是把读取、解析、绘制与界面交互分开，并在真实宿主检查基础阅读。本次没有更换为 PDFium、没有加入外部文档上传或 OCR。

### 12.1 本轮确认的缺口

- PDF.js 6.5.438 已包含独立 Renderer Worker，但旧构建未发布 pdf.renderer.mjs，未配置 rendererSrc，而且 page.render 传 canvasContext 会禁用该路径。原先的解析 Worker 不等于后台绘制。
- 封面路径仍调用整文件 blob.arrayBuffer，且已经开始的队列在打开阅读后继续运行；还使用另一份未带版本号的引擎 URL。
- 连续模式虽然限制了昂贵画布，却保留每页一个占位 DOM，并逐个测量位置。卸载后的页面图像也没有独立缓存。
- 合成 80 MB 文本文件主要验证传输和导航，不能代表扫描图、复杂矢量或字体绘制。

### 12.2 实现

- 新增 web/src/pdf/engine.js，正文和封面共用版本化懒加载入口（6.5.438-reader3）。构建同时发布解析与绘制 Worker；打开前仍验证解析端口是真 Worker。
- 本地 Blob 通过 PDFDataRangeTransport 和 Blob.slice 读取；初始/常规块 256 KiB，最多两项读取并行，关闭自动全文件预取。每个范围独立拥有字节缓冲，关闭后不投递迟到读取。异常销毁对应 session，不让错误读取永久悬挂。PDF 的交叉引用/对象结构仍可能要求读取大部分或全部内容。
- page.render 改为传 canvas，在临时画布完成后替换原画面。首次未缓存页面先给预览，高 DPI 再补清晰画面；缩放时保留旧图像。实际 RenderTask.isWorkerRendering 记录到根节点 data 属性，而非只检查配置。
- 当前页优先；取消过时非可见绘制，限制预读并发。运行中的邻页预览成为当前页时，完成后必须补清晰化。翻译下一页取文等待正文已显示且绘制空闲。书架封面延迟启动，离开书架后 AbortController 取消任务，释放两类 Worker 和画布。
- 新增 PageBitmapCache：独立于 DOM 的 ImageBitmap LRU，按宽×高×4估算字节，预算 48 MiB；淘汰/替换/关闭文档明确 close。缓存失败不阻断原文和文本选择。此预算不包含可见画布、临时画布、PDF 解析器和解码图片等其它内存。
- 单个清晰画布仍限制 10M 像素/8192 边长；邻页预览另限制 2M 像素。修复超大页面下最低相对清晰度反过来覆盖硬限制的问题。
- 新增 PageLayoutIndex：已知页面高度差的前缀索引，未知页面采用估算，前后各一个间隔块。标准视口只挂附近 7 页；缩小时根据视口扩大，最多 33 页；横版仍为当前±2。跳页无需遍历所有页 DOM，也不沿间隔块动画经过中间页。

### 12.3 实际宿主发现并修复的锚点问题

在 DSH 的 Floyd 教材上检查“横版→滚动→适宽”时，发现延后两帧恢复锚点可被中间尺寸更新/滚动事件打断，视口停在空白间隔区。新增浏览器用例后，旧实现稳定失败于 active page disappeared into a virtual spacer。修复为在同次 useLayoutEffect 布局提交中恢复锚点，整页按钮也参与锚点事务；用户后续导航可取消待恢复位置。修复后的普通 PDF 浏览器回归通过该场景。最终版本也在实际 DSH 重新检查适宽/整页及原第 27 页。

### 12.4 验证结果与范围

- npm run build 通过；185 项 Node 测试通过。新增范围读取、取消/失败、LRU 释放、千页混合尺寸索引、高 DPI 预读页晋升、缓存分配失败可选字、超大页面像素限制测试。
- test:pdf-browser 通过：80,290,377 字节/1029 页传输样本，从取得 Blob 后到第 500 页可读约 175ms；打开只读取 336,457 字节、2 次读取；实际 renderer=worker。连续 DOM 为附近 7 页加最多两个间隔块。含横版、键盘、滚轮、跳页、适宽/整页、缩放、模式切换、关闭重开。
- test:pdf-performance -- --hidpi 通过：6,969,888 字节/18 页可重复复杂样本，包含每页 24,000 条透明矢量路径或 2048×3072 压缩扫描图，以及横竖混合尺寸。在 DPR=2 下，从 IndexedDB 取书开始到首个可读画面约 252ms；未预热翻页约 38–145ms；卸载后的最近页快照复用约 27ms；两页预热后 20 次切换 P95=17ms；缓存估算 48,003,888 字节，未超过 48 MiB。23 次后台绘制、0 次主线程绘制；关闭正文/取消封面后 Worker 为 0。
- 使用本地现有真实 39 页、2,403,079 字节 PDF（deepinfer-deepseek-recipe-report.pdf）通过同一性能流程：首次可读约 189ms，未预热翻页 37–82ms，快照复用 29ms，20 次预热切换 P95=19ms；18 次后台绘制、0 次主线程绘制。该文件实际读取了全部字节，说明按需读取不保证所有 PDF 都只读小部分。
- 两类性能流程均未记录到超过 50ms 的主线程 longtask；报告的 longestTaskMs=0 表示未观测到长任务，不表示所有 JS 工作耗时为零。跳页测量包含 15ms 输入等待和 10ms 就绪轮询；数据是本机样本结果，不是 Adobe 同机对照或任意 PDF 的性能承诺。
- test:translation-browser 通过，继续覆盖实际 ReaderPage 入口、原文选区、双向段落高亮、译文缓存、暂停/切书/模型隔离；使用本地模拟翻译服务，没有调用真实模型。
- test:flow-browser 通过，覆盖 EPUB/HTML/MD/TXT/MOBI 全章和各动画，确认全格式横版翻页未退步。

### 12.5 实际 DSH 教材检查

通过现有安装启动 DSH，使用原书架中的 Floyd 教材（80,435,198 字节/1029 页），自动翻译保持原来的关闭状态。实际检查第 27→28→29→30 页、跳到第 500 页（示波器图表）和第 1000 页（附录表格）、横版/滚动与适宽/整页。

在 DevTools Elements 中只读核对实际根节点：data-pdf-renderer=worker，data-pdf-worker-renders=16，data-pdf-main-renders=0；此时累计读取 4,413,438 字节/12 次，快照估算 14,742,208 字节。该记录发生在第 500 页及附近页处理后，并非首次可读时的读取量。宿主控制台捕获到本地 ingest WebSocket 连接错误，未捕获到 PDF 绘制/Worker 错误；没有将整份控制台宣称为无错。

宿主操作验证不用于精确首屏/P95 跑分，也没有做与 Adobe 的同机自动对照。测试后恢复第 27 页、滚动模式和适宽，并返回书架。

### 12.6 复核与运行

原始 JSON/截图位于 output/playwright：pdf-regression、pdf-complex-performance-hidpi、pdf-real-performance、translation-regression、flow-regression。普通性能脚本也可运行 npm run test:pdf-performance；带真实路径时不再要求 1029 页。

本轮已重新构建 client/client.js 与 dist/reader-assets（包含新增 pdf.renderer.mjs）。旧 DSH 实例如仍持有旧模块，请完整退出重启后使用，desktop profile 的项目链接无需重装。

设计参考：[PDF.js API](https://mozilla.github.io/pdf.js/api/draft/api.js.html)、[Mozilla FAQ](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions)、[Chromium PDFium 调度源码](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/pdf/pdfium/pdfium_engine.cc)、[Nutrient 性能指南](https://www.nutrient.io/guides/web/best-practices/performance/)。不把其它引擎的实现细节或产品跑分视作本插件已拥有的能力。


## 13. 非 PDF 横版动画方案 A（2026-11-07）

### 13.1 根因与范围

旧实现对同一份整章 .dshr-content__inner 先做 180 ms 淡出到 0.03，再切换 scrollTop，接着做 260 ms 淡入。因此两段动画之间正文几乎消失。cover 只把同一平移距离乘以 0.63，没有静止底页；flip 则把整章绕默认中心旋转 ±60 度，没有实际页角折叠。

本轮替换 EPUB、MOBI/KF8、TXT、Markdown、HTML 共用的流式动画展示层。PDF 继续在 PagedReader 的独立分支分发 dshr-pdf-page-turn，不经过这些快照和折叠效果。

### 13.2 实现与参数

- 新增 web/src/components/flow-transition.js。分页重排时建立块的尺寸索引；动画只克隆当前页和目标页相交的内容块，保留原始宽度、位置、图像、译文、表格/代码水平滚动及可见批注。整个长章节不再参与 transform，也不克隆整章。
- 横向滑页：250 ms，两张不透明页面同步平移并首尾衔接；取消正文淡入淡出。
- 书页覆盖：300 ms，向前时新页从右覆盖固定的旧页；向后时当前页向右移开，露出固定的前一页；仅移动页带克制的边缘阴影。
- 3D 书页：500 ms，从右下页角向左侧书脊折叠，返回时反向展开。使用锁定版本 page-flip 2.0.7 的 FlipCalculation/Helper 源码计算裁剪区域与折叠位置，配合纸背和随折线移动的阴影。只使用其几何计算，没有挂载第三方阅读器、全局 UI 或永久渲染循环。这是软页折叠近似，不是连续弯曲的 WebGL 网格模拟。
- 动画统一采用 cubic-bezier(.25,.1,.25,1)。滑页/覆盖使用 WAAPI，软页由有限 WAAPI 时钟驱动独立 RAF；结束、取消、换章、跳转、退出横版都清理时钟、RAF、定时器和快照。完成保护上限为动画时长加 300 ms，避免宿主挂起的 finished Promise 永久锁住翻页。
- 页面接受一次明确导航后，真实且可选字的文档立即定位在目标页，展示层在其上运行；动画结束不从 scrollTop 推断新页码，也不再次翻页。快速输入继续排队；显式跳转/换章使旧异步任务失效。
- 展示层放在阅读视口对应的区域，保留工具栏、目录、侧栏及翻页按钮位置；inert 和 aria-hidden 禁止快照参与焦点、选字、翻译段落索引和读屏。SVG 的 ID 与局部绘制引用一起重命名，避免重复 ID 或破坏渐变/裁剪图示。
- 动画开始时冻结快照继承的阅读 CSS 变量。异步译文/图片造成的正文重排等动画结束后围绕字符锚点重建；窗口尺寸改变或新字体加载使当前展示提前结束，并保留已经接受的目标锚点。
- 尊重 prefers-reduced-motion。为避免异常单块复制再次阻塞 DSH，两页共享 1800 DOM 节点/64000 文本字符预算，单块高度不得超过 8 个视口；超限或动画准备失败时直接显示已接受的目标页，继续允许向前/后阅读。
- 新增第三方 MIT 声明 LICENSES/StPageFlip.txt，并加入发布文件。构建产物 client/client.js 已更新。

### 13.3 验证

- npm run build 通过；npm test：186 项通过。单元回归额外确认真实文档在动画下方已提交目标页、快照隔离、显式跳转释放成对动画。
- npm run test:flow-browser：15 项通过，五种格式均可完成整章，覆盖全部动画前后翻、连续点击、原生滚动干扰、译文/图像/字体/宽度重排、动画取消、模式切换、恢复位置、迟到跳转和换章。
- npm run test:flow-animations：38 项通过。五种格式 × 三种效果 × 前后两个方向 × 五个时间采样，加图文译文混合页，共检查 165 个中间状态；断言不透明、滑页无几何空隙、覆盖底页不动、软页存在有效页角裁剪，以及导航只提交一次。
- 该流程还覆盖深色纸张/亮度、已解码图片、译文卡片、高亮、SVG 渐变引用、工具栏与侧栏偏移、活动软页退出、系统减少动态效果、动画中调整窗口/字体设置，以及超大块降级。保留原文节点，结束后可继续选字。
- 普通 PDF 浏览器回归 13 项、同步翻译回归 12 项通过。翻译测试使用本地模拟服务，没有调用真实模型。
- 中间帧截图已查看，三种效果有独立行为。原始报告为 output/playwright/flow-animations.json、flow-regression.json、pdf-regression.json、translation-regression.json；EPUB 三种效果的前/中/后截图以 flow-animation- 开头。测试产物不入库。

这些是本机 Chrome 的自动回归和截图检查；本轮没有把它们表述为任意文档绝无卡顿的保证，也没有重新进行实际 DSH 宿主的人工验收。旧宿主实例若缓存客户端模块，需要完整退出并重启 DSH 后查看新效果。

参考实现：[StPageFlip](https://github.com/Nodlik/StPageFlip)、[官方演示](https://nodlik.github.io/StPageFlip/)、[随包 MIT 声明](LICENSES/StPageFlip.txt)。
