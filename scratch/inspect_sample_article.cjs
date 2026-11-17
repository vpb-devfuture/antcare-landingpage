const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

const knList = news.list.filter(n => n.group === 'kinh-nguyet');
console.log('Total kinh-nguyet articles:', knList.length);
const sample = knList[knList.length - 1];
console.log('Sample article fields:', Object.keys(sample));
console.log('Sample item:');
console.log({
  id: sample.id,
  title: sample.title,
  slug: sample.slug,
  group: sample.group,
  category: sample.category,
  author: sample.author,
  date: sample.date,
  image: sample.image,
  readTime: sample.readTime,
  summary: sample.summary,
  faqsCount: sample.faqs ? sample.faqs.length : 0,
  contentSnippet: sample.content ? sample.content.slice(0, 300) : ''
});

