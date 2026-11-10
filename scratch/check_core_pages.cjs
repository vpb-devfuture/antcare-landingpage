const fs = require('fs');

const files = [
  'src/pages/Home.jsx',
  'src/pages/AboutUsNew.jsx',
  'src/pages/ElderlyCareOrigin.jsx',
  'src/components/Footer.jsx',
  'src/components/TopNavBar.jsx',
  'public/llms.txt'
];

const prohibited = ['kháng khuẩn', '100+ lần', '100 lần', '100% chống tràn'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const text = fs.readFileSync(f, 'utf-8');
    prohibited.forEach(p => {
      if (text.toLowerCase().includes(p.toLowerCase())) {
        console.log(`Found "${p}" in ${f}`);
      }
    });
  }
});

console.log('Checked core repositioning pages for prohibited terms.');

