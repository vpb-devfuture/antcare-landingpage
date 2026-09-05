const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Mô tả chi tiết một buổi Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ từ lúc Kiến đến nhà đến khi gửi báo cáo cho gia đình. Gia đình biết chính xác sẽ nhận được gì.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Mô tả chi tiết một buổi Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ từ lúc Kiến đến nhà đến khi gửi báo cáo cho gia đình. Gia đình biết chính xác sẽ nhận được gì.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <p class="article-summary"><strong>Nhiều gia đình muốn biết chính xác họ đang mua gì trước khi quyết định. Đây là mô tả trung thực và chi tiết về những gì xảy ra trong một buổi Trợ lý sức khỏe của ANTCARE — từ lúc Kiến bấm chuông đến lúc gia đình nhận được tin nhắn báo cáo.</strong></p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi-dich-vu-tu-nhan" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mô Hình Xã Hội Hóa Chăm Sóc Người Cao Tuổi: Vì Sao Dịch Vụ Tư Nhân Đang Lấp Đúng Chỗ Trống?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/trung-thu-mon-qua-y-nghia-nhat-cho-bo-me" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trung Thu 2026: Món Quà Ý Nghĩa Nhất Cho Bố Mẹ Không Nằm Trong Hộp Bánh Đắt Tiền
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Trước buổi: gia đình cần chuẩn bị gì?</h2>
  <p>Gần như không cần chuẩn bị gì đặc biệt. Chỉ cần:</p>
  <ul>
    <li>Thông báo cho bác biết hôm nay có Kiến đến để bác không bất ngờ</li>
    <li>Nếu bác đang uống thuốc, để thuốc ở chỗ dễ thấy</li>
    <li>Nếu có điều gì đặc biệt muốn Kiến chú ý hôm đó — nhắn tin cho ANTCARE trước</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Diễn biến một buổi điển hình (khoảng 2 giờ)</h2>

  <h3 style="font-weight: 700; color: #0f172a;">Phút 0–15: Đến nhà, chào hỏi và thăm hỏi tình trạng</h3>
  <p>Kiến đến đúng giờ đã hẹn, mặc đồng phục tím, đeo thẻ nhân viên. Hỏi thăm bác: đêm qua ngủ thế nào, ăn sáng chưa, có gì khác thường không. Đây không phải câu hỏi chiếu lệ — câu trả lời giúp Kiến điều chỉnh bài tập và mức độ hỗ trợ hôm đó.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Phút 15–30: Đo 5 chỉ số sinh tồn</h3>
  <p>Huyết áp, nhịp tim, nhiệt độ, nhịp thở và SpO2. Kiến đo đúng quy trình — bác ngồi nghỉ ít nhất 5 phút trước khi đo, đo hai lần, ghi lại cả hai kết quả. So sánh với dữ liệu các buổi trước để nhận ra xu hướng bất thường.</p>
  <p><strong>Nếu chỉ số đáng lo:</strong> Kiến báo gia đình ngay trong buổi hôm đó, không đợi đến báo cáo cuối.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Phút 30–70: Tập dưỡng sinh và phòng chống té ngã</h3>
  <p>Bài tập được chọn phù hợp với thể trạng và bệnh lý nền của bác — không phải bài cứng nhắc áp cho mọi người. Kiến <strong>tập cùng bác</strong>, không đứng nhìn bác tập một mình. Cường độ điều chỉnh theo ngày — hôm bác mệt thì bài nhẹ hơn.</p>
  <p>Trong buổi, Kiến cũng rà soát nhanh môi trường sống: nhà tắm có thảm chống trượt chưa, hành lang đủ sáng chưa, có vật cản nào trên lối đi không. Ghi lại để báo gia đình.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Phút 70–100: Đồng hành và hỗ trợ tinh thần</h3>
  <p>Phần này linh hoạt nhất và thường là phần bác thích nhất. Có hôm bác muốn kể chuyện cũ, có hôm muốn xem ảnh cháu, có hôm chỉ muốn ngồi nghe nhạc cùng Kiến. Không có lịch cứng — chỉ cần bác thoải mái và không cô đơn.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Phút 100–120: Nhắc thuốc và chuẩn bị kết thúc</h3>
  <p>Nhắc bác uống thuốc đúng giờ nếu có lịch trong buổi. Kiểm tra thuốc còn đủ đến lần tái khám tiếp theo chưa. Hỏi bác có điều gì muốn nhắn cho gia đình không.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Sau buổi: gia đình nhận được gì?</h2>
  <p>Trong vòng 1 giờ sau khi kết thúc, gia đình nhận tin nhắn báo cáo gồm:</p>
  <ul>
    <li>5 chỉ số sinh tồn đã đo (và so sánh với buổi trước)</li>
    <li>Bài tập đã thực hiện và phản ứng của bác</li>
    <li>Điều quan sát được trong buổi</li>
    <li>Ghi chú đặc biệt nếu có — điểm nguy hiểm trong nhà cần sửa, thuốc sắp hết, bác có vẻ mệt hơn bình thường</li>
  </ul>
  <p>Con cái ở Hà Nội hay ở nước ngoài đều biết buổi hôm nay diễn ra thế nào — không cần gọi hỏi bác, không cần đoán.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Buổi đầu tiên có gì khác không?</h2>
  <p>Buổi đầu tiên dài hơn một chút vì Kiến dành thêm thời gian làm quen với bác, tìm hiểu thói quen sinh hoạt, bệnh lý nền và thuốc đang dùng. Buổi đầu cũng là lúc gia đình có thể có mặt để gặp Kiến trực tiếp nếu muốn.</p>

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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Một buổi Trợ lý sức khỏe ANTCARE kéo dài bao lâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Khoảng 2 giờ mỗi buổi. Buổi đầu có thể dài hơn vì Kiến cần thêm thời gian tìm hiểu tình trạng của bác.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Sau mỗi buổi gia đình nhận được gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Trong vòng 1 giờ sau khi kết thúc, gia đình nhận báo cáo qua tin nhắn gồm 5 chỉ số sinh tồn, bài tập đã thực hiện, điều quan sát được và ghi chú đặc biệt.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nếu Kiến phát hiện chỉ số bất thường thì làm gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Báo gia đình ngay trong buổi, không đợi đến báo cáo cuối. Với dấu hiệu nghiêm trọng, Kiến gọi 115 ngay và đồng thời báo gia đình.</p>
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
    "headline": "Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước",
    "description": "Mô tả chi tiết một buổi Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ từ lúc Kiến đến nhà đến khi gửi báo cáo cho gia đình. Gia đình biết chính xác sẽ nhận được gì.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 45,
  slug: 'mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao',
  title: 'Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước',
  category: 'Dịch vụ Y tế & Đời sống',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 45 to news.json!');
