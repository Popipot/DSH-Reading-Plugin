#!/usr/bin/env node
/**
 * Build the lazy PDF engine bundle and its runtime assets.
 *
 * Output (all under dsh-reader/dist/reader-assets/, served by the Host at
 * /dsh-reader-assets/):
 *
 *   pdf.bundle.js        ESM bundle of web/src/pdf/pdf-entry.js (~pdfjs-dist core)
 *   pdf.worker.mjs       PDF.js worker (loaded by GlobalWorkerOptions.workerSrc)
 *   cmaps/**             predefined CJK CMaps (cMapUrl)
 *   standard_fonts/**    standard font data (standardFontDataUrl)
 *   wasm/**              JBIG2 / JPEG2000 / QCMS decoders (wasmUrl) [optional]
 *   iccs/**              ICC color profiles (iccUrl) [optional]
 *   PDFJS-LICENSE.txt    Apache-2.0 notice for the bundled PDF.js code
 *
 * The build is deterministic: the output directory is recreated from scratch
 * and no timestamps / build metadata are written. Any missing input or a
 * suspiciously small output fails the build with a non-zero exit code.
 */

import { build } from "esbuild";
import {
  copyFile,
  cp,
  mkdir,
  readFile,
  readdir,
  rm,
  stat,
} from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "..");
const pdfjsRoot = path.join(projectRoot, "node_modules", "pdfjs-dist");
const outDir = path.join(projectRoot, "dist", "reader-assets");
const entry = path.join(projectRoot, "web", "src", "pdf", "pdf-entry.js");

const MIN_BUNDLE_BYTES = 120 * 1024;
const MIN_WORKER_BYTES = 300 * 1024;
const MIN_CMAPS = 100;
const MIN_STANDARD_FONTS = 10;

function log(message) {
  process.stdout.write(`[build-pdf] ${message}\n`);
}

function fail(message) {
  const error = new Error(`[build-pdf] ${message}`);
  error.isBuildError = true;
  throw error;
}

async function sizeOf(file) {
  const info = await stat(file);
  return info.size;
}

async function assertFile(file, label) {
  if (!existsSync(file)) {
    fail(
      `Missing ${label}: ${file}\n` +
        "Run `npm install` in dsh-reader before building."
    );
  }
  const size = await sizeOf(file);
  if (size <= 0) {
    fail(`${label} is empty: ${file}`);
  }
  return size;
}

async function copyDirectory(source, destination, label) {
  if (!existsSync(source)) {
    fail(`Missing ${label} directory: ${source}`);
  }
  await cp(source, destination, { recursive: true });
  const entries = await readdir(destination);
  if (entries.length === 0) {
    fail(`${label} directory is empty after copy: ${destination}`);
  }
  return destination;
}

async function countFiles(dir) {
  let total = 0;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entryInfo of entries) {
    const full = path.join(dir, entryInfo.name);
    if (entryInfo.isDirectory()) {
      total += await countFiles(full);
    } else {
      total += 1;
    }
  }
  return total;
}

