const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const art301 = news.list.find(a => a.id === 301);
const faqMatch = art301.content.match(/<h2[^>]*>[\s\S]*?(?:câu hỏi thường gặp|FAQ)[\s\S]*?<\/h2>([\s\S]*?)(?:<h2|$)/i);
console.log('--- ART 301 FAQ CONTENT ---');
console.log(faqMatch ? faqMatch[1].slice(0, 1000) : 'Not found');

