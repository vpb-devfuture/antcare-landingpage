const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const faqSections = [];

news.list.forEach(a => {
  if (!a.content) return;
  // Match FAQ h2 heading
  const regex = /<h2[^>]*>(?:[\s\S]*?(?:câu hỏi thường gặp|hỏi đáp|FAQ)[\s\S]*?)<\/h2>/i;
  const match = a.content.match(regex);
  if (match) {
    const headingIndex = a.content.indexOf(match[0]);
    const afterHeading = a.content.slice(headingIndex + match[0].length);
    // Find next h2 or end of content
    const nextH2 = afterHeading.indexOf('<h2');
    const faqBody = nextH2 > -1 ? afterHeading.slice(0, nextH2) : afterHeading;
    faqSections.push({
      id: a.id,
      slug: a.slug,
      heading: match[0],
      body: faqBody.trim()
    });
  }
});

console.log(`Found ${faqSections.length} articles with an FAQ h2 heading!`);

const types = {};
faqSections.forEach(f => {
  let type = 'other';
  if (f.body.includes('<dl')) {
    type = 'dl-tag';
  } else if (f.body.includes('<details')) {
    type = 'details-tag';
  } else if (f.body.includes('<h3')) {
    type = 'h3-tag';
  } else if (f.body.includes('<strong>') || f.body.includes('<b>')) {
    type = 'p-strong-tag';
  }
  types[type] = (types[type] || 0) + 1;
  f.type = type;
});

console.log('Types distribution:', types);

console.log('\n--- DL-TAG ARTICLES ---');
faqSections.filter(f => f.type === 'dl-tag').forEach(f => {
  console.log(`[ID ${f.id}] ${f.slug} (length: ${f.body.length})`);
  console.log(f.body.slice(0, 300));
  console.log('---');
});

console.log('\n--- H3-TAG ARTICLES (First 5) ---');
faqSections.filter(f => f.type === 'h3-tag').slice(0, 5).forEach(f => {
  console.log(`[ID ${f.id}] ${f.slug}`);
  console.log(f.body.slice(0, 300));
  console.log('---');
});

console.log('\n--- DETAILS-TAG ARTICLES (First 3) ---');
faqSections.filter(f => f.type === 'details-tag').slice(0, 3).forEach(f => {
  console.log(`[ID ${f.id}] ${f.slug}`);
  console.log(f.body.slice(0, 300));
  console.log('---');
});

console.log('\n--- OTHER / P-STRONG ARTICLES ---');
faqSections.filter(f => f.type === 'other' || f.type === 'p-strong-tag').forEach(f => {
  console.log(`[ID ${f.id}] ${f.slug} (${f.type})`);
  console.log(f.body.slice(0, 300));
  console.log('---');
});