async function main() {
  log("checking inputs…");
  const bundleEntry = await assertFile(entry, "pdf-entry source");
  const pdfCore = await assertFile(
    path.join(pdfjsRoot, "build", "pdf.mjs"),
    "pdfjs-dist core"
  );
  const pdfWorker = await assertFile(
    path.join(pdfjsRoot, "build", "pdf.worker.mjs"),
    "pdfjs-dist worker"
  );
  const cmapsDir = path.join(pdfjsRoot, "cmaps");
  const fontsDir = path.join(pdfjsRoot, "standard_fonts");
  if (!existsSync(cmapsDir)) fail(`Missing pdfjs-dist cmaps: ${cmapsDir}`);
  if (!existsSync(fontsDir)) {
    fail(`Missing pdfjs-dist standard_fonts: ${fontsDir}`);
  }

  log("recreating dist/reader-assets…");
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  log("bundling pdf.bundle.js (esm, browser)…");
  const result = await build({
    absWorkingDir: projectRoot,
    entryPoints: [entry],
    outfile: path.join(outDir, "pdf.bundle.js"),
    bundle: true,
    format: "esm",
    platform: "browser",
    target: ["chrome110", "edge110", "firefox110", "safari16"],
    minify: true,
    sourcemap: false,
    legalComments: "none",
    metafile: true,
    logLevel: "silent",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  });

  const inputs = Object.keys(result.metafile.inputs);
  const bundledPdfjs = inputs.some((input) =>
    input.replace(/\\/g, "/").includes("pdfjs-dist/build/pdf.mjs")
  );
  if (!bundledPdfjs) {
    fail("esbuild did not bundle pdfjs-dist into pdf.bundle.js");
  }

  if (result.warnings.length > 0) {
    for (const warning of result.warnings) {
      process.stderr.write(
        `[build-pdf] warning: ${warning.text} (${warning.location?.file ?? "?"})\n`
      );
    }
    fail(`esbuild reported ${result.warnings.length} warning(s)`);
  }

  const bundlePath = path.join(outDir, "pdf.bundle.js");
  const bundleSize = await sizeOf(bundlePath);
  if (bundleSize < MIN_BUNDLE_BYTES) {
    fail(
      `pdf.bundle.js is suspiciously small (${bundleSize} bytes, expected >= ${MIN_BUNDLE_BYTES})`
    );
  }

  // Sanity-check the ESM public surface; export names cannot be renamed by
  // minification, so this catches a wrong pnpm/npm install or a bad pin.
  const bundleSource = await readFile(bundlePath, "utf8");
  for (const exportName of ["GlobalWorkerOptions", "getDocument", "TextLayer", "PDFDataRangeTransport"]) {
    if (!new RegExp(`\\b${exportName}\\b`).test(bundleSource)) {
      fail(`pdf.bundle.js is missing the expected export \`${exportName}\``);
    }
  }

  log("copying pdf.worker.mjs…");
  const workerSize = await sizeOf(
    path.join(pdfjsRoot, "build", "pdf.worker.mjs")
  );
  if (workerSize < MIN_WORKER_BYTES) {
    fail(`pdfjs-dist worker is suspiciously small (${workerSize} bytes)`);
  }
  await copyFile(
    path.join(pdfjsRoot, "build", "pdf.worker.mjs"),
    path.join(outDir, "pdf.worker.mjs")
  );
  await assertFile(path.join(pdfjsRoot, 'build', 'pdf.renderer.mjs'), 'PDF renderer worker');
  await copyFile(path.join(pdfjsRoot, 'build', 'pdf.renderer.mjs'), path.join(outDir, 'pdf.renderer.mjs'));

  log("copying cmaps/ and standard_fonts/…");
  const copiedCMaps = await copyDirectory(
    cmapsDir,
    path.join(outDir, "cmaps"),
    "cmaps"
  );
  const copiedFonts = await copyDirectory(
    fontsDir,
    path.join(outDir, "standard_fonts"),
    "standard_fonts"
  );
  const cMapCount = await countFiles(copiedCMaps);
  const fontCount = await countFiles(copiedFonts);
  if (cMapCount < MIN_CMAPS) {
    fail(`expected at least ${MIN_CMAPS} CMaps, copied ${cMapCount}`);
  }
  if (fontCount < MIN_STANDARD_FONTS) {
    fail(
      `expected at least ${MIN_STANDARD_FONTS} standard font files, copied ${fontCount}`
    );
  }

  // Optional but recommended: image codecs / color profiles used by some PDFs.
  // The viewer points wasmUrl/iccUrl here, so copy them when present.
  let wasmCount = 0;
  let iccCount = 0;
  for (const [name, destinationName] of [
    ["wasm", "wasm"],
    ["iccs", "iccs"],
  ]) {
    const source = path.join(pdfjsRoot, name);
    if (!existsSync(source)) {
      log(`notice: pdfjs-dist has no ${name}/ directory, skipping`);
      continue;
    }
    const count = await countFiles(
      await copyDirectory(source, path.join(outDir, destinationName), name)
    );    if (name === "wasm") wasmCount = count;
    else iccCount = count;
  }

  const licensePath = path.join(pdfjsRoot, "LICENSE");
  if (existsSync(licensePath)) {
    await copyFile(licensePath, path.join(outDir, "PDFJS-LICENSE.txt"));
  }

  const formatSize = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  log("done.");
  log(
    `  pdf.bundle.js      ${formatSize(bundleSize)} (${inputs.length} inputs)`
  );
  log(`  pdf.worker.mjs     ${formatSize(workerSize)}`);
  log(`  cmaps/             ${cMapCount} files`);
  log(`  standard_fonts/    ${fontCount} files`);
  if (wasmCount) log(`  wasm/              ${wasmCount} files`);
  if (iccCount) log(`  iccs/              ${iccCount} files`);
  log(`  output             ${outDir}`);
  log(`  entry              ${bundleEntry} (pdfjs core ${formatSize(pdfCore)} before bundling)`);
}

main().catch((error) => {
  if (error && error.isBuildError) {
    process.stderr.write(`${error.message}\n`);
  } else {
    process.stderr.write(
      `[build-pdf] FAILED: ${error && error.stack ? error.stack : String(error)}\n`
    );
  }
  process.exitCode = 1;
});
