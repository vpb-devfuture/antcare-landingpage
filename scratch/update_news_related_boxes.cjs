const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Article 35: "Mục Tiêu 90%..."
if (newsData.featured && newsData.featured.id === 35) {
  const boxHtml = `\n\n<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/nguoi-cao-tuoi-duoc-kham-sang-loc-mien-phi-hang-nam" style="color: #68259E; font-weight: 600; text-decoration: underline;">Người Cao Tuổi Được Khám Sàng Lọc Miễn Phí Hằng Năm: Ý Nghĩa Thiết Thực Với Từng Gia Đình</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/thu-tuc-kham-bao-hiem-y-te-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Thủ tục khám bảo hiểm y tế cho người cao tuổi: 9 bước và giấy tờ cần mang</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/con-cai-o-xa-cham-soc-bo-me-tu-xa" style="color: #68259E; font-weight: 600; text-decoration: underline;">Con cái ở xa: 7 cách theo dõi sức khỏe bố mẹ cao tuổi ở Hà Nội từ xa</a></li>
  </ul>
</div>\n\n`;

  if (!newsData.featured.content.includes('Bài viết liên quan xem nhiều nhất')) {
    // Insert after the sapo paragraph
    const firstP = '</p>';
    const pos = newsData.featured.content.indexOf(firstP);
    if (pos !== -1) {
      newsData.featured.content = newsData.featured.content.slice(0, pos + firstP.length) + boxHtml + newsData.featured.content.slice(pos + firstP.length);
    }
  }
}

// Article 34: "Người Cao Tuổi Được Khám Sàng Lọc..."
const art34 = newsData.list ? newsData.list.find(a => a.id === 34) : null;
if (art34) {
  const boxHtml34 = `\n\n<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/muc-tieu-90-nguoi-cao-tuoi-duoc-phat-hien-va-quan-ly-benh-khong-lay-nhiem-den-nam-2030" style="color: #68259E; font-weight: 600; text-decoration: underline;">Mục Tiêu 90% Người Cao Tuổi Được Phát Hiện Và Quản Lý Bệnh Không Lây Nhiễm Đến Năm 2030</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/thu-tuc-kham-bao-hiem-y-te-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Thủ tục khám bảo hiểm y tế cho người cao tuổi: 9 bước và giấy tờ cần mang</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/benh-vien-nao-tot-cho-nguoi-cao-tuoi-ha-noi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Bệnh viện nào tốt cho người cao tuổi ở Hà Nội? Hướng dẫn chọn theo từng tình trạng</a></li>
  </ul>
</div>\n\n`;

  if (!art34.content.includes('Bài viết liên quan xem nhiều nhất')) {
    const firstP = '</p>';
    const pos = art34.content.indexOf(firstP);
    if (pos !== -1) {
      art34.content = art34.content.slice(0, pos + firstP.length) + boxHtml34 + art34.content.slice(pos + firstP.length);
    }
  }
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully inserted related articles box to article 34 and 35!');
