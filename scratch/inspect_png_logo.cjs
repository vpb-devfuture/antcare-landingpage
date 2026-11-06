const fs = require('fs');
const { PNG } = require('pngjs');

const data = fs.readFileSync('public/images/hero-bg.jpg');
const png = PNG.sync.read(data);
console.log('PNG size:', png.width, 'x', png.height);

// Find the logo:
// Look for orange text (R > 200, G < 120, B < 80)
// and purple ant (R < 140, G < 130, B > 130)
let minX = png.width, maxX = 0, minY = png.height, maxY = 0;

for (let y = 0; y < png.height; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];
    
    // Only search on the woman's chest area: x between 900 and 1200, y between 400 and 700
    if (x >= 900 && x <= 1200 && y >= 400 && y <= 700) {
      const isOrange = (r > 190 && g < 130 && b < 100);
      const isDarkPurple = (r < 145 && g < 130 && b > 125);
      const isWhiteCross = (r > 230 && g > 230 && b > 230 && r > b);
      if (isOrange || isDarkPurple || isWhiteCross) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
}

console.log(`Logo bounds in hero-bg: X=[${minX}, ${maxX}] (${maxX - minX + 1}px), Y=[${minY}, ${maxY}] (${maxY - minY + 1}px)`);

