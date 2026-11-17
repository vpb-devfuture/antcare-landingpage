const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

const kns = news.list.filter(n => n.group === 'kinh-nguyet');
const recent = kns.slice(-3);
recent.forEach(r => {
  console.log(`\nID: ${r.id} | Slug: ${r.slug} | Title: ${r.title}`);
  console.log('Content last 400 chars:\n', r.content.slice(-400));
});

