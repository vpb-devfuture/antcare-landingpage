const fs = require('fs');
const path = require('path');

const distDir = path.resolve('dist');
const newsData = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

console.log('====================================================');
console.log('BÁO CÁO NGHIỆM THU PRERENDER & NỘI DUNG DIST');
console.log('====================================================\n');

function checkFile(relPath, label) {
  const filePath = path.join(distDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`[LỖI] File không tồn tại: ${relPath}`);
    return null;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleM = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleM ? titleM[1].trim() : 'CHƯA CÓ TITLE';

  // Canonical
  const canM = html.match(/<link rel="canonical" href="(.*?)"/i);
  const canonical = canM ? canM[1].trim() : 'CHƯA CÓ CANONICAL';

  // Thẻ H1 count & text
  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  const h1Count = h1Matches.length;

  // JSON-LD
  const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  let jsonLdTypes = [];
  jsonLdMatches.forEach(script => {
    try {
      const raw = script.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '');
      const parsed = JSON.parse(raw);
      if (parsed['@type']) jsonLdTypes.push(parsed['@type']);
      if (parsed['@graph']) {
        parsed['@graph'].forEach(g => {
          if (g['@type']) jsonLdTypes.push(g['@type']);
        });
      }
    } catch (e) {}
  });

  return {
    label,
    path: relPath,
    title,
    canonical,
    h1Count,
    hasJsonLd: jsonLdTypes.length > 0 ? `CÓ (${[...new Set(jsonLdTypes)].join(', ')})` : 'KHÔNG'
  };
}

// 1. Kiểm tra Trang chủ, Trang dịch vụ, và 5 bài /news bất kỳ
const testPages = [
  { path: 'index.html', label: '1. Trang chủ (/)' },
  { path: 'dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html', label: '2. Trang dịch vụ (/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi)' },
  { path: 'news/checklist-dua-bo-me-di-kham-benh-vien/index.html', label: '3. Bài news 1 (checklist-dua-bo-me-di-kham-benh-vien)' },
  { path: 'news/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh/index.html', label: '4. Bài news 2 (rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh)' },
  { path: 'news/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham/index.html', label: '5. Bài news 3 (cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham)' },
  { path: 'news/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi/index.html', label: '6. Bài news 4 (thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi)' },
  { path: 'news/cham-soc-bo-me-tu-xa/index.html', label: '7. Bài news 5 (cham-soc-bo-me-tu-xa)' }
];

console.log('--- 1. KIỂM TRA TRANG CHỦ, TRANG DỊCH VỤ & 5 BÀI NEWS BẤT KỲ ---\n');
testPages.forEach(p => {
  const res = checkFile(p.path, p.label);
  if (res) {
    console.log(`[${res.label}]`);
    console.log(`   - File: dist/${res.path}`);
    console.log(`   - Title: ${res.title}`);
    console.log(`   - Canonical: ${res.canonical}`);
    console.log(`   - Số lượng thẻ H1: ${res.h1Count} (Chỉ duy nhất 1: ${res.h1Count === 1 ? 'ĐẠT' : 'CHƯA ĐẠT'})`);
    console.log(`   - JSON-LD: ${res.hasJsonLd}\n`);
  }
});

// 2. Đếm số câu hỏi trong FAQPage JSON-LD của trang dịch vụ
console.log('--- 2. KIỂM TRA SỐ CÂU HỎI FAQ TRONG JSON-LD TRANG DỊCH VỤ ---\n');
const serviceHtml = fs.readFileSync(path.join(distDir, 'dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html'), 'utf8');
const jsonLds = serviceHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
let faqQuestions = [];

jsonLds.forEach(script => {
  try {
    const raw = script.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '');
    const parsed = JSON.parse(raw);
    let faq = null;
    if (parsed['@type'] === 'FAQPage') faq = parsed;
    if (parsed['@graph']) faq = parsed['@graph'].find(g => g['@type'] === 'FAQPage');
    if (faq && faq.mainEntity) {
      faqQuestions = faq.mainEntity;
    }
  } catch (e) {}
});

console.log(`Số mục "Question" trong FAQPage JSON-LD: ${faqQuestions.length} (Yêu cầu = 8: ${faqQuestions.length === 8 ? 'ĐẠT' : 'CHƯA ĐẠT'})`);
console.log('Danh sách tiêu đề 8 câu hỏi trong JSON-LD:');
faqQuestions.forEach((q, i) => console.log(`   ${i + 1}. ${q.name}`));

// 3. Đếm số câu hỏi hiển thị trên trang dịch vụ
const serviceSummaryMatches = serviceHtml.match(/<summary[^>]*>([\s\S]*?)<\/summary>/gi) || [];
console.log(`\nSố câu hỏi hiển thị trên giao diện trang dịch vụ: ${serviceSummaryMatches.length} (Yêu cầu = 8: ${serviceSummaryMatches.length === 8 ? 'ĐẠT' : 'CHƯA ĐẠT'})`);

// 4. Tổng số file HTML đã prerender so với tổng số bài trong news.json
console.log('\n--- 3. TỔNG SỐ FILE HTML ĐÃ PRERENDER SO VỚI NEWS.JSON ---\n');
const allArticles = [
  ...(newsData.featured ? [newsData.featured] : []),
  ...(newsData.list || [])
];

let newsHtmlCount = 0;
let missingArticles = [];
allArticles.forEach(a => {
  const slug = a.slug || a.id;
  const p = path.join(distDir, 'news', String(slug), 'index.html');
  if (fs.existsSync(p)) {
    newsHtmlCount++;
  } else {
    missingArticles.push(slug);
  }
});

console.log(`Tổng số bài viết trong news.json: ${allArticles.length}`);
console.log(`Tổng số file HTML bài viết đã sinh trong dist/news/: ${newsHtmlCount}`);
if (missingArticles.length > 0) {
  console.log(`Các bài chưa sinh HTML (nếu có):`, missingArticles);
} else {
  console.log(`TẤT CẢ 100% bài viết trong news.json đều đã có file HTML tĩnh tương ứng.`);
}

// Đếm tổng tất cả file index.html trong dist
function countAllIndexHtml(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      count += countAllIndexHtml(full);
    } else if (f === 'index.html') {
      count++;
    }
  }
  return count;
}
const totalPrerenderedHtml = countAllIndexHtml(distDir);
console.log(`Tổng số file index.html tĩnh toàn site trong dist/: ${totalPrerenderedHtml}`);
