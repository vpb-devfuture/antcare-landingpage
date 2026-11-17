const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const results = [];

news.list.forEach(a => {
  if (!a.content) return;
  // Look for any FAQ block:
  // Can be:
  // 1. <dl class="faq">
  // 2. <div class="faq-accordion">
  // 3. <h2... id="faq"...> or <h2...>...Câu hỏi thường gặp...</h2> followed by content
  // 4. <details class="faq-item">
  let hasFaq = false;
  let type = '';

  if (a.content.includes('<dl class="faq">') || a.content.includes('<dl class=\'faq\'>') || a.content.includes('<dl>')) {
    hasFaq = true;
    type = 'dl';
  } else if (a.content.includes('faq-accordion')) {
    hasFaq = true;
    type = 'faq-accordion';
  } else if (/<h2[^>]*id=["']faq["'][^>]*>/i.test(a.content) || /<h2[^>]*>[^<]*(?:câu hỏi thường gặp|hỏi đáp|FAQ)[^<]*<\/h2>/i.test(a.content)) {
    hasFaq = true;
    type = 'h2-faq-heading';
  }

  if (hasFaq) {
    results.push({ id: a.id, slug: a.slug, group: a.group, category: a.category, type });
  }
});

console.log('Total articles with detected FAQ:', results.length);
const byType = {};
results.forEach(r => { byType[r.type] = (byType[r.type] || 0) + 1; });
console.log('By type:', byType);

results.filter(r => r.type === 'dl').forEach(r => console.log('DL article:', r.id, r.slug));
results.filter(r => r.type === 'h2-faq-heading').slice(0, 10).forEach(r => console.log('H2 heading article:', r.id, r.slug));

