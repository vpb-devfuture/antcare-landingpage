const fs = require('fs');
const path = require('path');

const prerenderPath = path.join(__dirname, '..', 'scripts', 'prerender.js');
let code = fs.readFileSync(prerenderPath, 'utf8');

const targetLoop = `  staticRoutes.forEach(r => {
    const pageBody = \`
      <div class="py-12 px-4 max-w-5xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#2A1B3D] mb-4">\${r.h1}</h1>
        <p class="text-base text-slate-700 leading-relaxed">\${r.desc}</p>
      </div>
    \`;`;

const replacementLoop = `  staticRoutes.forEach(r => {
    let extraListHtml = '';
    if (r.path === '/son-tieu' || r.path === '/tieu-son') {
      const sonTieuArticles = (newsData.list || []).filter(a => a.group === 'son-tieu' || a.category === 'Tiểu són' || (a.slug && (a.slug.includes('son-tieu') || a.slug.includes('tieu-son'))));
      const sortedSonTieu = [...sonTieuArticles].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return (b.id || 0) - (a.id || 0);
      });
      extraListHtml = \`
        <div class="mt-8">
          <h2 class="text-xl font-bold text-[#6633B4] mb-4">Bài viết nổi bật trong Cẩm nang Són tiểu</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            \${sortedSonTieu.slice(0, 8).map(a => \`
              <article class="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                \${a.isPinned ? '<span class="inline-block text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded mb-2">📌 Đã ghim</span>' : ''}
                <h3 class="font-bold text-base text-[#1C1917] mb-1.5"><a href="/son-tieu/\${a.slug}" class="hover:text-[#6633B4]">\${a.title}</a></h3>
                <p class="text-xs text-slate-600 line-clamp-2">\${a.description || a.excerpt || ''}</p>
              </article>
            \`).join('')}
          </div>
        </div>
      \`;
    } else if (r.path === '/kinh-nguyet') {
      const knArticles = (newsData.list || []).filter(a => a.group === 'kinh-nguyet' || a.category === 'Kinh nguyệt' || (a.slug && a.slug.includes('kinh-nguyet')));
      const sortedKn = [...knArticles].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return (b.id || 0) - (a.id || 0);
      });
      extraListHtml = \`
        <div class="mt-8">
          <h2 class="text-xl font-bold text-[#6633B4] mb-4">Bài viết nổi bật trong Cẩm nang Kinh nguyệt</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            \${sortedKn.slice(0, 8).map(a => \`
              <article class="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                \${a.isPinned ? '<span class="inline-block text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded mb-2">📌 Đã ghim</span>' : ''}
                <h3 class="font-bold text-base text-[#1C1917] mb-1.5"><a href="/kinh-nguyet/\${a.slug}" class="hover:text-[#6633B4]">\${a.title}</a></h3>
                <p class="text-xs text-slate-600 line-clamp-2">\${a.description || a.excerpt || ''}</p>
              </article>
            \`).join('')}
          </div>
        </div>
      \`;
    }

    const pageBody = \`
      <div class="py-12 px-4 max-w-5xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#2A1B3D] mb-4">\${r.h1}</h1>
        <p class="text-base text-slate-700 leading-relaxed">\${r.desc}</p>
        \${extraListHtml}
      </div>
    \`;`;

if (code.includes(targetLoop)) {
  code = code.replace(targetLoop, replacementLoop);
  fs.writeFileSync(prerenderPath, code, 'utf8');
  console.log('Successfully enhanced staticRoutes in scripts/prerender.js');
} else {
  console.warn('targetLoop not matched in scripts/prerender.js');
}

