const fs = require('fs');

const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(jsonLdMatch[1]);
const postings = jsonLd['@graph'].filter(item => item['@type'] === 'BlogPosting');

console.log('Postings count:', postings.length);

const articles = [...html.matchAll(/<article[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];
console.log('Article tags found:', articles.length);

articles.forEach((a, idx) => {
  const domId = a[1];
  const p = postings[idx];
  const slug = p ? p['@id'].replace('https://antcare.vn/kinh-nguyet/', '').replace(/\/$/, '') : 'unknown';
  console.log(`Article ${idx + 1}: domId="${domId}" -> slug="${slug}"`);
});

