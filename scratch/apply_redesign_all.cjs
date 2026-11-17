const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');

const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));

// 1. Update Article 357
const NEW_TITLE_VI = 'Kinh nguyệt tuổi dậy thì & học sinh: Cẩm nang toàn diện cho con gái và cha mẹ';
const NEW_TITLE_EN = 'Menstruation in Puberty & School-Age Girls: Comprehensive Guide for Daughters and Parents';

const art357Vi = news.list.find(a => a.id === 357);
if (art357Vi) {
  art357Vi.title = NEW_TITLE_VI;
  if (art357Vi.schema && art357Vi.schema['@graph']) {
    const bp = art357Vi.schema['@graph'].find(g => g['@type'] === 'BlogPosting');
    if (bp) bp.headline = NEW_TITLE_VI;
  }
  // Replace H2 at top of content if present
  art357Vi.content = art357Vi.content.replace(
    /<h2>Kinh nguyệt tuổi học sinh: cẩm nang đầy đủ cho con gái và cha mẹ<\/h2>/i,
    `<h2>${NEW_TITLE_VI}</h2>`
  );
  console.log('Updated Article 357 VI title');
}

const art357En = newsEn.list.find(a => a.id === 357);
if (art357En) {
  art357En.title = NEW_TITLE_EN;
  if (art357En.schema && art357En.schema['@graph']) {
    const bp = art357En.schema['@graph'].find(g => g['@type'] === 'BlogPosting');
    if (bp) bp.headline = NEW_TITLE_EN;
  }
  console.log('Updated Article 357 EN title');
}

// 2. Transformation function for all articles
function transformArticleContent(content, isEn = false) {
  if (!content) return content;
  let c = content;

  // A. Transform TOC into collapsible accordion (without open attribute)
  c = c.replace(/<nav class="toc"([^>]*)>\s*(?:<strong>([\s\S]*?)<\/strong>)?\s*(<ol[\s\S]*?<\/ol>)\s*<\/nav>/gi, (match, navAttrs, strongText, olList) => {
    const defaultTitle = isEn ? 'Table of Contents' : 'Mục lục nội dung bài viết';
    const title = (strongText || defaultTitle).replace(/<[^>]+>/g, '').trim();
    const btnLabel = isEn ? 'View topics ▾' : 'Xem chi tiết ▾';
    return `<details class="toc-accordion" style="background: #faf8fd; border: 1px solid #e6dff2; border-radius: 12px; padding: 12px 18px; margin: 20px 0;">
  <summary style="font-weight: 700; color: #6633B4; cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none;">
    <span style="display: flex; align-items: center; gap: 8px;">
      <span>📑</span>
      <span>${title || defaultTitle}</span>
    </span>
    <span style="font-size: 0.82rem; color: #FD711A; font-weight: 600;">${btnLabel}</span>
  </summary>
  <nav class="toc" ${navAttrs} style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed #e6dff2; background: transparent; border: none; padding-left: 0; padding-right: 0; margin-bottom: 0;">
    ${olList}
  </nav>
</details>`;
  });

  // Remove open from existing <details class="toc-accordion" open>
  c = c.replace(/<details class="toc-accordion"\s+open>/gi, '<details class="toc-accordion">');

  // B. Extract keywords paragraph from top and move to bottom
  const topSlice = c.slice(0, 1500);
  const kwMatch = topSlice.match(/<(p|div)[^>]*class=["'][^"']*meta[^"']*["'][^>]*>\s*(?:Từ khóa|Keywords)\s*:[\s\S]*?<\/\1>/i) ||
                  topSlice.match(/<(p|div)[^>]*>\s*(?:<strong>)?\s*(?:Từ khóa|Keywords)\s*:[\s\S]*?<\/\1>/i);

  if (kwMatch) {
    const originalKw = kwMatch[0];
    c = c.replace(originalKw, '');

    const innerText = originalKw.replace(/<[^>]+>/g, '').trim();
    const isKwEn = innerText.startsWith('Keywords') || isEn;
    const label = isKwEn ? 'Related Keywords' : 'Từ khóa liên quan';
    const cleanKwText = innerText.replace(/^(?:Từ khóa|Keywords)\s*:\s*/i, '');

    const formattedFooter = `\n\n<div class="article-keywords" style="margin-top: 32px; padding-top: 16px; border-top: 1px dashed #e6dff2; font-size: 0.85rem; color: #6b7280; line-height: 1.6;">
  <strong>🏷️ ${label}:</strong> ${cleanKwText}
</div>\n`;

    if (c.includes('<section class="sources"')) {
      const idx = c.indexOf('<section class="sources"');
      c = c.slice(0, idx) + formattedFooter + '\n' + c.slice(idx);
    } else {
      c = c + formattedFooter;
    }
  }

  return c;
}

let movedKwVi = 0;
let movedKwEn = 0;
let transformedTocVi = 0;

news.list.forEach(a => {
  if (a.content) {
    const hadKw = /Từ khóa\s*:/i.test(a.content.slice(0, 1500));
    const hadToc = a.content.includes('class="toc"');
    a.content = transformArticleContent(a.content, false);
    if (hadKw) movedKwVi++;
    if (hadToc) transformedTocVi++;
  }
});

newsEn.list.forEach(a => {
  if (a.content) {
    const hadKw = /(?:Từ khóa|Keywords)\s*:/i.test(a.content.slice(0, 1500));
    a.content = transformArticleContent(a.content, true);
    if (hadKw) movedKwEn++;
  }
});

console.log(`Transformed VI: ${movedKwVi} keywords moved, ${transformedTocVi} TOCs styled`);
console.log(`Transformed EN: ${movedKwEn} keywords moved`);

// Save updated news files
fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('Successfully saved news.json and news.en.json');

