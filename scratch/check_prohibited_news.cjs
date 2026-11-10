const fs = require('fs');

const newsVi = JSON.parse(fs.readFileSync('src/data/news.json', 'utf-8'));

const prohibited = [
  'kháng khuẩn',
  '100+ lần',
  '100 lần',
  '4 lớp kháng khuẩn',
  '100% chống tràn',
  'tốt nhất',
  'số 1'
];

console.log('Total articles:', newsVi.list.length);
let hitCount = 0;
newsVi.list.forEach((item, idx) => {
  const content = (item.title || '') + ' ' + (item.description || '') + ' ' + (item.content || '');
  prohibited.forEach(word => {
    if (content.toLowerCase().includes(word.toLowerCase())) {
      console.log(`Article #${item.id} (${item.slug}): contains "${word}"`);
      hitCount++;
    }
  });
});

console.log('Total hits:', hitCount);

