const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\giac_ngu_purple_uniform_1788922659090.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/che-do-an-cho-nguoi-huyet-ap-thap.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chế độ ăn cho người huyết áp thấp: Những điều thực sự có ích và những điều cần thận trọng</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Huyết áp thấp có nhiều nguyên nhân khác nhau, và không phải trường hợp nào cũng giải quyết được bằng chế độ ăn. Bài viết phân biệt rõ khi nào ăn uống giúp ích và khi nào cần đi khám.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Với huyết áp thấp không có nguyên nhân bệnh lý, chế độ ăn có thể hỗ trợ qua ba hướng:
      <strong>uống đủ 2–2,5 lít nước mỗi ngày</strong> (thiếu nước là nguyên nhân phổ biến nhất gây huyết áp thấp),
      <strong>tăng nhẹ lượng muối trong bữa ăn</strong> nếu bác sĩ cho phép (natri giúp giữ nước trong mạch máu),
      và <strong>chia nhỏ bữa ăn thành 4–5 bữa nhỏ thay vì 2–3 bữa lớn</strong> (huyết áp hay tụt sau bữa ăn nhiều ở người cao tuổi).
      Huyết áp thấp có triệu chứng thường xuyên (chóng mặt, xỉu) cần được bác sĩ tìm nguyên nhân, không chỉ điều chỉnh ăn uống.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/che-do-an-cho-nguoi-cao-huyet-ap" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người cao huyết áp: Hướng dẫn thực tế cho bữa ăn hằng ngày
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Huyết áp thấp — không phải một bệnh duy nhất</h2>
  <p>Điểm quan trọng nhất cần hiểu: huyết áp thấp là triệu chứng, không phải một bệnh đơn lẻ. Nguyên nhân có thể rất khác nhau và cần cách xử trí khác nhau. Điều chỉnh chế độ ăn chỉ thực sự hữu ích với một số nguyên nhân nhất định.</p>
  <p>Các nguyên nhân phổ biến của huyết áp thấp ở người cao tuổi:</p>

  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li><strong>Mất nước</strong> — nguyên nhân phổ biến nhất, thường do uống không đủ nước</li>
    <li><strong>Huyết áp thấp thế đứng</strong> — tụt huyết áp khi đứng dậy, do lão hóa mạch máu</li>
    <li><strong>Tác dụng phụ của thuốc</strong> — thuốc huyết áp, lợi tiểu, thuốc tim mạch</li>
    <li><strong>Huyết áp thấp sau ăn</strong> — phổ biến ở người cao tuổi sau bữa lớn</li>
    <li><strong>Bệnh lý cần điều trị</strong> — suy tim, rối loạn nhịp, thiếu máu, suy tuyến thượng thận</li>
  </ul>

  <p>Ba nguyên nhân đầu có thể được hỗ trợ bằng thay đổi ăn uống và sinh hoạt. Hai nguyên nhân cuối cần điều trị bệnh lý gốc, không phải chỉ điều chỉnh ăn uống.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nước — yếu tố quan trọng nhất</h2>
  <p>Thiếu nước là nguyên nhân phổ biến và dễ khắc phục nhất của huyết áp thấp. Thể tích máu giảm khi thiếu nước làm huyết áp tụt, đặc biệt khi đứng dậy hoặc vận động.</p>
  <p>Người cao tuổi có xu hướng uống ít nước hơn vì cảm giác khát giảm theo tuổi. Mục tiêu là 2–2,5 lít mỗi ngày, bao gồm cả nước trong thức ăn.</p>
  <p>Cách thực tế để uống đủ nước:</p>

  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Đặt một bình nước 500ml tại chỗ ngồi quen thuộc, mục tiêu uống hết 4 lần trong ngày</li>
    <li>Uống một ly nước ngay khi thức dậy buổi sáng — trước khi ăn sáng và uống thuốc</li>
    <li>Nước canh, súp, cháo lỏng đều tính vào lượng nước trong ngày</li>
    <li>Theo dõi màu nước tiểu: vàng nhạt là đủ nước, vàng đậm là cần uống thêm</li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Muối — khi nào nên tăng và khi nào không</h2>
  <p>Natri giúp giữ nước trong mạch máu, làm tăng thể tích tuần hoàn và hỗ trợ huyết áp. <strong>Tuy nhiên, tăng muối chỉ phù hợp với người huyết áp thấp không có bệnh tim, thận hoặc phù — và cần có ý kiến của bác sĩ trước khi thực hiện.</strong></p>
  <p>Với người có cả huyết áp thấp và suy tim hoặc bệnh thận mạn tính, tăng muối có thể gây hại nhiều hơn lợi — làm nặng thêm phù và suy tim.</p>
  <p>Nếu bác sĩ cho phép tăng muối nhẹ, cách thực tế là thêm một chút muối vào thức ăn hoặc ăn thêm một số thực phẩm có natri tự nhiên như dưa leo muối nhẹ, phô mai tươi, hoặc đồ ăn có muối vừa phải — không phải ăn mì tôm hoặc đồ chế biến sẵn nhiều muối.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chia nhỏ bữa ăn để tránh huyết áp tụt sau ăn</h2>
  <p>Sau bữa ăn lớn, máu dồn về ruột để tiêu hóa, làm giảm lượng máu tuần hoàn đến các cơ quan khác và huyết áp tụt xuống. Ở người cao tuổi, cơ chế bù trừ tự nhiên kém hiệu quả hơn nên tình trạng này rõ hơn.</p>
  <p>Thay đổi đơn giản và hiệu quả nhất: chia 3 bữa chính thành 4–5 bữa nhỏ hơn trong ngày. Ngoài ra:</p>

  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Hạn chế tinh bột nhanh (cơm trắng nhiều, bánh mì trắng, đường) trong bữa — các thực phẩm này làm insulin tăng đột ngột, góp phần tụt huyết áp sau ăn</li>
    <li>Không uống rượu khi ăn — rượu làm giãn mạch và trầm trọng thêm huyết áp thấp sau ăn</li>
    <li>Ngồi nghỉ 20–30 phút sau bữa lớn trước khi đứng dậy</li>
    <li>Uống một ly nước nhỏ trước bữa ăn giúp giảm tụt huyết áp sau ăn</li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm có thể hỗ trợ</h2>
  <p>Không có thực phẩm nào được chứng minh làm tăng huyết áp mạnh như thuốc. Tuy nhiên một số thực phẩm hỗ trợ qua cơ chế giữ nước và ổn định tuần hoàn:</p>
  <p><strong>Thực phẩm giàu vitamin B12</strong> (gan, trứng, thịt): thiếu B12 gây thiếu máu và là một trong các nguyên nhân của huyết áp thấp và mệt mỏi ở người cao tuổi.</p>
  <p><strong>Thực phẩm giàu sắt</strong> (thịt đỏ nạc, đậu, rau cải xanh đậm): thiếu sắt gây thiếu máu thiếu sắt, một nguyên nhân của huyết áp thấp và chóng mặt.</p>
  <p><strong>Gừng và cam thảo</strong> — dân gian dùng nhiều, có một số bằng chứng nhỏ về hỗ trợ ổn định huyết áp. Trà gừng ấm buổi sáng là lựa chọn an toàn và dễ thực hiện.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý quan trọng</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Huyết áp thấp thường xuyên kèm triệu chứng (chóng mặt, ngất, mệt nhiều) cần được bác sĩ tìm nguyên nhân. Đặc biệt cần đi khám sớm nếu huyết áp thấp xuất hiện cùng lúc với bắt đầu thuốc mới, hoặc kèm theo các triệu chứng khác như đau ngực, khó thở, tiêu phân đen. Chỉ điều chỉnh ăn uống mà không tìm nguyên nhân có thể bỏ qua bệnh lý nghiêm trọng.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thay đổi sinh hoạt quan trọng không kém chế độ ăn</h2>
  <p>Với huyết áp thấp thế đứng — loại phổ biến nhất ở người cao tuổi — thay đổi sinh hoạt thường hiệu quả hơn chế độ ăn:</p>

  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Đứng dậy chậm — nằm → ngồi (30 giây) → đứng (30 giây), không đứng dậy đột ngột</li>
    <li>Trước khi ra khỏi giường buổi sáng, co duỗi bàn chân vài lần để kích thích tuần hoàn</li>
    <li>Bám vào điểm tựa khi đứng dậy — giường, thành ghế, tường</li>
    <li>Tránh đứng lâu một chỗ trong thời gian dài</li>
    <li>Mặc vớ y khoa hoặc băng ép nếu bác sĩ chỉ định — giúp giữ máu ở tứ chi không tụt xuống khi đứng</li>
  </ul>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Theo dõi huyết áp tại nhà cho người cao tuổi</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Đo huyết áp đúng cách tại nhà, ghi nhận chuỗi chỉ số theo thời gian và gửi báo cáo về gia đình. Phát hiện sớm bất thường trước khi có triệu chứng nặng.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Gọi 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Nhận tư vấn miễn phí
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Huyết áp bao nhiêu là huyết áp thấp?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Huyết áp tâm thu dưới 90 mmHg hoặc tâm trương dưới 60 mmHg được coi là huyết áp thấp theo định nghĩa. Tuy nhiên, một số người có huyết áp 90/60 mmHg mà không có triệu chứng gì — đây không nhất thiết cần điều trị. Điều quan trọng hơn con số là triệu chứng: chóng mặt khi đứng dậy, mệt mỏi, mờ mắt thoáng qua, hoặc ngất. Khi có triệu chứng, cần tìm nguyên nhân.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Cà phê có giúp tăng huyết áp thấp không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cà phê làm tăng huyết áp tạm thời 3–5 mmHg trong vài giờ. Một số người huyết áp thấp thấy uống cà phê buổi sáng giúp họ tỉnh táo hơn. Tuy nhiên đây không phải biện pháp điều trị và tác dụng chỉ tạm thời. Không nên dùng cà phê như thuốc điều trị huyết áp thấp, đặc biệt với người cao tuổi có bệnh tim mạch.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Huyết áp thấp sau ăn là gì và xử lý thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Huyết áp sau ăn (hypotension postprandiale) là tình trạng huyết áp tụt 20 mmHg trở lên trong vòng 2 giờ sau bữa ăn, gây chóng mặt và dễ ngã. Phổ biến ở người cao tuổi và người dùng thuốc huyết áp. Xử lý: chia nhỏ bữa ăn, hạn chế tinh bột nhanh và rượu trong bữa, uống đủ nước, không đứng dậy nhanh sau ăn, và nghỉ ngơi nằm hoặc ngồi 30 phút sau bữa ăn lớn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Khi nào huyết áp thấp cần đi khám gấp?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cần đi khám gấp khi: huyết áp tụt đột ngột kèm đau ngực, khó thở, hoặc mất ý thức — đây có thể là dấu hiệu nhồi máu cơ tim hoặc rối loạn nhịp tim nặng. Cần đi khám trong ngày khi: huyết áp thấp xuất hiện lần đầu hoặc thay đổi đột ngột, kèm theo tiêu phân đen hoặc nôn ra máu (có thể chảy máu tiêu hóa), hoặc xảy ra sau khi bắt đầu thuốc mới.</p>
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
    "headline": "Chế độ ăn cho người huyết áp thấp: Những điều thực sự có ích và những điều cần thận trọng",
    "description": "Hướng dẫn dinh dưỡng cho người huyết áp thấp: thực phẩm hỗ trợ ổn định huyết áp, cách uống nước đúng và những tình huống cần đi khám thay vì chỉ điều chỉnh ăn uống.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 75,
  slug: "che-do-an-cho-nguoi-huyet-ap-thap",
  oldSlugs: [
    "che-do-an-cho-nguoi-huyet-ap-thap"
  ],
  title: "Chế độ ăn cho người huyết áp thấp: Những điều thực sự có ích và những điều cần thận trọng",
  category: "Dinh dưỡng theo bệnh",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Hướng dẫn dinh dưỡng cho người huyết áp thấp: thực phẩm hỗ trợ ổn định huyết áp, cách uống nước đúng và những tình huống cần đi khám thay vì chỉ điều chỉnh ăn uống.",
  excerpt: "Hướng dẫn dinh dưỡng cho người huyết áp thấp: thực phẩm hỗ trợ ổn định huyết áp, cách uống nước đúng và những tình huống cần đi khám thay vì chỉ điều chỉnh ăn uống.",
  image: "/images/tin-tuc/che-do-an-cho-nguoi-huyet-ap-thap.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 75!');
