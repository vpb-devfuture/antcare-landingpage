const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));
const item = news.list.find(n => n.id === 317);
console.log(item.content.slice(-2000));

