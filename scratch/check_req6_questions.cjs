const fs = require('fs');
const req6 = fs.readFileSync('scratch/request_6.html', 'utf8');

const match = req6.match(/<article[^>]*id="[^"]*hoi-dap[^"]*"[^>]*>([\s\S]*?)<\/article>/i);
if (match) {
  console.log('Found hoi-dap article in request 6! Length:', match[0].length);
  const qList = [...match[0].matchAll(/<h3>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Total questions in request 6:', qList.length);
  qList.forEach((q, i) => console.log(`${i+1}. ${q}`));
} else {
  console.log('No hoi-dap article with id found, searching h2...');
  const allArticles = [...req6.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/gi)];
  allArticles.forEach((a, i) => {
    const h2 = a[1].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1];
    console.log(`Article ${i+1}: ${h2 ? h2.replace(/<[^>]+>/g, '').trim() : 'no h2'}`);
  });
}

