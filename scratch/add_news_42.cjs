const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?</h1>
    <p class="meta">Cập nhật: <time datetime="2026-09-05" itemprop="datePublished">05/09/2026</time> | Chuyên mục: Sức khỏe Lão khoa & Chuyển mùa</p>
  </header>

  <section class="aeo-direct-answer" itemprop="description">
    <p>Tháng 9–10 là <strong>thời điểm vàng tái khám cho người cao tuổi</strong> để kiểm soát huyết áp và đường hô hấp, phòng ngừa đột quỵ trước khi bước vào mùa lạnh cao điểm.</p>
  </section>

  <h2>1. Cơ chế sinh học: Vì sao cơ thể người già "dễ gục ngã" vào mùa thu - đông?</h2>
  <p>Khác với cơ thể người trẻ có hệ thần kinh thực vật thích nghi nhanh, ở người sau tuổi 60, hệ thống thụ cảm áp lực thành mạch (baroreceptors) đã bị thoái hóa và xơ cứng. Khi bước vào tháng 9 và tháng 10 – giai đoạn giao mùa với những đợt gió mùa đông bắc đầu tiên kèm chênh lệch nhiệt độ ngày và đêm có thể lên tới 8–10°C, cơ thể người cao tuổi phải đối mặt với ba cơ chế biến đổi sinh lý nguy hiểm:</p>
  
  <ul>
    <li><strong>Phản ứng co mạch ngoại vi đột ngột:</strong> Tiếp xúc với khí lạnh buổi sáng sớm kích hoạt phóng thích Catecholamine (Adrenaline và Noradrenaline), làm mạch máu ngoại biên co thắt dữ dội. Lực cản ngoại vi tăng vọt đẩy huyết áp tâm thu tăng thêm từ 10 đến 25 mmHg, trực tiếp gây nguy cơ vỡ hoặc tắc mạch não.</li>
    <li><strong>Hiện tượng cô đặc máu và tăng đông:</strong> Thời tiết hanh khô của mùa thu khiến cơ thể mất nước qua hơi thở mà người già ít cảm thấy khát. Máu đặc hơn, độ quánh tăng cao kết hợp với các mảng xơ vữa sẵn có sẽ thúc đẩy quá trình hình thành cục máu đông gây nhồi máu cơ tim cấp.</li>
    <li><strong>Liệt lớp nhung mao niêm mạc phế quản:</strong> Không khí lạnh khô làm tê liệt hệ thống lông chuyển trong đường thở, làm giảm bài tiết kháng thể IgA bề mặt, mở toang "cánh cửa" cho virus cúm, vi khuẩn phế cầu xâm nhập thẳng vào nhu mô phổi.</li>
  </ul>

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

  <h2>2. 4 Nhóm bệnh mạn tính bùng phát đợt cấp cần kiểm soát ngay trong tháng 9–10</h2>

  <h3>2.1. Tăng huyết áp kịch phát và biến cố mạch máu não</h3>
  <p>Thống kê tại các khoa Cấp cứu Lão khoa cho thấy tỷ lệ nhập viện do tai biến mạch máu não tăng từ 20% - 30% trong các đợt gió lạnh đầu mùa thu đông. Điều nguy hiểm là các cơn tăng huyết áp mùa này thường xảy ra vào khung giờ từ 4h đến 6h sáng – thời điểm bệnh nhân vừa thức dậy bước ra khỏi chăn ấm.</p>

  <h3>2.2. Đợt cấp COPD và viêm phế quản mạn tính</h3>
  <p>Đối với người cao tuổi có tiền sử hút thuốc hoặc mắc bệnh phổi tắc nghẽn mạn tính (COPD), sự sụt giảm nhiệt độ kèm độ ẩm thấp kích hoạt co thắt phế quản cấp, xuất tiết đờm đặc làm tắc nghẽn đường thở, rất dễ dẫn đến suy hô hấp cấp nếu phác đồ thuốc xịt giãn phế quản không được bác sĩ rà soát kịp thời.</p>

  <h3>2.3. Cơn đau cứng khớp thoái hóa do thay đổi áp suất khí quyển</h3>
  <p>Nhiệt độ giảm làm giảm lưu lượng máu tưới đến bao hoạt dịch khớp, đồng thời áp suất khí quyển biến đổi làm giãn nở vi mạch mô liên kết, gây phù nề quanh khớp. Các bệnh nhân thoái hóa khớp gối, thoái hóa cột sống thường bị đau nhức dữ dội, cứng khớp buổi sáng kéo dài trên 30 phút, làm tăng nguy cơ trượt ngã khi đi lại.</p>

  <h3>2.4. Rối loạn đường huyết do chuyển hóa năng lượng mùa lạnh</h3>
  <p>Mùa thu đông cơ thể tiêu hao nhiều năng lượng hơn để giữ ấm, kích thích ăn nhiều tinh bột và đồ béo hơn, trong khi thói quen vận động ngoài trời lại giảm đi. Sự mất cân đối này khiến chỉ số đường huyết dao động thất thường, đẩy HbA1c tăng vọt khó kiểm soát.</p>

  <h2>3. Bảng kiểm các hạng mục khám cần ưu tiên trong đợt tái khám mùa thu</h2>
  <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; margin: 20px 0;">
    <thead>
      <tr style="background-color: #f1f5f9; text-align: left;">
        <th style="width: 25%;">Chuyên khoa</th>
        <th style="width: 45%;">Hạng mục xét nghiệm / Cận lâm sàng</th>
        <th style="width: 30%;">Mục tiêu can thiệp</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tim mạch</strong></td>
        <td>Điện tâm đồ (ECG), siêu âm tim Doppler màu, xét nghiệm bộ mỡ máu (Cholesterol toàn phần, LDL-C, Triglyceride). Cân nhắc đeo Holter huyết áp 24h nếu nghi ngờ tăng áp ban đêm.</td>
        <td>Phát hiện sớm thiếu máu cơ tim, điều chỉnh liều thuốc hạ áp dự phòng trước đợt rét đậm.</td>
      </tr>
      <tr>
        <td><strong>Hô hấp</strong></td>
        <td>Đo chức năng thông khí phổi (Hô hấp ký), chụp X-quang tim phổi thẳng, kiểm tra nồng độ bão hòa oxy SpO2 mao mạch.</td>
        <td>Đánh giá bậc tắc nghẽn khí đạo, rà soát lại kỹ thuật sử dụng bình xịt/hít định liều.</td>
      </tr>
      <tr>
        <td><strong>Nội tiết & Chuyển hóa</strong></td>
        <td>Định lượng Glucose máu đói, chỉ số HbA1c, định lượng Acid Uric, xét nghiệm Creatinine và eGFR (chức năng lọc cầu thận).</td>
        <td>Kiểm soát tổn thương vi mạch thận, phòng ngừa đợt viêm khớp Gút cấp khi trở lạnh.</td>
      </tr>
      <tr>
        <td><strong>Y học dự phòng</strong></td>
        <td>Khám sàng lọc chỉ định tiêm vắc xin cúm mùa (Influenza) thế hệ mới và vắc xin phế cầu 13/23 (Prevenar 13 / Pneumovax 23).</td>
        <td>Tạo kháng thể chủ động, giảm 60% nguy cơ nhập viện và 80% nguy cơ tử vong do viêm phổi mùa đông.</td>
      </tr>
    </tbody>
  </table>

  <h2>4. Cẩm nang an toàn đưa cha mẹ đi khám bệnh vào buổi sáng mùa thu</h2>
  <ol>
    <li><strong>Không đi khám quá sớm:</strong> Tránh đưa bố mẹ ra đường vào khung giờ 5h30 - 6h30 sáng khi nhiệt độ còn thấp nhất và sương lạnh dày đặc. Nên đặt lịch khám vào khoảng 8h00 - 9h00 sáng khi mặt trời đã lên.</li>
    <li><strong>Mặc trang phục nhiều lớp (nguyên tắc củ hành):</strong> Mặc áo khoác gió bên ngoài, áo len nhẹ bên trong kèm khăn mỏng quàng cổ. Khi vào phòng chờ bệnh viện ấm áp có thể cởi bớt áo ngoài, tránh bị toát mồ hôi thấm ngược lại gây cảm lạnh.</li>
    <li><strong>Không nhịn ăn uống quá đà:</strong> Nếu phải nhịn ăn để xét nghiệm máu, hãy mang theo sẵn một hộp sữa hạt ấm hoặc một chiếc bánh xốp mềm để cho bố mẹ dùng ngay sau khi lấy máu xong, phòng ngừa hạ đường huyết do chờ đợi kéo dài.</li>
    <li><strong>Chuẩn bị đầy đủ hồ sơ tiền sử:</strong> Mang toàn bộ vỏ thuốc, đơn thuốc của đợt khám gần nhất và sổ bảo hiểm y tế để bác sĩ nắm được diễn tiến điều trị, tránh kê trùng nhóm thuốc.</li>
  </ol>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem;">Không thu xếp được thời gian đưa bố mẹ đi khám mùa giao mùa?</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Chọn đúng bệnh viện mới là nửa việc. Nửa còn lại là có người đi cùng bác suốt buổi — biết đường trong bệnh viện, biết đỡ dìu đúng cách, và ghi lại đầy đủ lời bác sĩ dặn.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ gồm năm phần:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Đo 5 chỉ số sinh tồn tại nhà trước khi đi (Huyết áp, Mạch, SpO2, Đường huyết, Nhịp thở).</li>
      <li>Đưa đón tận nhà chu đáo, an toàn bằng xe riêng ấm áp.</li>
      <li>Hỗ trợ toàn bộ thủ tục đăng ký, xếp hàng xét nghiệm, lấy mẫu, nhận kết quả.</li>
      <li>Ghi chép đầy đủ lời bác sĩ dặn gửi lại bằng văn bản số cho gia đình.</li>
      <li>Định vị theo dõi suốt buổi giúp con cái nắm rõ lộ trình và an tâm tuyệt đối.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi "Kiến" của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Tư vấn miễn phí — kể cả tư vấn nên đưa bác đi khám ở đâu.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2>Câu Hỏi Thường Gặp Về Tái Khám Mùa Thu Cho Người Cao Tuổi</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Thời điểm tiêm vắc xin cúm mùa vào tháng 9–10 có bị quá muộn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Hoàn toàn không muộn mà đây chính là thời điểm lý tưởng nhất. Sau khi tiêm, cơ thể mất từ 2 đến 4 tuần để sản sinh lượng kháng thể tối đa. Tiêm vào tháng 9 hoặc tháng 10 sẽ đảm bảo nồng độ kháng thể đạt đỉnh vừa kịp bảo vệ cơ thể trước các đợt rét đậm của mùa đông xuân kéo dài từ tháng 11 đến tháng 2 năm sau.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Đưa người cao tuổi bị đau khớp đi khám ở các viện tuyến đầu đông đúc cần chuẩn bị gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Khuôn viên bệnh viện lớn thường rộng hàng hecta với nhiều tòa nhà khác nhau. Người già đi bộ liên tục giữa các phòng xét nghiệm sẽ bị tràn dịch hoặc đau nhức khớp cấp. Gia đình nên yêu cầu mượn xe lăn tại quầy công tác xã hội ngay tại cửa sảnh, hoặc sử dụng dịch vụ hỗ trợ có điều dưỡng mang theo xe đẩy chuyên dụng như ANTCARE để bảo toàn thể lực cho người bệnh.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có nên tự ý tăng liều thuốc huyết áp khi thấy thời tiết bắt đầu trở lạnh?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tuyệt đối không tự ý tăng liều thuốc. Tăng liều đột ngột không theo chỉ định có thể gây hạ huyết áp tư thế, khiến bệnh nhân chóng mặt khi đứng lên và ngã chấn thương sọ não. Thay vào đó, hãy ghi lại nhật ký huyết áp đo ngày 2 lần trong 5–7 ngày liên tiếp và mang tới bác sĩ để được chỉnh liều an toàn.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?",
    "datePublished": "2026-09-05",
    "keywords": "tái khám định kỳ người cao tuổi, sức khỏe người già mùa thu đông, dịch vụ đồng hành khám bệnh ANTCARE, phòng ngừa đột quỵ mùa lạnh"
  }
  </script>
</article>`;

newsData.featured = {
  id: 42,
  slug: 'mua-thu-tai-kham-suc-khoe-nguoi-cao-tuoi',
  title: 'Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?',
  category: 'Sức khỏe Lão khoa & Chuyển mùa',
  date: '05/09/2026',
  author: 'ANTCARE Team',
  excerpt: 'Tháng 9–10 là thời điểm vàng tái khám cho người cao tuổi để kiểm soát huyết áp và đường hô hấp, phòng ngừa đột quỵ trước khi bước vào mùa lạnh cao điểm.',
  image: '/images/tin-tuc/mua-thu-tai-kham-suc-khoe-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with new featured article ID 42!');
