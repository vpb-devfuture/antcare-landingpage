const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

console.log('HTML length:', html.length);
console.log('Title match:', html.match(/<title>([^<]+)<\/title>/i)?.[1]);

// Check for articles / headings
const articles = html.match(/<article[\s\S]*?<\/article>/gi) || [];
console.log('Article tags count:', articles.length);

const h2s = [...html.matchAll(/<h2[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/gi)];
console.log('H2s with id count:', h2s.length);
h2s.slice(0, 10).forEach((m, idx) => {
  console.log(`${idx + 1}. id="${m[1]}" -> ${m[2].replace(/<[^>]+>/g, '').trim().slice(0, 50)}`);
});

