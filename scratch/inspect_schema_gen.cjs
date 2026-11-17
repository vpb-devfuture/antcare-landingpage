const fs = require('fs');
const content = fs.readFileSync('src/pages/NewsDetail.jsx', 'utf8');

const schemaStart = content.indexOf('const schemaMarkup');
if (schemaStart !== -1) {
  console.log(content.slice(schemaStart, schemaStart + 800));
}

