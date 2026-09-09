const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\phong_nga_purple_uniform_1788922575727.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/phong-nga-nguoi-cao-tuoi-mua-lanh.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Convert current featured article to normal article in list if exists
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Phòng ngã cho người cao tuổi mùa lạnh: Đánh giá nguy cơ và 10 thay đổi thiết thực trong nhà</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Ngã gây hậu quả nghiêm trọng hơn nhiều so với hầu hết gia đình hình dung. Và hầu hết các vụ ngã trong nhà đều có thể phòng tránh được bằng những thay đổi không tốn nhiều tiền.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Nguy cơ ngã của người cao tuổi tăng cao trong mùa lạnh do ba yếu tố:
      <strong>sàn nhà ẩm và trơn hơn</strong>, <strong>quần áo dày làm hạn chế di chuyển</strong>,
      và <strong>huyết áp dao động nhiều hơn khi đứng dậy đột ngột</strong>.
      Mười thay đổi phòng ngã hiệu quả nhất trong nhà:
      lắp tay vịn phòng tắm và cầu thang, dùng thảm chống trượt, đảm bảo đủ ánh sáng đặc biệt
      ban đêm, dùng dép đế bám trong nhà, và không để đồ vật lộn xộn trên lối đi.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/dinh-duong-mua-lanh-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dinh dưỡng mùa lạnh cho người cao tuổi: Ăn gì để tăng đề kháng và giữ ấm cơ thể
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Hậu quả của ngã ở người cao tuổi thường nặng hơn nhiều người nghĩ</h2>
  <p>Ngã không chỉ là vấn đề vật lý — nó thay đổi cuộc sống của người cao tuổi và gia đình theo nhiều cách. Tại Việt Nam, ngã là nguyên nhân hàng đầu gây chấn thương cần nhập viện ở người từ 65 tuổi trở lên.</p>
  <p>Hậu quả trực tiếp: gãy xương (đặc biệt cổ xương đùi — cần phẫu thuật và thời gian phục hồi dài), chấn thương đầu, rách da và bầm tím. Hậu quả gián tiếp: sợ ngã lại khiến người cao tuổi tự hạn chế vận động, dẫn đến yếu cơ nhanh hơn, cô đơn xã hội, và trầm cảm. Nhiều nghiên cứu cho thấy sau một lần ngã nghiêm trọng, khả năng sống độc lập của người cao tuổi giảm sút đáng kể.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao mùa lạnh làm tăng nguy cơ ngã</h2>
  <p>Giao mùa và mùa lạnh tạo ra thêm một số yếu tố nguy cơ:</p>
  <p><strong>Sàn nhà ẩm hơn.</strong> Độ ẩm tăng cao, người vào nhà mang theo nước từ mưa — sàn nhà trơn hơn đặc biệt gần cửa vào và phòng tắm.</p>
  <p><strong>Quần áo dày cứng hơn.</strong> Mặc nhiều lớp quần áo hoặc mặc áo khoác dày trong nhà hạn chế phạm vi vận động và làm nặng hơn, khiến phản xạ thăng bằng chậm hơn.</p>
  <p><strong>Huyết áp dao động nhiều hơn.</strong> Nhiệt độ thấp làm mạch máu co lại và huyết áp tăng. Sự dao động lớn hơn khi thay đổi tư thế — đứng dậy từ giường sau một đêm ngủ trong phòng lạnh — làm tăng nguy cơ chóng mặt.</p>
  <p><strong>Ít ánh sáng tự nhiên hơn.</strong> Ngày ngắn hơn, nhiều gia đình bật đèn ít hơn — nhất là ban đêm khi người cao tuổi dậy đi vệ sinh.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Đánh giá nguy cơ ngã cá nhân</h2>
  <p>Người cao tuổi có nguy cơ ngã cao hơn nếu có từ hai yếu tố sau trở lên:</p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Đã từng ngã trong 12 tháng qua (kể cả ngã nhẹ)</li>
    <li>Cần bám vào đồ vật khi đứng dậy hoặc đi lại</li>
    <li>Thường xuyên chóng mặt khi đứng dậy đột ngột</li>
    <li>Mắt kém — không đeo kính hoặc đang chờ phẫu thuật đục thủy tinh thể</li>
    <li>Đang dùng từ 4 loại thuốc trở lên, đặc biệt thuốc ngủ, thuốc huyết áp, thuốc lợi tiểu</li>
    <li>Đau khớp ảnh hưởng đến dáng đi</li>
    <li>Đã được chẩn đoán loãng xương hoặc Parkinson</li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Mười thay đổi trong nhà — hiệu quả và không tốn nhiều tiền</h2>
  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Vị trí</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Thay đổi cần làm</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Phòng tắm</td>
          <td style="padding: 0.8rem 1rem;">Lắp tay vịn cạnh bồn cầu và vòi tắm; dùng thảm cao su chống trượt trong và ngoài bồn tắm</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cầu thang</td>
          <td style="padding: 0.8rem 1rem;">Đảm bảo tay vịn vững chắc cả hai bên; dán băng chống trượt trên mỗi bậc</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Phòng ngủ</td>
          <td style="padding: 0.8rem 1rem;">Lắp đèn ngủ tự động hoặc đèn cảm ứng đường đi đến nhà vệ sinh; để đồ dùng quen thuộc trong tầm với từ giường</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Lối đi</td>
          <td style="padding: 0.8rem 1rem;">Dọn dẹp dây điện, thảm nhỏ dễ trượt, đồ vật để dưới sàn trên lối đi</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Toàn nhà</td>
          <td style="padding: 0.8rem 1rem;">Đảm bảo đủ ánh sáng tất cả các phòng; dùng dép có đế bám tốt, không đi tất trơn trên sàn</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về dụng cụ hỗ trợ đi lại</h2>
  <p>Gậy chống và khung tập đi giảm nguy cơ ngã đáng kể, nhưng nhiều người cao tuổi Việt Nam từ chối dùng vì cảm thấy "trông già" hoặc lo người khác thấy. Đây là tâm lý cần được gia đình khéo léo giải quyết — dụng cụ hỗ trợ là công cụ giữ an toàn và duy trì độc lập, không phải biểu hiện của sự yếu đuối.</p>
  <p>Nếu bố mẹ cần gậy nhưng chưa sẵn sàng dùng thường xuyên, có thể bắt đầu bằng cách đặt gậy sẵn ở những điểm nguy hiểm nhất trong nhà — cạnh giường, cạnh bồn cầu — để dùng khi cần mà không phải mang theo suốt.</p>

  <!-- CTA DỊCH VỤ AN TÂM NHÀ CỬA - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Nhà bố mẹ có đang an toàn không?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE rà soát các điểm rủi ro trong nhà và hỗ trợ xử lý những việc nặng nguy hiểm. Dịch vụ An tâm nhà cửa từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ngã ở người cao tuổi có nguy hiểm hơn người trẻ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, đáng kể. Người cao tuổi có xương dễ gãy hơn do loãng xương, đặc biệt tại cổ xương đùi, cột sống và cổ tay. Gãy cổ xương đùi ở người cao tuổi có tỷ lệ tử vong trong năm đầu khoảng 20–30% do biến chứng nằm lâu. Ngoài ra, sau một lần ngã, nỗi sợ ngã lại khiến người cao tuổi ít vận động hơn, dẫn đến yếu cơ nhanh hơn và nghịch lý là lại dễ ngã hơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi có nên uống thuốc loãng xương không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Quyết định này cần dựa trên đánh giá của bác sĩ dựa trên đo mật độ xương (DEXA scan), tiền sử gia đình và các yếu tố nguy cơ cá nhân. Không phải tất cả người cao tuổi đều cần thuốc loãng xương. Bổ sung canxi và vitamin D đầy đủ là bước đầu tiên cho hầu hết mọi người. Gia đình nên đưa bố mẹ đi đo mật độ xương nếu chưa làm, đặc biệt phụ nữ sau mãn kinh.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sau khi bố mẹ ngã, cần làm gì đầu tiên?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không đỡ người ngã đứng dậy ngay. Đầu tiên hỏi xem có đau ở đâu không, đặc biệt hỏi về đau hông, lưng, đầu gối. Nếu kêu đau nhiều hoặc không thể đứng lên — gọi cấp cứu 115, không cố đỡ dậy vì có thể làm nặng thêm gãy xương. Nếu người ngã tỉnh táo, không đau nhiều và có thể tự ngồi dậy — giúp đỡ chậm rãi, theo dõi tiếp 24–48 giờ vì một số chấn thương như chảy máu trong sọ biểu hiện chậm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tập thể dục có giúp giảm nguy cơ ngã không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và đây là biện pháp được chứng minh hiệu quả nhất. Các bài tập thăng bằng và sức mạnh cơ chân giảm nguy cơ ngã tới 23% theo các nghiên cứu tổng hợp. Thái cực quyền là bài tập được nghiên cứu nhiều nhất và chứng minh giảm nguy cơ ngã ở người cao tuổi. Bài tập đứng một chân và ngồi-đứng từ ghế cũng rất hiệu quả và có thể tập tại nhà với điểm tựa an toàn.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Phòng ngã cho người cao tuổi mùa lạnh: Đánh giá nguy cơ và 10 thay đổi thiết thực trong nhà",
    "description": "Ngã là nguyên nhân chấn thương hàng đầu ở người cao tuổi, và nguy cơ tăng rõ rệt trong mùa lạnh. Đánh giá nguy cơ cá nhân và 10 thay đổi đơn giản trong nhà.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 72,
  slug: "phong-nga-nguoi-cao-tuoi-mua-lanh",
  oldSlugs: [
    "phong-nga-nguoi-cao-tuoi-mua-lanh"
  ],
  title: "Phòng ngã cho người cao tuổi mùa lạnh: Đánh giá nguy cơ và 10 thay đổi thiết thực trong nhà",
  category: "An toàn người cao tuổi",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Ngã là nguyên nhân chấn thương hàng đầu ở người cao tuổi, và nguy cơ tăng rõ rệt trong mùa lạnh. Đánh giá nguy cơ cá nhân và 10 thay đổi đơn giản trong nhà.",
  excerpt: "Ngã là nguyên nhân chấn thương hàng đầu ở người cao tuổi, và nguy cơ tăng rõ rệt trong mùa lạnh. Đánh giá nguy cơ cá nhân và 10 thay đổi đơn giản trong nhà.",
  image: "/images/tin-tuc/phong-nga-nguoi-cao-tuoi-mua-lanh.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 72!');
