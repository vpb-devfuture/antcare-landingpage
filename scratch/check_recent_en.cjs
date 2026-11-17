const fs = require('fs');
const newsEn = JSON.parse(fs.readFileSync('src/data/news.en.json', 'utf8'));

const knsEn = newsEn.list.filter(n => n.group === 'kinh-nguyet');
const recent = knsEn.slice(-3);
recent.forEach(r => {
  console.log(`\nID: ${r.id} | Slug: ${r.slug} | Title: ${r.title}`);
  console.log('Category:', r.category, '| Author:', r.author);
  console.log('Content first 300 chars:\n', r.content.slice(0, 300));
  console.log('Content last 300 chars:\n', r.content.slice(-300));
});

