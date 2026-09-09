const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\giac_ngu_purple_uniform_1788922659090.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap.jpg');

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
    <h1 itemprop="headline">Rối loạn giấc ngủ ở người cao tuổi: Khi nào là bình thường và khi nào cần đi khám</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Ngủ ít đi theo tuổi là bình thường, nhưng không ngủ được là bệnh. Ranh giới này quan trọng vì hai tình trạng cần cách xử trí hoàn toàn khác nhau — và thuốc ngủ thường không phải giải pháp tốt nhất.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Thay đổi giấc ngủ bình thường theo tuổi gồm: ngủ ít giờ hơn (6–7 tiếng thay vì 8),
      thức dậy sớm hơn, ngủ nhẹ hơn và dễ thức giữa đêm. Đây không phải bệnh và không cần điều trị.
      Cần đi khám khi: <strong>khó vào giấc hơn 30 phút thường xuyên, thức giữa đêm và không ngủ lại được,
      buồn ngủ ban ngày ảnh hưởng đến sinh hoạt, ngáy to kèm ngưng thở, hoặc bứt rứt chân tay về đêm</strong>.
      Những biểu hiện này có thể là triệu chứng của bệnh lý cần điều trị, không phải
      chỉ cần uống thuốc ngủ.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/phong-nga-nguoi-cao-tuoi-mua-lanh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Phòng ngã cho người cao tuổi mùa lạnh: Đánh giá nguy cơ và 10 thay đổi thiết thực trong nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dinh-duong-mua-lanh-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dinh dưỡng mùa lạnh cho người cao tuổi: Ăn gì để tăng đề kháng và giữ ấm cơ thể
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thay đổi giấc ngủ bình thường theo tuổi — và những gì không bình thường</h2>
  <p>Lão hóa tự nhiên làm thay đổi kiến trúc giấc ngủ theo một số cách nhất định. Hiểu được ranh giới giữa thay đổi bình thường và bệnh lý giúp gia đình không lo lắng không cần thiết và cũng không bỏ qua những dấu hiệu thực sự cần điều trị.</p>
  <p><strong>Bình thường theo tuổi:</strong> ngủ ít giờ hơn tổng cộng, thức dậy sớm hơn (đồng hồ sinh học dịch về phía sáng), ngủ nhẹ hơn và dễ thức bởi tiếng động, mất nhiều thời gian hơn để vào giấc, thức dậy giữa đêm 1–2 lần để đi vệ sinh.</p>
  <p><strong>Không bình thường — cần đánh giá:</strong> mất hơn 30 phút để vào giấc thường xuyên, thức giữa đêm và không ngủ lại được, buồn ngủ ban ngày nhiều đến mức ảnh hưởng sinh hoạt, ngáy to và có khoảng ngưng thở, bứt rứt chân tay về đêm khó chịu phải di chuyển để dịu bớt.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nguyên nhân thực sự cần tìm và điều trị</h2>
  <p>Mất ngủ ở người cao tuổi hiếm khi là vô căn — hầu như luôn có nguyên nhân cụ thể. Điều trị đúng nguyên nhân thường hiệu quả hơn nhiều so với uống thuốc ngủ:</p>
  <p><strong>Đau mạn tính.</strong> Đau khớp, đau thần kinh, đau lưng khiến khó vào giấc và dễ thức giữa đêm. Điều trị đau tốt hơn thường cải thiện giấc ngủ rõ rệt.</p>
  <p><strong>Tiểu đêm nhiều lần.</strong> Tiểu đêm trên 2 lần thường xuyên ảnh hưởng đáng kể đến chất lượng giấc ngủ và cần được đánh giá nguyên nhân — phì đại tuyến tiền liệt, bàng quang hoạt động quá mức, tác dụng phụ của thuốc lợi tiểu (nếu uống nên chuyển sang buổi sáng).</p>
  <p><strong>Ngưng thở khi ngủ.</strong> Rất phổ biến ở người cao tuổi, đặc biệt người thừa cân. Làm giảm chất lượng giấc ngủ nghiêm trọng và tăng nguy cơ tim mạch. Điều trị bằng máy CPAP hiệu quả cao nhưng cần chẩn đoán xác nhận tại phòng khám giấc ngủ.</p>
  <p><strong>Tác dụng phụ của thuốc.</strong> Nhiều thuốc gây mất ngủ hoặc ngủ không sâu: một số thuốc huyết áp, corticosteroid, thuốc lợi tiểu, thuốc kích thích thần kinh, và tác dụng ngược của một số thuốc ngủ dùng lâu dài. Rà soát thuốc với bác sĩ có thể giải quyết được mất ngủ.</p>
  <p><strong>Trầm cảm và lo âu.</strong> Thức dậy sớm và không ngủ lại được là triệu chứng điển hình của trầm cảm ở người cao tuổi. Điều trị trầm cảm thường cải thiện giấc ngủ.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Cải thiện giấc ngủ không dùng thuốc</h2>
  <p>Các biện pháp vệ sinh giấc ngủ được khuyến nghị hàng đầu trước khi dùng thuốc:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Biện pháp</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Cách thực hiện</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Giờ ngủ và thức cố định</td>
          <td style="padding: 0.8rem 1rem;">Thức dậy và đi ngủ cùng một giờ mỗi ngày, kể cả cuối tuần — kể cả khi đêm trước ngủ ít</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Hạn chế ngủ ngày</td>
          <td style="padding: 0.8rem 1rem;">Nếu cần ngủ trưa, ngủ trước 15 giờ và không quá 30 phút</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Môi trường phòng ngủ</td>
          <td style="padding: 0.8rem 1rem;">Tối, mát (20–22 độ), yên tĩnh; chỉ dùng giường cho ngủ và nghỉ ngơi</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tránh màn hình trước khi ngủ</td>
          <td style="padding: 0.8rem 1rem;">Tắt điện thoại, TV ít nhất 1 giờ trước giờ ngủ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Vận động ban ngày</td>
          <td style="padding: 0.8rem 1rem;">Tập thể dục đều đặn giúp ngủ sâu hơn, nhưng tránh tập trong 3 giờ trước ngủ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Về trà thảo mộc và các biện pháp dân gian</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Trà hoa cúc, trà gừng, trà tâm sen là lựa chọn an toàn và có thể giúp thư giãn trước khi ngủ. Tuy nhiên không có bằng chứng mạnh về hiệu quả điều trị mất ngủ mạn tính. Rượu — dù nhiều người cao tuổi dùng để dễ ngủ — thực ra làm tăng thức giữa đêm và giảm chất lượng giấc ngủ về sau. Không khuyến nghị dùng rượu như biện pháp hỗ trợ giấc ngủ.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào cần đến bác sĩ</h2>
  <p>Đến khám nếu mất ngủ:</p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Kéo dài hơn 3 tuần mà không cải thiện dù đã thử các biện pháp vệ sinh giấc ngủ</li>
    <li>Kèm theo triệu chứng khác như đau ngực, khó thở, bứt rứt chân tay về đêm</li>
    <li>Liên quan đến ngáy to và có khoảng ngưng thở (ngưng thở khi ngủ)</li>
    <li>Kèm theo thay đổi tâm trạng rõ ràng, mất hứng thú với mọi thứ (có thể là trầm cảm)</li>
    <li>Ảnh hưởng đến an toàn — buồn ngủ nhiều làm tăng nguy cơ ngã hoặc tai nạn</li>
  </ul>

  <p>Đừng chỉ xin thuốc ngủ khi đi khám — hãy mô tả đầy đủ kiểu mất ngủ (khó vào giấc, thức giữa đêm hay dậy sớm), thời gian bắt đầu, và những gì có thể liên quan. Bác sĩ cần thông tin này để tìm nguyên nhân, không phải chỉ kê thuốc ngủ theo triệu chứng.</p>

  <!-- CTA DỊCH VỤ ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ đang ngủ không tốt và bạn lo lắng?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE theo dõi các chỉ số sức khỏe liên quan đến giấc ngủ và giúp gia đình nhận ra các dấu hiệu cần đưa đi khám. Từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi ngủ bao nhiêu tiếng mỗi đêm là đủ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không có con số cố định cho mọi người. Người cao tuổi thường ngủ 6–7 tiếng đêm — ít hơn người trẻ — và đây là bình thường. Thước đo quan trọng hơn số giờ là chất lượng: dậy cảm thấy tỉnh táo và đủ năng lượng cho hoạt động ban ngày, không buồn ngủ quá mức. Nếu ngủ đủ giờ nhưng vẫn mệt và buồn ngủ ngày, đây là dấu hiệu cần đánh giá chất lượng giấc ngủ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Thuốc ngủ có an toàn cho người cao tuổi không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nhóm thuốc ngủ benzodiazepine và Z-drugs (như zolpidem) được khuyến nghị dùng thận trọng và hạn chế ở người cao tuổi vì làm tăng nguy cơ ngã, tai nạn và suy giảm nhận thức. Không nên dùng quá 2–4 tuần và cần có chỉ định của bác sĩ. Nếu mất ngủ mạn tính, phương pháp điều trị hành vi nhận thức (CBT-I) được chứng minh hiệu quả hơn thuốc về lâu dài và không có tác dụng phụ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ngủ ngày nhiều ở người cao tuổi có đáng lo không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tùy mức độ. Ngủ trưa 20–30 phút là bình thường và có thể có lợi. Nhưng ngủ ngày quá nhiều (trên 2 tiếng), khó đánh thức, hoặc lơ mơ nhiều ban ngày có thể là dấu hiệu của: giấc ngủ đêm kém chất lượng do ngưng thở khi ngủ, tác dụng phụ của thuốc, suy tim hoặc thiếu máu, hoặc suy giảm nhận thức. Không nên coi ngủ ngày nhiều là bình thường của tuổi già mà không kiểm tra nguyên nhân.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Chứng ngưng thở khi ngủ ở người cao tuổi có dấu hiệu gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Người xung quanh thường phát hiện trước người bệnh: ngáy to xen kẽ với khoảng im lặng rồi thở hổn hển. Người bệnh thường thức dậy không tỉnh táo dù ngủ đủ giờ, đau đầu buổi sáng, buồn ngủ nhiều ban ngày. Ngưng thở khi ngủ làm tăng đáng kể nguy cơ tăng huyết áp, rối loạn nhịp tim và đột quỵ — cần được chẩn đoán và điều trị, không phải bỏ qua.</p>
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
    "headline": "Rối loạn giấc ngủ ở người cao tuổi: Khi nào là bình thường và khi nào cần đi khám",
    "description": "Hơn 50% người cao tuổi có vấn đề về giấc ngủ. Nguyên nhân thực sự, các bệnh lý liên quan cần điều trị và cách cải thiện giấc ngủ không cần dùng thuốc ngủ.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 73,
  slug: "giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap",
  oldSlugs: [
    "giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap"
  ],
  title: "Rối loạn giấc ngủ ở người cao tuổi: Khi nào là bình thường và khi nào cần đi khám",
  category: "Sức khỏe người cao tuổi",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Hơn 50% người cao tuổi có vấn đề về giấc ngủ. Nguyên nhân thực sự, các bệnh lý liên quan cần điều trị và cách cải thiện giấc ngủ không cần dùng thuốc ngủ.",
  excerpt: "Hơn 50% người cao tuổi có vấn đề về giấc ngủ. Nguyên nhân thực sự, các bệnh lý liên quan cần điều trị và cách cải thiện giấc ngủ không cần dùng thuốc ngủ.",
  image: "/images/tin-tuc/giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 73!');
