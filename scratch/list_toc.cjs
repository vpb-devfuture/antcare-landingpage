const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));
const withToc = news.list.filter(a => a.content && (a.content.includes('class="toc"') || a.content.includes('<nav')));
console.log('With TOC:', withToc.map(a => ({ id: a.id, slug: a.slug, title: a.title })));

