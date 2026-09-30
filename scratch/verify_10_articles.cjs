const fs = require('fs');

const slugs = [
  'so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi',
  'dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong',
  'kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026',
  'dich-vu-dong-hanh-kham-benh-la-gi',
  'bao-hiem-y-te-nguoi-cao-tuoi-2026',
  'dua-bo-me-di-kham-benh-vien-ha-noi',
  'tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi',
  'quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh',
  'cham-soc-bo-me-tu-xa',
  'dua-bo-me-tu-tinh-ve-ha-noi-kham-benh'
];

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

const results = slugs.map(s => {
  const htmlPath = 'dist/news/' + s + '/index.html';
  const exists = fs.existsSync(htmlPath);
  const inSitemap = sitemap.includes('https://antcare.vn/news/' + s);
  let hasImageLink = false;
  let hasQuickAnswer = false;
  let hasFaq = false;
  let canonicalCorrect = false;
  let imageExists = false;
  
  const imgPath = 'public/images/tin-tuc/' + s + '.jpg';
  imageExists = fs.existsSync(imgPath);

  if (exists) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    hasImageLink = html.includes('https://antcare.vn/images/tin-tuc/' + s + '.jpg');
    hasQuickAnswer = html.includes('class="quick-answer"');
    hasFaq = html.includes('"@type": "FAQPage"');
    canonicalCorrect = html.includes('<link rel="canonical" href="https://antcare.vn/news/' + s + '" />');
  }
  return {
    slug: s,
    exists,
    imageExists,
    inSitemap,
    hasImageLink,
    hasQuickAnswer,
    hasFaq,
    canonicalCorrect
  };
});

console.table(results);
