# Install DSH Reader

**English** · [简体中文](INSTALL.zh-CN.md) · [Deutsch](INSTALL.de.md) · [Project home](../README.md)

**[Download ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[Get DeepSeek Harness](https://www.deepseek.com/en/harness/)** · **[Installation help](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml)**

Installation address:

```text
github:Popipot/DSH-Reading-Plugin#main
```

This address installs the current `main` branch. To install a specific revision, replace `main` with a commit SHA. The package name inside DSH is **dsh-reader**. Built browser/PDF assets are included.

## 1. Desktop: install through DSH — recommended

1. Install and open [DeepSeek Harness](https://www.deepseek.com/en/harness/).
2. Open **Plugins** in the sidebar, then **Add plugin**. In a Chinese DSH interface these are **插件 → 添加插件**. If offered a menu, choose installation of a third-party plugin.
3. Paste `github:Popipot/DSH-Reading-Plugin#main` into the package/Git address field.
4. Review the displayed package and installation prompt, then choose **Install**.
5. When installation completes, choose **Enable now**, or enable **dsh-reader** in the installed-plugin list.
6. Fully quit and reopen DSH if activation requires a restart. Closing only the window may leave Desktop running in the tray.
7. Open **阅读** (Reading) in the sidebar. Import a document to start.

GitHub installation needs access to GitHub; make Git available if the installer reports that it is missing. An npm mirror does not replace access to the Git repository.

## 2. CLI-managed Web profile

Use this route for a Web instance managed by the DSH CLI. Check that the CLI is available:

```sh
dsh --version
git --version
dsh plugin --profile web add "github:Popipot/DSH-Reading-Plugin#main"
```

Restart the Web instance for that profile, refresh the browser, and enable **dsh-reader** if needed. Replace `web` with your actual Web profile name.

**Desktop and Web use separate profiles.** Installing into `web` does not add the plugin to Desktop. For Desktop, use its plugin manager. Desktop CLI management varies by DSH release: newer Desktop-bundled CLIs support its initialized profile only while Desktop is fully quit; older builds or a separately installed CLI may refuse it. Follow the [official Desktop runtime instructions](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.md#bundled-command-runtime) for your version instead of manually editing the Desktop profile.

## 3. Local source or development checkout

Clone the repository or [download and extract the ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip). Keep the extracted directory in a stable location: linked installations continue to read from it.

```sh
git clone https://github.com/Popipot/DSH-Reading-Plugin.git
cd DSH-Reading-Plugin
```

In Desktop's **Add plugin** dialog, enter the actual **absolute path** of this directory. For a CLI-managed Web profile, use a local link, replacing the example with your own path:

```sh
dsh plugin --profile web add "link:/absolute/path/to/DSH-Reading-Plugin"
```

Windows PowerShell example:

```powershell
$readerPath = (Get-Location).Path
dsh plugin --profile web add "link:$readerPath"
```

If you change source files, use Node.js `^22.19.0 || >=24.0.0` and rebuild:

```sh
npm ci
npm run build
npm test
```

Restart the DSH instance that loads the plugin after rebuilding.

## 4. Verify and start reading

- **阅读** appears in the sidebar, and the local library opens.
- Import PDF, EPUB, MOBI/AZW/AZW3, TXT, Markdown, or HTML. Try a small file first.
- Open a PDF and test text selection, page navigation, and width/whole-page fit.
- Live translation is off by default. Choose **实时翻译** to enable Chinese translation using DSH's default model; model calls may incur charges.
- Project documentation is trilingual; the current reader UI is primarily Chinese and translation targets Simplified Chinese.

## 5. Updating

For a linked checkout, run `git pull --ff-only`, then `npm ci` and `npm run build` if source/dependencies changed, and restart DSH.

For a GitHub installation, follow your DSH version's plugin update workflow. If it only offers removal/reinstallation for Git-sourced plugins, reinstall the same GitHub address and enable it again. Export or back up important local data before changing profiles or clearing site data; reinstalling code is not a library backup.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| No Reading entry | Check that **dsh-reader** is enabled in the same DSH instance/profile; fully quit and reopen it. |
| `dsh` command not found | Use the Desktop plugin manager, or configure DSH's CLI according to the official instructions. |
| Desktop profile is exclusively managed / locked | Use Desktop's plugin manager; do not substitute a `web` installation or bypass the profile lock. |
| GitHub download fails | Check Git availability and connectivity to this repository; attach the install error in a bug report. |
| PDF assets/Worker cannot load | Restart DSH and reinstall/rebuild the complete plugin, including `client/` and `dist/reader-assets/`. |
| No translation | Enable live translation and confirm a working default model in DSH; scanned pages need a text layer. |
| Slow reading or a page-turning issue | Use the [performance form](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml) with file size, page count, reading mode, and reproduction steps. |

## Help and sources

[Report a problem](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml) · [Suggest an improvement](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml) · **[csty341@gmail.com](mailto:csty341@gmail.com)**

The GUI flow follows DSH's [official Plugin Manager documentation](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-plugin-manager/README.md#installing-a-bundle). Desktop/CLI ownership follows the [official Desktop documentation](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.md#bundled-command-runtime). Labels and available actions may vary with DSH versions.
