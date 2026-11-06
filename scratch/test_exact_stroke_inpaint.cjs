const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width;
const H = img.height;

// 1. Precise pixel-level mask of logo strokes
const mask = new Uint8Array(W * H);

for (let y = 533; y <= 572; y++) {
  for (let x = 995; x <= 1065; x++) {
    const idx = (y * W + x) * 4;
    const r = img.data[idx];
    const g = img.data[idx+1];
    const b = img.data[idx+2];

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const bMinusR = b - r;
    const rMinusG = r - g;

    // Lilac fabric check
    const isCleanFabric = (
      bMinusR >= 16 && bMinusR <= 50 &&
      rMinusG >= 10 && rMinusG <= 35 &&
      lum >= 160 && lum <= 215 &&
      r >= 170 && r <= 220 &&
      g >= 150 && g <= 200 &&
      b >= 200 && b <= 255
    );

    if (!isCleanFabric) {
      mask[y * W + x] = 1;
    }
  }
}

// 2. Dilate by 1 pixel only
const dilated = new Uint8Array(W * H);
for (let y = 532; y <= 573; y++) {
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
    if (hit && x <= 1066 && y <= 573) {
      dilated[y * W + x] = 1;
    }
  }
}

// 3. Laplace solver for the low-frequency base
const rGrid = new Float32Array(W * H);
const gGrid = new Float32Array(W * H);
const bGrid = new Float32Array(W * H);

for (let y = 530; y <= 575; y++) {
  for (let x = 990; x <= 1070; x++) {
    const idx = y * W + x;
    rGrid[idx] = img.data[idx * 4];
    gGrid[idx] = img.data[idx * 4 + 1];
    bGrid[idx] = img.data[idx * 4 + 2];
  }
}

// Since strokes are only 1-4px wide, 500 iterations is plenty for full convergence
for (let iter = 0; iter < 500; iter++) {
  for (let y = 532; y <= 573; y++) {
    for (let x = 994; x <= 1066; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 1) {
        rGrid[idx] = 0.25 * (rGrid[idx - 1] + rGrid[idx + 1] + rGrid[idx - W] + rGrid[idx + W]);
        gGrid[idx] = 0.25 * (gGrid[idx - 1] + gGrid[idx + 1] + gGrid[idx - W] + gGrid[idx + W]);
        bGrid[idx] = 0.25 * (bGrid[idx - 1] + bGrid[idx + 1] + bGrid[idx - W] + bGrid[idx + W]);
      }
    }
  }
}

// 4. Extract authentic micro-grain from clean fabric at x: 860..930, y: 530..575
const hfR = new Float32Array(W * H);
const hfG = new Float32Array(W * H);
const hfB = new Float32Array(W * H);

for (let y = 528; y <= 578; y++) {
  for (let x = 855; x <= 935; x++) {
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

// 5. Synthesize output crop
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
      const srcX = x - 135;
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

fs.writeFileSync('scratch/exact_stroke_inpaint_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/exact_stroke_inpaint_crop.png');
