const fs = require('fs');
const { PNG } = require('pngjs');

const src = PNG.sync.read(fs.readFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/logo_exact.png'));
const w = src.width;
const h = src.height;

const mask = new Uint8Array(w * h);

// 1. Logo area: x from 40 to 114, y from 35 to 85
for (let y = 35; y <= 85; y++) {
  for (let x = 40; x <= 114; x++) {
    const idx = (w * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    
    // Logo pixels (ant body, legs, head, antennae, text)
    // Clean fabric is: r: 175-195, g: 155-175, b: 220-245
    const isDarkPurple = (r < 155 && g < 145 && b > 110);
    const isOrange = (r > 175 && g < 145 && b < 115);
    const isWhite = (r > 200 && g > 195 && b > 200);
    const isAntenna = (r > 175 && g < 155 && b < 135);
    
    if (isDarkPurple || isOrange || isWhite || isAntenna) {
      mask[y * w + x] = 1;
    }
  }
}

// 2. Pocket line: x from 75 to 112, y from 75 to 95
// The pocket fold has a shadow (r < 165, g < 145, b < 215) and a highlight
for (let y = 75; y <= 95; y++) {
  for (let x = 75; x <= 112; x++) {
    const idx = (w * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    
    // Seam shadow line
    if (r < 172 && g < 150 && b < 225) {
      mask[y * w + x] = 1;
    }
  }
}

// Dilate by 3 pixels, strictly keeping within x <= 114 to not touch grandma's cardigan
const dilated = new Uint8Array(w * h);
const r = 3;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (mask[y * w + x] === 1) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (dx*dx + dy*dy <= r*r) {
            const ny = y + dy;
            const nx = x + dx;
            if (nx >= 35 && nx <= 114 && ny >= 25 && ny < h) {
              dilated[ny * w + nx] = 1;
            }
          }
        }
      }
    }
  }
}

// Harmonic inpainting with Laplace equation
const rGrid = new Float32Array(w * h);
const gGrid = new Float32Array(w * h);
const bGrid = new Float32Array(w * h);

for (let i = 0; i < w * h; i++) {
  rGrid[i] = src.data[i * 4];
  gGrid[i] = src.data[i * 4 + 1];
  bGrid[i] = src.data[i * 4 + 2];
}

for (let iter = 0; iter < 1000; iter++) {
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

// Realistic subtle micro-texture from fabric
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

fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/inpaint_refined.png', PNG.sync.write(out));
console.log('Saved inpaint_refined.png');

