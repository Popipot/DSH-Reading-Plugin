# DSH Reader

[English](README.md) · **简体中文** · [Deutsch](README.de.md)

**[安装与教程](docs/INSTALL.zh-CN.md)** · **[下载 ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[提出改进建议](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml)** · **[反馈卡顿与性能问题](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml)**

在 **DeepSeek Harness** 里读论文和书。用自建书单整理本地藏书，读 PDF 时对照中文译文，还能划词批注或就原文向 AI 提问。

> 打开 **DSH → 插件 → 添加插件**，粘贴下方地址。安装后启用 **dsh-reader**，从侧栏打开 **阅读**。如有提示，完整退出并重启 DSH。
>
> `github:Popipot/DSH-Reading-Plugin#main`
>
> [分步安装教程](docs/INSTALL.zh-CN.md) · [下载 DeepSeek Harness](https://www.deepseek.com/harness/) · [故障与建议入口](https://github.com/Popipot/DSH-Reading-Plugin/issues/new/choose) · [csty341@gmail.com](mailto:csty341@gmail.com)

![DSH Reader 像素风横幅，鲸鱼娘正在读书](docs/images/dsh-reader-banner.png)

## 界面一览

书架有三套主题，在左栏底部的「主题」里预览和切换，选择保存在本机。

| 纸本 | 鲸海蓝 | 藏青像素 |
| --- | --- | --- |
| ![纸本主题的书架首页，深色宿主](docs/images/library-paper.png) | ![鲸海蓝主题的书架首页，左下角打开了主题选择器](docs/images/library-whale-blue.png) | ![藏青像素主题的书架首页](docs/images/library-navy-pixel.png) |
| 暖色纸面，欢迎卡里是挥手的鲸鱼娘。 | 浅蓝书架，鲸鱼娘半透明铺在背景里。 | 藏青导航栏、奶白卡片和像素风描边。 |

两套鲸鱼娘主题在首页、文献、书籍和文档各用一张对应的背景，滚动时背景固定不动。

读 PDF 时，左侧是文档目录，中间是原文，右侧可在当前论文的证据和译文之间切换。

![PDF 阅读工作区，左侧目录，右侧证据面板](docs/images/pdf-workspace.png)

截图使用测试用的合成文档。

## 功能

| 功能 | 说明 |
| --- | --- |
| 多格式 | PDF、EPUB、MOBI/AZW/AZW3、TXT、Markdown、HTML。 |
| 本地书架 | 默认分类、自建书单文件夹、封面与完整书名预览、批量归类、搜索和继续阅读。 |
| PDF 阅读 | 滚动或横版翻页、缩放、适宽/整页、跳页与原生选字。 |
| PDF 对照翻译 | 固定中文侧栏、段落联动、术语表、暂停/重试与本地译文缓存。 |
| 电子书 | 可调排版，横版支持前后跨章翻页。 |
| 批注与 AI | 荧光笔、下划线、便签、划词翻译、上下文问答和 Google/Google 学术搜索。 |
| 阅读外观 | 字体、行距、版心宽度、亮度、背景与沉浸阅读。 |
| 公开来源导入 | 从公开书库与开放获取来源导入受支持的文件直链。 |
| 单篇取证 | 在 PDF 里选中文字保存为证据，可附已确认的译文，之后从证据库回到原文选区。 |
| 专题比较与导出 | 在书单里填写研究问题，分组比较多篇论文的证据，写综合笔记，导出 UTF-8 Markdown。 |
| 备份与恢复 | 把阅读和研究资料导出为本地 ZIP，可选包含原文，恢复前预检并预览冲突。 |
| 书架主题 | 纸本、鲸海蓝、藏青像素三套主题，可先预览再应用。 |

仓库主页和安装教程提供中英德三语。阅读界面目前主要为中文，文档自动翻译目标为**简体中文**。

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

## 使用引导

鲸鱼娘是这里的引导员。每张截图里的编号对应图下的步骤，右下角的牌子标出这是第几步。截图使用示例文档和「藏青像素」主题。

![引导员的四个动作：举牌、指左、指右、点赞](images/guide/guide-poses.png)

### 书架：导入和整理

![书架首页，标出导入文档按钮、左栏分类和书单卡片](images/guide/library-home.png)

1. 点 **导入文档**，或把文件拖进书架。支持 PDF、EPUB、MOBI、TXT、Markdown 和 HTML。
2. 在左栏切换 **我的书架**、**文献**、**书籍**、**文档** 和 **证据库**。
3. 书单卡片预览封面，展开 **预览全部** 可看完整书名。点 **新建书单** 按专题归类，同一本书可以放进多个书单，阅读进度和批注共用。

批量归类先点 **多选**。编辑书单或移出书籍的方法见 [书单图文教程](docs/USER_GUIDE.zh-CN.md#图书馆封面书单与批量归类)。

![主题选择器，正在预览鲸海蓝](images/guide/library-theme.png)

1. 点左栏底部的 **主题**。
2. 先点 **预览** 看效果，满意后点 **应用**。直接关闭面板会还原成原来的主题。

### PDF 工作区：从读到存证据

**第 1 步　打开 PDF**

![PDF 工作区的三个区域](images/guide/pdf-open.png)

1. 左侧是文档目录。
2. 中间是原文，版式保持不变。
3. 右侧是阅读侧栏，在 **证据** 和 **翻译** 之间切换。

**第 2 步　跳到要读的位置**

![点击目录条目跳转到第 2 页](images/guide/pdf-outline.png)

1. 点目录里的章节，直接跳到对应页。
2. 也可以在页码框输入页码后按回车。没有目录的 PDF 用这个方法。

**第 3 步　打开中文对照**

![实时翻译开关和右侧的中文对照](images/guide/pdf-translate.png)

1. 打开顶部的 **实时翻译**。它默认关闭，开启后会调用你在 DSH 里配置的模型。
2. 右侧按段落显示译文。点 **定位原文** 回到对应段落，点 **重译本段** 重新翻译。这里还能调字号、编辑术语表和预译下一页。

**第 4 步　选中要引用的原文**

![选中一段原文后出现工具栏，侧栏的保存证据按钮可用](images/guide/pdf-select.png)

1. 用鼠标选中原文。浮动工具栏可以翻译、标记、让 AI 解释或搜索这段文字。
2. 点侧栏的 **保存证据**。

**第 5 步　保存证据**

![保存证据对话框](images/guide/pdf-evidence.png)

1. 备注和印刷页标都可以不填。译文可以之后再补。
2. 点 **保存证据**。

**第 6 步　从证据回到原文**

![点击回到原文后，页面跳回第 2 页并提示已精确定位](images/guide/pdf-return.png)

1. 当前论文的证据列在侧栏里。点 **回到原文**。
2. 页面跳回保存时的选区，并提示是否精确定位。

**第 7 步　调整阅读方式**

![顶栏的四组控制](images/guide/pdf-view.png)

1. 依次是目录、阅读侧栏和沉浸模式的开关。
2. 阅读外观，以及批注与便签。
3. 点 **适宽** 在适宽和整页之间切换缩放，**滚动** 和 **横版** 切换翻页方式。
4. 打开 AI 面板，就当前文档提问。

### 证据库和专题

![证据库对话框，列出已保存的证据](images/guide/evidence-library.png)

1. 左栏的 **证据库** 汇总所有文档的证据。可以回到原文、编辑、删除，或勾选后导出。

写综述时，在书单里填写研究问题，把多篇论文的证据分组比较，写综合笔记，再导出 UTF-8 Markdown。左栏的 **备份与恢复** 把阅读和研究资料导出为本地 ZIP，恢复前会预检并预览冲突。

### 其他格式和翻页

PDF 译文侧栏独立滚动，原文保持原有版式。侧栏支持段落联动、术语表、字号调整、重试和可选的下一页预译。EPUB 等流式格式的译文显示在段落下方。

横版阅读时，每章从新的一页开始。章末向前翻一次就到下一章第一页，从章首往回翻则到上一章最后一页。EPUB 等流式格式可选横向滑页、书页覆盖和从页角折起的 3D 书页。动画遵循系统的减少动态效果设置。3D 书页使用 [StPageFlip](https://github.com/Nodlik/StPageFlip) 的折页几何（[MIT 声明](LICENSES/StPageFlip.txt)）。

PDF 阅读和批注截图见 [中文使用详解](docs/USER_GUIDE.zh-CN.md)。

## PDF 性能

在支持的环境中，解析和绘制使用独立线程。本地文件按需分段读取，附近页面采用虚拟布局；预览逐步补清晰，最近阅读页使用有预算的图像缓存。进入阅读后停止后台封面生成。

性能检查涵盖复杂 PDF 样本，以及在 DSH 中实际打开的 1029 页教材。测试环境和实测数据见 [优化记录第 12 节](OPTIMIZATION.md#12-pdf-性能方案-a双-worker随机读取与分级缓存2026-11-06)。

## 隐私与限制

- 文档、批注、进度和译文缓存保存在本机 IndexedDB/localStorage。公开来源导入通过本地 DSH Host 下载。
- 翻译与 AI 将相关文字、有限上下文和适用的术语表发送给 DSH 当前模型；预译会发送下一页文字，模型调用可能计费。
- 扫描 PDF 可以显示；选字和翻译需要已有文本层，当前没有 OCR。
- 不支持 DRM 电子书；部分复杂固定版式/竖排电子书会降级为流式阅读。
- 暂无保留排版的译文 PDF 导出及批注导出。证据和专题笔记可导出为 Markdown。清空站点数据会移除本地书架和设置。

## 开发进度

**2026 年 11 月 9 日 · B1 已放行 · 40 项全部通过。** 沉浸阅读顶部常驻外观、全屏和退出，电子书另有目录开关。按钮都有文字标签，工具栏和外观面板随阅读背景变化，设置重启后保留。

**B1 PDF 工具栏更新。** PDF 标题、缩放、整页显示和页码导航已并入顶部沉浸工具栏，配色随阅读主题变化。540 CSS px 宽时可排成一行，更窄时控件按组换行。构建 `fed3d4f` 按 B1 原基线通过 PDF 导航、外观及键盘专项复验。

**PDF 普通阅读。** 顶栏统一为左侧文档名、中间纯图标操作、右侧带文字的控件与页码输入。窄窗按组换行。构建 `09fb67e` 按 B1 原基线通过 PDF 导航、外观及键盘专项复验。

**PDF 缩放显示。** 普通阅读的缩放百分比已移到减号和加号之间。构建 `a4ad96f` 通过桌面专项和 PDF 浏览器回归。

**横版页边翻页。** 点击左侧留白后退，点击右侧留白前进。热区随正文视口变化，位于正文和 PDF 纸面之外。电子书窄窗保留两侧留白，PDF 仍支持页码输入和键盘翻页。构建 `ed9970d` 通过桌面专项和六格式翻页回归。

**B2 单篇取证已放行。** 在 PDF 单页内选中文字即可保存独立证据，可附上已确认的译文。证据库核验完整文件版本后可回到原选区。原文缺失时仍可查看和导出证据。候选 `bce3e2b` 通过全部 9 项基线验收，20 条选区精确回跳，10 个异常场景中精确定位误报为 0。DSH Desktop 20 次保存的 P95 为 14.4 ms。

**B3 专题比较与导出已放行。** 打开书单后进入「专题与证据」，可填写研究问题、分组比较多篇论文、按论文筛选并撰写综合笔记。论文出处可核对或补录，印刷页标与 PDF 物理页码分别记录。支持将所选证据或整专题导出为 UTF-8 Markdown。候选 `93436e0` 通过全部 7 项验收，9 条证据精确回跳，9 条导出出处完整。在 100 篇文献、1,000 条证据的规模下，筛选 P95 为 31.8 ms。

**PDF 阅读模式。** 适宽固定为滚动阅读，整页可选择滚动或横版翻页。普通和沉浸工具栏的切换按钮均显示当前模式。

**本地 ZIP 备份与恢复。** 在书架或阅读设置导出阅读与研究资料，可选包含原文文件。回到书架即可预检 ZIP、预览同 ID 冲突并确认恢复。B4 候选版 e5f61dc 通过 v0.1 全部 9 项判据。

**方案 A 阅读工作区。** 书架使用分类侧栏、顶部搜索与导入、书单封面和最近文献表。标准 PDF 阅读器左侧显示文档目录，右侧可切换当前论文的证据与译文。窄窗默认给正文留出完整宽度，需要时可展开工具。

**书库主题。** 在书库左栏底部打开「主题」，在当前书架预览「纸本」「鲸海蓝」或「藏青像素」，点「应用」即可切换并保存到本机。「鲸海蓝」在书架首页、文献、书籍和文档使用各自的半透明鲸鱼娘背景。两套鲸鱼娘主题的四张背景均已放大，并按整幅图案的重心居中，滚动时固定在书库视口，全屏也可见。「藏青像素」用藏青导航栏、奶白卡片和像素风描边，同样在这四个页面显示对应的鲸鱼娘背景。

**书库卡片操作。** 分类标签保持单行，卡片空间不足时操作按钮整体换行。

**书库鲸鱼娘。** 挥手鲸鱼娘是书架首页的主视觉，欢迎卡会随窗口调整尺寸。书籍、文献和文档分别使用读书、查资料和记笔记形象。书库首页、空状态和加入书单反馈也有对应插画。[查看六款原稿](images/whale-girl/README.md)。

**B5 用户试点。** 15 人、14 天试点的材料已备齐，用户验证待启动。

B1 前一轮性能测试在 DSH 桌面端完成 80 次冷打开，参考论文和 1029 页教材的最高分组 P95 分别为 **1375 ms** 和 **2426 ms**。DSH Web 完成 480 次相邻翻页，预热与未预热最高分组 P95 分别为 **44 ms** 和 **259 ms**。最终版本通过桌面外观复验及六类浏览器回归。

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
npm run test:library-browser
npm run test:flow-animations
npm run test:translation-browser
npm run test:pdf-performance -- --hidpi
```

浏览器检查使用独立 Chrome 配置，可通过 `CHROME_PATH` 指定可执行文件；翻译回归使用本地模拟服务。报告位于 `output/playwright/`，不提交仓库。`npm run test:pdf-performance -- "真实文件.pdf"` 不限页数；另一个默认 PDF 导航回归替换样本时要求至少 1029 页。

源码：`web/src/`（阅读器/解析）、`lib/`（Host 路由）、`scripts/` 和 `tests/`（构建/测试）。构建产物：`client/client.js` 和 `dist/reader-assets/`。接口约定：[CONTRACTS.md](CONTRACTS.md)。

## 贡献者

- [Popipot](https://github.com/Popipot) 负责项目维护。
- [Codex](https://github.com/codex) 作为 AI 编程助手参与功能开发、缺陷修复、测试和文档整理。

## 联系

**联系邮箱：[csty341@gmail.com](mailto:csty341@gmail.com)**

公开故障和优化意见建议提交 GitHub Issues，方便大家跟进；也可通过邮箱直接联系。

## 许可证

[MIT](LICENSE)。内置第三方资源保留各自的许可证声明。
