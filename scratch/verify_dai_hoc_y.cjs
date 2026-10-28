const fs = require('fs');
const path = require('path');

const newsData = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

const targetSlugs = [
  'kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi',
  '4-khu-kham-benh-vien-dai-hoc-y-ha-noi',
  'kham-bhyt-benh-vien-dai-hoc-y-ha-noi',
  'kham-theo-yeu-cau-benh-vien-dai-hoc-y-ha-noi',
  'trung-tam-y-khoa-so-1-ton-that-tung',
  'kham-suc-khoe-doanh-nghiep-dai-hoc-y-ha-noi',
  'dat-lich-kham-benh-vien-dai-hoc-y-ha-noi',
  'luu-y-khi-di-kham-benh-vien-dai-hoc-y-ha-noi',
  'dua-nguoi-cao-tuoi-di-kham-dai-hoc-y-ha-noi',
  'dich-vu-dong-hanh-kham-benh-dai-hoc-y-ha-noi'
];

console.log('--- VERIFYING 10 ARTICLES ---');
let allOk = true;

targetSlugs.forEach((slug, idx) => {
  const art = newsData.list.find(a => a.slug === slug);
  if (!art) {
    console.error(`[FAIL] Article missing for slug: ${slug}`);
    allOk = false;
    return;
  }

  // Check featured image
  const featImgPath = path.join('public', art.image.replace(/^\//, ''));
  const featExists = fs.existsSync(featImgPath);

  // Check inline image in content
  const inlineMatch = art.content.match(/<img[^>]+src="([^">]+)"/);
  const inlineSrc = inlineMatch ? inlineMatch[1] : null;
  const inlineExists = inlineSrc ? fs.existsSync(path.join('public', inlineSrc.replace(/^\//, ''))) : false;

  console.log(`Bài ${idx + 1} [ID ${art.id}]: ${art.title.slice(0, 45)}...`);
  console.log(`   Featured: ${art.image} (${featExists ? 'OK' : 'MISSING'})`);
  console.log(`   Inline:   ${inlineSrc} (${inlineExists ? 'OK' : 'MISSING'})`);

  if (!featExists || !inlineExists) allOk = false;
});

console.log('--- RESULT ---');
console.log(allOk ? 'ALL 10 ARTICLES VERIFIED PERFECTLY!' : 'ERRORS FOUND!');
