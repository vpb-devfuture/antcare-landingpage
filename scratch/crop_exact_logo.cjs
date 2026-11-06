const fs = require('fs');
const { PNG } = require('pngjs');

const png = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));

const boxW = 160;
const boxH = 120;
const startX = 950;
const startY = 490;

const crop = new PNG({ width: boxW, height: boxH });

for (let y = 0; y < boxH; y++) {
  for (let x = 0; x < boxW; x++) {
    const srcIdx = (png.width * (startY + y) + (startX + x)) << 2;
    const dstIdx = (boxW * y + x) << 2;
    crop.data[dstIdx] = png.data[srcIdx];
    crop.data[dstIdx + 1] = png.data[srcIdx + 1];
    crop.data[dstIdx + 2] = png.data[srcIdx + 2];
    crop.data[dstIdx + 3] = png.data[srcIdx + 3];
  }
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/logo_exact.png', PNG.sync.write(crop));
console.log('Saved logo_exact.png');

