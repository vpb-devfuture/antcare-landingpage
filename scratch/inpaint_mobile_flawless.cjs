const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

const raw = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const mob = jpeg.decode(raw, { useTArray: true });
const W = mob.width, H = mob.height;

function isCleanFabric(r, g, b) {
  const bMinusR = b - r;
  const rMinusG = r - g;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  return (
    r >= 180 && r <= 220 &&
    g >= 160 && g <= 200 &&
    b >= 215 && b <= 255 &&
    bMinusR >= 16 && bMinusR <= 50 &&
    rMinusG >= 8 && rMinusG <= 35 &&
    lum >= 175 && lum <= 218
  );
}

// 1. Precise mask
const mask = new Uint8Array(W * H);
let count = 0;
for (let y = 465; y <= 508; y++) {
  for (let x = 110; x <= 195; x++) {
    const inAnt = (x >= 110 && x <= 145 && y >= 465 && y <= 508);
    const inText = (x >= 142 && x <= 195 && y >= 480 && y <= 503);
    if (inAnt || inText) {
      const idx = (y * W + x) * 4;
      const r = mob.data[idx];
      const g = mob.data[idx+1];
      const b = mob.data[idx+2];
      if (!isCleanFabric(r, g, b)) {
        mask[y * W + x] = 1;
        count++;
      }
    }
  }
}
console.log('Mobile non-fabric logo pixels:', count);

// 2. Dilate by 1px
const dilated = new Uint8Array(W * H);
for (let y = 463; y <= 510; y++) {
  for (let x = 108; x <= 197; x++) {
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

// 3. Poisson cloning with dx = -55
const dx = -55;
const uR = new Float32Array(W * H);
const uG = new Float32Array(W * H);
const uB = new Float32Array(W * H);

for (let y = 455; y <= 515; y++) {
  for (let x = 100; x <= 205; x++) {
    const idx = y * W + x;
    const sIdx = y * W + (x + dx);
    uR[idx] = mob.data[idx * 4] - mob.data[sIdx * 4];
    uG[idx] = mob.data[idx * 4 + 1] - mob.data[sIdx * 4 + 1];
    uB[idx] = mob.data[idx * 4 + 2] - mob.data[sIdx * 4 + 2];
  }
}

for (let iter = 0; iter < 500; iter++) {
  for (let y = 463; y <= 510; y++) {
    for (let x = 108; x <= 197; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 1) {
        uR[idx] = 0.25 * (uR[idx - 1] + uR[idx + 1] + uR[idx - W] + uR[idx + W]);
        uG[idx] = 0.25 * (uG[idx - 1] + uG[idx + 1] + uG[idx - W] + uG[idx + W]);
        uB[idx] = 0.25 * (uB[idx - 1] + uB[idx + 1] + uB[idx - W] + uB[idx + W]);
      }
    }
  }
}

for (let y = 463; y <= 510; y++) {
  for (let x = 108; x <= 197; x++) {
    const idx = y * W + x;
    if (dilated[idx] === 1) {
      const srcIdx = (y * W + (x + dx)) * 4;
      const r = Math.round(mob.data[srcIdx] + uR[idx]);
      const g = Math.round(mob.data[srcIdx + 1] + uG[idx]);
      const b = Math.round(mob.data[srcIdx + 2] + uB[idx]);

      mob.data[idx * 4] = Math.min(255, Math.max(0, r));
      mob.data[idx * 4 + 1] = Math.min(255, Math.max(0, g));
      mob.data[idx * 4 + 2] = Math.min(255, Math.max(0, b));
    }
  }
}

// Save crop for inspection (180x180)
const cropW = 180, cropH = 180;
const startCropX = 60, startCropY = 400;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startCropX + cx;
    const y = startCropY + cy;
    const sIdx = (y * W + x) * 4;
    const dIdx = (cy * cropW + cx) * 4;
    crop.data[dIdx] = mob.data[sIdx];
    crop.data[dIdx + 1] = mob.data[sIdx + 1];
    crop.data[dIdx + 2] = mob.data[sIdx + 2];
    crop.data[dIdx + 3] = 255;
  }
}

fs.writeFileSync('scratch/mobile_flawless_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/mobile_flawless_crop.png');

const encoded = jpeg.encode(mob, 92);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Saved public/images/hero-bg-mobile.jpg!');

