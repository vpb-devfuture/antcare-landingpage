const fs = require('fs');
const s = 'cam-nang-suc-khoe-nguoi-cao-tuoi';
const htmlPath = 'dist/news/' + s + '/index.html';
const exists = fs.existsSync(htmlPath);
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const inSitemap = sitemap.includes('https://antcare.vn/news/' + s);
const imgPath = 'public/images/tin-tuc/' + s + '.jpg';
const imageExists = fs.existsSync(imgPath);
let hasImageLink = false, hasQuickAnswer = false, hasFaq = false, canonicalCorrect = false;

if (exists) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  hasImageLink = html.includes('https://antcare.vn/images/tin-tuc/' + s + '.jpg');
  hasQuickAnswer = html.includes('quick-answer');
  hasFaq = html.includes('FAQPage');
  canonicalCorrect = html.includes('<link rel="canonical" href="https://antcare.vn/news/' + s + '" />');
}

console.log({ s, exists, imageExists, inSitemap, hasImageLink, hasQuickAnswer, hasFaq, canonicalCorrect });
