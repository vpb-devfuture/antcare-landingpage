const fs = require('fs');
const prerender = fs.readFileSync('scripts/prerender.js', 'utf8');

// Look for routes array in prerender
const routesMatch = prerender.match(/const routes = \[([\s\S]*?)\];/);
if (routesMatch) {
  console.log('Routes in prerender.js:');
  const lines = routesMatch[1].split('\n').map(l => l.trim()).filter(l => l.startsWith('{') || l.startsWith('path:'));
  console.log('Total static routes listed in prerender.js:', lines.length);
  console.log(lines.slice(0, 20).join('\n'));
} else {
  console.log('No direct routes array found in prerender.js, searching for static pages...');
}

