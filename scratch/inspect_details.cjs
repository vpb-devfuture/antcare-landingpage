const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

// Check the SEO plan table
const seoPlanMatch = html.match(/<div class="seo-plan">([\s\S]*?)<\/div>/i);
if (seoPlanMatch) {
  console.log('SEO Plan table found:');
  console.log(seoPlanMatch[1].slice(0, 1000));
}

// Check sources section
const sourcesMatch = html.match(/<section class="sources">([\s\S]*?)<\/section>/i);
if (sourcesMatch) {
  console.log('Sources section found, length:', sourcesMatch[1].length);
  console.log(sourcesMatch[1].slice(0, 500));
}

// Check the 10 BlogPosting URLs and descriptions
const scriptMatch = html.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonld = JSON.parse(scriptMatch[1]);
console.log('\nBlogPosting items in JSON-LD:');
jsonld['@graph'].filter(x => x['@type'] === 'BlogPosting').forEach((b, i) => {
  console.log(`${i+1}. URL: ${b.url}`);
  console.log(`   headline: ${b.headline}`);
  console.log(`   description: ${b.description}`);
  console.log(`   keywords: ${b.keywords}`);
});

console.log('\nFAQPage in JSON-LD:');
const faqPage = jsonld['@graph'].find(x => x['@type'] === 'FAQPage');
if (faqPage) {
  console.log('FAQ items count:', faqPage.mainEntity.length);
  faqPage.mainEntity.forEach((faq, i) => {
    console.log(`  ${i+1}. Q: ${faq.name}`);
  });
}

