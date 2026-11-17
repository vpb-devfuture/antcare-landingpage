const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

const idx = css.indexOf('.article-son-tieu dl.faq');
console.log('Index:', idx);
console.log(JSON.stringify(css.slice(idx, idx + 400)));

