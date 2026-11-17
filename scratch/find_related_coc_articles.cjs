const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

const checkTitles = [
  'Cách dùng cốc nguyệt san',
  'Cách chọn size và vệ sinh cốc',
  'Cốc, đĩa nguyệt san bị rò rỉ'
];

checkTitles.forEach(t => {
  const found = news.list.filter(a => a.title.toLowerCase().includes(t.toLowerCase()) || a.slug.toLowerCase().includes(t.toLowerCase()));
  console.log(`Search '${t}': found ${found.length}`);
  found.forEach(f => console.log(`  ID: ${f.id} | Slug: ${f.slug} | Title: ${f.title}`));
});

// Also search by slug keywords
console.log('\nSearch by slug keywords:');
const keywords = ['cach-dung-coc', 'chon-size', 've-sinh-coc', 'ro-ri'];
keywords.forEach(k => {
  const found = news.list.filter(a => a.slug.includes(k));
  console.log(`Keyword '${k}': found ${found.length}`);
  found.forEach(f => console.log(`  ID: ${f.id} | Slug: ${f.slug} | Title: ${f.title}`));
});

