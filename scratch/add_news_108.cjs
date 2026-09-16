const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_app_bright_dashboard_1789535569663.jpg`;
const imageFileName = 'khi-con-o-xa-an-tam-voi-app-antcare.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

fs.copyFileSync(generatedImageSrc, imageDest);
console.log('Copied bright object image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Shift current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const slug = 'khi-con-o-xa-an-tam-voi-app-antcare';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Khi Con Ở Xa: An Tâm Tuyệt Đối Với Hệ Thống Báo Cáo Qua App Của ANTCARE</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Con cái ở xa hoàn toàn yên tâm về bố mẹ tại Hà Nội nhờ ứng dụng ANTCARE cập nhật chỉ số sinh tồn, tiến trình tập luyện và an toàn nhà cửa thời gian thực.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Dù ở xa hay đi công tác, bạn luôn nắm rõ tình hình sức khỏe và sinh hoạt của bố mẹ tại Hà Nội nhờ <strong>App ANTCARE</strong>. Mọi dữ liệu về 5 chỉ số sinh tồn, lịch uống thuốc đúng giờ, tiến trình rèn luyện Senior Fitness, định vị AirTag đi khám và các nguy cơ an toàn nhà cửa được xử lý đều được cập nhật tức thì.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/3-dich-vu-cot-loi-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chi Tiết 3 Dịch Vụ Chăm Sóc Người Cao Tuổi Chuẩn Quốc Tế Của ANTCARE
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/8-gio-o-ben-nguoi-cao-tuoi-khac-hoan-toan-thue-giup-viec" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          8 Giờ Đồng Hành Cùng Người Cao Tuổi: Sự Khác Biệt Giữa Chăm Sóc Chuyên Môn ANTCARE Và Giúp Việc Thông Thường
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/khong-phai-luc-nao-nguoi-cao-tuoi-cung-can-dieu-duong" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Không phải lúc nào người cao tuổi cũng cần điều dưỡng. Có khi họ chỉ cần một người đi cùng.
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bảng tính năng theo dõi thời gian thực trên App ANTCARE</h2>
  <p>Hệ thống công nghệ của ANTCARE giúp xóa bỏ khoảng cách địa lý, mang lại sự kết nối minh bạch 24/7 giữa gia đình và đội ngũ chăm sóc:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Hạng mục báo cáo</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 40%;">Nội dung cập nhật trên App</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 35%;">Lợi ích cho con cái ở xa</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1. Chỉ số sinh tồn cơ bản</td>
          <td style="padding: 0.8rem 1rem;">Đo &amp; ghi nhận Huyết áp, nhịp tim, SpO2, nhịp thở, nhiệt độ và đường huyết sau mỗi ca trực.</td>
          <td style="padding: 0.8rem 1rem;">Phát hiện sớm biến động huyết áp/mỡ máu để điều chỉnh liệu trình kịp thời.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">2. Nhắc thuốc &amp; Nhật ký tập</td>
          <td style="padding: 0.8rem 1rem;">Xác nhận uống thuốc đúng giờ; nhật ký vận động Senior Fitness (Mỹ) &amp; rèn luyện trí não.</td>
          <td style="padding: 0.8rem 1rem;">Không lo bố mẹ quên uống thuốc hay thiếu vận động thể chất hàng ngày.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">3. An toàn không gian sống</td>
          <td style="padding: 0.8rem 1rem;">Báo cáo ảnh thực tế các điểm nguy cơ trơn trượt, té ngã đã được xử lý tại nhà riêng.</td>
          <td style="padding: 0.8rem 1rem;">An tâm môi trường sống của bố mẹ luôn an toàn, phòng tránh sự cố té ngã.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">4. Định vị AirTag đi khám</td>
          <td style="padding: 0.8rem 1rem;">Hiển thị vị trí thực tế của cụ trên bản đồ khi đến bệnh viện &amp; lưu đơn thuốc của bác sĩ.</td>
          <td style="padding: 0.8rem 1rem;">Nắm rõ tiến trình buổi khám bệnh dù bạn ở bất kỳ đâu trên thế giới.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">1. Nắm Bắt Chỉ Số Sức Khỏe &amp; Lịch Trình Mỗi Ngày</h2>
  <p>Toàn bộ thông tin sức khỏe của bố mẹ được chuẩn hóa trên giao diện ứng dụng dễ sử dụng:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Theo dõi kết quả đo Huyết áp, nhịp tim, SpO2, đường huyết được nhân sự chuyên môn cập nhật tức thì lên App sau mỗi ca chăm sóc.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Xác nhận lịch nhắc nhở uống thuốc và nhật ký tập luyện chủ động (vận động thể chất dẻo dai cơ khớp, bài tập rèn luyện trí não bèo tây).
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">2. Giám Sát An Toàn Nhà Cửa &amp; Đưa Đi Khám Bệnh</h2>
  <p>Cung cấp minh bạch góc nhìn thực tế về môi trường sống và hoạt động khám chữa bệnh:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhận báo cáo rà soát các rủi ro không an toàn tại nhà đã được xử lý (sàn nhà tắm, tay vịn, thảm trượt) hoặc các phát sinh mới qua App.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Theo dõi lộ trình đưa cụ đi khám bệnh với công nghệ <strong>định vị AirTag an toàn</strong> và xem kết quả khám, đơn thuốc trực tiếp trên App.
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Ứng dụng ANTCARE được phát triển với triết lý kết nối gia đình sâu sắc. Dù ở cách xa hàng ngàn cây số, người con vẫn có thể đồng hành sát sao cùng sức khỏe của bố mẹ mỗi ngày mà không làm phiền hay gây căng thẳng cho người cao tuổi.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Giải pháp kết nối chăm sóc sức khỏe người cao tuổi chuẩn quốc tế cho con cái ở xa. An tâm tuyệt đối qua App gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tôi ở nước ngoài có tải và dùng được App ANTCARE không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. App ANTCARE hỗ trợ truy cập toàn cầu trên cả iOS và Android. Bạn có thể đăng nhập tài khoản gia đình để nhận thông báo tức thì và xem biểu đồ chỉ số sinh tồn của bố mẹ ở Hà Nội mọi lúc mọi nơi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nếu chỉ số sinh tồn của bố mẹ có bất thường thì App cảnh báo ra sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Khi nhân sự đo và nhập chỉ số huyết áp hoặc SpO2 có dấu hiệu bất thường, hệ thống App ANTCARE sẽ phát cảnh báo màu đỏ tức thì tới điện thoại người thân, đồng thời nhân sự tại chỗ sẽ thực hiện quy trình hỗ trợ y tế ban đầu.</p>
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
    "headline": "Khi Con Ở Xa: An Tâm Tuyệt Đối Với Hệ Thống Báo Cáo Qua App Của ANTCARE",
    "description": "Con cái ở xa hoàn toàn yên tâm về bố mẹ tại Hà Nội nhờ ứng dụng ANTCARE cập nhật chỉ số sinh tồn, tiến trình tập luyện và an toàn nhà cửa thời gian thực.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 108,
  slug: slug,
  oldSlugs: [
    slug,
    'khi-con-o-xa-an-tam-voi-app-antcare'
  ],
  title: 'Khi Con Ở Xa: An Tâm Tuyệt Đối Với Hệ Thống Báo Cáo Qua App Của ANTCARE',
  category: 'Giải pháp gia đình',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Con cái ở xa hoàn toàn yên tâm về bố mẹ tại Hà Nội nhờ ứng dụng ANTCARE cập nhật chỉ số sinh tồn, tiến trình tập luyện và an toàn nhà cửa thời gian thực.',
  excerpt: 'Con cái ở xa hoàn toàn yên tâm về bố mẹ tại Hà Nội nhờ ứng dụng ANTCARE cập nhật chỉ số sinh tồn, tiến trình tập luyện và an toàn nhà cửa thời gian thực.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 108 to news.json as featured!');
