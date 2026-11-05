const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const src = jpeg.decode(raw);
console.log('Source size:', src.width, src.height);

// Step 1: Apply Unsharp Mask sharpening on source to make details razor sharp
const sharpSrc = {
  width: src.width,
  height: src.height,
  data: Buffer.alloc(src.width * src.height * 4)
};

const sharpenStrength = 0.55; // Crisp, professional enhancement without halo artifacts

for (let y = 0; y < src.height; y++) {
  const yPrev = Math.max(0, y - 1);
  const yNext = Math.min(src.height - 1, y + 1);

  for (let x = 0; x < src.width; x++) {
    const xPrev = Math.max(0, x - 1);
    const xNext = Math.min(src.width - 1, x + 1);

    const idx = (y * src.width + x) * 4;

    for (let c = 0; c < 3; c++) {
      const center = src.data[idx + c];
      const top = src.data[(yPrev * src.width + x) * 4 + c];
      const bottom = src.data[(yNext * src.width + x) * 4 + c];
      const left = src.data[(y * src.width + xPrev) * 4 + c];
      const right = src.data[(y * src.width + xNext) * 4 + c];

      const avgNeighbor = (top + bottom + left + right) * 0.25;
      const detail = center - avgNeighbor;

      const sharpened = center + sharpenStrength * detail;
      sharpSrc.data[idx + c] = Math.max(0, Math.min(255, Math.round(sharpened)));
    }
    sharpSrc.data[idx + 3] = 255;
  }
}

// Step 2: Canvas construction
// Target canvas: 2320 x 856
const targetW = 2320;
const targetH = 856;

// Scale: 10% smaller than original height
const scale = (targetH / src.height) * 0.90; // ~1.0031
const scaledW = Math.round(src.width * scale); // 1380
const scaledH = Math.round(src.height * scale); // 770

// In source, rightmost woman ended at x = 1296 (79px of empty space).
// Let's shift the women to the right by 65px (in source coords, ~65px * scale ≈ 65px)
// so her back/elbow is ~15px from the right canvas edge!
const rightShiftPx = Math.round(65 * scale); // ~65px
const startX = (targetW - scaledW) + rightShiftPx; // 940 + 65 = 1005px!
const startY = targetH - scaledH; // 86px

console.log(`target: ${targetW}x${targetH}, scaled: ${scaledW}x${scaledH}, startX: ${startX} (left space: ${Math.round(startX / targetW * 100)}%), startY: ${startY}`);

const outBuf = Buffer.alloc(targetW * targetH * 4);

// Sample left edge background color per row
const leftEdgeColors = [];
for (let sy = 0; sy < sharpSrc.height; sy++) {
  let r = 0, g = 0, b = 0;
  for (let sx = 0; sx < 6; sx++) {
    const idx = (sy * sharpSrc.width + sx) * 4;
    r += sharpSrc.data[idx];
    g += sharpSrc.data[idx + 1];
    b += sharpSrc.data[idx + 2];
  }
  leftEdgeColors.push({
    r: Math.round(r / 6),
    g: Math.round(g / 6),
    b: Math.round(b / 6)
  });
}

// Studio background
const studioBg = { r: 236, g: 235, b: 229 };

for (let y = 0; y < targetH; y++) {
  const inSourceY = (y >= startY);
  const srcY = Math.max(0, Math.min(sharpSrc.height - 1, (y - startY) / scale));
  const srcY0 = Math.floor(srcY);
  const srcY1 = Math.min(sharpSrc.height - 1, srcY0 + 1);
  const dy = srcY - srcY0;

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
    const srcX = (x - startX) / scale;

    if (!inSourceY) {
      outBuf[outIdx] = studioBg.r;
      outBuf[outIdx + 1] = studioBg.g;
      outBuf[outIdx + 2] = studioBg.b;
      outBuf[outIdx + 3] = 255;
    } else if (srcX >= sharpSrc.width) {
      // Past right edge of source (if any)
      const lastColIdx = (Math.round(srcY) * sharpSrc.width + (sharpSrc.width - 1)) * 4;
      outBuf[outIdx] = sharpSrc.data[lastColIdx];
      outBuf[outIdx + 1] = sharpSrc.data[lastColIdx + 1];
      outBuf[outIdx + 2] = sharpSrc.data[lastColIdx + 2];
      outBuf[outIdx + 3] = 255;
    } else {
      // Bilinear interpolation from sharpened source
      const srcX0 = Math.floor(srcX);
      const srcX1 = Math.min(sharpSrc.width - 1, srcX0 + 1);
      const dx = srcX - srcX0;

      const idx00 = (srcY0 * sharpSrc.width + srcX0) * 4;
      const idx10 = (srcY0 * sharpSrc.width + srcX1) * 4;
      const idx01 = (srcY1 * sharpSrc.width + srcX0) * 4;
      const idx11 = (srcY1 * sharpSrc.width + srcX1) * 4;

      let r = (1 - dx) * (1 - dy) * sharpSrc.data[idx00] +
              dx * (1 - dy) * sharpSrc.data[idx10] +
              (1 - dx) * dy * sharpSrc.data[idx01] +
              dx * dy * sharpSrc.data[idx11];

      let g = (1 - dx) * (1 - dy) * sharpSrc.data[idx00 + 1] +
              dx * (1 - dy) * sharpSrc.data[idx10 + 1] +
              (1 - dx) * dy * sharpSrc.data[idx01 + 1] +
              dx * dy * sharpSrc.data[idx11 + 1];

      let b = (1 - dx) * (1 - dy) * sharpSrc.data[idx00 + 2] +
              dx * (1 - dy) * sharpSrc.data[idx10 + 2] +
              (1 - dx) * dy * sharpSrc.data[idx01 + 2] +
              dx * dy * sharpSrc.data[idx11 + 2];

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

// Encode with maximum quality (98)
const encoded = jpeg.encode({ data: outBuf, width: targetW, height: targetH }, 98);
fs.writeFileSync('public/images/products/hero-saalt-style-asian.jpg', encoded.data);
console.log('Successfully saved sharpened and shifted hero-saalt-style-asian.jpg! Size:', encoded.data.length);

