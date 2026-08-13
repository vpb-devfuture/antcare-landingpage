import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Find article 11 in list
const art11Index = newsData.list.findIndex(a => a.id === 11 || a.slug === 'trao-luu-chup-anh-mua-thu-ha-noi-cho-nguoi-cao-tuoi');

if (art11Index !== -1) {
  const art11 = newsData.list[art11Index];
  const oldFeatured = newsData.featured;

  // Set article 11 as featured
  newsData.featured = art11;

  // Remove article 11 from list and put old featured into list if not already there
  newsData.list.splice(art11Index, 1);
  if (oldFeatured && !newsData.list.some(a => a.id === oldFeatured.id)) {
    newsData.list.push(oldFeatured);
  }

  // Sort list by ID descending
  newsData.list.sort((a, b) => (b.id || 0) - (a.id || 0));

  fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully set Article #11 (Trào Lưu Chụp Ảnh Mùa Thu Hà Nội) as fixed featured article in news.json!');
} else {
  console.log('Article #11 not found in list, checking if already featured...');
  if (newsData.featured && newsData.featured.slug === 'trao-luu-chup-anh-mua-thu-ha-noi-cho-nguoi-cao-tuoi') {
    console.log('Article #11 is already featured!');
  }
}
