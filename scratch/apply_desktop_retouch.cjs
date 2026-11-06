const fs = require('fs');
const { PNG } = require('pngjs');

// 1. Read clean original
const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width, H = img.height;

function isCleanFabric(r, g, b) {
  const bMinusR = b - r;
  const rMinusG = r - g;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  return (
    r >= 185 && r <= 220 &&
    g >= 165 && g <= 200 &&
    b >= 218 && b <= 255 &&
    bMinusR >= 18 && bMinusR <= 48 &&
    rMinusG >= 10 && rMinusG <= 35 &&
    lum >= 180 && lum <= 218
  );
}

// 2. Precise mask
const mask = new Uint8Array(W * H);
for (let y = 533; y <= 570; y++) {
  for (let x = 995; x <= 1065; x++) {
    const inAnt = (x >= 995 && x <= 1025 && y >= 533 && y <= 570);
    const inText = (x >= 1025 && x <= 1065 && y >= 545 && y <= 566);
    if (inAnt || inText) {
      const idx = (y * W + x) * 4;
      const r = img.data[idx];
      const g = img.data[idx+1];
      const b = img.data[idx+2];
      if (!isCleanFabric(r, g, b)) {
        mask[y * W + x] = 1;
      }
    }
  }
}

// 3. Dilate by 1px
const dilated = new Uint8Array(W * H);
for (let y = 531; y <= 571; y++) {
  for (let x = 994; x <= 1066; x++) {
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

// 4. Poisson cloning with dx = -120
const dx = -120;
const uR = new Float32Array(W * H);
const uG = new Float32Array(W * H);
const uB = new Float32Array(W * H);

for (let y = 525; y <= 575; y++) {
  for (let x = 985; x <= 1075; x++) {
    const idx = y * W + x;
    const sIdx = y * W + (x + dx);
    uR[idx] = img.data[idx * 4] - img.data[sIdx * 4];
    uG[idx] = img.data[idx * 4 + 1] - img.data[sIdx * 4 + 1];
    uB[idx] = img.data[idx * 4 + 2] - img.data[sIdx * 4 + 2];
  }
}

for (let iter = 0; iter < 600; iter++) {
  for (let y = 531; y <= 571; y++) {
    for (let x = 994; x <= 1066; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 1) {
        uR[idx] = 0.25 * (uR[idx - 1] + uR[idx + 1] + uR[idx - W] + uR[idx + W]);
        uG[idx] = 0.25 * (uG[idx - 1] + uG[idx + 1] + uG[idx - W] + uG[idx + W]);
        uB[idx] = 0.25 * (uB[idx - 1] + uB[idx + 1] + uB[idx - W] + uB[idx + W]);
      }
    }
  }
}

// 5. Apply in-place to img
for (let y = 531; y <= 571; y++) {
  for (let x = 994; x <= 1066; x++) {
    const idx = y * W + x;
    if (dilated[idx] === 1) {
      const srcIdx = (y * W + (x + dx)) * 4;
      const r = Math.round(img.data[srcIdx] + uR[idx]);
      const g = Math.round(img.data[srcIdx + 1] + uG[idx]);
      const b = Math.round(img.data[srcIdx + 2] + uB[idx]);

      img.data[idx * 4] = Math.min(255, Math.max(0, r));
      img.data[idx * 4 + 1] = Math.min(255, Math.max(0, g));
      img.data[idx * 4 + 2] = Math.min(255, Math.max(0, b));
    }
  }
}

// Crop full upper body of the young woman (400x500)
const cropW = 400, cropH = 500;
const startCropX = 750, startCropY = 300;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startCropX + cx;
    const y = startCropY + cy;
    const sIdx = (y * W + x) * 4;
    const dIdx = (cy * cropW + cx) * 4;
    crop.data[dIdx] = img.data[sIdx];
    crop.data[dIdx + 1] = img.data[sIdx + 1];
    crop.data[dIdx + 2] = img.data[sIdx + 2];
    crop.data[dIdx + 3] = 255;
  }
}

fs.writeFileSync('scratch/full_woman_retouched.png', PNG.sync.write(crop));
console.log('Saved scratch/full_woman_retouched.png');

