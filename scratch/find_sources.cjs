const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

const matches = [...html.matchAll(/(?:nguồn|tài liệu|sources|tham khảo)[\s\S]{0,200}/gi)];
console.log('Matches count:', matches.length);
matches.slice(0, 10).forEach((m, idx) => {
  console.log(`[${idx+1}]`, m[0].slice(0, 120));
});

