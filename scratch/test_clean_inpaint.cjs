const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width, H = img.height;

// 1. Initial mask in logo region
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

    const isCleanFabric = (
      bMinusR >= 16 && bMinusR <= 50 &&
      rMinusG >= 10 && rMinusG <= 35 &&
      lum >= 182 && lum <= 215 &&
      r >= 186 && r <= 220 &&
      g >= 168 && g <= 200 &&
      b >= 225 && b <= 255
    );
    if (!isCleanFabric) mask[y * W + x] = 1;
  }
}

// 2. Expand mask by 1px
const dilated = new Uint8Array(W * H);
for (let y = 530; y <= 575; y++) {
  for (let x = 992; x <= 1067; x++) {
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

// Check boundary of dilated mask: if any boundary pixel is dark (lum < 182), absorb it into mask
for (let iter = 0; iter < 3; iter++) {
  for (let y = 530; y <= 574; y++) {
    for (let x = 992; x <= 1066; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 0) {
        let isNear = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dilated[(y + dy) * W + (x + dx)] === 1) isNear = true;
          }
        }
        if (isNear) {
          const r = img.data[idx * 4];
          const g = img.data[idx * 4 + 1];
          const b = img.data[idx * 4 + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (lum < 182 || r < 186 || g < 168 || b < 225) {
            dilated[idx] = 1;
          }
        }
      }
    }
  }
}

// 3. Laplace solver for base tone
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

for (let iter = 0; iter < 1000; iter++) {
  for (let y = 530; y <= 575; y++) {
    for (let x = 992; x <= 1067; x++) {
      const idx = y * W + x;
      if (dilated[idx] === 1) {
        rGrid[idx] = 0.25 * (rGrid[idx - 1] + rGrid[idx + 1] + rGrid[idx - W] + rGrid[idx + W]);
        gGrid[idx] = 0.25 * (gGrid[idx - 1] + gGrid[idx + 1] + gGrid[idx - W] + gGrid[idx + W]);
        bGrid[idx] = 0.25 * (bGrid[idx - 1] + bGrid[idx + 1] + bGrid[idx - W] + bGrid[idx + W]);
      }
    }
  }
}

// 4. Sample real fabric grain from adjacent clean fabric (x: 870..940, y: 530..575)
// Real fabric has stdDev ~ 4.1 in R, 3.8 in G, 2.5 in B.
// We extract the exact residual: residual = clean_pixel - clean_pixel_smooth
const resR = new Float32Array(W * H);
const resG = new Float32Array(W * H);
const resB = new Float32Array(W * H);

for (let y = 528; y <= 578; y++) {
  for (let x = 865; x <= 940; x++) {
    const idx = y * W + x;
    // 3x3 box blur of clean fabric
    let sR = 0, sG = 0, sB = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const sIdx = (y + dy) * W + (x + dx);
        sR += img.data[sIdx * 4];
        sG += img.data[sIdx * 4 + 1];
        sB += img.data[sIdx * 4 + 2];
      }
    }
    resR[idx] = img.data[idx * 4] - (sR / 9.0);
    resG[idx] = img.data[idx * 4 + 1] - (sG / 9.0);
    resB[idx] = img.data[idx * 4 + 2] - (sB / 9.0);
  }
}

// 5. Output crop
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
      // Offset dx = -125
      const srcX = x - 125;
      const srcY = y;
      const srcIdx = srcY * W + srcX;

      // Add high-frequency residual
      const r = Math.round(rGrid[idx] + resR[srcIdx] * 1.5);
      const g = Math.round(gGrid[idx] + resG[srcIdx] * 1.5);
      const b = Math.round(bGrid[idx] + resB[srcIdx] * 1.5);

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

fs.writeFileSync('scratch/clean_inpaint_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/clean_inpaint_crop.png');

