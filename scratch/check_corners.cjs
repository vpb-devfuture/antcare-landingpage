const fs = require('fs');
const jpeg = require('jpeg-js');
const raw = fs.readFileSync('public/images/products/hero-multigen-asian-underwear.jpg');
const decoded = jpeg.decode(raw);

// Check background color at corners:
// (10, 10), (1366, 10), (10, 750), (1366, 750)
const corners = [
  {x: 10, y: 10},
  {x: decoded.width - 10, y: 10},
  {x: 10, y: decoded.height - 10},
  {x: decoded.width - 10, y: decoded.height - 10}
];

corners.forEach(c => {
  const idx = (c.y * decoded.width + c.x) * 4;
  console.log(`Corner (${c.x}, ${c.y}): RGB(${decoded.data[idx]}, ${decoded.data[idx+1]}, ${decoded.data[idx+2]})`);
});

