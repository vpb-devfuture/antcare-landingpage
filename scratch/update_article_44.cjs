const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const articleTarget = (newsData.featured && newsData.featured.id === 44) 
  ? newsData.featured 
  : newsData.list.find(item => item.id === 44);

if (articleTarget) {
  let content = articleTarget.content;

  // 1. Replace "Thanh" with "nhiều gia đình" / "gia đình"
  content = content.replace(
    /Tớ biết Thanh đang cân nhắc nhiều lựa chọn: thuê giúp việc, tìm điều dưỡng tự do, hoặc nhờ người thân\. Đây là phân tích thẳng thắn về sự khác biệt — không phải để nói những lựa chọn kia sai, mà để Thanh chọn đúng thứ gia đình thật sự cần\./gi,
    'Có rất nhiều gia đình đang cân nhắc các lựa chọn: thuê giúp việc, tìm điều dưỡng tự do, hoặc nhờ người thân. Đây là phân tích thẳng thắn về sự khác biệt — không phải để nói những lựa chọn kia sai, mà để các gia đình chọn đúng thứ mình thật sự cần.'
  );
  content = content.replace(/\bThanh\b/g, 'gia đình');

  // 2. Make all h2 and h3 bold explicitly in HTML content
  content = content.replace(/<h2>/gi, '<h2 style="font-weight: 700; color: #0f172a;">');
  content = content.replace(/<h3>/gi, '<h3 style="font-weight: 700; color: #0f172a;">');

  articleTarget.content = content;

  fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully updated Article 44 with bold headings and replaced "Thanh"!');
} else {
  console.error('Article 44 not found!');
}
