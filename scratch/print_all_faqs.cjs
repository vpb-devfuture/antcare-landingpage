const fs = require('fs');
const rawHtml = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');
const scriptMatch = rawHtml.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(scriptMatch[1]);
const allFaqs = jsonLd['@graph'].find(x => x['@type'] === 'FAQPage').mainEntity;

allFaqs.forEach((f, i) => {
  console.log(`--- FAQ ${i+1} ---`);
  console.log(`Q: ${f.name}`);
  console.log(`A: ${f.acceptedAnswer.text}\n`);
});

