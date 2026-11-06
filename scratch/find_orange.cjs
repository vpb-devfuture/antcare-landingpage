const fs = require('fs');
const { PNG } = require('pngjs');

const png = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));

let minX = png.width, maxX = 0, minY = png.height, maxY = 0;
let count = 0;
let sumX = 0, sumY = 0;

for (let y = 450; y <= 650; y++) {
  for (let x = 950; x <= 1150; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];
    
    // Orange text "Care" in ANTCare
    if (r > 190 && g < 140 && b < 100) {
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

console.log(`Orange text bounds: X=[${minX}, ${maxX}], Y=[${minY}, ${maxY}], center=(${Math.round(sumX/count)}, ${Math.round(sumY/count)})`);

