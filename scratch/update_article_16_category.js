import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

if (newsData.featured && (newsData.featured.id === 16 || newsData.featured.slug === 'nghi-ngo-dot-quy-o-nguoi-cao-tuoi-nhung-viec-khong-nen-lam')) {
  newsData.featured.category = "An toàn nhà ở";
}

const art16 = newsData.list.find(a => a.id === 16 || a.slug === 'nghi-ngo-dot-quy-o-nguoi-cao-tuoi-nhung-viec-khong-nen-lam');
if (art16) {
  art16.category = "An toàn nhà ở";
}

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated category of Article #16 to "An toàn nhà ở"!');
