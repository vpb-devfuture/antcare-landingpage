const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

let count = 0;

function processArticle(art, id) {
  if (!art) return;

  // 1. Author field
  if (typeof art.author === 'string') {
    if (art.author === 'ANTCARE' || (art.author.includes('ANTCARE') && !art.author.includes('Kiến chăm tổ'))) {
      console.log(`[ID ${art.id}] Fix author: "${art.author}" -> "ANTCARE – Kiến chăm tổ"`);
      art.author = 'ANTCARE – Kiến chăm tổ';
      count++;
    }
  } else if (art.author && typeof art.author === 'object') {
    if (art.author.name === 'ANTCARE' || (art.author.name && art.author.name.includes('ANTCARE') && !art.author.name.includes('Kiến chăm tổ'))) {
      console.log(`[ID ${art.id}] Fix author.name: "${art.author.name}" -> "ANTCARE – Kiến chăm tổ"`);
      art.author.name = 'ANTCARE – Kiến chăm tổ';
      count++;
    }
  }

  // 2. Content HTML string fixes
  if (typeof art.content === 'string') {
    let c = art.content;
    const oldC = c;

    // Replace <span>ANTCARE</span> with <span>ANTCARE – Kiến chăm tổ</span>
    c = c.replace(/<span>ANTCARE<\/span>/g, '<span>ANTCARE – Kiến chăm tổ</span>');
    
    // Replace <span itemprop="author">ANTCARE</span>
    c = c.replace(/<span itemprop="author">ANTCARE<\/span>/g, '<span itemprop="author">ANTCARE – Kiến chăm tổ</span>');
    c = c.replace(/<span itemprop=\\"author\\">ANTCARE<\/span>/g, '<span itemprop=\\"author\\">ANTCARE – Kiến chăm tổ</span>');

    // Replace byline span or meta span if plain ANTCARE
    // e.g. <p class="byline"><span>ANTCARE</span> -> <p class="byline"><span>ANTCARE – Kiến chăm tổ</span>
    
    // Replace schema org publisher or author name: "ANTCARE" -> "ANTCARE – Kiến chăm tổ" in schema.org if needed
    // Wait! Let's check schema org author:
    c = c.replace(/"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"ANTCARE"/g, '"author": {"@type": "Organization", "name": "ANTCARE – Kiến chăm tổ"');
    c = c.replace(/"publisher":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"ANTCARE"/g, '"publisher": {"@type": "Organization", "name": "ANTCARE – Kiến chăm tổ"');

    if (c !== oldC) {
      console.log(`[ID ${art.id}] Updated HTML content ANTCARE text`);
      art.content = c;
      count++;
    }
  }
}

if (newsData.featured) {
  processArticle(newsData.featured, newsData.featured.id);
}

if (Array.isArray(newsData.list)) {
  newsData.list.forEach(art => processArticle(art, art.id));
}

console.log(`Total fixes made: ${count}`);

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully saved news.json!');
