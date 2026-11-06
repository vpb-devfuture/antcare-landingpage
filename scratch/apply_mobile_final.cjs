const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

// 1. Read retouched desktop
const desk = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
// 2. Read original mobile
const rawMob = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const mob = jpeg.decode(rawMob, { useTArray: true });
const mW = mob.width, mH = mob.height;

function isCleanFabric(r, g, b) {
  const bMinusR = b - r;
  const rMinusG = r - g;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  return (
    r >= 180 && r <= 220 &&
    g >= 160 && g <= 200 &&
    b >= 215 && b <= 255 &&
    bMinusR >= 16 && bMinusR <= 50 &&
    rMinusG >= 8 && rMinusG <= 35 &&
    lum >= 175 && lum <= 218
  );
}

const mask = new Uint8Array(mW * mH);
for (let y = 452; y <= 514; y++) {
  for (let x = 85; x <= 172; x++) {
    const isAntennae = (x >= 115 && x <= 132 && y >= 452 && y <= 466);
    const isAnt = (x >= 85 && x <= 145 && y >= 465 && y <= 512);
    const isText = (x >= 140 && x <= 172 && y >= 478 && y <= 505);

    if (isAntennae || isAnt || isText) {
      const idx = (y * mW + x) * 4;
      const r = mob.data[idx];
      const g = mob.data[idx+1];
      const b = mob.data[idx+2];
      if (!isCleanFabric(r, g, b)) {
        mask[y * mW + x] = 1;
      }
    }
  }
}

// 1px dilation
const dilated = new Uint8Array(mW * mH);
for (let y = 450; y <= 516; y++) {
  for (let x = 84; x <= 173; x++) {
    let hit = false;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (mask[(y + dy) * mW + (x + dx)] === 1) {
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    if (hit) dilated[y * mW + x] = 1;
  }
}

const scale = 819 / 916;
const bestDx = -790.0;

for (let my = 450; my <= 516; my++) {
  for (let mx = 84; mx <= 173; mx++) {
    const mIdx = (my * mW + mx) * 4;
    if (dilated[my * mW + mx] === 1) {
      const deskX = (mx - bestDx) / scale;
      const deskY = my / scale;

      const x0 = Math.floor(deskX);
      const x1 = Math.min(desk.width - 1, x0 + 1);
      const y0 = Math.floor(deskY);
      const y1 = Math.min(desk.height - 1, y0 + 1);

      const fx = deskX - x0;
      const fy = deskY - y0;

      const i00 = (y0 * desk.width + x0) * 4;
      const i10 = (y0 * desk.width + x1) * 4;
      const i01 = (y1 * desk.width + x0) * 4;
      const i11 = (y1 * desk.width + x1) * 4;

      for (let c = 0; c < 3; c++) {
        const top = desk.data[i00 + c] * (1 - fx) + desk.data[i10 + c] * fx;
        const bot = desk.data[i01 + c] * (1 - fx) + desk.data[i11 + c] * fx;
        const val = top * (1 - fy) + bot * fy;
        mob.data[mIdx + c] = Math.round(val);
      }
    }
  }
}

// Crop for inspection
const cropW = 180, cropH = 180;
const startCropX = 60, startCropY = 400;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startCropX + cx;
    const y = startCropY + cy;
    const sIdx = (y * mW + x) * 4;
    const dIdx = (cy * cropW + cx) * 4;
    crop.data[dIdx] = mob.data[sIdx];
    crop.data[dIdx + 1] = mob.data[sIdx + 1];
    crop.data[dIdx + 2] = mob.data[sIdx + 2];
    crop.data[dIdx + 3] = 255;
  }
}

fs.writeFileSync('scratch/mobile_final_verified2.png', PNG.sync.write(crop));
console.log('Saved scratch/mobile_final_verified2.png');

const encoded = jpeg.encode(mob, 92);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Saved public/images/hero-bg-mobile.jpg successfully!');
