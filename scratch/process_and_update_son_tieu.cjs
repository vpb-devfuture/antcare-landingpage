const fs = require('fs');
const path = require('path');

// 1. Read user HTML
const rawHtml = fs.readFileSync(path.join(__dirname, 'user_son_tieu_pillar.html'), 'utf8');

// 2. Extract JSON-LD schema
const schemaMatch = rawHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
let schemaObj = null;
if (schemaMatch) {
  try {
    schemaObj = JSON.parse(schemaMatch[1].trim());
    console.log('Extracted Schema.org JSON-LD successfully.');
  } catch (e) {
    console.error('Failed to parse schema JSON:', e.message);
  }
}

// 3. Extract article content
// Target starts with <article id="son-tieu-la-gi"> up to </article> plus the <section class="sources">
let articleMatch = rawHtml.match(/<article id="son-tieu-la-gi">([\s\S]*?)<\/article>/);
let sourcesMatch = rawHtml.match(/<section class="sources"[^>]*>([\s\S]*?)<\/section>/);

if (!articleMatch) {
  console.error('Could not find <article id="son-tieu-la-gi"> in HTML!');
  process.exit(1);
}

let articleBody = articleMatch[1].trim();

// Remove seo-plan if inside articleBody (it was outside in rawHtml, but let's be safe)
articleBody = articleBody.replace(/<section class="seo-plan">[\s\S]*?<\/section>/gi, '');

// Wrap bare tables with <div class="table-scroll"> if not already wrapped
articleBody = articleBody.replace(/(?<!<div class="table-scroll">\s*)<table([\s\S]*?)<\/table>/gi, (match) => {
  return `<div class="table-scroll">\n<table${match.slice(6)}\n</div>`;
});

// Add sources section at the end of articleBody
let sourcesHtml = '';
if (sourcesMatch) {
  sourcesHtml = `\n\n<section class="sources" aria-label="Nguồn tham khảo">\n${sourcesMatch[1].trim()}\n</section>`;
}

// Assemble full content wrapped in .article-son-tieu
const finalContent = `<div class="article-son-tieu">\n${articleBody}${sourcesHtml}\n</div>`;

// 4. Update src/data/news.json
const newsPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const articleIndex = newsData.list.findIndex(i => i.id === 217 || i.slug === 'son-tieu-la-gi');
if (articleIndex === -1) {
  console.error('Article 217 / son-tieu-la-gi not found in news.json!');
  process.exit(1);
}

const existing = newsData.list[articleIndex];

const updatedArticle = {
  ...existing,
  title: "Són tiểu là gì? Nguyên nhân, cách điều chỉnh sinh hoạt, khi nào đi khám và nên dùng gì",
  metaTitle: "Són tiểu là gì? Nguyên nhân và cách khắc phục | ANTCARE",
  description: "Són tiểu là gì, vì sao bị, 4 dạng són tiểu, cách điều chỉnh sinh hoạt, tập sàn chậu, khi nào đi khám, khám ở đâu và nên dùng gì để sinh hoạt tự tin.",
  excerpt: "Són tiểu (tiểu không tự chủ) là tình trạng nước tiểu rỉ ra ngoài ý muốn, ví dụ khi ho, hắt hơi, cười, vận động hoặc khi mắc tiểu gấp không kịp vào nhà vệ sinh. Nguyên nhân thường gặp là cơ sàn chậu yếu, bàng quang tăng hoạt, sau sinh, mãn kinh và tuổi tác.",
  category: "Tiểu són",
  group: "son-tieu",
  date: "10/11/2026",
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
  keywords: "són tiểu là gì, són tiểu, tiểu không tự chủ, nguyên nhân són tiểu, són tiểu khám ở đâu, quần chống són tiểu, quần chống rò rỉ",
  content: finalContent,
  schema: schemaObj || existing.schema
};

newsData.list[articleIndex] = updatedArticle;
fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2) + '\n', 'utf8');
console.log('Updated article 217 in src/data/news.json');

// 5. Update src/data/news.en.json
const newsEnPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');
if (fs.existsSync(newsEnPath)) {
  const newsEnData = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));
  const enIndex = newsEnData.list.findIndex(i => i.id === 217 || i.slug === 'son-tieu-la-gi');
  if (enIndex !== -1) {
    newsEnData.list[enIndex] = {
      ...newsEnData.list[enIndex],
      title: updatedArticle.title,
      metaTitle: updatedArticle.metaTitle,
      description: updatedArticle.description,
      excerpt: updatedArticle.excerpt,
      category: "Tiểu són",
      group: "son-tieu",
      date: "10/11/2026",
      datePublished: "2026-11-10",
      dateModified: "2026-11-10",
      keywords: updatedArticle.keywords,
      content: finalContent,
      schema: schemaObj || newsEnData.list[enIndex].schema
    };
    fs.writeFileSync(newsEnPath, JSON.stringify(newsEnData, null, 2) + '\n', 'utf8');
    console.log('Updated article 217 in src/data/news.en.json');
  }
}

// 6. Update src/index.css with styles for .news, .defs, .toc-inline, .table-scroll
const cssPath = path.join(__dirname, '..', 'src', 'index.css');
let cssCode = fs.readFileSync(cssPath, 'utf8');

const sonTieuCustomStyles = `
/* Additional styles for Són tiểu pillar article */
.article-son-tieu .news {
  background: #fff4ec;
  border-left: 5px solid #FD711A;
  padding: 14px 18px;
  border-radius: 8px;
  margin: 18px 0;
  font-size: 0.95rem;
  line-height: 1.7;
}

.article-son-tieu .news strong:first-child {
  color: #c4520f;
}

.article-son-tieu .defs {
  background: #f6f1fc;
  border: 1px dashed #6633B4;
  border-radius: 8px;
  padding: 14px 18px;
  margin: 18px 0;
  line-height: 1.7;
}

.article-son-tieu .defs p {
  margin: 0.4em 0;
}

.article-son-tieu .toc-inline {
  background: #faf8fd;
  border: 1px solid #e6dff2;
  border-radius: 12px;
  padding: 16px 20px;
  margin: 20px 0;
}

.article-son-tieu .toc-inline strong {
  color: #6633B4;
  font-size: 1.05rem;
  display: block;
  margin-bottom: 8px;
}

.article-son-tieu .toc-inline ol {
  margin: 8px 0 0 20px;
  padding: 0;
  line-height: 1.8;
}

.article-son-tieu .toc-inline a {
  color: #6633B4;
  text-decoration: none;
  font-weight: 500;
}

.article-son-tieu .toc-inline a:hover {
  text-decoration: underline;
  color: #FD711A;
}

.article-son-tieu .table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 20px 0;
}

.article-son-tieu .table-scroll table {
  margin: 0 !important;
  min-width: 580px;
}
`;

if (!cssCode.includes('.article-son-tieu .toc-inline')) {
  cssCode += sonTieuCustomStyles;
  fs.writeFileSync(cssPath, cssCode, 'utf8');
  console.log('Appended custom styles to src/index.css');
}

