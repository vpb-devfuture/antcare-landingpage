const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const src = jpeg.decode(raw);

console.log('Source size:', src.width, src.height);

// Find rightmost pixel of the 5th woman
let maxX = 0;
for (let y = 0; y < src.height; y++) {
  for (let x = src.width - 1; x >= 0; x--) {
    const idx = (y * src.width + x) * 4;
    const r = src.data[idx], g = src.data[idx+1], b = src.data[idx+2];
    // Background is near (238, 239, 232)
    if (Math.abs(r - 238) > 20 || Math.abs(g - 239) > 20 || Math.abs(b - 232) > 20) {
      if (x > maxX) maxX = x;
      break;
    }
  }
}

console.log(`Rightmost pixel of woman: x = ${maxX} (distance from right edge: ${src.width - 1 - maxX}px)`);

