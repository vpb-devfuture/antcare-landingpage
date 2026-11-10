const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

const kinNguyetList = news.list.filter(n => n.group === 'kinh-nguyet');
const tinTucList = news.list.filter(n => n.group !== 'kinh-nguyet');

console.log('Total articles in news.json:', news.list.length);
console.log('Total in Mục Cẩm nang (/kinh-nguyet):', kinNguyetList.length);
console.log('Total in Mục Tin tức (/news):', tinTucList.length);

const kinNguyetCats = {};
kinNguyetList.forEach(n => {
  kinNguyetCats[n.category] = (kinNguyetCats[n.category] || 0) + 1;
});
console.log('Categories in Cẩm nang:', kinNguyetCats);

const tinTucCats = {};
tinTucList.forEach(n => {
  tinTucCats[n.category] = (tinTucCats[n.category] || 0) + 1;
});
console.log('Categories in Tin tức:', tinTucCats);

