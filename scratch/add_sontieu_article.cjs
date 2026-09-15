const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\son_tieu_health_concept_1789441664223.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured && newsData.featured.id !== 87) {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Són tiểu ở người cao tuổi: Vì sao xảy ra và làm gì để cải thiện</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Một trong những vấn đề phổ biến nhất ở tuổi già mà gần như không ai nói ra. Điều đáng tiếc là nhiều trường hợp cải thiện được, nhưng người ta chịu đựng vì nghĩ đó là chuyện đương nhiên.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Són tiểu ở người cao tuổi có nhiều dạng, phổ biến nhất là <strong>són tiểu khi gắng sức</strong> (rò rỉ khi ho, cười, hắt hơi, nâng vật nặng) và <strong>són tiểu cấp kỳ</strong> (buồn tiểu đột ngột và không kịp vào nhà vệ sinh).<br>
      Nguyên nhân thường gặp: suy yếu cơ sàn chậu sau sinh nở và mãn kinh, phì đại tuyến tiền liệt ở nam giới, nhiễm trùng đường tiết niệu, táo bón kéo dài, và tác dụng phụ của một số thuốc.<br>
      <strong>Đây không phải chuyện đương nhiên của tuổi già và nhiều trường hợp cải thiện được</strong> — gia đình nên đưa người thân đi khám thay vì chỉ dùng sản phẩm thấm hút.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phổ biến hơn nhiều người nghĩ</h2>
  <p>Són tiểu là một trong những vấn đề sức khỏe phổ biến nhất ở người cao tuổi, đặc biệt ở phụ nữ. Nhưng vì tế nhị, rất ít người nói ra — kể cả với con cái, kể cả với bác sĩ.</p>
  <p>Hệ quả là nhiều người âm thầm thu hẹp cuộc sống của mình: ngại đi xa, ngại đi chơi cùng bạn bè, ngại ngồi lâu ở nơi công cộng, luôn phải để ý xem nhà vệ sinh ở đâu. Ảnh hưởng đến chất lượng sống lớn hơn nhiều so với vẻ ngoài của vấn đề.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Các dạng són tiểu thường gặp</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Són tiểu khi gắng sức</h3>
  <p>Rò rỉ nước tiểu khi ho, cười, hắt hơi, nâng vật nặng hoặc thay đổi tư thế đột ngột. Nguyên nhân là cơ sàn chậu và cơ thắt niệu đạo suy yếu, không giữ được khi áp lực trong ổ bụng tăng lên.</p>
  <p>Đây là dạng phổ biến nhất ở phụ nữ, liên quan đến sinh nở nhiều lần và thay đổi nội tiết sau mãn kinh.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Són tiểu cấp kỳ</h3>
  <p>Cảm giác buồn tiểu đến đột ngột và rất gấp, không kịp vào nhà vệ sinh. Thường kèm tiểu nhiều lần trong ngày và tiểu đêm.</p>
  <p>Nguyên nhân là bàng quang co bóp quá mức. Có thể liên quan đến bệnh lý thần kinh, đái tháo đường, hoặc không rõ nguyên nhân.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Són tiểu do đầy tràn</h3>
  <p>Bàng quang không tống hết nước tiểu ra được, dẫn đến rò rỉ liên tục lượng nhỏ. Ở nam giới, nguyên nhân phổ biến là phì đại tuyến tiền liệt gây cản trở dòng tiểu.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Són tiểu do hạn chế vận động</h3>
  <p>Người bệnh vẫn kiểm soát được nhưng không kịp đi đến nhà vệ sinh do đi lại chậm, đau khớp, hoặc nhà vệ sinh ở xa. Đây là dạng có thể cải thiện bằng thay đổi bố trí nhà cửa mà không cần thuốc.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Những nguyên nhân có thể xử lý được</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Nguyên nhân</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Cách xử lý</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Suy yếu cơ sàn chậu</td>
          <td style="padding: 0.8rem 1rem;">Bài tập Kegel, vật lý trị liệu sàn chậu</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nhiễm trùng đường tiết niệu</td>
          <td style="padding: 0.8rem 1rem;">Điều trị kháng sinh theo chỉ định bác sĩ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Táo bón kéo dài</td>
          <td style="padding: 0.8rem 1rem;">Điều chỉnh chế độ ăn, tăng nước và chất xơ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Phì đại tuyến tiền liệt</td>
          <td style="padding: 0.8rem 1rem;">Điều trị nội khoa hoặc can thiệp theo chỉ định</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tác dụng phụ của thuốc</td>
          <td style="padding: 0.8rem 1rem;">Rà soát thuốc với bác sĩ, có thể đổi loại</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thừa cân</td>
          <td style="padding: 0.8rem 1rem;">Giảm cân làm giảm áp lực lên bàng quang</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nhà vệ sinh xa hoặc khó tiếp cận</td>
          <td style="padding: 0.8rem 1rem;">Bố trí lại, lắp tay vịn, dùng bô đặt gần giường ban đêm</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Bảng trên cho thấy một điều quan trọng: <strong>phần lớn nguyên nhân đều có hướng xử lý</strong>. Đây là lý do không nên chấp nhận són tiểu như số phận.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ lưu ý về các loại thuốc</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Một số nhóm thuốc có thể góp phần gây hoặc làm nặng thêm són tiểu, trong đó có thuốc lợi tiểu, một số thuốc huyết áp, thuốc an thần và thuốc ngủ. Nếu són tiểu xuất hiện hoặc nặng lên sau khi bắt đầu một thuốc mới, đây là thông tin cần báo với bác sĩ — đừng tự ngừng thuốc.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thay đổi sinh hoạt giúp cải thiện</h2>
  <p><strong>Tập đi vệ sinh theo giờ.</strong> Đi vệ sinh theo lịch cố định mỗi 2-3 tiếng, kể cả khi chưa buồn. Cách này giúp bàng quang không bị đầy quá mức và giảm số lần són bất ngờ.</p>
  <p><strong>Uống đủ nước nhưng phân bổ hợp lý.</strong> Uống đủ trong ngày, giảm lượng sau 18 giờ. Uống ít nước không giúp gì mà còn làm nặng thêm.</p>
  <p><strong>Hạn chế chất kích thích bàng quang.</strong> Cà phê, trà đặc, nước có ga và rượu đều kích thích bàng quang.</p>
  <p><strong>Xử lý táo bón.</strong> Phân ứ trong trực tràng chèn ép bàng quang và làm nặng thêm són tiểu.</p>
  <p><strong>Bố trí nhà cửa thuận tiện.</strong> Đường đi đến nhà vệ sinh không có vật cản, có đèn ban đêm, có tay vịn. Với người đi lại khó khăn, cân nhắc đặt bô di động gần giường vào ban đêm.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Sản phẩm hỗ trợ trong giai đoạn này</h2>
  <p>Trong khi tìm nguyên nhân và điều trị, sản phẩm thấm hút giúp người cao tuổi sinh hoạt bình thường và không phải thu hẹp cuộc sống.</p>
  <p>Ở mức độ nhẹ, sản phẩm phù hợp là <strong>miếng lót són tiểu</strong> — mỏng, dán vào quần lót, kín đáo dưới quần áo. Không nên dùng băng vệ sinh thay thế vì cấu tạo lõi thấm khác nhau, dẫn đến thấm chậm và có mùi.</p>
  <p>Quan trọng: sản phẩm thấm hút là <strong>giải pháp hỗ trợ trong quá trình điều trị</strong>, không phải giải pháp thay thế việc đi khám.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Cách nói chuyện với bố mẹ về vấn đề này</h2>
  <p>Đây là chủ đề nhạy cảm và nhiều người cao tuổi phủ nhận khi được hỏi thẳng. Vài cách tiếp cận thường hiệu quả hơn:</p>
  <p>Đề cập gián tiếp qua thông tin chung — kể rằng đây là vấn đề rất nhiều người gặp và có cách điều trị, thay vì hỏi trực tiếp bố mẹ có bị không.</p>
  <p>Đóng khung việc đi khám như kiểm tra sức khỏe tổng quát, không phải khám riêng vấn đề tế nhị.</p>
  <p>Nếu phát hiện dấu hiệu qua quan sát — quần áo, ga giường, mùi trong phòng — xử lý kín đáo và không nhắc đến trước mặt người khác. Giữ thể diện là điều quan trọng nhất khi bàn về chủ đề này.</p>

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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Són tiểu có chữa khỏi được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nhiều trường hợp cải thiện rõ rệt hoặc khỏi hẳn, tùy nguyên nhân. Són tiểu do suy yếu cơ sàn chậu thường đáp ứng tốt với bài tập Kegel và vật lý trị liệu sàn chậu. Són tiểu do nhiễm trùng tiết niệu khỏi sau điều trị kháng sinh. Són tiểu do phì đại tuyến tiền liệt cải thiện sau điều trị bệnh gốc. Có trường hợp cần can thiệp phẫu thuật. Điều quan trọng là phải đi khám để xác định nguyên nhân.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bài tập Kegel là gì và tập thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Kegel là bài tập co và giữ nhóm cơ sàn chậu — nhóm cơ dùng để nhịn tiểu. Cách nhận biết cơ này: khi đang đi tiểu, thử ngưng dòng tiểu lại, nhóm cơ vừa co chính là cơ sàn chậu. Sau khi nhận biết được, tập bằng cách co giữ 5 giây rồi thả 5 giây, lặp lại 10 lần, ngày 3 lần. Lưu ý không tập bằng cách ngưng dòng tiểu thường xuyên vì có thể gây hại. Hiệu quả thường thấy sau 6-12 tuần tập đều.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Uống ít nước có giảm són tiểu không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không nên và có thể gây hại. Uống ít nước làm nước tiểu cô đặc, gây kích thích bàng quang mạnh hơn và làm són tiểu nặng thêm, đồng thời tăng nguy cơ nhiễm trùng tiết niệu và táo bón. Cách đúng là uống đủ nước trong ngày nhưng giảm lượng nước sau 18 giờ để hạn chế tiểu đêm. Nên hạn chế cà phê, trà đặc và rượu vì chúng kích thích bàng quang.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Khi nào cần đi khám ngay?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cần đi khám sớm nếu són tiểu xuất hiện đột ngột, kèm đau rát khi tiểu, nước tiểu đục hoặc có máu, sốt, đau vùng thắt lưng — đây có thể là nhiễm trùng đường tiết niệu cần điều trị. Cũng cần khám nếu són tiểu xuất hiện sau khi bắt đầu một loại thuốc mới, hoặc kèm theo yếu chân, tê bì — có thể liên quan đến vấn đề thần kinh.</p>
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
    "headline": "Són tiểu ở người cao tuổi: Vì sao xảy ra và làm gì để cải thiện",
    "description": "Són tiểu khi ho, cười, hắt hơi rất phổ biến ở người lớn tuổi nhưng ít ai nói ra. Nguyên nhân, cách điều trị và sản phẩm hỗ trợ phù hợp từng mức độ.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: 87,
  slug: "son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap",
  oldSlugs: [
    "kien-thuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap",
    "tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap"
  ],
  title: "Són tiểu ở người cao tuổi: Vì sao xảy ra và làm gì để cải thiện",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Són tiểu khi ho, cười, hắt hơi rất phổ biến ở người lớn tuổi nhưng ít ai nói ra. Nguyên nhân, cách điều trị và sản phẩm hỗ trợ phù hợp từng mức độ.",
  excerpt: "Són tiểu khi ho, cười, hắt hơi rất phổ biến ở người lớn tuổi nhưng ít ai nói ra. Nguyên nhân, cách điều trị và sản phẩm hỗ trợ phù hợp từng mức độ.",
  image: "/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 87 to news.json!');
