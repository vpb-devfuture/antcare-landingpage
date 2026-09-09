const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 70) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Tháng 9–10 là thời điểm tiêm vắc xin phòng bệnh mùa lạnh cho người cao tuổi. Danh sách vắc xin khuyến nghị, lịch tiêm và những lưu ý cần biết.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Vắc xin mùa thu đông 2026: Người cao tuổi cần tiêm những loại nào và khi nào</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Tháng 9 là thời điểm lý tưởng để tiêm vắc xin phòng bệnh mùa lạnh. Người cao tuổi và gia đình cần biết loại nào cần thiết, loại nào chỉ tiêm một lần, và những điều cần kiểm tra trước khi tiêm.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Hai loại vắc xin quan trọng nhất cho người từ 65 tuổi trở lên trong mùa thu đông là
      <strong>vắc xin cúm</strong> (tiêm mỗi năm, lý tưởng nhất tháng 9–10) và
      <strong>vắc xin phế cầu</strong> (Pneumovax 23 — tiêm một lần, nhắc sau 5 năm nếu có chỉ định;
      Prevenar 13 hoặc 15 — tiêm một lần). Ngoài ra, nếu chưa hoàn thành lịch tiêm:
      <strong>vắc xin uốn ván</strong> (nhắc mỗi 10 năm) và <strong>vắc xin zona thần kinh</strong>
      (khuyến nghị từ 50 tuổi trở lên).
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/cum-mua-2026-nguoi-cao-tuoi-nen-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cúm mùa 2026 tăng mạnh toàn cầu: Những điều người cao tuổi và gia đình cần biết
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao tháng 9 là thời điểm lý tưởng</h2>
  <p>Cúm và các bệnh hô hấp thường cao điểm vào tháng 11–2 khi thời tiết lạnh nhất. Tiêm vắc xin cúm vào tháng 9–10 cho cơ thể đủ thời gian (2–4 tuần) xây dựng miễn dịch trước khi vào mùa dịch. Tiêm quá sớm (tháng 6–7) làm giảm hiệu quả vào thời điểm cần nhất.</p>
  <p>Đây cũng là thời điểm nhiều trung tâm tiêm chủng có đủ hàng vắc xin cúm cập nhật cho mùa mới nhất, theo khuyến nghị của WHO.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Danh sách vắc xin khuyến nghị theo nhóm tuổi</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #efe7fb; color: #2a1b3d;">
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Vắc xin</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Từ 50–64 tuổi</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Từ 65 tuổi trở lên</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Lịch tiêm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Cúm mùa</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Khuyến nghị</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Ưu tiên cao</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Mỗi năm, tháng 9–10</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Phế cầu (Pneumovax 23)</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nếu có bệnh nền</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tất cả</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">1 mũi, nhắc sau 5 năm nếu có chỉ định</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Zona thần kinh (Shingrix)</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Khuyến nghị</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Ưu tiên cao</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">2 mũi cách nhau 2–6 tháng</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Uốn ván (Td)</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nếu chưa nhắc 10 năm</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nếu chưa nhắc 10 năm</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nhắc mỗi 10 năm</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Sốt xuất huyết (Qdenga)</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tham khảo bác sĩ</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tham khảo bác sĩ</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">2 mũi cách 3 tháng</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vắc xin phế cầu — loại nào và khi nào</h2>
  <p>Người cao tuổi tại Việt Nam hiện có thể tiêm hai loại vắc xin phế cầu:</p>
  <p><strong>Pneumovax 23 (PPSV23)</strong> — bảo vệ chống 23 chủng phế cầu, được khuyến nghị cho tất cả người từ 65 tuổi trở lên. Hiệu quả đặc biệt trong phòng nhiễm trùng huyết và viêm màng nào do phế cầu.</p>
  <p><strong>Prevenar 13 hoặc 15 (PCV13/15)</strong> — vắc xin liên hợp, tạo miễn dịch mạnh hơn với số chủng ít hơn nhưng phổ biến hơn. Tại Mỹ, CDC khuyến nghị người từ 65 tuổi trở lên tiêm PCV15 hoặc PCV20 trước, sau đó tiêm Pneumovax 23 cách ít nhất một năm. Gia đình nên tham khảo bác sĩ về loại phù hợp và thứ tự tiêm.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Cách kiểm tra lịch sử tiêm chủng của bố mẹ</h2>
  <p>Nhiều người cao tuổi không nhớ mình đã tiêm vắc xin gì và khi nào. Một số cách kiểm tra:</p>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Tìm sổ tiêm chủng cũ nếu còn lưu
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Tra cứu trên ứng dụng tiêm chủng quốc gia (sổ sức khỏe điện tử) nếu đã đăng ký
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Hỏi trung tâm tiêm chủng nơi đã tiêm trước đây
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Hỏi bác sĩ điều trị — hồ sơ bệnh án thường ghi lại tiền sử tiêm chủng
    </li>
  </ul>

  <p>Nếu không xác định được, hầu hết các vắc xin có thể tiêm lại an toàn — không có nguy cơ nghiêm trọng khi tiêm thừa một mũi, trong khi bỏ sót thì có nguy cơ rõ ràng.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Lưu ý khi đưa người cao tuổi đi tiêm</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Mang theo danh sách đầy đủ thuốc đang dùng và bất kỳ dị ứng thuốc nào. Không nên tiêm khi đang sốt hoặc có đợt bệnh cấp tính — hoãn đến khi hồi phục. Sau tiêm ở lại theo dõi ít nhất 30 phút. Tránh để người cao tuổi đi tiêm một mình vì cần quan sát phản ứng sau tiêm.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Cần đưa bố mẹ đi tiêm vắc xin?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón tận nhà đến trung tâm tiêm chủng, theo dõi sau tiêm và ghi chép vào hồ sơ sức khỏe gửi về gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Vắc xin cúm và vắc xin phế cầu có tiêm cùng ngày được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Hai loại vắc xin này có thể tiêm cùng ngày ở hai vị trí khác nhau. Tiêm cùng ngày tiện hơn và không làm giảm hiệu quả của nhau. Nhân viên y tế sẽ quyết định vị trí tiêm phù hợp (thường một bên đùi hoặc cánh tay) để dễ theo dõi phản ứng nếu có.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Vắc xin zona thần kinh có cần thiết không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Zona thần kinh (giời leo) phổ biến hơn và nặng hơn theo tuổi. Sau 70 tuổi, khoảng 1 trong 3 người sẽ bị zona trong đời. Biến chứng đau sau zona kéo dài nhiều tháng đến nhiều năm gây suy giảm chất lượng sống đáng kể. Vắc xin Shingrix (zona tái tổ hợp) hiệu quả trên 90% trong phòng zona và giảm nguy cơ đau sau zona. Hiện vắc xin này có sẵn tại Việt Nam và được khuyến nghị từ 50 tuổi trở lên.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người đang dùng thuốc ức chế miễn dịch có tiêm vắc xin sống giảm độc lực được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không. Vắc xin sống giảm độc lực (như một số vắc xin zona cũ) chống chỉ định với người đang dùng thuốc ức chế miễn dịch, corticosteroid liều cao, hoặc đang hóa trị. Vắc xin phế cầu và cúm là vắc xin bất hoạt — an toàn với hầu hết người dùng thuốc ức chế miễn dịch. Cần thông báo đầy đủ thuốc đang dùng với nhân viên y tế trước khi tiêm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sau khi tiêm có cần kiêng gì không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Ở lại theo dõi 30 phút sau tiêm là bắt buộc. Sau về nhà, tránh để tay đè lên chỗ tiêm, tránh bơi lội trong 24 giờ đầu. Không cần kiêng ăn uống. Sốt nhẹ, đau và đỏ tại chỗ tiêm trong 1–2 ngày đầu là phản ứng bình thường. Nếu sốt cao trên 39°C, sưng tấy nặng hoặc khó thở sau tiêm — cần đến cơ sở y tế ngay.</p>
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
    "headline": "Vắc xin mùa thu đông 2026: Người cao tuổi cần tiêm những loại nào và khi nào",
    "description": "Tháng 9–10 là thời điểm tiêm vắc xin phòng bệnh mùa lạnh cho người cao tuổi. Danh sách vắc xin khuyến nghị, lịch tiêm và những lưu ý cần biết.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 70,
  slug: 'vac-xin-mua-thu-dong-cho-nguoi-cao-tuoi',
  oldSlugs: ['vac-xin-mua-thu-dong-cho-nguoi-cao-tuoi'],
  title: 'Vắc xin mùa thu đông 2026: Người cao tuổi cần tiêm những loại nào và khi nào',
  category: 'Phòng ngừa bệnh tật',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/vac-xin-mua-thu-dong-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 70 to news.json!');
