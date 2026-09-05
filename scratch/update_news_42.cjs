const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const updatedContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Tháng 9–10 là thời điểm giao mùa quyết định để kiểm soát huyết áp kịch phát, bệnh phổi mạn tính và tiêm phòng cúm trước khi các đợt rét đậm tràn về đe dọa sức khỏe người cao tuổi.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Cập nhật: <time datetime="2026-09-05" itemprop="datePublished">05/09/2026</time> | Chuyên mục: Sức khỏe Lão khoa & Chuyển mùa</div>
  </header>

  <h2>1. Cơ chế sinh học: Nguy cơ tiềm ẩn khi thời tiết sang thu</h2>
  <p>Giai đoạn tháng 9 - tháng 10 có sự dao động nhiệt độ ngày và đêm rất lớn. Ở người cao tuổi, thụ thể áp lực mạch máu đã thoái hóa khiến mạch máu co rút đột ngột khi gặp lạnh sớm, làm huyết áp vọt tăng từ 10 - 25 mmHg, dễ dẫn tới xuất huyết hoặc nhồi máu não.</p>
  <p>Bên cạnh đó, không khí khô hanh làm giảm chức năng của lớp lông chuyển niêm mạc phế quản, khiến các bệnh nhân viêm phế quản mạn tính và COPD rất dễ bùng phát đợt cấp nguy hiểm.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tang-huyet-ap-o-nguoi-cao-tuoi-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Đái Tháo Đường Ở Người Cao Tuổi: Những Điều Con Cái Cần Biết Để Chăm Sóc Đúng
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/sa-sut-tri-tue-o-nguoi-cao-tuoi-dau-hieu-nhan-biet-som-va-cach-theo-doi-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Sa Sút Trí Tuệ Ở Người Cao Tuổi: Dấu Hiệu Nhận Biết Sớm Và Cách Theo Dõi Tại Nhà
        </a>
      </li>
    </ul>
  </div>

  <h2>2. 4 Danh mục kiểm tra trọng tâm cần hoàn thành trong tháng 9–10</h2>
  <ul>
    <li><strong>Khám chuyên khoa Tim mạch:</strong> Làm điện tâm đồ, siêu âm Doppler tim và chỉnh liều thuốc hạ áp dự phòng trước mùa rét.</li>
    <li><strong>Kiểm tra chức năng Hô hấp:</strong> Đo hô hấp ký và rà soát phác đồ thuốc xịt giãn phế quản.</li>
    <li><strong>Xét nghiệm Sinh hóa máu:</strong> Kiểm tra chỉ số đường huyết đói, HbA1c và chức năng lọc thận (eGFR).</li>
    <li><strong>Tiêm vắc xin phòng bệnh:</strong> Hoàn thành mũi tiêm vắc xin cúm mùa và vắc xin phế cầu khuẩn để cơ thể kịp sinh kháng thể sau 2–4 tuần.</li>
  </ul>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 30px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem;">Không thu xếp được thời gian đưa bố mẹ đi khám mùa giao mùa?</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Chọn đúng bệnh viện mới là nửa việc. Nửa còn lại là có người đi cùng bác suốt buổi — biết đường trong bệnh viện, biết đỡ dìu đúng cách, và ghi lại đầy đủ lời bác sĩ dặn.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ gồm năm phần:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 20px; line-height: 1.6;">
      <li>Đo 5 chỉ số sinh tồn tại nhà trước khi đi.</li>
      <li>Đưa đón tận nhà chu đáo, an toàn.</li>
      <li>Hỗ trợ toàn bộ thủ tục khám, xét nghiệm, lấy kết quả.</li>
      <li>Ghi chép đầy đủ lời bác sĩ dặn gửi lại cho gia đình.</li>
      <li>Định vị theo dõi suốt buổi giúp con cái an tâm tuyệt đối.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi "Kiến" của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Tư vấn miễn phí — kể cả tư vấn nên đưa bác đi khám ở đâu.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2>Câu Hỏi Thường Gặp Về Tái Khám Mùa Thu</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Thời điểm tiêm vắc xin cúm mùa vào tháng 9–10 có tối ưu không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Rất tối ưu. Cơ thể cần 2 đến 4 tuần sau tiêm để tạo đủ kháng thể. Tiêm vào tháng 9 hoặc tháng 10 giúp người cao tuổi có hệ miễn dịch bảo vệ cao nhất khi bước vào giai đoạn rét đỉnh điểm từ tháng 11 đến Tết Nguyên đán.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có nên tự ý tăng liều thuốc hạ áp khi thấy trời trở lạnh?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tuyệt đối không tự ý tăng liều vì nguy cơ tụt huyết áp tư thế rất dễ làm người già té ngã. Cần đo và ghi chép huyết áp 2 lần mỗi ngày trong 5 ngày rồi mang kết quả đến bác sĩ để điều chỉnh đơn thuốc an toàn.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?",
    "description": "Tháng 9–10 là thời điểm giao mùa quyết định để kiểm soát huyết áp kịch phát, bệnh phổi mạn tính và tiêm phòng cúm trước khi các đợt rét đậm tràn về đe dọa sức khỏe người cao tuổi.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

if (newsData.featured && newsData.featured.id === 42) {
  newsData.featured.content = updatedContent;
  newsData.featured.excerpt = 'Tháng 9–10 là thời điểm giao mùa quyết định để kiểm soát huyết áp kịch phát, bệnh phổi mạn tính và tiêm phòng cúm trước khi các đợt rét đậm tràn về đe dọa sức khỏe người cao tuổi.';
} else {
  // Find in list if not currently featured
  const itemIndex = newsData.list.findIndex(item => item.id === 42);
  if (itemIndex !== -1) {
    newsData.list[itemIndex].content = updatedContent;
    newsData.list[itemIndex].excerpt = 'Tháng 9–10 là thời điểm giao mùa quyết định để kiểm soát huyết áp kịch phát, bệnh phổi mạn tính và tiêm phòng cúm trước khi các đợt rét đậm tràn về đe dọa sức khỏe người cao tuổi.';
  }
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated Article ID 42 content!');
