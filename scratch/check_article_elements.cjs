const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

const articleMatches = [...html.matchAll(/<article\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];
articleMatches.forEach((m, idx) => {
  const rawId = m[1];
  const body = m[2];
  console.log(`\nArticle ${idx+1}: ${rawId}`);
  console.log('has meta:', body.includes('class="meta"'));
  console.log('has answer:', body.includes('class="answer"'));
  console.log('has verdict:', body.includes('class="verdict"'));
  console.log('has cta:', body.includes('class="cta"'));
  console.log('has faq dl:', body.includes('class="faq"'));
  console.log('has note:', body.includes('class="note"'));
  const faqCount = (body.match(/<dt>/g) || []).length;
  console.log('faq count:', faqCount);
});

