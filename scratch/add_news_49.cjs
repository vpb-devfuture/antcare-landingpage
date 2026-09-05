const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Phân tích chi tiết ưu nhược điểm giữa viện dưỡng lão, người giúp việc gia đình và dịch vụ chăm sóc người cao tuổi theo giờ, giúp con cái chọn đúng giải pháp vừa an toàn cho bố mẹ vừa trọn vẹn hiếu đạo.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Viện Dưỡng Lão, Người Giúp Việc Hay Chăm Sóc Tại Gia Theo Giờ: Đâu Là Lựa Chọn Đúng Cho Bố Mẹ?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Phân tích chi tiết ưu nhược điểm giữa viện dưỡng lão, người giúp việc gia đình và dịch vụ chăm sóc người cao tuổi theo giờ, giúp con cái chọn đúng giải pháp vừa an toàn cho bố mẹ vừa trọn vẹn hiếu đạo.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <h2 style="font-weight: 700; color: #0f172a;">1. Bài toán khó của gia đình hiện đại khi cha mẹ bước qua tuổi 70</h2>
  <p>Khi cha mẹ bắt đầu xuất hiện những biểu hiện suy giảm vận động hoặc mắc các bệnh nền mạn tính (tăng huyết áp, di chứng sau tai biến nhẹ, suy giảm trí nhớ), hầu hết những người con thế hệ 8x, 9x đều rơi vào tình thế tiến thoái lưỡng nan: công việc cơ quan không thể bỏ dở, nhưng để bố mẹ ở nhà một mình từ sáng đến tối thì luôn bất an về nguy cơ trượt ngã, quên uống thuốc hay đột quỵ bất ngờ.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/cach-noi-chuyen-voi-bo-me-ve-viec-can-nguoi-cham-soc" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cách nói chuyện với bố mẹ cao tuổi về việc cần người chăm sóc mà không gây xung đột
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi-dich-vu-tu-nhan" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mô Hình Xã Hội Hóa Chăm Sóc Người Cao Tuổi: Vì Sao Dịch Vụ Tư Nhân Đang Lấp Đúng Chỗ Trống?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">2. Bảng so sánh 3 mô hình chăm sóc phổ biến nhất hiện nay</h2>
  <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; margin: 20px 0;">
    <thead>
      <tr style="background-color: #f1f5f9; text-align: left;">
        <th style="width: 20%;">Tiêu chí</th>
        <th style="width: 26%;">Viện dưỡng lão nội trú</th>
        <th style="width: 27%;">Người giúp việc ở lại nhà</th>
        <th style="width: 27%;">Dịch vụ chăm sóc tại gia theo giờ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tâm lý người cao tuổi</strong></td>
        <td>Dễ cảm thấy bị con cái "bỏ rơi", xa lạ môi trường sống, khó hòa nhập nếp sinh hoạt tập thể.</td>
        <td>Ở tại nhà mình nhưng dễ phát sinh va chạm lối sống, khác biệt văn hóa với người lạ.</td>
        <td><strong>Thoải mái nhất:</strong> Được ở trong ngôi nhà quen thuộc, duy trì nếp sinh hoạt tự nhiên bên con cháu.</td>
      </tr>
      <tr>
        <td><strong>Kỹ năng y tế & Cấp cứu</strong></td>
        <td>Có nhân viên y tế túc trực 24/7.</td>
        <td>Hầu như không có chuyên môn y tế, lúng túng khi bệnh nhân tụt huyết áp, sặc thức ăn hoặc ngã.</td>
        <td><strong>Chuẩn hóa:</strong> Nhân sự có chứng chỉ Sơ cấp cứu và chăm sóc người cao tuổi, theo dõi chỉ số sinh tồn chuẩn xác.</td>
      </tr>
      <tr>
        <td><strong>Tính riêng tư & Chi phí</strong></td>
        <td>Chi phí cao cố định (10–25 triệu/tháng), phòng ở chia sẻ không gian chung.</td>
        <td>Chi phí từ 8–10 triệu/tháng + bao ăn ở, ảnh hưởng đến không gian riêng tư của gia đình.</td>
        <td><strong>Linh hoạt & Tiết kiệm:</strong> Chỉ trả chi phí theo khung giờ thực tế sử dụng (từ 299.000đ/buổi), bảo toàn sự riêng tư gia đình.</td>
      </tr>
    </tbody>
  </table>

  <h2 style="font-weight: 700; color: #0f172a;">3. Khi nào bạn nên chọn mô hình chăm sóc tại nhà theo giờ?</h2>
  <ul>
    <li>Bố mẹ vẫn còn khả năng tự chủ một phần sinh hoạt nhưng cần người hỗ trợ trong khung giờ con cái đi làm vắng nhà.</li>
    <li>Bố mẹ mắc các bệnh mạn tính cần người nhắc nhở uống thuốc chuẩn giờ và theo dõi sát sao chỉ số huyết áp, đường huyết.</li>
    <li>Gia đình mong muốn sự chăm sóc y tế chuyên nghiệp mà không muốn can thiệp sâu vào sinh hoạt chung cả ngày lẫn đêm.</li>
  </ul>

  <!-- CTA DỊCH VỤ AN TÂM CỬA NHÀ - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Lo lắng khi để bố mẹ ở nhà một mình cả ngày dài?</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Giúp việc thông thường khó có đủ kiến thức y tế khi gặp sự cố, còn con cái thì bận rộn với guồng quay công sở. Bố mẹ cần một người bạn đồng hành tin cậy ngay tại gian bếp, phòng khách quen thuộc.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ An Tâm Cửa Nhà của ANTCARE – Kiến chăm tổ mang đến sự an lòng trọn vẹn:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Túc trực hỗ trợ sinh hoạt thường nhật, phòng ngừa trượt ngã, đảm bảo an toàn tại gia.</li>
      <li>Chuẩn bị bữa ăn theo thực đơn bệnh lý (giảm muối, hạn chế đường, dễ tiêu hóa).</li>
      <li>Nhắc nhở uống thuốc đúng cữ, hỗ trợ vận động nhẹ nhàng và trò chuyện giải tỏa cô đơn.</li>
      <li>Báo cáo tình trạng sinh hoạt mỗi ngày gửi trực tiếp cho con cái qua ứng dụng.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi "Kiến" của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Đặt lịch linh hoạt theo giờ hoặc theo ca ngày.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp Về Lựa Chọn Mô Hình Chăm Sóc Người Cao Tuổi</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nếu bố mẹ kiên quyết từ chối người ngoài vào chăm sóc thì làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Hãy bắt đầu bằng những buổi ngắn (khoảng 2–3 giờ/ngày) với lý do là có người qua đo kiểm tra huyết áp và dọn dẹp nhẹ hỗ trợ, không dùng từ "người trông nom". Sự ân cần và thái độ tôn trọng của nhân sự có chuyên môn sẽ dần tạo được thiện cảm tự nhiên từ cha mẹ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Dịch vụ chăm sóc theo giờ có hỗ trợ người già sau phẫu thuật hoặc liệt nửa người không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có. Nhân viên có chuyên môn sơ cấp cứu và lão khoa có kỹ năng xoay trở người bệnh đúng tư thế, phòng chống loét tì đè, hỗ trợ tập phục hồi chức năng thụ động và hỗ trợ vệ sinh thân thể an toàn.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Viện Dưỡng Lão, Người Giúp Việc Hay Chăm Sóc Tại Gia Theo Giờ: Đâu Là Lựa Chọn Đúng Cho Bố Mẹ?",
    "description": "Phân tích chi tiết ưu nhược điểm giữa viện dưỡng lão, người giúp việc gia đình và dịch vụ chăm sóc người cao tuổi theo giờ, giúp con cái chọn đúng giải pháp vừa an toàn cho bố mẹ vừa trọn vẹn hiếu đạo.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 49,
  slug: 'vien-duong-lao-giup-viec-hay-cham-soc-tai-gia',
  title: 'Viện Dưỡng Lão, Người Giúp Việc Hay Chăm Sóc Tại Gia Theo Giờ: Đâu Là Lựa Chọn Đúng Cho Bố Mẹ?',
  category: 'Cẩm nang Chăm sóc Lão khoa',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/vien-duong-lao-giup-viec-hay-cham-soc-tai-gia.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 49 to news.json!');
