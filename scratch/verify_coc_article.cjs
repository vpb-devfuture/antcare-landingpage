const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../dist/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san/index.html');
const redirectPath = path.resolve(__dirname, '../dist/kien-thuc/coc-nguyet-san-va-quan-nguyet-san/index.html');
const hubPath = path.resolve(__dirname, '../dist/kinh-nguyet/index.html');
const art307Path = path.resolve(__dirname, '../dist/kinh-nguyet/coc-dia-nguyet-san-bi-ro-ri/index.html');

console.log('--- Checking Target Article ---');
if (fs.existsSync(targetPath)) {
  const html = fs.readFileSync(targetPath, 'utf8');
  console.log('File size:', html.length);
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  console.log('Title:', title);
  console.log('Has FAQPage schema:', html.includes('FAQPage'));
  console.log('Has BlogPosting schema:', html.includes('BlogPosting'));
  console.log('Has Sources section:', html.includes('Nguồn tham khảo'));
  console.log('Has link to cach-dung-coc-nguyet-san:', html.includes('/kinh-nguyet/cach-dung-coc-nguyet-san'));
  console.log('Has link to cach-chon-size-va-ve-sinh-coc-nguyet-san:', html.includes('/kinh-nguyet/cach-chon-size-va-ve-sinh-coc-nguyet-san'));
  console.log('Does NOT have SEO plan comment/box:', !html.includes('Kế hoạch SEO (dành cho quản trị)'));
  console.log('Has 11 FAQs in HTML:', (html.match(/<dt>/g) || []).length);
} else {
  console.error('Target file NOT found!');
}

console.log('\n--- Checking Redirect /kien-thuc/coc-nguyet-san-va-quan-nguyet-san ---');
if (fs.existsSync(redirectPath)) {
  const html = fs.readFileSync(redirectPath, 'utf8');
  console.log('Redirect file size:', html.length);
  console.log('Contains redirect target:', html.includes('/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san'));
} else {
  console.error('Redirect file NOT found!');
}

console.log('\n--- Checking Hub /kinh-nguyet ---');
if (fs.existsSync(hubPath)) {
  const html = fs.readFileSync(hubPath, 'utf8');
  console.log('Hub contains link to new article:', html.includes('/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san'));
} else {
  console.error('Hub file NOT found!');
}

console.log('\n--- Checking Article 307 Backlink ---');
if (fs.existsSync(art307Path)) {
  const html = fs.readFileSync(art307Path, 'utf8');
  console.log('Article 307 has backlink to new article:', html.includes('/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san'));
} else {
  console.error('Article 307 file NOT found!');
}

