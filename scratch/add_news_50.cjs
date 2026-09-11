const fs = require('fs');
const path = require('path');

// 1. Copy image from artifacts directory to public/images/tin-tuc/
const srcImage = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\tao_bon_tieu_hoa_nguoi_cao_tuoi_1789122556712.jpg`;
const destImage = path.join(__dirname, '../public/images/tin-tuc/tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi.jpg');

fs.copyFileSync(srcImage, destImage);
console.log('Successfully copied image to:', destImage);

// 2. Read news.json
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// 3. Convert previous featured article (ID 87) to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Táo bón rất phổ biến ở người cao tuổi và có thể gây biến chứng nghiêm trọng. Nguyên nhân thực sự, cách xử lý an toàn và khi nào cần đi khám.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Táo bón ở người cao tuổi: Nguyên nhân, cách xử lý và khi nào cần đi khám</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Một vấn đề ít được nói đến vì tế nhị, nhưng ảnh hưởng lớn đến chất lượng sống và có thể dẫn đến biến chứng nghiêm trọng nếu kéo dài.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Táo bón ở người cao tuổi thường do nhiều nguyên nhân kết hợp:
      <strong>uống ít nước, ăn thiếu chất xơ, ít vận động, và tác dụng phụ của thuốc</strong>
      (thuốc giảm đau opioid, thuốc chống trầm cảm, thuốc bổ sung sắt, thuốc kháng axit chứa nhôm).
      Xử lý theo thứ tự: tăng nước lên 1,5-2 lít mỗi ngày,
      tăng chất xơ từ từ, duy trì vận động, tập thói quen đi vệ sinh đúng giờ.
      Cần đi khám nếu táo bón <strong>mới xuất hiện đột ngột, kèm sụt cân, đau bụng dữ dội,
      có máu trong phân, hoặc không đại tiện được kèm nôn và chướng bụng</strong>.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/quan-ly-nhieu-loai-thuoc-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Quản lý nhiều loại thuốc cho người cao tuổi: Cách tránh nhầm lẫn và tương tác nguy hiểm
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Đục thủy tinh thể và suy giảm thị lực ở người cao tuổi: Nhận biết và điều trị
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/vien-duong-lao-hay-cham-soc-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao táo bón phổ biến hơn ở người cao tuổi</h2>

  <p>Nhiều yếu tố cùng tác động ở tuổi cao:</p>

  <p><strong>Nhu động ruột chậm lại</strong> theo tuổi, phân di chuyển chậm hơn và bị hút nước nhiều hơn nên khô cứng.</p>

  <p><strong>Uống ít nước.</strong> Cảm giác khát giảm theo tuổi, cộng thêm nhiều người cao tuổi cố tình uống ít để đỡ phải đi vệ sinh nhiều lần, đặc biệt ban đêm.</p>

  <p><strong>Ăn ít chất xơ.</strong> Răng yếu khiến khó nhai rau sống và trái cây, dẫn đến ăn nhiều đồ mềm ít xơ.</p>

  <p><strong>Ít vận động.</strong> Vận động kích thích nhu động ruột; nằm hoặc ngồi nhiều làm ruột hoạt động chậm hơn.</p>

  <p><strong>Tác dụng phụ của thuốc.</strong> Đây là nguyên nhân bị bỏ qua nhiều nhất và thường là nguyên nhân chính.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Các thuốc thường gây táo bón</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Nhóm thuốc</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Ví dụ thường gặp</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc giảm đau opioid</td>
          <td style="padding: 0.8rem 1rem;">Codein, morphin, tramadol</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc bổ sung sắt</td>
          <td style="padding: 0.8rem 1rem;">Viên sắt điều trị thiếu máu</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc kháng axit chứa nhôm hoặc canxi</td>
          <td style="padding: 0.8rem 1rem;">Một số thuốc dạ dày</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc chống trầm cảm ba vòng</td>
          <td style="padding: 0.8rem 1rem;">Amitriptylin</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc chẹn kênh canxi</td>
          <td style="padding: 0.8rem 1rem;">Một số thuốc huyết áp</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc lợi tiểu</td>
          <td style="padding: 0.8rem 1rem;">Gây mất nước nếu không bù đủ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Nếu táo bón xuất hiện sau khi bắt đầu một thuốc mới, đây là thông tin quan trọng cần báo với bác sĩ — có thể đổi sang thuốc khác cùng nhóm hoặc dùng biện pháp phòng ngừa kèm theo.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Xử lý theo thứ tự</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 1 — Nước</h3>

  <p>Mục tiêu 1,5-2 lít mỗi ngày. Với người ngại đi vệ sinh đêm, có thể tập trung uống vào buổi sáng và trưa, giảm sau 18 giờ.</p>

  <p>Một mẹo đơn giản có hiệu quả: uống một cốc nước ấm ngay khi thức dậy, trước khi ăn sáng. Nước ấm buổi sáng kích thích nhu động ruột.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 2 — Chất xơ, tăng từ từ</h3>

  <p>Nguồn chất xơ phù hợp với người cao tuổi (dễ nhai, dễ tiêu):</p>

  <ul>
    <li>Khoai lang luộc — vừa nhiều xơ vừa mềm</li>
    <li>Đu đủ chín, chuối chín, mận khô</li>
    <li>Rau mồng tơi, rau đay, rau lang — nhiều chất nhầy giúp nhuận tràng</li>
    <li>Yến mạch nấu cháo</li>
    <li>Các loại đậu nấu nhừ</li>
  </ul>

  <p><strong>Quan trọng:</strong> tăng chất xơ từ từ trong 1-2 tuần và phải tăng nước kèm theo. Tăng xơ đột ngột mà thiếu nước làm táo bón nặng hơn và gây đầy hơi.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 3 — Vận động</h3>

  <p>Đi bộ 20-30 phút mỗi ngày có tác dụng rõ với nhu động ruột. Với người nằm nhiều, có thể tập các động tác đơn giản tại giường: co duỗi chân, xoay hông, xoa bụng theo chiều kim đồng hồ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 4 — Tập thói quen đi vệ sinh</h3>

  <p>Cơ thể có phản xạ đại tiện mạnh nhất vào buổi sáng sau khi ăn. Nên tạo thói quen ngồi toilet 10-15 phút sau bữa sáng, cùng giờ mỗi ngày, kể cả khi chưa có nhu cầu.</p>

  <p>Tư thế cũng quan trọng: kê một ghế nhỏ dưới chân để đầu gối cao hơn hông giúp tư thế đại tiện tự nhiên hơn và đỡ phải rặn.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Rặn nhiều khi táo bón làm tăng huyết áp đột ngột — nguy hiểm với người có bệnh tim mạch hoặc từng bị đột quỵ. Đây là lý do táo bón ở người cao tuổi cần được xử lý sớm, không nên coi là chuyện nhỏ. Với người có bệnh tim mạch, nên báo bác sĩ về tình trạng táo bón để được hướng dẫn cách xử lý an toàn.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về thuốc nhuận tràng</h2>

  <p>Chỉ nên dùng khi các biện pháp trên không đủ, và nên hỏi bác sĩ hoặc dược sĩ thay vì tự mua.</p>

  <p>Các nhóm chính có cơ chế và mức độ an toàn khác nhau khi dùng kéo dài. Nhóm tạo khối và nhóm thẩm thấu thường được ưu tiên hơn cho việc dùng lâu dài. Nhóm kích thích nhu động nếu lạm dụng có thể làm ruột giảm khả năng co bóp tự nhiên.</p>

  <p>Với người cao tuổi đang dùng nhiều thuốc khác, việc thêm thuốc nhuận tràng cần được cân nhắc trong tổng thể — đây là lý do nên hỏi bác sĩ.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào cần đi khám</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Táo bón mới xuất hiện đột ngột ở người trước đây đại tiện bình thường
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kèm sụt cân không chủ đích
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Có máu trong phân hoặc phân đen
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đau bụng dữ dội
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Không đại tiện được kèm nôn và chướng bụng — có thể là tắc ruột, cần cấp cứu
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thay đổi hình dạng phân kéo dài (phân dẹt, nhỏ như bút chì)
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Táo bón xen kẽ tiêu chảy
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Táo bón kéo dài trên 3 tuần dù đã áp dụng các biện pháp trên
    </li>
  </ul>

  <p>Đặc biệt lưu ý: <strong>táo bón mới xuất hiện ở người trên 50 tuổi</strong> luôn cần được bác sĩ đánh giá để loại trừ các nguyên nhân nghiêm trọng, không nên chỉ tự xử lý tại nhà.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ: Theo dõi sức khỏe toàn diện</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Các vấn đề tế nhị như táo bón thường không được người cao tuổi kể với con cái. Nhân viên ANTCARE quan sát và ghi nhận trong báo cáo gửi gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bao lâu không đại tiện thì gọi là táo bón?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Táo bón không chỉ tính bằng tần suất. Định nghĩa thường dùng là đại tiện dưới 3 lần mỗi tuần, kèm theo một hoặc nhiều biểu hiện: phân cứng, phải rặn nhiều, cảm giác đi không hết, hoặc phải dùng tay hỗ trợ. Điều quan trọng là so với thói quen bình thường của chính người đó — có người đi mỗi ngày, có người 2-3 ngày một lần và vẫn bình thường.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Thuốc nhuận tràng dùng lâu dài có sao không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tùy loại. Nhóm tạo khối và nhóm thẩm thấu thường được coi là an toàn hơn khi dùng kéo dài dưới sự theo dõi của bác sĩ. Nhóm kích thích nhu động nếu lạm dụng có thể làm ruột giảm khả năng co bóp tự nhiên. Người cao tuổi không nên tự mua thuốc nhuận tràng dùng liên tục mà nên hỏi bác sĩ, đặc biệt khi đang dùng nhiều thuốc khác.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ăn nhiều chất xơ có luôn tốt cho táo bón không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không phải luôn luôn. Tăng chất xơ đột ngột mà không tăng nước có thể làm táo bón nặng hơn và gây đầy hơi, chướng bụng. Cần tăng từ từ trong 1-2 tuần và uống đủ nước kèm theo. Ngoài ra với một số trường hợp táo bón do nhu động ruột chậm hoặc do tắc nghẽn, tăng chất xơ có thể không giúp ích hoặc gây hại — nên cần bác sĩ đánh giá nguyên nhân trước.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Táo bón có thể gây biến chứng gì ở người cao tuổi?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Táo bón kéo dài có thể dẫn đến ứ phân, trĩ, nứt hậu môn, sa trực tràng. Nghiêm trọng hơn, ứ phân nặng có thể gây tắc ruột — tình trạng cấp cứu. Ngoài ra, rặn nhiều làm tăng huyết áp đột ngột, nguy hiểm với người có bệnh tim mạch. Ở người cao tuổi, ứ phân đôi khi biểu hiện ngược đời bằng tiêu chảy (phân lỏng rỉ qua khối phân cứng), dễ khiến gia đình hiểu nhầm.</p>
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
    "headline": "Táo bón ở người cao tuổi: Nguyên nhân, cách xử lý và khi nào cần đi khám",
    "description": "Táo bón rất phổ biến ở người cao tuổi và có thể gây biến chứng nghiêm trọng. Nguyên nhân thực sự, cách xử lý an toàn và khi nào cần đi khám.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 88,
  slug: 'tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi',
  oldSlugs: [
    'tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi'
  ],
  title: 'Táo bón ở người cao tuổi: Nguyên nhân, cách xử lý và khi nào cần đi khám',
  category: 'Sức khỏe người cao tuổi',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 88 to news.json!');
