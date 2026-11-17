const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));
const art301 = news.list.find(i => i.id === 301);
console.log('Article 301 found:', !!art301);
if (art301) {
  const matches = [...art301.content.matchAll(/(?:học sinh|mới có kinh|bé gái)[\s\S]{0,150}/gi)];
  matches.forEach((m, i) => console.log(`Match ${i+1}: ${m[0]}\n`));
}
