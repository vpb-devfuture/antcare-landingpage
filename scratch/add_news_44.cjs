const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'So sánh dịch vụ Trợ lý sức khỏe của ANTCARE với giúp việc, điều dưỡng tự do và tự chăm sóc tại nhà. 6 điểm khác biệt cụ thể giúp gia đình quyết định đúng.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      So sánh dịch vụ Trợ lý sức khỏe của ANTCARE với giúp việc, điều dưỡng tự do và tự chăm sóc tại nhà. 6 điểm khác biệt cụ thể giúp gia đình quyết định đúng.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <p class="article-summary"><strong>Tớ biết Thanh đang cân nhắc nhiều lựa chọn: thuê giúp việc, tìm điều dưỡng tự do, hoặc nhờ người thân. Đây là phân tích thẳng thắn về sự khác biệt — không phải để nói những lựa chọn kia sai, mà để Thanh chọn đúng thứ gia đình thật sự cần.</strong></p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi-dich-vu-tu-nhan" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mô Hình Xã Hội Hóa Chăm Sóc Người Cao Tuổi: Vì Sao Dịch Vụ Tư Nhân Đang Lấp Đúng Chỗ Trống?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/trung-thu-mon-qua-y-nghia-nhat-cho-bo-me" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trung Thu 2026: Món Quà Ý Nghĩa Nhất Cho Bố Mẹ Không Nằm Trong Hộp Bánh Đắt Tiền
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/ung-dung-cong-nghe-cham-soc-nguoi-cao-tuoi-dinh-vi-den-bao-cao-so" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Ứng Dụng Công Nghệ Chăm Sóc Người Cao Tuổi: Từ Thiết Bị Định Vị Đến Báo Cáo Y Tế Số Sau Mỗi Buổi
        </a>
      </li>
    </ul>
  </div>

  <h2>Sáu điểm khác biệt cụ thể</h2>

  <h3>1. Bắt đầu khi bác còn khỏe, không phải khi đã ốm</h3>
  <p>Giúp việc và điều dưỡng thường được thuê sau khi bố mẹ đã có vấn đề sức khỏe. Trợ lý sức khỏe ANTCARE bắt đầu <strong>khi bác còn khỏe mạnh</strong> — đo chỉ số, tập vận động, rà soát nguy cơ — để phát hiện sớm và duy trì khả năng tự chủ lâu hơn.</p>

  <h3>2. Làm cùng, không làm thay</h3>
  <p>Giúp việc làm thay mọi việc cho nhanh. Điều đó nghe có vẻ tốt, nhưng thực tế khiến bác mất dần khả năng tự làm. Kiến của ANTCARE được đào tạo để <strong>hỗ trợ bác tự làm</strong> — đứng cạnh khi bác tự tắm, tập cùng bác thay vì tập hộ, khích lệ thay vì làm thay.</p>

  <h3>3. Chứng chỉ bắt buộc, không phải tùy chọn</h3>
  <p>Mỗi Kiến của ANTCARE <strong>bắt buộc hoàn thành</strong> hai chứng chỉ trước khi được nhận ca: Sơ cấp cứu và Chăm sóc người cao tuổi, do đối tác đào tạo Wellbeing cấp. Điều dưỡng tự do có chuyên môn y tế nhưng không được đào tạo về chăm sóc chủ động. Giúp việc thường không có chứng chỉ nào liên quan đến sức khỏe.</p>

  <h3>4. Báo cáo có số liệu, không phải kể miệng</h3>
  <p>Sau mỗi buổi, gia đình nhận báo cáo gồm <strong>5 chỉ số sinh tồn đã đo, bài tập đã thực hiện, điều quan sát được</strong>. Con cái ở Hà Nội hay ở nước ngoài đều nắm được tình hình thật — không phải qua câu "bác vẫn ổn" từ người giúp việc hay từ chính bác.</p>

  <h3>5. Có đơn vị chịu trách nhiệm</h3>
  <p>Thuê điều dưỡng hoặc người chăm sóc tự do qua giới thiệu: khi có sự cố, không ai chịu trách nhiệm ngoài chính người đó. ANTCARE có pháp nhân, có hợp đồng dịch vụ và có quy trình xử lý sự cố rõ ràng.</p>

  <h3>6. Có người thay thế khi Kiến nghỉ đột xuất</h3>
  <p>Điểm yếu chết người của thuê cá nhân tự do: người đó ốm hoặc có việc là gia đình bị động hoàn toàn. ANTCARE có đội ngũ — khi Kiến quen của bác không đến được, có người thay thế đã được bàn giao thông tin tình trạng của bác.</p>

  <h2>Khi nào thì không cần dịch vụ này?</h2>
  <p>Tớ muốn nói thẳng: không phải gia đình nào cũng cần Trợ lý sức khỏe. Nếu bác còn hoàn toàn tự chủ, có người thân ở gần theo dõi hằng ngày, và không có yếu tố nguy cơ như bệnh mạn tính hay tiền sử ngã — thì chưa cần.</p>
  <p>Dịch vụ này phù hợp nhất khi:</p>
  <ul>
    <li>Bác ở nhà một mình ban ngày trong khi con cái đi làm</li>
    <li>Con cái ở tỉnh khác hoặc nước ngoài, cần báo cáo có số liệu</li>
    <li>Bác có bệnh mạn tính cần theo dõi chỉ số đều đặn</li>
    <li>Bác từng ngã hoặc đi lại kém dần</li>
    <li>Gia đình muốn bắt đầu chủ động trước khi có vấn đề</li>
  </ul>

  <h2>Bắt đầu thế nào?</h2>
  <p>Bắt đầu bằng <strong>buổi trải nghiệm</strong> — Kiến đến nhà, gặp bác, đo chỉ số, trò chuyện. Gia đình xem Kiến có hợp với bác không, bác có thoải mái không. Không cần cam kết gì trước buổi đó.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 30px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem;">Dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ</h3>
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
    <h2>Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Dịch vụ Trợ lý sức khỏe ANTCARE khác giúp việc thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Giúp việc lo việc nhà và sinh hoạt. Trợ lý sức khỏe ANTCARE lo sức khỏe: theo dõi chỉ số, tập dưỡng sinh, phòng té ngã, báo cáo có số liệu — nhân viên bắt buộc có chứng chỉ Sơ cấp cứu.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Trợ lý sức khỏe ANTCARE có hợp đồng dịch vụ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có. ANTCARE ký hợp đồng dịch vụ ghi rõ phạm vi công việc, mức phí và quy trình xử lý sự cố — khác với thuê người tự do chỉ có thỏa thuận miệng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bắt đầu dùng dịch vụ Trợ lý sức khỏe ANTCARE như thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Bắt đầu bằng buổi trải nghiệm — Kiến đến nhà, gặp bác, đo chỉ số, không cần cam kết gì trước. Gọi 0969 032 360 để đặt lịch, tư vấn miễn phí.</p>
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
    "headline": "Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?",
    "description": "So sánh dịch vụ Trợ lý sức khỏe của ANTCARE với giúp việc, điều dưỡng tự do và tự chăm sóc tại nhà. 6 điểm khác biệt cụ thể giúp gia đình quyết định đúng.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 44,
  slug: 'tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare',
  title: 'Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?',
  category: 'Dịch vụ Y tế & Đời sống',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 44 to news.json!');
