# DSH Reader

[English](README.md) · **简体中文** · [Deutsch](README.de.md)

**[安装与教程](docs/INSTALL.zh-CN.md)** · **[下载 ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[提出改进建议](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml)** · **[反馈卡顿与性能问题](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml)**

装进 **DeepSeek Harness** 侧栏的文献与书籍阅读空间：本地书架、PDF/电子书阅读、中文对照翻译、批注笔记和上下文 AI 问答。

> **快速安装：** 打开 **DSH → 插件 → 添加插件**，粘贴下面的安装地址，安装后启用 **dsh-reader**。如有提示，完整退出并重启 DSH。侧栏出现 **阅读** 入口后即可使用。
>
> `github:Popipot/DSH-Reading-Plugin#main`
>
> [分步安装教程](docs/INSTALL.zh-CN.md) · [下载 DeepSeek Harness](https://www.deepseek.com/harness/en/) · [故障与建议入口](https://github.com/Popipot/DSH-Reading-Plugin/issues/new/choose) · [csty341@gmail.com](mailto:csty341@gmail.com)

![DSH Reader 本地书架](docs/v3-library-covers.png)

## 功能

| 功能 | 说明 |
| --- | --- |
| 多格式 | PDF、EPUB、MOBI/AZW/AZW3、TXT、Markdown、HTML。 |
| 本地书架 | 搜索、书籍/文献/文档分类、封面和继续阅读。 |
| PDF 阅读 | 滚动或横版翻页、缩放、适宽/整页、跳页与原生选字。 |
| PDF 对照翻译 | 固定中文侧栏、段落联动、术语表、暂停/重试与本地译文缓存。 |
| 电子书 | 目录章节、字体排版、横版分页和翻页动画。 |
| 批注与 AI | 荧光笔、下划线、便签、划词翻译、上下文问答和 Google/Google 学术搜索。 |
| 阅读外观 | 字体、行距、版心宽度、亮度、背景与沉浸阅读。 |
| 公开来源导入 | 从公开书库与开放获取来源导入受支持的文件直链。 |

**语言范围：** 仓库主页和安装教程提供中英德三语。阅读界面当前主要为中文，文档自动翻译目标为**简体中文**；尚未实现完整英德语界面或可选译文目标语言。

## 安装

[完整安装教程](docs/INSTALL.zh-CN.md) 包含桌面版、CLI/Web、本地开发、更新和常见问题。仓库已包含正常 GitHub 安装所需的构建产物。

| 方式 | 地址或操作 |
| --- | --- |
| DSH 插件管理器（推荐） | **插件 → 添加插件** → `github:Popipot/DSH-Reading-Plugin#main` |
| 下载源码 | [下载源码及已构建资源](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip) |
| CLI 管理的 Web profile | 执行下方命令，然后重启对应 Web 实例。 |

```sh
dsh plugin --profile web add "github:Popipot/DSH-Reading-Plugin#main"
```

桌面版请使用自带插件管理器。安装到 `web` profile 不会自动安装到桌面版独立的 profile。

## 开始阅读

1. 在 DSH 侧栏打开 **阅读**。
2. 拖入支持的文件，或点击 **导入文档**。
3. 打开文档，在顶部切换滚动或横版阅读。
4. 需要时开启 **实时翻译**，默认关闭。
5. 选中文字即可翻译、标记、问 AI 或搜索；进度和批注保存在本机。

PDF 译文侧栏独立滚动，不改变原文页高；支持段落联动、术语表、字号、重试和可选的预译下一页。EPUB 等流式格式的译文显示在段落下方。

![PDF 横版阅读](docs/v10-pdf-book.png)

更多截图和操作细节见 [中文使用详解](docs/USER_GUIDE.zh-CN.md)。


非 PDF 横版采用两张不透明页面：横向滑页（250 ms）、静止底页上的书页覆盖（300 ms）、从页角折叠的软页（500 ms）。系统开启减少动态效果或内容块超出动画预算时直接切页。软页几何来自 [StPageFlip](https://github.com/Nodlik/StPageFlip)，[MIT 声明](LICENSES/StPageFlip.txt)。

## PDF 性能

在支持的环境中，解析和绘制使用独立线程。本地文件按需分段读取，附近页面采用虚拟布局；预览逐步补清晰，最近阅读页使用有预算的图像缓存。进入阅读后停止后台封面生成。

当前实现已通过 **185 项测试**、PDF/翻译/五种流式格式分页回归及复杂文档性能流程，并在实际 DSH 中检查 1029 页 Floyd 教材。结果取决于文件、硬件和宿主，不等于与 Adobe 的同机对照，也不是任意 PDF 零延迟的保证。

实现过程与验证边界见 [OPTIMIZATION.md 第 12 节](OPTIMIZATION.md#12-pdf-性能方案-a双-worker随机读取与分级缓存2026-11-06)。

## 隐私与限制

- 文档、批注、进度和译文缓存保存在本机 IndexedDB/localStorage。公开来源导入通过本地 DSH Host 下载。
- 翻译与 AI 将相关文字、有限上下文和适用的术语表发送给 DSH 当前模型；预译会发送下一页文字，模型调用可能计费。
- 扫描 PDF 可以显示；选字和翻译需要已有文本层，当前没有 OCR。
- 不支持 DRM 电子书；部分复杂固定版式/竖排电子书会降级为流式阅读。
- 暂无保留排版的译文 PDF 导出及批注导出。清空站点数据会移除本地书架和设置。

## 反馈与建议

**欢迎用中文、英语或德语提出优化意见，一起改进 DSH Reader。**

| 想反馈什么 | 提交入口 |
| --- | --- |
| 打开慢、卡顿、内存占用、PDF 渲染性能 | [性能与优化反馈](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml) |
| 空白页、翻页异常或可复现故障 | [提交故障报告](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml) |
| 新功能、阅读流程或易用性建议 | [提出功能建议](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml) |
| 已有报告和讨论 | [浏览 Issues](https://github.com/Popipot/DSH-Reading-Plugin/issues) |

请说明 DSH/插件版本、操作系统、复现步骤和期望/实际表现。性能反馈请补充文件大小、页数、阅读模式，以及关闭翻译后是否仍卡顿。请使用小型公开或脱敏样本，不要提交私密文档。

贡献流程与验证说明见 [CONTRIBUTING.md](CONTRIBUTING.md)（英语）。

## 开发

Node.js 要求见 [package.json](package.json)：`^22.19.0 || >=24.0.0`。

```sh
git clone https://github.com/Popipot/DSH-Reading-Plugin.git
cd DSH-Reading-Plugin
npm ci
npm run build
npm test
npm run test:pdf-browser
npm run test:flow-browser
npm run test:flow-animations
npm run test:translation-browser
npm run test:pdf-performance -- --hidpi
```

浏览器检查使用独立 Chrome 配置，可通过 `CHROME_PATH` 指定可执行文件；翻译回归使用本地模拟服务。报告位于 `output/playwright/`，不提交仓库。`npm run test:pdf-performance -- "真实文件.pdf"` 不限页数；另一个默认 PDF 导航回归替换样本时要求至少 1029 页。

源码：`web/src/`（阅读器/解析）、`lib/`（Host 路由）、`scripts/` 和 `tests/`（构建/测试）。构建产物：`client/client.js` 和 `dist/reader-assets/`。接口约定：[CONTRACTS.md](CONTRACTS.md)。

## 联系

**联系邮箱：[csty341@gmail.com](mailto:csty341@gmail.com)**

公开故障和优化意见建议提交 GitHub Issues，方便大家跟进；也可通过邮箱直接联系。

## 许可证

[MIT](LICENSE)。内置第三方资源保留各自的许可证声明。
