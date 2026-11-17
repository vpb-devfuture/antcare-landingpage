const fs = require('fs');
const content = fs.readFileSync('src/pages/NewsDetail.jsx', 'utf8');
const idx = content.indexOf('dangerouslySetInnerHTML');
console.log(content.slice(idx - 400, idx + 400));

