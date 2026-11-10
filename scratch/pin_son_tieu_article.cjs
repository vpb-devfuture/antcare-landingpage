const fs = require('fs');
const path = require('path');

// 1. Update src/data/news.json
const newsPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

let foundVi = false;
newsData.list.forEach(item => {
  if (item.id === 217 || item.slug === 'son-tieu-la-gi') {
    item.isPinned = true;
    foundVi = true;
  } else if (item.group === 'son-tieu' || item.category === 'Tiểu són') {
    // Ensure no other son-tieu article has isPinned: true
    item.isPinned = false;
  }
});

if (foundVi) {
  fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2) + '\n', 'utf8');
  console.log('Successfully set isPinned: true for article 217 in src/data/news.json');
} else {
  console.error('Article 217 not found in news.json!');
}

// 2. Update src/data/news.en.json
const newsEnPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');
if (fs.existsSync(newsEnPath)) {
  const newsEnData = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));
  let foundEn = false;
  newsEnData.list.forEach(item => {
    if (item.id === 217 || item.slug === 'son-tieu-la-gi') {
      item.isPinned = true;
      foundEn = true;
    } else if (item.group === 'son-tieu' || item.category === 'Tiểu són') {
      item.isPinned = false;
    }
  });

  if (foundEn) {
    fs.writeFileSync(newsEnPath, JSON.stringify(newsEnData, null, 2) + '\n', 'utf8');
    console.log('Successfully set isPinned: true for article 217 in src/data/news.en.json');
  }
}

