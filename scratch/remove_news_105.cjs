const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// 1. Remove article 105 from list if it exists in list
newsData.list = newsData.list.filter(item => item.id !== 105 && item.slug !== '8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec');

// 2. If article 105 is featured, restore article 104 as featured
if (newsData.featured && (newsData.featured.id === 105 || newsData.featured.slug === '8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec')) {
  // Find article 104 in list
  const idx104 = newsData.list.findIndex(item => item.id === 104);
  if (idx104 !== -1) {
    const article104 = newsData.list.splice(idx104, 1)[0];
    article104.featured = true;
    newsData.featured = article104;
  } else {
    // If 104 not in list, make first item featured
    newsData.featured = { ...newsData.list.shift(), featured: true };
  }
}

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully removed article 105 from news.json and restored article 104 as featured!');

// Delete image file if exists
const imagePath = path.join(__dirname, '../public/images/tin-tuc/8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec.jpg');
if (fs.existsSync(imagePath)) {
  fs.unlinkSync(imagePath);
  console.log('Deleted image file for article 105');
}
