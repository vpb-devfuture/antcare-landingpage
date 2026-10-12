const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'input_articles_oct12_batch3.html');
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

const imageMap = {
  'quan-lot-tham-hut-sau-sinh': '/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg',
  'ri-tieu-khi-chay-bo-tap-gym': '/images/tin-tuc/bai-tap-van-dong-cho-nguoi-cao-tuoi-tai-nha.jpg',
  'quan-boxer-chong-ro-ri-cho-nam': '/images/tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao.jpg',
  'quan-lot-tham-hut-thay-bang-hang-ngay': '/images/tin-tuc/ham-do-mac-bim-o-nguoi-cao-tuoi.jpg',
  'quan-lot-chong-ro-ri-khi-di-du-lich': '/images/tin-tuc/chuan-bi-gi-khi-dua-bo-me-di-kham-benh.jpg',
  'chat-lieu-quan-lot-chuc-nang': '/images/tin-tuc/cach-do-size-bim-nguoi-lon.jpg',
  'quan-lot-mo-hong-khuy-bam': '/images/tin-tuc/bo-cham-soc-nguoi-nam-liet-tai-nha-gom-nhung-gi.jpg',
  'quan-lot-bao-ve-hong': '/images/tin-tuc/cai-tao-nha-o-chong-truot-nga-cho-nguoi-cao-tuoi.jpg',
  'quan-lot-cho-nguoi-sa-sut-tri-nho': '/images/tin-tuc/sa-sut-tri-tue-nguoi-cao-tuoi.jpg',
  'quan-lot-tham-qua-dem-tam-lot-giuong': '/images/tin-tuc/tam-lot-giuong-khi-nao-can-va-chon-the-nao.jpg'
};

const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

// Split by article tags
const articleRegex = /<article\s+id="bai-(\d+)"(?:\s+class="([^"]*)")?>([\s\S]*?)<\/article>/gi;
let match;
const parsedArticles = [];

while ((match = articleRegex.exec(rawHtml)) !== null) {
  const baiNum = parseInt(match[1], 10);
  const articleClass = match[2] || '';
  const articleHtml = match[3];

  const isGroupA = baiNum <= 6 || articleClass.includes('a');
  const category = isGroupA ? 'Sống tự tin' : 'Chăm sóc người cao tuổi';

  // Extract SEO Meta
  const seoMetaMatch = articleHtml.match(/<div class="seo-meta">([\s\S]*?)<\/div>/i);
  let metaTitle = '';
  let metaDesc = '';
  let rawSlug = '';
  let keywords = '';

  if (seoMetaMatch) {
    const metaBlock = seoMetaMatch[1];
    const mTitle = metaBlock.match(/<b>SEO Title:<\/b>\s*(.*?)(?:<br>|\n|$)/i);
    if (mTitle) metaTitle = mTitle[1].trim();

    const mDesc = metaBlock.match(/<b>Meta description:<\/b>\s*(.*?)(?:<br>|\n|$)/i);
    if (mDesc) metaDesc = mDesc[1].trim();

    const mSlug = metaBlock.match(/<b>Slug:<\/b>\s*\/?(.*?)(?:<br>|\n|$)/i);
    if (mSlug) rawSlug = mSlug[1].replace(/^\//, '').trim();

    const mKeys = metaBlock.match(/<b>Từ khóa chính:<\/b>\s*(.*?)(?:<br>|\n|$)/i);
    if (mKeys) keywords = mKeys[1].replace(/·\s*<b>Phụ:<\/b>/g, ',').trim();
  }

  // Clean slug to last segment for standard routing, e.g. /song-tu-tin/xyz -> xyz
  const cleanSlug = rawSlug.split('/').pop();

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
  // Remove JSON-LD script tag from body
  cleanContent = cleanContent.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  cleanContent = cleanContent.trim();

  // If Group A, wrap in <div class="group-a a"> so that Teal styles apply
  if (isGroupA) {
    cleanContent = `<div class="group-a a">\n${cleanContent}\n</div>`;
  }

  // ID allocation: Bài 1 -> 207, Bài 2 -> 206, ..., Bài 10 -> 198
  const id = 207 - (baiNum - 1);

  const oldSlugs = [
    rawSlug,
    `tin-tuc/${cleanSlug}`,
    `blog/${cleanSlug}`,
    `news/${cleanSlug}`,
    cleanSlug
  ];
  if (rawSlug !== cleanSlug) {
    oldSlugs.push(`news/${rawSlug}`);
    oldSlugs.push(`tin-tuc/${rawSlug}`);
  }

  parsedArticles.push({
    baiNum,
    id,
    slug: cleanSlug,
    group: isGroupA ? 'A' : 'B',
    oldSlugs: Array.from(new Set(oldSlugs)),
    title,
    metaTitle,
    description: metaDesc,
    excerpt,
    category,
    date: "12/10/2026",
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    keywords,
    image: imageMap[cleanSlug] || "/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg",
    author: authorObj,
    content: cleanContent,
    schema
  });
}

console.log(`Parsed ${parsedArticles.length} articles.`);
parsedArticles.forEach(a => {
  console.log(`Bài ${a.baiNum} [ID ${a.id}]: ${a.slug} (${a.category}) [Group ${a.group}]`);
});

// Update news.json
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Filter out any existing with these IDs or slugs
const existingSlugs = new Set(parsedArticles.map(a => a.slug));
const existingIds = new Set(parsedArticles.map(a => a.id));

newsData.list = newsData.list.filter(item => !existingIds.has(item.id) && !existingSlugs.has(item.slug));

// Prepend the new articles in order (id 207 down to 198)
newsData.list = [...parsedArticles, ...newsData.list];

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated ${newsFilePath} with ${parsedArticles.length} articles! Total articles in list: ${newsData.list.length}`);
