const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width, H = img.height;

// 1. Precise mask of logo strokes
const mask = new Uint8Array(W * H);
for (let y = 533; y <= 572; y++) {
  for (let x = 995; x <= 1070; x++) {
    const idx = (y * W + x) * 4;
    const r = img.data[idx];
    const g = img.data[idx+1];
    const b = img.data[idx+2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const bMinusR = b - r;
    const rMinusG = r - g;

    const isCleanFabric = (
      bMinusR >= 16 && bMinusR <= 50 &&
      rMinusG >= 10 && rMinusG <= 35 &&
      lum >= 182 && lum <= 218 &&
      r >= 186 && r <= 220 &&
      g >= 168 && g <= 200 &&
      b >= 222 && b <= 255
    );
    if (!isCleanFabric) mask[y * W + x] = 1;
  }
}

// 2. Smooth feather weight (1-2px)
const weight = new Float32Array(W * H);
for (let y = 531; y <= 574; y++) {
  for (let x = 993; x <= 1072; x++) {
    let sum = 0, count = 0;
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const d2 = dx*dx + dy*dy;
        if (d2 <= 4) {
          const w = Math.exp(-d2 / 1.5);
          sum += mask[(y + dy) * W + (x + dx)] * w;
          count += w;
        }
      }
    }
    weight[y * W + x] = sum / count;
  }
}

// 3. Fitted 2D lighting planes
const PR = (x, y) => 0.149278 * x + 0.516067 * y - 237.282571;
const PG = (x, y) => 0.111676 * x + 0.428161 * y - 172.140335;
const PB = (x, y) => -0.004967 * x + 0.150454 * y + 153.475792;

// Source offset dx = -120
const dx = -120;

// 4. Output crop (250x250)
const cropW = 250, cropH = 250;
const startCropX = 890, startCropY = 460;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startCropX + cx;
    const y = startCropY + cy;
    const idx = y * W + x;
    const cIdx = (cy * cropW + cx) * 4;

    const wVal = weight[idx];
    if (wVal > 0.01) {
      const srcX = x + dx;
      const srcY = y;
      const srcIdx = (srcY * W + srcX) * 4;

      // Authentic photographic texture = pixel - plane at source
      const textR = img.data[srcIdx] - PR(srcX, srcY);
      const textG = img.data[srcIdx + 1] - PG(srcX, srcY);
      const textB = img.data[srcIdx + 2] - PB(srcX, srcY);

      // Reconstructed pixel = plane at target + authentic texture
      const synthR = PR(x, y) + textR;
      const synthG = PG(x, y) + textG;
      const synthB = PB(x, y) + textB;

      // Original pixel
      const origR = img.data[idx * 4];
      const origG = img.data[idx * 4 + 1];
      const origB = img.data[idx * 4 + 2];

      // Alpha blend
      const finalR = (1 - wVal) * origR + wVal * synthR;
      const finalG = (1 - wVal) * origG + wVal * synthG;
      const finalB = (1 - wVal) * origB + wVal * synthB;

      crop.data[cIdx] = Math.min(255, Math.max(0, Math.round(finalR)));
      crop.data[cIdx + 1] = Math.min(255, Math.max(0, Math.round(finalG)));
      crop.data[cIdx + 2] = Math.min(255, Math.max(0, Math.round(finalB)));
      crop.data[cIdx + 3] = 255;
    } else {
      crop.data[cIdx] = img.data[idx * 4];
      crop.data[cIdx + 1] = img.data[idx * 4 + 1];
      crop.data[cIdx + 2] = img.data[idx * 4 + 2];
      crop.data[cIdx + 3] = 255;
    }
  }
}

fs.writeFileSync('scratch/plane_texture_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/plane_texture_crop.png');

