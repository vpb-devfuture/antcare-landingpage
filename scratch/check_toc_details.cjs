const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

const withToc = news.list.filter(a => a.content && a.content.includes('class="toc"'));
console.log('Articles with class="toc":', withToc.length);
withToc.forEach(a => {
  const match = a.content.match(/<nav[^>]*class="toc"[^>]*>([\s\S]*?)<\/nav>/i);
  if (match) {
    console.log(`\nID: ${a.id} | Slug: ${a.slug}`);
    console.log('TOC Snippet:', match[0].slice(0, 150), '...');
  }
});

