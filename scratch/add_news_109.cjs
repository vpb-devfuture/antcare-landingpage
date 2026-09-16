const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_airtag_hospital_bright_1789535720428.jpg`;
const imageFileName = 'dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon.jpg';
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

const slug = 'dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Quy Trình Đưa Người Cao Tuổi Đi Khám Bệnh Tại Hà Nội An Toàn Tuyệt Đối</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Dịch vụ đưa người già đi khám tại Hà Nội của ANTCARE: Đặt lịch trước, đo sinh tồn, sử dụng Airtag định vị và cập nhật kết quả đầy đủ trên App.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      ANTCARE giải quyết hoàn toàn khó khăn khi đưa ông bà đi khám bệnh tại Hà Nội: Tối ưu thời gian nhờ <strong>đặt lịch khám trước</strong>, đảm bảo an toàn tuyệt đối nơi đông người nhờ <strong>AirTag định vị vị trí thời gian thực</strong> và cập nhật trọn vẹn kết quả khám bệnh, đơn thuốc lên <strong>App ANTCARE</strong> cho gia đình.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/khi-con-o-xa-an-tam-voi-app-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Khi Con Ở Xa: An Tâm Tuyệt Đối Với Hệ Thống Báo Cáo Qua App Của ANTCARE
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/3-dich-vu-cot-loi-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chi Tiết 3 Dịch Vụ Chăm Sóc Người Cao Tuổi Chuẩn Quốc Tế Của ANTCARE
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố ở Hà Nội nhưng con đang công tác 5 ngày — ai đưa bố đi tái khám?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bảng so sánh: Tự đi khám vs Quy trình Đưa đi khám Chuyên nghiệp ANTCARE</h2>
  <p>Đi khám tại các bệnh viện lớn tại Hà Nội thường phức tạp và đông đúc. Dưới đây là sự khác biệt khi có Trợ lý ANTCARE đồng hành:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Giai đoạn khám</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Tự đi khám / Thuê xe tự do</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Quy trình Chuyên nghiệp ANTCARE</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1. Trước khởi hành</td>
          <td style="padding: 0.8rem 1rem;">Không kiểm tra sức khỏe, dễ quên sổ khám/BHYT, đến viện mới xếp hàng.</td>
          <td style="padding: 0.8rem 1rem;"><strong>Đặt lịch khám trước</strong>, kiểm tra 5 chỉ số sinh tồn tại nhà, chuẩn bị đầy đủ hồ sơ BHYT.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">2. Di chuyển &amp; An toàn</td>
          <td style="padding: 0.8rem 1rem;">Dễ say xe, nguy cơ lạc hoặc té ngã ở chỗ đông người.</td>
          <td style="padding: 0.8rem 1rem;">Đưa đón tận nhà an toàn, trang bị <strong>Apple AirTag định vị</strong> vị trí thời gian thực cho gia đình.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">3. Tại bệnh viện</td>
          <td style="padding: 0.8rem 1rem;">Cụ phải tự xếp hàng, di chuyển giữa các tầng xét nghiệm mệt mỏi.</td>
          <td style="padding: 0.8rem 1rem;">Trợ lý làm toàn bộ thủ tục hành chính, nộp tạm ứng, dìu cụ ngồi chờ chỗ thoáng mát.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">4. Bàn giao &amp; Báo cáo</td>
          <td style="padding: 0.8rem 1rem;">Con cái ở xa không nắm được lời bác sĩ dặn hay đơn thuốc.</td>
          <td style="padding: 0.8rem 1rem;">Tổng hợp kết luận khám, mua thuốc theo đơn và cập nhật trọn vẹn lên <strong>App ANTCARE</strong>.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">1. Chuẩn Bị Bài Bản Trước Khi Đi Khám</h2>
  <p>Quy trình chuẩn bị kỹ lưỡng giúp ca khám diễn ra nhanh chóng, giảm mệt mỏi cho người lớn tuổi:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Đặt lịch khám trước:</strong> Hỗ trợ đặt lịch hẹn trước tại các cơ sở y tế uy tín ở Hà Nội để hạn chế tối đa thời gian chờ đợi.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Kiểm tra chỉ số sinh tồn:</strong> Đo huyết áp, nhịp tim, SpO2 cho cụ ngay tại nhà trước khi khởi hành để đảm bảo thể trạng ổn định.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Đưa đón tận nơi chu đáo:</strong> Nhân sự có mặt đúng giờ, hỗ trợ chuẩn bị khẩu trang, nước uống và dìu cụ ra xe di chuyển êm ái.
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">2. Đồng Hành Chuyên Nghiệp &amp; Công Nghệ Định Vị</h2>
  <p>Bảo vệ an toàn thể chất và minh bạch thông tin cho người thân ở xa:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Đồng hành thủ tục y tế:</strong> Nhân sự đi cùng hỗ trợ làm thủ tục lấy số, đóng viện phí, nâng đỡ cụ trong suốt quá trình di chuyển qua các phòng khám/xét nghiệm.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Định vị AirTag an toàn:</strong> Luôn sử dụng thiết bị <strong>AirTag định vị</strong> giúp gia đình yên tâm theo dõi vị trí của ông bà nơi đông người.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Báo cáo kết quả qua App:</strong> Mua thuốc theo đơn chỉ định, tổng hợp và cập nhật đầy đủ toàn bộ thông tin kết luận khám bệnh của bác sĩ lên App gia đình.
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Khám bệnh ở các bệnh viện công lập lớn tại Hà Nội đòi hỏi việc di chuyển nhiều giữa các khoa phòng. Trợ lý ANTCARE không chỉ giúp giảm bớt thủ tục hành chính mà còn giúp người cao tuổi giữ tinh thần thoải mái, không lo sợ hay căng thẳng.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Đưa đón đi khám bệnh an tâm với công nghệ định vị AirTag và báo cáo kết quả tức thì qua App gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">ANTCARE hỗ trợ đưa đi khám tại những bệnh viện nào ở Hà Nội?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">ANTCARE hỗ trợ đồng hành đi khám tại tất cả các bệnh viện tuyến trung ương và phòng khám lớn tại Hà Nội như: Bệnh viện Bạch Mai, Lão khoa Trung ương, Việt Đức, 108, Đại học Y Hà Nội, Vinmec, Hồng Ngọc...</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Trợ lý đồng hành có hỗ trợ lắng nghe và chụp ảnh đơn thuốc không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Trợ lý ANTCARE sẽ trực tiếp cùng cụ vào phòng khám (khi được bác sĩ cho phép), ghi chép lại lời dặn của bác sĩ, chụp ảnh đơn thuốc, kết quả xét nghiệm và gửi về App ANTCARE cho gia đình.</p>
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
    "headline": "Quy Trình Đưa Người Cao Tuổi Đi Khám Bệnh Tại Hà Nội An Toàn Tuyệt Đối",
    "description": "Dịch vụ đưa người già đi khám tại Hà Nội của ANTCARE: Đặt lịch trước, đo sinh tồn, sử dụng Airtag định vị và cập nhật kết quả đầy đủ trên App.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 109,
  slug: slug,
  oldSlugs: [
    slug,
    'dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon'
  ],
  title: 'Quy Trình Đưa Người Cao Tuổi Đi Khám Bệnh Tại Hà Nội An Toàn Tuyệt Đối',
  category: 'Chăm sóc sức khỏe',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Dịch vụ đưa người già đi khám tại Hà Nội của ANTCARE: Đặt lịch trước, đo sinh tồn, sử dụng Airtag định vị và cập nhật kết quả đầy đủ trên App.',
  excerpt: 'Dịch vụ đưa người già đi khám tại Hà Nội của ANTCARE: Đặt lịch trước, đo sinh tồn, sử dụng Airtag định vị và cập nhật kết quả đầy đủ trên App.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 109 to news.json as featured!');
