const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const faqArticles = [];

news.list.forEach(a => {
  if (!a.content) return;
  // Check for FAQ headers
  const match = a.content.match(/<h2[^>]*>[\s\S]*?(?:câu hỏi thường gặp|FAQ|faqs)[\s\S]*?<\/h2>([\s\S]*?)(?:<h2|$)/i) ||
                a.content.match(/<h2[^>]*id=["']faq["'][^>]*>([\s\S]*?)(?:<h2|$)/i);
  if (match) {
    faqArticles.push({
      id: a.id,
      slug: a.slug,
      category: a.category,
      group: a.group,
      faqContent: match[1].slice(0, 800)
    });
  }
});

console.log(`Found ${faqArticles.length} articles with FAQ section in news.json`);

// Group by common HTML patterns
const patterns = {};
faqArticles.forEach(item => {
  let patternType = 'unknown';
  if (item.faqContent.includes('<details')) {
    patternType = 'details-accordion';
  } else if (item.faqContent.includes('<h3')) {
    patternType = 'h3-heading';
  } else if (item.faqContent.includes('<dl')) {
    patternType = 'dl-dt-dd';
  } else if (item.faqContent.includes('<p><strong>') || item.faqContent.includes('<p><b>')) {
    patternType = 'p-strong';
  } else if (item.faqContent.includes('<ul>') || item.faqContent.includes('<ol>')) {
    patternType = 'list-ul-ol';
  }
  patterns[patternType] = (patterns[patternType] || 0) + 1;
});

console.log('Pattern breakdown:', patterns);

// Print samples of each pattern
console.log('\n--- SAMPLE 1 --- (ID:', faqArticles[0]?.id, ')');
console.log(faqArticles[0]?.faqContent.slice(0, 400));

console.log('\n--- SAMPLE LATEST --- (ID:', faqArticles[faqArticles.length - 1]?.id, ')');
console.log(faqArticles[faqArticles.length - 1]?.faqContent.slice(0, 400));

if (faqArticles.length > 5) {
  console.log('\n--- SAMPLE MID --- (ID:', faqArticles[Math.floor(faqArticles.length / 2)]?.id, ')');
  console.log(faqArticles[Math.floor(faqArticles.length / 2)]?.faqContent.slice(0, 400));
}

