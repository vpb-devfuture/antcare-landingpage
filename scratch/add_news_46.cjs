const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Nỗi lo khi bố mẹ sống một mình: ngã không ai biết, quên thuốc, cô đơn, bệnh nặng hơn mà không phát hiện kịp. Phân tích cụ thể dịch vụ Trợ lý sức khỏe ANTCARE giải quyết từng nỗi lo.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Nỗi lo khi bố mẹ sống một mình: ngã không ai biết, quên thuốc, cô đơn, bệnh nặng hơn mà không phát hiện kịp. Phân tích cụ thể dịch vụ Trợ lý sức khỏe ANTCARE giải quyết từng nỗi lo.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <p class="article-summary"><strong>Hà Nội ngày càng có nhiều ông bà cao tuổi sống một mình trong căn hộ chung cư trong khi con cái đi làm cả ngày. Khoảng 8–10 tiếng đó là khoảng thời gian gia đình lo lắng nhất — và cũng là khoảng thời gian không có thông tin gì. Đây là phân tích thẳng vào từng nỗi lo cụ thể và cách Trợ lý sức khỏe ANTCARE giải quyết.</strong></p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/sandwich-generation-ap-luc-kiet-que-cua-the-he-kep-giua" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Sandwich Generation: Áp Lực Kiệt Quệ Của Thế Hệ "Kẹp Giữa" Vừa Nuôi Con Vừa Chăm Bố Mẹ Già
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Nỗi lo 1: Bác ngã mà không ai biết</h2>
  <p><strong>Thực tế:</strong> Té ngã là nguyên nhân hàng đầu khiến người cao tuổi phải nhập viện. Và nhiều ca ngã xảy ra trong nhà tắm hoặc giữa đêm — lúc không có ai.</p>
  <p><strong>Trợ lý sức khỏe giải quyết thế nào:</strong></p>
  <ul>
    <li>Kiến rà soát và ghi chép điểm nguy hiểm trong nhà — sàn nhà tắm, tay vịn, ánh sáng hành lang, dây điện vắt ngang — rồi báo gia đình sửa</li>
    <li>Tập các bài giữ thăng bằng và tăng sức cơ chân đều đặn mỗi buổi để giảm nguy cơ ngã</li>
    <li>Kiến được đào tạo xử trí đúng khi bác bị ngã: không tự đỡ dậy ngay khi nghi gãy xương, gọi 115 đúng lúc</li>
  </ul>
  <p><em>Lưu ý thực tế:</em> Trợ lý sức khỏe không thể theo dõi bác 24/7. Nếu gia đình lo ngại bác ngã ngoài giờ Kiến đến, nên lắp thêm đèn cảm biến lối đi ban đêm và thảm chống trượt nhà tắm — Kiến sẽ tư vấn cụ thể cho từng nhà.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nỗi lo 2: Bác quên uống thuốc</h2>
  <p><strong>Thực tế:</strong> Người cao tuổi thường uống 3–5 loại thuốc khác nhau, nhiều lần trong ngày. Bỏ thuốc hoặc uống sai liều có thể gây hậu quả nghiêm trọng với bệnh mạn tính.</p>
  <p><strong>Trợ lý sức khỏe giải quyết thế nào:</strong></p>
  <ul>
    <li>Kiến nhắc bác uống thuốc đúng giờ trong buổi chăm sóc</li>
    <li>Kiểm tra thuốc còn đủ đến lần tái khám tiếp theo chưa — báo gia đình mua thêm kịp thời</li>
    <li>Chụp ảnh vỏ thuốc và đơn thuốc lưu vào hồ sơ bác để gia đình nắm được bác đang uống gì</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Nỗi lo 3: Bệnh nặng hơn mà không ai phát hiện</h2>
  <p><strong>Thực tế:</strong> Nhiều bệnh mạn tính như tăng huyết áp và đái tháo đường không có triệu chứng rõ ràng. Bác nói "vẫn bình thường" nhưng huyết áp có thể đang âm thầm tăng dần.</p>
  <p><strong>Trợ lý sức khỏe giải quyết thế nào:</strong></p>
  <ul>
    <li>5 chỉ số sinh tồn được đo mỗi buổi và ghi lại thành chuỗi dữ liệu — giúp nhận ra xu hướng bất thường trước khi có triệu chứng</li>
    <li>Dữ liệu đo tại nhà là thứ bác sĩ cần nhất khi tái khám — phản ánh tình trạng thật trong sinh hoạt hằng ngày</li>
    <li>Khi phát hiện bất thường, Kiến báo gia đình ngay, không đợi đến buổi tái khám định kỳ</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Nỗi lo 4: Bác cô đơn và xuống tinh thần</h2>
  <p><strong>Thực tế:</strong> Nhiều cụ ở nhà một mình 8–10 tiếng mỗi ngày, không có ai để trò chuyện. Cô đơn ảnh hưởng trực tiếp đến sức khỏe thể chất — ăn kém, ngủ kém, ít vận động.</p>
  <p><strong>Trợ lý sức khỏe giải quyết thế nào:</strong></p>
  <ul>
    <li>Mỗi buổi có phần đồng hành tinh thần — Kiến trò chuyện, lắng nghe, cùng bác làm việc bác thích</li>
    <li>Kiến được đào tạo để nhận ra dấu hiệu bác đang xuống tinh thần và báo gia đình</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Nỗi lo 5: Không biết hôm nay bác thế nào</h2>
  <p><strong>Thực tế:</strong> Gọi điện hỏi thì bác nói "ổn". Không gọi thì lo. Gọi nhiều thì bác bực. Và dù gọi bao nhiêu cũng không biết huyết áp hôm nay là bao nhiêu, bác có ăn được không, có đi lại bình thường không.</p>
  <p><strong>Trợ lý sức khỏe giải quyết thế nào:</strong></p>
  <ul>
    <li>Sau mỗi buổi, gia đình nhận báo cáo có số liệu — không cần đoán</li>
    <li>Báo cáo gửi qua tin nhắn trong vòng 1 giờ sau khi Kiến kết thúc buổi</li>
    <li>Con cái ở Nhật, ở Mỹ hay ở quận khác đều đọc được cùng thông tin</li>
  </ul>

  <!-- CTA DỊCH VỤ TRỢ LÝ SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 30px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Trợ lý sức khỏe</strong> là dịch vụ chăm sóc người cao tuổi <strong>chủ động tại nhà</strong>, gồm bốn phần:</p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li><strong>Tập dưỡng sinh chủ động và phòng chống té ngã</strong> — Kiến đến tận nhà tập cùng bác, rà soát môi trường sống.</li>
      <li><strong>Theo dõi 5 chỉ số sinh tồn</strong> — huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2 — đo và ghi lại mỗi buổi.</li>
      <li><strong>Duy trì sức khỏe tinh thần</strong> — trò chuyện, đồng hành, giúp bác không cô đơn.</li>
      <li><strong>Báo cáo gửi gia đình sau mỗi buổi</strong> — con cái ở xa vẫn nắm được tình hình.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi Kiến đều có chứng chỉ Sơ cấp cứu và Chăm sóc người cao tuổi do Wellbeing cấp. Nguyên tắc: <em>"làm cùng, không làm thay"</em>.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Tư vấn miễn phí.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bố mẹ sống một mình ban ngày, dịch vụ Trợ lý sức khỏe có thể giúp gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Giải quyết 5 nỗi lo: giảm nguy cơ té ngã, nhắc thuốc, phát hiện bất thường qua đo chỉ số, đồng hành tinh thần, và gửi báo cáo có số liệu cho gia đình sau mỗi buổi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Trợ lý sức khỏe ANTCARE có theo dõi bác 24/7 không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không — Kiến đến theo buổi, thường 2–3 buổi/tuần. Ngoài giờ đó, nên lắp thêm đèn cảm biến và thảm chống trượt — Kiến tư vấn cụ thể cho từng nhà.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Con cái ở nước ngoài có nhận được báo cáo không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có. Báo cáo gửi qua tin nhắn trong vòng 1 giờ sau khi kết thúc buổi — con cái ở bất kỳ đâu đều đọc được: 5 chỉ số sinh tồn, bài tập đã thực hiện, điều quan sát được.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">ANTCARE có phải là AnCare không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không. ANTCARE – Kiến chăm tổ là thương hiệu độc lập, không liên quan đến AnCare hay ANTCARE Solution. Website: antcare.vn.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?",
    "description": "Nỗi lo khi bố mẹ sống một mình: ngã không ai biết, quên thuốc, cô đơn, bệnh nặng hơn mà không phát hiện kịp. Phân tích cụ thể dịch vụ Trợ lý sức khỏe ANTCARE giải quyết từng nỗi lo.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 46,
  slug: 'tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi',
  title: 'Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?',
  category: 'Dịch vụ Y tế & Đời sống',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 46 to news.json!');
