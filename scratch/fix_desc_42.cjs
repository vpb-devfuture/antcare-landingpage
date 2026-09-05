const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const descriptionText = 'Tháng 9–10 là thời điểm giao mùa quyết định để kiểm soát huyết áp kịch phát, bệnh phổi mạn tính và tiêm phòng cúm trước khi các đợt rét đậm tràn về đe dọa sức khỏe người cao tuổi.';

if (newsData.featured && newsData.featured.id === 42) {
  newsData.featured.description = descriptionText;
  newsData.featured.excerpt = descriptionText;
} else {
  const itemIndex = newsData.list.findIndex(item => item.id === 42);
  if (itemIndex !== -1) {
    newsData.list[itemIndex].description = descriptionText;
    newsData.list[itemIndex].excerpt = descriptionText;
  }
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully set description and excerpt for Article ID 42!');
