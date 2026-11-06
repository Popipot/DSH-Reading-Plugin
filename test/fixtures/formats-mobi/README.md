# MOBI test fixture

`pg1342.mobi` — *Pride and Prejudice* by Jane Austen, downloaded from Project
Gutenberg:

- Source page: https://www.gutenberg.org/ebooks/1342
- Download URL: https://www.gutenberg.org/cache/epub/1342/pg1342.mobi
- License: public domain in the United States (Project Gutenberg License)

It is used only by `tests/formats-mobi.test.mjs` to exercise the real
`@lingo-reader/mobi-parser` path (MOBI 6, PalmDOC compression, EXTH metadata,
67 spine records, 65 NCX TOC entries). If this file is absent the test skips
itself with an explicit reason instead of failing.
