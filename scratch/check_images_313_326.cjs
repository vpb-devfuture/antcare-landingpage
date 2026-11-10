const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));
const camNangArticles = news.list.filter(n => n.id >= 313 && n.id <= 326);
camNangArticles.forEach(n => {
  console.log(`${n.id}: ${n.image}`);
});

