const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (jsonLdMatch) {
  try {
    const data = JSON.parse(jsonLdMatch[1]);
    const postings = data['@graph'].filter(item => item['@type'] === 'BlogPosting');
    console.log('Total BlogPostings in JSON-LD:', postings.length);
    postings.forEach((p, idx) => {
      console.log(`${idx + 1}. [${p['@id']}] ${p.headline}`);
      console.log(`   desc: ${p.description}`);
      console.log(`   keywords: ${p.keywords}`);
    });
  } catch(e) {
    console.log('JSON parse error:', e.message);
  }
}

