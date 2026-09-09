const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

let matches = [];

function checkText(str, context) {
  if (typeof str !== 'string') return;
  const regex = /ANTCARE(?![\s\S]{0,5}(–|-)\s*Kiến chăm tổ)/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    // get snippet around match
    const start = Math.max(0, match.index - 30);
    const end = Math.min(str.length, match.index + 40);
    matches.push({
      context,
      snippet: str.substring(start, end).replace(/\n/g, ' ')
    });
  }
}

function scan(art, pathName) {
  if (!art) return;
  if (art.author) checkText(typeof art.author === 'string' ? art.author : art.author.name, `${pathName}.author`);
  if (art.title) checkText(art.title, `${pathName}.title`);
  if (art.content) checkText(art.content, `${pathName}.content`);
}

if (newsData.featured) scan(newsData.featured, 'featured');
if (Array.isArray(newsData.list)) {
  newsData.list.forEach((art, i) => scan(art, `list[${i}] (id:${art.id})`));
}

console.log(`Found ${matches.length} matches of ANTCARE without 'Kiến chăm tổ':\n`);
matches.slice(0, 50).forEach(m => console.log(`[${m.context}] ...${m.snippet}...`));
