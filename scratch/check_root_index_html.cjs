const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('application/ld+json') || l.includes('LocalBusiness')) {
    console.log(i + 1, l);
  }
});

