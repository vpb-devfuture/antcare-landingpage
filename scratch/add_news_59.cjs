const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 59) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Danh sách giấy tờ, đồ dùng và thông tin cần chuẩn bị trước khi đưa người cao tuổi đi khám bệnh, kèm lịch trình theo mốc thời gian từ tối hôm trước.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Phần lớn những buổi khám mệt mỏi, phải quay về tay không hoặc phải hẹn lại lần khác đều bắt nguồn từ khâu chuẩn bị, chứ không phải từ bệnh viện.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Trước khi đưa người cao tuổi đi khám, cần chuẩn bị bốn nhóm: <strong>giấy tờ</strong> (căn cước, thẻ bảo hiểm y tế, giấy chuyển tuyến nếu có, sổ khám cũ, đơn thuốc đang dùng), <strong>thông tin</strong> (danh sách triệu chứng đã ghi lại, câu hỏi muốn hỏi bác sĩ, tiền sử dị ứng thuốc), <strong>đồ dùng</strong> (nước uống, đồ ăn nhẹ, áo khoác mỏng, thuốc đang dùng mang theo), và <strong>hậu cần</strong> (đặt lịch trước qua ứng dụng nếu bệnh viện có, xác định chỗ gửi xe, dự trù thời gian chờ). Nếu cần xét nghiệm máu, người khám thường phải nhịn ăn từ 8–10 tiếng trước đó.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao khâu chuẩn bị quyết định chất lượng buổi khám</h2>
  <p>Một buổi khám ở bệnh viện công thường kéo dài từ sáng đến trưa, nhưng thời gian thực sự được ngồi trước mặt bác sĩ chỉ khoảng 5–10 phút. Toàn bộ giá trị của buổi đi nằm gọn trong quãng ngắn đó.</p>
  <p>Nếu bước vào phòng khám mà quên mang sổ cũ, không nhớ tên thuốc đang uống, không mô tả được triệu chứng cho rõ ràng — bác sĩ thiếu dữ liệu để đánh giá, và buổi khám mất phần lớn giá trị. Với người cao tuổi, hậu quả còn nặng hơn: phải hẹn lại nghĩa là thêm một lần đi lại mệt mỏi.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          12 câu hỏi nên hỏi bác sĩ khi đưa người cao tuổi đi khám
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/5-noi-so-vo-hinh-khien-nguoi-cao-tuoi-ngai-di-benh-vien" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 1: Giấy tờ</h2>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ <strong>Căn cước công dân</strong> của người khám</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ <strong>Thẻ bảo hiểm y tế</strong>, hoặc ứng dụng VssID đã cài sẵn trên điện thoại</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ <strong>Giấy chuyển tuyến</strong> nếu khám trái tuyến theo diện bảo hiểm</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ <strong>Sổ khám bệnh</strong> của các lần trước</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ <strong>Đơn thuốc đang dùng</strong>, bản gốc hoặc ảnh chụp rõ nét</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ <strong>Kết quả xét nghiệm, phim chụp gần đây</strong> nếu có</li>
  </ul>

  <p>Mục cuối thường bị bỏ qua nhưng rất đáng giá. Nếu bố mẹ vừa chụp X-quang cách đây hai tháng ở bệnh viện khác, mang theo phim có thể giúp tránh phải chụp lại — vừa tiết kiệm chi phí, vừa tránh cho người cao tuổi phải làm thêm thủ tục.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Mẹo nhỏ nhưng hữu ích</span>
    <p style="margin-bottom: 0;">Chụp ảnh toàn bộ giấy tờ và lưu vào một album riêng trên điện thoại của bạn. Khi quên mang bản gốc, ảnh chụp vẫn giúp bác sĩ nắm được thông tin. Album này cũng dùng được cho những lần khám sau và cho tình huống nhập viện đột xuất.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 2: Thông tin cần chuẩn bị</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">Ghi lại triệu chứng trước khi đi</h3>
  <p>Đây là việc nên làm vài ngày trước buổi khám, không phải làm trong lúc ngồi chờ. Người cao tuổi khi đứng trước bác sĩ thường quên mất điều mình định nói, hoặc trả lời "cũng bình thường" theo phản xạ.</p>
  <p>Với mỗi triệu chứng, ghi bốn thông tin:</p>
  <ul>
    <li>Bắt đầu từ khi nào</li>
    <li>Xuất hiện vào lúc nào trong ngày, có liên quan đến ăn uống hay vận động không</li>
    <li>Mức độ và tần suất</li>
    <li>Đã dùng thuốc gì cho triệu chứng này chưa</li>
  </ul>
  <p>Ví dụ một ghi chép có ích: <em>"Đau đầu vùng gáy, bắt đầu khoảng ba tuần nay, thường vào buổi sáng sau khi ngủ dậy, khoảng 3–4 lần một tuần, đã uống paracetamol thì đỡ nhưng lại tái phát."</em></p>
  <p>So với câu "dạo này hay đau đầu", ghi chép này giúp bác sĩ có định hướng tốt hơn nhiều.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Danh sách câu hỏi</h3>
  <p>Ghi ra giấy 3–5 câu quan trọng nhất, xếp theo thứ tự ưu tiên. Thời gian khám ngắn, nên nếu chỉ hỏi được hai câu thì đó phải là hai câu quan trọng nhất.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Tiền sử dị ứng thuốc</h3>
  <p>Nếu bố mẹ từng dị ứng với loại thuốc nào, cần ghi rõ tên thuốc và biểu hiện. Đây là thông tin bắt buộc phải nói với bác sĩ, kể cả khi bác sĩ không hỏi.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 3: Đồ dùng mang theo</h2>
  <table style="width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.95rem;">
    <thead>
      <tr style="background: #efe7fb; color: #2a1b3d;">
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 700; color: #2a1b3d; background: #efe7fb;">Đồ dùng</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 700; color: #2a1b3d; background: #efe7fb;">Lý do</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nước lọc</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Chờ lâu, người cao tuổi dễ mất nước</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Đồ ăn nhẹ (bánh, sữa)</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Ăn ngay sau khi lấy máu xong nếu phải nhịn ăn</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Áo khoác mỏng</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Phòng khám và khu chờ thường bật điều hòa lạnh</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Toàn bộ thuốc đang dùng</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Để bác sĩ xem trực tiếp, chính xác hơn là kể tên</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Kính đọc sách</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cần khi ký giấy tờ, đọc hướng dẫn</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Gậy chống hoặc dụng cụ hỗ trợ đi lại</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bệnh viện rộng, phải di chuyển nhiều</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tiền mặt và thẻ</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Một số quầy chưa nhận thanh toán không tiền mặt</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Sạc dự phòng</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Điện thoại cần dùng cho VssID, đặt xe, liên lạc</td></tr>
    </tbody>
  </table>

  <p>Về khoản thuốc: nên mang <strong>cả vỏ hộp và vỉ thuốc</strong>, không chỉ ghi tên ra giấy. Nhiều loại thuốc có tên gần giống nhau nhưng hoạt chất và hàm lượng khác nhau.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 4: Hậu cần</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">Đặt lịch trước nếu có thể</h3>
  <p>Nhiều bệnh viện lớn hiện có ứng dụng hoặc tổng đài đặt lịch khám. Đặt trước giúp giảm đáng kể thời gian chờ — điều đặc biệt quan trọng với người cao tuổi vì ngồi chờ lâu trong môi trường đông người rất mệt.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Chỗ gửi xe</h3>
  <p>Tìm hiểu trước khu vực gửi xe và khoảng cách từ đó tới khu khám. Ở một số bệnh viện, quãng đường đi bộ từ bãi xe vào là một trở ngại thực sự với người đi lại khó khăn.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Dự trù thời gian</h3>
  <p>Với bệnh viện công, nên dự trù cả buổi sáng. Nếu có chỉ định xét nghiệm và phải chờ kết quả, có thể kéo dài tới đầu giờ chiều. Đừng xếp lịch làm việc ngay sau đó.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Lịch trình theo mốc thời gian</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">Tối hôm trước</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Soạn đủ giấy tờ vào một túi riêng, để sẵn ở cửa</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Xác nhận lại xem có phải nhịn ăn không</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Hỏi bác sĩ điều trị (nếu chưa rõ) về việc sáng mai có uống thuốc như thường lệ không</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Nhắc bố mẹ ngủ sớm, không thức khuya</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Chuẩn bị quần áo rộng rãi, dễ cởi — thuận tiện khi đo huyết áp, khám hoặc siêu âm</li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f;">Sáng hôm đi</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Đo huyết áp, mạch tại nhà và ghi lại — bác sĩ thường hỏi chỉ số ở nhà</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Nếu không phải nhịn ăn: ăn nhẹ, không ăn quá no</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Đi vệ sinh trước khi ra khỏi nhà</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Kiểm tra lại túi giấy tờ một lần nữa</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Xuất phát sớm hơn dự kiến 30 phút</li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f;">Tại bệnh viện</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Hỏi ngay quầy hướng dẫn về khu vực ưu tiên cho người cao tuổi</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Lấy số thứ tự và xác nhận đúng khoa cần khám</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Tìm chỗ ngồi chờ có ghế tựa, tránh chỗ gió lùa hoặc điều hòa thổi thẳng</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Trong lúc chờ, xem lại danh sách câu hỏi với bố mẹ</li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f;">Trong phòng khám</h3>
  <p>Để bố mẹ tự trả lời bác sĩ trước, chỉ bổ sung khi cần. Nhiều người con quen trả lời thay, điều này khiến bác sĩ mất đi thông tin trực tiếp từ người bệnh, và cũng khiến người cao tuổi cảm thấy mình bị gạt ra ngoài cuộc trò chuyện về chính sức khỏe của mình.</p>
  <p><strong>Ghi chép lại lời bác sĩ dặn ngay tại chỗ.</strong> Đây là việc quan trọng nhất trong cả buổi. Chẩn đoán, tên thuốc, liều dùng, lịch tái khám, dấu hiệu cần quay lại ngay — tất cả nên được ghi ra hoặc chụp lại, vì trí nhớ sau một buổi mệt mỏi rất không đáng tin.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Sau khi về nhà</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Chụp ảnh đơn thuốc và kết quả, lưu vào album hồ sơ sức khỏe</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Gửi tóm tắt cho các anh chị em khác trong gia đình</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Ghi lịch tái khám vào lịch điện thoại kèm nhắc nhở trước 3 ngày</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Sắp thuốc mới vào hộp chia theo ngày, bỏ thuốc cũ không còn dùng ra khỏi tủ</li>
  </ul>

  <p>Bước cuối cùng quan trọng hơn nhiều người nghĩ: để lẫn thuốc cũ và thuốc mới trong cùng một ngăn tủ là nguyên nhân phổ biến khiến người cao tuổi uống nhầm.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Khi bạn không thể đi cùng</h2>
  <p>Với những người con ở xa hoặc không xin nghỉ làm được, toàn bộ checklist trên vẫn áp dụng được — chỉ cần có người thực hiện thay. Điều cần đảm bảo là người đi cùng nắm được ba thứ: giấy tờ đầy đủ, danh sách triệu chứng và câu hỏi, và trách nhiệm ghi chép lại lời bác sĩ để gửi về cho gia đình.</p>
  <p>Đây chính là ba việc mà dịch vụ đồng hành khám bệnh đảm nhận: chuẩn bị, làm thủ tục, và mang thông tin về đầy đủ cho người con không có mặt.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Để ANTCARE lo phần chuẩn bị và đi cùng</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Đưa đón tận nhà, đo chỉ số trước khi đi, làm thủ tục, ghi chép lời bác sĩ dặn và gửi lại cho gia đình. Chi phí từ 299.000đ/buổi.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Đi khám cần mang những giấy tờ gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cần mang căn cước công dân, thẻ bảo hiểm y tế (hoặc ứng dụng VssID trên điện thoại), giấy chuyển tuyến nếu khám trái tuyến theo diện bảo hiểm, sổ khám bệnh của các lần trước, và đơn thuốc đang dùng. Nếu có kết quả xét nghiệm hay phim chụp gần đây thì mang theo, vì bác sĩ có thể dùng lại và tránh phải làm lại từ đầu.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Trước khi xét nghiệm máu có phải nhịn ăn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Với các xét nghiệm phổ biến như đường huyết lúc đói và mỡ máu, người khám cần nhịn ăn 8–10 tiếng trước khi lấy máu, chỉ được uống nước lọc. Tuy nhiên không phải xét nghiệm nào cũng yêu cầu nhịn ăn. Cách chắc chắn nhất là gọi hỏi bệnh viện trước, hoặc hỏi bác sĩ ngay khi được chỉ định xét nghiệm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người cao tuổi đang uống thuốc thì sáng đi khám có nên uống không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không có câu trả lời chung cho mọi loại thuốc. Với thuốc huyết áp, thường vẫn uống bình thường. Với thuốc tiểu đường, nếu phải nhịn ăn để xét nghiệm thì việc uống thuốc có thể gây hạ đường huyết nguy hiểm. Gia đình nên hỏi bác sĩ điều trị trước ngày đi khám, và trong mọi trường hợp đều nên mang theo tất cả thuốc đang dùng để bác sĩ xem trực tiếp.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên đi khám vào thời điểm nào để đỡ phải chờ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Các bệnh viện công thường đông nhất vào sáng thứ Hai và sáng sau kỳ nghỉ lễ. Giữa tuần, đặc biệt thứ Ba đến thứ Năm, thường vắng hơn. Nếu bệnh viện có ứng dụng đặt lịch trước, nên đặt lịch để rút ngắn thời gian chờ đáng kể. Với người cao tuổi, nhiều bệnh viện có quầy ưu tiên — nên hỏi ngay khi vào.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ",
    "description": "Danh sách giấy tờ, đồ dùng và thông tin cần chuẩn bị trước khi đưa người cao tuổi đi khám bệnh, kèm lịch trình theo mốc thời gian từ tối hôm trước.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 59,
  slug: 'chuan-bi-gi-khi-dua-bo-me-di-kham-benh',
  oldSlugs: ['chuan-bi-gi-khi-dua-bo-me-di-kham-benh', 'chuan-bi-gi-khi-dua-bo-me-di-kham-benh-checklist-day-du'],
  title: 'Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ',
  category: 'Đồng hành Khám bệnh & Lão khoa',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/chuan-bi-gi-khi-dua-bo-me-di-kham-benh.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 59 to news.json!');
