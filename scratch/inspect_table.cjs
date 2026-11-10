const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

// Find table in seo-plan
const tableMatch = html.match(/<div class="seo-plan">([\s\S]*?)<\/div>/i);
if (tableMatch) {
  console.log('Found seo-plan:');
  const rows = [...tableMatch[1].matchAll(/<tr>([\s\S]*?)<\/tr>/gi)];
  console.log('Rows count:', rows.length);
  rows.forEach((r, idx) => {
    const cols = [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(c => c[1].replace(/<[^>]+>/g, '').trim());
    if (cols.length > 0) {
      console.log(`Row ${idx}: ${cols.join(' | ')}`);
    }
  });
}

