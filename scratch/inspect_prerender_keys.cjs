const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('quan-lot-tham-hut') || l.includes('ve-antcare') || l.includes('kinh-nguyet') || l.includes('son-tieu')) {
    console.log(i + 1, l.trim());
  }
});

