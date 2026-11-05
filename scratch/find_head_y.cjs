const fs = require('fs');
const jpeg = require('jpeg-js');
const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const decoded = jpeg.decode(raw);

// Sample background color along top edge
// Let's find rows from top to bottom
for (let y = 0; y < 200; y += 10) {
  let nonBgCount = 0;
  for (let x = 0; x < decoded.width; x++) {
    const idx = (y * decoded.width + x) * 4;
    const r = decoded.data[idx], g = decoded.data[idx+1], b = decoded.data[idx+2];
    // Background is around (236, 235, 229)
    if (Math.abs(r - 236) > 25 || Math.abs(g - 235) > 25 || Math.abs(b - 229) > 25) {
      nonBgCount++;
    }
  }
  console.log(`y=${y}: non-bg pixels = ${nonBgCount}`);
}

