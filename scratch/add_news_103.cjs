const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_reexamination_object_1789533827234.jpg`;
const imageFileName = 'bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

fs.copyFileSync(generatedImageSrc, imageDest);
console.log('Copied object image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Shift current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const slug = 'bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Bố ở Hà Nội nhưng con đang công tác 5 ngày — ai đưa bố đi tái khám?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Giải pháp đưa người già đi tái khám đúng lịch tại Hà Nội khi con cái bận đi công tác xa. An tâm, tỉ mỉ và tôn trọng phẩm giá người cao tuổi.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Trì hoãn lịch tái khám của người già có thể làm gián đoạn liệu trình điều trị bệnh mãn tính. Khi bạn đi công tác, giải pháp tối ưu là sử dụng dịch vụ <strong>Trợ lý sức khỏe theo ca</strong>. Nhân sự sẽ đưa đón tận nơi bằng xe an toàn, xếp hàng lấy số, dìu bố đi xét nghiệm và theo dõi sức khỏe trong suốt buổi khám, đồng thời cập nhật nhật ký y tế tức thì cho gia đình.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/o-nuoc-ngoai-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Ở nước ngoài, mẹ gọi bảo mai đi khám nhưng không ai đưa đi?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/thuyet-phuc-bo-me-chap-nhan-dung-bim" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Làm sao thuyết phục bố mẹ chấp nhận dùng bỉm
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/cham-soc-nguoi-sau-dot-quy-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chăm sóc người sau đột quỵ tại nhà: Những điều gia đình cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Hệ lụy khi hoãn lịch tái khám của người cao tuổi</h2>
  <p>Khi con cái đi công tác, tâm lý chung của bố mẹ là: <em>"Thôi để tuần sau con về rồi đi, chậm mấy ngày không sao"</em>. Tuy nhiên, với các bệnh mãn tính như tiểu đường, huyết áp hay tim mạch, việc chậm trễ tái khám mang lại nhiều rủi ro nghiêm trọng:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hết thuốc theo đơn cũ dẫn đến tự ý mua thuốc ngoài hoặc ngừng thuốc đột ngột làm huyết áp/đường huyết biến động thất thường.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bỏ lỡ thời điểm vàng để điều chỉnh liều lượng thuốc theo chỉ số xét nghiệm máu và cận lâm sàng mới.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bố mẹ tự đi một mình vì sợ phiền con, dễ gặp nguy cơ té ngã, nhầm lẫn sơ đồ phòng khám hoặc say nắng/trúng gió khi di chuyển.
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Quy trình đồng hành tái khám chuẩn mực tại ANTCARE</h2>
  <p>ANTCARE thiết kế quy trình 5 bước để chuyến đi khám của bố diễn ra nhẹ nhàng như có con cháu đi cùng:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 32%;">Bước quy trình</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Hành động tỉ mỉ của Trợ lý ANTCARE</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1. Chuẩn bị hồ sơ từ tối hôm trước</td>
          <td style="padding: 0.8rem 1rem;">Nhân sự ANTCARE liên hệ xác nhận danh mục sổ khám, thẻ BHYT, Căn cước công dân và các đơn thuốc cũ cần mang theo.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">2. Đưa đón tận nhà an toàn</td>
          <td style="padding: 0.8rem 1rem;">Trợ lý có mặt tại nhà riêng đúng giờ, hỗ trợ bố chuẩn bị trang phục phù hợp thời tiết và dìu bố lên xe di chuyển an toàn.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">3. Xử lý toàn bộ thủ tục hành chính</td>
          <td style="padding: 0.8rem 1rem;">Xếp hàng lấy số, nộp tiền tạm ứng, đưa bố đến từng phòng xét nghiệm/siêu âm mà bố không phải xếp hàng di chuyển vất vả.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">4. Chăm sóc thể trạng trong lúc chờ</td>
          <td style="padding: 0.8rem 1rem;">Chuẩn bị nước uống, đồ ăn nhẹ (nếu cần sau khi thử máu), túc trực kê ghế cho bố ngồi và trò chuyện giải tỏa căng thẳng.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">5. Bàn giao &amp; Báo cáo thời gian thực</td>
          <td style="padding: 0.8rem 1rem;">Đưa bố về nhà an toàn, phân loại và xếp thuốc theo ca uống, đồng thời gửi báo cáo kết quả và đơn thuốc cho bạn qua Zalo/WhatsApp.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Bố mẹ lớn tuổi thường rất ngại phiền con cái, đặc biệt khi biết bạn đang có chuyến công tác bận rộn. Việc đặt dịch vụ trợ lý đồng hành chuyên nghiệp không chỉ giúp bảo vệ sức khỏe cho bố mà còn giúp bố thoải mái tâm lý, không mang cảm giác "gánh nặng".
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Đồng hành cùng người cao tuổi Hà Nội đi tái khám an toàn, tinh tế. Giải tỏa áp lực cho những chuyến công tác xa của bạn.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Hotline 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Liên hệ ANTCARE ngay
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp (FAQ)</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">ANTCARE có xe đưa đón riêng không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">ANTCARE cung cấp giải pháp di chuyển linh hoạt tùy theo nhu cầu của gia đình, bao gồm việc đặt xe công nghệ cao cấp, xe gầm cao hoặc phối hợp di chuyển bằng xe riêng của gia đình.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nếu bố tôi khó tính và không muốn người lạ đưa đi thì sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nhân sự ANTCARE được đào tạo bài bản về tâm lý người cao tuổi, tiếp cận với thái độ lễ phép, tinh tế như con cháu trong nhà giúp bố nhanh chóng giải tỏa sự phòng thủ và cảm thấy thoải mái.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <em>Lưu ý: Nội dung bài viết mang tính tham khảo. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thay thế cho chẩn đoán hay điều trị y khoa.</em>
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bố Ở Hà Nội, Con Công Tác 5 Ngày: Ai Đưa Bố Đi Tái Khám An Toàn?",
    "description": "Giải pháp đưa người già đi tái khám đúng lịch tại Hà Nội khi con cái bận đi công tác xa. An tâm, tỉ mỉ và tôn trọng phẩm giá người cao tuổi.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 103,
  slug: slug,
  oldSlugs: [
    slug,
    'bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham'
  ],
  title: 'Bố ở Hà Nội nhưng con đang công tác 5 ngày — ai đưa bố đi tái khám?',
  category: 'Chăm sóc sức khỏe',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Giải pháp đưa người già đi tái khám đúng lịch tại Hà Nội khi con cái bận đi công tác xa. An tâm, tỉ mỉ và tôn trọng phẩm giá người cao tuổi.',
  excerpt: 'Giải pháp đưa người già đi tái khám đúng lịch tại Hà Nội khi con cái bận đi công tác xa. An tâm, tỉ mỉ và tôn trọng phẩm giá người cao tuổi.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 103 to news.json as featured!');
