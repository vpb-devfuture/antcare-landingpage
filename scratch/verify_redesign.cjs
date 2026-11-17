const fs = require('fs');

const p357 = 'dist/kinh-nguyet/kinh-nguyet-tuoi-hoc-sinh/index.html';
const p367 = 'dist/kinh-nguyet/kinh-nguyet-lan-dau/index.html';
const p368 = 'dist/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san/index.html';

[p357, p367, p368].forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  console.log(`\n=== Checking ${p} ===`);
  console.log('Title:', title);
  console.log('Has footer keywords:', html.includes('class="article-keywords"'));
  console.log('Has collapsible TOC:', html.includes('class="toc-accordion"'));
  console.log('Does NOT have top keywords:', !html.slice(0, 4000).includes('class="article-keywords"'));
});

