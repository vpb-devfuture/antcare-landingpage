const fs = require('fs');
const prerender = fs.readFileSync('scripts/prerender.js', 'utf8');

const lines = prerender.split('\n');
lines.forEach((l, idx) => {
  if (l.includes("distDir, 'index.html'") || l.includes('homepage') || l.includes('Trang chủ') || l.includes('LandingPage')) {
    console.log(`${idx + 1}: ${l}`);
  }
});

