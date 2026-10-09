const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, 'input_articles.html'), 'utf8');
const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

const imageMap = {
  'dong-hanh-kham-benh-nguoi-cao-tuoi': '/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg',
  'bang-gia-dua-nguoi-gia-di-kham': '/images/tin-tuc/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi.jpg',
  'dua-nguoi-cao-tuoi-di-kham-bach-mai': '/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg',
  'dua-bo-me-di-kham-benh-vien-lao-khoa': '/images/tin-tuc/dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon.jpg',
  'con-o-xa-cham-soc-suc-khoe-bo-me': '/images/tin-tuc/con-o-xa-bo-me-di-kham-mot-minh.jpg',
  'nguoi-cao-tuoi-tu-tinh-len-ha-noi-kham-benh': '/images/tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh.jpg',
  'checklist-chuan-bi-di-kham-cho-nguoi-gia': '/images/tin-tuc/checklist-dua-bo-me-di-kham-benh-vien.jpg',
  'tro-ly-suc-khoe-tai-nha-nguoi-cao-tuoi': '/images/tin-tuc/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg',
  'theo-doi-suc-khoe-nguoi-cao-tuoi-benh-man-tinh': '/images/tin-tuc/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi.jpg',
  'co-nen-thue-nguoi-dua-nguoi-gia-di-kham': '/images/tin-tuc/vien-duong-lao-giup-viec-hay-cham-soc-tai-gia.jpg'
};

const categoryMap = {
  'dong-hanh-kham-benh-nguoi-cao-tuoi': 'Đồng hành đi khám',
  'bang-gia-dua-nguoi-gia-di-kham': 'Đồng hành đi khám',
  'dua-nguoi-cao-tuoi-di-kham-bach-mai': 'Cẩm nang đi khám',
  'dua-bo-me-di-kham-benh-vien-lao-khoa': 'Cẩm nang đi khám',
  'con-o-xa-cham-soc-suc-khoe-bo-me': 'Chăm sóc từ xa',
  'nguoi-cao-tuoi-tu-tinh-len-ha-noi-kham-benh': 'Cẩm nang đi khám',
  'checklist-chuan-bi-di-kham-cho-nguoi-gia': 'Cẩm nang đi khám',
  'tro-ly-suc-khoe-tai-nha-nguoi-cao-tuoi': 'Theo dõi sức khỏe',
  'theo-doi-suc-khoe-nguoi-cao-tuoi-benh-man-tinh': 'Theo dõi sức khỏe',
  'co-nen-thue-nguoi-dua-nguoi-gia-di-kham': 'Tư vấn chăm sóc'
};

const regex = /<!-- ===================== BÀI (\d+) — START =====================([\s\S]*?)<!-- ===================== BÀI \1 — END ===================== -->/g;

let match;
const parsedArticles = [];

while ((match = regex.exec(htmlContent)) !== null) {
  const baiNum = parseInt(match[1], 10);
  const block = match[2];

  const slugMatch = block.match(/SLUG:\s*https?:\/\/antcare\.vn\/([^\s\r\n]+)/i);
  const slug = slugMatch ? slugMatch[1] : '';

  const metaTitleMatch = block.match(/META TITLE:\s*([^\r\n]+)/i);
  const metaTitle = metaTitleMatch ? metaTitleMatch[1].trim() : '';

  const metaDescMatch = block.match(/META DESCRIPTION:\s*([^\r\n]+)/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : '';

  const keywordsMatch = block.match(/KEYWORDS:\s*([^\r\n]+)/i);
  const keywords = keywordsMatch ? keywordsMatch[1].trim() : '';

  // Extract JSON-LD blocks
  const scriptRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let sMatch;
  const jsonLds = [];
  while ((sMatch = scriptRegex.exec(block)) !== null) {
    try {
      jsonLds.push(JSON.parse(sMatch[1]));
    } catch (e) {
      console.error('Error parsing JSON-LD in bài', baiNum, e);
    }
  }

  // Extract article body HTML
  const articleTagMatch = block.match(/<article[\s\S]*?<\/article>/i);
  let articleHtml = articleTagMatch ? articleTagMatch[0] : '';

  // Extract Title from h1 inside article
  const h1Match = articleHtml.match(/<h1>([\s\S]*?)<\/h1>/i);
  const title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : metaTitle;

  // Extract excerpt from abstract in JSON-LD or quick-answer
  let excerpt = metaDescription;
  const articleSchema = jsonLds.find(j => j['@type'] === 'Article');
  if (articleSchema && articleSchema.abstract) {
    excerpt = articleSchema.abstract;
  }

  // Update internal links in articleHtml to /news/...
  for (const s of Object.keys(imageMap)) {
    const linkRegex = new RegExp(`https://antcare\\.vn/${s}`, 'g');
    articleHtml = articleHtml.replace(linkRegex, `/news/${s}`);
  }

  // Combine schemas into graph
  const graph = [];
  jsonLds.forEach(schema => {
    if (schema['@type'] === 'Article') {
      const art = { ...schema };
      art.mainEntityOfPage = `https://antcare.vn/news/${slug}`;
      art.image = `https://antcare.vn${imageMap[slug]}`;
      art.author = {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn"
      };
      art.publisher = {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn",
        "logo": {
          "@type": "ImageObject",
          "url": "https://antcare.vn/images/footer-logo.png"
        }
      };
      graph.push(art);
    } else if (schema['@type'] === 'FAQPage') {
      const faq = { ...schema };
      faq['@id'] = `https://antcare.vn/news/${slug}#faq`;
      graph.push(faq);
    } else {
      graph.push(schema);
    }
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  // IDs 172 down to 163 so when sorted by b.id - a.id, Bài 1 appears first, down to Bài 10
  const assignedId = 173 - baiNum;

  parsedArticles.push({
    id: assignedId,
    slug,
    oldSlugs: [
      `tin-tuc/${slug}`,
      `blog/${slug}`,
      slug
    ],
    title,
    metaTitle,
    description: metaDescription,
    excerpt,
    category: categoryMap[slug] || 'Đồng hành đi khám',
    date: '05/10/2026',
    datePublished: '2026-10-05',
    dateModified: '2026-10-05',
    keywords,
    image: imageMap[slug],
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
    },
    content: articleHtml,
    schema: combinedSchema
  });
}

console.log(`Parsed ${parsedArticles.length} articles.`);

// Filter out any existing entries with these slugs
const slugsToRemove = new Set(parsedArticles.map(a => a.slug));
const cleanedList = (newsData.list || []).filter(item => !slugsToRemove.has(item.slug));

// Prepend the new 10 articles to newsData.list in order Bài 1 -> Bài 10
newsData.list = [...parsedArticles, ...cleanedList];

// Save updated news.json
fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated ${newsJsonPath}! Total articles in list: ${newsData.list.length}`);
