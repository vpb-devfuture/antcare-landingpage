const fs = require('fs');
if (fs.existsSync('vercel.json')) {
  console.log(fs.readFileSync('vercel.json', 'utf-8'));
} else {
  console.log('vercel.json does not exist');
}

