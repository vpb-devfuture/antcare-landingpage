const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));
const existingSlugs = new Set(news.list.map(n => n.slug));

const slugs30 = [
  'quan-kinh-nguyet-bi-tran-ban-dem',
  'quan-kinh-nguyet-tran-hai-ben',
  'quan-kinh-nguyet-tham-duoc-bao-nhieu-ml',
  'chon-quan-kinh-nguyet-theo-luong-kinh',
  'quan-kinh-nguyet-cho-ngay-ra-nhieu',
  'quan-kinh-nguyet-hoat-dong-nhu-the-nao',
  'chat-lieu-quan-kinh-nguyet',
  'quan-kinh-nguyet-pfas',
  'oeko-tex-standard-100-la-gi',
  'quan-kinh-nguyet-duoc-san-xuat-nhu-the-nao',
  'cach-dung-quan-kinh-nguyet-lan-dau',
  'bao-lau-thay-quan-kinh-nguyet',
  'mac-quan-kinh-nguyet-ca-ngay',
  'quan-kinh-nguyet-thay-bang-ve-sinh',
  'quan-kinh-nguyet-di-lam-di-du-lich',
  '3-nguyen-tac-giat-quan-kinh-nguyet',
  'quan-kinh-nguyet-dung-duoc-bao-lau',
  'quan-kinh-nguyet-bi-mui',
  'day-quan-kinh-nguyet-bi-cung',
  'quan-lot-co-mui-nuoc-tieu-sau-khi-giat',
  'son-tieu-khi-ho-hat-hoi-cuoi',
  'quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong',
  'son-tieu-tuoi-tien-man-kinh',
  'kinh-nguyet-tien-man-kinh',
  'den-thang-di-boi-duoc-khong',
  'chuan-bi-cho-con-lan-dau-co-kinh',
  'mau-sac-mau-kinh-nguyet-noi-gi',
  'an-uong-anh-huong-kinh-nguyet',
  'quan-kinh-nguyet-tiet-kiem-bao-nhieu',
  'quan-kinh-nguyet-va-bang-vai'
];

slugs30.forEach((slug, i) => {
  if (existingSlugs.has(slug)) {
    console.log(`COLLISION: [${i+1}] ${slug}`);
  }
});
console.log('Collision check finished for 30 slugs.');

