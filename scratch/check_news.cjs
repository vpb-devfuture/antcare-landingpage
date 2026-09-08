const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Check existing categories and max id
const maxId = Math.max(...newsData.map(n => n.id || 0));
console.log('Current max ID:', maxId);
