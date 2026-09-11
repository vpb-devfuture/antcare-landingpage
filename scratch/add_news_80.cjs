const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\dau_hieu_som_sa_sut_tri_tue_1789121218029.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Quên tên người, quên chỗ để chìa khóa là bình thường. Nhưng có những kiểu quên khác hẳn về bản chất — và nhận ra sớm tạo khác biệt lớn cho việc điều trị.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Khác biệt cốt lõi: <strong>quên do tuổi già không ảnh hưởng đến sinh hoạt hằng ngày</strong>
      (quên tên rồi nhớ lại, quên chỗ để đồ rồi tìm thấy), còn <strong>sa sút trí tuệ làm mất khả năng
      thực hiện việc quen thuộc</strong> (quên cách nấu món ăn đã nấu cả đời, lạc đường ở nơi rất quen,
      quên đã uống thuốc rồi uống tiếp).
      Mười dấu hiệu sớm cần chú ý gồm: quên ảnh hưởng sinh hoạt, khó làm việc quen thuộc,
      lẫn lộn thời gian và địa điểm, khó tìm từ khi nói, để đồ sai chỗ bất thường,
      giảm khả năng phán đoán, rút lui khỏi hoạt động xã hội, thay đổi tính cách,
      khó xử lý con số, và giảm khả năng nhìn nhận không gian.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trợ cấp hưu trí xã hội 2026: Ai được hưởng và thủ tục đăng ký thế nào
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/vien-duong-lao-hay-cham-soc-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ranh giới giữa quên thông thường và bệnh lý</h2>
  <p>Đây là câu hỏi mà hầu hết gia đình đều băn khoăn, và câu trả lời không nằm ở <em>quên nhiều hay ít</em> mà ở <em>kiểu quên</em>.</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Tình huống</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Lão hóa bình thường</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Dấu hiệu đáng lo</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Quên tên</td>
          <td style="padding: 0.8rem 1rem;">Quên tên người quen rồi nhớ lại sau</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Quên tên con cháu thân thiết, hoặc không nhận ra người thân</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Để quên đồ</td>
          <td style="padding: 0.8rem 1rem;">Quên chỗ để kính rồi tìm thấy</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Để đồ ở chỗ vô lý (điều khiển tivi trong tủ lạnh) và không nhớ nổi</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Việc quen thuộc</td>
          <td style="padding: 0.8rem 1rem;">Đôi khi cần nhớ lại các bước</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Quên cách nấu món đã nấu cả đời, quên cách dùng bếp ga</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Đường đi</td>
          <td style="padding: 0.8rem 1rem;">Nhầm đường ở nơi lạ</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Lạc đường ở khu phố sống mấy chục năm</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cuộc trò chuyện</td>
          <td style="padding: 0.8rem 1rem;">Quên một vài chi tiết</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Hỏi lại cùng một câu nhiều lần trong vài phút</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Nguyên tắc chung: <strong>quên do tuổi tác không làm mất khả năng tự sinh hoạt. Sa sút trí tuệ thì có.</strong></p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Mười dấu hiệu sớm</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">1. Quên ảnh hưởng đến sinh hoạt hằng ngày</h3>
  <p>Đặc biệt là quên thông tin vừa mới học. Hỏi lại cùng một câu nhiều lần, phải phụ thuộc vào giấy nhớ hoặc người nhà cho những việc trước đây tự làm được.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">2. Khó khăn khi làm việc quen thuộc</h3>
  <p>Quên các bước nấu món ăn thường ngày, không dùng được máy giặt đã dùng nhiều năm, quên cách đi đến chợ quen. Đây là dấu hiệu phân biệt rõ nhất với quên thông thường.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">3. Lẫn lộn về thời gian và địa điểm</h3>
  <p>Không nhớ hôm nay là thứ mấy, tháng mấy. Nặng hơn: không biết mình đang ở đâu, hoặc làm sao mình đến được chỗ đó.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">4. Khó tìm từ khi nói chuyện</h3>
  <p>Dừng giữa câu không biết nói tiếp thế nào, gọi đồ vật bằng tên sai ("cái để viết" thay vì "cái bút"), hoặc lặp lại cùng một câu chuyện nhiều lần.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">5. Để đồ sai chỗ một cách bất thường</h3>
  <p>Không phải quên chỗ để mà là để ở nơi vô lý. Kèm theo đó, người bệnh thường không lần lại được các bước để tìm — và đôi khi nghi ngờ người khác lấy trộm.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">6. Giảm khả năng phán đoán</h3>
  <p>Cho tiền người lạ, dễ tin những cuộc gọi lừa đảo, mặc quần áo không phù hợp thời tiết, quyết định tài chính bất thường. Đây là dấu hiệu quan trọng vì nó gây hậu quả thực tế nghiêm trọng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">7. Rút lui khỏi hoạt động xã hội</h3>
  <p>Bỏ các sinh hoạt vẫn tham gia đều — hội người cao tuổi, nhóm tập dưỡng sinh, đi chùa. Thường vì họ tự nhận ra mình có gì đó thay đổi và ngại người khác biết.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">8. Thay đổi tính cách và tâm trạng</h3>
  <p>Trở nên nghi ngờ, dễ cáu, lo âu, hoặc sợ hãi khi ra khỏi vùng quen thuộc. Người vốn hiền lành trở nên gắt gỏng — đây là thay đổi gia đình dễ nhận ra nhất nhưng lại hay quy cho "tính khí người già".</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">9. Khó xử lý con số</h3>
  <p>Không tính được tiền thừa khi đi chợ, quên trả tiền điện nước, khó theo dõi sổ sách đơn giản mà trước đây làm tốt.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">10. Giảm khả năng nhìn nhận không gian</h3>
  <p>Khó ước lượng khoảng cách, va vào đồ đạc, khó phân biệt màu sắc tương phản. Ở người còn lái xe, đây là dấu hiệu nguy hiểm cần xử lý ngay.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Một số tình trạng gây suy giảm nhận thức <strong>có thể điều trị được</strong>: thiếu vitamin B12, suy giáp, trầm cảm, tác dụng phụ của thuốc, mất ngủ kéo dài, và tràn dịch não áp lực bình thường. Đây là lý do quan trọng nhất để đưa đi khám thay vì mặc định "già rồi ai chẳng lẫn". Bỏ qua một nguyên nhân điều trị được là mất đi cơ hội phục hồi.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chuẩn bị gì khi đưa bố mẹ đi khám</h2>
  <p>Khám trí nhớ khác với khám bệnh thông thường ở một điểm: <strong>bác sĩ cần thông tin từ người nhà</strong>, vì bản thân người bệnh thường không nhận ra hoặc giảm nhẹ vấn đề.</p>
  <p>Nên chuẩn bị trước:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ghi lại các biểu hiện cụ thể kèm thời điểm bắt đầu và tần suất
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ghi rõ diễn tiến: xuất hiện từ từ trong nhiều tháng hay đột ngột
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Danh sách đầy đủ thuốc đang dùng, kể cả thực phẩm chức năng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tiền sử bệnh: tăng huyết áp, đái tháo đường, đột quỵ, chấn thương đầu
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tiền sử gia đình có người mắc sa sút trí tuệ không
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người nhà sống cùng nên đi cùng để bổ sung thông tin
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nghi ngờ nhưng bố mẹ không chịu đi khám</h2>
  <p>Đây là tình huống rất phổ biến. Người cao tuổi thường từ chối vì sợ nhận kết quả xấu, hoặc vì không thấy mình có vấn đề.</p>
  <p>Vài cách tiếp cận thường hiệu quả hơn: kết hợp vào một buổi khám sức khỏe tổng quát thay vì gọi thẳng là khám trí nhớ; nhờ bác sĩ gia đình hoặc bác sĩ đang điều trị bệnh nền đề xuất; hoặc lấy lý do kiểm tra để loại trừ nguyên nhân từ thuốc đang dùng.</p>
  <p>Điều nên tránh: tranh cãi để chứng minh bố mẹ có vấn đề. Việc này thường làm họ phòng thủ hơn và càng từ chối.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Đưa bố mẹ đi khám chuyên khoa</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Nếu gia đình cần đưa người thân đi khám trí nhớ hoặc thần kinh, ANTCARE hỗ trợ đưa đón, làm thủ tục và ghi chép đầy đủ kết luận của bác sĩ. Từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sa sút trí tuệ và Alzheimer khác nhau thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Sa sút trí tuệ là tên gọi chung cho nhóm triệu chứng suy giảm nhận thức ảnh hưởng đến sinh hoạt. Alzheimer là nguyên nhân phổ biến nhất gây sa sút trí tuệ, chiếm khoảng 60-70% các trường hợp. Ngoài Alzheimer còn có sa sút trí tuệ do mạch máu (sau đột quỵ), sa sút trí tuệ thể Lewy và một số nguyên nhân khác. Chỉ bác sĩ chuyên khoa mới xác định được nguyên nhân cụ thể qua thăm khám và các xét nghiệm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Khám sa sút trí tuệ ở đâu và khám những gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nên khám tại chuyên khoa Thần kinh hoặc Lão khoa. Tại Hà Nội có Bệnh viện Lão khoa Trung ương chuyên sâu về lĩnh vực này. Quy trình khám thường gồm: hỏi bệnh sử chi tiết (rất cần người nhà đi cùng để bổ sung thông tin), làm các bài kiểm tra nhận thức, xét nghiệm máu để loại trừ nguyên nhân khác như thiếu vitamin B12 hoặc rối loạn tuyến giáp, và có thể chụp cộng hưởng từ não.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sa sút trí tuệ có chữa khỏi được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Phần lớn các dạng sa sút trí tuệ chưa có thuốc chữa khỏi hoàn toàn, nhưng có thuốc và biện pháp làm chậm tiến triển và cải thiện chất lượng sống. Quan trọng hơn: một số trường hợp suy giảm nhận thức có nguyên nhân điều trị được — thiếu vitamin B12, suy giáp, trầm cảm, tác dụng phụ của thuốc, tràn dịch não. Đây là lý do phải đi khám để tìm nguyên nhân thay vì mặc định là bệnh không chữa được.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Gia đình có thể làm gì để giảm nguy cơ cho bố mẹ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Các yếu tố có bằng chứng giúp giảm nguy cơ gồm: kiểm soát tốt huyết áp và đường huyết, vận động thể chất đều đặn, duy trì hoạt động trí óc (đọc sách, chơi cờ, học điều mới), giữ kết nối xã hội, ngủ đủ giấc, điều trị suy giảm thính lực nếu có, và không hút thuốc. Kiểm soát huyết áp ở tuổi trung niên được xem là một trong những yếu tố quan trọng nhất.</p>
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
    "headline": "10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường",
    "description": "Phân biệt quên do tuổi già và dấu hiệu sa sút trí tuệ. 10 biểu hiện sớm cần đưa bố mẹ đi khám và những gì gia đình có thể làm ngay.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 80,
  slug: "dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi",
  oldSlugs: [
    "dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi",
    "sa-sut-tri-tue-nguoi-cao-tuoi"
  ],
  title: "10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường",
  category: "Sức khỏe người cao tuổi",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Phân biệt quên do tuổi già và dấu hiệu sa sút trí tuệ. 10 biểu hiện sớm cần đưa bố mẹ đi khám và những gì gia đình có thể làm ngay.",
  excerpt: "Phân biệt quên do tuổi già và dấu hiệu sa sút trí tuệ. 10 biểu hiện sớm cần đưa bố mẹ đi khám và những gì gia đình có thể làm ngay.",
  image: "/images/tin-tuc/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 80!');
