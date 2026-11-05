const news = require('../src/data/news.json');
news.list.forEach((a, i) => {
  const m = a.content.match(/<nav class="toc"[\s\S]*?<\/nav>/);
  console.log(i, a.slug, 'has toc:', !!m);
  const s = a.content.match(/<section class="sources"[\s\S]*?<\/section>/);
  console.log(i, a.slug, 'has sources:', !!s);
});

