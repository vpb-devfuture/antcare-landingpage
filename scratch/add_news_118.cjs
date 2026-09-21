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
    <h1 itemprop="headline">Đưa ông bà đi khám cần chuẩn bị gì? Checklist 12 mục đầy đủ nhất</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Checklist 12 món cần chuẩn bị khi đưa người cao tuổi đi khám: giấy tờ, thuốc, câu hỏi cho bác sĩ. Hoặc để ANTCARE chuẩn bị và đồng hành thay bạn.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/checklist-chuan-bi-dua-ong-ba-di-kham.jpg" alt="Túi đồ chuẩn bị đi khám cho người cao tuổi gồm giấy tờ, sổ khám và thuốc" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Khi đưa ông bà đi khám, hãy mang: CCCD, thẻ BHYT, sổ khám và kết quả cũ, danh sách thuốc đang dùng, giấy chuyển tuyến (nếu có), tiền hoặc thẻ thanh toán, nước uống và đồ ăn nhẹ, áo khoác, kính và máy trợ thính, danh sách câu hỏi cho bác sĩ, sổ ghi chép, điện thoại đã sạc đầy.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Nhóm 1 – Giấy tờ</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Nhóm 2 – Thông tin sức khỏe</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Nhóm 3 – Đồ dùng cá nhân</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Nhóm 4 – Câu hỏi nên hỏi bác sĩ</a></li>
      <li><a href="#s5" style="color: #6633B4; text-decoration: none; font-weight: 500;">Mẹo nhỏ giúp buổi khám nhẹ nhàng hơn</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nhóm 1 – Giấy tờ</h2>
  <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Căn cước công dân (hoặc VNeID đã kích hoạt).</li>
    <li style="margin-bottom: 8px;">Thẻ bảo hiểm y tế và giấy chuyển tuyến nếu khám theo tuyến.</li>
    <li style="margin-bottom: 8px;">Sổ khám bệnh, kết quả xét nghiệm, phim chụp của các lần trước.</li>
    <li style="margin-bottom: 8px;">Giấy hẹn tái khám.</li>
  </ol>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nhóm 2 – Thông tin sức khỏe</h2>
  <ol start="5" style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Danh sách thuốc đang dùng (tên, liều, giờ uống) — tốt nhất chụp ảnh vỏ thuốc.</li>
    <li style="margin-bottom: 8px;">Tiền sử dị ứng thuốc, các bệnh đang điều trị.</li>
    <li style="margin-bottom: 8px;">Ghi chú triệu chứng gần đây: bắt đầu từ khi nào, thời điểm nào nặng hơn, chỉ số huyết áp, đường huyết đo tại nhà.</li>
  </ol>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nhóm 3 – Đồ dùng cá nhân</h2>
  <ol start="8" style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Nước uống, đồ ăn nhẹ (dùng sau khi xét nghiệm nếu phải nhịn ăn).</li>
    <li style="margin-bottom: 8px;">Áo khoác mỏng, khẩu trang, giày dép chống trơn.</li>
    <li style="margin-bottom: 8px;">Kính, máy trợ thính, gậy hoặc khung tập đi.</li>
  </ol>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nhóm 4 – Câu hỏi nên hỏi bác sĩ</h2>
  <ol start="11" style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Danh sách câu hỏi viết sẵn, ví dụ: <em>Tôi mắc bệnh gì? Thuốc này uống bao lâu, có tác dụng phụ gì? Cần kiêng gì? Khi nào phải quay lại ngay?</em></li>
    <li style="margin-bottom: 8px;">Sổ tay và bút (hoặc ghi âm lời dặn nếu bác sĩ đồng ý).</li>
  </ol>

  <h2 id="s5" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Mẹo nhỏ giúp buổi khám nhẹ nhàng hơn</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.75;">
    <li style="margin-bottom: 8px;">Đặt lịch khám trước qua tổng đài hoặc ứng dụng của bệnh viện để giảm thời gian chờ.</li>
    <li style="margin-bottom: 8px;">Chọn khung giờ sáng sớm khi ông bà còn khỏe.</li>
    <li style="margin-bottom: 8px;">Để ông bà ngồi nghỉ, người đi cùng đi làm thủ tục.</li>
    <li style="margin-bottom: 8px;">Đọc lại lời dặn của bác sĩ cho ông bà nghe trước khi rời phòng khám.</li>
  </ul>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">Tất cả checklist trên đều nằm trong quy trình chuẩn của <a href="https://antcare.vn/dong-hanh-di-kham" style="color: #6633B4; font-weight: 600;">dịch vụ đồng hành đi khám ANTCARE</a> — Kiến Y tế sẽ kiểm tra từng mục trước khi đón ông bà.</p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Không có thời gian chuẩn bị? ANTCARE làm giúp bạn</h3>
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
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Đưa người già đi khám cần mang giấy tờ gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">CCCD hoặc VNeID, thẻ BHYT, giấy chuyển tuyến (nếu có), sổ khám và kết quả cũ, giấy hẹn tái khám.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Có nên mang theo thuốc đang uống khi đi khám không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Nên mang theo danh sách hoặc ảnh chụp vỏ thuốc để bác sĩ biết chính xác ông bà đang dùng gì, tránh kê trùng hoặc tương tác thuốc.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nên hỏi bác sĩ những gì khi đưa ông bà đi khám?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Chẩn đoán là gì, thuốc dùng bao lâu và có tác dụng phụ gì, cần kiêng gì, khi nào tái khám và dấu hiệu nào cần quay lại ngay.</p>
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
    "headline": "Đưa ông bà đi khám cần chuẩn bị gì? Checklist 12 mục đầy đủ nhất",
    "description": "Checklist 12 món cần chuẩn bị khi đưa người cao tuổi đi khám: giấy tờ, thuốc, câu hỏi cho bác sĩ. Hoặc để ANTCARE chuẩn bị và đồng hành thay bạn.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/checklist-chuan-bi-dua-ong-ba-di-kham",
    "image": "https://antcare.vn/images/checklist-chuan-bi-dua-ong-ba-di-kham.jpg",
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
  id: 118,
  slug: "checklist-chuan-bi-dua-ong-ba-di-kham",
  oldSlugs: [
    "blog/checklist-chuan-bi-dua-ong-ba-di-kham",
    "tin-tuc/checklist-chuan-bi-dua-ong-ba-di-kham"
  ],
  title: "Đưa ông bà đi khám cần chuẩn bị gì? Checklist 12 mục đầy đủ nhất",
  category: "Đồng hành đi khám",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Checklist 12 món cần chuẩn bị khi đưa người cao tuổi đi khám: giấy tờ, thuốc, câu hỏi cho bác sĩ. Hoặc để ANTCARE chuẩn bị và đồng hành thay bạn.",
  excerpt: "Checklist 12 món cần chuẩn bị khi đưa người cao tuổi đi khám: giấy tờ, thuốc, câu hỏi cho bác sĩ. Hoặc để ANTCARE chuẩn bị và đồng hành thay bạn.",
  image: "/images/tin-tuc/checklist-chuan-bi-dua-ong-ba-di-kham.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 118 (Checklist 12 mục chuẩn bị đưa ông bà đi khám) to news.json!');
