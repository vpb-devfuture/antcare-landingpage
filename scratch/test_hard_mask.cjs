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

// 2. Dilate by 1px so all anti-aliased edge pixels are included
const dilated = new Uint8Array(W * H);
for (let y = 531; y <= 574; y++) {
  for (let x = 993; x <= 1072; x++) {
    let hit = false;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (mask[(y + dy) * W + (x + dx)] === 1) {
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    if (hit) dilated[y * W + x] = 1;
  }
}

// 3. Fitted 2D lighting planes
const PR = (x, y) => 0.149278 * x + 0.516067 * y - 237.282571;
const PG = (x, y) => 0.111676 * x + 0.428161 * y - 172.140335;
const PB = (x, y) => -0.004967 * x + 0.150454 * y + 153.475792;

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

    if (dilated[idx] === 1) {
      const srcX = x + dx;
      const srcY = y;
      const srcIdx = (srcY * W + srcX) * 4;

      const textR = img.data[srcIdx] - PR(srcX, srcY);
      const textG = img.data[srcIdx + 1] - PG(srcX, srcY);
      const textB = img.data[srcIdx + 2] - PB(srcX, srcY);

      const synthR = PR(x, y) + textR;
      const synthG = PG(x, y) + textG;
      const synthB = PB(x, y) + textB;

      crop.data[cIdx] = Math.min(255, Math.max(0, Math.round(synthR)));
      crop.data[cIdx + 1] = Math.min(255, Math.max(0, Math.round(synthG)));
      crop.data[cIdx + 2] = Math.min(255, Math.max(0, Math.round(synthB)));
      crop.data[cIdx + 3] = 255;
    } else {
      crop.data[cIdx] = img.data[idx * 4];
      crop.data[cIdx + 1] = img.data[idx * 4 + 1];
      crop.data[cIdx + 2] = img.data[idx * 4 + 2];
      crop.data[cIdx + 3] = 255;
    }
  }
}

fs.writeFileSync('scratch/hard_mask_texture_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/hard_mask_texture_crop.png');

