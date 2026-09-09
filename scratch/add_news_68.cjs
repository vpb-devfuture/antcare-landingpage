const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 68) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Tiểu đường type 2 ở người cao tuổi thường không có triệu chứng rõ ràng trong nhiều năm. Nhận biết 6 dấu hiệu thường bị bỏ qua và hướng dẫn theo dõi đường huyết tại nhà.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Khoảng 15–20% người Việt Nam trên 60 tuổi mắc tiểu đường type 2, nhưng phần lớn không biết mình mắc bệnh cho đến khi có biến chứng. Phát hiện sớm thay đổi hoàn toàn kết quả điều trị.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Sáu dấu hiệu tiểu đường ở người cao tuổi thường bị bỏ qua:
      <strong>hay khát nước và uống nhiều hơn bình thường, tiểu đêm nhiều lần,
      mờ mắt thoáng qua, vết thương lâu lành, hay bị nhiễm trùng tái đi tái lại,
      và mệt mỏi không rõ nguyên nhân sau ăn</strong>.
      Không như người trẻ, người cao tuổi hiếm khi có đủ ba triệu chứng điển hình
      (ăn nhiều, uống nhiều, tiểu nhiều) cùng lúc. Chẩn đoán cần xét nghiệm đường huyết,
      không thể dựa vào triệu chứng.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/cum-mua-2026-nguoi-cao-tuoi-nen-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cúm mùa 2026 tăng mạnh toàn cầu: Những điều người cao tuổi và gia đình cần biết
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/sot-xuat-huyet-mua-mua-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Sốt xuất huyết mùa mưa 2026: Vì sao nguy hiểm hơn với người cao tuổi
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tại sao tiểu đường dễ bỏ sót ở người cao tuổi</h2>
  <p>Triệu chứng điển hình của tiểu đường — ăn nhiều, uống nhiều, tiểu nhiều, sụt cân — thường xuất hiện khi đường huyết đã rất cao. Trong giai đoạn đầu và giai đoạn tiền tiểu đường, hầu hết không có triệu chứng gì.</p>
  <p>Thêm vào đó, một số triệu chứng của tiểu đường ở người cao tuổi dễ bị nhầm với biểu hiện bình thường của lão hóa: mệt mỏi, mờ mắt, tiểu đêm, vết thương lâu lành. Gia đình và đôi khi cả người bệnh cho rằng đây là chuyện đương nhiên của tuổi già.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Sáu dấu hiệu thường bị bỏ qua</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">1. Hay khát và uống nhiều nước hơn bình thường</h3>
  <p>Đường huyết cao khiến thận phải lọc nhiều hơn để thải đường ra ngoài, dẫn đến mất nước và cảm giác khát. Ở người cao tuổi, cảm giác khát vốn đã kém nhạy cảm hơn, nên dấu hiệu này đôi khi không rõ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">2. Tiểu đêm nhiều lần</h3>
  <p>Tiểu đêm ở người cao tuổi có nhiều nguyên nhân (bàng quang hoạt động quá mức, phì đại tuyến tiền liệt ở nam). Nhưng nếu tiểu đêm xuất hiện hoặc tăng lên đột ngột, kèm theo nước tiểu có mùi ngọt hoặc sủi bọt, đây là dấu hiệu cần xét nghiệm đường huyết.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">3. Mờ mắt thoáng qua</h3>
  <p>Đường huyết cao làm thay đổi áp suất thẩm thấu trong thủy tinh thể, gây mờ mắt thay đổi theo ngày — thường mờ hơn sau bữa ăn và rõ hơn khi đói. Nhiều người tưởng đây là biểu hiện của lão thị bình thường.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">4. Vết thương lâu lành</h3>
  <p>Đường huyết cao làm giảm lưu thông máu và suy giảm miễn dịch tại chỗ. Một vết xước nhỏ ở bàn chân mà sau 2 tuần vẫn chưa lành là dấu hiệu đáng chú ý — đặc biệt ở bàn chân, nơi biến chứng tiểu đường nghiêm trọng nhất thường xuất hiện.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">5. Hay bị nhiễm trùng tái đi tái lại</h3>
  <p>Nhiễm trùng nấm (đặc biệt ở vùng kín), nhiễm trùng đường tiểu tái phát, hay bị nhọt và viêm da — những tình trạng này phổ biến hơn ở người có đường huyết cao vì môi trường đường cao thuận lợi cho vi khuẩn và nấm phát triển.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">6. Mệt mỏi sau ăn</h3>
  <p>Cảm giác buồn ngủ và mệt mỏi khoảng 1–2 giờ sau bữa ăn, đặc biệt sau bữa nhiều tinh bột, là dấu hiệu của đường huyết tăng đột ngột sau ăn. Nhiều người cao tuổi quen với cảm giác này và cho rằng đó là bình thường.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Ai cần xét nghiệm đường huyết ngay cả khi không có triệu chứng</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Người từ 45 tuổi trở lên nên xét nghiệm đường huyết lúc đói ít nhất mỗi năm một lần. Xét nghiệm sớm hơn và thường xuyên hơn nếu có một trong các yếu tố: thừa cân béo phì, tiền sử gia đình có tiểu đường, tăng huyết áp, rối loạn mỡ máu, hoặc tiểu đường thai kỳ.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Theo dõi đường huyết tại nhà</h2>
  <p>Máy đo đường huyết cá nhân có giá phổ thông và dễ sử dụng. Với người đã được chẩn đoán tiểu đường, lịch đo do bác sĩ điều trị quyết định. Với người chưa được chẩn đoán nhưng muốn theo dõi phòng ngừa, đo đường huyết lúc đói mỗi 1–2 tuần là đủ.</p>
  <p>Hai chỉ số cần nhớ: đường huyết lúc đói mục tiêu (khi đã điều trị) thường là 4–7 mmol/L, đường huyết sau ăn 2 giờ dưới 10 mmol/L. Với người cao tuổi có nhiều bệnh nền hoặc đã cao tuổi nhiều, bác sĩ thường đặt mục tiêu rộng hơn để tránh hạ đường huyết.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Biến chứng nguy hiểm nhất cần phòng ngừa</h2>
  <p>Với người cao tuổi, ba biến chứng tiểu đường cần chú ý nhất là:</p>
  <p><strong>Biến chứng bàn chân.</strong> Mất cảm giác ở bàn chân do tổn thương thần kinh khiến người bệnh không cảm thấy vết thương. Kiểm tra bàn chân hằng ngày, không đi chân trần, cắt móng ngang và đến cơ sở y tế ngay khi có vết thương dù nhỏ.</p>
  <p><strong>Biến chứng mắt.</strong> Đái tháo đường retinopathy có thể dẫn đến mù lòa nếu không điều trị. Người tiểu đường cần khám mắt chuyên khoa mỗi năm một lần dù không có triệu chứng về mắt.</p>
  <p><strong>Biến chứng thận.</strong> Thận lọc máu liên tục bị tổn thương bởi đường huyết cao. Xét nghiệm protein niệu và creatinine mỗi năm để phát hiện suy thận sớm.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ chưa được xét nghiệm đường huyết gần đây?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón đi xét nghiệm, theo dõi kết quả và nhắc lịch tái khám định kỳ. Phát hiện sớm giúp điều trị hiệu quả hơn rất nhiều.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Đường huyết bao nhiêu là tiểu đường?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Theo tiêu chuẩn hiện hành: đường huyết lúc đói từ 7,0 mmol/L (126 mg/dL) trở lên trong hai lần đo khác nhau là tiêu chuẩn chẩn đoán tiểu đường. Đường huyết lúc đói từ 5,6–6,9 mmol/L được gọi là tiền tiểu đường — giai đoạn có thể đảo ngược nếu thay đổi lối sống kịp thời. HbA1c từ 6,5% trở lên cũng là một trong các tiêu chuẩn chẩn đoán.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người tiểu đường có thể ăn cơm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, nhưng cần điều chỉnh lượng và cách ăn. Cơm trắng có chỉ số đường huyết cao, nên thay một phần bằng gạo lứt, yến mạch hoặc khoai lang. Ăn cơm cùng với rau và protein (cá, thịt, đậu) giúp làm chậm hấp thu đường hơn so với ăn cơm đơn. Điều quan trọng nhất là khẩu phần — ăn ít hơn nhưng đủ bữa, không nhịn đói kéo dài.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Hạ đường huyết ở người cao tuổi nguy hiểm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Rất nguy hiểm và thường ít được chú ý đúng mức. Hạ đường huyết ở người cao tuổi có thể biểu hiện không điển hình: thay vì run tay và vã mồ hôi như người trẻ, người cao tuổi có thể chỉ lú lẫn, buồn ngủ bất thường, hoặc ngã. Hạ đường huyết nặng có thể gây mất ý thức và nguy hiểm tính mạng. Người cao tuổi dùng thuốc tiểu đường cần có kẹo hoặc đường trong tầm tay và gia đình biết cách xử trí.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tiểu đường có thể chữa khỏi hoàn toàn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tiểu đường type 2 không chữa khỏi hoàn toàn theo nghĩa loại bỏ bệnh, nhưng có thể kiểm soát tốt đến mức không cần thuốc và không có biến chứng — đặc biệt ở người phát hiện sớm và thay đổi lối sống tích cực. Với người cao tuổi đã mắc nhiều năm, mục tiêu thực tế hơn là kiểm soát đường huyết trong giới hạn an toàn và ngăn biến chứng tiến triển.</p>
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
    "headline": "Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà",
    "description": "Tiểu đường type 2 ở người cao tuổi thường không có triệu chứng rõ ràng trong nhiều năm. Nhận biết 6 dấu hiệu thường bị bỏ qua và hướng dẫn theo dõi đường huyết tại nhà.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 68,
  slug: 'tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly',
  oldSlugs: ['tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly'],
  title: 'Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà',
  category: 'Sức khỏe người cao tuổi',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 68 to news.json!');
