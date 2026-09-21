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
    <h1 itemprop="headline">Chọn đồ chơi cho người sa sút trí tuệ theo từng giai đoạn: hướng dẫn từ ANTCARE</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Hướng dẫn chọn đồ chơi cho người sa sút trí tuệ từ giai đoạn sớm đến muộn: độ khó, chất liệu, an toàn. Gợi ý bộ Montessori ANTCARE phù hợp từng mức.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-18">18/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-18">18/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan.jpg" alt="Bộ sưu tập đồ chơi Montessori và hoạt động giác quan cho người sa sút trí tuệ theo từng giai đoạn" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Nguyên tắc chọn đồ chơi cho người sa sút trí tuệ là khớp với giai đoạn: giai đoạn sớm chọn hoạt động nhiều bước có mục tiêu rõ; giai đoạn giữa chọn hoạt động chia nhỏ, ít quy tắc; giai đoạn muộn ưu tiên cảm giác êm dịu, cầm nắm lặp lại, không có đúng – sai. Luôn ưu tiên chất liệu an toàn, không có chi tiết nhỏ dễ nuốt.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">4 tiêu chí khi chọn đồ chơi cho người sa sút trí tuệ</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Bảng gợi ý theo giai đoạn</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Mẹo giúp ông bà hứng thú</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Lưu ý an toàn</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">4 tiêu chí khi chọn đồ chơi cho người sa sút trí tuệ</h2>
  <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Đúng mức độ:</strong> quá khó gây nản lòng, quá dễ gây nhàm chán. Khả năng nhận thức có thể dao động theo từng ngày hoặc theo thời điểm, nên gia đình nên chuẩn bị sẵn 2 mức độ hoạt động.</li>
    <li style="margin-bottom: 8px;"><strong>Kích thích giác quan:</strong> chất liệu có vân tự nhiên, màu sắc tương phản rõ ràng, các thao tác lặp lại giúp người cao tuổi dễ tham gia mà không cần phải nhớ quá nhiều quy tắc phức tạp.</li>
    <li style="margin-bottom: 8px;"><strong>An toàn tuyệt đối:</strong> không cạnh sắc nhọn, không có chi tiết rời quá nhỏ có nguy cơ nuốt phải, vật liệu tự nhiên lành tính và dễ dàng vệ sinh.</li>
    <li style="margin-bottom: 8px;"><strong>Gắn với sở thích và ký ức cũ:</strong> người từng làm nông, may vá, đan lát sẽ rất hào hứng và tìm lại được sự quen thuộc khi chạm vào các chất liệu dân dã như dây bèo, nan tre, gỗ mộc.</li>
  </ol>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bảng gợi ý theo giai đoạn</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 18%;">Giai đoạn</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 27%;">Đặc điểm</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 27%;">Loại hoạt động phù hợp</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 28%;">Gợi ý từ ANTCARE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Sớm</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Còn làm theo hướng dẫn nhiều bước</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Đan kết có mẫu, đếm hàng, hoàn thiện sản phẩm</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Bộ đan giỏ dây bèo, hộp dây nan</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Sớm – giữa</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cần chia nhỏ bước, nhắc nhẹ</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Luồn dây theo lỗ đánh dấu màu, ghép khung gỗ lớn</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Bộ luồn dây trên khung gỗ cao su</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Giữa – muộn</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Khó theo quy tắc, tay dễ bồn chồn</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Thao tác lặp lại: xoay, trượt, vặn, cài then</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Bảng hoạt động gỗ cao su (busy board)</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Muộn</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Ưu tiên êm dịu, thoải mái cảm xúc</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cầm nắm, vuốt ve chất liệu tự nhiên mềm</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Tấm đan dây bèo mềm, khối gỗ bo tròn cầm tay</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="font-size: 0.95rem; font-style: italic; color: #64748b; margin-top: -10px;">
    * Tên và thành phần từng bộ có thể thay đổi; vui lòng liên hệ hotline ANTCARE để được tư vấn bộ hiện có phù hợp nhất với thể trạng của bác.
  </p>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Mẹo giúp ông bà hứng thú</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Làm mẫu một lần:</strong> thực hiện mẫu trước rồi để ông bà tự do thao tác, tránh ngắt lời hoặc sửa sai liên tục làm mất đi sự tự tin.</li>
    <li style="margin-bottom: 8px;"><strong>Chọn thời điểm vàng:</strong> ưu tiên lúc ông bà tỉnh táo và khoan khoái nhất (thường là buổi sáng), tránh lúc cơ thể mệt mỏi hoặc buổi chiều muộn khi hội chứng hoàng hôn (sundowning) dễ xuất hiện.</li>
    <li style="margin-bottom: 8px;"><strong>Khen ngợi quá trình:</strong> động viên từng nỗ lực cầm nắm hay sự tập trung của ông bà, không chỉ chăm chú vào kết quả hoàn hảo.</li>
    <li style="margin-bottom: 8px;"><strong>Tôn trọng cảm xúc:</strong> nếu hôm nay ông bà không hào hứng, hãy nhẹ nhàng cất đi và thử lại vào dịp khác hoặc thay đổi bằng hoạt động nghe nhạc, trò chuyện.</li>
    <li style="margin-bottom: 8px;"><strong>Trưng bày thành phẩm:</strong> đặt chiếc giỏ đan hay khay nhỏ ông bà làm được ở nơi trang trọng trong phòng khách để ông bà luôn tự hào khi có khách đến thăm.</li>
  </ul>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Lưu ý an toàn</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Luôn có người thân hoặc Trợ lý sức khỏe bên cạnh giám sát, đặc biệt ở các giai đoạn sau khi người cao tuổi có thể có thói quen cho đồ vật vào miệng. Cần kiểm tra định kỳ bề mặt gỗ và sợi đan, loại bỏ ngay các sợi bị xơ, sờn hoặc gãy. Nếu nhận thấy người thân có dấu hiệu suy giảm trí nhớ mới xuất hiện hoặc thay đổi hành vi đột ngột, gia đình hãy đưa ông bà đến khám tại các chuyên khoa Lão khoa / Thần kinh uy tín — ANTCARE luôn sẵn sàng hỗ trợ chu đáo qua dịch vụ <a href="/dong-hanh-di-kham" style="color: #6633B4; font-weight: 600; text-decoration: underline;">đồng hành đi khám</a>. Xem thêm bài viết về <a href="/news/do-choi-tang-cuong-tri-nho-nguoi-cao-tuoi-antcare" style="color: #6633B4; font-weight: 600; text-decoration: underline;">bộ đồ chơi Montessori từ vật liệu tự nhiên</a>.
  </p>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Cần tư vấn chọn bộ phù hợp? Gọi ANTCARE</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được chuyên viên tư vấn chi tiết theo tình trạng sức khỏe của ông bà.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/san-pham" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Khám phá sản phẩm rèn luyện
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người sa sút trí tuệ giai đoạn đầu nên chơi gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Các hoạt động nhiều bước, có mục tiêu rõ và có thành phẩm như đan giỏ, đan hộp, ghép hình lớn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người sa sút trí tuệ giai đoạn muộn có dùng đồ chơi được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Được, nhưng nên chọn đồ vật êm dịu, cầm nắm lặp lại, không có đúng – sai, và luôn có người giám sát.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Làm sao biết đồ chơi quá khó với ông bà?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Nếu ông bà nhanh bỏ cuộc, bực bội hoặc lo âu, hãy chuyển sang mức dễ hơn hoặc chia nhỏ từng bước.</p>
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
    "headline": "Chọn đồ chơi cho người sa sút trí tuệ theo từng giai đoạn: hướng dẫn từ ANTCARE",
    "description": "Hướng dẫn chọn đồ chơi cho người sa sút trí tuệ từ giai đoạn sớm đến muộn: độ khó, chất liệu, an toàn. Gợi ý bộ Montessori ANTCARE phù hợp từng mức.",
    "inLanguage": "vi-VN",
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": "https://antcare.vn/blog/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan",
    "image": "https://antcare.vn/images/tin-tuc/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan.jpg",
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
    "keywords": "đồ chơi cho người sa sút trí tuệ, đồ chơi cho người bị Alzheimer, hoạt động cho người mất trí nhớ, chọn đồ chơi người già theo giai đoạn, ANTCARE"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Người sa sút trí tuệ giai đoạn đầu nên chơi gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Các hoạt động nhiều bước, có mục tiêu rõ và có thành phẩm như đan giỏ, đan hộp, ghép hình lớn."
        }
      },
      {
        "@type": "Question",
        "name": "Người sa sút trí tuệ giai đoạn muộn có dùng đồ chơi được không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Được, nhưng nên chọn đồ vật êm dịu, cầm nắm lặp lại, không có đúng – sai, và luôn có người giám sát."
        }
      },
      {
        "@type": "Question",
        "name": "Làm sao biết đồ chơi quá khó với ông bà?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nếu ông bà nhanh bỏ cuộc, bực bội hoặc lo âu, hãy chuyển sang mức dễ hơn hoặc chia nhỏ từng bước."
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
        "name": "Chọn đồ chơi cho người sa sút trí tuệ theo từng giai đoạn: hướng dẫn từ ANTCARE",
        "item": "https://antcare.vn/news/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan"
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
    "description": "Hướng dẫn chọn đồ chơi cho người sa sút trí tuệ từ giai đoạn sớm đến muộn: độ khó, chất liệu, an toàn. Gợi ý bộ Montessori ANTCARE phù hợp từng mức.",
    "image": "https://antcare.vn/images/tin-tuc/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan.jpg",
    "url": "https://antcare.vn/news/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan",
    "material": "Dây bèo, dây nan, gỗ cao su"
  }
  </script>
</article>`;

newsData.featured = {
  id: 121,
  slug: "chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan",
  oldSlugs: [
    "blog/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan",
    "tin-tuc/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan"
  ],
  title: "Chọn đồ chơi cho người sa sút trí tuệ theo từng giai đoạn: hướng dẫn từ ANTCARE",
  category: "Đồ chơi trí nhớ",
  date: "18/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Hướng dẫn chọn đồ chơi cho người sa sút trí tuệ từ giai đoạn sớm đến muộn: độ khó, chất liệu, an toàn. Gợi ý bộ Montessori ANTCARE phù hợp từng mức.",
  excerpt: "Hướng dẫn chọn đồ chơi cho người sa sút trí tuệ từ giai đoạn sớm đến muộn: độ khó, chất liệu, an toàn. Gợi ý bộ Montessori ANTCARE phù hợp từng mức.",
  image: "/images/tin-tuc/chon-do-choi-cho-nguoi-sa-sut-tri-tue-theo-giai-doan.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 121 (Chọn đồ chơi cho người sa sút trí tuệ theo từng giai đoạn) to news.json!');
