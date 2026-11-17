const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../dist/kinh-nguyet/kinh-nguyet-lan-dau/index.html');
const redirectPath = path.resolve(__dirname, '../dist/kien-thuc/kinh-nguyet-lan-dau/index.html');
const hubPath = path.resolve(__dirname, '../dist/kinh-nguyet/index.html');
const art301Path = path.resolve(__dirname, '../dist/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi/index.html');

console.log('--- Checking Target Article ---');
if (fs.existsSync(targetPath)) {
  const html = fs.readFileSync(targetPath, 'utf8');
  console.log('File size:', html.length);
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  console.log('Title:', title);
  console.log('Has FAQPage schema:', html.includes('FAQPage'));
  console.log('Has BlogPosting schema:', html.includes('BlogPosting'));
  console.log('Has Sources section:', html.includes('Nguồn tham khảo'));
  console.log('Has link to ngay-kinh-nguyet-nen-dung-gi:', html.includes('/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi'));
  console.log('Does NOT have SEO plan comment/box:', !html.includes('Kế hoạch SEO (dành cho quản trị)'));
  console.log('Has 12 FAQs in HTML:', (html.match(/<dt>/g) || []).length);
} else {
  console.error('Target file NOT found!');
}

console.log('\n--- Checking Redirect /kien-thuc/kinh-nguyet-lan-dau ---');
if (fs.existsSync(redirectPath)) {
  const html = fs.readFileSync(redirectPath, 'utf8');
  console.log('Redirect file size:', html.length);
  console.log('Contains redirect target:', html.includes('/kinh-nguyet/kinh-nguyet-lan-dau'));
} else {
  console.error('Redirect file NOT found!');
}

console.log('\n--- Checking Hub /kinh-nguyet ---');
if (fs.existsSync(hubPath)) {
  const html = fs.readFileSync(hubPath, 'utf8');
  console.log('Hub contains link to new article:', html.includes('/kinh-nguyet/kinh-nguyet-lan-dau'));
} else {
  console.error('Hub file NOT found!');
}

console.log('\n--- Checking Article 301 Backlink ---');
if (fs.existsSync(art301Path)) {
  const html = fs.readFileSync(art301Path, 'utf8');
  console.log('Article 301 has backlink to new article:', html.includes('/kinh-nguyet/kinh-nguyet-lan-dau'));
} else {
  console.error('Article 301 file NOT found!');
}

