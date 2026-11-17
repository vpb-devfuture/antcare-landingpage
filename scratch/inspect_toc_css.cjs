const fs = require('fs');
const css = fs.readFileSync('src/index.css', 'utf8');
const idx = css.indexOf('.toc-accordion');
console.log(css.slice(idx - 100, idx + 600));

