const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');

const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));

function formatArticleFaq(content) {
  if (!content) return content;

  // Find the FAQ section heading
  const h2Regex = /(<h2[^>]*>(?:[\s\S]*?(?:câu hỏi thường gặp|hỏi đáp|FAQ|thắc mắc thường gặp)[\s\S]*?)<\/h2>)/i;
  const match = content.match(h2Regex);
  if (!match) return content;

  const h2Tag = match[1];
  const h2Idx = content.indexOf(h2Tag);
  const afterH2 = content.slice(h2Idx + h2Tag.length);

  // Find next section boundary (<h2, <section class="sources", <div class="article-keywords", etc.)
  let nextSectionIdx = afterH2.search(/<h2[^>]*>/i);
  if (nextSectionIdx === -1) {
    const boundaryIdx = afterH2.search(/<section class=["']sources["']|<div class=["']sources["']|<div class=["']article-keywords["']|<\/article>/i);
    if (boundaryIdx > -1) nextSectionIdx = boundaryIdx;
    else nextSectionIdx = afterH2.length;
  }

  const faqContent = afterH2.slice(0, nextSectionIdx);
  const restOfArticle = afterH2.slice(nextSectionIdx);

  // If already using dl.faq or details accordion or already fully wrapped, we don't break it
  if (faqContent.includes('<dl class="faq"') || faqContent.includes('<details class="faq-item"')) {
    return content;
  }

  let newFaqContent = faqContent;

  // Case A: Contains <h3> and NOT wrapped in div.faq-item
  if (newFaqContent.includes('<h3') && !newFaqContent.includes('class="faq-item"')) {
    const endAdIdx = newFaqContent.search(/<\/section>|<div class=["']ad/i);
    let qaBlock = newFaqContent;
    let trailingBlock = '';
    if (endAdIdx > -1) {
      qaBlock = newFaqContent.slice(0, endAdIdx);
      trailingBlock = newFaqContent.slice(endAdIdx);
    }

    const transformedQa = qaBlock.replace(/(<h3[^>]*>[\s\S]*?<\/h3>)\s*([\s\S]*?)(?=(?:<h3[^>]*>|$))/gi, (m, h3, rest) => {
      const trimmedRest = rest.trim();
      return `\n<div class="faq-item">\n  ${h3.trim()}\n  ${trimmedRest}\n</div>\n`;
    });

    newFaqContent = '\n' + transformedQa.trim() + '\n\n' + trailingBlock.trim();
  }

  // Case B: Contains <p><strong style="color: #68259E;">...</strong><br>...</p> (Articles 1-10)
  if (newFaqContent.includes('<strong') && (newFaqContent.includes('#68259E') || newFaqContent.includes('#6633B4'))) {
    newFaqContent = newFaqContent.replace(/<p[^>]*><strong[^>]*>([\s\S]*?)<\/strong><br\s*\/?>([\s\S]*?)<\/p>/gi, (m, q, a) => {
      const cleanQ = q.replace(/<[^>]+>/g, '').trim();
      return `\n<div class="faq-item">\n  <h3>${cleanQ}</h3>\n  <p>${a.trim()}</p>\n</div>\n`;
    });
  }

  if (newFaqContent !== faqContent) {
    return content.slice(0, h2Idx + h2Tag.length) + '\n' + newFaqContent.trim() + '\n\n' + restOfArticle.trim();
  }

  return content;
}

let viCount = 0;
let enCount = 0;

news.list.forEach(a => {
  const original = a.content;
  const updated = formatArticleFaq(original);
  if (updated !== original) {
    a.content = updated;
    viCount++;
  }
});

newsEn.list.forEach(a => {
  const original = a.content;
  const updated = formatArticleFaq(original);
  if (updated !== original) {
    a.content = updated;
    enCount++;
  }
});

fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log(`Updated FAQs in ${viCount} Vietnamese articles!`);
console.log(`Updated FAQs in ${enCount} English articles!`);

