const path = require('path');
const news = require(path.resolve(__dirname, '../src/data/news.json'));

function transformContent(content) {
  let c = content;

  // 1. Convert TOC into collapsible accordion (without open attribute)
  // Pattern A: <nav class="toc" ...><strong>...</strong><ol>...</ol></nav>
  c = c.replace(/<nav class="toc"([^>]*)>\s*(?:<strong>([\s\S]*?)<\/strong>)?\s*(<ol[\s\S]*?<\/ol>)\s*<\/nav>/gi, (match, navAttrs, strongText, olList) => {
    const title = (strongText || 'Mục lục nội dung bài viết').replace(/<[^>]+>/g, '').trim();
    return `<details class="toc-accordion" style="background: #faf8fd; border: 1px solid #e6dff2; border-radius: 12px; padding: 12px 18px; margin: 20px 0;">
  <summary style="font-weight: 700; color: #6633B4; cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none;">
    <span style="display: flex; align-items: center; gap: 8px;">
      <span>📑</span>
      <span>${title || 'Mục lục nội dung bài viết'}</span>
    </span>
    <span style="font-size: 0.82rem; color: #FD711A; font-weight: 600;">Xem chi tiết ▾</span>
  </summary>
  <nav class="toc" ${navAttrs} style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed #e6dff2; background: transparent; border: none; padding-left: 0; padding-right: 0; margin-bottom: 0;">
    ${olList}
  </nav>
</details>`;
  });

  // Pattern B: Remove open from existing <details class="toc-accordion" open>
  c = c.replace(/<details class="toc-accordion"\s+open>/gi, '<details class="toc-accordion">');

  // 2. Extract and move keywords paragraph from top to bottom
  // Matches <p class="meta">...Từ khóa:... hoặc <p>...Từ khóa:... in the first 1500 chars
  const topSlice = c.slice(0, 1500);
  const kwMatch = topSlice.match(/<(p|div)[^>]*class=["'][^"']*meta[^"']*["'][^>]*>\s*(?:Từ khóa|Keywords)\s*:[\s\S]*?<\/\1>/i) ||
                  topSlice.match(/<(p|div)[^>]*>\s*(?:<strong>)?\s*(?:Từ khóa|Keywords)\s*:[\s\S]*?<\/\1>/i);

  if (kwMatch) {
    const originalKw = kwMatch[0];
    // Remove from top
    c = c.replace(originalKw, '');

    // Format clean footer keywords block
    const innerText = originalKw.replace(/<[^>]+>/g, '').trim();
    const formattedFooter = `\n\n<div class="article-keywords" style="margin-top: 32px; padding-top: 16px; border-top: 1px dashed #e6dff2; font-size: 0.85rem; color: #6b7280; line-height: 1.6;">
  <strong>🏷️ ${innerText.startsWith('Keywords') ? 'Keywords' : 'Từ khóa liên quan'}:</strong> ${innerText.replace(/^(?:Từ khóa|Keywords)\s*:\s*/i, '')}
</div>\n`;

    // Append to bottom (right before <section class="sources"> if exists, or before </article>, or at end)
    if (c.includes('<section class="sources"')) {
      const idx = c.indexOf('<section class="sources"');
      c = c.slice(0, idx) + formattedFooter + '\n' + c.slice(idx);
    } else {
      c = c + formattedFooter;
    }
  }

  return c;
}

// Test on article 357, 367, 368
[357, 367, 368, 301].forEach(id => {
  const art = news.list.find(a => a.id === id);
  if (art) {
    const transformed = transformContent(art.content);
    console.log(`\n=== Testing Article ${id}: ${art.slug} ===`);
    console.log('Original length:', art.content.length, 'Transformed length:', transformed.length);
    console.log('Starts with (first 250 chars):\n', transformed.slice(0, 250));
    console.log('Ends with (last 300 chars):\n', transformed.slice(-300));
    console.log('Has details.toc-accordion:', transformed.includes('details class="toc-accordion"'));
    console.log('Has article-keywords at bottom:', transformed.includes('class="article-keywords"'));
  }
});

