const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const newsData = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'news.json'), 'utf8'));

console.log('====================================================');
console.log('KIỂM TRA NGHIỆM THU 4 ĐIỂM YÊU CẦU');
console.log('====================================================\n');

// 1. Check Gói Trợ lý Sức khỏe price box
console.log('--- ĐIỂM 1: KIỂM TRA BOX GÓI TRỢ LÝ SỨC KHỎE & GIÁ CẢ ---');
const serviceHtml = fs.readFileSync(path.join(distDir, 'dich-vu', 'dua-nguoi-cao-tuoi-di-kham-ha-noi', 'index.html'), 'utf8');
const escortJsx = fs.readFileSync(path.join(rootDir, 'src', 'pages', 'MedicalEscortService.jsx'), 'utf8');

const targetText = 'Xem thêm các Gói Trợ lý Sức khỏe định kỳ tại nhà, từ 990.000đ/tháng.';
const serviceHasCorrectText = serviceHtml.includes('từ 990.000đ/tháng');
const jsxHasCorrectText = escortJsx.includes('từ 990.000đ/tháng');
console.log('Service page HTML dist có câu "từ 990.000đ/tháng":', serviceHasCorrectText ? 'ĐÚNG' : 'SAI');
console.log('MedicalEscortService.jsx có câu "từ 990.000đ/tháng":', jsxHasCorrectText ? 'ĐÚNG' : 'SAI');
console.log('Không hề có chữ 1.190.000đ trong dist service page:', !serviceHtml.includes('1.190.000') ? 'ĐÚNG' : 'SAI');

// 2. FAQPage JSON-LD name formatting
console.log('\n--- ĐIỂM 2: KIỂM TRA FAQP在这个 JSON-LD (BỎ SỐ THỨ TỰ) ---');
const faqQuestions = [];
const qRegex = /"name":\s*"([^"]+)"/g;
let match;
const faqPart = serviceHtml.substring(serviceHtml.indexOf('"@type": "FAQPage"'));
while ((match = qRegex.exec(faqPart)) !== null) {
  faqQuestions.push(match[1]);
  if (faqQuestions.length >= 8) break;
}
console.log(`Số câu hỏi tìm thấy: ${faqQuestions.length}`);
let hasLeadingNumbers = false;
faqQuestions.forEach((q, idx) => {
  const startsWithNumber = /^\d+\.\s*/.test(q);
  if (startsWithNumber) hasLeadingNumbers = true;
  console.log(`   Câu ${idx + 1}: "${q}" -> ${startsWithNumber ? 'CHƯA BỎ SỐ' : 'ĐÃ BỎ SỐ (ĐẠT)'}`);
});
console.log('Kết luận JSON-LD FAQ name:', !hasLeadingNumbers ? 'ĐẠT 100%' : 'CHƯA ĐẠT');

// 3. Phân loại 133 bài trong news.json
console.log('\n--- ĐIỂM 3: PHÂN LOẠI 133 BÀI TRONG news.json ---');
const allNews = [newsData.featured, ...(newsData.list || [])].filter(Boolean);
console.log('Tổng số bài trong news.json:', allNews.length);
let publishedCount = 0;
let draftCount = 0;
let viCount = 0;
let enCount = 0;
const viRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;

allNews.forEach(p => {
  if (p.draft || p.published === false || p.status === 'draft') {
    draftCount++;
  } else {
    publishedCount++;
  }
  if (viRegex.test(p.title) || viRegex.test(p.description || '')) {
    viCount++;
  } else {
    enCount++;
  }
});
console.log(`- Bài tiếng Việt đang publish: ${publishedCount} / ${allNews.length}`);
console.log(`- Bài nháp / ẩn: ${draftCount}`);
console.log(`- Bài tiếng Anh trong news.json: ${enCount}`);

const enJsonPath = path.join(rootDir, 'src', 'data', 'news.en.json');
if (fs.existsSync(enJsonPath)) {
  const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
  const enList = enData.list || enData;
  console.log(`- Bản tiếng Anh riêng (tại news.en.json): ${enList.length} bài`);
  enList.forEach((p, idx) => {
    console.log(`    ${idx + 1}. [ID: ${p.id}] Slug: ${p.slug} | Title: "${p.title}"`);
  });
}

// 4. Kiểm tra mọi route trong React Router và trạng thái prerender
console.log('\n--- ĐIỂM 4: DANH SÁCH ROUTE & TRẠNG THÁI PRERENDER ---');
const routes = [
  { path: '/', file: 'index.html', desc: 'Trang chủ' },
  { path: '/giai-phap-cham-soc', file: 'giai-phap-cham-soc/index.html', desc: 'Giải pháp chăm sóc' },
  { path: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi', file: 'dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html', desc: 'Dịch vụ đưa đi khám' },
  { path: '/san-pham', file: 'san-pham/index.html', desc: 'Sản phẩm' },
  { path: '/san-pham/bang-luon-day-beo', file: 'san-pham/bang-luon-day-beo/index.html', desc: 'Chi tiết sản phẩm' },
  { path: '/activities', file: 'activities/index.html', desc: 'Hoạt động' },
  { path: '/news', file: 'news/index.html', desc: 'Tin tức' },
  { path: '/blog', file: 'blog/index.html', desc: 'Blog (alias tin tức)' },
  { path: '/recruitment', file: 'recruitment/index.html', desc: 'Tuyển dụng' },
  { path: '/hop-tac', file: 'hop-tac/index.html', desc: 'Hợp tác' },
  { path: '/lien-he', file: 'lien-he/index.html', desc: 'Liên hệ' },
  { path: '/privacy-policy', file: 'privacy-policy/index.html', desc: 'Chính sách bảo mật' },
  { path: '/terms-of-use', file: 'terms-of-use/index.html', desc: 'Điều khoản sử dụng' },
  { path: '/ve-antcare', file: 've-antcare/index.html', desc: 'Về ANTCARE' },
  { path: '/about', file: 'about/index.html', desc: 'About (alias)' },
  { path: '/404.html', file: '404.html', desc: 'Trang lỗi 404 thân thiện' }
];

let allRoutesPrerendered = true;
routes.forEach(r => {
  const filePath = path.join(distDir, r.file);
  const exists = fs.existsSync(filePath);
  if (!exists) allRoutesPrerendered = false;
  console.log(`   Route: ${r.path.padEnd(46)} -> ${exists ? 'PRERENDER THÀNH CÔNG' : 'CHƯA CÓ'} (${r.desc})`);
});

// Check activities articles prerendered
const activitiesData = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'activities.json'), 'utf8'));
console.log(`\nKiểm tra 6 bài viết Hoạt động (/activities/:slug):`);
activitiesData.forEach(act => {
  const actPath = path.join(distDir, 'activities', act.slug, 'index.html');
  const exists = fs.existsSync(actPath);
  console.log(`   /activities/${act.slug.padEnd(50)} -> ${exists ? 'PRERENDER THÀNH CÔNG' : 'CHƯA CÓ'}`);
});

console.log('\nTổng số URL trong dist/sitemap.xml:', (fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8').match(/<loc>/g) || []).length);
