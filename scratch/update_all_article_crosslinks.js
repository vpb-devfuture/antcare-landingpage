import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

console.log('Total articles:', 1 + newsData.list.length);

// Verify article 12 exists and category is "Chăm sóc sức khỏe"
const art12 = newsData.list.find(a => a.id === 12);
console.log('Article 12 title:', art12.title);
console.log('Article 12 category:', art12.category);
console.log('Article 12 slug:', art12.slug);
console.log('Article 12 image:', art12.image);
