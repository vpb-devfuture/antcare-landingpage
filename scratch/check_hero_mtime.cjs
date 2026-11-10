const fs = require('fs');
const path = 'public/images/products/hero-absorbent-underwear-vi.jpg';
if (fs.existsSync(path)) {
  const stat = fs.statSync(path);
  console.log('hero-absorbent-underwear-vi.jpg exists, size:', stat.size, 'mtime:', stat.mtime);
} else {
  console.log('Not found');
}

