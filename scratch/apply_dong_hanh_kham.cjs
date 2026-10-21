const fs = require('fs');
const path = require('path');

const parsedArticles = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsed_dong_hanh_kham.json'), 'utf8'));
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Check for any remaining internal hash links
parsedArticles.forEach(item => {
  const m = item.content.match(/href=["']#[^"']+["']/g);
  if (m) console.log(`Warning: Found hash link in ${item.slug}:`, m);
});

// Existing IDs to unify category to "Đồng hành đi khám"
const existingDongHanhIds = [
  180, 172, 171, 170, 169, 167, 166, 144, 150, 140, 139, 136, 135, 129, 119, 118, 117, 116, 115, 62, 60
];

let updatedExistingCount = 0;
newsData.list.forEach(item => {
  if (existingDongHanhIds.includes(item.id)) {
    item.category = "Đồng hành đi khám";
    updatedExistingCount++;
  }
});
console.log(`Updated category to "Đồng hành đi khám" for ${updatedExistingCount} existing articles.`);

// Filter out any existing articles with the new IDs or new slugs to avoid duplicates
const newIds = new Set(parsedArticles.map(a => a.id));
const newSlugs = new Set(parsedArticles.map(a => a.slug));

newsData.list = newsData.list.filter(item => !newIds.has(item.id) && !newSlugs.has(item.slug));

// Prepend the 10 new articles in order (id 227 down to 218)
newsData.list = [...parsedArticles, ...newsData.list];

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated news.json! Total articles in list: ${newsData.list.length}`);
