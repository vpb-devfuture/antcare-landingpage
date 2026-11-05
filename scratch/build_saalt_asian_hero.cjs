const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const src = jpeg.decode(raw);

// Target dimensions: 2160 x 856 (same aspect ratio as Saalt 2000x856)
const targetW = 2160;
const targetH = 856;

// Scale factor
const scale = targetH / src.height; // ~1.11458
const scaledW = Math.round(src.width * scale); // ~1534
const startX = targetW - scaledW; // ~626px from left

const outBuf = Buffer.alloc(targetW * targetH * 4);

for (let y = 0; y < targetH; y++) {
  const srcY = Math.min(src.height - 1, y / scale);
  const srcY0 = Math.floor(srcY);
  const srcY1 = Math.min(src.height - 1, srcY0 + 1);
  const dy = srcY - srcY0;

  // The exact background pixel at this row on the left edge (sample x=0, 1, 2 average)
  let edgeR = 0, edgeG = 0, edgeB = 0;
  for (let sx = 0; sx < 5; sx++) {
    const idx0 = (srcY0 * src.width + sx) * 4;
    const idx1 = (srcY1 * src.width + sx) * 4;
    edgeR += (1 - dy) * src.data[idx0] + dy * src.data[idx1];
    edgeG += (1 - dy) * src.data[idx0 + 1] + dy * src.data[idx1 + 1];
    edgeB += (1 - dy) * src.data[idx0 + 2] + dy * src.data[idx1 + 2];
  }
  edgeR = Math.round(edgeR / 5);
  edgeG = Math.round(edgeG / 5);
  edgeB = Math.round(edgeB / 5);

  // Fill left empty space with this EXACT row color
  for (let x = 0; x < startX; x++) {
    const outIdx = (y * targetW + x) * 4;
    outBuf[outIdx] = edgeR;
    outBuf[outIdx + 1] = edgeG;
    outBuf[outIdx + 2] = edgeB;
    outBuf[outIdx + 3] = 255;
  }

  // Copy scaled source pixels
  for (let x = startX; x < targetW; x++) {
    const outIdx = (y * targetW + x) * 4;
    const srcX = Math.min(src.width - 1, (x - startX) / scale);
    const srcX0 = Math.floor(srcX);
    const srcX1 = Math.min(src.width - 1, srcX0 + 1);
    const dx = srcX - srcX0;

    const idx00 = (srcY0 * src.width + srcX0) * 4;
    const idx10 = (srcY0 * src.width + srcX1) * 4;
    const idx01 = (srcY1 * src.width + srcX0) * 4;
    const idx11 = (srcY1 * src.width + srcX1) * 4;

    const r = (1 - dx) * (1 - dy) * src.data[idx00] +
              dx * (1 - dy) * src.data[idx10] +
              (1 - dx) * dy * src.data[idx01] +
              dx * dy * src.data[idx11];

    const g = (1 - dx) * (1 - dy) * src.data[idx00 + 1] +
              dx * (1 - dy) * src.data[idx10 + 1] +
              (1 - dx) * dy * src.data[idx01 + 1] +
              dx * dy * src.data[idx11 + 1];

    const b = (1 - dx) * (1 - dy) * src.data[idx00 + 2] +
              dx * (1 - dy) * src.data[idx10 + 2] +
              (1 - dx) * dy * src.data[idx01 + 2] +
              dx * dy * src.data[idx11 + 2];

    outBuf[outIdx] = Math.round(r);
    outBuf[outIdx + 1] = Math.round(g);
    outBuf[outIdx + 2] = Math.round(b);
    outBuf[outIdx + 3] = 255;
  }
}

const encoded = jpeg.encode({ data: outBuf, width: targetW, height: targetH }, 95);
fs.writeFileSync('public/images/products/hero-saalt-style-asian.jpg', encoded.data);
console.log('Saved seamless hero-saalt-style-asian.jpg, size:', encoded.data.length);
