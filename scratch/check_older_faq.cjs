const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Find articles where id < 50 that have FAQ
const olderFaqArticles = [];
news.list.forEach(a => {
  if (a.id < 50 && a.content && (a.content.includes('câu hỏi thường gặp') || a.content.includes('Câu hỏi thường gặp') || a.content.includes('FAQ'))) {
    olderFaqArticles.push({ id: a.id, slug: a.slug });
  }
});

console.log('Older FAQ articles (id < 50):', olderFaqArticles.length);
olderFaqArticles.forEach(a => {
  const art = news.list.find(item => item.id === a.id);
  const m = art.content.match(/<h2[^>]*>[\s\S]*?(?:câu hỏi|FAQ)[\s\S]*?<\/h2>([\s\S]*?)(?:<h2|$)/i);
  console.log(`[ID ${a.id}] ${a.slug}`);
  if (m) {
    console.log(m[0].slice(0, 100));
    console.log(m[1].slice(0, 300));
  } else {
    console.log('No H2 match!');
  }
  console.log('---');
});

