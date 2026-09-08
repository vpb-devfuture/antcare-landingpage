const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

console.log('Keys in news.json:', Object.keys(newsData));
if (newsData.featured) console.log('Featured ID:', newsData.featured.id, newsData.featured.slug);
if (newsData.list) console.log('List length:', newsData.list.length);
const ids = [newsData.featured?.id, ...(newsData.list || []).map(item => item.id)].filter(Boolean);
console.log('Max ID:', Math.max(...ids));
