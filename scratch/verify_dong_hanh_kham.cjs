const fs = require('fs');
const path = require('path');

const slugs = [
  'dich-vu-dong-hanh-di-kham-la-gi',
  'dua-bo-me-di-kham-khi-con-ban',
  'con-o-xa-cham-bo-me-di-kham',
  'chuan-bi-gi-khi-dua-nguoi-gia-di-kham',
  'kham-bhyt-nguoi-cao-tuoi',
  'kinh-nghiem-di-kham-benh-vien-lon',
  'dua-nguoi-gia-tu-tinh-len-ha-noi-kham',
  'gia-dich-vu-dong-hanh-di-kham',
  'chon-dich-vu-dong-hanh-di-kham-uy-tin',
  'tai-kham-dinh-ky-benh-man-tinh'
];

slugs.forEach(s => {
  const filePath = path.join(__dirname, '../dist/news', s, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`MISSING: ${filePath}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const titleM = html.match(/<title>([\s\S]*?)<\/title>/i);
  const canonicalM = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const h1M = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const hasSchema = html.includes('schema.org');

  console.log(`[OK] ${s}:`);
  console.log(`     Title: ${titleM ? titleM[1] : 'N/A'}`);
  console.log(`     Canonical: ${canonicalM ? canonicalM[1] : 'N/A'}`);
  console.log(`     H1: ${h1M ? h1M[1].slice(0, 50) : 'N/A'}...`);
  console.log(`     Schema: ${hasSchema ? 'Yes' : 'No'}`);
});

// Verify category pages
['dong-hanh-di-kham', 'dong-hanh-kham-benh'].forEach(cat => {
  const catPath = path.join(__dirname, '../dist', cat, 'index.html');
  console.log(`Category page /${cat}: ${fs.existsSync(catPath) ? 'EXISTS' : 'MISSING'}`);
});
