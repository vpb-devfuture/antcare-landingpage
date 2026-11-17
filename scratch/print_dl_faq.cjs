const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

const idx = css.indexOf('dl.faq');
console.log('dl.faq index:', idx);
if (idx > -1) {
  console.log(css.slice(idx - 100, idx + 400));
}

