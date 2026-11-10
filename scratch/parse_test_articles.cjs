const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

const articles = [...html.matchAll(/<article[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];
console.log('Total articles with id in user HTML:', articles.length);
articles.forEach((a, i) => {
  const id = a[1];
  const h2 = a[2].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const meta = a[2].match(/<p class="meta">([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const answer = a[2].match(/<div class="answer">([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  console.log(`[${i+1}] id="${id}" | title="${h2}"`);
  console.log(`     meta: ${meta?.slice(0, 60)}...`);
  console.log(`     answer: ${answer?.slice(0, 80)}...`);
});

