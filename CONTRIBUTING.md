# Contributing to DSH Reader

[English home](README.md) · [中文主页](README.zh-CN.md) · [Deutsche Übersicht](README.de.md)

Reports, suggestions, and contributions in **English, Chinese, or German** are welcome.

## Share feedback

- [Performance & optimization](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml): loading, scrolling, page turning, rendering, memory, or an optimization idea.
- [Bug report](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml): a reproducible failure or unexpected behavior.
- [Feature or usability suggestion](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml): the reading task you want to improve and your proposed behavior.
- [Existing issues](https://github.com/Popipot/DSH-Reading-Plugin/issues): check related reports and add useful reproduction details.

Include your DSH version, plugin commit/version, OS, and Desktop/Web profile type. For performance issues, include format, size, page count, page numbers, mode/zoom, first visit versus revisit, and whether translation is enabled. Distinguish slow page processing from the whole application becoming unresponsive.

Share a minimal public or redacted sample where possible. Do not post private documents, credentials, or personal data visible in logs/screenshots. Email **[csty341@gmail.com](mailto:csty341@gmail.com)** for direct contact.

## Code changes

1. Fork the repository and create a branch for your change.
2. Use the Node.js versions in [package.json](package.json), run `npm ci`, and read [CONTRACTS.md](CONTRACTS.md).
3. Make a focused change and explain the resulting behavior. Add a meaningful regression test for a bug where practical.
4. Run `npm test` and `npm run build` for runtime changes. Commit rebuilt `client/` and `dist/reader-assets/` when they change, so GitHub installations remain usable.
5. Run browser checks appropriate to the area changed:

   ```sh
   npm run test:pdf-browser
   npm run test:flow-browser
   npm run test:translation-browser
   npm run test:pdf-performance -- --hidpi
   ```

6. Open a pull request describing the problem, resulting behavior, validation, and material limitations. Link a related issue when available.

Browser checks need local Chrome/Chromium; set `CHROME_PATH` if required. Translation regression uses a local simulated service. Tests must not silently send documents to a paid model. Keep generated reports, browser profiles, dependencies, and local configuration out of commits.

## Documentation

Keep [English](README.md), [Chinese](README.zh-CN.md), and [German](README.de.md) landing pages aligned, including their installation links, feedback routes, email, feature scope, and limitations. Update the three installation guides when installation behavior changes. Documentation-only changes should be checked for links, examples, and language consistency; they do not require rerunning the entire browser suite.

Performance claims should name their sample and measurement scope. Keep the history in [OPTIMIZATION.md](OPTIMIZATION.md) distinct from current guarantees. Project documentation languages do not imply that runtime UI or translation target languages have been implemented.
