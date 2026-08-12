import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const art12 = newsData.list.find(a => a.id === 12);
if (art12) {
  art12.content = art12.content.replace(
    `👉 <a href="/news/cam-nang-tri-mat-ngu-cho-nguoi-gia" style="color: #68259E; font-weight: 600; text-decoration: underline;">Cẩm Nang Trị Mất Ngủ Cho Người Già: Nguyên Nhân & Giải Pháp An Toàn</a>`,
    `👉 <a href="/news/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">3 Bài Tập Chống Té Ngã Cho Người Cao Tuổi, Tập Tại Nhà Với Một Chiếc Ghế</a>`
  );
  fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully updated Article #12 crosslink to include Article #13!');
}
