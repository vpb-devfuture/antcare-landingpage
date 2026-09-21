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
    <h1 itemprop="headline">Chơi gì cùng ông bà cuối tuần? 6 hoạt động gắn kết ba thế hệ với đồ chơi ANTCARE</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      6 hoạt động con cháu có thể làm cùng ông bà với bộ đồ chơi trí nhớ ANTCARE: đan giỏ, kể chuyện xưa, làm quà Tết… Gắn kết ba thế hệ mỗi cuối tuần.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/choi-cung-ong-ba-do-choi-tri-nho-antcare.jpg" alt="Góc hoạt động thủ công cuối tuần gắn kết gia đình cùng bộ đồ chơi trí nhớ ANTCARE" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Để chơi cùng ông bà hiệu quả, hãy chọn hoạt động có thành phẩm, làm theo nhịp của ông bà và lồng ghép trò chuyện. Với bộ đồ chơi ANTCARE, cả nhà có thể cùng đan giỏ, làm hộp quà, kể chuyện xưa qua chất liệu đan lát, tổ chức “triển lãm” thành phẩm hoặc làm quà Tết tặng họ hàng.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">1. Đan giỏ cùng nhau – mỗi người một phần</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">2. Kể chuyện xưa qua từng sợi dây</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">3. “Triển lãm” thành phẩm của ông bà</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">4. Làm quà Tết, quà mừng thọ cho họ hàng</a></li>
      <li><a href="#s5" style="color: #6633B4; text-decoration: none; font-weight: 500;">5. Trò chơi đếm và phân loại màu</a></li>
      <li><a href="#s6" style="color: #6633B4; text-decoration: none; font-weight: 500;">6. Giờ “bận tay” nhẹ nhàng buổi chiều</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">1. Đan giỏ cùng nhau – mỗi người một phần</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Ông bà đan phần thân giỏ, cháu nhỏ phụ chọn màu dây, luồn dây hoặc giữ chắc khung gỗ. Việc phân chia nhiệm vụ vừa sức giúp ông bà tự nhiên trở thành “người hướng dẫn”, tạo cảm giác được tôn trọng và được các cháu lắng nghe.
  </p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">2. Kể chuyện xưa qua từng sợi dây</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Mùi thơm thảo mộc dịu nhẹ của dây bèo khô và nan tre gợi nhớ hình ảnh chiếc rổ, nong, nia của làng quê xưa. Con cháu có thể gợi chuyện: <em>“Ngày xưa quê mình có ai đan rổ không bà?”, “Thời trước bà đi chợ gánh những món gì?”</em>. Đây là liệu pháp hồi tưởng (Reminiscence Therapy) tuyệt vời để kích thích trí nhớ dài hạn của người già.
  </p>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">3. “Triển lãm” thành phẩm của ông bà</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Dành riêng một góc kệ trang trọng trong phòng khách để bày những chiếc giỏ, khay đựng hoa quả mà ông bà đã tự tay hoàn thiện, kèm theo một tấm thẻ ghi tên và ngày hoàn thành. Hãy chụp ảnh và gửi vào nhóm chat gia đình để mọi người cùng khen ngợi, tiếp thêm động lực cho ông bà.
  </p>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">4. Làm quà Tết, quà mừng thọ cho họ hàng</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Mỗi dịp lễ Tết hay mừng thọ, con cháu có thể gợi ý ông bà cùng đan vài chiếc hộp quà nhỏ xinh đựng mứt gừng, hạt sen để biếu họ hàng, làng xóm. Một hoạt động có mục tiêu rõ ràng và có người đón nhận sẽ giúp ông bà duy trì nhịp làm việc hăng say, đều đặn.
  </p>

  <h2 id="s5" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">5. Trò chơi đếm và phân loại màu</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Trước khi bước vào đan, hãy cùng ông bà và các cháu nhỏ phân loại sợi dây theo màu sắc, đếm số sợi cần thiết cho từng hàng. Hoạt động nhỏ tưởng chừng đơn giản này giúp rèn luyện khả năng tập trung chú ý và củng cố trí nhớ ngắn hạn rất hiệu quả.
  </p>

  <h2 id="s6" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">6. Giờ “bận tay” nhẹ nhàng buổi chiều</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Với những ông bà đã có dấu hiệu sa sút trí tuệ, khoảng thời gian buổi chiều thường dễ phát sinh cảm giác bồn chồn, âu lo. Bạn chỉ cần đặt <a href="/news/bang-hoat-dong-go-cao-su-nguoi-sa-sut-tri-tue" style="color: #6633B4; font-weight: 600; text-decoration: underline;">bảng hoạt động gỗ cao su ANTCARE</a> cạnh ghế ngồi, mở những bản nhạc tiền chiến mà ông bà yêu thích, rồi cùng ngồi kề bên trò chuyện vài phút để giúp tâm trạng ông bà dịu lại.
  </p>

  <div style="overflow-x: auto; margin: 24px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 25%;">Nguyên tắc</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 40%;">Nên làm</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 35%;">Cần tránh</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Nhịp độ tương tác</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Thuận theo tốc độ tự nhiên của ông bà, kiên nhẫn chờ đợi.</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #e11d48;">Hối thúc nhanh tay hoặc làm thay toàn bộ.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Cách phản hồi</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Khen ngợi nỗ lực và quá trình tham gia vui vẻ.</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #e11d48;">Chỉ trích lỗi sai hoặc sửa liên tục.</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Thời lượng buổi chơi</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Chia thành từng chặng ngắn 15–20 phút, dừng khi mệt.</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #e11d48;">Kéo dài quá lâu khi ông bà đã mất tập trung.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Bắt đầu cuối tuần gắn kết với bộ đồ chơi ANTCARE</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được tư vấn bộ hoạt động phù hợp cho cả gia đình.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/san-pham" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Khám phá bộ đồ chơi rèn luyện
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nên chơi gì với ông bà ở nhà?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Các hoạt động có thành phẩm và gợi chuyện xưa như đan giỏ, làm hộp quà, phân loại màu, kết hợp trò chuyện và nghe nhạc ông bà thích.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Mỗi lần chơi cùng ông bà nên kéo dài bao lâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Không cần cố định; hãy quan sát và dừng khi ông bà có dấu hiệu mệt hoặc mất hứng, thường là các buổi ngắn 15–30 phút.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Trẻ nhỏ có chơi cùng ông bà với đồ chơi ANTCARE được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Rất tốt, dưới sự giám sát của người lớn; trẻ có thể phụ giữ khung, chọn màu dây, đếm sợi giúp gắn kết thế hệ tự nhiên.</p>
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
    "headline": "Chơi gì cùng ông bà cuối tuần? 6 hoạt động gắn kết ba thế hệ với đồ chơi ANTCARE",
    "description": "6 hoạt động con cháu có thể làm cùng ông bà với bộ đồ chơi trí nhớ ANTCARE: đan giỏ, kể chuyện xưa, làm quà Tết… Gắn kết ba thế hệ mỗi cuối tuần.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/choi-cung-ong-ba-do-choi-tri-nho-antcare",
    "image": "https://antcare.vn/images/tin-tuc/choi-cung-ong-ba-do-choi-tri-nho-antcare.jpg",
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
    "keywords": "hoạt động cho người cao tuổi tại nhà, chơi gì với ông bà, trò chơi rèn trí nhớ cho người già, gắn kết gia đình ba thế hệ, ANTCARE"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Nên chơi gì với ông bà ở nhà?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Các hoạt động có thành phẩm và gợi chuyện xưa như đan giỏ, làm hộp quà, phân loại màu, kết hợp trò chuyện và nghe nhạc ông bà thích."
        }
      },
      {
        "@type": "Question",
        "name": "Mỗi lần chơi cùng ông bà nên kéo dài bao lâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Không cần cố định; hãy quan sát và dừng khi ông bà có dấu hiệu mệt hoặc mất hứng, thường là các buổi ngắn."
        }
      },
      {
        "@type": "Question",
        "name": "Trẻ nhỏ có chơi cùng ông bà với đồ chơi ANTCARE được không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Được, dưới sự giám sát của người lớn; trẻ có thể phụ giữ khung, chọn màu dây, đếm sợi."
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
        "name": "Chơi gì cùng ông bà cuối tuần? 6 hoạt động gắn kết ba thế hệ với đồ chơi ANTCARE",
        "item": "https://antcare.vn/news/choi-cung-ong-ba-do-choi-tri-nho-antcare"
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
    "description": "6 hoạt động con cháu có thể làm cùng ông bà với bộ đồ chơi trí nhớ ANTCARE: đan giỏ, kể chuyện xưa, làm quà Tết… Gắn kết ba thế hệ mỗi cuối tuần.",
    "image": "https://antcare.vn/images/tin-tuc/choi-cung-ong-ba-do-choi-tri-nho-antcare.jpg",
    "url": "https://antcare.vn/news/choi-cung-ong-ba-do-choi-tri-nho-antcare",
    "material": "Dây bèo, dây nan, gỗ cao su"
  }
  </script>
</article>`;

newsData.featured = {
  id: 124,
  slug: "choi-cung-ong-ba-do-choi-tri-nho-antcare",
  oldSlugs: [
    "blog/choi-cung-ong-ba-do-choi-tri-nho-antcare",
    "tin-tuc/choi-cung-ong-ba-do-choi-tri-nho-antcare"
  ],
  title: "Chơi gì cùng ông bà cuối tuần? 6 hoạt động gắn kết ba thế hệ với đồ chơi ANTCARE",
  category: "Đồ chơi trí nhớ",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "6 hoạt động con cháu có thể làm cùng ông bà với bộ đồ chơi trí nhớ ANTCARE: đan giỏ, kể chuyện xưa, làm quà Tết… Gắn kết ba thế hệ mỗi cuối tuần.",
  excerpt: "6 hoạt động con cháu có thể làm cùng ông bà với bộ đồ chơi trí nhớ ANTCARE: đan giỏ, kể chuyện xưa, làm quà Tết… Gắn kết ba thế hệ mỗi cuối tuần.",
  image: "/images/tin-tuc/choi-cung-ong-ba-do-choi-tri-nho-antcare.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 124 (Chơi gì cùng ông bà cuối tuần) to news.json!');
