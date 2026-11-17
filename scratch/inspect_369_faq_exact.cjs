const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const art369 = news.list.find(a => a.id === 369);
const faqIdx = art369.content.indexOf('id="faq"');
console.log(art369.content.slice(faqIdx, faqIdx + 1200));

