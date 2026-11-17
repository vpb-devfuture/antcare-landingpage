const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const faqCategories = {
  details: [],
  dlFaq: [],
  h3OrH4: [],
  other: []
};

news.list.forEach(a => {
  if (!a.content) return;
  const content = a.content;
  if (/câu hỏi thường gặp|hỏi đáp|FAQ/i.test(content) || /id=["']faq["']/i.test(content)) {
    // Find FAQ block
    const faqIdx = content.search(/<h2[^>]*>[\s\S]*?(?:câu hỏi thường gặp|FAQ|faqs)[\s\S]*?<\/h2>/i);
    const idFaqIdx = content.search(/<h2[^>]*id=["']faq["']/i);
    const startIdx = faqIdx > -1 ? faqIdx : idFaqIdx;

    if (startIdx > -1) {
      const slice = content.slice(startIdx, startIdx + 3000);
      if (slice.includes('<details')) {
        faqCategories.details.push({ id: a.id, slug: a.slug, title: a.title });
      } else if (slice.includes('<dl')) {
        faqCategories.dlFaq.push({ id: a.id, slug: a.slug, title: a.title });
      } else if (slice.includes('<h3') || slice.includes('<h4')) {
        faqCategories.h3OrH4.push({ id: a.id, slug: a.slug, title: a.title });
      } else {
        faqCategories.other.push({ id: a.id, slug: a.slug, title: a.title, preview: slice.slice(0, 300) });
      }
    }
  }
});

console.log('FAQ Details Accordion:', faqCategories.details.length);
console.log('FAQ DL/DT/DD:', faqCategories.dlFaq.length);
console.log('FAQ H3/H4:', faqCategories.h3OrH4.length);
console.log('FAQ Other:', faqCategories.other.length);

console.log('\nDL/DT/DD articles:');
faqCategories.dlFaq.forEach(a => console.log(`  - [ID ${a.id}] ${a.slug}`));

console.log('\nH3/H4 sample articles:');
faqCategories.h3OrH4.slice(0, 5).forEach(a => console.log(`  - [ID ${a.id}] ${a.slug}`));

console.log('\nOther sample articles:');
faqCategories.other.forEach(a => console.log(`  - [ID ${a.id}] ${a.slug}\nPreview: ${a.preview}`));

