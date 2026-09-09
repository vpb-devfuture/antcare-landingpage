const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 65) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Bộ Y tế đề xuất BHYT thanh toán chi phí sàng lọc tăng huyết áp và đái tháo đường từ năm 2030. Lộ trình cụ thể và ý nghĩa với gia đình có người cao tuổi.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Bộ Y tế vừa đề xuất mở rộng phạm vi chi trả của bảo hiểm y tế sang sàng lọc phát hiện sớm — thay vì chờ đến khi bệnh được xác định mới dùng quyền lợi bảo hiểm.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Theo dự thảo Nghị định của Bộ Y tế công bố đầu tháng 9/2026,
      <strong>từ ngày 1/1/2030, quỹ BHYT dự kiến thanh toán chi phí sàng lọc và chẩn đoán sớm
      tăng huyết áp, đái tháo đường, và một số loại ung thư</strong> như ung thư vú, phổi,
      tiền liệt tuyến và đại trực tràng. Nghị định có hiệu lực pháp lý từ 1/4/2027;
      giai đoạn 2027–2030 là thời gian xây dựng quy định chi tiết về đối tượng, điều kiện
      và mức thanh toán cụ thể. Đây là đề xuất, chưa có hiệu lực ngay.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dich-vu-dong-hanh-kham-benh-la-gi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dịch vụ đồng hành khám bệnh là gì và khi nào gia đình nên dùng
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          7 rủi ro khi để người cao tuổi đi khám bệnh một mình
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bối cảnh: vì sao cần thay đổi chính sách BHYT</h2>
  <p>Hiện tại, quỹ BHYT chủ yếu chi trả khi người bệnh đã được chẩn đoán và đang điều trị — nghĩa là tiền bảo hiểm được dùng khi bệnh đã ở giai đoạn có triệu chứng, thường là muộn hơn so với thời điểm phát hiện tốt nhất.</p>
  <p>Hai bệnh mà đề xuất này hướng tới — tăng huyết áp và đái tháo đường — có một đặc điểm chung quan trọng: cả hai đều tiến triển âm thầm trong nhiều năm trước khi có triệu chứng rõ ràng, và cả hai đều gây biến chứng nặng nề nếu không được phát hiện và kiểm soát sớm.</p>
  <p>Theo số liệu Bộ Y tế đưa ra trong dự thảo, nếu phát hiện và điều trị sớm tăng huyết áp, quỹ BHYT có thể tiết kiệm trung bình khoảng 1.216,8 tỷ đồng mỗi năm — chủ yếu do giảm số ca biến chứng nặng như đột quỵ, suy thận và suy tim cần điều trị nội trú kéo dài và tốn kém.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Lộ trình cụ thể</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #efe7fb; color: #2a1b3d;">
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d; width: 30%;">Mốc thời gian</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Nội dung</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Tháng 9/2026</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bộ Y tế công bố dự thảo Nghị định để lấy ý kiến</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>1/4/2027</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nghị định có hiệu lực pháp lý — mở đường sửa đổi quy định BHYT</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>2027–2029</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Xây dựng quy định chi tiết: đối tượng, điều kiện, mức thanh toán</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>1/1/2030</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">BHYT bắt đầu thanh toán chi phí sàng lọc tăng huyết áp, đái tháo đường và một số ung thư</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Những bệnh nằm trong lộ trình sàng lọc</h2>
  <p>Dự thảo đề cập hai nhóm chính:</p>
  <p><strong>Bệnh không lây nhiễm phổ biến:</strong> tăng huyết áp và đái tháo đường type 2. Đây là hai bệnh có tỷ lệ mắc cao nhất ở người trung niên và cao tuổi Việt Nam, và cũng là hai bệnh mà phần lớn người mắc chưa được phát hiện — ước tính khoảng 50% người tăng huyết áp tại Việt Nam chưa được chẩn đoán.</p>
  <p><strong>Ung thư phổ biến:</strong> ung thư vú, phổi, tiền liệt tuyến và đại trực tràng. Đây là bốn loại ung thư có tỷ lệ tử vong cao một phần vì thường được phát hiện ở giai đoạn muộn. Sàng lọc định kỳ có thể phát hiện ở giai đoạn sớm khi tỷ lệ điều trị thành công cao hơn nhiều.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ý nghĩa thực tế với gia đình có người cao tuổi</h2>
  <p>Đây là chính sách quan trọng nhưng cần đọc đúng phạm vi: đây là <strong>đề xuất</strong>, chưa có hiệu lực ngay, và mốc thực hiện là năm 2030. Gia đình không nên chờ đến 2030 để bắt đầu sàng lọc cho bố mẹ.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Những gì có thể làm ngay hôm nay</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Đo huyết áp tại nhà định kỳ mỗi tuần, xét nghiệm đường huyết lúc đói mỗi 6 tháng, và đăng ký khám sức khỏe tổng quát định kỳ theo chương trình khám miễn phí cho người cao tuổi mà ngân sách nhà nước đang triển khai năm 2026. Những việc này không cần chờ chính sách mới và phần lớn đã được BHYT chi trả trong các lần khám thông thường.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chương trình khám miễn phí cho người cao tuổi đang triển khai năm 2026</h2>
  <p>Song song với đề xuất dài hạn về sàng lọc từ 2030, trong năm 2026, ngân sách nhà nước đang ưu tiên tổ chức khám sức khỏe định kỳ cho người cao tuổi, người có công, hộ nghèo và cận nghèo — đây là chương trình đã có hiệu lực, không phải đề xuất tương lai.</p>
  <p>Nội dung khám tập trung vào sàng lọc sớm tăng huyết áp, đái tháo đường, bệnh tim mạch và một số bệnh ung thư thường gặp. Người từ đủ 18 tuổi trở lên được khám lâm sàng tổng quát gồm đo huyết áp, xét nghiệm đường huyết, công thức máu, chức năng gan thận và chụp X-quang tim phổi.</p>
  <p>Gia đình nên liên hệ trạm y tế phường hoặc trung tâm y tế quận để biết lịch khám cụ thể tại địa phương.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tăng huyết áp và tiểu đường: con số đáng chú ý ở người cao tuổi Việt Nam</h2>
  <p>Theo các nghiên cứu và số liệu y tế gần đây, tỷ lệ tăng huyết áp ở người Việt Nam từ 60 tuổi trở lên ước tính trên 50%, trong đó một nửa chưa được chẩn đoán. Tỷ lệ đái tháo đường ở nhóm tuổi này cũng dao động 15–20%, với phần lớn không có triệu chứng rõ ràng trong nhiều năm đầu.</p>
  <p>Đây là lý do phát hiện sớm quan trọng hơn bất kỳ điều trị nào: kiểm soát huyết áp và đường huyết từ giai đoạn sớm giúp giảm tới 30–40% nguy cơ đột quỵ, nhồi máu cơ tim và suy thận — những biến chứng tốn kém nhất và ảnh hưởng nặng nề nhất đến chất lượng sống của người cao tuổi và gia đình.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ chưa được kiểm tra huyết áp và đường huyết định kỳ?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đến tận nhà đo các chỉ số sức khỏe cơ bản và gửi báo cáo về cho gia đình. Không cần chờ đến 2030 để phát hiện sớm.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Gọi 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Nhận tư vấn miễn phí
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">BHYT sàng lọc tăng huyết áp tiểu đường có hiệu lực từ khi nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Theo dự thảo Nghị định Bộ Y tế công bố tháng 9/2026, lộ trình gồm hai mốc: Nghị định có hiệu lực pháp lý từ 1/4/2027, mở đường cho việc sửa đổi quy định về mức hưởng và phạm vi BHYT. Việc thực sự thanh toán chi phí sàng lọc tăng huyết áp, đái tháo đường và một số ung thư dự kiến từ 1/1/2030. Giai đoạn 2027–2030 là thời gian xây dựng quy định chi tiết về đối tượng và mức thanh toán cụ thể.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ai sẽ được hưởng quyền lợi sàng lọc khi chính sách có hiệu lực?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Dự thảo chưa nêu cụ thể danh sách đối tượng. Tuy nhiên, Bộ Y tế cho biết sẽ ưu tiên nhóm nguy cơ cao gồm người từ 40 tuổi trở lên, người có tiền sử gia đình mắc tăng huyết áp hoặc đái tháo đường, người thừa cân béo phì, và người cao tuổi. Chi tiết sẽ được quy định trong văn bản hướng dẫn giai đoạn 2027–2030.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Hiện tại gia đình có thể làm gì để phát hiện sớm tăng huyết áp và tiểu đường cho bố mẹ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không cần chờ đến 2030. Đo huyết áp tại nhà định kỳ mỗi tuần là biện pháp đơn giản và hiệu quả nhất để theo dõi tăng huyết áp. Đối với tiểu đường, xét nghiệm đường huyết lúc đói tại phòng khám hoặc bệnh viện mỗi 6–12 tháng là đủ cho người chưa có triệu chứng. Chi phí xét nghiệm này hiện rất thấp và được BHYT chi trả khi khám theo diện bảo hiểm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">BHYT có chi trả sàng lọc ung thư không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Theo cùng dự thảo Nghị định, từ 1/1/2030, BHYT dự kiến thanh toán sàng lọc ung thư vú, phổi, tiền liệt tuyến và đại trực tràng. Ung thư dạ dày và gan chưa được ấn định thời điểm cụ thể trong dự thảo này. Đây vẫn là đề xuất và cần được Quốc hội và Chính phủ phê duyệt trước khi có hiệu lực.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế",
    "description": "Bộ Y tế đề xuất BHYT thanh toán chi phí sàng lọc tăng huyết áp và đái tháo đường từ năm 2030. Lộ trình cụ thể và ý nghĩa với gia đình có người cao tuổi.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 65,
  slug: 'bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030',
  oldSlugs: ['bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030'],
  title: 'BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế',
  category: 'Chính sách y tế',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 65 to news.json!');
