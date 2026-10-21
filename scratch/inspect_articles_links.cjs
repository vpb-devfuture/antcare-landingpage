const fs = require('fs');
const raw = fs.readFileSync('scratch/input_dong_hanh_kham.html', 'utf8');
const articles = raw.match(/<article[\s\S]*?<\/article>/gi) || [];
articles.forEach((art, idx) => {
  const links = art.match(/href="[^"]+"/gi) || [];
  console.log('Article ' + (idx+1) + ' links:', links);
});
