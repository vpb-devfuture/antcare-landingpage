const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

let count = 0;
// Check first 10 articles (the new ones, id 227 down to 218)
newsData.list.forEach(item => {
  if (item.id >= 218 && item.id <= 227) {
    if (item.content.includes('href="https://antcare.vn/"')) {
      item.content = item.content.replaceAll('href="https://antcare.vn/"', 'href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi"');
      count++;
    }
  }
});

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Updated CTA links in ${count} articles.`);
