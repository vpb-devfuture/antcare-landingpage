const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

const lines = css.split('\n');
console.log(lines.slice(610, 645).join('\n'));

