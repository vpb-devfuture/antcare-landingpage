const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width;
const H = img.height;

// Mask coordinates in full image:
// Box 1: Ant mascot
// Box 2: Antennae
// Box 3: ANTCare text
const mask = new Uint8Array(W * H);

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const isAntBody = (x >= 995 && x <= 1030 && y >= 539 && y <= 572);
    const isAntennae = (x >= 1013 && x <= 1025 && y >= 534 && y <= 539);
    const isText = (x >= 1026 && x <= 1066 && y >= 549 && y <= 568);

    if (isAntBody || isAntennae || isText) {
      mask[y * W + x] = 1;
    }
  }
}

// 1px dilation
const dilated = new Uint8Array(W * H);
for (let y = 530; y <= 576; y++) {
  for (let x = 990; x <= 1070; x++) {
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
    if (hit && x <= 1067) {
      dilated[y * W + x] = 1;
    }
  }
}

// 1. Solve Laplace for low-frequency base
const rGrid = new Float32Array(W * H);
const gGrid = new Float32Array(W * H);
const bGrid = new Float32Array(W * H);

for (let y = 525; y <= 580; y++) {
  for (let x = 985; x <= 1075; x++) {
    const idx = y * W + x;
    rGrid[idx] = img.data[idx * 4];
    gGrid[idx] = img.data[idx * 4 + 1];
    bGrid[idx] = img.data[idx * 4 + 2];
  }
}

// Laplace relaxation
for (let iter = 0; iter < 1500; iter++) {
  for (let y = 532; y <= 575; y++) {
    for (let x = 992; x <= 1068; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 1) {
        rGrid[idx] = 0.25 * (rGrid[idx - 1] + rGrid[idx + 1] + rGrid[idx - W] + rGrid[idx + W]);
        gGrid[idx] = 0.25 * (gGrid[idx - 1] + gGrid[idx + 1] + gGrid[idx - W] + gGrid[idx + W]);
        bGrid[idx] = 0.25 * (bGrid[idx - 1] + bGrid[idx + 1] + bGrid[idx - W] + bGrid[idx + W]);
      }
    }
  }
}

// 2. High-frequency texture from clean patch (x: 855 to 925, y: 530 to 575)
// Notice offset: x - 140 puts 995..1066 at 855..926!
// y - 0 puts 534..572 at 534..572!
const hfR = new Float32Array(W * H);
const hfG = new Float32Array(W * H);
const hfB = new Float32Array(W * H);

for (let y = 525; y <= 580; y++) {
  for (let x = 850; x <= 930; x++) {
    let sR = 0, sG = 0, sB = 0, wSum = 0;
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const weight = (dx === 0 && dy === 0) ? 4 : (Math.abs(dx) + Math.abs(dy) <= 2 ? 2 : 1);
        const sIdx = (y + dy) * W + (x + dx);
        sR += img.data[sIdx * 4] * weight;
        sG += img.data[sIdx * 4 + 1] * weight;
        sB += img.data[sIdx * 4 + 2] * weight;
        wSum += weight;
      }
    }
    const idx = y * W + x;
    hfR[idx] = img.data[idx * 4] - (sR / wSum);
    hfG[idx] = img.data[idx * 4 + 1] - (sG / wSum);
    hfB[idx] = img.data[idx * 4 + 2] - (sB / wSum);
  }
}

// 3. Create preview crop (250x250) of the chest
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
      // Source pixel in clean patch
      const srcX = x - 140;
      const srcY = y;
      const srcIdx = srcY * W + srcX;

      const r = Math.round(rGrid[idx] + hfR[srcIdx]);
      const g = Math.round(gGrid[idx] + hfG[srcIdx]);
      const b = Math.round(bGrid[idx] + hfB[srcIdx]);

      crop.data[cIdx] = Math.min(255, Math.max(0, r));
      crop.data[cIdx + 1] = Math.min(255, Math.max(0, g));
      crop.data[cIdx + 2] = Math.min(255, Math.max(0, b));
      crop.data[cIdx + 3] = 255;
    } else {
      crop.data[cIdx] = img.data[idx * 4];
      crop.data[cIdx + 1] = img.data[idx * 4 + 1];
      crop.data[cIdx + 2] = img.data[idx * 4 + 2];
      crop.data[cIdx + 3] = 255;
    }
  }
}

fs.writeFileSync('scratch/desktop_retouch_preview.png', PNG.sync.write(crop));
console.log('Saved scratch/desktop_retouch_preview.png');

