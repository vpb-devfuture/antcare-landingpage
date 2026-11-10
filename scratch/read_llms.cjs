const fs = require('fs');
if (fs.existsSync('public/llms.txt')) {
  console.log(fs.readFileSync('public/llms.txt', 'utf-8'));
} else {
  console.log('public/llms.txt does not exist');
}

