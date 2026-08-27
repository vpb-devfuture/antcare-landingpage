import fs from 'fs';

const newsFilePath = 'c:\\my-projects\\antcare\\sourcecode\\antcare-landingpage\\src\\data\\news.json';
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Find article ID 27 (whether in featured or list)
let article = null;
if (newsData.featured && newsData.featured.id === 27) {
  article = newsData.featured;
} else if (Array.isArray(newsData.list)) {
  article = newsData.list.find(a => a.id === 27);
}

if (!article) {
  console.error('Article ID 27 not found!');
  process.exit(1);
}

// Replace video container in article content with a compact 260x380px container
const oldVideoHtmlPattern = /<div style="margin: 30px 0; text-align: center; background-color: #faf5ff;[\s\S]*?<\/div>\s*<\/div>/g;

const compactVideoHtml = `<div style="margin: 28px 0; background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%); border: 1px solid #e9d5ff; border-radius: 16px; padding: 20px 16px; text-align: center;">
  <h3 style="color: #68259E; font-size: 17px; font-weight: 700; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center; justify-content: center; gap: 6px;">
    <span>📺</span> Video Hướng Dẫn: Đồng Hành Khám Bệnh Cùng ANTCARE
  </h3>
  <div style="width: 100%; max-width: 250px; height: 380px; margin: 0 auto 14px auto; border-radius: 14px; overflow: hidden; box-shadow: 0 6px 18px rgba(104,37,158,0.18); border: 2px solid #ffffff;">
    <iframe src="https://www.youtube.com/embed/B_4AWWPJPxQ" title="Đồng hành khám bệnh cho người cao tuổi - ANTCARE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%; border: none;"></iframe>
  </div>
  <p style="margin: 0; font-size: 0.88rem; color: #4c1d95; font-weight: 500;">
    👉 <a href="https://www.youtube.com/@Antcare-kienchamto" target="_blank" rel="noopener noreferrer" style="color: #E86A17; font-weight: 700; text-decoration: underline;">Ghé thăm Kênh YouTube chính thức ANTCARE – Kiến chăm tổ</a>
  </p>
</div>`;

article.content = article.content.replace(oldVideoHtmlPattern, compactVideoHtml);

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated video frame aspect ratio for article ID 27!');
