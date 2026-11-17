const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

[369, 207, 1, 301].forEach(id => {
  const art = news.list.find(a => a.id === id);
  if (!art) return;
  const m = art.content.match(/<h2[^>]*>[^<]*(?:câu hỏi|FAQ)[^<]*<\/h2>([\s\S]*?)(?:<h2|$)/i) ||
            art.content.match(/<h2[^>]*id=["']faq["'][^>]*>([\s\S]*?)(?:<h2|$)/i);
  console.log(`\n=== VERIFY ID ${id} (${art.slug}) ===`);
  if (m) {
    console.log(m[1].trim().slice(0, 500));
  } else {
    console.log('No FAQ section found!');
  }
});

