import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
let content = fs.readFileSync(newsPath, 'utf8');

// Replace tel href links: tel:0968960048 -> tel:0969032360
content = content.replaceAll('tel:0968960048', 'tel:0969032360');
content = content.replaceAll('tel:0968 960 048', 'tel:0969032360');

// Replace formatted text numbers: 0968 960 048 -> 0969 032 360
content = content.replaceAll('0968 960 048', '0969 032 360');
content = content.replaceAll('0968960048', '0969 032 360');
content = content.replaceAll('0968.960.048', '0969 032 360');

fs.writeFileSync(newsPath, content, 'utf8');
console.log('Successfully updated all phone numbers in news.json to 0969 032 360!');
