const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_carer_time_object_1789534200235.jpg`;
const imageFileName = '8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec.jpg';
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

const slug = '8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">8 giờ ở bên một người lớn tuổi khác hoàn toàn với thuê giúp việc.</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Vì sao giúp việc nhà không thể thay thế Trợ lý chăm sóc người già? Phân tích góc độ tâm lý, an toàn vận động và giao tiếp tinh thần.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Người giúp việc tập trung vào <strong>công việc nhà (nội trợ, dọn dẹp)</strong>, trong khi Trợ lý chăm sóc người cao tuổi (Carer) tập trung 100% vào <strong>con người (sự an toàn, tâm lý, sự chú ý liên tục)</strong>. Thuê giúp việc để trông người già dễ dẫn đến nguy cơ bỏ sót các tình huống té ngã hoặc khiến cụ cảm thấy bị ngó lơ.
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

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Hai định hướng công việc hoàn toàn trái ngược</h2>
  <p>Nhiều gia đình chọn giải pháp "tiện cả đôi đường": Thuê một người giúp việc vừa lau nhà, nấu ăn vừa trông chừng ông bà. Tuy nhiên, 8 giờ làm việc của hai vị trí này mang lại hai giá trị hoàn toàn khác biệt:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Tiêu chí so sánh</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Người giúp việc nhà (Housekeeper)</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Trợ lý Carer ANTCARE</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Trọng tâm làm việc</td>
          <td style="padding: 0.8rem 1rem;">Căn nhà (Lau dọn, giặt đồ, đi chợ, nấu nướng).</td>
          <td style="padding: 0.8rem 1rem;">Con người — Bố mẹ bạn (An toàn, tâm lý, sức khỏe).</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Mức độ quan sát an toàn</td>
          <td style="padding: 0.8rem 1rem;">Phân tán vì bận việc bếp núc, phơi đồ ngoài ban công.</td>
          <td style="padding: 0.8rem 1rem;">Túc trực 100%: Mắt luôn quan sát, tay sẵn sàng nâng đỡ.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Kỹ năng giao tiếp &amp; Tâm lý</td>
          <td style="padding: 0.8rem 1rem;">Thiếu kỹ năng xử lý khi người già giận dỗi, sa sút trí tuệ.</td>
          <td style="padding: 0.8rem 1rem;">Lắng nghe chủ động, chơi game trí não, đọc báo, trò chuyện.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tôn trọng phẩm giá</td>
          <td style="padding: 0.8rem 1rem;">Dễ tỏ thái độ gắt gỏng hoặc cảm giác ban ơn khi phải dọn vệ sinh.</td>
          <td style="padding: 0.8rem 1rem;">Hỗ trợ vệ sinh, thay đồ tinh tế, tôn trọng tự chủ cá nhân.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">1. Người giúp việc (Housekeeper): Trọng tâm là "Căn nhà"</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Áp lực hoàn thành danh mục công việc: Lau dọn, giặt đồ, đi chợ, nấu nướng.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khi bận rộn trong bếp hay phơi đồ ngoài ban công, họ không thể quan sát bước đi của người già.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thiếu kỹ năng xử lý khi người già giận dỗi, sa sút trí tuệ hoặc gặp sự cố té ngã trong nhà vệ sinh.
    </li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">2. Trợ lý Carer ANTCARE: Trọng tâm là "Bố mẹ bạn"</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Túc trực 100% thời gian bên cạnh: Mắt luôn quan sát, tay luôn sẵn sàng đỡ khi cụ đứng dậy.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tương tác chủ động: Đọc báo, chơi game kích thích trí não, lắng nghe những câu chuyện xưa cũ.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tôn trọng phẩm giá: Hỗ trợ đi vệ sinh, thay đồ một cách tinh tế, không gắt gỏng hay tỏ thái độ ban ơn.
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Sự té ngã ở người cao tuổi thường diễn ra trong vài giây ngắn ngủi khi người nhà ngoảnh đi nơi khác. Việc tách biệt rõ vai trò giúp việc và vai trò trợ lý chăm sóc giúp đảm bảo an toàn tuyệt đối và mang lại sự tôn trọng cao nhất cho bố mẹ.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Cung cấp nhân sự Chăm sóc đồng hành chuyên trách 4h - 8h/ngày tại Hà Nội. Mang lại trải nghiệm an toàn và được tôn trọng cho bố mẹ bạn.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tôi có thể yêu cầu Carer nấu ăn cho cụ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Carer của ANTCARE sẵn sàng chuẩn bị hoặc hâm nóng bữa ăn theo đúng thực đơn dưỡng sinh của cụ, nhưng mục tiêu hàng đầu vẫn là đồng hành và hỗ trợ an toàn cho cụ trong bữa ăn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Chi phí thuê Carer 8h/ngày tại Hà Nội là bao nhiêu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Mức giá dịch vụ Carer 8h dao động linh hoạt từ 400.000đ - 1.000.000đ/ca tùy thuộc vào các yêu cầu nhân sự cụ thể (ngôn ngữ, kỹ năng đặc thù hoặc tình trạng sức khỏe của cụ).</p>
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
    "headline": "8 Giờ Ở Bên Người Cao Tuổi Khác Hoàn Toàn Thuê Giúp Việc Theo Giờ",
    "description": "Vì sao giúp việc nhà không thể thay thế Trợ lý chăm sóc người già? Phân tích góc độ tâm lý, an toàn vận động và giao tiếp tinh thần.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 105,
  slug: slug,
  oldSlugs: [
    slug,
    '8-gio-o-ben-nguoi-lon-tuoi-khac-hoan-toan-thue-giup-viec'
  ],
  title: '8 giờ ở bên một người lớn tuổi khác hoàn toàn với thuê giúp việc.',
  category: 'Chăm sóc thực tế',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Vì sao giúp việc nhà không thể thay thế Trợ lý chăm sóc người già? Phân tích góc độ tâm lý, an toàn vận động và giao tiếp tinh thần.',
  excerpt: 'Vì sao giúp việc nhà không thể thay thế Trợ lý chăm sóc người già? Phân tích góc độ tâm lý, an toàn vận động và giao tiếp tinh thần.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 105 to news.json as featured!');
