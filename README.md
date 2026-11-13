# DSH Reader

**English** · [简体中文](README.zh-CN.md) · [Deutsch](README.de.md)

**[Install & tutorial](docs/INSTALL.en.md)** · **[Recording preview](https://github.com/Popipot/DSH-Reading-Plugin/releases/tag/v0.1.0-preview.1)** · **[Download ZIP](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[Suggest an improvement](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml)** · **[Report slowness](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml)**

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
| ![Library home in the Paper theme on a dark host](docs/images/library-paper.png) | ![Library home in Whale Blue with a deep-blue navigation rail](docs/images/library-whale-blue.png) | ![Library home in the Navy Pixel theme](docs/images/library-navy-pixel.png) |
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

## How to use it

The whale girl is your guide. The numbers in each screenshot match the steps below it, and her sign shows where you are in the sequence. The screenshots use sample documents and the Navy Pixel theme. The interface is in Chinese.

![Four whale girl poses: holding a sign, pointing left, pointing right with a small smile, and giving a thumbs up](images/guide/guide-poses.png)

### Library: import and organize

![Library home with the import button, sidebar categories, and a collection card marked](images/guide/library-home.png)

1. Click **导入文档** (Import document), or drop files into the library. PDF, EPUB, MOBI, TXT, Markdown, and HTML are supported.
2. Use the sidebar to switch between **我的书架** (My library), **文献** (Papers), **书籍** (Books), **文档** (Documents), and **证据库** (Evidence).
3. Collection cards preview covers. Expand **预览全部** (Preview all) for the full list of titles. Click **新建书单** (New collection) to group by topic. A book can belong to several collections and keeps one reading position and one set of notes.

To sort several books at once, click **多选** (Select) first. The [illustrated Chinese guide](docs/USER_GUIDE.zh-CN.md#图书馆封面书单与批量归类) shows how to edit a collection or remove books from it.

![Theme picker previewing Whale Blue](images/guide/library-theme.png)

1. Click **主题** (Theme) at the bottom of the sidebar.
2. Click **预览** (Preview) to try a theme, then **应用** (Apply) to keep it. Closing the panel restores the theme you had.

### PDF workspace: from reading to saved evidence

**Step 1. Open a PDF**

![The three areas of the PDF workspace](images/guide/pdf-open.png)

1. The outline is on the left.
2. The original is in the middle and keeps its layout.
3. The reading panel is on the right. It switches between **证据** (Evidence) and **翻译** (Translation).

**Step 2. Go to the part you need**

![Clicking an outline entry jumps to page 2](images/guide/pdf-outline.png)

1. Click a section in the outline to jump to its page.
2. Or type a page number in the page box and press Enter. Use this for PDFs without an outline.

**Step 3. Turn on the Chinese translation**

![The live translation switch and the Chinese translation on the right](images/guide/pdf-translate.png)

1. Turn on **实时翻译** (Live translation) in the top bar. It is off by default and calls the model you configured in DSH.
2. The panel shows the translation paragraph by paragraph. **定位原文** (Locate original) returns to the matching paragraph and **重译本段** (Retranslate) translates it again. You can also change the font size, edit the glossary, and pretranslate the next page here.

**Step 4. Select the passage you want to cite**

![A selected passage with the floating toolbar, and the save evidence button enabled in the panel](images/guide/pdf-select.png)

1. Select text in the original. The floating toolbar can translate it, mark it, ask AI to explain it, or search for it.
2. Click **保存证据** (Save evidence) in the panel.

**Step 5. Save the evidence**

![The save evidence dialog](images/guide/pdf-evidence.png)

1. The note and the printed page label are optional. You can add a translation later.
2. Click **保存证据** (Save evidence).

**Step 6. Return from evidence to the original**

![After clicking return to original, the page jumps back to page 2 and confirms the exact location](images/guide/pdf-return.png)

1. Evidence from the current paper is listed in the panel. Click **回到原文** (Return to original).
2. The page jumps back to the saved selection and tells you whether the location is exact.

**Step 7. Adjust how you read**

![Four groups of controls in the top bar](images/guide/pdf-view.png)

1. Toggles for the outline, the reading panel, and immersive mode.
2. Reading appearance, and annotations and notes.
3. **适宽** (Fit width) switches the zoom between fit width and fit page. **滚动** (Scroll) and **横版** (Horizontal) change how pages turn.
4. Open the AI panel to ask about the current document.

### Evidence library and topics

![The evidence library dialog listing saved evidence](images/guide/evidence-library.png)

1. **证据库** (Evidence) in the sidebar collects evidence from every document. You can return to the original, edit, delete, or select items to export.

For a review, write a research question in a collection, group evidence from several papers, add synthesis notes, and export UTF-8 Markdown. **备份与恢复** (Backup and restore) in the sidebar exports reading and research data to a local ZIP and previews conflicts before restoring.

### Other formats and page turning

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

**Theme contrast.** Apply buttons keep their current theme colors when hovered, focused, or pressed. Whale Blue uses a deeper blue navigation area beside a softer bookshelf.

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

**B5 user trial.** The [fixed pilot build v0.1.0-b5.1](https://github.com/Popipot/DSH-Reading-Plugin/releases/tag/v0.1.0-b5.1) is available as a pre-release from B4 commit 199a485. The materials for the 15-person, 14-day study are ready. Participant testing is pending.

**Promo video.** A short vertical video presented by the whale girl is in production to recruit pilot users. It shows the current build's real interface with narration generated locally; the final cut follows once the dialogue script is approved.

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

## Contributors

- [Popipot](https://github.com/Popipot) maintains the project.
- [Codex](https://github.com/codex) assisted with implementation, debugging, testing, and documentation.

## Contact

**Email: [csty341@gmail.com](mailto:csty341@gmail.com)**

Use GitHub Issues for public reports and ideas so others can follow the discussion. Email is also available for direct contact.

## License

[MIT](LICENSE). Included third-party assets retain their own license notices.
