const fs = require('fs');
const path = require('path');

const slugs = [
  'tieu-son-o-nguoi-cao-tuoi',
  'dang-tri-o-nguoi-gia',
  'tang-huyet-ap-nguoi-cao-tuoi',
  'tieu-duong-o-nguoi-cao-tuoi',
  'loang-xuong-va-te-nga-o-nguoi-gia',
  'thoai-hoa-khop-goi-nguoi-cao-tuoi',
  'mat-ngu-o-nguoi-cao-tuoi',
  'tao-bon-o-nguoi-cao-tuoi',
  'duc-thuy-tinh-the-nguoi-cao-tuoi',
  'tram-cam-o-nguoi-cao-tuoi',
  '10-benh-ly-thuong-gap-o-nguoi-cao-tuoi'
];

console.log('=== VERIFYING 11 NEW ARTICLES ===');
slugs.forEach((slug, idx) => {
  const filePath = path.join(__dirname, '..', 'dist', 'news', slug, 'index.html');
  const exists = fs.existsSync(filePath);
  if (!exists) {
    console.error(`[FAIL] ${slug} missing in dist/news/`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'NO_TITLE';
  const hasDesc = content.includes('name="description"');
  const hasCanonical = content.includes(`https://antcare.vn/news/${slug}`);
  const hasSchema = content.includes('application/ld+json');
  const hasH1 = content.includes('<h1');

  console.log(`[OK] #${idx + 1} ${slug}: size=${content.length}b, title="${title.slice(0, 45)}...", desc=${hasDesc}, canonical=${hasCanonical}, schema=${hasSchema}, h1=${hasH1}`);
});
