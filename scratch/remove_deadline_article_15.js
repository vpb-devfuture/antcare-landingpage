import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const art15 = newsData.list.find(a => a.id === 15 || a.slug === 'uu-dai-vu-lan-bao-hieu-tri-an-cha-me');
if (art15) {
  art15.description = "Nhân dịp Mùa Lễ Vu Lan Báo Hiếu, ANTCARE ra mắt 3 gói trải nghiệm chăm sóc và đồng hành cùng bố mẹ tại nhà chỉ từ 299.000đ/buổi. Quà tặng thiệp viết tay & hoa tươi tri ân.";
  art15.content = art15.content.replace('<li style="margin-bottom: 6px;"><strong>Thời gian áp dụng:</strong> Đến hết ngày <strong>15/09/2026</strong></li>\n    ', '');
  art15.content = art15.content.replace('<li style="margin-bottom: 6px;"><strong>Thời gian áp dụng:</strong> Đến hết ngày <strong>15/09/2026</strong></li>', '');
  
  fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully removed deadline from Article #15 in news.json!');
}
