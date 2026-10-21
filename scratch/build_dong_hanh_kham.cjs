const fs = require('fs');
const path = require('path');

const inputHtmlPath = path.join(__dirname, 'input_dong_hanh_kham.html');
const rawHtml = fs.readFileSync(inputHtmlPath, 'utf8');

// Parse SEO plan table
const planRows = [
  { num: 1, keyword: 'dịch vụ đồng hành đi khám', slug: 'dich-vu-dong-hanh-di-kham-la-gi', desc: 'Dịch vụ đồng hành đi khám là gì, người đồng hành làm những việc gì, ai nên dùng? Giải thích rõ cho gia đình có bố mẹ cao tuổi.' },
  { num: 2, keyword: 'dịch vụ đưa người già đi khám', slug: 'dua-bo-me-di-kham-khi-con-ban', desc: 'Con bận đi làm, ai đưa bố mẹ đi khám? So sánh 5 cách: xin nghỉ, nhờ người thân, giúp việc, xe công nghệ, dịch vụ đồng hành.' },
  { num: 3, keyword: 'chăm sóc bố mẹ từ xa', slug: 'con-o-xa-cham-bo-me-di-kham', desc: 'Con ở xa hoặc ở nước ngoài vẫn lo được cho bố mẹ đi khám: đặt lịch, thanh toán từ xa, nhận báo cáo và kết quả ngay trong ngày.' },
  { num: 4, keyword: 'đưa người già đi khám cần chuẩn bị gì', slug: 'chuan-bi-gi-khi-dua-nguoi-gia-di-kham', desc: 'Checklist đưa người già đi khám: giấy tờ, BHYT trên VNeID, thuốc đang dùng, nhịn ăn khi xét nghiệm, đồ dùng cá nhân và câu hỏi cho bác sĩ.' },
  { num: 5, keyword: 'khám bảo hiểm y tế người cao tuổi', slug: 'kham-bhyt-nguoi-cao-tuoi', desc: 'Người cao tuổi đi khám BHYT: dùng căn cước hay VNeID thay thẻ giấy, khi nào cần giấy chuyển viện, những điểm mới từ Luật BHYT sửa đổi.' },
  { num: 6, keyword: 'kinh nghiệm đi khám bệnh viện lớn', slug: 'kinh-nghiem-di-kham-benh-vien-lon', desc: 'Quy trình đưa người cao tuổi đi khám ở bệnh viện lớn từng bước: đặt lịch, lấy số, khám, xét nghiệm, đọc kết quả, lấy thuốc. Mẹo đỡ mệt.' },
  { num: 7, keyword: 'đưa người già lên Hà Nội khám', slug: 'dua-nguoi-gia-tu-tinh-len-ha-noi-kham', desc: 'Kinh nghiệm đưa bố mẹ từ tỉnh lên Hà Nội khám: chọn bệnh viện, đi lại, lưu trú, chuẩn bị hồ sơ, và cách có người đồng hành.' },
  { num: 8, keyword: 'giá dịch vụ đưa người già đi khám', slug: 'gia-dich-vu-dong-hanh-di-kham', desc: 'Bảng giá dịch vụ đồng hành đi khám ANTCARE từ 390.000đ/3 giờ. Cách tính giờ, chi phí đi lại, và so sánh với tự đưa bố mẹ đi khám.' },
  { num: 9, keyword: 'dịch vụ đi khám cùng người già uy tín', slug: 'chon-dich-vu-dong-hanh-di-kham-uy-tin', desc: '7 tiêu chí chọn dịch vụ đồng hành đi khám uy tín và dấu hiệu "cò" bệnh viện cần tránh, để bố mẹ được đi khám an toàn.' },
  { num: 10, keyword: 'tái khám định kỳ người cao tuổi', slug: 'tai-kham-dinh-ky-benh-man-tinh', desc: 'Vì sao người cao tuổi bị tăng huyết áp, tiểu đường không nên bỏ tái khám, và cách gia đình duy trì lịch khám đều đặn cho bố mẹ.' }
];

