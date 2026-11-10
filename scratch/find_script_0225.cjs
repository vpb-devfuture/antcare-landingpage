const fs = require('fs');
fs.readdirSync('scratch').forEach(f => {
  const stat = fs.statSync('scratch/' + f);
  if (stat.mtime.toISOString().startsWith('2026-11-06T02:')) {
    console.log(f, stat.mtime.toISOString());
  }
});

