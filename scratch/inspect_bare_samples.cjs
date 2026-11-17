const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const testIds = [207, 206, 205, 172, 171];
testIds.forEach(id => {
  const art = news.list.find(a => a.id === id);
  if (!art) return;
  const match = art.content.match(/<h2[^>]*>[^<]*(?:câu hỏi thường gặp|hỏi đáp|FAQ)[^<]*<\/h2>([\s\S]*?)(?:<h2|$)/i) ||
                art.content.match(/<h2[^>]*id=["']faq["'][^>]*>([\s\S]*?)(?:<h2|$)/i);
  if (match) {
    console.log(`\n================ ID ${id} (${art.slug}) ================`);
    console.log('Heading match:', match[0].slice(0, match[0].indexOf('>') + 1));
    console.log('Body:', match[1].slice(0, 800));
  }
});

