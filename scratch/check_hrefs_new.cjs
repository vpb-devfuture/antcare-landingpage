const d = require('../src/data/news.json');
const newArticles = d.list.slice(0, 10);
newArticles.forEach(a => {
  const matches = a.content.match(/href="([^"]+)"/g) || [];
  const hrefs = matches.map(m => m.replace(/href="|"$/g, ''));
  console.log(`ID ${a.id} [${a.slug}]:`);
  hrefs.forEach(h => console.log('   ->', h));
});
