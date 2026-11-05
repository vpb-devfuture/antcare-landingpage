const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'src', 'data', 'news.json'),
  path.join(__dirname, '..', 'src', 'data', 'news.en.json')
];

files.forEach(file => {
  let text = fs.readFileSync(file, 'utf8');
  const count = (text.match(/\/cam-nang\//g) || []).length;
  console.log(file, 'occurrences of /cam-nang/:', count);
  text = text.split('/cam-nang/').join('/kinh-nguyet/');
  text = text.split('/cam-nang"').join('/kinh-nguyet"');
  text = text.split('/cam-nang\'').join('/kinh-nguyet\'');
  fs.writeFileSync(file, text, 'utf8');
  console.log('Updated to /kinh-nguyet/ successfully!');
});