const articleIdMap = {
  'dong-hanh-di-kham-la-gi': 'dich-vu-dong-hanh-di-kham-la-gi',
  'con-ban-ai-dua-bo-me-di-kham': 'dua-bo-me-di-kham-khi-con-ban',
  'con-o-xa': 'con-o-xa-cham-bo-me-di-kham',
  'chuan-bi-gi': 'chuan-bi-gi-khi-dua-nguoi-gia-di-kham',
  'kham-bhyt': 'kham-bhyt-nguoi-cao-tuoi',
  'quy-trinh-benh-vien-lon': 'kinh-nghiem-di-kham-benh-vien-lon',
  'tu-tinh-len-ha-noi': 'dua-nguoi-gia-tu-tinh-len-ha-noi-kham',
  'bang-gia': 'gia-dich-vu-dong-hanh-di-kham',
  'chon-dich-vu-uy-tin': 'chon-dich-vu-dong-hanh-di-kham-uy-tin',
  'tai-kham-dinh-ky': 'tai-kham-dinh-ky-benh-man-tinh'
};

const imageMap = {
  'dich-vu-dong-hanh-di-kham-la-gi': '/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg',
  'dua-bo-me-di-kham-khi-con-ban': '/images/dua-bo-me-di-kham-benh.jpg',
  'con-o-xa-cham-bo-me-di-kham': '/images/con-o-xa-bo-me-di-kham-mot-minh.jpg',
  'chuan-bi-gi-khi-dua-nguoi-gia-di-kham': '/images/checklist-dua-bo-me-di-kham-benh-vien.jpg',
  'kham-bhyt-nguoi-cao-tuoi': '/images/tin-tuc/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi.jpg',
  'kinh-nghiem-di-kham-benh-vien-lon': '/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg',
  'dua-nguoi-gia-tu-tinh-len-ha-noi-kham': '/images/tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh.jpg',
  'gia-dich-vu-dong-hanh-di-kham': '/images/quy-trinh-dong-hanh-di-kham-antcare.jpg',
  'chon-dich-vu-dong-hanh-di-kham-uy-tin': '/images/tin-tuc/tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare.jpg',
  'tai-kham-dinh-ky-benh-man-tinh': '/images/tin-tuc/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi.jpg'
};

const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

// Internal link replacements for hash links between the 10 articles
const hashReplacements = [
  { from: /href="#dong-hanh-di-kham-la-gi"/g, to: 'href="/news/dich-vu-dong-hanh-di-kham-la-gi"' },
  { from: /href="#con-ban-ai-dua-bo-me-di-kham"/g, to: 'href="/news/dua-bo-me-di-kham-khi-con-ban"' },
  { from: /href="#con-o-xa"/g, to: 'href="/news/con-o-xa-cham-bo-me-di-kham"' },
  { from: /href="#chuan-bi-gi"/g, to: 'href="/news/chuan-bi-gi-khi-dua-nguoi-gia-di-kham"' },
  { from: /href="#kham-bhyt"/g, to: 'href="/news/kham-bhyt-nguoi-cao-tuoi"' },
  { from: /href="#quy-trinh-benh-vien-lon"/g, to: 'href="/news/kinh-nghiem-di-kham-benh-vien-lon"' },
  { from: /href="#tu-tinh-len-ha-noi"/g, to: 'href="/news/dua-nguoi-gia-tu-tinh-len-ha-noi-kham"' },
  { from: /href="#bang-gia"/g, to: 'href="/news/gia-dich-vu-dong-hanh-di-kham"' },
  { from: /href="#chon-dich-vu-uy-tin"/g, to: 'href="/news/chon-dich-vu-dong-hanh-di-kham-uy-tin"' },
  { from: /href="#tai-kham-dinh-ky"/g, to: 'href="/news/tai-kham-dinh-ky-benh-man-tinh"' }
];

