#!/usr/bin/env node
/**
 * Generates test/fixtures/pdf-simple.pdf — a 3-line, one-page PDF used by the
 * Node-side PDF engine test. Keeping the generator next to the fixture makes
 * the binary reproducible: `node tests/pdf-fixture-gen.mjs`.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(here, "../test/fixtures");
const outputFile = path.join(outputDir, "pdf-simple.pdf");

const content = `BT
/F1 24 Tf
72 700 Td
(Hello dsh-reader PDF) Tj
ET
BT
/F1 12 Tf
72 660 Td
(First paragraph line one.) Tj
0 -16 Td
(First paragraph line two.) Tj
0 -34 Td
(Second paragraph starts here.) Tj
ET
`;

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] " +
    "/Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}endstream`,
];

const chunks = ["%PDF-1.4\n%\xE2\xE3\xCF\xD3\n"];
const offsets = [0];
let position = Buffer.byteLength(chunks[0], "latin1");

objects.forEach((body, index) => {
  offsets.push(position);
  const serialized = `${index + 1} 0 obj\n${body}\nendobj\n`;
  chunks.push(serialized);
  position += Buffer.byteLength(serialized, "latin1");
});

const xrefOffset = position;
const pad = (value) => String(value).padStart(10, "0");
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let index = 1; index <= objects.length; index += 1) {
  xref += `${pad(offsets[index])} 00000 n \n`;
}
const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

const pdf = Buffer.from(chunks.join("") + xref + trailer, "latin1");
await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, pdf);

process.stdout.write(
  `[pdf-fixture] wrote ${outputFile} (${pdf.length} bytes, xref @ ${xrefOffset})\n`
);
