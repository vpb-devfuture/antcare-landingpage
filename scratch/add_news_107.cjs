const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_3_core_services_warm_1789535347530.jpg`;
const imageFileName = '3-dich-vu-cot-loi-antcare.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

fs.copyFileSync(generatedImageSrc, imageDest);
console.log('Copied warm object image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Shift current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const slug = '3-dich-vu-cot-loi-antcare';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chi Tiết 3 Dịch Vụ Chăm Sóc Người Cao Tuổi Chuẩn Quốc Tế Của ANTCARE</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Khám phá 3 dịch vụ cốt lõi của ANTCARE: Đưa đi khám bệnh, Theo dõi sức khỏe chuẩn Mỹ/Singapore và Hỗ trợ an toàn nhà cửa có báo cáo qua App.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      ANTCARE mang đến giải pháp toàn diện gồm 3 dịch vụ chuyên biệt: <strong>1. Đưa người cao tuổi đi khám bệnh tại Hà Nội</strong> (có định vị AirTag an toàn), <strong>2. Theo dõi sức khỏe tại nhà</strong> (kế thừa Senior Fitness Mỹ &amp; Active Ageing Singapore) và <strong>3. Hỗ trợ an toàn nhà cửa</strong> kết hợp cập nhật minh bạch qua App gia đình.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/8-gio-o-ben-nguoi-cao-tuoi-khac-hoan-toan-thue-giup-viec" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          8 Giờ Đồng Hành Cùng Người Cao Tuổi: Sự Khác Biệt Giữa Chăm Sóc Chuyên Môn ANTCARE Và Giúp Việc Thông Thường
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/khong-phai-luc-nao-nguoi-cao-tuoi-cung-can-dieu-duong" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Không phải lúc nào người cao tuổi cũng cần điều dưỡng. Có khi họ chỉ cần một người đi cùng.
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố ở Hà Nội nhưng con đang công tác 5 ngày — ai đưa bố đi tái khám?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tổng quan 3 Dịch Vụ Cốt Lõi Của ANTCARE</h2>
  <p>Tùy theo nhu cầu thực tế của từng gia đình, ANTCARE cung cấp 3 nhóm giải pháp được thiết kế tỉ mỉ, tôn trọng phẩm giá người cao tuổi:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Dịch vụ cốt lõi</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 40%;">Đặc điểm nổi bật</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 35%;">Giá trị mang lại cho gia đình</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1. Đưa đi khám bệnh (Hà Nội)</td>
          <td style="padding: 0.8rem 1rem;">Định vị AirTag suốt hành trình, đưa đón tận nhà, làm toàn bộ thủ tục hành chính, ghi chép lời bác sĩ.</td>
          <td style="padding: 0.8rem 1rem;">An tâm tuyệt đối khi con ở xa hoặc bận công tác, không sợ bố mẹ bị ngã hay lạc.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">2. Theo dõi sức khỏe tại nhà</td>
          <td style="padding: 0.8rem 1rem;">Chuẩn Senior Fitness (Mỹ) &amp; Active Ageing (Singapore), đo 5 chỉ số sinh tồn, nhắc thuốc, rèn trí não.</td>
          <td style="padding: 0.8rem 1rem;">Bố mẹ duy trì sự tự chủ vận động, tinh thần minh mẫn, phát hiện sớm nguy cơ sức khỏe.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">3. Hỗ trợ an toàn nhà cửa</td>
          <td style="padding: 0.8rem 1rem;">Rà soát loại bỏ nguy cơ trơn trượt té ngã, hỗ trợ nội trợ dưỡng sinh, cập nhật báo cáo thời gian thực qua App.</td>
          <td style="padding: 0.8rem 1rem;">Môi trường sống an toàn cho người già, theo dõi tình trạng nhà cửa trực quan qua App.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">1. Dịch Vụ Đưa Người Cao Tuổi Đi Khám Bệnh Tại Hà Nội</h2>
  <p>Quy trình đồng hành đi khám chuyên nghiệp bảo vệ an toàn tối đa cho người lớn tuổi:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đặt lịch khám trước, kiểm tra chỉ số sức khỏe trước khi đi và đưa đón tận nhà bằng phương tiện an toàn.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đồng hành trong suốt quá trình khám, sử dụng <strong>AirTag định vị</strong> giúp gia đình cập nhật vị trí thời gian thực.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hỗ trợ mua thuốc theo đơn, tổng hợp kết quả và cập nhật đầy đủ thông tin khám bệnh lên App cho gia đình theo dõi từ xa.
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">2. Dịch Vụ Theo Dõi Sức Khỏe Người Cao Tuổi Tại Nhà</h2>
  <p>Giải pháp chăm sóc sức khỏe chủ động không thể thiếu cho tuổi già khỏe mạnh:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kế thừa chương trình <strong>Senior Fitness (Mỹ)</strong> và <strong>Active Ageing (Singapore)</strong> giúp tăng dẻo dai cơ khớp và phản xạ thăng bằng.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kiểm tra định kỳ 5 chỉ số sinh tồn (Huyết áp, nhịp tim, SpO2, nhịp thở, nhiệt độ... và đường huyết), hướng dẫn bài tập vận động, rèn luyện trí não và nhắc nhở uống thuốc hàng ngày.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Trò chuyện tinh tế, mang lại trải nghiệm mới mỗi tuần và gửi báo cáo chi tiết liên tục qua App ANTCARE.
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">3. Dịch Vụ Hỗ Trợ An Toàn Nhà Cửa Cho Người Cao Tuổi</h2>
  <p>Đảm bảo không gian sống lành mạnh, loại bỏ hiểm họa tiềm ẩn:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kiểm tra rủi ro nhà cửa không an toàn (thảm trượt, tay vịn lỏng, ánh sáng yếu) và xử lý các nguy cơ trong khả năng.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Dọn dẹp hoặc hỗ trợ nội trợ nhẹ nhàng theo đúng yêu cầu dưỡng sinh, trò chuyện chia sẻ mỗi ngày giúp cụ giải tỏa cô đơn.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Cập nhật báo cáo phát sinh an toàn và nhật ký sinh hoạt trực tiếp qua App cho người thân nắm bắt tức thì.
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Mỗi gia đình có một hoàn cảnh và nhu cầu khác nhau. Việc kết hợp linh hoạt 3 dịch vụ cốt lõi của ANTCARE sẽ giúp bố mẹ có được giải pháp chăm sóc phù hợp nhất mà vẫn đảm bảo tính độc lập và tự tôn cá nhân.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Chăm sóc chu đáo — Kết nối thông suốt qua App cho gia đình. Đồng hành cùng người cao tuổi tại Hà Nội.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">AirTag định vị khi đưa đi khám bệnh hoạt động thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Khi đồng hành cùng cụ đi khám tại bệnh viện, Trợ lý ANTCARE trang bị thiết bị định vị AirTag an toàn giúp con cái có thể theo dõi vị trí thực tế của bố mẹ trên bản đồ từ xa bất kỳ lúc nào.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tôi có thể đăng ký kết hợp cả 3 dịch vụ cùng lúc không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. ANTCARE hỗ trợ các gói dịch vụ linh hoạt kết hợp giữa đồng hành đi khám, theo dõi sức khỏe tại nhà và hỗ trợ an toàn không gian sống tùy thuộc vào nhu cầu thực tế của từng gia đình.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <em>Lưu ý: Nội dung bài viết mang tính tham khảo. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế.</em>
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chi Tiết 3 Dịch Vụ Chăm Sóc Người Cao Tuổi Chuẩn Quốc Tế Của ANTCARE",
    "description": "Khám phá 3 dịch vụ cốt lõi của ANTCARE: Đưa đi khám bệnh, Theo dõi sức khỏe chuẩn Mỹ/Singapore và Hỗ trợ an toàn nhà cửa có báo cáo qua App.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 107,
  slug: slug,
  oldSlugs: [
    slug,
    '3-dich-vu-cot-loi-antcare'
  ],
  title: 'Chi Tiết 3 Dịch Vụ Chăm Sóc Người Cao Tuổi Chuẩn Quốc Tế Của ANTCARE',
  category: 'Dịch vụ ANTCARE',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Khám phá 3 dịch vụ cốt lõi của ANTCARE: Đưa đi khám bệnh, Theo dõi sức khỏe chuẩn Mỹ/Singapore và Hỗ trợ an toàn nhà cửa có báo cáo qua App.',
  excerpt: 'Khám phá 3 dịch vụ cốt lõi của ANTCARE: Đưa đi khám bệnh, Theo dõi sức khỏe chuẩn Mỹ/Singapore và Hỗ trợ an toàn nhà cửa có báo cáo qua App.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 107 to news.json as featured!');
