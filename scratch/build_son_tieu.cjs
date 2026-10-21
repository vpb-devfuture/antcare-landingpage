const fs = require('fs');
const path = require('path');

const inputHtmlPath = path.join(__dirname, 'input_son_tieu.html');
const rawHtml = fs.readFileSync(inputHtmlPath, 'utf8');

// Parse SEO plan table
const planRows = [
  { num: 1, keyword: 'són tiểu là gì', slug: 'son-tieu-la-gi', desc: 'Són tiểu là gì, có mấy dạng, vì sao phụ nữ hay gặp và khi nào cần đi khám? Giải thích dễ hiểu kèm cách xử lý ban đầu tại nhà.' },
  { num: 2, keyword: 'són tiểu sau sinh', slug: 'son-tieu-sau-sinh', desc: 'Són tiểu sau sinh vì sao xảy ra, kéo dài bao lâu, có tự hết không? Cách tập phục hồi sàn chậu và mặc gì để tự tin sau sinh.' },
  { num: 3, keyword: 'són tiểu tuổi mãn kinh', slug: 'son-tieu-tuoi-man-kinh', desc: 'Vì sao phụ nữ tuổi mãn kinh dễ bị són tiểu và cách sinh hoạt thoải mái: tập luyện, thói quen, quần thấm hút thay băng vệ sinh.' },
  { num: 4, keyword: 'són tiểu ở người già', slug: 'son-tieu-nguoi-cao-tuoi', desc: 'Hướng dẫn chăm sóc người cao tuổi bị són tiểu tại nhà: phân biệt mức độ, chọn quần hay bỉm, giữ da sạch và giữ sự tự trọng cho bố mẹ.' },
  { num: 5, keyword: 'són tiểu có nên dùng băng vệ sinh', slug: 'son-tieu-co-nen-dung-bang-ve-sinh', desc: 'Dùng băng vệ sinh khi són tiểu có ổn không? 4 lý do băng vệ sinh không phù hợp và những lựa chọn thay thế tốt hơn.' },
  { num: 6, keyword: 'quần chống són tiểu', slug: 'quan-chong-son-tieu-la-gi', desc: 'Quần chống són tiểu là gì, có mấy lớp, thấm được bao nhiêu, ai nên dùng? Ưu nhược điểm so với bỉm và miếng lót.' },
  { num: 7, keyword: 'băng vệ sinh hay bỉm khi són tiểu', slug: 'so-sanh-giai-phap-son-tieu', desc: 'So sánh băng vệ sinh, miếng lót són, quần thấm hút giặt được và bỉm người lớn: chọn đúng theo mức độ són tiểu.' },
  { num: 8, keyword: 'cách chọn quần chống són tiểu', slug: 'cach-chon-quan-chong-son-tieu', desc: '7 tiêu chí chọn quần chống són tiểu: mức thấm, vùng thấm, size, chất liệu, khử mùi, chứng nhận an toàn và giá.' },
  { num: 9, keyword: 'cách giặt quần thấm hút', slug: 'cach-giat-quan-tham-hut', desc: 'Cách giặt và bảo quản quần thấm hút chống són đúng: xả nước lạnh, không nước xả vải, phơi khô tự nhiên. Mẹo khử mùi và dùng bền.' },
  { num: 10, keyword: 'bài tập kegel chữa són tiểu', slug: 'bai-tap-kegel-giam-son-tieu', desc: 'Hướng dẫn bài tập Kegel cho người bị són tiểu và 6 thói quen giúp bàng quang khỏe hơn. Khi nào cần gặp bác sĩ.' },
];

const articleIdMap = {
  'son-tieu-la-gi': 'son-tieu-la-gi',
  'son-tieu-sau-sinh': 'son-tieu-sau-sinh',
  'son-tieu-tuoi-man-kinh': 'son-tieu-tuoi-man-kinh',
  'son-tieu-nguoi-cao-tuoi': 'son-tieu-nguoi-cao-tuoi',
  'khong-nen-dung-bang-ve-sinh': 'son-tieu-co-nen-dung-bang-ve-sinh',
  'quan-chong-son-tieu-la-gi': 'quan-chong-son-tieu-la-gi',
  'so-sanh-giai-phap': 'so-sanh-giai-phap-son-tieu',
  'cach-chon-quan': 'cach-chon-quan-chong-son-tieu',
  'cach-giat-quan': 'cach-giat-quan-tham-hut',
  'bai-tap-kegel': 'bai-tap-kegel-giam-son-tieu',
};

