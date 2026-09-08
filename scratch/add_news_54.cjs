const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 54) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Huyết áp, mạch, nhiệt độ, nhịp thở và SpO2 là 5 chỉ số sinh tồn gia đình nên theo dõi định kỳ cho người cao tuổi. Ngưỡng tham chiếu và cách ghi chép đúng.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Huyết áp, mạch, nhiệt độ, nhịp thở và SpO2 là 5 chỉ số sinh tồn gia đình nên theo dõi định kỳ cho người cao tuổi. Ngưỡng tham chiếu và cách ghi chép đúng.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Năm chỉ số sinh tồn cần theo dõi định kỳ cho người cao tuổi là: <strong>huyết áp, mạch (nhịp tim), nhiệt độ cơ thể, nhịp thở và nồng độ oxy máu (SpO2)</strong>. Với người từ 60 tuổi trở lên và sức khỏe ổn định, nên đo tối thiểu 1–2 lần mỗi tuần. Người có bệnh nền như tăng huyết áp, tim mạch hoặc đái tháo đường cần đo hằng ngày theo hướng dẫn của bác sĩ điều trị.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao nên theo dõi định kỳ thay vì đợi đến lúc khám</h2>
  <p>Phần lớn gia đình Việt chỉ đo các chỉ số sức khỏe của bố mẹ khi thấy có gì đó bất thường, hoặc khi chuẩn bị đi khám. Cách này bỏ lỡ điều quan trọng nhất: <strong>xu hướng thay đổi</strong>.</p>
  <p>Một lần đo huyết áp 150/90 mmHg có thể chỉ phản ánh việc ông bà vừa leo cầu thang hoặc đang lo lắng. Nhưng nếu trong ba tuần liền, huyết áp buổi sáng tăng dần từ 130 lên 150, đó là tín hiệu cần được bác sĩ xem xét. Chỉ số đơn lẻ gây hoang mang; chuỗi chỉ số mới mang thông tin.</p>
  <p>Ở tuổi cao, cơ thể cũng phản ứng chậm và mờ nhạt hơn. Nhiều tình trạng tiến triển âm thầm trong thời gian dài mà người bệnh không cảm thấy khó chịu rõ rệt, hoặc có cảm thấy nhưng cho rằng đó là chuyện bình thường của tuổi già. Theo dõi định kỳ là cách bù lại cho sự mờ nhạt đó.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-o-nguoi-cao-tuoi-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/cam-nang-chon-qua-tang-thiet-bi-y-te-gia-dinh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cẩm Nang Chọn Quà Tặng Thiết Bị Y Tế Gia Đình Cho Cha Mẹ: Mua Đúng Nhu Cầu, Tránh Lãng Phí
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Năm chỉ số cần theo dõi</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">1. Huyết áp</h3>
  <p>Đây là chỉ số quan trọng nhất và cũng dễ theo dõi nhất tại nhà. Tăng huyết áp là bệnh phổ biến hàng đầu ở người cao tuổi Việt Nam, và phần lớn diễn tiến không có triệu chứng cho tới khi xảy ra biến cố.</p>

  <table style="width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.95rem;">
    <thead>
      <tr style="background: #2a1b3d; color: #ffffff;">
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Phân loại</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Tâm thu (mmHg)</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Tâm trương (mmHg)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bình thường</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Dưới 120</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Dưới 80</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bình thường cao</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">120–139</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">80–89</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tăng huyết áp độ 1</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">140–159</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">90–99</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tăng huyết áp độ 2</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Từ 160 trở lên</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Từ 100 trở lên</td></tr>
    </tbody>
  </table>

  <p>Bảng trên theo phân độ thường dùng của Hội Tim mạch học Việt Nam. Tuy nhiên, ngưỡng mục tiêu cho từng người cao tuổi có thể khác nhau tùy tuổi, bệnh nền và thuốc đang dùng — đây là việc bác sĩ điều trị quyết định, gia đình không tự đặt mục tiêu.</p>
  <p><strong>Đo đúng cách:</strong> ngồi nghỉ 5 phút trước khi đo, lưng tựa ghế, chân đặt phẳng trên sàn, cánh tay đặt ngang mức tim. Không đo ngay sau khi ăn, uống cà phê, hút thuốc hoặc vận động. Đo cùng khung giờ mỗi ngày.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">2. Mạch (nhịp tim)</h3>
  <p>Nhịp tim bình thường khi nghỉ ngơi ở người trưởng thành là 60–100 lần/phút. Ở người cao tuổi, nhịp tim thường ổn định trong khoảng này nhưng khả năng tăng nhịp khi gắng sức giảm đi.</p>
  <p>Điều đáng chú ý không chỉ là con số mà còn là <strong>tính đều đặn</strong>. Mạch không đều, lúc nhanh lúc chậm, có khoảng ngắt quãng — có thể liên quan đến rối loạn nhịp tim, tình trạng phổ biến ở người cao tuổi và làm tăng nguy cơ đột quỵ. Hầu hết máy đo huyết áp điện tử hiện nay đều có ký hiệu cảnh báo nhịp không đều; nếu ký hiệu này xuất hiện lặp lại nhiều lần, gia đình cần đưa ông bà đi khám tim mạch.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">3. Nhiệt độ cơ thể</h3>
  <p>Nhiệt độ bình thường dao động 36,1–37,2 độ C. Ở người cao tuổi có một điểm rất dễ bị bỏ qua: <strong>phản ứng sốt thường yếu hơn người trẻ</strong>. Một người 80 tuổi đang nhiễm trùng nặng có thể chỉ sốt 37,5 độ, hoặc thậm chí không sốt.</p>
  <p>Vì vậy, ở người cao tuổi, sự thay đổi nhỏ về nhiệt độ kèm theo thay đổi hành vi — lú lẫn hơn thường ngày, ăn kém, mệt bất thường, không muốn dậy — cần được coi trọng hơn là chỉ nhìn vào con số.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">4. Nhịp thở</h3>
  <p>Nhịp thở bình thường khi nghỉ là 12–20 lần/phút. Đây là chỉ số ít gia đình để ý nhất, nhưng lại là một trong những dấu hiệu sớm nhất khi cơ thể có vấn đề, đặc biệt là các vấn đề hô hấp và tim mạch.</p>
  <p>Cách đếm: quan sát lồng ngực ông bà lên xuống trong 30 giây rồi nhân đôi. Nên đếm khi người được đo không biết mình đang được đếm, vì biết thì nhịp thở sẽ tự thay đổi.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">5. Nồng độ oxy máu (SpO2)</h3>
  <p>Đo bằng máy kẹp đầu ngón tay, giá phổ thông và dễ sử dụng. Chỉ số bình thường là 95% trở lên. Dưới 94% cần theo dõi sát, dưới 92% là dấu hiệu cần đưa đi khám ngay.</p>
  <p>Lưu ý khi đo: ngón tay phải ấm và sạch, không sơn móng tay, giữ tay yên trong khi đo. Tay lạnh là nguyên nhân phổ biến nhất khiến máy cho kết quả thấp giả.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Ba chỉ số nên theo dõi thêm</span>
    <p style="margin-bottom: 0;">Ngoài 5 chỉ số sinh tồn, gia đình nên ghi lại thêm <strong>cân nặng</strong> (mỗi tuần một lần, sụt cân không chủ đích là dấu hiệu cần lưu tâm), <strong>đường huyết</strong> nếu ông bà có đái tháo đường, và <strong>chất lượng giấc ngủ</strong>. Ba yếu tố này thay đổi chậm nhưng nói lên rất nhiều về tình trạng chung.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Ghi chép thế nào cho có ích</h2>
  <p>Một cuốn sổ nhỏ đặt cạnh máy đo là đủ. Mỗi lần đo ghi bốn thông tin: ngày, giờ, chỉ số, và ghi chú ngắn nếu có gì bất thường (ví dụ: "vừa đi bộ về", "đêm qua ngủ kém").</p>
  <p>Ghi chú ngắn này quan trọng hơn nhiều người nghĩ. Nó giúp phân biệt một chỉ số cao do hoàn cảnh với một chỉ số cao thực sự đáng lo.</p>
  <p>Nếu gia đình muốn theo dõi bằng điện thoại, có thể dùng bảng tính đơn giản chia sẻ giữa các con — mỗi người ở xa vẫn xem được. Điều quan trọng không phải công cụ, mà là <strong>tính đều đặn</strong>: đo thất thường thì dữ liệu không dùng được.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Khi nào cần đưa đi khám ngay</h2>
  <p>Những dấu hiệu sau không nên chờ đợi hay theo dõi thêm:</p>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Huyết áp tâm thu trên 180 hoặc tâm trương trên 120 mmHg, kèm đau đầu dữ dội, nhìn mờ, khó thở</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ SpO2 dưới 92% khi nghỉ ngơi</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Mạch dưới 50 hoặc trên 120 lần/phút khi nghỉ, kèm chóng mặt hoặc mệt lả</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Đau ngực, khó thở đột ngột</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Yếu hoặc tê một bên người, méo miệng, nói khó — dấu hiệu nghi ngờ đột quỵ, cần gọi cấp cứu 115 ngay</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Lú lẫn, thay đổi ý thức xuất hiện đột ngột</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Khó khăn thực tế của các gia đình</h2>
  <p>Biết cần theo dõi là một chuyện, duy trì được lại là chuyện khác. Ba trở ngại hay gặp nhất:</p>
  <p><strong>Ông bà ngại đo.</strong> Nhiều người cao tuổi không muốn đo vì sợ nhìn thấy con số xấu, hoặc thấy phiền. Việc này cần kiên nhẫn và cách tiếp cận nhẹ nhàng, không biến buổi đo thành một sự kiện căng thẳng.</p>
  <p><strong>Đo sai cách nên số liệu không dùng được.</strong> Đo ngay sau khi ăn, đo lúc đang bực bội, quấn vòng bít sai vị trí — tất cả đều làm sai lệch kết quả.</p>
  <p><strong>Con cái ở xa không kiểm tra được.</strong> Ông bà bảo đã đo rồi, chỉ số bình thường, nhưng không có gì để đối chiếu.</p>
  <p>Đây chính là khoảng trống mà dịch vụ trợ lý theo dõi sức khỏe tại nhà được thiết kế để lấp: có người đến đo đúng cách, đúng lịch, ghi nhận đầy đủ và gửi báo cáo về cho con cái — để gia đình biết tình trạng thật, chứ không chỉ nghe câu "bố mẹ vẫn khỏe".</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Để ANTCARE theo dõi sức khỏe bố mẹ giúp bạn</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Nhân viên đến tận nhà đo đủ 5 chỉ số, ghi nhận theo thời gian và gửi báo cáo về cho gia đình sau mỗi buổi. Chi phí từ 299.000đ/buổi.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người cao tuổi nên đo huyết áp mấy lần một ngày?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Với người có huyết áp ổn định, đo 1 lần vào buổi sáng sau khi ngủ dậy và nghỉ ngơi 5–10 phút là đủ. Người đang điều trị tăng huyết áp thường được bác sĩ chỉ định đo 2 lần mỗi ngày, sáng và tối, vào giờ cố định. Quan trọng nhất là đo cùng một khung giờ mỗi ngày để số liệu có thể so sánh với nhau.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Đo huyết áp ở tay trái hay tay phải thì đúng?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Lần đầu nên đo cả hai tay, sau đó chọn tay có chỉ số cao hơn để theo dõi lâu dài. Chênh lệch nhỏ giữa hai tay là bình thường. Nếu chênh lệch huyết áp tâm thu giữa hai tay trên 15 mmHg, gia đình nên báo với bác sĩ trong lần khám gần nhất.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Máy đo huyết áp cổ tay có chính xác không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Máy đo bắp tay cho kết quả ổn định hơn máy cổ tay, vì vị trí đo gần tim hơn và ít bị ảnh hưởng bởi tư thế. Nếu gia đình đang dùng máy cổ tay, cần giữ cổ tay ngang tim khi đo. Với người cao tuổi có mạch máu xơ cứng, máy bắp tay vẫn là lựa chọn được khuyến nghị hơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có cần ghi lại chỉ số không hay chỉ cần xem lúc đo?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cần ghi lại. Một chỉ số đơn lẻ không nói lên nhiều điều, nhưng chuỗi chỉ số trong vài tuần cho thấy xu hướng: huyết áp đang tăng dần, mạch đang chậm lại, cân nặng đang giảm. Xu hướng mới là thứ bác sĩ cần khi thăm khám, và cũng là thứ giúp phát hiện vấn đề sớm.</p>
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
    "headline": "5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà",
    "description": "Huyết áp, mạch, nhiệt độ, nhịp thở và SpO2 là 5 chỉ số sinh tồn gia đình nên theo dõi định kỳ cho người cao tuổi. Ngưỡng tham chiếu và cách ghi chép đúng.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 54,
  slug: 'chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi',
  oldSlugs: ['5-chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi-dinh-ky-tai-nha', 'chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi'],
  title: '5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà',
  category: 'Theo dõi Sức khỏe tại nhà',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 54 to news.json!');
