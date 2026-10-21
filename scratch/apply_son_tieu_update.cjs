const fs = require('fs');
const path = require('path');

const parsedArticles = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsed_son_tieu.json'), 'utf8'));
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Existing IDs to update category to "Tiểu són"
const existingSonTieuIds = [
  207, 206, 199, 197, 196, 195, 194, 193, 192, 190, 188, 187, 152, 92, 93
];

let updatedExistingCount = 0;
newsData.list.forEach(item => {
  if (existingSonTieuIds.includes(item.id)) {
    item.category = "Tiểu són";
    updatedExistingCount++;
  }
});
console.log(`Updated category to "Tiểu són" for ${updatedExistingCount} existing articles.`);

// Filter out any existing articles with the new IDs or new slugs to avoid duplicates
const newIds = new Set(parsedArticles.map(a => a.id));
const newSlugs = new Set(parsedArticles.map(a => a.slug));

newsData.list = newsData.list.filter(item => !newIds.has(item.id) && !newSlugs.has(item.slug));

// Prepend the 10 new articles in order (id 217 down to 208)
newsData.list = [...parsedArticles, ...newsData.list];

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated news.json! Total articles in list: ${newsData.list.length}`);
