const fs = require('fs');
const content = fs.readFileSync('dist/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi/index.html', 'utf-8');
const match = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (match) {
  console.log(match[1]);
} else {
  console.log('No ld+json found');
}

