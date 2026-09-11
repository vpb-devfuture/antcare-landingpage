const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\cham_soc_sau_dot_quy_1789122145040.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/cham-soc-nguoi-sau-dot-quy-tai-nha.jpg');

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
    <h1 itemprop="headline">Chăm sóc người sau đột quỵ tại nhà: Những điều gia đình cần biết</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Giai đoạn sau khi xuất viện quyết định phần lớn khả năng phục hồi. Nhưng đây cũng là lúc gia đình phải tự xoay xở mà thường không được hướng dẫn đầy đủ.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Bốn ưu tiên khi chăm sóc người sau đột quỵ tại nhà:
      <strong>phòng biến chứng do nằm lâu</strong> (loét tì đè, viêm phổi hít, huyết khối),
      <strong>duy trì tập phục hồi chức năng đều đặn</strong> theo hướng dẫn của kỹ thuật viên,
      <strong>đảm bảo dinh dưỡng và an toàn khi ăn uống</strong> (nguy cơ sặc rất cao nếu có rối loạn nuốt),
      và <strong>kiểm soát các yếu tố nguy cơ để phòng tái phát</strong> — đặc biệt là huyết áp và uống thuốc đều.
      Ba tháng đầu sau đột quỵ là giai đoạn phục hồi nhanh nhất,
      nên tập luyện trong thời gian này đặc biệt quan trọng.
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
        <a href="/news/quan-ly-nhieu-loai-thuoc-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Quản lý nhiều loại thuốc cho người cao tuổi: Cách tránh nhầm lẫn và tương tác nguy hiểm
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giai đoạn về nhà — thử thách lớn nhất của gia đình</h2>
  <p>Khi còn ở bệnh viện, mọi việc có nhân viên y tế lo. Khi về nhà, gia đình phải tự đảm nhận mọi thứ: cho ăn, vệ sinh, tập luyện, theo dõi thuốc — thường mà không được hướng dẫn đủ chi tiết.</p>
  <p>Bốn nhóm việc cần tổ chức ngay từ ngày đầu về nhà.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">1. Phòng biến chứng do nằm lâu</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Loét tì đè</h3>
  <p>Xảy ra khi một vùng da bị đè ép kéo dài làm thiếu máu nuôi. Vị trí hay gặp: xương cùng, gót chân, mắt cá, khuỷu tay, vai, sau đầu.</p>
  <p>Phòng ngừa: <strong>thay đổi tư thế mỗi 2 giờ</strong>, kể cả ban đêm. Giữ da khô và sạch. Dùng đệm chống loét. Kiểm tra da toàn thân mỗi ngày, đặc biệt các vùng tì đè.</p>
  <p>Dấu hiệu sớm: vùng da đỏ không nhạt màu đi khi ấn nhẹ, hoặc không mất đi sau khi đã thay đổi tư thế 30 phút. Đây là lúc phải xử lý ngay, trước khi da bị tổn thương thật.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Viêm phổi hít</h3>
  <p>Xảy ra khi thức ăn hoặc nước bọt lọt vào đường thở do rối loạn nuốt. Đây là biến chứng nguy hiểm và phổ biến sau đột quỵ.</p>
  <p>Phòng ngừa: cho ăn đúng tư thế (xem phần dưới), vệ sinh răng miệng kỹ hai lần mỗi ngày, nâng đầu giường 30 độ khi nằm.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Huyết khối tĩnh mạch sâu</h3>
  <p>Nằm bất động lâu làm máu ứ đọng ở chân và dễ hình thành cục máu đông. Phòng ngừa bằng vận động thụ động: gập duỗi cổ chân, gối, háng nhiều lần mỗi ngày kể cả khi người bệnh chưa tự cử động được.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">2. Ăn uống an toàn</h2>
  <p>Rối loạn nuốt sau đột quỵ rất phổ biến và là nguyên nhân chính gây viêm phổi hít. Nếu người bệnh có rối loạn nuốt, cần được đánh giá bởi chuyên môn để xác định mức độ thức ăn phù hợp.</p>
  <p>Nguyên tắc chung khi cho ăn:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Cho ngồi thẳng lưng 90 độ, không cho ăn khi nằm
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Cho ăn từng thìa nhỏ, chậm rãi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đợi nuốt xong hẳn mới đưa thìa tiếp theo
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thức ăn đặc sệt dễ nuốt an toàn hơn nước lỏng — nước có thể cần làm đặc bằng bột chuyên dụng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Giữ tư thế ngồi ít nhất 30 phút sau khi ăn
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Không nói chuyện hoặc xem tivi trong khi ăn — cần tập trung để nuốt an toàn
    </li>
  </ul>

  <p><strong>Dấu hiệu cảnh báo:</strong> ho sặc trong hoặc sau khi ăn, giọng ướt sau khi nuốt, thức ăn đọng lại trong miệng, sốt không rõ nguyên nhân. Cần báo bác sĩ ngay.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">3. Tập phục hồi chức năng</h2>
  <p>Ba tháng đầu là giai đoạn não có khả năng tái tổ chức mạnh nhất — nên tập luyện trong thời gian này mang lại kết quả rõ rệt nhất. Nhưng cải thiện vẫn tiếp tục trong nhiều tháng đến vài năm sau nếu duy trì.</p>
  <p>Nguyên tắc:</p>
  <p><strong>Tập theo hướng dẫn của kỹ thuật viên,</strong> không tự nghĩ ra bài tập. Tập sai có thể gây đau khớp vai, co cứng cơ, hoặc chấn thương.</p>
  <p><strong>Tập đều đặn hằng ngày,</strong> nhiều lần ngắn tốt hơn một lần dài. Ví dụ 4 lần × 15 phút tốt hơn 1 lần × 60 phút.</p>
  <p><strong>Khuyến khích người bệnh tự làm</strong> những việc họ có thể làm được, dù chậm. Làm hộ mọi thứ khiến khả năng phục hồi giảm đi.</p>
  <p><strong>Chú ý bên liệt.</strong> Đỡ tay bên liệt cẩn thận khi di chuyển — khớp vai bên liệt rất dễ bị trật do cơ yếu.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Phục hồi sau đột quỵ không chỉ là vận động. Nhiều người có rối loạn ngôn ngữ, suy giảm nhận thức, hoặc trầm cảm sau đột quỵ — tỷ lệ trầm cảm sau đột quỵ khá cao và ảnh hưởng trực tiếp đến khả năng phục hồi. Nếu người thân trở nên thu mình, không muốn tập, hay khóc, gia đình nên báo với bác sĩ thay vì cho rằng đó là phản ứng bình thường.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">4. Phòng tái phát</h2>
  <p>Đây là ưu tiên dễ bị lơ là khi gia đình đang tập trung vào chăm sóc hằng ngày, nhưng lại quan trọng nhất về lâu dài.</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Việc cần làm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Uống thuốc đầy đủ</td>
          <td style="padding: 0.8rem 1rem;">Thuốc chống kết tập tiểu cầu hoặc kháng đông, thuốc huyết áp, statin — không tự ý ngừng</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Theo dõi huyết áp</td>
          <td style="padding: 0.8rem 1rem;">Đo hằng ngày, ghi lại, mang đi tái khám</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Kiểm soát đường huyết</td>
          <td style="padding: 0.8rem 1rem;">Nếu có đái tháo đường</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Chế độ ăn</td>
          <td style="padding: 0.8rem 1rem;">Giảm muối, tăng rau xanh và cá, hạn chế mỡ động vật</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Bỏ thuốc lá</td>
          <td style="padding: 0.8rem 1rem;">Yếu tố nguy cơ có thể loại bỏ hoàn toàn</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tái khám đúng lịch</td>
          <td style="padding: 0.8rem 1rem;">Không bỏ lịch dù thấy ổn định</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu cần đưa đi viện ngay</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Xuất hiện lại các dấu hiệu FAST: méo miệng, yếu tay, nói khó
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đau đầu dữ dội đột ngột
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Sốt kèm ho, khó thở — nghi ngờ viêm phổi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Sưng, đau, nóng đỏ một bên chân — nghi ngờ huyết khối
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Vùng da tì đè bị loét hở, chảy dịch
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Co giật
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thay đổi ý thức đột ngột
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về sức khỏe của người chăm sóc</h2>
  <p>Chăm sóc người sau đột quỵ là công việc kéo dài nhiều tháng đến nhiều năm, với cường độ cao cả về thể chất lẫn tinh thần. Kiệt sức ở người chăm sóc là vấn đề có thật và phổ biến.</p>
  <p>Vài điều thực tế: chia ca giữa các thành viên trong gia đình thay vì để một người gánh hết; chấp nhận sự hỗ trợ từ bên ngoài khi cần; và giữ cho bản thân có thời gian nghỉ ngơi. Người chăm sóc kiệt sức thì chất lượng chăm sóc cũng giảm theo.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Đưa đón tái khám sau đột quỵ</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Người sau đột quỵ cần tái khám định kỳ và đi tập phục hồi chức năng thường xuyên. ANTCARE hỗ trợ đưa đón và ghi chép hướng dẫn của bác sĩ cho gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Sau đột quỵ bao lâu thì bắt đầu tập phục hồi chức năng?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Càng sớm càng tốt, thường bắt đầu ngay trong bệnh viện khi tình trạng đã ổn định, có thể trong 24-48 giờ đầu với các bài tập nhẹ. Sau khi về nhà cần duy trì liên tục. Ba tháng đầu là giai đoạn não có khả năng phục hồi nhanh nhất, nhưng cải thiện vẫn có thể tiếp tục trong nhiều tháng đến vài năm sau nếu tập luyện đều đặn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người sau đột quỵ bị sặc khi ăn uống thì làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Rối loạn nuốt là biến chứng phổ biến sau đột quỵ và rất nguy hiểm vì gây viêm phổi hít. Cần được đánh giá bởi bác sĩ hoặc kỹ thuật viên chuyên về nuốt. Nguyên tắc chung khi cho ăn: cho ngồi thẳng lưng 90 độ, cho ăn từng thìa nhỏ, thức ăn đặc sệt dễ nuốt hơn nước lỏng, đợi nuốt xong hẳn mới cho thìa tiếp, và giữ tư thế ngồi ít nhất 30 phút sau ăn. Nếu ho sặc khi ăn uống, cần báo bác sĩ ngay.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Loét tì đè phòng ngừa thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nguyên tắc quan trọng nhất là thay đổi tư thế mỗi 2 giờ, kể cả ban đêm. Ngoài ra: giữ da khô sạch, dùng đệm chống loét nếu nằm nhiều, kiểm tra da hằng ngày ở các vùng tì đè (xương cùng, gót chân, mắt cá, khuỷu tay, vai), đảm bảo dinh dưỡng đủ đạm. Khi thấy vùng da đỏ không mất đi sau khi thay đổi tư thế, đó là dấu hiệu sớm của loét và cần xử lý ngay.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nguy cơ đột quỵ tái phát cao không và phòng thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Người đã bị đột quỵ có nguy cơ tái phát cao hơn đáng kể so với người chưa từng bị, đặc biệt trong năm đầu tiên. Phòng ngừa gồm: uống thuốc đầy đủ theo đơn (thuốc chống kết tập tiểu cầu hoặc kháng đông, thuốc huyết áp, statin), kiểm soát huyết áp chặt chẽ, điều trị đái tháo đường và rối loạn mỡ máu, bỏ thuốc lá, và tái khám đúng lịch. Tự ý ngừng thuốc là nguyên nhân phổ biến gây tái phát.</p>
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
    "headline": "Chăm sóc người sau đột quỵ tại nhà: Những điều gia đình cần biết",
    "description": "Hướng dẫn chăm sóc người thân sau đột quỵ tại nhà: phòng biến chứng nằm lâu, tập phục hồi chức năng, dinh dưỡng và dấu hiệu tái phát cần đi viện ngay.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 85,
  slug: "cham-soc-nguoi-sau-dot-quy-tai-nha",
  oldSlugs: [
    "cham-soc-nguoi-sau-dot-quy-tai-nha",
    "cham-soc-sau-dot-quy-tai-nha"
  ],
  title: "Chăm sóc người sau đột quỵ tại nhà: Những điều gia đình cần biết",
  category: "Chăm sóc thực tế",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Hướng dẫn chăm sóc người thân sau đột quỵ tại nhà: phòng biến chứng nằm lâu, tập phục hồi chức năng, dinh dưỡng và dấu hiệu tái phát cần đi viện ngay.",
  excerpt: "Hướng dẫn chăm sóc người thân sau đột quỵ tại nhà: phòng biến chứng nằm lâu, tập phục hồi chức năng, dinh dưỡng và dấu hiệu tái phát cần đi viện ngay.",
  image: "/images/tin-tuc/cham-soc-nguoi-sau-dot-quy-tai-nha.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 85!');
