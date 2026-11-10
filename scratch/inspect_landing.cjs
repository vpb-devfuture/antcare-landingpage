const fs = require('fs');
const content = fs.readFileSync('src/pages/LandingPage.jsx', 'utf-8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
lines.forEach((l, i) => {
  if (l.includes('id=') && (l.includes('dich-vu') || l.includes('bang-gia') || l.includes('section') || l.includes('pricing') || l.includes('tro-ly'))) {
    console.log(i + 1, l.trim());
  }
});

