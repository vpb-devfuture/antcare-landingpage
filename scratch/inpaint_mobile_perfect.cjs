const fs = require('fs');
const jpeg = require('jpeg-js');

// Restore original mobile first
fs.copyFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/current_hero_bg_mobile.jpg', 'public/images/hero-bg-mobile.jpg');

const raw = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const img = jpeg.decode(raw, { useTArray: true });
const w = img.width;
const h = img.height;

// Logo bounding box on mobile: x: 105 to 195, y: 465 to 535
const mask = new Uint8Array(w * h);

for (let y = 465; y <= 535; y++) {
  for (let x = 105; x <= 195; x++) {
    const idx = (w * y + x) << 2;
    const r = img.data[idx];
    const g = img.data[idx + 1];
    const b = img.data[idx + 2];
    
    const isDarkPurple = (r < 155 && g < 145 && b > 110);
    const isOrange = (r > 175 && g < 150 && b < 120);
    const isWhite = (r > 200 && g > 195 && b > 200);
    const isAntenna = (r > 175 && g < 160 && b < 140);
    
    if (isDarkPurple || isOrange || isWhite || isAntenna) {
      mask[y * w + x] = 1;
    }
  }
}

// Pocket seam on mobile:
for (let y = 515; y <= 535; y++) {
  for (let x = 145; x <= 190; x++) {
    const idx = (w * y + x) << 2;
    const r = img.data[idx];
    const g = img.data[idx + 1];
    const b = img.data[idx + 2];
    if (r < 172 && g < 152 && b < 225) {
      mask[y * w + x] = 1;
    }
  }
}

// Dilate by 3 pixels
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
            if (nx >= 100 && nx <= 192 && ny >= 450 && ny <= 540) {
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
  rGrid[i] = img.data[i * 4];
  gGrid[i] = img.data[i * 4 + 1];
  bGrid[i] = img.data[i * 4 + 2];
}

for (let iter = 0; iter < 1200; iter++) {
  for (let y = 450; y <= 540; y++) {
    for (let x = 100; x <= 195; x++) {
      const idx = y * w + x;
      if (dilated[idx] === 1) {
        rGrid[idx] = 0.25 * (rGrid[idx - 1] + rGrid[idx + 1] + rGrid[idx - w] + rGrid[idx + w]);
        gGrid[idx] = 0.25 * (gGrid[idx - 1] + gGrid[idx + 1] + gGrid[idx - w] + gGrid[idx + w]);
        bGrid[idx] = 0.25 * (bGrid[idx - 1] + bGrid[idx + 1] + bGrid[idx - w] + bGrid[idx + w]);
      }
    }
  }
}

let seed = 77;
function randN() {
  seed = (seed * 9301 + 49297) % 233280;
  const u1 = seed / 233280;
  seed = (seed * 9301 + 49297) % 233280;
  const u2 = seed / 233280;
  return Math.sqrt(-2.0 * Math.log(u1 + 1e-10)) * Math.cos(2.0 * Math.PI * u2);
}

for (let i = 0; i < w * h; i++) {
  if (dilated[i] === 1) {
    const grain = randN() * 1.4;
    img.data[i * 4] = Math.min(255, Math.max(0, Math.round(rGrid[i] + grain)));
    img.data[i * 4 + 1] = Math.min(255, Math.max(0, Math.round(gGrid[i] + grain)));
    img.data[i * 4 + 2] = Math.min(255, Math.max(0, Math.round(bGrid[i] + grain)));
  }
}

const encoded = jpeg.encode(img, 95);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Mobile logo inpainting perfected!');