const imageMap = {
  'son-tieu-la-gi': '/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg',
  'son-tieu-sau-sinh': '/images/cham-soc-nguoi-cao-tuoi-tai-nha.jpg',
  'son-tieu-tuoi-man-kinh': '/images/tin-tuc/dau-hieu-bo-me-can-theo-doi-suc-khoe.jpg',
  'son-tieu-nguoi-cao-tuoi': '/images/tin-tuc/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg',
  'son-tieu-co-nen-dung-bang-ve-sinh': '/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg',
  'quan-chong-son-tieu-la-gi': '/images/tin-tuc/cach-do-size-bim-nguoi-lon.jpg',
  'so-sanh-giai-phap-son-tieu': '/images/tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me.jpg',
  'cach-chon-quan-chong-son-tieu': '/images/tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao.jpg',
  'cach-giat-quan-tham-hut': '/images/tin-tuc/thay-bim-cho-nguoi-nam-liet-dung-cach.jpg',
  'bai-tap-kegel-giam-son-tieu': '/images/tin-tuc/bai-tap-van-dong-cho-nguoi-cao-tuoi-tai-nha.jpg',
};

const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

// Internal link replacements for hash links between the 10 articles
const hashReplacements = [
  { from: /href="#son-tieu-la-gi"/g, to: 'href="/news/son-tieu-la-gi"' },
  { from: /href="#son-tieu-sau-sinh"/g, to: 'href="/news/son-tieu-sau-sinh"' },
  { from: /href="#son-tieu-tuoi-man-kinh"/g, to: 'href="/news/son-tieu-tuoi-man-kinh"' },
  { from: /href="#son-tieu-nguoi-cao-tuoi"/g, to: 'href="/news/son-tieu-nguoi-cao-tuoi"' },
  { from: /href="#khong-nen-dung-bang-ve-sinh"/g, to: 'href="/news/son-tieu-co-nen-dung-bang-ve-sinh"' },
  { from: /href="#quan-chong-son-tieu-la-gi"/g, to: 'href="/news/quan-chong-son-tieu-la-gi"' },
  { from: /href="#so-sanh-giai-phap"/g, to: 'href="/news/so-sanh-giai-phap-son-tieu"' },
  { from: /href="#cach-chon-quan"/g, to: 'href="/news/cach-chon-quan-chong-son-tieu"' },
  { from: /href="#cach-giat-quan"/g, to: 'href="/news/cach-giat-quan-tham-hut"' },
  { from: /href="#bai-tap-kegel"/g, to: 'href="/news/bai-tap-kegel-giam-son-tieu"' },
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

  // Wrap in standard container or preserve clean HTML structure
  // Change h2 in body to h1 + h2 or keep h2
  // We can convert the top h2 to h1 for the article's own page content
  content = content.replace(/<h2>([\s\S]*?)<\/h2>/i, '<h1>$1</h1>\n<p class="byline">ANTCARE · Cập nhật 19/10/2026 · 6 phút đọc</p>');

  // New ID: 217 down to 208
  const id = 217 - index;

  const oldSlugs = [
    `kien-thuc/${slug}`,
    `tieu-son/${slug}`,
    `son-tieu/${slug}`,
    `tin-tuc/${slug}`,
    `blog/${slug}`,
    `news/${slug}`,
    slug
  ];
  if (rawId !== slug) {
    oldSlugs.push(rawId);
    oldSlugs.push(`kien-thuc/${rawId}`);
    oldSlugs.push(`tieu-son/${rawId}`);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://antcare.vn/news/${slug}/`,
    "headline": title,
    "description": plan ? plan.desc : excerpt,
    "inLanguage": "vi",
    "datePublished": "2026-10-19",
    "dateModified": "2026-10-19",
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
    "image": imageMap[slug] || "/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg"
  };

  parsedArticles.push({
    baiNum,
    id,
    slug,
    group: "son-tieu",
    oldSlugs,
    title,
    metaTitle: `${title} | ANTCARE`,
    description: plan ? plan.desc : excerpt,
    excerpt,
    category: "Tiểu són",
    date: "19/10/2026",
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    keywords,
    image: imageMap[slug] || "/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg",
    author: authorObj,
    content: `<div class="article-son-tieu">\n${content.trim()}\n</div>`,
    schema
  });

  index++;
}

console.log(`Extracted ${parsedArticles.length} articles.`);
parsedArticles.forEach(a => {
  console.log(`Bài ${a.baiNum} [ID ${a.id}]: ${a.slug} | ${a.title.slice(0, 40)}...`);
});

// Write to scratch/parsed_son_tieu.json for verification
fs.writeFileSync(path.join(__dirname, 'parsed_son_tieu.json'), JSON.stringify(parsedArticles, null, 2), 'utf8');
