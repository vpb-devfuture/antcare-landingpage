const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

const newArticles = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsed_dai_hoc_y.json'), 'utf8'));

// Filter out existing slugs if already present
const newSlugs = new Set(newArticles.map(a => a.slug));
const cleanedExistingList = newsData.list.filter(item => !newSlugs.has(item.slug));

// Prepend the new 10 articles (sorted so Bai 1 / ID 262 is first)
newsData.list = [...newArticles, ...cleanedExistingList];

// Save updated news.json
fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');

console.log(`Successfully merged ${newArticles.length} new articles into news.json! Total articles: ${newsData.list.length}`);
