const fs = require('fs');
const jpeg = require('jpeg-js');
const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const decoded = jpeg.decode(raw);

console.log('Size:', decoded.width, decoded.height);

[0, 100, 500, 1000, 1375].forEach(x => {
  const idx = (10 * decoded.width + x) * 4;
  console.log('x=' + x + ', y=10: RGB(' + decoded.data[idx] + ', ' + decoded.data[idx+1] + ', ' + decoded.data[idx+2] + ')');
});

let topY = -1;
for (let y = 0; y < decoded.height; y++) {
  for (let x = 0; x < decoded.width; x++) {
    const idx = (y * decoded.width + x) * 4;
    const r = decoded.data[idx], g = decoded.data[idx+1], b = decoded.data[idx+2];
    if (r < 180 && g < 180 && b < 180) {
      topY = y;
      break;
    }
  }
  if (topY !== -1) break;
}
console.log('Top of heads begins at Y = ' + topY + ' (' + Math.round(topY / decoded.height * 100) + '% from top)');

