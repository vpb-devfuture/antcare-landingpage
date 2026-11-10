const fs = require('fs');
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

const testUrls = [
  'https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-bi-tran-ban-dem',
  'https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-tran-hai-ben',
  'https://antcare.vn/kinh-nguyet/day-quan-kinh-nguyet-bi-cung',
  'https://antcare.vn/kinh-nguyet/son-tieu-khi-ho-hat-hoi-cuoi',
  'https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-va-bang-vai'
];

testUrls.forEach(url => {
  console.log(url, sitemap.includes(url) ? 'IN SITEMAP' : 'NOT IN SITEMAP');
});

const urlCount = (sitemap.match(/<loc>/g) || []).length;
console.log('Total URLs in sitemap:', urlCount);

