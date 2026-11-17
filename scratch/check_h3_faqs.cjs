const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Check 5 articles from h3 list
const sampleIds = [207, 206, 205, 180, 160, 310, 320, 330];

sampleIds.forEach(id => {
  const art = news.list.find(a => a.id === id);
  if (art) {
    const faqIdx = art.content.search(/<h2[^>]*>(?:[\s\S]*?(?:câu hỏi thường gặp|hỏi đáp|FAQ)[\s\S]*?)<\/h2>/i);
    if (faqIdx > -1) {
      console.log(`\n=== ART ID ${id} (${art.slug}) ===`);
      console.log(art.content.slice(faqIdx, faqIdx + 600));
    }
  }
});

