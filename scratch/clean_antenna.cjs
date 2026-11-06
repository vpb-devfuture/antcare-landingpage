const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const img = jpeg.decode(raw, { useTArray: true });
const w = img.width;

// Antenna zone: x from 125 to 145, y from 470 to 490
for (let y = 470; y <= 490; y++) {
  for (let x = 125; x <= 145; x++) {
    const idx = (w * y + x) << 2;
    const r = img.data[idx];
    const g = img.data[idx + 1];
    const b = img.data[idx + 2];
    
    // Check if orange or darker/redder than surrounding purple fabric
    // Surrounding fabric has b > 210 and r < 190
    if (r > 165 && (r > g + 20 || r > b - 20)) {
      // Replace with clean neighbor fabric
      const cleanIdx = (w * (y - 5) + x) << 2;
      img.data[idx] = img.data[cleanIdx];
      img.data[idx + 1] = img.data[cleanIdx + 1];
      img.data[idx + 2] = img.data[cleanIdx + 2];
    }
  }
}

const encoded = jpeg.encode(img, 95);
fs.writeFileSync('public/images/hero-bg-mobile.jpg', encoded.data);
console.log('Mobile antenna clean up done!');

