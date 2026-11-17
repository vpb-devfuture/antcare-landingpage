const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

let matchCount = 0;
let irregularCount = 0;

const bareH3Ids = [207, 206, 205, 204, 203, 202, 201, 200, 199, 198];

bareH3Ids.forEach(id => {
  const art = news.list.find(a => a.id === id);
  if (!art) return;
  const match = art.content.match(/<h2[^>]*>[^<]*(?:câu hỏi thường gặp|hỏi đáp|FAQ)[^<]*<\/h2>([\s\S]*?)(?:<h2|$)/i) ||
                art.content.match(/<h2[^>]*id=["']faq["'][^>]*>([\s\S]*?)(?:<h2|$)/i);
  if (match) {
    console.log(`\n=== ID ${id} ===`);
    console.log(match[1].trim().slice(0, 400));
  }
});

