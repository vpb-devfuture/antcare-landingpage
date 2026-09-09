const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 66) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Sốt xuất huyết đang tăng mạnh tại Hà Nội và TP.HCM mùa mưa 2026. Dấu hiệu cảnh báo nặng ở người cao tuổi và khi nào cần nhập viện ngay.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Sốt xuất huyết mùa mưa 2026: Vì sao nguy hiểm hơn với người cao tuổi</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Số ca sốt xuất huyết tăng 24% so với cùng kỳ 2025. Người cao tuổi có bệnh nền là nhóm dễ diễn tiến nặng nhất nhưng lại ít được chú ý nhất.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Sốt xuất huyết ở người cao tuổi nguy hiểm hơn người trẻ vì ba lý do:
      hệ miễn dịch phản ứng chậm hơn, các bệnh nền (tim mạch, tiểu đường, thận) làm tăng nguy cơ
      biến chứng, và triệu chứng thường không điển hình — có thể không sốt cao.
      Dấu hiệu cảnh báo nặng cần nhập viện ngay: <strong>đau bụng dữ dội, nôn liên tục,
      chảy máu răng miệng hoặc mũi, lơ mơ, tay chân lạnh, tiểu ít</strong>.
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
        <a href="/news/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/dich-vu-dong-hanh-kham-benh-la-gi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dịch vụ đồng hành khám bệnh là gì và khi nào gia đình nên dùng
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tình hình sốt xuất huyết năm 2026</h2>
  <p>Theo số liệu từ Trung tâm Kiểm soát bệnh tật TP.HCM, tính đến hết tuần 30 năm 2026 (cuối tháng 7), cả nước ghi nhận hơn 23.000 ca sốt xuất huyết tại TP.HCM — tăng gần 24% so với cùng kỳ 2025. Tại Hà Nội, CDC ghi nhận riêng tuần cuối tháng 7 có 175 ca tại 66 phường xã.</p>
  <p>Các chuyên gia dự báo số ca sẽ duy trì ở mức cao trong các tháng 8, 9, 10 — giai đoạn mưa nhiều nhất trong năm, muỗi sinh sản mạnh nhất và nguy cơ lây lan cao nhất.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao sốt xuất huyết nguy hiểm hơn với người cao tuổi</h2>
  <p>Người cao tuổi không phải nhóm mắc nhiều nhất, nhưng là nhóm diễn tiến nặng và tử vong cao nhất khi mắc sốt xuất huyết. Ba yếu tố chính:</p>
  <p><strong>Phản ứng miễn dịch chậm hơn.</strong> Virus dengue gây giảm tiểu cầu và tăng tính thấm thành mạch. Ở người cao tuổi, quá trình này xảy ra nhanh hơn và cơ thể khó bù đắp kịp hơn so với người trẻ.</p>
  <p><strong>Bệnh nền làm tăng biến chứng.</strong> Người có bệnh tim mạch khi bị sốt xuất huyết dễ suy tim nặng hơn. Người tiểu đường dễ nhiễm trùng và hồi phục chậm hơn. Người dùng thuốc kháng đông hoặc thuốc chống kết tập tiểu cầu có nguy cơ xuất huyết cao hơn nhiều khi tiểu cầu giảm.</p>
  <p><strong>Triệu chứng không điển hình.</strong> Người cao tuổi có thể không sốt cao rõ ràng, không đau người nhiều như người trẻ. Triệu chứng dễ bị nhầm với cảm thông thường hoặc mệt do tuổi tác, dẫn đến phát hiện và điều trị muộn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu cảnh báo nặng cần nhập viện ngay</h2>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đau bụng dữ dội hoặc đau liên tục vùng gan (hạ sườn phải)
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Nôn liên tục không kiểm soát được, trên 3 lần trong 1 giờ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Chảy máu bất thường: chảy máu chân răng, máu mũi, đốm xuất huyết dưới da
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Lơ mơ, bứt rứt, hành vi bất thường
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Tay chân lạnh, mạch nhanh, huyết áp tụt
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Tiểu rất ít hoặc không tiểu trong 6 giờ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Hết sốt đột ngột nhưng người mệt hơn, không tỉnh táo
    </li>
  </ul>

  <p>Dấu hiệu cuối cùng đặc biệt quan trọng: hết sốt vào ngày 3–5 không phải dấu hiệu khỏi bệnh mà có thể là lúc bệnh đang vào giai đoạn nguy hiểm nhất.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Theo dõi tại nhà cho người cao tuổi bị sốt xuất huyết</h2>
  <p>Nếu bác sĩ cho điều trị ngoại trú, gia đình cần theo dõi sát theo lịch:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #efe7fb; color: #2a1b3d;">
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Chỉ số</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Theo dõi</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Mức cần gọi bác sĩ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Nhiệt độ</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">3–4 lần/ngày</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Trên 39,5°C hoặc hết sốt đột ngột kèm mệt tăng</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Huyết áp</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">2 lần/ngày</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tâm thu dưới 90 mmHg hoặc giảm hơn 20 so với ngày trước</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Lượng nước uống</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Ghi chép hằng ngày</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Uống không đủ 1,5–2 lít/ngày</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Lượng nước tiểu</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Quan sát</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tiểu ít hơn bình thường hoặc không tiểu 6 giờ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Không dùng Ibuprofen hoặc Aspirin</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Người bị sốt xuất huyết chỉ được dùng <strong>paracetamol</strong> để hạ sốt. Ibuprofen, Aspirin và các thuốc kháng viêm không steroid khác làm tăng nguy cơ xuất huyết và tổn thương dạ dày. Đây là sai lầm phổ biến, đặc biệt với người cao tuổi quen dùng Aspirin hoặc thuốc kháng viêm cho đau khớp.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phòng ngừa muỗi đốt trong nhà</h2>
  <p>Muỗi vằn truyền sốt xuất huyết thường hoạt động ban ngày và hay trú trong nhà. Các biện pháp hiệu quả nhất trong nhà: dọn dẹp và đổ nước các vật chứa nước nhỏ mỗi tuần (bình hoa, khay nước điều hòa, xô chậu), ngủ màn kể cả ban ngày, và dùng kem xua muỗi khi ở nhà trong giờ muỗi hoạt động mạnh (sáng 7–9 giờ và chiều 4–6 giờ).</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ đang sốt và bạn không thể có mặt?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa người cao tuổi đi khám và theo dõi sát tình trạng trong suốt buổi, gửi kết quả về cho gia đình ngay trong ngày.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sốt xuất huyết có lây từ người này sang người khác không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không lây trực tiếp từ người sang người. Bệnh lây qua vết đốt của muỗi Aedes aegypti (muỗi vằn) đã nhiễm virus dengue từ người bệnh. Muỗi này thường hoạt động ban ngày, đốt mạnh vào sáng sớm và chiều tối. Phòng bệnh tốt nhất là diệt loăng quăng, bọ gậy và tránh để muỗi đốt bằng kem xua muỗi, mặc quần áo dài, ngủ màn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi bị sốt xuất huyết có nhất thiết phải nhập viện không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không nhất thiết, nhưng cần được theo dõi sát hơn người trẻ. Bác sĩ sẽ đánh giá mức độ và quyết định điều trị ngoại trú hay nhập viện dựa trên tình trạng cụ thể, bệnh nền và kết quả xét nghiệm công thức máu. Người cao tuổi có bệnh tim mạch, tiểu đường, thận hoặc đang dùng thuốc kháng đông thường được chỉ định nhập viện theo dõi dù triệu chứng chưa nặng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sốt xuất huyết nguy hiểm nhất ở giai đoạn nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Giai đoạn nguy hiểm nhất là ngày 3 đến ngày 7 kể từ khi sốt — đây là lúc tiểu cầu giảm thấp nhất và nguy cơ xuất huyết cao nhất. Nhiều người mắc sai lầm khi thấy hết sốt vào ngày 3-4 thì nghĩ đã khỏi và bỏ theo dõi, trong khi đây lại là thời điểm cần chú ý nhất. Với người cao tuổi, giai đoạn này cần theo dõi sát huyết áp, lượng nước tiểu và các dấu hiệu xuất huyết.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có vắc xin phòng sốt xuất huyết không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và Việt Nam đã cấp phép vắc xin Qdenga phòng sốt xuất huyết từ năm 2024. Vắc xin được tiêm 2 mũi cách nhau 3 tháng. Tuy nhiên hiệu quả và khuyến nghị tiêm cho người cao tuổi cần được bác sĩ tư vấn dựa trên tình trạng sức khỏe cá nhân, đặc biệt với người có bệnh nền. Gia đình nên hỏi bác sĩ điều trị về sự phù hợp trước khi tiêm.</p>
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
    "headline": "Sốt xuất huyết mùa mưa 2026: Vì sao nguy hiểm hơn với người cao tuổi",
    "description": "Sốt xuất huyết đang tăng mạnh tại Hà Nội và TP.HCM mùa mưa 2026. Dấu hiệu cảnh báo nặng ở người cao tuổi và khi nào cần nhập viện ngay.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 66,
  slug: 'sot-xuat-huyet-mua-mua-nguoi-cao-tuoi',
  oldSlugs: ['sot-xuat-huyet-mua-mua-nguoi-cao-tuoi'],
  title: 'Sốt xuất huyết mùa mưa 2026: Vì sao nguy hiểm hơn với người cao tuổi',
  category: 'Tin tức sức khỏe',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/sot-xuat-huyet-mua-mua-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 66 to news.json!');
