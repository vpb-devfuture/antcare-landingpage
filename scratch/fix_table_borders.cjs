const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

function addTableBorders(content) {
  if (!content) return content;
  
  // Update table tag
  content = content.replace(/<table[^>]*>/gi, '<table style="border-collapse: collapse; width: 100%; margin: 24px 0; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">');
  
  // Update th tags
  content = content.replace(/<th([^>]*)>/gi, (match, p1) => {
    if (p1.includes('style=')) {
      return match.replace(/style="([^"]*)"/i, 'style="$1; border: 1px solid #cbd5e1; padding: 12px; font-weight: 700; background-color: #f1f5f9; color: #0f172a;"');
    }
    return '<th style="border: 1px solid #cbd5e1; padding: 12px; font-weight: 700; background-color: #f1f5f9; color: #0f172a;">';
  });

  // Update td tags
  content = content.replace(/<td([^>]*)>/gi, (match, p1) => {
    if (p1.includes('style=')) {
      return match.replace(/style="([^"]*)"/i, 'style="$1; border: 1px solid #cbd5e1; padding: 12px; color: #334155;"');
    }
    return '<td style="border: 1px solid #cbd5e1; padding: 12px; color: #334155;">';
  });

  return content;
}

if (newsData.featured) {
  newsData.featured.content = addTableBorders(newsData.featured.content);
}

if (Array.isArray(newsData.list)) {
  newsData.list.forEach(item => {
    item.content = addTableBorders(item.content);
  });
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated table borders across all articles in news.json!');
