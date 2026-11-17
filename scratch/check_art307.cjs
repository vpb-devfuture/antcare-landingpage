const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));
const art307 = news.list.find(i => i.id === 307);
console.log('Article 307 length:', art307.content.length);
console.log('Article 307 headings:');
const headings = [...art307.content.matchAll(/<(h[2-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1].toUpperCase()}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
console.log(headings.slice(0, 15));

