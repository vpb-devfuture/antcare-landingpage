const fs = require('fs');
const path = require('path');

function searchDir(dir, pattern) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchDir(fullPath, pattern);
    } else if (/\.(jsx?|json|html|md|txt)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (pattern.test(content)) {
        console.log('Match found in:', fullPath);
      }
    }
  }
}

searchDir('src', /tạm dừng nhận khách/);
searchDir('scripts', /tạm dừng nhận khách/);
searchDir('public', /tạm dừng nhận khách/);

