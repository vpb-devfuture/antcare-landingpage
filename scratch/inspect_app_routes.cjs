const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');

const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('kinh-nguyet') || l.includes('Navigate') || l.includes('Route')) {
    console.log(`${idx+1}: ${l}`);
  }
});

