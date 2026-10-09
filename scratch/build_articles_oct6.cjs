const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'input_articles_oct6.html');
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

const imageMap = {
  'thang-hanh-dong-vi-nguoi-cao-tuoi-2026-cham-soc-tich-hop': '/images/tin-tuc/thang-hanh-dong-nguoi-cao-tuoi-2026.jpg',
  'nghi-dinh-335-2026-tro-cap-nguoi-cao-tuoi': '/images/tin-tuc/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026.jpg',
  'kham-suc-khoe-mien-phi-2026-nguoi-cao-tuoi': '/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg',
  'so-suc-khoe-dien-tu-vneid-cho-nguoi-cao-tuoi': '/images/tin-tuc/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi.jpg',
  'bhyt-chi-tra-100-nguoi-cao-tuoi-75-tuoi': '/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg',
  'uy-quyen-nhan-luong-huu-2026': '/images/tin-tuc/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi.jpg',
  'lua-dao-nguoi-cao-tuoi-2026-cach-phong-tranh': '/images/tin-tuc/khi-con-o-xa-an-tam-voi-app-antcare.jpg',
  'c-sui-gia-thuc-pham-bo-sung-nguoi-cao-tuoi': '/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg',
  'dot-quy-nguoi-cao-tuoi-khi-troi-chuyen-lanh': '/images/tin-tuc/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong.jpg',
  'cum-mua-thu-dong-nguoi-cao-tuoi': '/images/tin-tuc/cum-mua-2026-nguoi-cao-tuoi-nen-biet.jpg'
};

const categoryMap = {
  'thang-hanh-dong-vi-nguoi-cao-tuoi-2026-cham-soc-tich-hop': 'Chăm sóc sức khỏe',
  'nghi-dinh-335-2026-tro-cap-nguoi-cao-tuoi': 'Chính sách & Quyền lợi',
  'kham-suc-khoe-mien-phi-2026-nguoi-cao-tuoi': 'Cẩm nang đi khám',
  'so-suc-khoe-dien-tu-vneid-cho-nguoi-cao-tuoi': 'Công nghệ Y tế',
  'bhyt-chi-tra-100-nguoi-cao-tuoi-75-tuoi': 'Bảo hiểm Y tế & Thủ tục',
  'uy-quyen-nhan-luong-huu-2026': 'Chính sách & Quyền lợi',
  'lua-dao-nguoi-cao-tuoi-2026-cach-phong-tranh': 'An toàn người cao tuổi',
  'c-sui-gia-thuc-pham-bo-sung-nguoi-cao-tuoi': 'Chăm sóc sức khỏe',
  'dot-quy-nguoi-cao-tuoi-khi-troi-chuyen-lanh': 'Cấp cứu & Phòng ngừa Đột quỵ',
  'cum-mua-thu-dong-nguoi-cao-tuoi': 'Phòng ngừa bệnh tật'
};

const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

// Split by article tags
const articleRegex = /<article\s+id="bai-(\d+)">([\s\S]*?)<\/article>/gi;
let match;
const parsedArticles = [];

while ((match = articleRegex.exec(rawHtml)) !== null) {
  const baiNum = parseInt(match[1], 10);
  const articleHtml = match[2];

  // Extract SEO Meta
  const seoMetaMatch = articleHtml.match(/<div class="seo-meta">([\s\S]*?)<\/div>/i);
  let metaTitle = '';
  let metaDesc = '';
  let slug = '';
  let keywords = '';

  if (seoMetaMatch) {
    const metaBlock = seoMetaMatch[1];
    const mTitle = metaBlock.match(/<b>SEO Title:<\/b>\s*(.*?)(?:<br>|\n|$)/i);
    if (mTitle) metaTitle = mTitle[1].trim();

    const mDesc = metaBlock.match(/<b>Meta description:<\/b>\s*(.*?)(?:<br>|\n|$)/i);
    if (mDesc) metaDesc = mDesc[1].trim();

    const mSlug = metaBlock.match(/<b>Slug:<\/b>\s*\/?(.*?)(?:<br>|\n|$)/i);
    if (mSlug) slug = mSlug[1].replace(/^\//, '').trim();

    const mKeys = metaBlock.match(/<b>Từ khóa chính:<\/b>\s*(.*?)(?:<br>|\n|$)/i);
    if (mKeys) keywords = mKeys[1].replace(/·\s*<b>Phụ:<\/b>/g, ',').trim();
  }

  // Extract H1
  const h1Match = articleHtml.match(/<h1>([\s\S]*?)<\/h1>/i);
  const title = h1Match ? h1Match[1].trim() : metaTitle;

  // Extract quick answer for excerpt
  const answerMatch = articleHtml.match(/<div class="answer">([\s\S]*?)<\/div>/i);
  let excerpt = metaDesc;
  if (answerMatch) {
    excerpt = answerMatch[1].replace(/<[^>]+>/g, '').trim();
    excerpt = excerpt.replace(/^Trả lời nhanh:\s*/i, '');
  }

  // Extract schema JSON-LD
  const schemaMatch = articleHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  let schema = null;
  if (schemaMatch) {
    try {
      schema = JSON.parse(schemaMatch[1].trim());
    } catch (e) {
      console.error(`Failed to parse schema for Bài ${baiNum}:`, e.message);
    }
  }

  // Clean article content:
  // Remove .seo-meta div
  let cleanContent = articleHtml.replace(/<div class="seo-meta">[\s\S]*?<\/div>/gi, '');
  // Remove JSON-LD script tag from body (it will be injected in head or schema markup)
  cleanContent = cleanContent.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  cleanContent = cleanContent.trim();

  // ID allocation: Bài 1 -> 182, Bài 2 -> 181, ..., Bài 10 -> 173
  const id = 182 - (baiNum - 1);

  parsedArticles.push({
    baiNum,
    id,
    slug,
    oldSlugs: [
      `tin-tuc/${slug}`,
      `blog/${slug}`,
      slug
    ],
    title,
    metaTitle,
    description: metaDesc,
    excerpt,
    category: categoryMap[slug] || "Chăm sóc sức khỏe",
    date: "06/10/2026",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    keywords,
    image: imageMap[slug] || "/images/tin-tuc/thang-hanh-dong-nguoi-cao-tuoi-2026.jpg",
    author: authorObj,
    content: cleanContent,
    schema
  });
}

console.log(`Parsed ${parsedArticles.length} articles.`);
parsedArticles.forEach(a => {
  console.log(`Bài ${a.baiNum} [ID ${a.id}]: ${a.slug} (${a.category})`);
});

// Update news.json
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Filter out any existing with these IDs or slugs just in case
const existingSlugs = new Set(parsedArticles.map(a => a.slug));
const existingIds = new Set(parsedArticles.map(a => a.id));

newsData.list = newsData.list.filter(item => !existingIds.has(item.id) && !existingSlugs.has(item.slug));

// Prepend the new articles in order (id 182 down to 173)
newsData.list = [...parsedArticles, ...newsData.list];

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated ${newsFilePath} with ${parsedArticles.length} articles! Total articles in list: ${newsData.list.length}`);
