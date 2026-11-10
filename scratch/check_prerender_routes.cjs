const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('kinh-nguyet') || l.includes('newsJson')) {
    console.log(`${idx + 1}: ${l.slice(0, 100)}`);
  }
});

