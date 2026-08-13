import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const art15 = newsData.list.find(a => a.id === 15 || a.slug === 'uu-dai-vu-lan-bao-hieu-tri-an-cha-me');
if (art15) {
  art15.image = "/images/uu-dai-vu-lan-bao-hieu.png";
  
  // Remove any <figure>...</figure> images in article content so there is ONLY 1 image for the article
  art15.content = art15.content.replace(/<figure[\s\S]*?<\/figure>/gi, '');

  fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully updated Article #15 to use only 1 image (uploaded poster)!');
}
