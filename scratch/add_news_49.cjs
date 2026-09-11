const fs = require('fs');
const path = require('path');

// 1. Copy image from artifacts directory to public/images/tin-tuc/
const srcImage = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\duc_thuy_tinh_the_nguoi_cao_tuoi_1789122395654.jpg`;
const destImage = path.join(__dirname, '../public/images/tin-tuc/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi.jpg');

fs.copyFileSync(srcImage, destImage);
console.log('Successfully copied image to:', destImage);

// 2. Read news.json
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// 3. Convert previous featured article (ID 86) to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Đục thủy tinh thể là nguyên nhân hàng đầu gây giảm thị lực ở người cao tuổi và có thể chữa được. Dấu hiệu nhận biết, khi nào cần mổ và chăm sóc sau mổ.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Đục thủy tinh thể và suy giảm thị lực ở người cao tuổi: Nhận biết và điều trị</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Nhiều người cao tuổi chấp nhận sống với thị lực kém vì nghĩ đó là chuyện đương nhiên. Nhưng phần lớn nguyên nhân đều điều trị được, và cải thiện thị lực làm giảm rõ rệt nguy cơ té ngã.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Đục thủy tinh thể là nguyên nhân phổ biến nhất gây giảm thị lực ở người cao tuổi và <strong>điều trị được bằng phẫu thuật</strong>. Dấu hiệu nhận biết:
      nhìn mờ như qua sương, chói mắt khi gặp ánh sáng mạnh, nhìn màu nhạt đi hoặc ngả vàng,
      nhìn đôi ở một mắt, và phải thay kính thường xuyên.
      Cần đi khám mắt định kỳ mỗi năm một lần từ tuổi 60,
      và đi khám ngay nếu <strong>mất thị lực đột ngột, đau nhức mắt dữ dội,
      hoặc nhìn thấy chớp sáng và nhiều đốm đen bay</strong> — đây có thể là cấp cứu nhãn khoa.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/vien-duong-lao-hay-cham-soc-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao thị lực kém ở người cao tuổi không nên xem nhẹ</h2>

  <p>Ngoài ảnh hưởng trực tiếp đến sinh hoạt, thị lực kém còn kéo theo một chuỗi hệ quả mà nhiều gia đình không nghĩ tới:</p>

  <p><strong>Tăng nguy cơ té ngã.</strong> Không nhìn rõ bậc thềm, vật cản, hoặc thay đổi độ cao là nguyên nhân trực tiếp của nhiều vụ ngã.</p>

  <p><strong>Uống nhầm thuốc.</strong> Không đọc được nhãn thuốc, không phân biệt được viên thuốc giống nhau.</p>

  <p><strong>Thu hẹp hoạt động xã hội.</strong> Ngại ra ngoài vì sợ đi lại không an toàn, không nhận ra người quen dẫn đến ngại giao tiếp.</p>

  <p><strong>Ảnh hưởng đến nhận thức.</strong> Giảm tiếp nhận thông tin thị giác liên quan đến suy giảm nhận thức nhanh hơn ở người cao tuổi.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Đục thủy tinh thể — nguyên nhân phổ biến nhất</h2>

  <p>Thủy tinh thể là thấu kính trong suốt nằm sau đồng tử, giúp hội tụ ánh sáng lên võng mạc. Theo thời gian, protein trong thủy tinh thể biến đổi và làm nó đục dần — giống như nhìn qua một tấm kính mờ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Dấu hiệu nhận biết</h3>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhìn mờ như qua sương hoặc qua kính bẩn, mờ dần theo thời gian
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chói mắt khi gặp ánh sáng mạnh — đèn pha xe, ánh nắng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhìn màu nhạt đi, ngả vàng hoặc nâu
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhìn đôi ở một mắt (che mắt kia vẫn thấy hai hình)
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Phải thay kính thường xuyên vì độ cứ thay đổi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khó nhìn vào ban đêm, đặc biệt khi lái xe
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thấy quầng sáng quanh nguồn sáng
    </li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Yếu tố làm tăng nguy cơ</h3>

  <p>Tuổi tác là yếu tố chính, nhưng một số yếu tố khác làm bệnh xuất hiện sớm hơn: đái tháo đường, hút thuốc lá, tiếp xúc tia UV nhiều mà không bảo vệ mắt, dùng corticosteroid kéo dài, chấn thương mắt, và tiền sử gia đình.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về phẫu thuật</h2>

  <p>Đục thủy tinh thể không điều trị được bằng thuốc hay nhỏ mắt. Phương pháp duy nhất có hiệu quả là phẫu thuật thay thủy tinh thể nhân tạo.</p>

  <p>Phương pháp phổ biến hiện nay là <strong>phaco</strong> — dùng sóng siêu âm tán nhuyễn thủy tinh thể đục rồi hút ra, sau đó đặt thủy tinh thể nhân tạo vào. Vết mổ nhỏ, thường không cần khâu, thời gian mổ 15-30 phút, gây tê tại chỗ và không cần nằm viện dài.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Khi nào nên mổ</h3>

  <p>Quan niệm cũ là phải chờ "đục chín" mới mổ — điều này không còn đúng với kỹ thuật hiện đại. Thời điểm mổ phụ thuộc vào mức độ ảnh hưởng đến sinh hoạt:</p>

  <ul>
    <li>Khó đọc sách báo, xem tivi dù đã đeo kính</li>
    <li>Khó nhận mặt người quen</li>
    <li>Đi lại không an toàn, đã có lần vấp ngã do không nhìn rõ</li>
    <li>Không lái xe được nữa</li>
  </ul>

  <p>Với người cao tuổi, mổ sớm hơn có lợi ích thêm: giảm nguy cơ té ngã, và phục hồi thường nhanh hơn khi sức khỏe tổng thể còn tốt.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ lưu ý về chăm sóc sau mổ</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Sau mổ mắt, người cao tuổi thường cần người hỗ trợ trong vài ngày đầu vì thị lực chưa ổn định và có nhiều việc cần kiêng. Ba điều gia đình cần chuẩn bị: người đưa về sau mổ (không tự đi được), người nhắc và hỗ trợ nhỏ thuốc đúng lịch, và rà soát nhà cửa để tránh vấp ngã trong thời gian thị lực chưa ổn định.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ba bệnh mắt khác cần biết</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Thoái hóa hoàng điểm tuổi già</h3>

  <p>Ảnh hưởng vùng trung tâm võng mạc, gây mờ hoặc mất thị lực trung tâm trong khi thị lực ngoại vi vẫn còn. Biểu hiện: khó đọc, khó nhận mặt người, thấy đường thẳng bị cong hoặc méo.</p>

  <p>Cách tự kiểm tra đơn giản tại nhà: nhìn vào khung cửa sổ hoặc gạch lát tường, che từng mắt. Nếu thấy các đường thẳng bị cong, méo hoặc có vùng trống ở giữa — cần đi khám ngay.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Glôcôm (thiên đầu thống)</h3>

  <p>Tăng áp lực trong mắt gây tổn thương thần kinh thị giác. Nguy hiểm ở chỗ dạng phổ biến nhất tiến triển <strong>âm thầm không đau</strong>, mất dần thị trường ngoại vi mà người bệnh không nhận ra cho đến khi tổn thương đã nặng.</p>

  <p>Tổn thương do glôcôm <strong>không hồi phục được</strong> — nên phát hiện sớm qua khám định kỳ là cách duy nhất để bảo vệ thị lực.</p>

  <p>Có một dạng glôcôm cấp gây đau nhức mắt dữ dội, đỏ mắt, nhìn mờ, buồn nôn — đây là cấp cứu nhãn khoa, cần đến bệnh viện ngay.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bệnh võng mạc đái tháo đường</h3>

  <p>Biến chứng của đái tháo đường lên mạch máu võng mạc. Người có tiểu đường cần khám mắt <strong>mỗi năm ít nhất một lần</strong> dù không có triệu chứng gì về mắt, vì tổn thương xuất hiện trước khi có biểu hiện.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào cần đi khám ngay</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Mất thị lực đột ngột ở một hoặc hai mắt
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đau nhức mắt dữ dội kèm đỏ mắt, buồn nôn
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhìn thấy chớp sáng, hoặc đột ngột thấy nhiều đốm đen bay trước mắt
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thấy như có màn che một phần thị trường
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhìn đường thẳng thành cong, méo
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Sau chấn thương mắt
    </li>
  </ul>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ: Đưa bố mẹ đi khám mắt</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Khám mắt và mổ đục thủy tinh thể cần người đưa đón, đặc biệt sau mổ khi thị lực chưa ổn định. ANTCARE hỗ trợ đưa đón và ghi chép hướng dẫn chăm sóc sau mổ.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Mổ đục thủy tinh thể có nguy hiểm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là một trong những phẫu thuật phổ biến và có tỷ lệ thành công cao trong y học hiện đại. Phương pháp phổ biến hiện nay là phaco — tán nhuyễn thủy tinh thể bằng siêu âm rồi đặt thủy tinh thể nhân tạo, thường chỉ mất 15-30 phút, gây tê tại chỗ, không cần nằm viện dài. Tuy nhiên như mọi phẫu thuật đều có rủi ro, và người có bệnh nền như tiểu đường cần được đánh giá kỹ trước mổ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Khi nào thì nên mổ đục thủy tinh thể?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không có mốc cố định. Trước đây quan niệm phải chờ đục chín mới mổ, nhưng y học hiện đại không còn theo cách này. Thời điểm mổ được quyết định dựa trên mức độ ảnh hưởng đến sinh hoạt: khi thị lực giảm đến mức khó đọc, khó nhận mặt người, khó đi lại an toàn, hoặc không lái xe được nữa. Với người cao tuổi, mổ sớm hơn còn giúp giảm nguy cơ té ngã.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sau mổ mắt cần kiêng gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Thông thường trong vài tuần đầu cần: không dụi mắt, không cúi gập người hoặc nâng vật nặng, tránh nước vào mắt khi tắm gội, đeo kính bảo vệ theo hướng dẫn, nhỏ thuốc đúng lịch. Cần tái khám đúng hẹn để bác sĩ kiểm tra. Hướng dẫn cụ thể khác nhau giữa các ca nên gia đình cần ghi lại chính xác lời dặn của bác sĩ phẫu thuật.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ngoài đục thủy tinh thể, còn nguyên nhân nào gây giảm thị lực ở người cao tuổi?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Ba nguyên nhân phổ biến khác: thoái hóa hoàng điểm tuổi già (ảnh hưởng thị lực trung tâm, khó đọc và nhận mặt), glôcôm hay còn gọi thiên đầu thống (tăng áp lực trong mắt, gây mất thị trường ngoại vi âm thầm), và bệnh võng mạc đái tháo đường ở người có tiểu đường. Cả ba đều cần phát hiện sớm, đây là lý do khám mắt định kỳ hằng năm rất quan trọng.</p>
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
    "headline": "Đục thủy tinh thể và suy giảm thị lực ở người cao tuổi: Nhận biết và điều trị",
    "description": "Đục thủy tinh thể là nguyên nhân hàng đầu gây giảm thị lực ở người cao tuổi và có thể chữa được. Dấu hiệu nhận biết, khi nào cần mổ và chăm sóc sau mổ.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 87,
  slug: 'duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi',
  oldSlugs: [
    'duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi'
  ],
  title: 'Đục thủy tinh thể và suy giảm thị lực ở người cao tuổi: Nhận biết và điều trị',
  category: 'Sức khỏe người cao tuổi',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 87 to news.json!');
