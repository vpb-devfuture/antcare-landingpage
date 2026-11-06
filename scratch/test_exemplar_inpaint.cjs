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

// 2. Dilate mask by 1px
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

// 3. Exemplar-based Inpainting (Criminisi priority fill)
// We fill from the outside in (onion peeling / priority queue)
// Working image buffer:
const work = new Uint8Array(W * H * 4);
img.data.copy(work);

const filled = new Uint8Array(W * H);
for (let i = 0; i < W * H; i++) {
  filled[i] = dilated[i] === 1 ? 0 : 1; // 1 means known/filled, 0 means to be filled
}

// Patch radius R = 3 (7x7 patch)
const R = 3;

// Clean search area on the shirt:
// x from 880 to 980, y from 525 to 580
const searchXMin = 880, searchXMax = 980;
const searchYMin = 525, searchYMax = 580;

// Pre-verify search candidates are all filled clean fabric
const candidates = [];
for (let sy = searchYMin + R; sy <= searchYMax - R; sy++) {
  for (let sx = searchXMin + R; sx <= searchXMax - R; sx++) {
    // Check all pixels in patch are clean (filled === 1 and not dilated)
    let ok = true;
    for (let dy = -R; dy <= R; dy++) {
      for (let dx = -R; dx <= R; dx++) {
        if (dilated[(sy + dy) * W + (sx + dx)] === 1) {
          ok = false;
          break;
        }
      }
      if (!ok) break;
    }
    if (ok) candidates.push({ x: sx, y: sy });
  }
}
console.log('Valid search candidates in clean fabric:', candidates.length);

// Onion-peel fill: iterate until all dilated pixels are filled
let remaining = 0;
for (let y = 530; y <= 575; y++) {
  for (let x = 992; x <= 1073; x++) {
    if (filled[y * W + x] === 0) remaining++;
  }
}
console.log('Pixels to fill:', remaining);

while (remaining > 0) {
  // Find all boundary pixels (filled === 0, but has at least one filled === 1 neighbor)
  const boundary = [];
  for (let y = 530; y <= 575; y++) {
    for (let x = 992; x <= 1073; x++) {
      const idx = y * W + x;
      if (filled[idx] === 0) {
        let countFilled = 0;
        for (let dy = -R; dy <= R; dy++) {
          for (let dx = -R; dx <= R; dx++) {
            if (filled[(y + dy) * W + (x + dx)] === 1) countFilled++;
          }
        }
        if (countFilled > 0) {
          boundary.push({ x, y, countFilled });
        }
      }
    }
  }

  if (boundary.length === 0) break;

  // Sort boundary pixels by most known neighbors first (standard Criminisi priority)
  boundary.sort((a, b) => b.countFilled - a.countFilled);

  // Take the top batch (up to 20 pixels per iteration to keep fast)
  const batchSize = Math.min(30, boundary.length);
  for (let bIdx = 0; bIdx < batchSize; bIdx++) {
    const p = boundary[bIdx];
    const px = p.x, py = p.y;
    if (filled[py * W + px] === 1) continue;

    // Find best candidate patch by SSD over known pixels
    let bestDist = Infinity;
    let bestCand = null;

    for (let c = 0; c < candidates.length; c++) {
      const cand = candidates[c];
      const cx = cand.x, cy = cand.y;

      let dist = 0;
      let knownCount = 0;

      for (let dy = -R; dy <= R; dy++) {
        for (let dx = -R; dx <= R; dx++) {
          const tIdx = (py + dy) * W + (px + dx);
          if (filled[tIdx] === 1) {
            const sIdx = (cy + dy) * W + (cx + dx);
            const dr = work[tIdx * 4] - work[sIdx * 4];
            const dg = work[tIdx * 4 + 1] - work[sIdx * 4 + 1];
            const db = work[tIdx * 4 + 2] - work[sIdx * 4 + 2];
            dist += dr * dr + dg * dg + db * db;
            knownCount++;
          }
        }
      }

      if (knownCount > 0) {
        const normDist = dist / knownCount;
        if (normDist < bestDist) {
          bestDist = normDist;
          bestCand = cand;
        }
      }
    }

    if (bestCand) {
      // Copy center pixel
      const tIdx = (py * W + px) * 4;
      const sIdx = (bestCand.y * W + bestCand.x) * 4;
      work[tIdx] = work[sIdx];
      work[tIdx + 1] = work[sIdx + 1];
      work[tIdx + 2] = work[sIdx + 2];
      filled[py * W + px] = 1;
      remaining--;
    }
  }
}

console.log('Inpainting complete!');

// 4. Save crop for inspection
const cropW = 250, cropH = 250;
const startCropX = 890, startCropY = 460;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startCropX + cx;
    const y = startCropY + cy;
    const idx = (y * W + x) * 4;
    const cIdx = (cy * cropW + cx) * 4;
    crop.data[cIdx] = work[idx];
    crop.data[cIdx + 1] = work[idx + 1];
    crop.data[cIdx + 2] = work[idx + 2];
    crop.data[cIdx + 3] = 255;
  }
}

fs.writeFileSync('scratch/criminisi_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/criminisi_crop.png');

