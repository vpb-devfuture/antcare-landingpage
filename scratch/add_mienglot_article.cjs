const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\mieng_lot_son_tieu_comparison_1789441868766.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured && newsData.featured.id !== 88) {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Miếng lót són tiểu khác băng vệ sinh thế nào và vì sao không nên dùng thay</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Nhìn bề ngoài rất giống nhau, giá cũng gần bằng nhau. Nhưng dùng nhầm loại là nguyên nhân phổ biến khiến nhiều người nghĩ rằng sản phẩm thấm hút không hiệu quả.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Khác biệt cốt lõi nằm ở <strong>cấu tạo lõi thấm</strong>.<br>
      Băng vệ sinh được thiết kế để thấm máu kinh — chất lỏng đặc, tiết ra chậm và lượng ít.<br>
      Miếng lót són tiểu thiết kế cho nước tiểu — <strong>loãng hơn, ra nhanh hơn và lượng lớn hơn nhiều trong một lần</strong>.<br>
      Vì vậy miếng lót són tiểu có lõi hạt SAP nhiều hơn để thấm nhanh, và <strong>lớp khử mùi chuyên cho amoniac trong nước tiểu</strong> — thứ băng vệ sinh không có.<br>
      Dùng băng vệ sinh thay thế thường dẫn tới thấm không kịp, tràn ra ngoài, và có mùi.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao nhiều người dùng nhầm</h2>
  <p>Ba lý do khiến việc dùng băng vệ sinh thay miếng lót són tiểu rất phổ biến ở Việt Nam:</p>
  <p><strong>Nhìn giống nhau.</strong> Cùng hình dạng, cùng cách dán vào quần lót, cùng bày ở quầy chăm sóc cá nhân.</p>
  <p><strong>Dễ mua hơn.</strong> Băng vệ sinh có ở mọi tạp hóa, còn miếng lót són tiểu chỉ có ở hiệu thuốc lớn hoặc mua online.</p>
  <p><strong>Ngại hỏi.</strong> Ra hiệu thuốc hỏi mua sản phẩm cho tình trạng són tiểu là việc nhiều người thấy ngượng, nên chọn mua thứ quen thuộc hơn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khác biệt về mặt kỹ thuật</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Đặc điểm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Băng vệ sinh</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Miếng lót són tiểu</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thiết kế cho</td>
          <td style="padding: 0.8rem 1rem;">Máu kinh — đặc, ra chậm, lượng ít</td>
          <td style="padding: 0.8rem 1rem;">Nước tiểu — loãng, ra nhanh, lượng lớn</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Lõi thấm</td>
          <td style="padding: 0.8rem 1rem;">Chủ yếu bông ép, ít hạt SAP</td>
          <td style="padding: 0.8rem 1rem;">Nhiều hạt SAP siêu thấm, thấm nhanh</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tốc độ thấm</td>
          <td style="padding: 0.8rem 1rem;">Chậm hơn, đủ cho dịch đặc</td>
          <td style="padding: 0.8rem 1rem;">Nhanh, tránh tràn khi són đột ngột</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Khử mùi</td>
          <td style="padding: 0.8rem 1rem;">Chủ yếu hương liệu che mùi</td>
          <td style="padding: 0.8rem 1rem;">Có lớp trung hòa amoniac trong nước tiểu</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Dung tích</td>
          <td style="padding: 0.8rem 1rem;">Thấp hơn</td>
          <td style="padding: 0.8rem 1rem;">Cao hơn, tính theo ml nước tiểu</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Hậu quả thực tế khi dùng nhầm</h2>
  <p><strong>Tràn ra ngoài.</strong> Nước tiểu ra nhanh trong một lần, băng vệ sinh không thấm kịp nên chảy tràn ra quần áo. Đây là lý do nhiều người kết luận "dùng sản phẩm cũng không ăn thua" và bỏ cuộc.</p>
  <p><strong>Có mùi.</strong> Băng vệ sinh chỉ dùng hương liệu che mùi, không trung hòa được amoniac. Kết quả là mùi nước tiểu trộn với hương liệu, đôi khi còn khó chịu hơn.</p>
  <p><strong>Ẩm ướt kéo dài trên da.</strong> Đây là hậu quả nghiêm trọng nhất. Lõi thấm không giữ được chất lỏng ở sâu, khiến bề mặt luôn ẩm. Da vùng kín ở người cao tuổi vốn mỏng và ít đàn hồi, tiếp xúc ẩm kéo dài dễ dẫn đến kích ứng, ngứa, viêm da và nhiễm nấm.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Cách chọn miếng lót són tiểu phù hợp</h2>
  <p>Sản phẩm nhóm này thường phân theo <strong>mức độ thấm hút</strong>, không phải theo size như tã. Cách chọn thực tế:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Mức nhẹ</strong> — són vài giọt khi ho, cười, hắt hơi: chọn loại mỏng nhất, dùng được cả ngày
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Mức trung bình</strong> — són lượng đáng kể vài lần trong ngày: chọn loại dày hơn, thay 3-4 lần/ngày
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Mức nặng</strong> — són nhiều lần, lượng lớn: cân nhắc chuyển sang tã quần thay vì miếng lót
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Nếu phải thay miếng lót nhiều hơn 5-6 lần mỗi ngày, hoặc vẫn bị tràn dù đã dùng loại dày nhất, đó là dấu hiệu tình trạng đã vượt quá mức mà miếng lót xử lý được. Lúc này nên chuyển sang tã quần, và đồng thời <strong>đi khám lại</strong> — vì tình trạng nặng lên nhanh có thể có nguyên nhân cần điều trị.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Lời khuyên về sự riêng tư</h2>
  <p>Với nhiều người cao tuổi, việc dùng sản phẩm này là điều họ không muốn ai biết. Vài chi tiết nhỏ giúp giữ thể diện cho bố mẹ:</p>
  <p>Cất sản phẩm ở nơi kín đáo trong phòng riêng, không để chung tủ đồ dùng gia đình. Chuẩn bị sẵn túi kín để bỏ sản phẩm đã dùng. Không nhắc đến chủ đề này trước mặt khách hoặc con cháu nhỏ. Và khi mua, chọn cách giao hàng kín đáo.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ (Đã cập nhật slogan theo yêu cầu) -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      antcare, để hành trình tuổi già của mỗi người thêm vui khỏe
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Hotline 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Liên hệ ANTCARE
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có thể dùng băng vệ sinh hằng ngày thay miếng lót són tiểu không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có thể dùng tạm trong trường hợp són rất ít và không thường xuyên, nhưng không nên dùng lâu dài. Băng vệ sinh hằng ngày có lõi thấm rất mỏng, chỉ đủ cho dịch tiết sinh lý. Với nước tiểu, kể cả lượng ít, khả năng thấm không đủ và không có lớp khử mùi phù hợp, dẫn đến ẩm ướt kéo dài trên da — nguyên nhân gây kích ứng và viêm nhiễm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Miếng lót són tiểu dùng được cho nam giới không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và trên thị trường có loại thiết kế riêng cho nam giới với hình dạng và vị trí lõi thấm khác. Nam giới bị són tiểu thường do phì đại tuyến tiền liệt hoặc sau phẫu thuật tuyến tiền liệt. Nếu không tìm được loại riêng cho nam, có thể dùng loại thông thường nhưng cần chú ý vị trí đặt để thấm đúng chỗ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bao lâu phải thay một lần?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tùy mức độ són và loại sản phẩm, thông thường 3-4 tiếng một lần, hoặc thay ngay khi cảm thấy ẩm. Nguyên tắc quan trọng: không để da tiếp xúc với ẩm ướt quá lâu. Da vùng kín ở người cao tuổi mỏng và dễ tổn thương hơn, nên kéo dài thời gian sử dụng để tiết kiệm là cách làm gây hại nhiều hơn lợi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Miếng lót són tiểu có gây viêm nhiễm phụ khoa không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Bản thân sản phẩm không gây viêm nhiễm nếu dùng đúng cách. Nguy cơ đến từ việc để quá lâu không thay, tạo môi trường ẩm ướt cho vi khuẩn và nấm phát triển. Để phòng ngừa: thay đúng lịch, vệ sinh sạch và lau khô mỗi lần thay, chọn loại có lớp bề mặt thoáng khí, và không dùng loại có hương liệu mạnh nếu da nhạy cảm.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE – Kiến chăm tổ cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Miếng lót són tiểu khác băng vệ sinh thế nào và vì sao không nên dùng thay",
    "description": "Nhiều người dùng băng vệ sinh thay miếng lót són tiểu và gặp tràn, mùi. Giải thích khác biệt về cấu tạo lõi thấm và cách chọn đúng loại.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: 88,
  slug: "mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao",
  oldSlugs: [
    "kien-thuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao",
    "tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao"
  ],
  title: "Miếng lót són tiểu khác băng vệ sinh thế nào và vì sao không nên dùng thay",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Nhiều người dùng băng vệ sinh thay miếng lót són tiểu và gặp tràn, mùi. Giải thích khác biệt về cấu tạo lõi thấm và cách chọn đúng loại.",
  excerpt: "Nhiều người dùng băng vệ sinh thay miếng lót són tiểu và gặp tràn, mùi. Giải thích khác biệt về cấu tạo lõi thấm và cách chọn đúng loại.",
  image: "/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 88 to news.json!');
