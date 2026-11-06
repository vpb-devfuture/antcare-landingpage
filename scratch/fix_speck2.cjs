const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const img = jpeg.decode(raw, { useTArray: true });
const w = img.width;

for (let y = 476; y <= 486; y++) {
  for (let x = 115; x <= 126; x++) {
    const idx = (w * y + x) << 2;
    const cleanIdx = (w * (y - 8) + x) << 2;
    img.data[idx] = img.data[cleanIdx];
    img.data[idx + 1] = img.data[cleanIdx + 1];
    img.data[idx + 2] = img.data[cleanIdx + 2];
  }
}

const encoded = jpeg.encode(img, 95);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Fixed red speck completely');

