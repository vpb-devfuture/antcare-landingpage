const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width;
const H = img.height;

// 1. Binary mask of logo
const mask = new Float32Array(W * H);

for (let y = 530; y <= 576; y++) {
  for (let x = 992; x <= 1068; x++) {
    const isAntBody = (x >= 995 && x <= 1030 && y >= 539 && y <= 572);
    const isAntennae = (x >= 1013 && x <= 1025 && y >= 534 && y <= 539);
    const isText = (x >= 1026 && x <= 1066 && y >= 549 && y <= 568);

    if (isAntBody || isAntennae || isText) {
      mask[y * W + x] = 1.0;
    }
  }
}

// 2. Compute smooth feathering weight (0 outside, 1 inside, smooth 2px transition)
// Gaussian blur the binary mask
const weight = new Float32Array(W * H);
for (let y = 528; y <= 578; y++) {
  for (let x = 990; x <= 1070; x++) {
    let sum = 0, count = 0;
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const d2 = dx*dx + dy*dy;
        if (d2 <= 4) {
          const w = Math.exp(-d2 / 2.0);
          sum += mask[(y + dy) * W + (x + dx)] * w;
          count += w;
        }
      }
    }
    weight[y * W + x] = sum / count;
  }
}

// 3. Offset to source: dx = -135, dy = 0
const dx = -135;

// Measure mean color along the boundary where weight is around 0.1 to 0.4
let sumRt = 0, sumGt = 0, sumBt = 0;
let sumRs = 0, sumGs = 0, sumBs = 0;
let bCount = 0;

for (let y = 528; y <= 578; y++) {
  for (let x = 990; x <= 1070; x++) {
    const wVal = weight[y * W + x];
    if (wVal >= 0.05 && wVal <= 0.45) {
      const tIdx = (y * W + x) * 4;
      const sIdx = (y * W + (x + dx)) * 4;
      sumRt += img.data[tIdx];
      sumGt += img.data[tIdx + 1];
      sumBt += img.data[tIdx + 2];

      sumRs += img.data[sIdx];
      sumGs += img.data[sIdx + 1];
      sumBs += img.data[sIdx + 2];
      bCount++;
    }
  }
}

const deltaR = (sumRt - sumRs) / bCount;
const deltaG = (sumGt - sumGs) / bCount;
const deltaB = (sumBt - sumBs) / bCount;
console.log('Boundary color delta:', { deltaR, deltaG, deltaB }, 'samples:', bCount);

// 4. Create retouched image
const out = new PNG({ width: W, height: H });
// Copy all original pixels
img.data.copy(out.data);

// Blend in the retouched area
for (let y = 525; y <= 580; y++) {
  for (let x = 988; x <= 1072; x++) {
    const wVal = weight[y * W + x];
    if (wVal > 0) {
      const tIdx = (y * W + x) * 4;
      const sIdx = (y * W + (x + dx)) * 4;

      const srcR = img.data[sIdx] + deltaR;
      const srcG = img.data[sIdx + 1] + deltaG;
      const srcB = img.data[sIdx + 2] + deltaB;

      const origR = img.data[tIdx];
      const origG = img.data[tIdx + 1];
      const origB = img.data[tIdx + 2];

      out.data[tIdx] = Math.min(255, Math.max(0, Math.round((1 - wVal) * origR + wVal * srcR)));
      out.data[tIdx + 1] = Math.min(255, Math.max(0, Math.round((1 - wVal) * origG + wVal * srcG)));
      out.data[tIdx + 2] = Math.min(255, Math.max(0, Math.round((1 - wVal) * origB + wVal * srcB)));
    }
  }
}

// Save crop for inspection (300x300 around chest)
const cropW = 300, cropH = 300;
const startX = 870, startY = 440;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startX + cx;
    const y = startY + cy;
    const sIdx = (y * W + x) * 4;
    const dIdx = (cy * cropW + cx) * 4;
    crop.data[dIdx] = out.data[sIdx];
    crop.data[dIdx + 1] = out.data[sIdx + 1];
    crop.data[dIdx + 2] = out.data[sIdx + 2];
    crop.data[dIdx + 3] = 255;
  }
}

fs.writeFileSync('scratch/clone_stamp_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/clone_stamp_crop.png');

