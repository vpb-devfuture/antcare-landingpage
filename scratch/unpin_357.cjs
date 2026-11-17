const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const newsEnPath = path.resolve(__dirname, '../src/data/news.en.json');

const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));

const item357 = news.list.find(i => i.id === 357);
if (item357) {
  delete item357.isPinned;
  console.log('Unpinned article 357 in news.json');
}

const item357En = newsEn.list.find(i => i.id === 357);
if (item357En) {
  delete item357En.isPinned;
  console.log('Unpinned article 357 in news.en.json');
}

fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');
console.log('Saved both files successfully.');

