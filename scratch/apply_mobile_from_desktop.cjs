const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

// 1. Read retouched desktop
const desk = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
// 2. Read mobile
const rawMob = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const mob = jpeg.decode(rawMob, { useTArray: true });

// Fine-tune dx around -792 with subpixel search
const scale = 819 / 916; // 0.8941048034934498
let bestDx = -788;
let bestErr = Infinity;

for (let tDx = -796; tDx <= -780; tDx += 0.5) {
  let err = 0, count = 0;
  // Compare collar area (x: 100..120, y: 430..460 in mob) which is clean
  for (let my = 430; my <= 460; my += 2) {
    for (let mx = 80; mx <= 110; mx += 2) {
      const dx_val = (mx - tDx) / scale;
      const dy_val = my / scale;
      const dIdx = (Math.round(dy_val) * desk.width + Math.round(dx_val)) * 4;
      const mIdx = (my * mob.width + mx) * 4;
      err += Math.abs(desk.data[dIdx] - mob.data[mIdx]) +
             Math.abs(desk.data[dIdx+1] - mob.data[mIdx+1]) +
             Math.abs(desk.data[dIdx+2] - mob.data[mIdx+2]);
      count++;
    }
  }
  if (err / count < bestErr) {
    bestErr = err / count;
    bestDx = tDx;
  }
}
console.log('Precise bestDx:', bestDx, 'error:', bestErr);

// Transfer only the logo area (x: 105 to 190, y: 465 to 515 in mobile) with bilinear interpolation
// and 2px feathering at the boundary
const feather = 2;
for (let my = 460; my <= 520; my++) {
  for (let mx = 105; mx <= 190; mx++) {
    // Bilinear sample from desk at (deskX, deskY)
    const deskX = (mx - bestDx) / scale;
    const deskY = my / scale;

    const x0 = Math.floor(deskX);
    const x1 = x0 + 1;
    const y0 = Math.floor(deskY);
    const y1 = y0 + 1;

    const fx = deskX - x0;
    const fy = deskY - y0;

    const i00 = (y0 * desk.width + x0) * 4;
    const i10 = (y0 * desk.width + x1) * 4;
    const i01 = (y1 * desk.width + x0) * 4;
    const i11 = (y1 * desk.width + x1) * 4;

    const sample = (c) => {
      const top = desk.data[i00 + c] * (1 - fx) + desk.data[i10 + c] * fx;
      const bot = desk.data[i01 + c] * (1 - fx) + desk.data[i11 + c] * fx;
      return top * (1 - fy) + bot * fy;
    };

    // Calculate boundary feather weight
    const distLeft = mx - 105;
    const distRight = 190 - mx;
    const distTop = my - 460;
    const distBot = 520 - my;
    const minDist = Math.min(distLeft, distRight, distTop, distBot);

    let w = 1.0;
    if (minDist < feather) {
      w = minDist / feather;
    }

    const mIdx = (my * mob.width + mx) * 4;
    mob.data[mIdx] = Math.round((1 - w) * mob.data[mIdx] + w * sample(0));
    mob.data[mIdx + 1] = Math.round((1 - w) * mob.data[mIdx + 1] + w * sample(1));
    mob.data[mIdx + 2] = Math.round((1 - w) * mob.data[mIdx + 2] + w * sample(2));
  }
}

// Save crop for inspection (180x180)
const cropW = 180, cropH = 180;
const startCropX = 60, startCropY = 400;
const crop = new PNG({ width: cropW, height: cropH });

for (let cy = 0; cy < cropH; cy++) {
  for (let cx = 0; cx < cropW; cx++) {
    const x = startCropX + cx;
    const y = startCropY + cy;
    const sIdx = (y * mob.width + x) * 4;
    const dIdx = (cy * cropW + cx) * 4;
    crop.data[dIdx] = mob.data[sIdx];
    crop.data[dIdx + 1] = mob.data[sIdx + 1];
    crop.data[dIdx + 2] = mob.data[sIdx + 2];
    crop.data[dIdx + 3] = 255;
  }
}

fs.writeFileSync('scratch/mobile_downsample_crop.png', PNG.sync.write(crop));
console.log('Saved scratch/mobile_downsample_crop.png');

const encoded = jpeg.encode(mob, 92);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Saved public/images/hero-bg-mobile.jpg!');

