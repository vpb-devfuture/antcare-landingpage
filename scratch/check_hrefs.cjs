const data = require('../src/data/news.json');
data.list.slice(0, 10).forEach(it => {
  const reg = /href="([^"]+)"/g;
  let m;
  const found = [];
  while ((m = reg.exec(it.content)) !== null) {
    found.push(m[1]);
  }
  console.log(it.slug, '=>', found);
});
