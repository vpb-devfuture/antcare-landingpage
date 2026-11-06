const fs = require('fs');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

// 1. Desktop check
const desktop = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));
const cropD = new PNG({ width: 250, height: 250 });
for (let y = 0; y < 250; y++) {
  for (let x = 0; x < 250; x++) {
    const srcIdx = (desktop.width * (450 + y) + (900 + x)) << 2;
    const dstIdx = (250 * y + x) << 2;
    cropD.data[dstIdx] = desktop.data[srcIdx];
    cropD.data[dstIdx + 1] = desktop.data[srcIdx + 1];
    cropD.data[dstIdx + 2] = desktop.data[srcIdx + 2];
    cropD.data[dstIdx + 3] = 255;
  }
}
fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/desktop_chest_final.png', PNG.sync.write(cropD));

// 2. Mobile check
const rawM = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const mob = jpeg.decode(rawM, { useTArray: true });
const cropM = new PNG({ width: 160, height: 160 });
for (let y = 0; y < 160; y++) {
  for (let x = 0; x < 160; x++) {
    const srcIdx = (mob.width * (420 + y) + (90 + x)) << 2;
    const dstIdx = (160 * y + x) << 2;
    cropM.data[dstIdx] = mob.data[srcIdx];
    cropM.data[dstIdx + 1] = mob.data[srcIdx + 1];
    cropM.data[dstIdx + 2] = mob.data[srcIdx + 2];
    cropM.data[dstIdx + 3] = 255;
  }
}
fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/mobile_chest_final.png', PNG.sync.write(cropM));

console.log('Saved inspection crops!');

