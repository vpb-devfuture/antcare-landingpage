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
    <h1 itemprop="headline">Bảng hoạt động gỗ cao su ANTCARE: giữ đôi tay bận rộn, giúp tâm trí bình yên</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Bảng hoạt động (busy board) gỗ cao su ANTCARE giúp người sa sút trí tuệ có việc cho đôi tay, giảm bồn chồn, tăng tập trung. Chất liệu tự nhiên, an toàn.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue.jpg" alt="Bảng hoạt động busy board gỗ cao su tự nhiên ANTCARE cho người sa sút trí tuệ" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Bảng hoạt động (busy board) là tấm gỗ gắn các chi tiết quen thuộc như chốt cài, núm xoay, dây luồn, then trượt để người dùng thao tác lặp lại. Với người sa sút trí tuệ giai đoạn giữa và muộn, bảng giúp đôi tay có việc để làm, giảm bồn chồn và không có khái niệm đúng – sai. Bảng ANTCARE làm từ gỗ cao su, bo tròn cạnh an toàn.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Khi nào gia đình nên cân nhắc bảng hoạt động?</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Trên bảng ANTCARE có gì?</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Lợi ích chính</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Cách giới thiệu bảng cho người thân</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Khi nào gia đình nên cân nhắc bảng hoạt động?</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;">Người thân thường xuyên vò vạt áo, mân mê đồ vật xung quanh hoặc đứng lên ngồi xuống liên tục trong vô thức.</li>
    <li style="margin-bottom: 8px;">Không còn đủ kiên nhẫn để theo đuổi các trò chơi có quy tắc phức tạp hay hướng dẫn nhiều bước.</li>
    <li style="margin-bottom: 8px;">Dễ xuất hiện cảm giác bồn chồn, hoang mang, đặc biệt vào khoảng thời gian chiều tà (hội chứng hoàng hôn).</li>
    <li style="margin-bottom: 8px;">Ngồi nhiều trên ghế bành hoặc nằm trên giường dưỡng bệnh, thiếu các hoạt động vận động tinh cho đôi bàn tay.</li>
  </ul>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Trên bảng ANTCARE có gì?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Các chi tiết trên bảng mô phỏng lại những đồ vật thân thuộc trong gia đình làng quê Việt, giúp khơi gợi lại những phản xạ và ký ức thao tác quen thuộc:
  </p>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Then cài cửa gỗ, chốt trượt:</strong> thao tác gạt qua gạt lại mô phỏng khóa cài then cửa gỗ xưa.</li>
    <li style="margin-bottom: 8px;"><strong>Hệ thống bánh răng gỗ và núm xoay:</strong> các bánh răng ăn khớp chuyển động mượt mà khi xoay tròn.</li>
    <li style="margin-bottom: 8px;"><strong>Rãnh zíc-zắc uốn lượn và hạt trượt:</strong> giúp luyện phản xạ di chuyển ngón tay nhẹ nhàng.</li>
    <li style="margin-bottom: 8px;"><strong>Ô đan dây nan chiếu mộc:</strong> bề mặt xúc giác vân nổi tự nhiên để người cao tuổi vuốt ve, cảm nhận sự gần gũi.</li>
  </ul>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Toàn bộ các chi tiết đều được cố định cực kỳ chắc chắn vào thân bảng gỗ cao su dày dặn, các góc cạnh được bo tròn nhẵn bóng, không có cạnh sắc và không có chi tiết rời nhỏ để ngăn ngừa hoàn toàn nguy cơ nuốt nhầm. <em>(Cấu hình chi tiết có thể linh hoạt theo từng phiên bản).</em>
  </p>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Lợi ích chính</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 30%;">Lợi ích</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 70%;">Giải thích chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Giảm bồn chồn lo âu</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Các cử động tay lặp đi lặp lại tạo ra một điểm tựa tập trung, giúp xả bớt sự căng thẳng và đưa tâm trí về trạng thái dịu êm.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Duy trì vận động tinh</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Các động tác xoay, kéo, gạt then và ấn giữ cho các khớp ngón tay linh hoạt, phòng ngừa hiện tượng co rút gân tay.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Gợi nhắc ký ức xưa</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cảm giác chạm vào gỗ mộc, then cửa, nan tre giúp đánh thức những ký ức vận động tiềm thức đã gắn bó cả cuộc đời.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Hoàn toàn không áp lực</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Không có thắng – thua, không có khái niệm đúng hay sai, người cao tuổi hoàn toàn tự do khám phá theo nhịp độ riêng.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Cách giới thiệu bảng cho người thân</h2>
  <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Vị trí thuận tiện:</strong> Đặt bảng lên đùi người thân hoặc trên chiếc bàn nhỏ vừa tầm với tay, ở nơi có đủ ánh sáng tự nhiên dịu nhẹ.</li>
    <li style="margin-bottom: 8px;"><strong>Làm mẫu nhẹ nhàng:</strong> Bạn có thể ngồi bên cạnh, tự tay gạt thử chiếc then cài một lần rồi mỉm cười mời người thân thử sức.</li>
    <li style="margin-bottom: 8px;"><strong>Đồng hành không phán xét:</strong> Ngồi cạnh, trò chuyện thân tình; nếu hôm nay người thân chưa muốn chơi thì không ép buộc.</li>
    <li style="margin-bottom: 8px;"><strong>Để trong tầm mắt:</strong> Đặt bảng ở góc quen thuộc trong phòng khách hay bàn đầu giường để người thân có thể tự với lấy bất cứ khi nào thấy bồn chồn.</li>
  </ol>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Gia đình có thể tham khảo thêm bài viết hướng dẫn <a href="/news/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan" style="color: #6633B4; font-weight: 600; text-decoration: underline;">chọn đồ chơi cho người sa sút trí tuệ theo từng giai đoạn</a> và <a href="/news/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare" style="color: #6633B4; font-weight: 600; text-decoration: underline;">bộ đồ chơi Montessori từ vật liệu tự nhiên</a>.
  </p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đặt bảng hoạt động gỗ ANTCARE cho người thân</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được tư vấn thiết kế và đặt bảng giao tận nhà.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/san-pham" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Xem các sản phẩm khác
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bảng hoạt động (busy board) cho người già là gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Là tấm bảng gắn các chi tiết như chốt, núm xoay, dây luồn để người cao tuổi thao tác lặp lại, giúp đôi tay có việc và tinh thần thư thái.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bảng hoạt động phù hợp giai đoạn nào của sa sút trí tuệ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Phù hợp nhất giai đoạn giữa đến muộn, khi người bệnh khó theo trò chơi có luật nhưng vẫn muốn cầm nắm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bảng gỗ ANTCARE có an toàn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Bảng làm từ gỗ cao su, bo tròn cạnh, chi tiết gắn chắc. Vẫn cần người thân giám sát và kiểm tra bảng định kỳ.</p>
      </div>
    </details>
  </section>

  <p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
    <strong>Lưu ý:</strong> Đồ chơi ANTCARE là hoạt động hỗ trợ kích thích nhận thức, vận động tinh và cảm xúc; sản phẩm không phải thuốc và không thay thế chẩn đoán, điều trị của bác sĩ. Luôn có người thân giám sát khi người cao tuổi sử dụng.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bảng hoạt động gỗ cao su ANTCARE: giữ đôi tay bận rộn, giúp tâm trí bình yên",
    "description": "Bảng hoạt động (busy board) gỗ cao su ANTCARE giúp người sa sút trí tuệ có việc cho đôi tay, giảm bồn chồn, tăng tập trung. Chất liệu tự nhiên, an toàn.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue",
    "image": "https://antcare.vn/images/tin-tuc/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue.jpg",
    "author": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn",
      "telephone": "+84969032360",
      "logo": "https://antcare.vn/logo.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn",
      "telephone": "+84969032360",
      "logo": "https://antcare.vn/logo.png"
    },
    "keywords": "bảng hoạt động cho người già, busy board người lớn tuổi, đồ chơi cho người sa sút trí tuệ, giảm bồn chồn người mất trí nhớ, ANTCARE"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bảng hoạt động (busy board) cho người già là gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Là tấm bảng gắn các chi tiết như chốt, núm xoay, dây luồn để người cao tuổi thao tác lặp lại, giúp đôi tay có việc và tinh thần thư thái."
        }
      },
      {
        "@type": "Question",
        "name": "Bảng hoạt động phù hợp giai đoạn nào của sa sút trí tuệ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phù hợp nhất giai đoạn giữa đến muộn, khi người bệnh khó theo trò chơi có luật nhưng vẫn muốn cầm nắm."
        }
      },
      {
        "@type": "Question",
        "name": "Bảng gỗ ANTCARE có an toàn không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bảng làm từ gỗ cao su, bo tròn cạnh, chi tiết gắn chắc. Vẫn cần người thân giám sát và kiểm tra bảng định kỳ."
        }
      }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang chủ",
        "item": "https://antcare.vn"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Đồ chơi trí nhớ ANTCARE",
        "item": "https://antcare.vn/san-pham"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bảng hoạt động gỗ cao su ANTCARE: giữ đôi tay bận rộn, giúp tâm trí bình yên",
        "item": "https://antcare.vn/news/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue"
      }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bảng hoạt động gỗ cao su ANTCARE",
    "brand": {
      "@type": "Brand",
      "name": "ANTCARE"
    },
    "description": "Bảng hoạt động (busy board) gỗ cao su ANTCARE giúp người sa sút trí tuệ có việc cho đôi tay, giảm bồn chồn, tăng tập trung. Chất liệu tự nhiên, an toàn.",
    "image": "https://antcare.vn/images/tin-tuc/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue.jpg",
    "url": "https://antcare.vn/news/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue",
    "material": "Dây bèo, dây nan, gỗ cao su"
  }
  </script>
</article>`;

newsData.featured = {
  id: 123,
  slug: "bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue",
  oldSlugs: [
    "blog/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue",
    "tin-tuc/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue"
  ],
  title: "Bảng hoạt động gỗ cao su ANTCARE: giữ đôi tay bận rộn, giúp tâm trí bình yên",
  category: "Đồ chơi trí nhớ",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Bảng hoạt động (busy board) gỗ cao su ANTCARE giúp người sa sút trí tuệ có việc cho đôi tay, giảm bồn chồn, tăng tập trung. Chất liệu tự nhiên, an toàn.",
  excerpt: "Bảng hoạt động (busy board) gỗ cao su ANTCARE giúp người sa sút trí tuệ có việc cho đôi tay, giảm bồn chồn, tăng tập trung. Chất liệu tự nhiên, an toàn.",
  image: "/images/tin-tuc/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 123 (Bảng hoạt động gỗ cao su ANTCARE) to news.json!');
