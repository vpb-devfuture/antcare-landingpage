const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

[1, 2, 3, 4, 5, 6, 7, 10].forEach(id => {
  const art = news.list.find(a => a.id === id);
  if (!art) return;
  const match = art.content.match(/<h2[^>]*>[^<]*(?:câu hỏi|FAQ|thắc mắc)[^<]*<\/h2>([\s\S]*?)(?:<h2|$)/i);
  if (match) {
    console.log(`\n=== ID ${id} (${art.slug}) ===`);
    console.log(match[1].slice(0, 400));
  }
});

