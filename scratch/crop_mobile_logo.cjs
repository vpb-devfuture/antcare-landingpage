const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

const raw = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const img = jpeg.decode(raw, { useTArray: true });

const boxW = 120;
const boxH = 100;
const startX = 100;
const startY = 440;

const crop = new PNG({ width: boxW, height: boxH });
for (let y = 0; y < boxH; y++) {
  for (let x = 0; x < boxW; x++) {
    const srcIdx = (img.width * (startY + y) + (startX + x)) << 2;
    const dstIdx = (boxW * y + x) << 2;
    crop.data[dstIdx] = img.data[srcIdx];
    crop.data[dstIdx + 1] = img.data[srcIdx + 1];
    crop.data[dstIdx + 2] = img.data[srcIdx + 2];
    crop.data[dstIdx + 3] = 255;
  }
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/mobile_logo_crop.png', PNG.sync.write(crop));
console.log('Saved mobile_logo_crop.png');

