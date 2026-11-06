const fs = require('fs');
const { PNG } = require('pngjs');

const src = PNG.sync.read(fs.readFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/logo_exact.png'));
const w = src.width;
const h = src.height;

const mask = new Uint8Array(w * h);

// 1. Logo area:
// Ant mascot: x from 40 to 80, y from 35 to 85
// Text "ANTCare": x from 75 to 118, y from 52 to 74
for (let y = 35; y <= 85; y++) {
  for (let x = 40; x <= 118; x++) {
    const idx = (w * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    
    const isDarkPurple = (r < 155 && g < 145 && b > 110);
    const isOrange = (r > 175 && g < 150 && b < 120);
    const isWhite = (r > 200 && g > 195 && b > 200);
    const isAntenna = (r > 175 && g < 160 && b < 140);
    
    if (isDarkPurple || isOrange || isWhite || isAntenna) {
      mask[y * w + x] = 1;
    }
  }
}

// 2. Pocket seam lines:
// Horizontal top fold:
for (let y = 82; y <= 92; y++) {
  for (let x = 75; x <= 115; x++) {
    const idx = (w * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    if (r < 175 && g < 155 && b < 228) {
      mask[y * w + x] = 1;
    }
  }
}

// Vertical left edge of pocket:
for (let y = 85; y < h; y++) {
  for (let x = 74; x <= 83; x++) {
    const idx = (w * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    if (r < 172 && g < 152 && b < 225) {
      mask[y * w + x] = 1;
    }
  }
}

// Dilate mask by 3px
const dilated = new Uint8Array(w * h);
const rad = 3;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (mask[y * w + x] === 1) {
      for (let dy = -rad; dy <= rad; dy++) {
        for (let dx = -rad; dx <= rad; dx++) {
          if (dx*dx + dy*dy <= rad*rad) {
            const ny = y + dy;
            const nx = x + dx;
            // Prevent touching grandma's cardigan (which starts around x=119 at y=60)
            if (nx >= 35 && nx <= 118 && ny >= 20 && ny < h) {
              dilated[ny * w + nx] = 1;
            }
          }
        }
      }
    }
  }
}

// Laplace inpainting
const rGrid = new Float32Array(w * h);
const gGrid = new Float32Array(w * h);
const bGrid = new Float32Array(w * h);

for (let i = 0; i < w * h; i++) {
  rGrid[i] = src.data[i * 4];
  gGrid[i] = src.data[i * 4 + 1];
  bGrid[i] = src.data[i * 4 + 2];
}

for (let iter = 0; iter < 1200; iter++) {
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = y * w + x;
      if (dilated[idx] === 1) {
        rGrid[idx] = 0.25 * (rGrid[idx - 1] + rGrid[idx + 1] + rGrid[idx - w] + rGrid[idx + w]);
        gGrid[idx] = 0.25 * (gGrid[idx - 1] + gGrid[idx + 1] + gGrid[idx - w] + gGrid[idx + w]);
        bGrid[idx] = 0.25 * (bGrid[idx - 1] + bGrid[idx + 1] + bGrid[idx - w] + bGrid[idx + w]);
      }
    }
  }
}

let seed = 42;
function randN() {
  seed = (seed * 9301 + 49297) % 233280;
  const u1 = seed / 233280;
  seed = (seed * 9301 + 49297) % 233280;
  const u2 = seed / 233280;
  return Math.sqrt(-2.0 * Math.log(u1 + 1e-10)) * Math.cos(2.0 * Math.PI * u2);
}

const out = new PNG({ width: w, height: h });
for (let i = 0; i < w * h; i++) {
  if (dilated[i] === 1) {
    const grain = randN() * 1.3;
    out.data[i * 4] = Math.min(255, Math.max(0, Math.round(rGrid[i] + grain)));
    out.data[i * 4 + 1] = Math.min(255, Math.max(0, Math.round(gGrid[i] + grain)));
    out.data[i * 4 + 2] = Math.min(255, Math.max(0, Math.round(bGrid[i] + grain)));
    out.data[i * 4 + 3] = 255;
  } else {
    out.data[i * 4] = src.data[i * 4];
    out.data[i * 4 + 1] = src.data[i * 4 + 1];
    out.data[i * 4 + 2] = src.data[i * 4 + 2];
    out.data[i * 4 + 3] = src.data[i * 4 + 3];
  }
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/inpaint_perfect.png', PNG.sync.write(out));
console.log('Saved inpaint_perfect.png');

