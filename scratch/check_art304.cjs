const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));
const art304 = news.list.find(a => a.id === 304);
console.log('Article 304 found:', !!art304);
if (art304) {
  console.log('Length:', art304.content.length);
  const headings = [...art304.content.matchAll(/<(h[2-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1].toUpperCase()}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
  console.log('Headings:', headings);
}

