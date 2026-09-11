const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const allArticles = [newsData.featured, ...newsData.list];
console.log(`Updating slogan style in ${allArticles.length} articles...`);

// Prominent, beautiful, eye-catching highlight box for the slogan
const prominentSloganHtml = `<div class="antcare-slogan-box" style="background: linear-gradient(135deg, #efe7fb 0%, #fff7ed 100%); border-left: 5px solid #ff8a00; padding: 1.25rem 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; box-shadow: 0 2px 8px rgba(42, 27, 61, 0.06);">
  <p style="margin: 0; color: #2a1b3d; font-family: 'Be Vietnam Pro', sans-serif; font-size: 1.08rem; line-height: 1.65; font-weight: 600;">
    💡 <em>"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</em>
  </p>
</div>`;

let count = 0;

allArticles.forEach((art) => {
  if (!art || !art.content) return;

  // 1. Remove previous slogan formats if existing
  art.content = art.content.replace(/<p style="margin-top: 15px; font-style: italic; color: #4f2d7f; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."<\/p>/g, '');
  art.content = art.content.replace(/<div class="antcare-slogan-box"[\s\S]*?<\/div>/g, '');

  // 2. Insert prominent slogan box into the article:
  // Insert inside the CTA section if present, or before FAQ / closing article tag
  if (art.content.includes('class="antcare-cta"') || art.content.includes("antcare-cta")) {
    art.content = art.content.replace(
      /(<aside[^>]*class="[^"]*antcare-cta[^"]*"[^>]*>)/i,
      `${prominentSloganHtml}\n$1`
    );
  } else if (art.content.includes('class="cta"')) {
    art.content = art.content.replace(
      /(<div[^>]*class="[^"]*cta[^"]*"[^>]*>)/i,
      `${prominentSloganHtml}\n$1`
    );
  } else if (art.content.includes("</article>")) {
    art.content = art.content.replace("</article>", `${prominentSloganHtml}\n</article>`);
  } else {
    art.content += `\n${prominentSloganHtml}`;
  }
  count++;
});

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated slogan style in ${count} articles!`);
