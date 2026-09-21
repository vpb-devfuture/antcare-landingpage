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
    <h1 itemprop="headline">Quà tặng ông bà ý nghĩa: bộ đan dây bèo ANTCARE – món quà được “tặng lại” bằng yêu thương</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Tìm quà tặng ông bà vừa vui vừa tốt cho trí nhớ? Bộ đan dây bèo ANTCARE giúp ông bà tự tay làm giỏ xinh tặng lại con cháu. Đặt ngay: 0969 032 360.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/qua-tang-ong-ba-bo-dan-day-beo-antcare.jpg" alt="Bộ đan giỏ dây bèo ANTCARE - quà tặng ý nghĩa sức khỏe tinh thần cho ông bà" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Nếu bạn tìm quà tặng ông bà vừa có ý nghĩa vừa tốt cho sức khỏe tinh thần, bộ đan dây bèo ANTCARE là lựa chọn khác biệt: ông bà dùng đôi tay đan thành chiếc giỏ hoàn chỉnh, vừa rèn trí nhớ và sự khéo léo, vừa có món quà tự tay làm để tặng lại con cháu.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Vì sao quà tặng ông bà thường “không trúng”?</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bộ đan dây bèo ANTCARE có gì?</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Món quà mang lại gì cho ông bà?</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Dịp nào nên tặng?</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao quà tặng ông bà thường “không trúng”?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Thực phẩm chức năng, quần áo, đồ gia dụng… ông bà thường đã có đủ hoặc ngại dùng vì sợ tốn kém tiền của con cháu. Điều mà phần lớn người cao tuổi thật sự thiếu sau khi về hưu là <strong>việc để đôi tay và khối óc cùng hoạt động</strong>, và quan trọng hơn cả là <strong>cảm giác mình vẫn còn hữu ích</strong> cho gia đình. Một món quà tạo ra niềm vui hoạt động mỗi ngày sẽ được ông bà trân trọng và nhớ lâu hơn rất nhiều so với những món đồ chỉ để cất trong tủ kính.
  </p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bộ đan dây bèo ANTCARE có gì?</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Dây bèo tây tự nhiên:</strong> đã qua quy trình phơi sấy truyền thống và xử lý chống ẩm mốc an toàn, mềm mại, dẻo dai, dễ luồn đan và hoàn toàn không mùi hóa chất.</li>
    <li style="margin-bottom: 8px;"><strong>Khung và đáy giỏ bằng gỗ cao su mộc:</strong> gia công nhẵn mịn, có sẵn các điểm luồn định hình giúp ông bà bắt đầu làm dễ dàng mà không bị rối tay.</li>
    <li style="margin-bottom: 8px;"><strong>Sách hướng dẫn từng bước:</strong> in màu cỡ chữ to rõ ràng, hình vẽ minh họa chi tiết, từng bước trực quan.</li>
    <li style="margin-bottom: 8px;"><strong>Thành phẩm thiết thực:</strong> một chiếc giỏ đan xinh xắn dùng để đựng hoa quả, bánh kẹo, cuộn len hay các đồ lặt vặt ấm cúng trong phòng khách.</li>
  </ul>
  <p style="font-size: 0.95rem; font-style: italic; color: #64748b; margin-top: -6px;">
    * Thành phần chi tiết có thể được tinh chỉnh theo từng phiên bản hoặc yêu cầu riêng — liên hệ hotline ANTCARE để cập nhật chi tiết.
  </p>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Món quà mang lại gì cho ông bà?</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 30%;">Khía cạnh</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 70%;">Lợi ích thực tế cho người cao tuổi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Rèn luyện trí nhớ</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Ghi nhớ các bước luồn đan, đếm vòng lặp lại, giữ cho não bộ luôn hoạt động tích cực.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Khéo léo đôi tay</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Vận động tinh linh hoạt các ngón tay và cổ tay, giảm hiện tượng cứng khớp ngón tay ở tuổi già.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Cảm xúc & Tinh thần</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tạo sự thư giãn, giảm bồn chồn lo âu và mang lại cảm giác tự hào, hân hoan khi hoàn thành sản phẩm.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Gắn kết gia đình</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Ông bà tự tay trao tặng lại chiếc giỏ cho con cháu; là cơ hội tuyệt vời để cùng con cháu trò chuyện về làng quê xưa.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Dịp nào nên tặng?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Lễ mừng thọ, dịp Tết đoàn viên, ngày Quốc tế Người cao tuổi (1/10), sinh nhật ông bà, hoặc đơn giản là món quà bất ngờ trong dịp cuối tuần khi bạn về thăm nhà, muốn có thêm lý do để cùng ngồi bên tách trà và tỉ mẩn đan lát với ông bà. Bộ sản phẩm cũng là lựa chọn quà tặng tuyệt vời cho các câu lạc bộ hưu trí, hội người cao tuổi và các trung tâm dưỡng lão. Tìm hiểu thêm tại bài viết về <a href="/news/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare" style="color: #6633B4; font-weight: 600; text-decoration: underline;">bộ đồ chơi Montessori tăng cường trí nhớ</a> và xem các sản phẩm tại <a href="/san-pham" style="color: #6633B4; font-weight: 600; text-decoration: underline;">Danh mục dụng cụ rèn luyện thể chất & trí não</a>.
  </p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Tặng ông bà bộ đan dây bèo ANTCARE</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được chuẩn bị hộp quà chu đáo nhất.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/san-pham" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Xem chi tiết sản phẩm
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nên tặng gì cho ông bà ý nghĩa?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Một món quà tạo ra hoạt động và niềm vui mỗi ngày, như bộ đan dây bèo ANTCARE để ông bà tự tay làm giỏ tặng con cháu.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Ông bà chưa từng đan có làm được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Được. Bộ có hướng dẫn từng bước, khung gỗ sẵn và dây mềm; con cháu có thể làm mẫu vài vòng đầu.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bộ đan dây bèo có phù hợp người sa sút trí tuệ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Phù hợp nhất với giai đoạn sớm. Ở giai đoạn sau nên chọn bộ ít bước hơn; ANTCARE sẽ tư vấn khi bạn liên hệ.</p>
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
    "headline": "Quà tặng ông bà ý nghĩa: bộ đan dây bèo ANTCARE – món quà được “tặng lại” bằng yêu thương",
    "description": "Tìm quà tặng ông bà vừa vui vừa tốt cho trí nhớ? Bộ đan dây bèo ANTCARE giúp ông bà tự tay làm giỏ xinh tặng lại con cháu. Đặt ngay: 0969 032 360.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/qua-tang-ong-ba-bo-dan-day-beo-antcare",
    "image": "https://antcare.vn/images/tin-tuc/qua-tang-ong-ba-bo-dan-day-beo-antcare.jpg",
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
    "keywords": "quà tặng ông bà, quà tặng người già ý nghĩa, quà tặng người cao tuổi, bộ đan dây bèo, đồ chơi trí nhớ ANTCARE"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Nên tặng gì cho ông bà ý nghĩa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Một món quà tạo ra hoạt động và niềm vui mỗi ngày, như bộ đan dây bèo ANTCARE để ông bà tự tay làm giỏ tặng con cháu."
        }
      },
      {
        "@type": "Question",
        "name": "Ông bà chưa từng đan có làm được không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Được. Bộ có hướng dẫn từng bước, khung gỗ sẵn và dây mềm; con cháu có thể làm mẫu vài vòng đầu."
        }
      },
      {
        "@type": "Question",
        "name": "Bộ đan dây bèo có phù hợp người sa sút trí tuệ không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phù hợp nhất với giai đoạn sớm. Ở giai đoạn sau nên chọn bộ ít bước hơn; ANTCARE sẽ tư vấn khi bạn liên hệ."
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
        "name": "Quà tặng ông bà ý nghĩa: bộ đan dây bèo ANTCARE – món quà được “tặng lại” bằng yêu thương",
        "item": "https://antcare.vn/news/qua-tang-ong-ba-bo-dan-day-beo-antcare"
      }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bộ đan giỏ dây bèo ANTCARE",
    "brand": {
      "@type": "Brand",
      "name": "ANTCARE"
    },
    "description": "Tìm quà tặng ông bà vừa vui vừa tốt cho trí nhớ? Bộ đan dây bèo ANTCARE giúp ông bà tự tay làm giỏ xinh tặng lại con cháu. Đặt ngay: 0969 032 360.",
    "image": "https://antcare.vn/images/tin-tuc/qua-tang-ong-ba-bo-dan-day-beo-antcare.jpg",
    "url": "https://antcare.vn/news/qua-tang-ong-ba-bo-dan-day-beo-antcare",
    "material": "Dây bèo, dây nan, gỗ cao su"
  }
  </script>
</article>`;

newsData.featured = {
  id: 122,
  slug: "qua-tang-ong-ba-bo-dan-day-beo-antcare",
  oldSlugs: [
    "blog/qua-tang-ong-ba-bo-dan-day-beo-antcare",
    "tin-tuc/qua-tang-ong-ba-bo-dan-day-beo-antcare"
  ],
  title: "Quà tặng ông bà ý nghĩa: bộ đan dây bèo ANTCARE – món quà được “tặng lại” bằng yêu thương",
  category: "Đồ chơi trí nhớ",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Tìm quà tặng ông bà vừa vui vừa tốt cho trí nhớ? Bộ đan dây bèo ANTCARE giúp ông bà tự tay làm giỏ xinh tặng lại con cháu. Đặt ngay: 0969 032 360.",
  excerpt: "Tìm quà tặng ông bà vừa vui vừa tốt cho trí nhớ? Bộ đan dây bèo ANTCARE giúp ông bà tự tay làm giỏ xinh tặng lại con cháu. Đặt ngay: 0969 032 360.",
  image: "/images/tin-tuc/qua-tang-ong-ba-bo-dan-day-beo-antcare.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 122 (Quà tặng ông bà ý nghĩa: bộ đan dây bèo ANTCARE) to news.json!');
