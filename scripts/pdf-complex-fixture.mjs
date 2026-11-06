import { deflateSync } from 'node:zlib';

// Reproducible workload, not a proxy for every textbook: real compressed image
// data, thousands of vector paths, transparency, text and alternating page sizes.
export function complexPdfFixture() {
  const width = 2048, height = 3072;
  const image = Buffer.alloc(width * height * 3);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 3;
    image[i] = (x * 13 + y * 7) & 255;
    image[i + 1] = (x ^ y) & 255;
    image[i + 2] = (x * y) & 255;
  }
  const compressed = deflateSync(image);
  const objects = [Buffer.from('<< /Type /Catalog /Pages 2 0 R >>'), null,
    Buffer.from('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'),
    Buffer.concat([Buffer.from(`<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /Length ${compressed.length} >>\nstream\n`), compressed, Buffer.from('\nendstream')]),
    Buffer.from('<< /Type /ExtGState /ca 0.25 /CA 0.25 >>')];
  const kids = [];
  for (let page = 1; page <= 18; page++) {
    kids.push(`${objects.length + 1} 0 R`);
    const w = page % 2 ? 612 : 792, h = page % 2 ? 792 : 612;
    let content = 'q\n';
    if (page % 3 === 0) content += `${w} 0 0 ${h} 0 0 cm /Scan Do\n`;
    else {
      content += '/Alpha gs\n0.3 w\n';
      for (let n = 0; n < 24000; n++) {
        const x = n * 17 % w, y = n * 23 % h;
        content += `${(n % 10) / 10} 0.3 0.7 RG ${x} ${y} m ${x + 8} ${y + 4} ${x - 3} ${y + 7} ${x + 2} ${y + 10} c S\n`;
      }
    }
    content += `Q\nBT /F1 16 Tf 40 ${h - 40} Td (Complex regression page ${page}) Tj ET\n`;
    const stream = deflateSync(Buffer.from(content));
    objects.push(Buffer.from(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w} ${h}] /Resources << /Font << /F1 3 0 R >> /XObject << /Scan 4 0 R >> /ExtGState << /Alpha 5 0 R >> >> /Contents ${objects.length + 2} 0 R >>`));
    objects.push(Buffer.concat([Buffer.from(`<< /Filter /FlateDecode /Length ${stream.length} >>\nstream\n`), stream, Buffer.from('\nendstream')]));
  }
  objects[1] = Buffer.from(`<< /Type /Pages /Kids [${kids.join(' ')}] /Count ${kids.length} >>`);
  const chunks = [Buffer.from('%PDF-1.4\n')], offsets = [0]; let position = chunks[0].length;
  for (let index = 0; index < objects.length; index++) {
    offsets.push(position);
    const item = Buffer.concat([Buffer.from(`${index + 1} 0 obj\n`), objects[index], Buffer.from('\nendobj\n')]);
    chunks.push(item); position += item.length;
  }
  chunks.push(Buffer.from(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map(n => `${String(n).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${position}\n%%EOF\n`));
  return Buffer.concat(chunks);
}
