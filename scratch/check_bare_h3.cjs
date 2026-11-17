const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const bareH3FaqArticles = [];

news.list.forEach(a => {
  if (!a.content) return;
  // Match FAQ h2 heading
  const m = a.content.match(/<h2[^>]*id=["']faq["'][^>]*>[\s\S]*?<\/h2>([\s\S]*?)(?:<h2|$)/i) ||
            a.content.match(/<h2[^>]*>[^<]*(?:câu hỏi thường gặp|hỏi đáp|FAQ)[^<]*<\/h2>([\s\S]*?)(?:<h2|$)/i);
  if (m) {
    const faqBody = m[1];
    if (faqBody.includes('<h3') && !faqBody.includes('<details') && !faqBody.includes('<dl')) {
      bareH3FaqArticles.push({ id: a.id, slug: a.slug });
    }
  }
});

console.log('Bare H3 FAQ articles count:', bareH3FaqArticles.length);
bareH3FaqArticles.forEach(a => console.log(`  - [ID ${a.id}] ${a.slug}`));

