const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf8');

const idx = content.indexOf('for (const article of news.list)');
if (idx !== -1) {
  console.log(content.slice(idx, idx + 800));
} else {
  // search for article of
  const match = content.match(/for\s*\([^)]*article[^)]*\)[\s\S]{0,500}/i);
  if (match) console.log(match[0]);
}

