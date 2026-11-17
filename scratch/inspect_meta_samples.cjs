const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

let samples = [];
news.list.forEach(a => {
  if (a.content) {
    const m = a.content.match(/<p class="meta">[\s\S]*?<\/p>/i);
    if (m && samples.length < 5) {
      samples.push({ id: a.id, slug: a.slug, meta: m[0] });
    }
  }
});

console.log('Sample meta tags:');
samples.forEach(s => console.log(`ID ${s.id} (${s.slug}):\n  ${s.meta}\n`));

