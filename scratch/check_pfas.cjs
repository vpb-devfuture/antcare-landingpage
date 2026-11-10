const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));
const pfasItems = news.list.filter(n => n.title.includes('PFAS') || n.slug.includes('pfas') || (n.content && n.content.includes('PFAS')));
console.log('PFAS items count:', pfasItems.length);
pfasItems.forEach(n => console.log(n.id, n.slug, n.title));

