const fs = require('fs');
fs.readdirSync('scratch').forEach(f => {
  const stat = fs.statSync('scratch/' + f);
  if (f.endsWith('.cjs') || f.endsWith('.js') || f.endsWith('.py')) {
    console.log(f, stat.mtime.toISOString());
  }
});

