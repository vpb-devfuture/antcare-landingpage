const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const articlesWithFaqHeading = [];

news.list.forEach(a => {
  if (!a.content) return;
  // Look for headings with "câu hỏi thường gặp" or "hỏi đáp" or "faq"
  const m = a.content.match(/<h2[^>]*>[\s\S]*?(câu hỏi thường gặp|hỏi đáp|những câu hỏi|thắc mắc thường gặp|FAQ)[\s\S]*?<\/h2>/i);
  if (m) {
    const heading = m[0];
    const idx = a.content.indexOf(heading);
    const after = a.content.slice(idx + heading.length);
    const nextH2 = after.search(/<h2[^>]*>/i);
    const body = nextH2 > -1 ? after.slice(0, nextH2) : after;
    articlesWithFaqHeading.push({
      id: a.id,
      slug: a.slug,
      heading,
      body: body.trim()
    });
  }
});

console.log('Total articles with explicit FAQ section:', articlesWithFaqHeading.length);

articlesWithFaqHeading.forEach((a, i) => {
  let format = 'unknown';
  if (a.body.includes('<dl')) format = 'dl';
  else if (a.body.includes('<details class="faq-item') || a.body.includes('<div class="faq-accordion')) format = 'faq-accordion';
  else if (a.body.includes('<details')) format = 'other-details';
  else if (a.body.includes('<h3')) format = 'h3';
  else if (a.body.includes('<strong>')) format = 'strong';
  console.log(`[#${i+1}] ID ${a.id} (${a.slug}): ${format} (Heading: ${a.heading.replace(/<[^>]+>/g, '').trim()})`);
});

