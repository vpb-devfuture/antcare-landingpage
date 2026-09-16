const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

let targetArticle = null;
if (newsData.featured && newsData.featured.id === 104) {
  targetArticle = newsData.featured;
} else {
  targetArticle = newsData.list.find(x => x.id === 104);
}

if (!targetArticle) {
  console.error('Article 104 not found!');
  process.exit(1);
}

const oldRow = `<tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nhiệm vụ chính</td>
          <td style="padding: 0.8rem 1rem;">Thực hiện thủ thuật y tế, thay băng, tiêm thuốc, theo dõi chỉ số sinh tồn.</td>
          <td style="padding: 0.8rem 1rem;">Đi dạo, trò chuyện, đi khám, làm đồ thủ công, đảm bảo an toàn té ngã.</td>
        </tr>`;

const newRows = `<tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nhiệm vụ chính</td>
          <td style="padding: 0.8rem 1rem;">Thực hiện thủ thuật y tế, thay băng, tiêm thuốc, theo dõi bệnh lý chuyên sâu.</td>
          <td style="padding: 0.8rem 1rem;">Đi dạo, trò chuyện, đi khám, làm đồ thủ công, đảm bảo an toàn té ngã.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Theo dõi chỉ số sinh tồn</td>
          <td style="padding: 0.8rem 1rem;">Theo dõi chuyên sâu các chỉ số lâm sàng phức tạp và theo dõi di chứng bệnh nặng.</td>
          <td style="padding: 0.8rem 1rem;">Vẫn chủ động kiểm tra <strong>5 chỉ số sinh tồn cơ bản của ANTCARE</strong> (Huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2) mỗi ca làm việc để báo cáo thời gian thực cho gia đình.</td>
        </tr>`;

if (targetArticle.content.includes('Nhiệm vụ chính')) {
  targetArticle.content = targetArticle.content.replace(oldRow, newRows);
  fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully updated article 104 with 5 vital indicators in comparison table!');
} else {
  console.error('Could not find target row in article 104!');
}
