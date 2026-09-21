const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Quy trình đồng hành đi khám 5 bước của ANTCARE: minh bạch từ lúc đặt lịch đến khi về nhà</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Tìm hiểu quy trình đồng hành đi khám 5 bước của ANTCARE: tiếp nhận, chuẩn bị, đưa đón, hỗ trợ tại viện và báo cáo cho gia đình. Minh bạch từng bước.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/quy-trinh-dong-hanh-di-kham-antcare.jpg" alt="Sơ đồ 5 bước dịch vụ đồng hành đi khám của ANTCARE" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Quy trình đồng hành đi khám của ANTCARE gồm 5 bước: (1) tiếp nhận thông tin và đặt lịch, (2) chuẩn bị hồ sơ trước ngày khám, (3) đón ông bà tại nhà, (4) hỗ trợ toàn bộ thủ tục và ghi chép lời bác sĩ tại cơ sở y tế, (5) đưa về nhà và gửi báo cáo buổi khám cho gia đình.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bước 1 – Tiếp nhận thông tin và đặt lịch</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bước 2 – Chuẩn bị trước ngày khám</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bước 3 – Đón ông bà tại nhà</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bước 4 – Hỗ trợ tại cơ sở y tế</a></li>
      <li><a href="#s5" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bước 5 – Về nhà và báo cáo cho gia đình</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bước 1 – Tiếp nhận thông tin và đặt lịch</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Gia đình liên hệ hotline <a href="tel:0969032360" style="color: #6633B4; font-weight: 600;">0969 032 360</a>. ANTCARE ghi nhận: cơ sở y tế, chuyên khoa, giờ khám, bệnh sử chính, thuốc đang dùng, khả năng đi lại và người liên hệ chính trong gia đình. Gia đình cũng thống nhất phạm vi ủy quyền (ví dụ thanh toán viện phí, nhận kết quả).</p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bước 2 – Chuẩn bị trước ngày khám</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Nhắc lịch cho ông bà và gia đình trước một ngày.</li>
    <li style="margin-bottom: 8px;">Hướng dẫn nhịn ăn, ngưng thuốc (chỉ khi bác sĩ đã dặn trước).</li>
    <li style="margin-bottom: 8px;">Kiểm tra danh sách giấy tờ: CCCD, thẻ BHYT, sổ khám, kết quả cũ, đơn thuốc.</li>
  </ul>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bước 3 – Đón ông bà tại nhà</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Kiến Y tế đến sớm, hỏi thăm sức khỏe buổi sáng, kiểm tra lại giấy tờ, hỗ trợ ông bà lên xe. Nếu ông bà có dấu hiệu bất thường (chóng mặt, khó thở…), Kiến Y tế báo ngay cho gia đình để quyết định phương án phù hợp.</p>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bước 4 – Hỗ trợ tại cơ sở y tế</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 30%;">Việc cần làm</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Kiến Y tế hỗ trợ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Thủ tục</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Lấy số, đăng ký, thanh toán theo ủy quyền.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Di chuyển</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dẫn đường, dìu đỡ, sắp xếp chỗ ngồi chờ.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Vào phòng cùng (nếu được phép), trình bày thông tin, ghi chép chẩn đoán và lời dặn.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Cận lâm sàng</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Đưa đi xét nghiệm, siêu âm, chụp chiếu; nhận kết quả.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Thuốc</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Lấy thuốc, đối chiếu với đơn, ghi rõ giờ uống.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s5" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bước 5 – Về nhà và báo cáo cho gia đình</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Sau khi đưa ông bà về và dặn lại cách dùng thuốc, ANTCARE gửi cho gia đình bản tóm tắt gồm: chẩn đoán, kết quả chính, đơn thuốc, lời dặn của bác sĩ và ngày tái khám. Gia đình có thể đặt luôn lịch tái khám hoặc đăng ký thêm dịch vụ <a href="https://antcare.vn/tro-ly-theo-doi-suc-khoe" style="color: #6633B4; font-weight: 600;">Trợ lý theo dõi sức khỏe</a>.</p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Trải nghiệm quy trình đồng hành đi khám chuyên nghiệp</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Liên hệ ANTCARE
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Đồng hành đi khám của ANTCARE gồm những bước nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Gồm 5 bước: tiếp nhận và đặt lịch, chuẩn bị trước ngày khám, đón tại nhà, hỗ trợ tại cơ sở y tế và báo cáo cho gia đình sau buổi khám.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Gia đình cần chuẩn bị gì khi đặt lịch?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Thông tin cơ sở y tế và giờ khám, bệnh sử chính, danh sách thuốc đang dùng, giấy tờ tùy thân, thẻ BHYT và người liên hệ chính.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nếu ông bà mệt đột ngột trong buổi khám thì sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Kiến Y tế sẽ báo ngay nhân viên y tế tại chỗ và liên hệ gia đình. Trường hợp khẩn cấp ngoài cơ sở y tế, gọi 115.</p>
      </div>
    </details>
  </section>

  <p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
    <strong>Lưu ý:</strong> Nhân viên đồng hành của ANTCARE hỗ trợ đi lại, thủ tục và ghi nhận thông tin; không thay thế bác sĩ trong việc chẩn đoán hay chỉ định điều trị. Trường hợp cấp cứu, hãy gọi 115.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Quy trình đồng hành đi khám 5 bước của ANTCARE: minh bạch từ lúc đặt lịch đến khi về nhà",
    "description": "Tìm hiểu quy trình đồng hành đi khám 5 bước của ANTCARE: tiếp nhận, chuẩn bị, đưa đón, hỗ trợ tại viện và báo cáo cho gia đình. Minh bạch từng bước.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/quy-trinh-dong-hanh-di-kham-antcare",
    "image": "https://antcare.vn/images/quy-trinh-dong-hanh-di-kham-antcare.jpg",
    "author": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn",
      "telephone": "+84969032360"
    }
  }
  </script>
</article>`;

newsData.featured = {
  id: 117,
  slug: "quy-trinh-dong-hanh-di-kham-antcare",
  oldSlugs: [
    "blog/quy-trinh-dong-hanh-di-kham-antcare",
    "tin-tuc/quy-trinh-dong-hanh-di-kham-antcare"
  ],
  title: "Quy trình đồng hành đi khám 5 bước của ANTCARE: minh bạch từ lúc đặt lịch đến khi về nhà",
  category: "Đồng hành đi khám",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Tìm hiểu quy trình đồng hành đi khám 5 bước của ANTCARE: tiếp nhận, chuẩn bị, đưa đón, hỗ trợ tại viện và báo cáo cho gia đình. Minh bạch từng bước.",
  excerpt: "Tìm hiểu quy trình đồng hành đi khám 5 bước của ANTCARE: tiếp nhận, chuẩn bị, đưa đón, hỗ trợ tại viện và báo cáo cho gia đình. Minh bạch từng bước.",
  image: "/images/tin-tuc/quy-trinh-dong-hanh-di-kham-antcare.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 117 (Quy trình đồng hành đi khám 5 bước) to news.json!');
