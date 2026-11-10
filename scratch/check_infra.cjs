const fs = require('fs');

console.log('=== robots.txt ===');
if (fs.existsSync('public/robots.txt')) {
  console.log(fs.readFileSync('public/robots.txt', 'utf8'));
} else {
  console.log('No public/robots.txt');
}

console.log('\n=== Checking hosting redirect config files ===');
const checkFiles = ['_redirects', 'public/_redirects', 'vercel.json', 'netlify.toml', 'firebase.json', '.htaccess', 'public/.htaccess'];
checkFiles.forEach(f => {
  if (fs.existsSync(f)) {
    console.log(`Found ${f}:\n`, fs.readFileSync(f, 'utf8'));
  }
});

