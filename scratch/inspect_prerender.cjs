const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf8');

const newsMatch = content.match(/news\.json|news\.list|kinh-nguyet/gi);
console.log('Matches in prerender.js:', newsMatch);
const idx = content.indexOf('news.list') !== -1 ? content.indexOf('news.list') : content.indexOf('news.json');
if (idx !== -1) {
  console.log(content.slice(idx - 200, idx + 500));
}

