const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('articleJsonLd') || l.includes('@type": "Article') || l.includes('@type": "NewsArticle')) {
    console.log(i + 1, l.trim());
  }
});

