const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));
const item = news.list.find(n => n.id === 317 || n.id === 318);
if (item) {
  console.log('ID:', item.id, 'Title:', item.title);
  console.log('Content preview:');
  console.log(item.content.slice(0, 1500));
}

