const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

function transformFaqSection(content) {
  // Regex to find the FAQ section
  const h2Regex = /(<h2[^>]*>(?:[\s\S]*?(?:câu hỏi thường gặp|hỏi đáp|FAQ)[\s\S]*?)<\/h2>)/i;
  const match = content.match(h2Regex);
  if (!match) return content;

  const h2Tag = match[1];
  const h2Idx = content.indexOf(h2Tag);
  const afterH2 = content.slice(h2Idx + h2Tag.length);

  // Find where FAQ section ends: next <h2 or <section class="sources" etc.
  let nextSectionIdx = afterH2.search(/<h2[^>]*>/i);
  if (nextSectionIdx === -1) {
    const sourcesIdx = afterH2.search(/<section class=["']sources["']|<div class=["']sources["']|<div class=["']article-keywords["']|<\/article>/i);
    if (sourcesIdx > -1) nextSectionIdx = sourcesIdx;
    else nextSectionIdx = afterH2.length;
  }

  const faqContent = afterH2.slice(0, nextSectionIdx);
  const restOfArticle = afterH2.slice(nextSectionIdx);

  // If faqContent already has <dl or <details or <div class="faq-item", skip
  if (faqContent.includes('<dl') || faqContent.includes('<details') || faqContent.includes('class="faq-item"')) {
    return content;
  }

  // If it contains <h3>...</h3>
  if (faqContent.includes('<h3')) {
    // Check if there is an ending tag like </section> or <div class="ad"
    const endAdIdx = faqContent.search(/<\/section>|<div class=["']ad/i);
    let qaBlock = faqContent;
    let trailingBlock = '';
    if (endAdIdx > -1) {
      qaBlock = faqContent.slice(0, endAdIdx);
      trailingBlock = faqContent.slice(endAdIdx);
    }

    const transformedQa = qaBlock.replace(/(<h3[^>]*>[\s\S]*?<\/h3>)\s*([\s\S]*?)(?=(?:<h3[^>]*>|$))/gi, (m, h3, rest) => {
      const trimmedRest = rest.trim();
      return `\n<div class="faq-item">\n  ${h3.trim()}\n  ${trimmedRest}\n</div>\n`;
    });

    return content.slice(0, h2Idx + h2Tag.length) + '\n' + transformedQa.trim() + '\n\n' + trailingBlock.trim() + '\n' + restOfArticle;
  }

  return content;
}

let modifiedCount = 0;
const modifiedSlugs = [];

news.list.forEach(a => {
  if (!a.content) return;
  const original = a.content;
  const transformed = transformFaqSection(original);
  if (transformed !== original) {
    modifiedCount++;
    modifiedSlugs.push({ id: a.id, slug: a.slug });
  }
});

console.log(`Transformed FAQ in ${modifiedCount} articles!`);
console.log('Sample modified articles:');
modifiedSlugs.slice(0, 15).forEach(s => console.log(`  - [ID ${s.id}] ${s.slug}`));

