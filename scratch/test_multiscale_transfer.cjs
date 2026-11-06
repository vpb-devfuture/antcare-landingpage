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

// Dilate mask by 1px
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

// 2. Compute smooth background lighting (L_dest) over target area using Laplace solver
// This gives the exact low-frequency illumination plane
const L_destR = new Float32Array(W * H);
const L_destG = new Float32Array(W * H);
const L_destB = new Float32Array(W * H);

for (let y = 520; y <= 585; y++) {
  for (let x = 980; x <= 1085; x++) {
    const idx = y * W + x;
    L_destR[idx] = img.data[idx * 4];
    L_destG[idx] = img.data[idx * 4 + 1];
    L_destB[idx] = img.data[idx * 4 + 2];
  }
}

for (let iter = 0; iter < 1000; iter++) {
  for (let y = 531; y <= 574; y++) {
    for (let x = 993; x <= 1072; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 1) {
        L_destR[idx] = 0.25 * (L_destR[idx - 1] + L_destR[idx + 1] + L_destR[idx - W] + L_destR[idx + W]);
        L_destG[idx] = 0.25 * (L_destG[idx - 1] + L_destG[idx + 1] + L_destG[idx - W] + L_destG[idx + W]);
        L_destB[idx] = 0.25 * (L_destB[idx - 1] + L_destB[idx + 1] + L_destB[idx - W] + L_destB[idx + W]);
      }
    }
  }
}

// 3. Source region offset:
// Let's use clean fabric directly to the left: dx = -120
const dx = -120;

// Compute smooth illumination of source region (L_src) using a Gaussian/box blur of radius 15
const L_srcR = new Float32Array(W * H);
const L_srcG = new Float32Array(W * H);
const L_srcB = new Float32Array(W * H);

const blurRad = 12;
for (let y = 525; y <= 580; y++) {
  for (let x = 860; x <= 960; x++) {
    let sR = 0, sG = 0, sB = 0, count = 0;
    for (let dy = -blurRad; dy <= blurRad; dy++) {
      for (let dx2 = -blurRad; dx2 <= blurRad; dx2++) {
        const sIdx = (y + dy) * W + (x + dx2);
        sR += img.data[sIdx * 4];
        sG += img.data[sIdx * 4 + 1];
        sB += img.data[sIdx * 4 + 2];
        count++;
      }
    }
    const idx = y * W + x;
    L_srcR[idx] = sR / count;
    L_srcG[idx] = sG / count;
    L_srcB[idx] = sB / count;
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
      const srcX = x + dx;
      const srcY = y;
      const srcIdx = srcY * W + srcX;

      // Authentic fabric detail from source:
      const detailR = img.data[srcIdx * 4] - L_srcR[srcIdx];
      const detailG = img.data[srcIdx * 4 + 1] - L_srcG[srcIdx];
      const detailB = img.data[srcIdx * 4 + 2] - L_srcB[srcIdx];

      // Final pixel = target smooth illumination + authentic fabric detail
      const r = Math.round(L_destR[idx] + detailR);
      const g = Math.round(L_destG[idx] + detailG);
      const b = Math.round(L_destB[idx] + detailB);

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

fs.writeFileSync('scratch/multiscale_transfer_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/multiscale_transfer_crop.png');

