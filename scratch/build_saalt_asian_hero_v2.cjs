const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const src = jpeg.decode(raw);

// Canvas dimensions: 2320 x 856
const targetW = 2320;
const targetH = 856;

// Scale: 10% smaller than full height
const scale = (targetH / src.height) * 0.90; // ~1.0031
const scaledW = Math.round(src.width * scale); // 1380
const scaledH = Math.round(src.height * scale); // 770

// Push to right:
const startX = targetW - scaledW; // 2320 - 1380 = 940px (left empty space is ~41%)
// Align to bottom edge:
const startY = targetH - scaledH; // 86px

console.log(`target: ${targetW}x${targetH}, scaled: ${scaledW}x${scaledH}, startX: ${startX}, startY: ${startY}`);

const outBuf = Buffer.alloc(targetW * targetH * 4);

// Left edge background colors for each source row
const leftEdgeColors = [];
for (let sy = 0; sy < src.height; sy++) {
  let r = 0, g = 0, b = 0;
  for (let sx = 0; sx < 6; sx++) {
    const idx = (sy * src.width + sx) * 4;
    r += src.data[idx];
    g += src.data[idx + 1];
    b += src.data[idx + 2];
  }
  leftEdgeColors.push({
    r: Math.round(r / 6),
    g: Math.round(g / 6),
    b: Math.round(b / 6)
  });
}

// Pure studio background color for top/left
const studioBg = { r: 236, g: 235, b: 229 };

for (let y = 0; y < targetH; y++) {
  const inSourceY = (y >= startY);
  const srcY = Math.max(0, Math.min(src.height - 1, (y - startY) / scale));
  const srcY0 = Math.floor(srcY);
  const srcY1 = Math.min(src.height - 1, srcY0 + 1);
  const dy = srcY - srcY0;

  // The row color on the left
  const rowColor = inSourceY ? leftEdgeColors[Math.round(srcY)] : studioBg;

  // 1. Left space: x < startX
  for (let x = 0; x < startX; x++) {
    const outIdx = (y * targetW + x) * 4;
    outBuf[outIdx] = rowColor.r;
    outBuf[outIdx + 1] = rowColor.g;
    outBuf[outIdx + 2] = rowColor.b;
    outBuf[outIdx + 3] = 255;
  }

  // 2. Right space: startX <= x < targetW
  for (let x = startX; x < targetW; x++) {
    const outIdx = (y * targetW + x) * 4;
    const srcX = Math.max(0, Math.min(src.width - 1, (x - startX) / scale));

    if (!inSourceY) {
      // Top headroom: clean studio background
      outBuf[outIdx] = studioBg.r;
      outBuf[outIdx + 1] = studioBg.g;
      outBuf[outIdx + 2] = studioBg.b;
      outBuf[outIdx + 3] = 255;
    } else {
      // Inside source area: bilinear interpolation
      const srcX0 = Math.floor(srcX);
      const srcX1 = Math.min(src.width - 1, srcX0 + 1);
      const dx = srcX - srcX0;

      const idx00 = (srcY0 * src.width + srcX0) * 4;
      const idx10 = (srcY0 * src.width + srcX1) * 4;
      const idx01 = (srcY1 * src.width + srcX0) * 4;
      const idx11 = (srcY1 * src.width + srcX1) * 4;

      let r = (1 - dx) * (1 - dy) * src.data[idx00] +
              dx * (1 - dy) * src.data[idx10] +
              (1 - dx) * dy * src.data[idx01] +
              dx * dy * src.data[idx11];

      let g = (1 - dx) * (1 - dy) * src.data[idx00 + 1] +
              dx * (1 - dy) * src.data[idx10 + 1] +
              (1 - dx) * dy * src.data[idx01 + 1] +
              dx * dy * src.data[idx11 + 1];

      let b = (1 - dx) * (1 - dy) * src.data[idx00 + 2] +
              dx * (1 - dy) * src.data[idx10 + 2] +
              (1 - dx) * dy * src.data[idx01 + 2] +
              dx * dy * src.data[idx11 + 2];

      // Soft feathering at the left seam (first 40px)
      const distFromSeam = x - startX;
      if (distFromSeam < 40) {
        const blend = distFromSeam / 40;
        const smoothBlend = blend * blend * (3 - 2 * blend);
        r = rowColor.r * (1 - smoothBlend) + r * smoothBlend;
        g = rowColor.g * (1 - smoothBlend) + g * smoothBlend;
        b = rowColor.b * (1 - smoothBlend) + b * smoothBlend;
      }

      outBuf[outIdx] = Math.round(r);
      outBuf[outIdx + 1] = Math.round(g);
      outBuf[outIdx + 2] = Math.round(b);
      outBuf[outIdx + 3] = 255;
    }
  }
}

const encoded = jpeg.encode({ data: outBuf, width: targetW, height: targetH }, 95);
fs.writeFileSync('public/images/products/hero-saalt-style-asian.jpg', encoded.data);
console.log('Successfully saved clean hero-saalt-style-asian.jpg! Size:', encoded.data.length);
