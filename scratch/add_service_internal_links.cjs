const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const targetParagraph = `<p>Tìm hiểu thêm về <a href="/giai-phap-cham-soc/" title="Dịch vụ chăm sóc người cao tuổi ANTCARE">dịch vụ chăm sóc người cao tuổi tại nhà của ANTCARE — Kiến chăm tổ</a>.</p>`;

let modifiedCount = 0;
let skippedCount = 0;

newsData.list.forEach((article) => {
  if (!article.content) return;
  
  if (article.content.includes('/giai-phap-cham-soc/')) {
    console.log(`[ALREADY HAS LINK] ID ${article.id}: ${article.slug}`);
    skippedCount++;
    return;
  }

  // Find disclaimer paragraph (starts with <p...<strong>Lưu ý:</strong> or similar or end of <article>)
  // Look for <strong>Lưu ý:</strong> or similar disclaimer marker
  const disclaimerRegex = /(<p[^>]*>\s*<strong>Lưu ý:<\/strong>)/i;
  
  if (disclaimerRegex.test(article.content)) {
    article.content = article.content.replace(disclaimerRegex, `${targetParagraph}\n\n$1`);
    modifiedCount++;
    console.log(`[INSERTED BEFORE DISCLAIMER] ID ${article.id}: ${article.slug}`);
  } else if (article.content.includes('</article>')) {
    article.content = article.content.replace('</article>', `\n\n${targetParagraph}\n</article>`);
    modifiedCount++;
    console.log(`[INSERTED BEFORE END ARTICLE] ID ${article.id}: ${article.slug}`);
  } else {
    article.content += `\n\n${targetParagraph}`;
    modifiedCount++;
    console.log(`[APPENDED AT END] ID ${article.id}: ${article.slug}`);
  }
});

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Done! Modified: ${modifiedCount}, Skipped: ${skippedCount}`);