// Extract all articles: <article id="..."> ... </article>
const articleRegex = /<article\s+id="([^"]+)">([\s\S]*?)<\/article>/gi;
let match;
const parsedArticles = [];
let index = 0;

while ((match = articleRegex.exec(rawHtml)) !== null) {
  const rawId = match[1];
  const articleInnerHtml = match[2];
  const baiNum = index + 1;
  const plan = planRows[index];
  const slug = plan ? plan.slug : (articleIdMap[rawId] || rawId);

  // Extract H2 for Title
  const h2Match = articleInnerHtml.match(/<h2>([\s\S]*?)<\/h2>/i);
  const title = h2Match ? h2Match[1].trim() : '';

  // Extract meta keywords
  const metaMatch = articleInnerHtml.match(/<p class="meta">([\s\S]*?)<\/p>/i);
  let keywords = plan ? plan.keyword : '';
  if (metaMatch) {
    const kMatch = metaMatch[1].match(/Từ khóa:\s*(.*?)$/i);
    if (kMatch) keywords = kMatch[1].trim();
  }

  // Extract answer for excerpt
  const answerMatch = articleInnerHtml.match(/<div class="answer">([\s\S]*?)<\/div>/i);
  let excerpt = plan ? plan.desc : '';
  if (answerMatch) {
    excerpt = answerMatch[1].replace(/<[^>]+>/g, '').replace(/^Trả lời nhanh:\s*/i, '').trim();
  }

  // Build clean article content HTML
  let content = articleInnerHtml;
  // Replace internal hash links with real links
  hashReplacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // Convert the top h2 to h1 for the article's own page content
  content = content.replace(/<h2>([\s\S]*?)<\/h2>/i, '<h1>$1</h1>\n<p class="byline">ANTCARE · Cập nhật 20/10/2026 · 6 phút đọc</p>');

  // New ID: 227 down to 218
  const id = 227 - index;

  const oldSlugs = [
    `kien-thuc/${slug}`,
    `dong-hanh-di-kham/${slug}`,
    `dong-hanh-kham-benh/${slug}`,
    `tin-tuc/${slug}`,
    `blog/${slug}`,
    `news/${slug}`,
    slug
  ];
  if (rawId !== slug) {
    oldSlugs.push(rawId);
    oldSlugs.push(`kien-thuc/${rawId}`);
    oldSlugs.push(`dong-hanh-di-kham/${rawId}`);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://antcare.vn/news/${slug}/`,
    "headline": title,
    "description": plan ? plan.desc : excerpt,
    "inLanguage": "vi",
    "datePublished": "2026-10-20",
    "dateModified": "2026-10-20",
    "author": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn/",
      "logo": "https://antcare.vn/logo.png"
    },
    "image": imageMap[slug] || "/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg"
  };

  parsedArticles.push({
    baiNum,
    id,
    slug,
    group: "dong-hanh-di-kham",
    oldSlugs,
    title,
    metaTitle: `${title} | ANTCARE`,
    description: plan ? plan.desc : excerpt,
    excerpt,
    category: "Đồng hành đi khám",
    date: "20/10/2026",
    datePublished: "2026-10-20",
    dateModified: "2026-10-20",
    keywords,
    image: imageMap[slug] || "/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg",
    author: authorObj,
    content: `<div class="article-dong-hanh-di-kham article-guide">\n${content.trim()}\n</div>`,
    schema
  });

  index++;
}

console.log(`Extracted ${parsedArticles.length} articles.`);
parsedArticles.forEach(a => {
  console.log(`Bài ${a.baiNum} [ID ${a.id}]: ${a.slug} | ${a.title.slice(0, 40)}...`);
});

// Write to scratch/parsed_dong_hanh_kham.json for verification
fs.writeFileSync(path.join(__dirname, 'parsed_dong_hanh_kham.json'), JSON.stringify(parsedArticles, null, 2), 'utf8');
