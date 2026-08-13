import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const art13 = newsData.list.find(a => a.id === 13);
if (art13) {
  art13.content = art13.content.replace(
    `👉 <a href="/news/de-xuat-trang-bi-kien-thuc-tuoi-gia-tu-40-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Đề xuất: Người từ 40 tuổi cần được trang bị kiến thức chuẩn bị cho tuổi già (2026 - 2035)</a>`,
    `👉 <a href="/news/phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha" style="color: #68259E; font-weight: 600; text-decoration: underline;">Phòng Chống Té Ngã Cho Người Cao Tuổi Tại Nhà: Rà Soát Nguy Cơ Và 3 Việc Cần Làm Ngay</a>`
  );
  fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully updated Article 13 crosslink to include Article 14!');
}
