const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf8');

const idx = content.indexOf("r.path === '/kinh-nguyet'");
if (idx !== -1) {
  console.log(content.slice(idx - 100, idx + 800));
}

