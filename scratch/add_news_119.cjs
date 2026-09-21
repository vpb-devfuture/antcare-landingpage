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
    <h1 itemprop="headline">Tái khám bệnh mạn tính đều đặn: vì sao ông bà cần một người đồng hành cố định?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Ông bà tái khám tiểu đường, huyết áp, tim mạch hằng tháng? ANTCARE đồng hành đi khám định kỳ, ghi chép đơn thuốc và nhắc lịch để không bỏ lỡ lần nào.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi.jpg" alt="Nhân viên ANTCARE cùng cụ ông xem lại sổ theo dõi huyết áp sau buổi tái khám" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Người cao tuổi mắc bệnh mạn tính như tăng huyết áp, tiểu đường, tim mạch thường phải tái khám định kỳ để bác sĩ điều chỉnh thuốc. Một người đồng hành cố định giúp ông bà không bỏ lỡ lịch khám, cung cấp đúng chỉ số theo dõi tại nhà cho bác sĩ và ghi nhận chính xác thay đổi trong đơn thuốc.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Tái khám định kỳ quan trọng thế nào?</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Những khó khăn thường gặp khi ông bà tự đi tái khám</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Gói đồng hành tái khám định kỳ của ANTCARE</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Kết hợp với theo dõi sức khỏe tại nhà</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Tái khám định kỳ quan trọng thế nào?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Với bệnh mạn tính, mỗi lần tái khám là dịp bác sĩ đánh giá bệnh có được kiểm soát tốt không, thuốc có cần tăng, giảm hay đổi không. Bỏ lịch tái khám hoặc tự mua lại đơn thuốc cũ có thể khiến bệnh diễn tiến âm thầm mà gia đình không biết.</p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Những khó khăn thường gặp khi ông bà tự đi tái khám</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Quên lịch hẹn hoặc ngại đi vì mệt, trời mưa nắng.</li>
    <li style="margin-bottom: 8px;">Không mang theo sổ đo huyết áp, đường huyết tại nhà, khiến bác sĩ thiếu dữ liệu.</li>
    <li style="margin-bottom: 8px;">Đơn thuốc thay đổi nhưng ông bà vẫn uống theo thói quen cũ.</li>
    <li style="margin-bottom: 8px;">Con cháu không biết kết quả xét nghiệm lần này tốt hay xấu hơn lần trước.</li>
  </ul>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Gói đồng hành tái khám định kỳ của ANTCARE</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 35%;">Hỗ trợ</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Lợi ích cho gia đình</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Nhắc và đặt lịch tái khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Không bỏ lỡ lần khám nào.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Người đồng hành cố định</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Ông bà quen, tin tưởng; người đồng hành nắm rõ bệnh sử.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Mang theo chỉ số đo tại nhà</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Bác sĩ có thêm dữ liệu để điều chỉnh thuốc.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">So sánh đơn thuốc cũ – mới</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Phát hiện thay đổi, dặn lại ông bà rõ ràng.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Báo cáo sau mỗi lần khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Con cháu theo dõi được diễn tiến qua từng tháng.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Kết hợp với theo dõi sức khỏe tại nhà</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Giữa các lần tái khám, dịch vụ <a href="https://antcare.vn/tro-ly-theo-doi-suc-khoe" style="color: #6633B4; font-weight: 600;">Trợ lý theo dõi sức khỏe</a> của ANTCARE giúp ông bà đo và ghi chép chỉ số, nhắc uống thuốc đúng giờ. Đến ngày tái khám, toàn bộ dữ liệu đã sẵn sàng cho bác sĩ tham khảo.</p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đăng ký gói đồng hành tái khám định kỳ cùng ANTCARE</h3>
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
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người cao tuổi bị bệnh mạn tính nên tái khám bao lâu một lần?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Tùy bệnh và mức độ kiểm soát; lịch tái khám do bác sĩ điều trị chỉ định. ANTCARE giúp gia đình ghi nhận và bám sát lịch đó.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Có thể đặt cùng một người đồng hành cho mọi lần tái khám không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Gia đình có thể đề nghị giữ cùng một Kiến Y tế; ANTCARE sẽ ưu tiên sắp xếp để ông bà quen mặt.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">ANTCARE có tự điều chỉnh thuốc cho ông bà không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Không. Mọi thay đổi thuốc do bác sĩ quyết định; ANTCARE chỉ ghi nhận, đối chiếu đơn và dặn lại gia đình.</p>
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
    "headline": "Tái khám bệnh mạn tính đều đặn: vì sao ông bà cần một người đồng hành cố định?",
    "description": "Ông bà tái khám tiểu đường, huyết áp, tim mạch hằng tháng? ANTCARE đồng hành đi khám định kỳ, ghi chép đơn thuốc và nhắc lịch để không bỏ lỡ lần nào.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi",
    "image": "https://antcare.vn/images/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi.jpg",
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
  id: 119,
  slug: "dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi",
  oldSlugs: [
    "blog/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi",
    "tin-tuc/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi"
  ],
  title: "Tái khám bệnh mạn tính đều đặn: vì sao ông bà cần một người đồng hành cố định?",
  category: "Đồng hành đi khám",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Ông bà tái khám tiểu đường, huyết áp, tim mạch hằng tháng? ANTCARE đồng hành đi khám định kỳ, ghi chép đơn thuốc và nhắc lịch để không bỏ lỡ lần nào.",
  excerpt: "Ông bà tái khám tiểu đường, huyết áp, tim mạch hằng tháng? ANTCARE đồng hành đi khám định kỳ, ghi chép đơn thuốc và nhắc lịch để không bỏ lỡ lần nào.",
  image: "/images/tin-tuc/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 119 (Tái khám bệnh mạn tính đều đặn) to news.json!');
