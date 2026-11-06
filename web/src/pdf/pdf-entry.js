/**
 * Lazy PDF-engine entry for dsh-reader.
 *
 * This file is the only place in the plugin allowed to import `pdfjs-dist`
 * statically. `scripts/build-pdf.mjs` bundles it with esbuild into
 * `dist/reader-assets/pdf.bundle.js`, which `PdfViewer.jsx` imports on demand:
 *
 *     const engine = await import('/dsh-reader-assets/pdf.bundle.js');
 *
 * Keep `react` out of this bundle: it is a plain browser module, not a React
 * component, and the surrounding client bundle renders the viewer.
 */

import {
  AbortException,
  AnnotationMode,
  GlobalWorkerOptions,
  InvalidPDFException,
  PasswordException,
  PDFWorker,
  PDFDataRangeTransport,
  TextLayer,
  VerbosityLevel,
  getDocument,
  version,
} from "pdfjs-dist";

export {
  AbortException,
  AnnotationMode,
  GlobalWorkerOptions,
  InvalidPDFException,
  PasswordException,
  PDFWorker,
  PDFDataRangeTransport,
  TextLayer,
  VerbosityLevel,
  getDocument,
  version,
};

export default {
  getDocument,
  GlobalWorkerOptions,
  TextLayer,
  AbortException,
  InvalidPDFException,
  PasswordException,
  PDFWorker,
  PDFDataRangeTransport,
  VerbosityLevel,
  AnnotationMode,
  version,
};
