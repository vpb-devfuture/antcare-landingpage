const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'input_articles_oct12.html');
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

const imageMap = {
  'son-tieu-o-nguoi-cao-tuoi': '/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg',
  'bai-tap-kegel-cho-nguoi-cao-tuoi': '/images/tin-tuc/bai-tap-van-dong-cho-nguoi-cao-tuoi-tai-nha.jpg',
  'quan-lot-chong-son-tieu-cach-chon': '/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg',
  'cach-dung-va-giat-quan-lot-chong-son-tieu': '/images/tin-tuc/thay-bim-cho-nguoi-nam-liet-dung-cach.jpg',
  'so-sanh-quan-lot-chong-son-bim-nguoi-lon-mieng-lot': '/images/tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me.jpg',
  'son-tieu-o-nam-gioi-cao-tuoi': '/images/tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao.jpg',
  'tieu-dem-o-nguoi-cao-tuoi': '/images/tin-tuc/phong-nga-nguoi-cao-tuoi-mua-lanh.jpg',
  'cham-soc-da-vung-kin-nguoi-son-tieu': '/images/tin-tuc/ham-do-mac-bim-o-nguoi-cao-tuoi.jpg',
  'tien-man-kinh-dau-hieu-do-tuoi': '/images/tin-tuc/bo-me-noi-van-khoe-dau-hieu-can-chu-y.jpg',
  'quan-lot-ky-kinh-tien-man-kinh': '/images/tin-tuc/cach-do-size-bim-nguoi-lon.jpg',
  'hoi-chung-nieu-sinh-duc-man-kinh': '/images/tin-tuc/dau-hieu-bo-me-can-theo-doi-suc-khoe.jpg',
  'loang-xuong-sau-man-kinh': '/images/tin-tuc/loang-xuong-o-nguoi-cao-tuoi-phong-ngua.jpg',
  'mo-hinh-cham-soc-nguoi-cao-tuoi-2026': '/images/tin-tuc/mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi.jpg',
  'benh-mat-nguoi-cao-tuoi': '/images/tin-tuc/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi.jpg',
  'tram-cam-co-don-nguoi-cao-tuoi': '/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg'
};

const categoryMap = {
  'son-tieu-o-nguoi-cao-tuoi': 'Chăm sóc sức khỏe',
  'bai-tap-kegel-cho-nguoi-cao-tuoi': 'Chăm sóc sức khỏe',
  'quan-lot-chong-son-tieu-cach-chon': 'Chăm sóc sức khỏe',
  'cach-dung-va-giat-quan-lot-chong-son-tieu': 'Chăm sóc sức khỏe',
  'so-sanh-quan-lot-chong-son-bim-nguoi-lon-mieng-lot': 'Chăm sóc sức khỏe',
  'son-tieu-o-nam-gioi-cao-tuoi': 'Chăm sóc sức khỏe',
  'tieu-dem-o-nguoi-cao-tuoi': 'Chăm sóc sức khỏe',
  'cham-soc-da-vung-kin-nguoi-son-tieu': 'Chăm sóc sức khỏe',
  'tien-man-kinh-dau-hieu-do-tuoi': 'Chăm sóc sức khỏe',
  'quan-lot-ky-kinh-tien-man-kinh': 'Chăm sóc sức khỏe',
  'hoi-chung-nieu-sinh-duc-man-kinh': 'Chăm sóc sức khỏe',
  'loang-xuong-sau-man-kinh': 'Chăm sóc sức khỏe',
  'mo-hinh-cham-soc-nguoi-cao-tuoi-2026': 'Chăm sóc sức khỏe',
  'benh-mat-nguoi-cao-tuoi': 'Chăm sóc sức khỏe',
  'tram-cam-co-don-nguoi-cao-tuoi': 'Chăm sóc sức khỏe'
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

  // ID allocation: Bài 1 -> 197, Bài 2 -> 196, ..., Bài 15 -> 183
  const id = 197 - (baiNum - 1);

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
    date: "12/10/2026",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    keywords,
    image: imageMap[slug] || "/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg",
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

// Prepend the new articles in order (id 197 down to 183)
newsData.list = [...parsedArticles, ...newsData.list];

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated ${newsFilePath} with ${parsedArticles.length} articles! Total articles in list: ${newsData.list.length}`);
