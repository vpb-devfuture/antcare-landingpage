const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width, H = img.height;

// 1. Precise positive mask of logo strokes ONLY
const mask = new Uint8Array(W * H);

for (let y = 532; y <= 571; y++) {
  for (let x = 995; x <= 1065; x++) {
    const idx = (y * W + x) * 4;
    const r = img.data[idx];
    const g = img.data[idx+1];
    const b = img.data[idx+2];

    const isOrange = (r > 185 && b < 135 && (r - b > 45));
    const isDarkPurple = (r < 155 && g < 140 && b > 70 && (r < 135 || (b - r > 10 && r < 150)));
    const isBadgeWhite = (r > 195 && g > 185 && b > 195 && Math.abs(r - b) < 22 && x <= 1025);
    const isRedCross = (r > 150 && g < 115 && b < 115 && x <= 1025);

    if (isOrange || isDarkPurple || isBadgeWhite || isRedCross) {
      mask[y * W + x] = 1;
    }
  }
}

// 2. Dilate by 1px strictly to catch anti-aliased edge pixels
const dilated = new Uint8Array(W * H);
for (let y = 531; y <= 572; y++) {
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
    if (hit && x <= 1066) dilated[y * W + x] = 1;
  }
}

// 3. Poisson cloning with dx = -120
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

// Solve Laplace equation for u: 500 iterations is plenty for 1-4px strokes
for (let iter = 0; iter < 500; iter++) {
  for (let y = 531; y <= 572; y++) {
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
      const srcIdx = (y * W + (x + dx)) * 4;
      const r = Math.round(img.data[srcIdx] + uR[idx]);
      const g = Math.round(img.data[srcIdx + 1] + uG[idx]);
      const b = Math.round(img.data[srcIdx + 2] + uB[idx]);

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

fs.writeFileSync('scratch/pinpoint_poisson_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/pinpoint_poisson_crop.png');

