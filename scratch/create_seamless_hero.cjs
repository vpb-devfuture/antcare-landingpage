const fs = require('fs');
const jpeg = require('jpeg-js');
const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const decoded = jpeg.decode(raw);

console.log('Original size:', decoded.width, decoded.height);

// We want to:
// 1. Crop 25px off the top to push the women up higher and reduce excessive headroom
// 2. Scale / extend smoothly to #ECEBE5
// Background target color: RGB(236, 235, 229) -> #ECEBE5
const bgR = 236, bgG = 235, bgB = 229;

const cropTop = 20; // trim 20px of empty space at the top
const newH = decoded.height - cropTop;
const newW = decoded.width;

const outBuf = Buffer.alloc(newW * newH * 4);

for (let y = 0; y < newH; y++) {
  const srcY = y + cropTop;
  for (let x = 0; x < newW; x++) {
    const srcIdx = (srcY * decoded.width + x) * 4;
    const outIdx = (y * newW + x) * 4;

    let r = decoded.data[srcIdx];
    let g = decoded.data[srcIdx+1];
    let b = decoded.data[srcIdx+2];

    // Left edge feathering: left 60px fade smoothly into exact (bgR, bgG, bgB)
    if (x < 60) {
      const alpha = x / 60; // 0 at left edge, 1 at 60px
      const smoothAlpha = alpha * alpha * (3 - 2 * alpha);
      r = Math.round(bgR * (1 - smoothAlpha) + r * smoothAlpha);
      g = Math.round(bgG * (1 - smoothAlpha) + g * smoothAlpha);
      b = Math.round(bgB * (1 - smoothAlpha) + b * smoothAlpha);
    }

    // Top edge feathering: top 15px fade smoothly into exact (bgR, bgG, bgB)
    if (y < 15) {
      const alpha = y / 15;
      const smoothAlpha = alpha * alpha * (3 - 2 * alpha);
      r = Math.round(bgR * (1 - smoothAlpha) + r * smoothAlpha);
      g = Math.round(bgG * (1 - smoothAlpha) + g * smoothAlpha);
      b = Math.round(bgB * (1 - smoothAlpha) + b * smoothAlpha);
    }

    // Bottom edge feathering: bottom 30px fade smoothly into exact (bgR, bgG, bgB)
    if (y > newH - 30) {
      const alpha = (newH - 1 - y) / 30;
      const smoothAlpha = alpha * alpha * (3 - 2 * alpha);
      r = Math.round(bgR * (1 - smoothAlpha) + r * smoothAlpha);
      g = Math.round(bgG * (1 - smoothAlpha) + g * smoothAlpha);
      b = Math.round(bgB * (1 - smoothAlpha) + b * smoothAlpha);
    }

    outBuf[outIdx] = r;
    outBuf[outIdx+1] = g;
    outBuf[outIdx+2] = b;
    outBuf[outIdx+3] = 255;
  }
}

const encoded = jpeg.encode({ data: outBuf, width: newW, height: newH }, 94);
fs.writeFileSync('public/images/products/hero-asian-seamless.jpg', encoded.data);
console.log('Saved hero-asian-seamless.jpg, size:', encoded.data.length);

