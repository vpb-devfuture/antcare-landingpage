const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const h3Articles = [];

news.list.forEach(a => {
  if (!a.content) return;
  // Does it have a heading for FAQ followed by h3?
  const m = a.content.match(/<h2[^>]*>[^<]*(?:câu hỏi thường gặp|hỏi đáp|FAQ)[^<]*<\/h2>([\s\S]*?)(?:<h2|$)/i);
  if (m && m[1].includes('<h3')) {
    h3Articles.push({
      id: a.id,
      slug: a.slug,
      faqHeading: m[0].slice(0, 100),
      snippet: m[1].slice(0, 600)
    });
  }
});

console.log('Total articles with h2 FAQ followed by h3:', h3Articles.length);
h3Articles.slice(0, 8).forEach(a => {
  console.log(`\n[ID ${a.id}] ${a.slug}`);
  console.log(a.snippet.slice(0, 350));
});

