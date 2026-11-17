const fs = require('fs');
const newsEn = JSON.parse(fs.readFileSync('src/data/news.en.json', 'utf8'));

const knListEn = newsEn.list.filter(n => n.group === 'kinh-nguyet');
console.log('Total EN kinh-nguyet articles:', knListEn.length);
const sampleEn = knListEn[knListEn.length - 1];
console.log('Sample EN item:');
console.log({
  id: sampleEn.id,
  title: sampleEn.title,
  slug: sampleEn.slug,
  group: sampleEn.group,
  category: sampleEn.category,
  author: sampleEn.author,
  date: sampleEn.date,
  image: sampleEn.image,
  contentSnippet: sampleEn.content ? sampleEn.content.slice(0, 300) : ''
});

