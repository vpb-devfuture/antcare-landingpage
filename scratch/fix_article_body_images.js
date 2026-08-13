import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Article 12 update
const art12 = newsData.list.find(a => a.id === 12);
if (art12) {
  art12.content = art12.content.replace(
    '/images/huong-dan-chon-gay-chong-xe-day-xe-lan.png',
    '/images/huong-dan-chon-gay-chong-xe-day-xe-lan-body.png'
  );
  console.log('Updated Article 12 body image to /images/huong-dan-chon-gay-chong-xe-day-xe-lan-body.png');
}

// Article 13 update
const art13 = newsData.list.find(a => a.id === 13);
if (art13) {
  art13.content = art13.content.replace(
    '/images/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi.png',
    '/images/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi-body.png'
  );
  console.log('Updated Article 13 body image to /images/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi-body.png');
}

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with distinct header and body images for Articles 12 & 13!');
