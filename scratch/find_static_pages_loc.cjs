const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('const staticPages = [') || l.includes('staticPages.forEach') || l.includes('const staticRedirects = [')) {
    console.log(i + 1, l);
  }
});

