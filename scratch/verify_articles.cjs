const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/news.en.json'), 'utf8'));
console.log('Total articles:', data.list.length);
data.list.forEach((art, i) => {
  const hasImg = fs.existsSync(path.join(__dirname, '../public', art.image));
  console.log(`[${i+1}] ${art.title.slice(0, 50)}...`);
  console.log(`    Slug: /blog/${art.slug} | Img exists: ${hasImg}`);
  console.log(`    Meta title: ${art.metaTitle}`);
  console.log(`    Category: ${art.category}`);
  console.log(`    Schema types: ${art.schema['@graph'].map(g => g['@type']).join(', ')}`);
});
