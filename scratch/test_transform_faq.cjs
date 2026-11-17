const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Test wrapping bare h3/p under FAQ section
function transformFaqSection(content) {
  // Regex to find the FAQ section
  // It starts with an h2 containing FAQ keywords or id="faq"
  const h2Regex = /(<h2[^>]*>(?:[\s\S]*?(?:câu hỏi thường gặp|hỏi đáp|FAQ)[\s\S]*?)<\/h2>)/i;
  const match = content.match(h2Regex);
  if (!match) return content;

  const h2Tag = match[1];
  const h2Idx = content.indexOf(h2Tag);
  const afterH2 = content.slice(h2Idx + h2Tag.length);

  // Find where FAQ section ends: next <h2 or <section or end of content
  // Note: don't match <h2 inside FAQ
  let nextSectionIdx = afterH2.search(/<h2[^>]*>/i);
  if (nextSectionIdx === -1) {
    // Check if there is a </section> or <div class="sources"
    const sourcesIdx = afterH2.search(/<section class=["']sources["']|<div class=["']sources["']|<div class=["']article-keywords["']/i);
    if (sourcesIdx > -1) nextSectionIdx = sourcesIdx;
    else nextSectionIdx = afterH2.length;
  }

  const faqContent = afterH2.slice(0, nextSectionIdx);
  const restOfArticle = afterH2.slice(nextSectionIdx);

  // If faqContent already has <dl or <details or <div class="faq-item", skip
  if (faqContent.includes('<dl') || faqContent.includes('<details') || faqContent.includes('class="faq-item"')) {
    return content;
  }

  // If it contains <h3>...</h3> followed by <p>
  if (faqContent.includes('<h3')) {
    // Replace each <h3>...</h3> followed by <p>...</p> with <div class="faq-item">...</div>
    const transformedFaq = faqContent.replace(/(<h3[^>]*>[\s\S]*?<\/h3>)\s*([\s\S]*?)(?=(?:<h3[^>]*>|$|<\/section>|<div class="ad))/gi, (m, h3, rest) => {
      // Clean trailing whitespace or tags
      const trimmedRest = rest.trim();
      return `\n<div class="faq-item">\n  ${h3.trim()}\n  ${trimmedRest}\n</div>\n`;
    });

    return content.slice(0, h2Idx + h2Tag.length) + transformedFaq + restOfArticle;
  }

  return content;
}

// Test on ID 207
const art207 = news.list.find(a => a.id === 207);
if (art207) {
  const transformed = transformFaqSection(art207.content);
  console.log('--- TRANSFORMED ID 207 FAQ ---');
  const m = transformed.match(/<h2[^>]*>(?:[\s\S]*?(?:câu hỏi thường gặp|hỏi đáp|FAQ)[\s\S]*?)<\/h2>([\s\S]*?)(?:<\/section>|<h2|$)/i);
  console.log(m ? m[1].slice(0, 800) : 'No match');
}

