# DSH Reader

**English** · [简体中文](README.zh-CN.md) · [Deutsch](README.de.md)

**[Install & tutorial](docs/INSTALL.en.md)** · **[Download ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[Suggest an improvement](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml)** · **[Report slowness](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml)**

A **DeepSeek Harness** plugin for reading papers and books. Organize your local library into collections, read PDFs alongside Chinese translations, and annotate or ask AI about selected text.

> To install, open **DSH → Plugins → Add plugin** and paste the address below. Enable **dsh-reader** after installing, then open **阅读** (Reading) in the sidebar. Fully restart DSH if requested.
>
> `github:Popipot/DSH-Reading-Plugin#main`
>
> [Step-by-step installation](docs/INSTALL.en.md) · [Get DeepSeek Harness](https://www.deepseek.com/en/harness/) · [Bugs & feedback](https://github.com/Popipot/DSH-Reading-Plugin/issues/new/choose) · [csty341@gmail.com](mailto:csty341@gmail.com)

![DSH Reader pixel-art banner featuring the whale girl reading a book](docs/images/dsh-reader-banner.png)

## A look at the interface

The library has three themes. Preview and switch them under **主题** (Theme) at the bottom of the sidebar; your choice is saved on this device.

| 纸本 (Paper) | 鲸海蓝 (Whale Blue) | 藏青像素 (Navy Pixel) |
| --- | --- | --- |
| ![Library home in the Paper theme on a dark host](docs/images/library-paper.png) | ![Library home in Whale Blue with the theme picker open at the lower left](docs/images/library-whale-blue.png) | ![Library home in the Navy Pixel theme](docs/images/library-navy-pixel.png) |
| Warm paper tones, with the waving whale girl on the welcome card. | A light blue shelf with the whale girl as a translucent background. | Navy sidebar, cream cards, and pixel-style outlines. |

Both whale girl themes use a matching background on the library home, Papers, Books, and Documents. The background stays in place as you scroll.

When you read a PDF, the outline is on the left, the original in the middle, and a panel on the right switches between the current paper's evidence and its translation.

![PDF reading workspace with the outline on the left and the evidence panel on the right](docs/images/pdf-workspace.png)

The screenshots use synthetic test documents. The interface is in Chinese.

## Features

| Feature | What you can do |
| --- | --- |
| Formats | Read PDF, EPUB, MOBI/AZW/AZW3, TXT, Markdown, and HTML. |
| Local library | Browse default categories and custom collection folders, preview their contents, file books in bulk, and resume reading. |
| PDF reading | Scroll or turn pages horizontally; zoom, fit width/whole page, jump to a page, and select text. |
| PDF translation | Keep the original beside a fixed Chinese translation pane with paragraph linking, glossary, pause/retry, and local caching. |
| Ebooks | Adjust typography and turn pages across chapter boundaries in either direction. |
| Notes and AI | Highlight, underline, add sticky notes, translate a selection, ask contextual questions, or search Google/Google Scholar. |
| Appearance | Adjust fonts, spacing, width, brightness, backgrounds, and immersive reading. |
| Public-source import | Import supported direct file links from public book and open-access sources. |
| Evidence capture | Select text in a PDF and save it as evidence, with a confirmed translation if you want one, then return to the exact selection from the evidence library. |
| Topic comparison and export | Write a research question for a collection, group evidence from several papers, add synthesis notes, and export UTF-8 Markdown. |
| Backup and restore | Export reading and research data to a local ZIP, optionally with the source files, and preview conflicts before restoring. |
| Library themes | Choose Paper, Whale Blue, or Navy Pixel, with a preview before you apply. |

The project overview and installation guides are available in English, Simplified Chinese, and German. The reader interface is currently primarily Chinese, and automatic document translation targets **Simplified Chinese**.

## Install

The [installation tutorial](docs/INSTALL.en.md) covers Desktop, CLI/Web, local development, updates, and troubleshooting. Build assets are included for a normal GitHub installation.

| Method | Address or action |
| --- | --- |
| DSH plugin manager — recommended | **Plugins → Add plugin** → `github:Popipot/DSH-Reading-Plugin#main` |
| Source download | [Download source and included build assets](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip) |
| CLI-managed Web profile | Run the command below, then restart that Web instance. |

```sh
dsh plugin --profile web add "github:Popipot/DSH-Reading-Plugin#main"
```

For Desktop, use its plugin manager. A `web` profile installation does not install into Desktop's separate profile.

## Organize your library

Create a collection for a topic, project, or reading list alongside the built-in Books, Papers, and Documents categories. A folder card previews up to four covers and titles. Expand it to see every title and open a book directly.

![Example library with collection cover previews and an expanded list of titles in the Chinese interface](docs/images/library-paper.png)

Use **加入书单** (Add to collection) on a book card, or choose **多选** (Select multiple) to file several books at once. A book can belong to multiple collections and shares its reading position and notes across them. The [illustrated guide to collections](docs/USER_GUIDE.zh-CN.md#图书馆封面书单与批量归类) shows how to edit a collection or remove a book from it.

## Start reading

1. Open **阅读** (Reading) in the DSH sidebar.
2. Drop a supported file into the library or choose **导入文档** (Import document).
3. Open it and choose scrolling or horizontal page turning in the top bar.
4. Enable **实时翻译** (Live translation) when needed. It is off by default.
5. Select text to translate, annotate, ask AI, or search. Progress and notes are saved locally.

For PDFs, the translation pane scrolls independently while the original keeps its layout. It supports paragraph links, a glossary, font size controls, retry, and optional next-page pretranslation. Reflowable ebooks show translations below paragraphs.

In horizontal mode, each ebook chapter starts on a fresh page. Turn forward once at the end of a chapter to reach the first page of the next. Turn backward from a chapter’s first page to reach the previous chapter’s last page. For EPUB and other reflowable formats, choose horizontal slide, page cover, or a 3D page turn that folds from the corner. The reader honors the system’s reduced-motion preference. The 3D turn uses geometry from [StPageFlip](https://github.com/Nodlik/StPageFlip) ([MIT notice](LICENSES/StPageFlip.txt)).

The [illustrated Chinese user guide](docs/USER_GUIDE.zh-CN.md) includes PDF reading and annotation screenshots.

## PDF performance

Parsing and drawing use separate workers where supported. Local files use on-demand range reads; nearby pages are virtualized. Preview images refine to full quality, recently viewed pages use a bounded image cache, and background cover generation stops when you enter the reader.

The performance checks include complex sample PDFs and a 1,029-page textbook opened in DSH. The [optimization log](OPTIMIZATION.md#12-pdf-性能方案-a双-worker随机读取与分级缓存2026-11-06) records the test environment and measured results in Chinese.

## Privacy and limitations

- Documents, notes, reading positions, and translation caches stay in local IndexedDB/localStorage. Public-source imports download through the local DSH Host.
- Translation and AI send relevant text, limited context, and applicable glossary to DSH's configured model. Optional pretranslation sends next-page text too. Model usage may incur charges.
- Scanned PDFs can be displayed; selection and translation require an existing text layer. OCR is not included.
- DRM ebooks and some complex fixed/vertical layouts are unsupported or fall back to reflowed reading.
- Layout-preserving translated PDF export and annotation export are not included. Evidence and topic notes can be exported as Markdown. Clearing local site data removes the local library and settings.

## Development status

**November 9, 2026 · B1 released · 40 of 40 checks passed.** Immersive reading now has an always-visible row of labeled controls for appearance, fullscreen, and exit. Ebooks also have a contents toggle. The toolbar and appearance panel follow the reading theme, and settings persist across restarts.

**B1 PDF toolbar update.** PDF titles, zoom, whole-page view, and page navigation now share the themed immersive toolbar. Controls fit on one row at 540 CSS px and wrap into visible groups in smaller windows. Build `fed3d4f` passed the targeted PDF navigation, appearance, and keyboard checks against the B1 baseline.

**Standard PDF reading.** A single header shows the document title on the left, icon actions in the center, and labeled controls and page entry on the right. Narrow windows wrap the groups. Build `09fb67e` passed the targeted B1 checks for PDF navigation, appearance, and keyboard access.

**PDF zoom display.** The zoom percentage now sits between the minus and plus controls in standard reading. Build `a4ad96f` passed the targeted desktop and PDF browser checks.

**Page turns from the margins.** In paged mode, click the left or right blank margin to turn a page. The clickable strip adapts to the reading pane and stays outside the document. Ebooks keep side margins in narrow windows, and PDF keeps its page field and keyboard controls. Build `ed9970d` passed targeted desktop checks and the six-format page-turn regression.

**B2 single-paper evidence is released.** Select text on one PDF page to save an independent evidence record, optionally with a confirmed translation. The evidence library can return to the selection after checking the complete PDF version. If the source is missing, you can still read and export the record. Candidate `bce3e2b` passed all 9 baseline checks, including 20 exact anchors and 10 exception cases with zero false exact matches. Saving took 14.4 ms at P95 across 20 trials in DSH Desktop.

**B3 topic comparison and export is released.** Open a book list and choose its topic workspace to record a research question, group evidence from several papers, filter by paper, and write a comparison. Paper citations can be confirmed or completed, including an optional printed page label. Export selected evidence or the whole topic as UTF-8 Markdown. Candidate `93436e0` passed all seven checks, including nine exact PDF returns, nine complete exported references, and a 31.8 ms filter P95 at 100 papers and 1,000 evidence records.

**PDF viewing controls.** Fit Width uses continuous scrolling. Fit Page offers both scrolling and page turning. The button displays the active view in the standard and immersive toolbars.

**Local ZIP backup and restore.** From the library or reader settings, save reading and research data with or without the original documents. From the library, verify a ZIP and preview same-ID conflicts before restoring. B4 candidate e5f61dc passed all nine v0.1 checks.

**Reader workspace, design A.** The library has category navigation, a top search and import bar, collection covers, and a recent-document list. The standard PDF view puts the document outline on the left and the current paper’s evidence and translation on the right. Narrow windows keep the PDF at full available width, with tools opening on demand.

**Library themes.** Open **主题** (Theme) at the bottom of the library sidebar. Preview **纸本** (Paper), **鲸海蓝** (Whale Blue), or **藏青像素** (Navy Pixel) on your bookshelf, then click **应用** (Apply) to save your choice on this device. Whale Blue uses a different translucent whale girl on the library home, Papers, Books, and Documents. Each enlarged background is centred on the whole figure, tail and props included, and stays in place as you scroll, including in fullscreen. Navy Pixel pairs a navy sidebar with cream cards and pixel-style outlines, and shows the same four whale girl backgrounds.

**Library card controls.** Category labels stay on one line, and whole buttons wrap when a card needs more room.

**Library illustrations.** The waving whale girl is the main illustration on the library home page, with a larger welcome card that adapts to the window. Six pixel-art whale girl poses distinguish Books, Papers and Documents, welcome readers to the library, and accompany empty and success states. [See all six poses](images/whale-girl/README.md).

**B5 user trial.** The materials for the 15-person, 14-day study are ready. Participant testing is pending.

In B1's earlier performance run, 80 cold opens on DSH Desktop had a highest group P95 of **1,375 ms** for the reference paper and **2,426 ms** for the 1,029-page textbook. For 480 adjacent-page turns on DSH Web, the highest group P95 was **44 ms** with preloading and **259 ms** without it. The final build passed the desktop appearance check and six browser regression suites.

## Feedback

**Help improve DSH Reader. Reports and suggestions in English, Chinese, or German are welcome.**

| What you want to share | Where to send it |
| --- | --- |
| Slow opening, stuttering, memory use, or rendering performance | [Performance & optimization feedback](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml) |
| Reproducible errors, blank pages, or page-turning problems | [Bug report](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml) |
| Features, reading workflows, or usability suggestions | [Feature request](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml) |
| Existing reports and discussions | [Browse issues](https://github.com/Popipot/DSH-Reading-Plugin/issues) |

Include DSH/plugin versions, OS, reproduction steps, and expected/actual behavior. For performance reports, add file size, page count, reading mode, and behavior with translation disabled. Use a small public or redacted sample instead of a private document.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution and validation guidance.

## Development

Node.js requirement: `^22.19.0 || >=24.0.0`, as declared in [package.json](package.json).

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

Browser checks use an isolated local Chrome profile; set `CHROME_PATH` if needed. Translation checks use a simulated local service. Reports go to `output/playwright/` and are not committed. `npm run test:pdf-performance -- "/path/to/document.pdf"` accepts any page count; the separate default PDF navigation regression expects at least 1,029 pages when replacing its fixture.

Source: `web/src/` (reader/parsers), `lib/` (Host routes), `scripts/` and `tests/` (build/checks). Included builds: `client/client.js` and `dist/reader-assets/`. Interface contracts: [CONTRACTS.md](CONTRACTS.md).

## Contact

**Email: [csty341@gmail.com](mailto:csty341@gmail.com)**

Use GitHub Issues for public reports and ideas so others can follow the discussion. Email is also available for direct contact.

## License

[MIT](LICENSE). Included third-party assets retain their own license notices.
