const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

function fixContentTables(content) {
  if (!content) return content;
  let updated = content
    .replace(/background:\s*#2a1b3d;\s*color:\s*#ffffff;?/gi, 'background: #efe7fb; color: #2a1b3d;')
    .replace(/background:\s*#2a1b3d;\s*color:\s*#fff;?/gi, 'background: #efe7fb; color: #2a1b3d;')
    .replace(/background:\s*var\(--plum-900\);\s*color:\s*#fff;?/gi, 'background: #efe7fb; color: #2a1b3d;')
    .replace(/background:\s*var\(--plum-900\);\s*color:\s*#ffffff;?/gi, 'background: #efe7fb; color: #2a1b3d;');
  return updated;
}

let fixCount = 0;
if (newsData.featured) {
  newsData.featured.content = fixContentTables(newsData.featured.content);
  fixCount++;
}

if (Array.isArray(newsData.list)) {
  newsData.list.forEach(item => {
    item.content = fixContentTables(item.content);
    fixCount++;
  });
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully fixed table header inline styles across ${fixCount} articles in news.json!`);
