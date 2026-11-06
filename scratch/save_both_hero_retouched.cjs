const fs = require('fs');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

// -------------------------------------------------------------
// 1. DESKTOP HERO (public/images/hero-bg.jpg - actually a PNG)
// -------------------------------------------------------------
console.log('Processing Desktop hero-bg.jpg...');
const img = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const W = img.width, H = img.height;

function isCleanFabric(r, g, b) {
  const bMinusR = b - r;
  const rMinusG = r - g;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  return (
    r >= 185 && r <= 220 &&
    g >= 165 && g <= 200 &&
    b >= 218 && b <= 255 &&
    bMinusR >= 18 && bMinusR <= 48 &&
    rMinusG >= 10 && rMinusG <= 35 &&
    lum >= 180 && lum <= 218
  );
}

const mask = new Uint8Array(W * H);
for (let y = 533; y <= 570; y++) {
  for (let x = 995; x <= 1065; x++) {
    const inAnt = (x >= 995 && x <= 1025 && y >= 533 && y <= 570);
    const inText = (x >= 1025 && x <= 1065 && y >= 545 && y <= 566);
    if (inAnt || inText) {
      const idx = (y * W + x) * 4;
      const r = img.data[idx];
      const g = img.data[idx+1];
      const b = img.data[idx+2];
      if (!isCleanFabric(r, g, b)) {
        mask[y * W + x] = 1;
      }
    }
  }
}

const dilated = new Uint8Array(W * H);
for (let y = 531; y <= 571; y++) {
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
    if (hit) dilated[y * W + x] = 1;
  }
}

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

for (let iter = 0; iter < 600; iter++) {
  for (let y = 531; y <= 571; y++) {
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

for (let y = 531; y <= 571; y++) {
  for (let x = 994; x <= 1066; x++) {
    const idx = y * W + x;
    if (dilated[idx] === 1) {
      const srcIdx = (y * W + (x + dx)) * 4;
      const r = Math.round(img.data[srcIdx] + uR[idx]);
      const g = Math.round(img.data[srcIdx + 1] + uG[idx]);
      const b = Math.round(img.data[srcIdx + 2] + uB[idx]);

      img.data[idx * 4] = Math.min(255, Math.max(0, r));
      img.data[idx * 4 + 1] = Math.min(255, Math.max(0, g));
      img.data[idx * 4 + 2] = Math.min(255, Math.max(0, b));
    }
  }
}

fs.writeFileSync('public/images/hero-bg.jpg', PNG.sync.write(img));
console.log('Saved public/images/hero-bg.jpg successfully!');

// -------------------------------------------------------------
// 2. MOBILE HERO (public/images/hero-bg-mobile.jpg - JPEG)
// -------------------------------------------------------------
console.log('Processing Mobile hero-bg-mobile.jpg...');
const rawMob = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const mob = jpeg.decode(rawMob, { useTArray: true });
const mW = mob.width, mH = mob.height;

// Find logo in mobile:
// Logo in mobile is around x: 110 to 180, y: 460 to 515
const mMask = new Uint8Array(mW * mH);
for (let y = 460; y <= 515; y++) {
  for (let x = 110; x <= 180; x++) {
    const idx = (y * mW + x) * 4;
    const r = mob.data[idx];
    const g = mob.data[idx+1];
    const b = mob.data[idx+2];
    
    // In mobile, JPEG compression slightly shifts colors:
    const isOrange = (r > 175 && b < 140 && (r - b > 40));
    const isDark = (r < 155 && g < 140 && (b - r > 5 || r < 130));
    const isWhite = (r > 190 && g > 180 && b > 185 && Math.abs(r - b) < 22 && x <= 150);
    
    if (isOrange || isDark || isWhite) {
      mMask[y * mW + x] = 1;
    }
  }
}

// 1px dilate
const mDilated = new Uint8Array(mW * mH);
for (let y = 455; y <= 520; y++) {
  for (let x = 105; x <= 185; x++) {
    let hit = false;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (mMask[(y + dy) * mW + (x + dx)] === 1) {
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    if (hit) mDilated[y * mW + x] = 1;
  }
}

// In mobile, clean fabric is around x - 45..60 (to the left of logo on the scrub top)
const mDx = -45;
const muR = new Float32Array(mW * mH);
const muG = new Float32Array(mW * mH);
const muB = new Float32Array(mW * mH);

for (let y = 450; y <= 525; y++) {
  for (let x = 100; x <= 190; x++) {
    const idx = y * mW + x;
    const sIdx = y * mW + (x + mDx);
    muR[idx] = mob.data[idx * 4] - mob.data[sIdx * 4];
    muG[idx] = mob.data[idx * 4 + 1] - mob.data[sIdx * 4 + 1];
    muB[idx] = mob.data[idx * 4 + 2] - mob.data[sIdx * 4 + 2];
  }
}

for (let iter = 0; iter < 500; iter++) {
  for (let y = 455; y <= 520; y++) {
    for (let x = 105; x <= 185; x++) {
      const idx = y * mW + x;
      if (mDilated[idx] === 1) {
        muR[idx] = 0.25 * (muR[idx - 1] + muR[idx + 1] + muR[idx - mW] + muR[idx + mW]);
        muG[idx] = 0.25 * (muG[idx - 1] + muG[idx + 1] + muG[idx - mW] + muG[idx + mW]);
        muB[idx] = 0.25 * (muB[idx - 1] + muB[idx + 1] + muB[idx - mW] + muB[idx + mW]);
      }
    }
  }
}

for (let y = 455; y <= 520; y++) {
  for (let x = 105; x <= 185; x++) {
    const idx = y * mW + x;
    if (mDilated[idx] === 1) {
      const srcIdx = (y * mW + (x + mDx)) * 4;
      const r = Math.round(mob.data[srcIdx] + muR[idx]);
      const g = Math.round(mob.data[srcIdx + 1] + muG[idx]);
      const b = Math.round(mob.data[srcIdx + 2] + muB[idx]);

      mob.data[idx * 4] = Math.min(255, Math.max(0, r));
      mob.data[idx * 4 + 1] = Math.min(255, Math.max(0, g));
      mob.data[idx * 4 + 2] = Math.min(255, Math.max(0, b));
    }
  }
}

const encoded = jpeg.encode(mob, 92);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Saved public/images/hero-bg-mobile.jpg successfully!');

