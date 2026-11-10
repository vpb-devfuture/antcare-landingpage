const fs = require('fs');

function checkLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.match(/"[^"]*quan-lot-tham-hut[^"]*"/g) || [];
  console.log(filePath, 'matches:', matches.length);
  matches.forEach(m => console.log('  ', m));
}

checkLinks('src/data/news.json');
checkLinks('src/data/news.en.json');

