const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('homeJsonLd') || l.includes('sitemapUrls.push') || l.includes('LocalBusiness')) {
    console.log(i + 1, l.trim());
  }
});

