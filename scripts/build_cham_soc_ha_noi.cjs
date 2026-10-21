const fs = require('fs');
const path = require('path');

const inputHtml = fs.readFileSync(path.join(__dirname, 'input_cham_soc_ha_noi.html'), 'utf8');

// Define metadata for the 15 articles
const articlesMeta = [
  {
    baiNum: 1,
    id: 242,
    slug: 'dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi',
    hashId: 'cham-soc-nguoi-cao-tuoi-ha-noi',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/vien-duong-lao-giup-viec-hay-cham-soc-tai-gia.jpg',
    readTime: '6 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 2,
    id: 241,
    slug: 'tro-ly-suc-khoe-nguoi-cao-tuoi',
    hashId: 'tro-ly-suc-khoe-la-gi',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 3,
    id: 240,
    slug: 'gia-cham-soc-nguoi-gia-tai-nha-ha-noi',
    hashId: 'gia-cham-soc-nguoi-gia-ha-noi',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/8-gio-o-ben-nguoi-cao-tuoi-khac-hoan-toan-thue-giup-viec.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 4,
    id: 239,
    slug: 'bo-me-song-mot-minh-ha-noi',
    hashId: 'bo-me-song-mot-minh',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 5,
    id: 238,
    slug: 'theo-doi-huyet-ap-duong-huyet-tai-nha',
    hashId: 'theo-doi-huyet-ap-duong-huyet',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/cach-do-huyet-ap-tai-nha-cho-nguoi-cao-tuoi.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 6,
    id: 237,
    slug: 'quan-ly-thuoc-nguoi-cao-tuoi',
    hashId: 'quan-ly-thuoc',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 7,
    id: 236,
    slug: 'phong-nga-nguoi-cao-tuoi-tai-nha',
    hashId: 'phong-te-nga',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/cai-tao-nha-o-chong-truot-nga-cho-nguoi-cao-tuoi.jpg',
    readTime: '6 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 8,
    id: 235,
    slug: 'cham-soc-nguoi-gia-sau-xuat-vien',
    hashId: 'cham-soc-sau-xuat-vien',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/cham-soc-nguoi-sau-dot-quy-tai-nha.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 9,
    id: 234,
    slug: 'dau-hieu-bo-me-can-cham-soc',
    hashId: 'dau-hieu-can-cham-soc',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/bo-me-noi-van-khoe-dau-hieu-can-chu-y.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 10,
    id: 233,
    slug: 'chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi',
    hashId: 'chon-dich-vu-cham-soc-uy-tin',
    group: 'cham-soc-nguoi-cao-tuoi',
    category: 'Chăm sóc người cao tuổi',
    image: '/images/tin-tuc/cach-noi-chuyen-voi-bo-me-ve-viec-can-nguoi-cham-soc.jpg',
    readTime: '6 phút đọc',
    ctaLink: '/giai-phap-cham-soc'
  },
  {
    baiNum: 11,
    id: 232,
    slug: 'dich-vu-dua-nguoi-gia-di-kham-ha-noi',
    hashId: 'dua-nguoi-gia-di-kham-ha-noi',
    group: 'dong-hanh-di-kham',
    category: 'Đồng hành đi khám',
    image: '/images/tin-tuc/dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  },
  {
    baiNum: 12,
    id: 231,
    slug: 'kham-lao-khoa-ha-noi',
    hashId: 'kham-lao-khoa-ha-noi',
    group: 'dong-hanh-di-kham',
    category: 'Đồng hành đi khám',
    image: '/images/tin-tuc/benh-vien-nguoi-cao-tuoi.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  },
  {
    baiNum: 13,
    id: 230,
    slug: 'kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi',
    hashId: 'kham-tong-quat-nguoi-cao-tuoi',
    group: 'dong-hanh-di-kham',
    category: 'Đồng hành đi khám',
    image: '/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  },
  {
    baiNum: 14,
    id: 229,
    slug: 'dua-nguoi-gia-di-noi-soi-gay-me',
    hashId: 'noi-soi-thu-thuat',
    group: 'dong-hanh-di-kham',
    category: 'Đồng hành đi khám',
    image: '/images/tin-tuc/noi-so-nguoi-cao-tuoi-ngai-di-benh-vien.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  },
  {
    baiNum: 15,
    id: 228,
    slug: 'dua-nguoi-gia-sa-sut-tri-tue-di-kham',
    hashId: 'di-kham-sa-sut-tri-tue',
    group: 'dong-hanh-di-kham',
    category: 'Đồng hành đi khám',
    image: '/images/tin-tuc/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi.jpg',
    readTime: '5 phút đọc',
    ctaLink: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  }
];

// Map of hashId -> `/news/${slug}` for internal links
const hashToNewsUrl = {};
articlesMeta.forEach(m => {
  hashToNewsUrl[`#${m.hashId}`] = `/news/${m.slug}`;
});

// Extract each article from inputHtml
// <article id="..."> ... </article>
const articleRegex = /<article\s+id="([^"]+)">([\s\S]*?)<\/article>/g;
let match;
const extractedArticles = {};

while ((match = articleRegex.exec(inputHtml)) !== null) {
  const articleId = match[1];
  const innerHtml = match[2];
  extractedArticles[articleId] = innerHtml;
}

console.log('Found articles:', Object.keys(extractedArticles));

const newsItems = [];

for (const meta of articlesMeta) {
  const rawInner = extractedArticles[meta.hashId];
  if (!rawInner) {
    throw new Error(`Article not found for hashId: ${meta.hashId}`);
  }

  // Extract title from <h2>...</h2>
  const titleMatch = rawInner.match(/<h2>(.*?)<\/h2>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Extract meta/keywords from <p class="meta">Từ khóa: (.*?)</p>
  const metaMatch = rawInner.match(/<p class="meta">Từ khóa:\s*(.*?)<\/p>/);
  const keywords = metaMatch ? metaMatch[1].trim() : '';

  // Extract answer from <div class="answer"><strong>Trả lời nhanh:</strong>\s*(.*?)</div>
  const answerMatch = rawInner.match(/<div class="answer"><strong>Trả lời nhanh:<\/strong>\s*([\s\S]*?)<\/div>/);
  let rawExcerpt = answerMatch ? answerMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // Extract FAQs from <dl class="faq"> ... </dl>
  const faqItems = [];
  const faqMatch = rawInner.match(/<dl class="faq">([\s\S]*?)<\/dl>/);
  if (faqMatch) {
    const dtDdRegex = /<dt>(.*?)<\/dt>\s*<dd>(.*?)<\/dd>/g;
    let qa;
    while ((qa = dtDdRegex.exec(faqMatch[1])) !== null) {
      faqItems.push({
        question: qa[1].replace(/<[^>]+>/g, '').trim(),
        answer: qa[2].replace(/<[^>]+>/g, '').trim()
      });
    }
  }

  // Clean and transform inner content
  let content = rawInner;

  // Replace top <h2>Title</h2> with <h1>Title</h1> and add byline
  content = content.replace(/<h2>(.*?)<\/h2>/, `<h1>$1</h1>\n<p class="byline">ANTCARE · Cập nhật 21/10/2026 · ${meta.readTime}</p>`);

  // Replace hash links with SPA links
  for (const [hash, newUrl] of Object.entries(hashToNewsUrl)) {
    const hrefRegex = new RegExp(`href="${hash}"`, 'g');
    content = content.replace(hrefRegex, `href="${newUrl}"`);
  }

  // Replace CTA button links:
  // href="https://antcare.vn/" inside CTA -> meta.ctaLink
  content = content.replace(/<a class="btn" href="https:\/\/antcare\.vn\/">/g, `<a class="btn" href="${meta.ctaLink}">`);

  // Wrap in standard container
  const containerClass = meta.group === 'dong-hanh-di-kham' 
    ? 'article-dong-hanh-di-kham article-guide' 
    : 'article-cham-soc-nguoi-cao-tuoi article-guide';

  const fullContent = `<div class="${containerClass}">\n${content.trim()}\n</div>`;

  // Build schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://antcare.vn/news/${meta.slug}/`,
    'mainEntityOfPage': `https://antcare.vn/news/${meta.slug}/`,
    'headline': title,
    'description': rawExcerpt.length > 250 ? rawExcerpt.substring(0, 247) + '...' : rawExcerpt,
    'keywords': keywords,
    'inLanguage': 'vi',
    'datePublished': '2026-10-21',
    'dateModified': '2026-10-21',
    'image': `https://antcare.vn${meta.image}`,
    'author': {
      '@type': 'Organization',
      'name': 'ANTCARE – Kiến chăm tổ',
      'url': 'https://antcare.vn'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'ANTCARE – Kiến chăm tổ',
      'logo': 'https://antcare.vn/logo.png'
    }
  };

  if (faqItems.length > 0) {
    schema['mainEntity'] = faqItems.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }));
  }

  const oldSlugs = [
    `kien-thuc/${meta.slug}`,
    `${meta.group}/${meta.slug}`,
    `tin-tuc/${meta.slug}`,
    `blog/${meta.slug}`,
    `news/${meta.slug}`,
    meta.slug,
    meta.hashId,
    `kien-thuc/${meta.hashId}`
  ];

  newsItems.push({
    baiNum: meta.baiNum,
    id: meta.id,
    slug: meta.slug,
    group: meta.group,
    oldSlugs: Array.from(new Set(oldSlugs)),
    title: title,
    metaTitle: `${title} | ANTCARE`,
    description: rawExcerpt.length > 200 ? rawExcerpt.substring(0, 197) + '...' : rawExcerpt,
    excerpt: rawExcerpt,
    category: meta.category,
    date: '21/10/2026',
    datePublished: '2026-10-21',
    dateModified: '2026-10-21',
    keywords: keywords,
    image: meta.image,
    author: {
      name: 'ANTCARE – Kiến chăm tổ',
      image: '/images/huyen-trang.jpg',
      description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội'
    },
    content: fullContent,
    schema: schema
  });
}

console.log(`Prepared ${newsItems.length} news items.`);

// Load news.json
const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Prepend new articles to newsData.list
newsData.list = [...newsItems, ...newsData.list];

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Saved news.json with total ${newsData.list.length} articles.`);
