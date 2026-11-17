const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

console.log('CSS length:', css.length);
console.log('Where .faq-accordion starts:', css.indexOf('.faq-accordion'));
console.log(css.slice(css.indexOf('.faq-accordion') - 50, css.indexOf('.faq-accordion') + 300));

