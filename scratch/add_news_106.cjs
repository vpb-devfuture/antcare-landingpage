const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_senior_fitness_app_object_1789535202647.jpg`;
const imageFileName = '8-gio-o-ben-nguoi-cao-tuoi-khac-hoan-toan-thue-giup-viec.jpg';
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

const slug = '8-gio-o-ben-nguoi-cao-tuoi-khac-hoan-toan-thue-giup-viec';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">8 Giờ Đồng Hành Cùng Người Cao Tuổi: Sự Khác Biệt Giữa Chăm Sóc Chuyên Môn ANTCARE Và Giúp Việc Thông Thường</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      8 giờ chăm sóc chuẩn ANTCARE: Rèn luyện Senior Fitness (Mỹ) &amp; Active Ageing (Singapore), đo sinh tồn, loại bỏ nguy cơ mất an toàn nhà cửa và cập nhật qua App.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Thuê giúp việc chỉ dọn dẹp đơn thuần. Với ANTCARE, 8 giờ đồng hành là quy trình chuẩn hóa: Áp dụng phương pháp <strong>Senior Fitness (Mỹ) &amp; Active Ageing (Singapore)</strong> để rèn luyện thể chất chủ động, rèn trí não, đo 5 chỉ số sinh tồn, nhắc uống thuốc đúng giờ và <strong>xử lý các nguy cơ nhà cửa không an toàn</strong>, tất cả được báo cáo thời gian thực qua <strong>App ANTCARE</strong>.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/khong-phai-luc-nao-nguoi-cao-tuoi-cung-can-dieu-duong" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Không phải lúc nào người cao tuổi cũng cần điều dưỡng. Có khi họ chỉ cần một người đi cùng.
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố ở Hà Nội nhưng con đang công tác 5 ngày — ai đưa bố đi tái khám?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/o-nuoc-ngoai-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Ở nước ngoài, mẹ gọi bảo mai đi khám nhưng không ai đưa đi?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bảng so sánh: Giúp việc nhà vs Trợ lý Chăm sóc Chuyên môn ANTCARE</h2>
  <p>Giải pháp thuê giúp việc thông thường chỉ giải quyết được việc nhà. Dưới đây là sự khác biệt về bản chất giữa hai mô hình:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Tiêu chí</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Giúp việc nhà thông thường</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Trợ lý Chuyên môn ANTCARE</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Phương pháp chăm sóc</td>
          <td style="padding: 0.8rem 1rem;">Dọn dẹp nhà cửa, nội trợ theo kinh nghiệm tự phát.</td>
          <td style="padding: 0.8rem 1rem;">Áp dụng chuẩn <strong>Senior Fitness (Mỹ) &amp; Active Ageing (Singapore)</strong> tập luyện vận động thể chất và rèn luyện trí não.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Theo dõi sinh tồn &amp; Thuốc</td>
          <td style="padding: 0.8rem 1rem;">Không có nghiệp vụ đo sức khỏe, dễ quên lịch uống thuốc.</td>
          <td style="padding: 0.8rem 1rem;">Đo định kỳ <strong>5 chỉ số sinh tồn cơ bản</strong> (Huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2) &amp; nhắc thuốc chuẩn giờ.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">An toàn không gian sống</td>
          <td style="padding: 0.8rem 1rem;">Không nhận biết được các nguy cơ té ngã hay trượt ngã.</td>
          <td style="padding: 0.8rem 1rem;">Kiểm tra rà soát an toàn nhà cửa, loại bỏ nguy cơ trơn trượt, chướng ngại vật ngay trong ca trực.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Báo cáo &amp; Minh bạch</td>
          <td style="padding: 0.8rem 1rem;">Gia đình không nắm được tình hình sức khỏe thực tế.</td>
          <td style="padding: 0.8rem 1rem;">Cập nhật tức thì tình trạng sức khỏe và báo cáo bất thường lên <strong>App ANTCARE</strong> để con cái theo dõi từ xa.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">1. Rèn Luyện Thể Chất &amp; Trí Não Theo Chuẩn Quốc Tế</h2>
  <p>ANTCARE triển khai chương trình khoa học kế thừa từ Senior Fitness (Mỹ) và Active Ageing (Singapore):</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Bài tập vận động thể chất &amp; Rèn luyện trí nội:</strong> Hướng dẫn cụ tập luyện chủ động, tăng khả năng giữ thăng bằng, dẻo dai cơ khớp và duy trì sự minh mẫn.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Kiểm tra sinh tồn &amp; Nhắc thuốc:</strong> Định kỳ kiểm tra chỉ số sinh tồn (huyết áp, nhịp tim, SpO2, đường huyết...) và nhắc nhở uống thuốc đúng liều lượng, đúng giờ.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Trải nghiệm mới mỗi tuần:</strong> Trò chuyện chia sẻ, làm đồ thủ công dưỡng sinh và mang lại các hoạt động trải nghiệm thú vị giúp cụ luôn có năng lượng sống vui vẻ.
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">2. Hỗ Trợ An Toàn Nhà Cửa &amp; Báo Cáo Qua App</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Rà soát an toàn nhà cửa, phát hiện và xử lý ngay các nguy cơ gây mất an toàn (sàn trơn, dây điện vướng, thiếu ánh sáng) trong khả năng.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Dọn dẹp gọn gàng hoặc hỗ trợ nội trợ nhẹ nhàng theo đúng yêu cầu dinh dưỡng của gia đình.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Mọi thông số sức khỏe, nhật ký rèn luyện và cảnh báo phát sinh bất thường được cập nhật đầy đủ trực tiếp lên <strong>App ANTCARE</strong> để người thân ở xa theo dõi minh bạch.
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Mô hình chăm sóc tích hợp chuẩn quốc tế của ANTCARE theo đuổi nguyên tắc "làm cùng, không làm thay". Việc khuyến khích người cao tuổi chủ động rèn luyện vận động thể chất và trí não mỗi ngày là chìa khóa duy trì sự tự lập bền vững cho bố mẹ.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Dịch vụ theo dõi sức khỏe &amp; an toàn nhà cửa cho người cao tuổi chuẩn quốc tế tại Hà Nội. Đồng hành tận tâm, cập nhật thời gian thực qua App.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Phương pháp Senior Fitness (Mỹ) &amp; Active Ageing (Singapore) áp dụng thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là các phương pháp rèn luyện khoa học chú trọng vào việc nâng cao thể chất chủ động (thăng bằng, dẻo dai khớp) và kích thích nhận thức trí não cho người cao tuổi, giúp chậm quá trình sa sút trí tuệ và giảm nguy cơ té ngã.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người thân ở xa theo dõi tình hình qua App ANTCARE như thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Sau mỗi ca làm việc 4h - 8h, nhân sự Carer sẽ ghi nhận các chỉ số sinh tồn đã đo, bài tập đã rèn luyện và hình ảnh/báo cáo an toàn nhà cửa lên App ANTCARE. Gia đình có thể mở app xem báo cáo chi tiết mọi lúc mọi nơi.</p>
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
    "headline": "8 Giờ Đồng Hành Cùng Người Cao Tuổi: Sự Khác Biệt Giữa Chăm Sóc Chuyên Môn ANTCARE Và Giúp Việc Thông Thường",
    "description": "8 giờ chăm sóc chuẩn ANTCARE: Rèn luyện Senior Fitness (Mỹ) & Active Ageing (Singapore), đo sinh tồn, loại bỏ nguy cơ mất an toàn nhà cửa và cập nhật qua App.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 106,
  slug: slug,
  oldSlugs: [
    slug,
    '8-gio-o-ben-nguoi-cao-tuoi-khac-hoan-toan-thue-giup-viec',
    '8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec'
  ],
  title: '8 Giờ Đồng Hành Cùng Người Cao Tuổi: Sự Khác Biệt Giữa Chăm Sóc Chuyên Môn ANTCARE Và Giúp Việc Thông Thường',
  category: 'Chăm sóc thực tế',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: '8 giờ chăm sóc chuẩn ANTCARE: Rèn luyện Senior Fitness (Mỹ) & Active Ageing (Singapore), đo sinh tồn, loại bỏ nguy cơ mất an toàn nhà cửa và cập nhật qua App.',
  excerpt: '8 giờ chăm sóc chuẩn ANTCARE: Rèn luyện Senior Fitness (Mỹ) & Active Ageing (Singapore), đo sinh tồn, loại bỏ nguy cơ mất an toàn nhà cửa và cập nhật qua App.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 106 to news.json as featured!');
