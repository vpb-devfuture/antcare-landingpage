const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

let otherKeywordsCount = 0;
news.list.forEach(a => {
  if (a.content) {
    const start = a.content.slice(0, 500);
    if (/Từ khóa\s*:/i.test(start)) {
      otherKeywordsCount++;
    }
  }
});

console.log('Articles with "Từ khóa:" in first 500 chars:', otherKeywordsCount);

