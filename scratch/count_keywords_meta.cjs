const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

let keywordMetaCount = 0;
news.list.forEach(a => {
  if (a.content && /<p[^>]*class=["']meta["'][^>]*>\s*(?:Từ khóa|Keywords):/i.test(a.content)) {
    keywordMetaCount++;
  }
});

console.log('Articles with keywords in meta paragraph at top:', keywordMetaCount);

