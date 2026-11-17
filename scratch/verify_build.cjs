const fs = require('fs');
const path = require('path');

const pillarPath = path.join(__dirname, '..', 'dist', 'kinh-nguyet', 'kinh-nguyet-tuoi-hoc-sinh', 'index.html');
const redirectPath = path.join(__dirname, '..', 'dist', 'kinh-nguyet', 'hoc-sinh', 'index.html');
const hubPath = path.join(__dirname, '..', 'dist', 'kinh-nguyet', 'index.html');

console.log('--- Checking Pillar Article ---');
if (fs.existsSync(pillarPath)) {
  const html = fs.readFileSync(pillarPath, 'utf8');
  console.log('File exists, size:', html.length);
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  console.log('Title:', title);
  console.log('Has YouTube embed:', html.includes('https://www.youtube.com/embed/oCVqSV4JxUU'));
  console.log('Has FAQPage schema:', html.includes('FAQPage'));
  console.log('Has BlogPosting schema:', html.includes('BlogPosting'));
  console.log('Has Sources section:', html.includes('Nguồn tham khảo'));
  console.log('Has internal link to next article:', html.includes('/kinh-nguyet/kinh-nguyet-khong-deu-tuoi-day-thi'));
} else {
  console.error('Pillar file NOT found!');
}

console.log('\n--- Checking Redirect /kinh-nguyet/hoc-sinh ---');
if (fs.existsSync(redirectPath)) {
  const html = fs.readFileSync(redirectPath, 'utf8');
  console.log('Redirect file exists, size:', html.length);
  console.log('Content preview:', html.slice(0, 300));
} else {
  console.error('Redirect file NOT found!');
}

console.log('\n--- Checking Hub /kinh-nguyet ---');
if (fs.existsSync(hubPath)) {
  const html = fs.readFileSync(hubPath, 'utf8');
  console.log('Hub file exists, size:', html.length);
  console.log('Hub contains pillar link:', html.includes('/kinh-nguyet/kinh-nguyet-tuoi-hoc-sinh'));
  console.log('Hub contains article 10 link:', html.includes('/kinh-nguyet/chon-quan-nguyet-san-cho-hoc-sinh'));
} else {
  console.error('Hub file NOT found!');
}

