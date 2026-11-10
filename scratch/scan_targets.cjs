const fs = require('fs');
const path = require('path');

const targets = ['/#dich-vu', '/#bang-gia-chi-tiet', '/quan-lot-tham-hut', 'quan-lot-tham-hut', '/ve-antcare', '#dich-vu', '#bang-gia-chi-tiet'];

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'brain'].includes(entry.name)) {
        scanDir(full);
      }
    } else if (entry.isFile() && /\.(jsx?|tsx?|json|html|md)$/.test(entry.name) && !entry.name.includes('.bak')) {
      const content = fs.readFileSync(full, 'utf8');
      targets.forEach(t => {
        if (content.includes(t)) {
          console.log(`${full} matches "${t}"`);
        }
      });
    }
  }
}

scanDir('src');
scanDir('scripts');
scanDir('public');

