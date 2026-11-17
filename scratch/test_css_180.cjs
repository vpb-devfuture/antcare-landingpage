const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

const lines = css.split('\n');
console.log(lines.slice(175, 205).join('\n'));

