const fs = require('fs');

const testPaths = [
  'dist/kinh-nguyet/quan-kinh-nguyet-bi-tran-ban-dem/index.html',
  'dist/kinh-nguyet/quan-kinh-nguyet-tran-hai-ben/index.html',
  'dist/kinh-nguyet/day-quan-kinh-nguyet-bi-cung/index.html',
  'dist/kinh-nguyet/son-tieu-khi-ho-hat-hoi-cuoi/index.html',
  'dist/kinh-nguyet/quan-kinh-nguyet-va-bang-vai/index.html',
  'dist/kinh-nguyet/index.html'
];

testPaths.forEach(p => {
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    const content = fs.readFileSync(p, 'utf8');
    const title = content.match(/<title>([^<]+)<\/title>/i)?.[1];
    const canonical = content.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    console.log(`[EXISTS] ${p} (${stat.size} bytes)`);
    console.log(`         Title: ${title}`);
    console.log(`         Canonical: ${canonical}`);
  } else {
    console.log(`[MISSING] ${p}`);
  }
});

