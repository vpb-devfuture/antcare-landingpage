const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const img = jpeg.decode(raw, { useTArray: true });

let minX = img.width, maxX = 0, minY = img.height, maxY = 0;
let count = 0;
let sumX = 0, sumY = 0;

for (let y = 450; y <= 650; y++) {
  for (let x = 120; x <= 260; x++) {
    const idx = (img.width * y + x) << 2;
    const r = img.data[idx];
    const g = img.data[idx + 1];
    const b = img.data[idx + 2];
    
    // Orange text "Care" in ANTCare
    if (r > 185 && g < 140 && b < 100) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      sumX += x;
      sumY += y;
      count++;
    }
  }
}

console.log(`Mobile orange bounds: X=[${minX}, ${maxX}], Y=[${minY}, ${maxY}], center=(${Math.round(sumX/count)}, ${Math.round(sumY/count)})`);

