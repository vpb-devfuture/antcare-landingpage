const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// If current featured exists, update its featured flag and unshift to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  // Check if prevFeatured already in list to avoid duplicates
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Dịch vụ đồng hành đi khám cho người cao tuổi: ANTCARE lo trọn từ cửa nhà đến phòng khám</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      ANTCARE đưa đón, làm thủ tục, ngồi chờ cùng ông bà và báo lại kết quả khám cho con cháu. Dịch vụ đồng hành đi khám tận tâm – gọi 0969 032 360.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi.jpg" alt="Nhân viên ANTCARE dìu cụ bà làm thủ tục khám bệnh tại bệnh viện" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Dịch vụ đồng hành đi khám là khi một nhân viên được đào tạo (ANTCARE gọi là <em>Kiến Y tế</em>) đón ông bà tại nhà, đưa đến bệnh viện, làm thủ tục, ngồi chờ, vào phòng khám cùng, ghi chép lời dặn của bác sĩ, lấy thuốc và đưa ông bà về nhà an toàn — sau đó báo lại đầy đủ cho con cháu.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Vì sao người cao tuổi cần người đồng hành khi đi khám?</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">ANTCARE hỗ trợ những gì trong một buổi đồng hành đi khám?</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Ai nên sử dụng dịch vụ đồng hành đi khám?</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Điều gì làm nên khác biệt của ANTCARE – Kiến chăm tổ?</a></li>
      <li><a href="#s5" style="color: #6633B4; text-decoration: none; font-weight: 500;">Cách đặt lịch đồng hành đi khám</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao người cao tuổi cần người đồng hành khi đi khám?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Một buổi khám ở bệnh viện lớn thường kéo dài nửa ngày: xếp hàng lấy số, đóng tiền, chờ gọi tên, đi qua nhiều khu xét nghiệm, rồi quay lại nghe kết luận. Với người cao tuổi, mỗi bước đều có thể là một trở ngại:</p>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;"><strong>Sức khỏe và đi lại:</strong> đứng chờ lâu, lên xuống cầu thang, di chuyển giữa các tòa nhà dễ gây mệt, choáng, té ngã.</li>
    <li style="margin-bottom: 8px;"><strong>Thủ tục phức tạp:</strong> đặt lịch online, quét mã, thanh toán không tiền mặt, bảo hiểm y tế… thay đổi liên tục.</li>
    <li style="margin-bottom: 8px;"><strong>Nghe và nhớ lời dặn:</strong> bác sĩ nói nhanh, nhiều thuật ngữ; về nhà ông bà thường không nhớ hết cách dùng thuốc.</li>
    <li style="margin-bottom: 8px;"><strong>Tâm lý:</strong> đi một mình khiến ông bà lo lắng, ngại hỏi lại bác sĩ.</li>
  </ul>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Trong khi đó, con cháu thường bận công việc, ở xa hoặc không thể xin nghỉ mỗi lần bố mẹ tái khám.</p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">ANTCARE hỗ trợ những gì trong một buổi đồng hành đi khám?</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 25%;">Giai đoạn</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Kiến Y tế của ANTCARE làm gì</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Trước buổi khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Xác nhận lịch, nhắc ông bà nhịn ăn (nếu cần), chuẩn bị giấy tờ, sổ khám cũ, đơn thuốc đang dùng.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Đưa đón</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Đón tận nhà, đi cùng trên phương tiện gia đình chọn, hỗ trợ lên xuống xe.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tại bệnh viện</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Lấy số, làm thủ tục, thanh toán theo ủy quyền, dẫn đường đến từng phòng, ngồi chờ cùng.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Trong phòng khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Trình bày triệu chứng theo thông tin gia đình cung cấp, ghi chép chẩn đoán và lời dặn của bác sĩ.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Sau khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Lấy thuốc, đưa ông bà về, gửi báo cáo buổi khám (ảnh kết quả, đơn thuốc, lịch tái khám) cho con cháu.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Ai nên sử dụng dịch vụ đồng hành đi khám?</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Gia đình có con cái đi làm, ở tỉnh khác hoặc ở nước ngoài.</li>
    <li style="margin-bottom: 8px;">Ông bà sống một mình hoặc chỉ có hai vợ chồng già.</li>
    <li style="margin-bottom: 8px;">Người cao tuổi cần tái khám định kỳ các bệnh mạn tính.</li>
    <li style="margin-bottom: 8px;">Người vừa ra viện, đi lại còn yếu, cần người dìu đỡ.</li>
    <li style="margin-bottom: 8px;">Người có dấu hiệu suy giảm trí nhớ, dễ quên lời dặn hoặc lạc đường.</li>
  </ul>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Điều gì làm nên khác biệt của ANTCARE – Kiến chăm tổ?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Hình ảnh con kiến chăm chỉ, tận tụy với tổ là tinh thần ANTCARE mang đến cho mỗi gia đình:</p>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;"><strong>Người đồng hành cố định:</strong> gia đình có thể đề nghị cùng một Kiến Y tế cho các lần khám sau để ông bà quen mặt, yên tâm.</li>
    <li style="margin-bottom: 8px;"><strong>Minh bạch:</strong> con cháu nhận cập nhật trong suốt buổi khám và một bản tóm tắt sau cùng.</li>
    <li style="margin-bottom: 8px;"><strong>Đồng hành lâu dài:</strong> kết hợp với dịch vụ <a href="https://antcare.vn/tro-ly-theo-doi-suc-khoe" style="color: #6633B4; font-weight: 600;">Trợ lý theo dõi sức khỏe</a> để nhắc uống thuốc và theo dõi chỉ số tại nhà giữa các lần khám.</li>
  </ul>

  <h2 id="s5" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Cách đặt lịch đồng hành đi khám</h2>
  <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Gọi hotline <a href="tel:0969032360" style="color: #6633B4; font-weight: 600;">0969 032 360</a> hoặc nhắn tin fanpage ANTCARE.</li>
    <li style="margin-bottom: 8px;">Cung cấp thông tin: ngày giờ khám, bệnh viện, tình trạng sức khỏe, nhu cầu hỗ trợ đi lại.</li>
    <li style="margin-bottom: 8px;">ANTCARE xác nhận lịch và giới thiệu Kiến Y tế phụ trách.</li>
    <li style="margin-bottom: 8px;">Ngày khám: Kiến Y tế đến đón đúng giờ, gia đình theo dõi cập nhật qua điện thoại.</li>
  </ol>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đặt lịch đồng hành đi khám cho bố mẹ ngay hôm nay</h3>
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
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Dịch vụ đồng hành đi khám là gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Là dịch vụ có nhân viên đi cùng người cao tuổi suốt buổi khám bệnh: đưa đón, làm thủ tục, ngồi chờ, ghi chép lời dặn bác sĩ, lấy thuốc và báo lại cho gia đình.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nhân viên đồng hành có thay bác sĩ tư vấn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Không. Kiến Y tế hỗ trợ đi lại, thủ tục và ghi nhận thông tin; mọi chẩn đoán và chỉ định điều trị do bác sĩ tại cơ sở y tế đưa ra.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Con cái ở xa có theo dõi được buổi khám không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Có. ANTCARE cập nhật tình hình qua điện thoại hoặc tin nhắn trong buổi khám và gửi bản tóm tắt kết quả, đơn thuốc, lịch tái khám sau khi kết thúc.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Đặt lịch đồng hành đi khám như thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Gọi hotline 0969 032 360 hoặc nhắn fanpage ANTCARE, cho biết ngày giờ, bệnh viện và tình trạng của ông bà; ANTCARE sẽ xác nhận lịch và người phụ trách.</p>
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
    "headline": "Dịch vụ đồng hành đi khám cho người cao tuổi: ANTCARE lo trọn từ cửa nhà đến phòng khám",
    "description": "ANTCARE đưa đón, làm thủ tục, ngồi chờ cùng ông bà và báo lại kết quả khám cho con cháu. Dịch vụ đồng hành đi khám tận tâm – gọi 0969 032 360.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi",
    "image": "https://antcare.vn/images/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi.jpg",
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
  id: 115,
  slug: "dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi",
  oldSlugs: [
    "blog/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi",
    "tin-tuc/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi"
  ],
  title: "Dịch vụ đồng hành đi khám cho người cao tuổi: ANTCARE lo trọn từ cửa nhà đến phòng khám",
  category: "Đồng hành đi khám",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "ANTCARE đưa đón, làm thủ tục, ngồi chờ cùng ông bà và báo lại kết quả khám cho con cháu. Dịch vụ đồng hành đi khám tận tâm – gọi 0969 032 360.",
  excerpt: "ANTCARE đưa đón, làm thủ tục, ngồi chờ cùng ông bà và báo lại kết quả khám cho con cháu. Dịch vụ đồng hành đi khám tận tâm – gọi 0969 032 360.",
  image: "/images/tin-tuc/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 115 (Dịch vụ đồng hành đi khám cho người cao tuổi) to news.json!');
