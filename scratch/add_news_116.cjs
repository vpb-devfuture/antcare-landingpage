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
    <h1 itemprop="headline">Con ở xa, bố mẹ đi khám một mình? Để ANTCARE thay bạn nắm tay bố mẹ</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Con cái đi làm xa, ở nước ngoài mà bố mẹ phải tự đi viện? ANTCARE đồng hành đi khám thay con, cập nhật từng bước để cả nhà yên tâm. Hotline 0969 032 360.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/con-o-xa-bo-me-di-kham-mot-minh.jpg" alt="Minh họa dịch vụ đồng hành đi khám cho người có con cái ở xa" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Nếu bạn không thể về đưa bố mẹ đi khám, hãy thuê dịch vụ đồng hành đi khám: một nhân viên ANTCARE sẽ đón bố mẹ tại nhà, đi cùng suốt buổi khám, gọi video hoặc nhắn tin để bạn trao đổi trực tiếp với bố mẹ và nhận bản tóm tắt kết quả ngay sau buổi khám.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Nỗi lo quen thuộc của những người con xa nhà</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">ANTCARE trở thành “cánh tay nối dài” của bạn như thế nào?</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Những tình huống người con ở xa hay đặt ANTCARE</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Làm sao để bố mẹ đồng ý có người lạ đi cùng?</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nỗi lo quen thuộc của những người con xa nhà</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">“Mẹ bảo không sao, tự đi được” — nhưng bạn biết mẹ phải dậy từ sớm, chờ xe, đứng xếp hàng, rồi về nhà vẫn không nhớ bác sĩ dặn uống thuốc trước hay sau ăn. Nhiều người con chia sẻ cảm giác áy náy mỗi lần nghe bố mẹ kể “hôm nay đi viện một mình”.</p>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Nỗi lo ấy có cơ sở: người cao tuổi đi khám một mình dễ gặp các rủi ro như mệt mỏi, té ngã, bỏ sót xét nghiệm, hiểu sai cách dùng thuốc, hoặc giấu con cháu những kết quả không tốt.</p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">ANTCARE trở thành “cánh tay nối dài” của bạn như thế nào?</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;"><strong>Bạn đặt lịch, ANTCARE lo phần còn lại:</strong> chỉ cần một cuộc gọi, không cần xin nghỉ phép hay mua vé về quê.</li>
    <li style="margin-bottom: 8px;"><strong>Kết nối trực tiếp:</strong> Kiến Y tế có thể gọi video để bạn nghe bác sĩ giải thích hoặc hỏi thêm (khi bác sĩ và cơ sở y tế cho phép).</li>
    <li style="margin-bottom: 8px;"><strong>Báo cáo rõ ràng:</strong> ảnh kết quả xét nghiệm, đơn thuốc, lời dặn và ngày tái khám được gửi cho bạn ngay trong ngày.</li>
    <li style="margin-bottom: 8px;"><strong>Bố mẹ không cô đơn:</strong> có người trò chuyện, dìu đỡ, nhắc uống nước, giúp bố mẹ bớt căng thẳng.</li>
  </ul>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Những tình huống người con ở xa hay đặt ANTCARE</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 35%;">Tình huống</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">ANTCARE hỗ trợ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Bố mẹ tái khám định kỳ hằng tháng</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Đặt lịch cố định, cùng một người đồng hành quen mặt.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Bố mẹ cần làm xét nghiệm, chụp chiếu</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dẫn đường qua từng khu, nhắc nhịn ăn, chờ và nhận kết quả.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Bố mẹ vừa ra viện, đi lại yếu</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Hỗ trợ lên xuống xe, xe lăn tại viện (nếu có), đi chậm theo sức.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Bạn đang ở nước ngoài, lệch múi giờ</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tóm tắt bằng tin nhắn để bạn đọc khi thuận tiện.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Làm sao để bố mẹ đồng ý có người lạ đi cùng?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Nhiều ông bà ngại “làm phiền” hoặc không quen người lạ. Một vài mẹo từ kinh nghiệm của ANTCARE:</p>
  <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Giới thiệu Kiến Y tế như “người bạn của con”, gọi điện giới thiệu trước buổi khám.</li>
    <li style="margin-bottom: 8px;">Nhấn mạnh lợi ích cho bố mẹ: không phải chờ đợi mệt, có người hỏi bác sĩ giúp.</li>
    <li style="margin-bottom: 8px;">Dùng thử một buổi, sau đó để bố mẹ tự quyết định có tiếp tục hay không.</li>
    <li style="margin-bottom: 8px;">Giữ cùng một người đồng hành qua các lần khám.</li>
  </ol>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Ở xa vẫn chăm được bố mẹ – đặt lịch với ANTCARE</h3>
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
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Tôi ở nước ngoài có đặt dịch vụ cho bố mẹ ở Việt Nam được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Được. Bạn liên hệ ANTCARE qua điện thoại hoặc fanpage, cung cấp thông tin buổi khám; ANTCARE sẽ cập nhật cho bạn qua tin nhắn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Tôi có nói chuyện được với bác sĩ trong buổi khám không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Kiến Y tế có thể gọi video để bạn nghe và hỏi thêm, tùy sự đồng ý của bác sĩ và quy định của cơ sở y tế.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bố mẹ tôi ngại người lạ, phải làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Hãy giới thiệu người đồng hành qua điện thoại trước buổi khám, bắt đầu bằng một buổi dùng thử và đề nghị giữ cùng một người cho các lần sau.</p>
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
    "headline": "Con ở xa, bố mẹ đi khám một mình? Để ANTCARE thay bạn nắm tay bố mẹ",
    "description": "Con cái đi làm xa, ở nước ngoài mà bố mẹ phải tự đi viện? ANTCARE đồng hành đi khám thay con, cập nhật từng bước để cả nhà yên tâm. Hotline 0969 032 360.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/con-o-xa-bo-me-di-kham-mot-minh",
    "image": "https://antcare.vn/images/con-o-xa-bo-me-di-kham-mot-minh.jpg",
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
  id: 116,
  slug: "con-o-xa-bo-me-di-kham-mot-minh",
  oldSlugs: [
    "blog/con-o-xa-bo-me-di-kham-mot-minh",
    "tin-tuc/con-o-xa-bo-me-di-kham-mot-minh"
  ],
  title: "Con ở xa, bố mẹ đi khám một mình? Để ANTCARE thay bạn nắm tay bố mẹ",
  category: "Đồng hành đi khám",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Con cái đi làm xa, ở nước ngoài mà bố mẹ phải tự đi viện? ANTCARE đồng hành đi khám thay con, cập nhật từng bước để cả nhà yên tâm. Hotline 0969 032 360.",
  excerpt: "Con cái đi làm xa, ở nước ngoài mà bố mẹ phải tự đi viện? ANTCARE đồng hành đi khám thay con, cập nhật từng bước để cả nhà yên tâm. Hotline 0969 032 360.",
  image: "/images/tin-tuc/con-o-xa-bo-me-di-kham-mot-minh.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 116 (Con ở xa, bố mẹ đi khám một mình?) to news.json!');
