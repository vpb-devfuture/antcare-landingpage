const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('scratch/logo_close_up.png'));
const w = img.width, h = img.height;

// 1. Precise mask
const mask = new Uint8Array(w * h);

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    // Ant body & head
    if (x >= 40 && x <= 75 && y >= 54 && y <= 86) {
      mask[y * w + x] = 1;
    }
    // Ant antennae
    if (x >= 58 && x <= 70 && y >= 50 && y <= 55) {
      mask[y * w + x] = 1;
    }
    // ANTCare text
    if (x >= 71 && x <= 111 && y >= 64 && y <= 82) {
      mask[y * w + x] = 1;
    }
  }
}

// 1px dilation
const dilated = new Uint8Array(w * h);
for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {
    let hit = false;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (mask[(y + dy) * w + (x + dx)] === 1) {
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    if (hit && x <= 111) {
      dilated[y * w + x] = 1;
    }
  }
}

// 2. Low-frequency base L(p) via Laplace solver (Poisson harmonic fill)
const rGrid = new Float32Array(w * h);
const gGrid = new Float32Array(w * h);
const bGrid = new Float32Array(w * h);

for (let i = 0; i < w * h; i++) {
  rGrid[i] = img.data[i * 4];
  gGrid[i] = img.data[i * 4 + 1];
  bGrid[i] = img.data[i * 4 + 2];
}

// Initial guess: average of boundary
let bR = 0, bG = 0, bB = 0, bCount = 0;
for (let y = 45; y <= 90; y++) {
  for (let x = 35; x <= 113; x++) {
    const idx = y * w + x;
    if (dilated[idx] === 0) {
      let isNear = false;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dilated[(y + dy) * w + (x + dx)] === 1) isNear = true;
        }
      }
      if (isNear) {
        bR += img.data[idx * 4];
        bG += img.data[idx * 4 + 1];
        bB += img.data[idx * 4 + 2];
        bCount++;
      }
    }
  }
}
const initR = bR / bCount;
const initG = bG / bCount;
const initB = bB / bCount;

for (let i = 0; i < w * h; i++) {
  if (dilated[i] === 1) {
    rGrid[i] = initR;
    gGrid[i] = initG;
    bGrid[i] = initB;
  }
}

// 2000 iterations for convergence
for (let iter = 0; iter < 2000; iter++) {
  for (let y = 45; y <= 90; y++) {
    for (let x = 36; x <= 112; x++) {
      const idx = y * w + x;
      if (dilated[idx] === 1) {
        rGrid[idx] = 0.25 * (rGrid[idx - 1] + rGrid[idx + 1] + rGrid[idx - w] + rGrid[idx + w]);
        gGrid[idx] = 0.25 * (gGrid[idx - 1] + gGrid[idx + 1] + gGrid[idx - w] + gGrid[idx + w]);
        bGrid[idx] = 0.25 * (bGrid[idx - 1] + bGrid[idx + 1] + bGrid[idx - w] + bGrid[idx + w]);
      }
    }
  }
}

// 3. High-frequency texture extraction from source patch
// Source is x: 10 to 35 (25px wide), y: 48 to 90 (42px high)
// We extract H = img - blur(img)
const hfR = new Float32Array(w * h);
const hfG = new Float32Array(w * h);
const hfB = new Float32Array(w * h);

for (let y = 2; y < h - 2; y++) {
  for (let x = 2; x < w - 2; x++) {
    const idx = y * w + x;
    // 5x5 Gaussian approximation blur
    let sR = 0, sG = 0, sB = 0, wSum = 0;
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const weight = (dx === 0 && dy === 0) ? 4 : (Math.abs(dx) + Math.abs(dy) <= 2 ? 2 : 1);
        const sIdx = (y + dy) * w + (x + dx);
        sR += img.data[sIdx * 4] * weight;
        sG += img.data[sIdx * 4 + 1] * weight;
        sB += img.data[sIdx * 4 + 2] * weight;
        wSum += weight;
      }
    }
    hfR[idx] = img.data[idx * 4] - (sR / wSum);
    hfG[idx] = img.data[idx * 4 + 1] - (sG / wSum);
    hfB[idx] = img.data[idx * 4 + 2] - (sB / wSum);
  }
}

// 4. Synthesize final image with texture
const out = new PNG({ width: w, height: h });
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = y * w + x;
    const pIdx = idx * 4;
    if (dilated[idx] === 1) {
      // Map x to source texture at x - 35.. wrap cleanly in source area (x: 10 to 34)
      const srcX = 10 + ((x - 38) % 24 + 24) % 24;
      const srcY = Math.min(88, Math.max(48, y));
      const srcIdx = srcY * w + srcX;

      // Add high-frequency texture with slight amplification (1.2x) to match sharp crispness
      const r = Math.round(rGrid[idx] + hfR[srcIdx] * 1.25);
      const g = Math.round(gGrid[idx] + hfG[srcIdx] * 1.25);
      const b = Math.round(bGrid[idx] + hfB[srcIdx] * 1.25);

      out.data[pIdx] = Math.min(255, Math.max(0, r));
      out.data[pIdx + 1] = Math.min(255, Math.max(0, g));
      out.data[pIdx + 2] = Math.min(255, Math.max(0, b));
      out.data[pIdx + 3] = 255;
    } else {
      out.data[pIdx] = img.data[pIdx];
      out.data[pIdx + 1] = img.data[pIdx + 1];
      out.data[pIdx + 2] = img.data[pIdx + 2];
      out.data[pIdx + 3] = img.data[pIdx + 3];
    }
  }
}

fs.writeFileSync('scratch/hf_inpaint_rect_result.png', PNG.sync.write(out));
console.log('Saved scratch/hf_inpaint_rect_result.png');
