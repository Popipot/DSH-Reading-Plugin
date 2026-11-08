# 安装 DSH Reader

[English](INSTALL.en.md) · **简体中文** · [Deutsch](INSTALL.de.md) · [项目主页](../README.zh-CN.md)

**[下载 ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[下载 DeepSeek Harness](https://www.deepseek.com/harness/)** · **[安装求助](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml)**

安装地址：

```text
github:Popipot/DSH-Reading-Plugin#main
```

该地址安装当前 `main` 分支；需要固定版本时可把 `main` 换成提交 SHA。DSH 内的包名是 **dsh-reader**。仓库已包含浏览器模块和 PDF 运行资源。

## 1. 桌面版：通过 DSH 安装（推荐）

1. 安装并打开 [DeepSeek Harness](https://www.deepseek.com/harness/)。
2. 进入侧栏 **插件 → 添加插件**，英文界面对应 **Plugins → Add plugin**。若有添加方式菜单，选择安装第三方插件。
3. 在包名/Git 地址输入框粘贴 `github:Popipot/DSH-Reading-Plugin#main`。
4. 核对显示的插件信息和安装提示，然后点击 **安装 / Install**。
5. 安装完成后选择 **立即启用 / Enable now**，或在已安装列表启用 **dsh-reader**。
6. 如果提示需要重启，请完整退出并重新打开 DSH；仅关闭窗口可能仍在托盘运行。
7. 在侧栏打开 **阅读**，导入文档即可开始。

GitHub 安装需要能访问该仓库。若安装器提示缺少 Git，请先配置 Git；切换 npm 镜像不能替代对 Git 仓库的访问。

## 2. CLI 管理的 Web profile

仅适用于由 DSH CLI 管理的 Web 实例。确认命令可用后执行：

```sh
dsh --version
git --version
dsh plugin --profile web add "github:Popipot/DSH-Reading-Plugin#main"
```

重启该 profile 对应的 Web 实例，刷新浏览器，必要时启用 **dsh-reader**。如使用其它 Web profile，把 `web` 换成实际名称。

**桌面版和 Web 使用独立 profile。** 安装到 `web` 不会自动添加到桌面版。桌面版请优先使用插件管理器。桌面 CLI 支持随版本变化：较新的桌面自带 CLI 可在应用完整退出后管理已初始化的 desktop profile；旧版或独立安装的 CLI 可能拒绝。请按对应版本的 [官方桌面运行时说明](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.md#bundled-command-runtime) 操作，不要手工改写桌面 profile。

## 3. 本地源码或开发版本

克隆仓库，或 [下载并解压 ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)。把目录放在固定位置；链接安装会持续读取该目录。

```sh
git clone https://github.com/Popipot/DSH-Reading-Plugin.git
cd DSH-Reading-Plugin
```

桌面版在 **添加插件** 中填写实际目录的**绝对路径**。CLI 管理的 Web profile 可用本地链接，把示例替换成自己的路径：

```sh
dsh plugin --profile web add "link:/absolute/path/to/DSH-Reading-Plugin"
```

Windows PowerShell 示例：

```powershell
$readerPath = (Get-Location).Path
dsh plugin --profile web add "link:$readerPath"
```

修改源码后，用 Node.js `^22.19.0 || >=24.0.0` 安装依赖并重新构建：

```sh
npm ci
npm run build
npm test
```

构建后重启实际加载该插件的 DSH 实例。

## 4. 验证安装并开始阅读

- 侧栏出现 **阅读**，点击可以打开本地书架。
- 导入 PDF、EPUB、MOBI/AZW/AZW3、TXT、Markdown 或 HTML，建议先用小文件检查。
- 打开 PDF，检查选字、上一页/下一页及适宽/整页切换。
- 实时翻译默认关闭，开启 **实时翻译** 后使用 DSH 默认模型翻译成中文，模型调用可能计费。
- 仓库文档为中英德三语；当前阅读界面主要为中文，译文目标为简体中文。

## 5. 更新

本地链接版本可执行 `git pull --ff-only`；源码或依赖变化后运行 `npm ci` 和 `npm run build`，然后重启 DSH。

GitHub 安装请使用当前 DSH 版本提供的更新流程。若 Git 来源只支持移除后重装，用同一 GitHub 地址重新安装并启用。切换 profile 或清空站点数据前，请先备份重要本地数据；重装插件代码不等于备份书架。

## 常见问题

| 现象 | 检查方式 |
| --- | --- |
| 没有“阅读”入口 | 确认在当前 DSH 实例/profile 启用了 **dsh-reader**，完整退出后重开。 |
| 找不到 `dsh` 命令 | 使用桌面版插件管理器，或按官方说明配置 CLI。 |
| desktop profile 由应用独占/被锁定 | 使用桌面插件管理器，不要用 Web 安装代替或绕过锁。 |
| GitHub 下载失败 | 检查 Git 和仓库连通性；提交故障报告时附安装错误。 |
| PDF 资源/Worker 加载失败 | 重启 DSH，并重新安装/构建完整插件，包含 `client/` 和 `dist/reader-assets/`。 |
| 没有译文 | 开启实时翻译，确认 DSH 默认模型可用；扫描页需已有文本层。 |
| 阅读卡顿或翻页异常 | 用 [性能表单](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml) 提供文件大小、页数、阅读模式和复现步骤。 |

## 求助与依据

[报告问题](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml) · [提出建议](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml) · **[csty341@gmail.com](mailto:csty341@gmail.com)**

图形安装流程参考 DSH [官方插件管理器文档](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-plugin-manager/README.md#installing-a-bundle)；桌面/CLI 权限归属参考 [官方桌面文档](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.md#bundled-command-runtime)。不同 DSH 版本的文字和可用操作可能有所不同。
