const fs = require('fs');
if (fs.existsSync('public/robots.txt')) {
  console.log(fs.readFileSync('public/robots.txt', 'utf-8'));
} else {
  console.log('public/robots.txt does not exist');
}

