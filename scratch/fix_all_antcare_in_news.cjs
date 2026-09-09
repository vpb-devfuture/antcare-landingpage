const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

let fixCount = 0;

function fixString(str) {
  if (typeof str !== 'string') return str;

  // We want to replace uppercase ANTCARE that is NOT immediately followed by space/dash + "Kiến chăm tổ"
  // Negative lookahead for: optional whitespace, optional dash/en-dash/em-dash, optional whitespace, "Kiến chăm tổ"
  const regex = /ANTCARE(?!\s*[\-–—]\s*Kiến chăm tổ)/g;
  
  const newStr = str.replace(regex, 'ANTCARE – Kiến chăm tổ');
  if (newStr !== str) {
    // Count how many replacements were made
    const matches = str.match(regex);
    if (matches) fixCount += matches.length;
  }
  return newStr;
}

function processArticle(art) {
  if (!art) return;

  // Author field
  if (typeof art.author === 'string') {
    art.author = fixString(art.author);
  } else if (art.author && typeof art.author === 'object') {
    if (art.author.name) art.author.name = fixString(art.author.name);
  }

  // Title
  if (art.title) {
    art.title = fixString(art.title);
  }

  // Description / Excerpt
  if (art.description) art.description = fixString(art.description);
  if (art.excerpt) art.excerpt = fixString(art.excerpt);

  // Content HTML
  if (art.content) {
    art.content = fixString(art.content);
  }

  // FAQs
  if (Array.isArray(art.faqs)) {
    art.faqs.forEach(faq => {
      if (faq.question) faq.question = fixString(faq.question);
      if (faq.answer) faq.answer = fixString(faq.answer);
    });
  }

  // CTA
  if (art.cta) {
    if (art.cta.title) art.cta.title = fixString(art.cta.title);
    if (art.cta.description) art.cta.description = fixString(art.cta.description);
  }

  // Disclaimer
  if (art.disclaimer) {
    art.disclaimer = fixString(art.disclaimer);
  }

  // Related articles titles
  if (Array.isArray(art.relatedArticles)) {
    art.relatedArticles.forEach(rel => {
      if (rel.title) rel.title = fixString(rel.title);
    });
  }
}

if (newsData.featured) {
  processArticle(newsData.featured);
}

if (Array.isArray(newsData.list)) {
  newsData.list.forEach(art => processArticle(art));
}

console.log(`Made ${fixCount} replacements in news.json`);

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully saved updated news.json');
