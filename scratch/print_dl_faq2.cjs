const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

const idx = css.indexOf('dl.faq');
console.log(css.slice(idx, idx + 650));

