const fs = require('fs');
const code = fs.readFileSync('src/pages/LandingPage.jsx', 'utf8');
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<Link') || l.includes('href="/')) {
    console.log((i+1) + ': ' + l.trim());
  }
});

