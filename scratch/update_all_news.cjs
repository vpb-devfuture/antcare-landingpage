const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const allArticles = [newsData.featured, ...newsData.list];
console.log(`Total articles in news.json: ${allArticles.length}`);

const targetSlogan = "ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui";

let updatedCount = 0;

allArticles.forEach((art, index) => {
  if (!art || !art.content) return;

  // Check if slogan is already present
  if (!art.content.includes("không chỉ là chăm sóc người già")) {
    // Insert slogan inside the antcare-cta block or before the disclaimer / faq
    const sloganHtml = `<p style="margin-top: 15px; font-style: italic; color: #4f2d7f; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>`;
    
    if (art.content.includes('class="antcare-cta"') || art.content.includes("antcare-cta")) {
      art.content = art.content.replace(
        /(<aside[^>]*class="[^"]*antcare-cta[^"]*"[^>]*>)/i,
        `$1\n    ${sloganHtml}`
      );
    } else if (art.content.includes('class="cta"')) {
      art.content = art.content.replace(
        /(<div[^>]*class="[^"]*cta[^"]*"[^>]*>)/i,
        `$1\n    ${sloganHtml}`
      );
    } else if (art.content.includes("</article>")) {
      art.content = art.content.replace("</article>", `  ${sloganHtml}\n</article>`);
    } else {
      art.content += `\n${sloganHtml}`;
    }
    updatedCount++;
  }
});

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} articles with the requested SEO slogan!`);
