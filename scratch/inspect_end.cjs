const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

const lastArticleIdx = html.lastIndexOf('</article>');
console.log('After last article:');
console.log(html.slice(lastArticleIdx));
