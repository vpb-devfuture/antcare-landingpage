const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));
const art357 = news.list.find(a => a.id === 357);
console.log('Article 357 keys:', Object.keys(art357));
console.log('Title:', art357.title);
console.log('H2 match:', art357.content.match(/<h2[^>]*>[\s\S]*?<\/h2>/i));

