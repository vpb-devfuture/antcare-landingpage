const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

let countMeta = 0;
let countToc = 0;

news.list.forEach((art, i) => {
  if (art.content) {
    if (art.content.includes('class="meta"') || art.content.includes("class='meta'") || art.content.includes('Từ khóa:')) {
      countMeta++;
    }
    if (art.content.includes('class="toc"') || art.content.includes("class='toc'") || art.content.includes('<nav class="toc"')) {
      countToc++;
    }
  }
});

console.log('Total articles:', news.list.length);
console.log('Articles with meta/keywords:', countMeta);
console.log('Articles with toc:', countToc);

