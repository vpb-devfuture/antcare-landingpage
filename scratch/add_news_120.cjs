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
    <h1 itemprop="headline">Đồ chơi tăng cường trí nhớ cho người cao tuổi: bộ Montessori ANTCARE từ vật liệu tự nhiên</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Bộ đồ chơi Montessori ANTCARE từ dây bèo, dây nan, gỗ cao su giúp ông bà rèn trí nhớ, khéo tay và tự làm ra món quà tặng con cháu. Hotline 0969 032 360.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare.jpg" alt="Bộ đồ chơi Montessori rèn trí nhớ ANTCARE từ dây bèo, dây nan và gỗ cao su tự nhiên" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Đồ chơi tăng cường trí nhớ cho người cao tuổi là các hoạt động cầm nắm, sắp xếp, đan kết có mục tiêu rõ ràng, giúp kích thích sự tập trung, trí nhớ ngắn hạn và vận động tinh của đôi tay. Bộ Montessori ANTCARE làm từ dây bèo, dây nan và gỗ cao su; điểm khác biệt là ông bà tự hoàn thiện thành một món đồ thật để tặng con cháu.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Vì sao người cao tuổi cần “chơi”?</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Đồ chơi ANTCARE khác gì bảng tập thông thường?</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Lợi ích khi ông bà dùng bộ đồ chơi ANTCARE</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Cách chọn bộ phù hợp</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao người cao tuổi cần “chơi”?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Khi về hưu, nhịp sống chậm lại, nhiều ông bà ít có việc để tay chân và đầu óc cùng hoạt động. Các hoạt động có ý nghĩa — làm một việc có mục đích và thấy được kết quả — giúp duy trì sự tập trung, tạo niềm vui và cảm giác mình vẫn còn có ích. Với người có dấu hiệu sa sút trí tuệ, hoạt động phù hợp còn giúp giảm bồn chồn, lo âu và tăng kết nối với người thân.
  </p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Đồ chơi ANTCARE khác gì bảng tập thông thường?</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 22%;">Tiêu chí</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 38%;">Bảng tập thông thường</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 40%;">Bộ Montessori ANTCARE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Kết quả</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tháo ra, làm lại, không có sản phẩm</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Ông bà làm ra món đồ thật: giỏ, hộp, khay, đế lót…</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Vật liệu</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Thường là nhựa</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Dây bèo, dây nan, gỗ cao su – tự nhiên, thân thuộc</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Ý nghĩa cảm xúc</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Luyện tập thuần túy</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Tự tay làm quà tặng con cháu – thấy mình có ích</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Ký ức</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Ít gợi nhớ</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Chất liệu đan lát quen thuộc với làng quê Việt, dễ gợi chuyện xưa</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Lợi ích khi ông bà dùng bộ đồ chơi ANTCARE</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Rèn trí nhớ và trình tự:</strong> ghi nhớ các bước đan, đếm hàng, xếp theo màu.</li>
    <li style="margin-bottom: 8px;"><strong>Khéo léo đôi tay:</strong> luồn, đan, xoắn dây giúp vận động các ngón tay và các khớp linh hoạt hơn.</li>
    <li style="margin-bottom: 8px;"><strong>Tập trung và thư giãn:</strong> động tác lặp lại nhịp nhàng giúp tâm trạng bình ổn, giảm căng thẳng.</li>
    <li style="margin-bottom: 8px;"><strong>Tự tin và niềm vui:</strong> có thành phẩm thật để khoe với con cháu, thấy mình vẫn khéo léo và hữu ích.</li>
    <li style="margin-bottom: 8px;"><strong>Gắn kết gia đình:</strong> con cháu ngồi làm cùng, nghe ông bà kể chuyện đan lát, cuộc sống ngày xưa.</li>
  </ul>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Cách chọn bộ phù hợp</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Hãy chọn theo sức khỏe đôi tay, thị lực và mức độ ghi nhớ hiện tại của ông bà. Người còn minh mẫn có thể bắt đầu với bộ đan nhiều bước; người đã có dấu hiệu sa sút trí tuệ nên dùng bộ ít chi tiết, màu tương phản, thao tác đơn giản. Xem hướng dẫn chi tiết tại bài viết <a href="/news/chon-mua-bang-montessori-cho-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: underline;">chọn mua bảng rèn luyện Montessori cho người cao tuổi</a> và các dụng cụ tại mục <a href="/san-pham" style="color: #6633B4; font-weight: 600; text-decoration: underline;">Sản phẩm rèn luyện thể chất & trí não</a>.
  </p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đặt bộ đồ chơi rèn trí nhớ ANTCARE cho ông bà</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được tư vấn bộ phù hợp nhất.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/san-pham" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Xem các sản phẩm rèn luyện
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Đồ chơi tăng cường trí nhớ có chữa được sa sút trí tuệ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Không. Đồ chơi là hoạt động hỗ trợ kích thích nhận thức, vận động và cảm xúc; không thay thế chẩn đoán và điều trị của bác sĩ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bộ đồ chơi ANTCARE làm từ chất liệu gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Từ vật liệu tự nhiên gồm dây bèo, dây nan và gỗ cao su, thân thuộc với người Việt và dễ cầm nắm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Ông bà làm xong có được gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Một món đồ hoàn chỉnh như giỏ, hộp hay khay nhỏ để dùng trong nhà hoặc tặng con cháu — đây là điểm khác biệt chính của ANTCARE.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Mua đồ chơi rèn trí nhớ ANTCARE ở đâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Liên hệ hotline 0969 032 360, fanpage ANTCARE hoặc website antcare.vn.</p>
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
    "headline": "Đồ chơi tăng cường trí nhớ cho người cao tuổi: bộ Montessori ANTCARE từ vật liệu tự nhiên",
    "description": "Bộ đồ chơi Montessori ANTCARE từ dây bèo, dây nan, gỗ cao su giúp ông bà rèn trí nhớ, khéo tay và tự làm ra món quà tặng con cháu. Hotline 0969 032 360.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare",
    "image": "https://antcare.vn/images/tin-tuc/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare.jpg",
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
    "keywords": "đồ chơi tăng cường trí nhớ cho người già, đồ chơi cho người cao tuổi, đồ chơi Montessori người lớn tuổi, đồ chơi cho người sa sút trí tuệ, ANTCARE"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Đồ chơi tăng cường trí nhớ có chữa được sa sút trí tuệ không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Không. Đồ chơi là hoạt động hỗ trợ kích thích nhận thức, vận động và cảm xúc; không thay thế chẩn đoán và điều trị của bác sĩ."
        }
      },
      {
        "@type": "Question",
        "name": "Bộ đồ chơi ANTCARE làm từ chất liệu gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Từ vật liệu tự nhiên gồm dây bèo, dây nan và gỗ cao su, thân thuộc với người Việt và dễ cầm nắm."
        }
      },
      {
        "@type": "Question",
        "name": "Ông bà làm xong có được gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Một món đồ hoàn chỉnh như giỏ, hộp hay khay nhỏ để dùng trong nhà hoặc tặng con cháu — đây là điểm khác biệt chính của ANTCARE."
        }
      },
      {
        "@type": "Question",
        "name": "Mua đồ chơi rèn trí nhớ ANTCARE ở đâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Liên hệ hotline 0969 032 360, fanpage ANTCARE hoặc website antcare.vn."
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
        "name": "Đồ chơi tăng cường trí nhớ cho người cao tuổi: bộ Montessori ANTCARE từ vật liệu tự nhiên",
        "item": "https://antcare.vn/news/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare"
      }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bộ đồ chơi Montessori rèn trí nhớ ANTCARE",
    "brand": {
      "@type": "Brand",
      "name": "ANTCARE"
    },
    "description": "Bộ đồ chơi Montessori ANTCARE từ dây bèo, dây nan, gỗ cao su giúp ông bà rèn trí nhớ, khéo tay và tự làm ra món quà tặng con cháu. Hotline 0969 032 360.",
    "image": "https://antcare.vn/images/tin-tuc/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare.jpg",
    "url": "https://antcare.vn/news/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare",
    "material": "Dây bèo, dây nan, gỗ cao su"
  }
  </script>
</article>`;

newsData.featured = {
  id: 120,
  slug: "do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare",
  oldSlugs: [
    "blog/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare",
    "tin-tuc/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare",
    "do-choi-tang-cuong-tri-nho"
  ],
  title: "Đồ chơi tăng cường trí nhớ cho người cao tuổi: bộ Montessori ANTCARE từ vật liệu tự nhiên",
  category: "Đồ chơi trí nhớ",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Bộ đồ chơi Montessori ANTCARE từ dây bèo, dây nan, gỗ cao su giúp ông bà rèn trí nhớ, khéo tay và tự làm ra món quà tặng con cháu. Hotline 0969 032 360.",
  excerpt: "Bộ đồ chơi Montessori ANTCARE từ dây bèo, dây nan, gỗ cao su giúp ông bà rèn trí nhớ, khéo tay và tự làm ra món quà tặng con cháu. Hotline 0969 032 360.",
  image: "/images/tin-tuc/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 120 (Đồ chơi tăng cường trí nhớ cho người cao tuổi) to news.json!');
