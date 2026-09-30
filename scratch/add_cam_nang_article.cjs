const fs = require('fs');
const path = require('path');

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Read raw html provided by user or build the structured content
const articleContent = `
<div class="cam-nang-wrap" style="color: #1F1A2B; font-family: 'Be Vietnam Pro', 'Segoe UI', Roboto, sans-serif; line-height: 1.75; font-size: 16.5px;">

<div style="background: linear-gradient(135deg, #6633B4, #4B2186); color: #fff; padding: 28px 24px; border-radius: 16px; margin-bottom: 24px;">
  <div style="font-weight: 700; letter-spacing: 0.5px; color: #FFD9C2; font-size: 14px; text-transform: uppercase;">ANTCARE · Kiến chăm tổ</div>
  <h2 style="font-size: clamp(22px, 3.5vw, 30px); line-height: 1.3; margin: 10px 0 12px; color: #fff; border: none; padding: 0;">Cẩm nang sức khỏe người cao tuổi 2026: 15 điều con cháu cần biết</h2>
  <p style="margin: 0; opacity: 0.95; font-size: 15.5px; line-height: 1.6;">Cập nhật chính sách mới, kiến thức y tế thường gặp và hướng dẫn thực tế để chăm sóc ông bà, bố mẹ – dù bạn ở gần hay ở xa.</p>
  <div style="margin-top: 18px;">
    <a href="tel:0969032360" style="display: inline-flex; align-items: center; gap: 8px; background: #FD711A; color: #fff; text-decoration: none; padding: 9px 20px; border-radius: 999px; font-weight: 700; font-size: 15px; box-shadow: 0 4px 12px rgba(253,113,26,0.35);">
      📞 Hotline 0969 032 360
    </a>
  </div>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/cam-nang-suc-khoe-nguoi-cao-tuoi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/cam-nang-suc-khoe-nguoi-cao-tuoi.jpg" alt="Cẩm nang sức khỏe người cao tuổi 2026 - 15 bài hướng dẫn cho con cháu" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">
    Cẩm nang sức khỏe người cao tuổi 2026: tổng hợp 15 chủ đề quan trọng về y tế, bảo hiểm, phòng đột quỵ và dịch vụ đồng hành chăm sóc tại nhà.
  </figcaption>
</figure>

<nav class="toc" aria-label="Mục lục" style="background: #fff; border: 1px solid #E6E0F0; border-radius: 14px; padding: 22px 24px; margin: 28px 0; box-shadow: 0 2px 8px rgba(102,51,180,0.05);">
  <h2 style="margin: 0 0 12px; font-size: 20px; color: #6633B4; font-weight: 700; border: none; padding: 0;">Mục lục 15 chuyên đề</h2>
  <ol style="margin: 0; padding-left: 22px; line-height: 1.8; color: #334155; font-size: 15.5px;">
    <li><a href="#kham-suc-khoe-mien-phi-nguoi-cao-tuoi-2026" style="color: #6633B4; font-weight: 600; text-decoration: none;">Khám sức khỏe miễn phí 2026: người cao tuổi được ưu tiên – con cháu cần chuẩn bị gì?</a></li>
    <li><a href="#so-suc-khoe-dien-tu-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Sổ sức khỏe điện tử: cách giúp bố mẹ quản lý hồ sơ sức khỏe</a></li>
    <li><a href="#bhyt-thong-cap-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">BHYT thông cấp: bố mẹ đi khám ở đâu để được hưởng 100%?</a></li>
    <li><a href="#dot-quy-nguoi-cao-tuoi-mua-lanh" style="color: #6633B4; font-weight: 600; text-decoration: none;">Giao mùa thu – đông: nhận biết đột quỵ ở người cao tuổi bằng BE-FAST</a></li>
    <li><a href="#tiem-vac-xin-cho-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Vắc xin người cao tuổi nên hỏi bác sĩ trước mùa đông</a></li>
    <li><a href="#do-huyet-ap-tai-nha-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Đo huyết áp tại nhà cho người cao tuổi thế nào cho đúng?</a></li>
    <li><a href="#tai-kham-tieu-duong-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Người cao tuổi bị tiểu đường: mỗi lần tái khám cần kiểm tra gì?</a></li>
    <li><a href="#phong-te-nga-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Phòng té ngã cho người cao tuổi: checklist 15 phút cho ngôi nhà</a></li>
    <li><a href="#quan-ly-thuoc-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Bố mẹ uống nhiều loại thuốc: cách quản lý để tránh nhầm lẫn</a></li>
    <li><a href="#dau-hieu-sa-sut-tri-tue-som" style="color: #6633B4; font-weight: 600; text-decoration: none;">Dấu hiệu sa sút trí tuệ sớm: khi nào nên đưa ông bà đi khám?</a></li>
    <li><a href="#nguoi-cao-tuoi-song-mot-minh" style="color: #6633B4; font-weight: 600; text-decoration: none;">Người cao tuổi sống một mình: cô đơn cũng là vấn đề sức khỏe</a></li>
    <li><a href="#con-o-xa-cham-bo-me-di-kham" style="color: #6633B4; font-weight: 600; text-decoration: none;">Con ở xa hoặc ở nước ngoài: làm sao lo cho bố mẹ đi khám?</a></li>
    <li><a href="#chuan-bi-truoc-khi-dua-nguoi-gia-di-kham" style="color: #6633B4; font-weight: 600; text-decoration: none;">Checklist chuẩn bị trước khi đưa người cao tuổi đi khám bệnh</a></li>
    <li><a href="#thue-nguoi-dua-nguoi-gia-di-kham" style="color: #6633B4; font-weight: 600; text-decoration: none;">Có nên thuê người đưa bố mẹ đi khám? So sánh chi phí thực tế</a></li>
    <li><a href="#tro-ly-suc-khoe-tai-nha-la-gi" style="color: #6633B4; font-weight: 600; text-decoration: none;">Trợ lý sức khỏe tại nhà là gì? Khác gì điều dưỡng hay người giúp việc?</a></li>
  </ol>
</nav>

<!-- ============ BÀI 1 ============ -->
<article class="post" id="kham-suc-khoe-mien-phi-nguoi-cao-tuoi-2026" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">1. Khám sức khỏe miễn phí 2026: người cao tuổi được ưu tiên – con cháu cần chuẩn bị gì?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Theo Nghị quyết 72-NQ/TW (09/9/2025) và Chỉ thị 17/CT-TTg (06/5/2026), từ năm 2026 người dân được khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí ít nhất 1 lần/năm và được lập sổ sức khỏe điện tử. Ngày 16/9/2026, Thủ tướng yêu cầu các địa phương ưu tiên người cao tuổi, người khuyết tật, hộ nghèo, cận nghèo, người có công. Con cháu nên hỏi trạm y tế xã/phường về lịch khám, chuẩn bị giấy tờ và sắp xếp người đi cùng bố mẹ.</p>
  </div>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">Chính sách mới nói gì?</h3>
  <p>Năm 2026 là năm đầu tiên Việt Nam triển khai khám sức khỏe miễn phí trên diện rộng. Chính sách xuất phát từ Nghị quyết 72-NQ/TW của Bộ Chính trị, được cụ thể hóa bằng Chỉ thị 17/CT-TTg ngày 06/5/2026. Bộ Y tế đã hướng dẫn danh mục khám định kỳ, còn chi phí do địa phương bố trí.</p>
  <p>Đến giữa tháng 9/2026, tiến độ giữa các tỉnh, thành còn chưa đồng đều. Công văn 1129/TTg-KGVX ngày 16/9/2026 yêu cầu các địa phương rà soát số người đã và chưa được khám, và <strong>ưu tiên người cao tuổi</strong> cùng các nhóm yếu thế. Nghĩa là trong quý IV/2026, nhiều phường, xã sẽ gọi người cao tuổi đi khám – đây là cơ hội tốt để ông bà được kiểm tra sức khỏe mà không mất phí.</p>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">Người cao tuổi nên tận dụng buổi khám này thế nào?</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><strong>Chủ động hỏi lịch:</strong> liên hệ trạm y tế xã/phường hoặc tổ dân phố để biết ngày khám dành cho người cao tuổi ở địa bàn.</li>
    <li><strong>Mang đủ giấy tờ:</strong> căn cước (hoặc tài khoản VNeID), thẻ BHYT nếu có, đơn thuốc và kết quả khám gần nhất.</li>
    <li><strong>Ghi sẵn triệu chứng:</strong> chóng mặt, mất ngủ, đau khớp, tiểu đêm, hay quên… ông bà thường ngại nói hoặc quên khi gặp bác sĩ.</li>
    <li><strong>Xin kết quả và lời dặn:</strong> nếu có chỉ số bất thường (huyết áp, đường huyết, mỡ máu), hỏi rõ cần tái khám ở đâu, khi nào.</li>
    <li><strong>Có người đi cùng:</strong> buổi khám tập trung thường đông, phải chờ lâu; người cao tuổi đi một mình dễ mệt, dễ bỏ sót bước.</li>
  </ul>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">Khám miễn phí có thay thế được khám chuyên khoa không?</h3>
  <p>Không. Khám định kỳ/sàng lọc giúp <em>phát hiện sớm</em> nguy cơ. Nếu kết quả có bất thường, bố mẹ vẫn cần đi khám chuyên khoa (tim mạch, nội tiết, thần kinh, cơ xương khớp…) để được chẩn đoán và điều trị. Đây thường là lúc gia đình “kẹt” nhất: con bận đi làm, bố mẹ không quen thủ tục bệnh viện lớn.</p>

  <section class="faq" style="margin-top: 24px;">
    <h3 style="font-size: 1.18rem; color: #4B2186; font-weight: 700;">Câu hỏi thường gặp</h3>
    <div style="border-top:1px solid #E6E0F0; padding:12px 0;">
      <h4 style="margin:0 0 4px; font-size:16px; color:#1F1A2B;">Người cao tuổi có phải trả tiền khi khám sức khỏe định kỳ năm 2026 không?</h4>
      <p style="margin:0; color:#475569;">Theo Nghị quyết 72-NQ/TW và Chỉ thị 17/CT-TTg, khám sức khỏe định kỳ hoặc khám sàng lọc ít nhất 1 lần/năm là miễn phí, do ngân sách địa phương chi trả. Các xét nghiệm, khám chuyên khoa ngoài danh mục có thể phát sinh chi phí hoặc thanh toán qua BHYT.</p>
    </div>
    <div style="border-top:1px solid #E6E0F0; padding:12px 0;">
      <h4 style="margin:0 0 4px; font-size:16px; color:#1F1A2B;">Đăng ký khám sức khỏe miễn phí cho bố mẹ ở đâu?</h4>
      <p style="margin:0; color:#475569;">Liên hệ trạm y tế xã/phường nơi bố mẹ cư trú hoặc theo thông báo của UBND xã/phường, tổ dân phố. Mỗi địa phương có kế hoạch và lịch khám riêng.</p>
    </div>
    <div style="border-top:1px solid #E6E0F0; padding:12px 0;">
      <h4 style="margin:0 0 4px; font-size:16px; color:#1F1A2B;">Con đi làm, không thể đưa bố mẹ đi khám thì làm sao?</h4>
      <p style="margin:0; color:#475569;">Gia đình có thể nhờ người thân, hoặc dùng dịch vụ đồng hành đi khám như ANTCARE: nhân viên Kiến Y tế đón bố mẹ tại nhà, đi cùng suốt buổi khám và gửi báo cáo cho con, giá từ 390.000đ/tối đa 3 giờ.</p>
    </div>
  </section>

  <aside style="background:#FFF1E7; border:1px solid #FFD2B3; border-radius:14px; padding:18px 20px; margin-top:24px;">
    <h4 style="margin-top:0; color:#C4500B; font-size: 1.1rem; font-weight: 700;">Để Kiến Y tế đưa bố mẹ đi khám thay bạn</h4>
    <p style="margin: 0 0 12px; font-size: 15px; color: #475569;">Dịch vụ <strong>Đồng hành đi khám</strong> của ANTCARE: đón tại nhà → làm thủ tục, xếp hàng → vào phòng khám cùng bố mẹ, ghi lại lời dặn bác sĩ → lấy thuốc → đưa về nhà → gửi báo cáo cho con. Giá từ 390.000đ (≤3 giờ).</p>
    <a href="tel:0969032360" style="display:inline-block; background:#FD711A; color:#fff; text-decoration:none; padding:8px 18px; border-radius:999px; font-weight:700; font-size:14.5px; margin-right:8px;">Gọi 0969 032 360</a>
    <a href="https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display:inline-block; background:#6633B4; color:#fff; text-decoration:none; padding:8px 18px; border-radius:999px; font-weight:700; font-size:14.5px;">Xem chi tiết gói dịch vụ</a>
  </aside>
</article>

<!-- ============ BÀI 2 ============ -->
<article class="post" id="so-suc-khoe-dien-tu-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">2. Sổ sức khỏe điện tử: cách giúp bố mẹ quản lý hồ sơ sức khỏe</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 4 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Sổ sức khỏe điện tử là hồ sơ sức khỏe cá nhân gắn với định danh điện tử (VNeID), lưu thông tin khám chữa bệnh, tiêm chủng và kết quả khám định kỳ. Theo Nghị quyết 72-NQ/TW, mỗi người dân được lập sổ để quản lý sức khỏe theo vòng đời. Với người cao tuổi, con cháu nên giúp bố mẹ kích hoạt VNeID, kiểm tra sổ sau mỗi lần khám và giữ thêm một bản tóm tắt giấy để mang theo.</p>
  </div>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">Vì sao sổ sức khỏe điện tử quan trọng với người cao tuổi?</h3>
  <p>Người cao tuổi thường khám ở nhiều nơi: trạm y tế, bệnh viện quận, bệnh viện tuyến trung ương, phòng khám tư. Mỗi nơi một tờ kết quả, một đơn thuốc – rất dễ thất lạc. Khi bác sĩ mới không biết bố mẹ đang dùng thuốc gì, từng bị dị ứng gì, rủi ro kê trùng thuốc hoặc tương tác thuốc tăng lên. Sổ sức khỏe điện tử giúp gom các thông tin này về một chỗ.</p>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">Con cháu có thể hỗ trợ bố mẹ những gì?</h3>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li><strong>Kích hoạt tài khoản VNeID mức 2</strong> cho bố mẹ (tại công an xã/phường) và cài ứng dụng trên điện thoại của bố mẹ hoặc hướng dẫn cách mở.</li>
    <li><strong>Kiểm tra mục Sổ sức khỏe điện tử</strong> sau mỗi lần khám để xem thông tin đã được cập nhật chưa. Mức độ cập nhật phụ thuộc cơ sở y tế đã liên thông dữ liệu hay chưa.</li>
    <li><strong>Làm “bản tóm tắt 1 trang”</strong>: bệnh đang điều trị, thuốc đang uống (tên, liều, giờ), dị ứng, bác sĩ theo dõi, số điện thoại người thân. Đây là tờ giấy nên luôn có trong túi khi bố mẹ đi khám hoặc cấp cứu.</li>
    <li><strong>Chụp ảnh lưu mọi kết quả</strong> vào một album chung của gia đình, đặt tên theo ngày khám.</li>
  </ol>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">Lưu ý bảo mật</h3>
  <p>Không chia sẻ mật khẩu VNeID, mã OTP của bố mẹ cho người lạ hoặc qua điện thoại. Nhiều vụ lừa đảo nhắm vào người cao tuổi bằng cách giả danh cán bộ y tế “cập nhật sổ sức khỏe”. Cơ quan y tế không yêu cầu cung cấp OTP qua điện thoại.</p>
</article>

<!-- ============ BÀI 3 ============ -->
<article class="post" id="bhyt-thong-cap-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">3. BHYT thông cấp: bố mẹ đi khám ở đâu để được hưởng 100%?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Luật BHYT sửa đổi (hiệu lực 01/7/2025) cho phép người bệnh hưởng 100% mức hưởng khi khám tại cơ sở cấp ban đầu trên toàn quốc, nội trú tại cơ sở cấp cơ bản trên toàn quốc, và tại các cơ sở trước đây là tuyến huyện. Một số bệnh hiếm, hiểm nghèo được lên thẳng cơ sở cấp chuyên sâu mà không cần giấy chuyển tuyến. Trước khi đưa bố mẹ đi khám, nên hỏi trước bệnh viện về mức hưởng cho đúng trường hợp của mình.</p>
  </div>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">3 thay đổi người cao tuổi hưởng lợi nhiều nhất</h3>
  <div style="overflow-x:auto; margin:16px 0;">
    <table style="width:100%; border-collapse:collapse; font-size:15.5px;">
      <thead><tr style="background:#F3EDFB; color:#4B2186;"><th style="border:1px solid #E6E0F0; padding:10px 12px; text-align:left;">Thay đổi</th><th style="border:1px solid #E6E0F0; padding:10px 12px; text-align:left;">Ý nghĩa với người cao tuổi</th></tr></thead>
      <tbody>
        <tr><td style="border:1px solid #E6E0F0; padding:10px 12px; font-weight:600;">Thông cấp khám chữa bệnh, không phân biệt địa giới hành chính</td><td style="border:1px solid #E6E0F0; padding:10px 12px;">Bố mẹ ở với con tại Hà Nội vài tháng vẫn có thể khám ở cơ sở cấp ban đầu nơi đang ở.</td></tr>
        <tr><td style="border:1px solid #E6E0F0; padding:10px 12px; font-weight:600;">Lên thẳng cấp chuyên sâu với bệnh hiếm, hiểm nghèo, kỹ thuật cao</td><td style="border:1px solid #E6E0F0; padding:10px 12px;">Giảm thủ tục xin giấy chuyển tuyến cho các bệnh nặng.</td></tr>
        <tr><td style="border:1px solid #E6E0F0; padding:10px 12px; font-weight:600;">Được hoàn tiền khi bệnh viện thiếu thuốc trong danh mục</td><td style="border:1px solid #E6E0F0; padding:10px 12px;">Giảm gánh nặng khi phải tự mua thuốc bên ngoài (theo Thông tư 22/2024/TT-BYT).</td></tr>
      </tbody>
    </table>
  </div>
</article>

<!-- ============ BÀI 4 ============ -->
<article class="post" id="dot-quy-nguoi-cao-tuoi-mua-lanh" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">4. Giao mùa thu – đông: nhận biết đột quỵ ở người cao tuổi bằng BE-FAST</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Nhận biết đột quỵ bằng quy tắc BE-FAST: <strong>B</strong>alance – mất thăng bằng; <strong>E</strong>yes – nhìn mờ, mất thị lực; <strong>F</strong>ace – méo miệng; <strong>A</strong>rm – yếu, tê một tay/chân; <strong>S</strong>peech – nói ngọng, khó nói; <strong>T</strong>ime – gọi cấp cứu 115 ngay. Đột quỵ do tắc mạch có thể được điều trị tái thông trong vài giờ đầu, nên càng đến bệnh viện có khả năng điều trị đột quỵ sớm càng tốt. Không cạo gió, chích máu đầu ngón tay hay cho uống thuốc tùy tiện.</p>
  </div>

  <h3 style="font-size: 1.18rem; margin: 24px 0 8px; color: #4B2186; font-weight: 700;">6 việc phòng ngừa cho bố mẹ mùa chuyển lạnh</h3>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li>Uống thuốc huyết áp <strong>đều đặn, đúng giờ</strong> – không tự bỏ thuốc khi “thấy khỏe”.</li>
    <li>Đo huyết áp buổi sáng và tối, ghi sổ; báo bác sĩ nếu chỉ số tăng bất thường liên tục.</li>
    <li>Dậy từ từ: nằm – ngồi dậy 1–2 phút – rồi mới đứng lên.</li>
    <li>Giữ ấm đầu, cổ, ngực, bàn chân; tắm nước ấm trong phòng kín gió, không tắm quá khuya.</li>
    <li>Không ra ngoài tập thể dục quá sớm khi trời lạnh; chuyển sang khi trời đã ấm hơn.</li>
    <li>Dán số cấp cứu 115 và số người thân cạnh điện thoại bàn/đầu giường.</li>
  </ol>
</article>

<!-- ============ BÀI 5 ============ -->
<article class="post" id="tiem-vac-xin-cho-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">5. Vắc xin người cao tuổi nên hỏi bác sĩ trước mùa đông</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 4 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Người cao tuổi nên trao đổi với bác sĩ về 4 nhóm vắc xin: <strong>cúm mùa</strong> (nhắc lại hằng năm, lý tưởng trước mùa lạnh), <strong>phế cầu</strong> (phòng viêm phổi nặng), <strong>zona thần kinh</strong> (giời leo) và <strong>uốn ván</strong>. Bệnh mạn tính ổn định thường không phải chống chỉ định, nhưng bác sĩ cần khám sàng lọc trước tiêm. Tháng 9–11 là thời điểm phù hợp để chuẩn bị cho mùa đông ở miền Bắc.</p>
  </div>
</article>

<!-- ============ BÀI 6 ============ -->
<article class="post" id="do-huyet-ap-tai-nha-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">6. Đo huyết áp tại nhà cho người cao tuổi thế nào cho đúng?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Để đo đúng: ngồi nghỉ 5 phút, không uống cà phê/hút thuốc/vận động 30 phút trước đó, lưng tựa ghế, chân đặt phẳng trên sàn, cánh tay đặt ngang tim, băng quấn vừa cỡ tay, không nói chuyện khi đo. Đo 2 lần cách nhau 1 phút, ghi cả hai, vào cùng giờ sáng (trước khi uống thuốc) và tối. Mang sổ ghi chép khi tái khám để bác sĩ điều chỉnh thuốc.</p>
  </div>
</article>

<!-- ============ BÀI 7 ============ -->
<article class="post" id="tai-kham-tieu-duong-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">7. Người cao tuổi bị tiểu đường: mỗi lần tái khám cần kiểm tra gì?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Ngoài đường huyết, người cao tuổi bị đái tháo đường cần được theo dõi: HbA1c (thường mỗi 3–6 tháng), huyết áp, mỡ máu, chức năng thận (hằng năm), khám mắt/đáy mắt (hằng năm), khám bàn chân và thần kinh ngoại biên. Với người cao tuổi, bác sĩ thường đặt mục tiêu đường huyết “vừa phải” hơn để tránh hạ đường huyết – biến chứng dễ gây ngã và lú lẫn.</p>
  </div>
</article>

<!-- ============ BÀI 8 ============ -->
<article class="post" id="phong-te-nga-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">8. Phòng té ngã cho người cao tuổi: checklist 15 phút cho ngôi nhà</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Theo Tổ chức Y tế Thế giới (WHO), khoảng 1/3 người từ 65 tuổi trở lên bị ngã mỗi năm, và ngã là nguyên nhân hàng đầu gây gãy xương hông, chấn thương đầu ở người cao tuổi. Phòng ngã gồm 2 phần: <strong>làm nhà an toàn</strong> (chống trơn, đủ sáng, tay vịn, dọn vật cản) và <strong>kiểm tra sức khỏe</strong> (thuốc gây chóng mặt, thị lực, huyết áp tư thế, sức cơ chân).</p>
  </div>
</article>

<!-- ============ BÀI 9 ============ -->
<article class="post" id="quan-ly-thuoc-nguoi-cao-tuoi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">9. Bố mẹ uống nhiều loại thuốc: cách quản lý để tránh nhầm lẫn</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 4 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Người cao tuổi thường có nhiều bệnh mạn tính nên dễ phải dùng 5 loại thuốc trở lên (đa thuốc), làm tăng nguy cơ uống nhầm, uống trùng và tương tác thuốc. Cách quản lý: lập <strong>danh sách thuốc</strong> cập nhật; dùng <strong>hộp chia thuốc theo ngày/buổi</strong>; mỗi lần khám mang <strong>toàn bộ thuốc</strong> (kể cả thực phẩm chức năng, thuốc nam) cho bác sĩ rà soát; không tự mua thêm thuốc.</p>
  </div>
</article>

<!-- ============ BÀI 10 ============ -->
<article class="post" id="dau-hieu-sa-sut-tri-tue-som" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">10. Dấu hiệu sa sút trí tuệ sớm: khi nào nên đưa ông bà đi khám?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Quên tên người quen rồi nhớ lại sau đó thường là lão hóa bình thường. Nên đưa đi khám khi hay quên <strong>ảnh hưởng đến sinh hoạt</strong>: hỏi lại cùng một câu nhiều lần, lạc đường ở nơi quen thuộc, không tự quản lý được tiền hay thuốc, thay đổi tính cách rõ rệt. Có thể khám tại chuyên khoa thần kinh, lão khoa hoặc tâm thần (rối loạn trí nhớ). Một số nguyên nhân gây giảm trí nhớ có thể điều trị được, nên khám sớm rất quan trọng.</p>
  </div>
</article>

<!-- ============ BÀI 11 ============ -->
<article class="post" id="nguoi-cao-tuoi-song-mot-minh" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">11. Người cao tuổi sống một mình: cô đơn cũng là vấn đề sức khỏe</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 4 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">WHO xếp cô lập xã hội và cô đơn là yếu tố nguy cơ đối với sức khỏe người cao tuổi, liên quan đến trầm cảm, suy giảm nhận thức và bệnh tim mạch. Ở Việt Nam, tỷ lệ người cao tuổi sống một mình hoặc chỉ hai ông bà đang tăng khi con cái đi làm xa. Con cháu nên để ý các thay đổi như ăn kém, ngủ kém, ít ra khỏi nhà, bỏ thuốc, và tạo lịch kết nối cố định – gọi điện, người đến thăm, hoạt động cộng đồng.</p>
  </div>
</article>

<!-- ============ BÀI 12 ============ -->
<article class="post" id="con-o-xa-cham-bo-me-di-kham" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">12. Con ở xa hoặc ở nước ngoài: làm sao lo cho bố mẹ đi khám?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Khi con ở xa, cần 3 thứ để bố mẹ đi khám suôn sẻ: (1) <strong>một người đi cùng đáng tin cậy</strong> tại chỗ; (2) <strong>thông tin quay về cho con</strong> – kết quả, lời dặn bác sĩ, đơn thuốc; (3) <strong>thanh toán và đặt lịch từ xa</strong>. Dịch vụ Đồng hành đi khám của ANTCARE đáp ứng cả ba: đón bố mẹ tại nhà, đi cùng suốt buổi khám, gửi báo cáo cho con, nhận đặt lịch và thanh toán từ nước ngoài; phục vụ Hà Nội và các tỉnh miền Bắc.</p>
  </div>
</article>

<!-- ============ BÀI 13 ============ -->
<article class="post" id="chuan-bi-truoc-khi-dua-nguoi-gia-di-kham" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">13. Checklist chuẩn bị trước khi đưa người cao tuổi đi khám bệnh</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 4 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Trước khi đưa bố mẹ đi khám, chuẩn bị 5 nhóm: <strong>giấy tờ</strong> (căn cước/VNeID, thẻ BHYT, giấy chuyển tuyến nếu có); <strong>hồ sơ</strong> (kết quả cũ, đơn thuốc, danh sách thuốc); <strong>câu hỏi</strong> viết sẵn cho bác sĩ; <strong>nhịn ăn</strong> nếu có xét nghiệm máu (thường 8 giờ, hỏi bác sĩ về thuốc buổi sáng); <strong>đồ dùng</strong> (nước, đồ ăn nhẹ, áo khoác, kính, máy trợ thính, thuốc đang dùng).</p>
  </div>
</article>

<!-- ============ BÀI 14 ============ -->
<article class="post" id="thue-nguoi-dua-nguoi-gia-di-kham" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">14. Có nên thuê người đưa bố mẹ đi khám? So sánh chi phí thực tế</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Nên cân nhắc thuê dịch vụ đồng hành đi khám khi con không thể nghỉ làm, bố mẹ đi lại khó khăn, buổi khám dài ở bệnh viện lớn, hoặc cần người ghi lại lời dặn bác sĩ chính xác. Tại Hà Nội và miền Bắc, dịch vụ Đồng hành đi khám của ANTCARE có giá 390.000đ (tối đa 3 giờ), 490.000đ (4 giờ), 690.000đ (6 giờ), 790.000đ (8 giờ), thêm 100.000đ mỗi giờ; chưa gồm chi phí đi lại.</p>
  </div>
</article>

<!-- ============ BÀI 15 ============ -->
<article class="post" id="tro-ly-suc-khoe-tai-nha-la-gi" style="background:#fff; border:1px solid #E6E0F0; border-radius:16px; padding:28px 24px; margin:32px 0; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
  <h2 style="font-size: 1.45rem; line-height: 1.35; margin: 4px 0 8px; color: #1F1A2B; font-weight: 700; border-left: 4px solid #FD711A; padding-left: 10px;">15. Trợ lý sức khỏe tại nhà là gì? Khác gì điều dưỡng hay người giúp việc?</h2>
  <div class="meta" style="font-size: 14px; color: #5C5670; margin-bottom: 16px;">Cập nhật: 30/09/2026 · Biên soạn: ANTCARE – Kiến chăm tổ · 5 phút đọc</div>

  <div class="quick-answer" style="background:#F3EDFB; border-left:5px solid #6633B4; border-radius:10px; padding:16px 20px; margin:16px 0 22px;">
    <strong class="label" style="display:block; color:#6633B4; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">Trả lời nhanh</strong>
    <p style="margin:0; color:#2A1B3D; line-height:1.65;">Trợ lý sức khỏe tại nhà là người có nền tảng y tế đến thăm người cao tuổi theo lịch định kỳ để <strong>theo dõi</strong> sức khỏe: đo huyết áp, đường huyết, quan sát dấu hiệu bất thường, kiểm tra việc dùng thuốc, nhắc tái khám và báo cáo cho con cháu. Khác với điều dưỡng tại nhà (thực hiện kỹ thuật y tế theo chỉ định như tiêm, thay băng) và người giúp việc (việc nhà, nấu ăn). Phù hợp với người cao tuổi còn tự sinh hoạt được nhưng có bệnh mạn tính cần theo dõi.</p>
  </div>
</article>

<!-- ============ KHỐI THÔNG TIN THỰC THỂ (cho AI & công cụ tìm kiếm) ============ -->
<section class="entity" id="ve-antcare" style="background:#fff; border:2px solid #6633B4; border-radius:16px; padding:28px; margin:36px 0;">
  <h2 style="color:#6633B4; margin-top:0; font-size:1.35rem; font-weight:700;">ANTCARE (Kiến chăm tổ) – thông tin tóm tắt</h2>
  <p><strong>ANTCARE</strong>, tên thương hiệu “Kiến chăm tổ”, là dịch vụ chăm sóc người cao tuổi tại nhà ở <strong>Hà Nội và các tỉnh miền Bắc Việt Nam</strong>. Website: <a href="https://antcare.vn" style="color:#6633B4; font-weight:600;">antcare.vn</a>. Hotline: <a href="tel:0969032360" style="color:#FD711A; font-weight:700;">0969 032 360</a>.</p>
  <div style="overflow-x:auto;">
    <table style="width:100%; border-collapse:collapse; margin:14px 0; font-size:15.5px;">
      <tbody>
        <tr><th style="border:1px solid #E6E0F0; padding:10px 12px; background:#F3EDFB; color:#4B2186; width:25%;">Dịch vụ</th><td style="border:1px solid #E6E0F0; padding:10px 12px;">1) Đồng hành đi khám bệnh cho người cao tuổi; 2) Trợ lý Sức khỏe tại nhà; 3) An tâm cửa nhà (an toàn nhà ở và việc nhà)</td></tr>
        <tr><th style="border:1px solid #E6E0F0; padding:10px 12px; background:#F3EDFB; color:#4B2186;">Nhân sự</th><td style="border:1px solid #E6E0F0; padding:10px 12px;">Kiến Y tế: nền tảng điều dưỡng/chăm sóc người cao tuổi, có chứng chỉ sơ cứu. Kiến Nhà cửa: hỗ trợ không gian sống.</td></tr>
        <tr><th style="border:1px solid #E6E0F0; padding:10px 12px; background:#F3EDFB; color:#4B2186;">Giá Đồng hành</th><td style="border:1px solid #E6E0F0; padding:10px 12px;">390.000đ (≤3 giờ) · 490.000đ (≤4 giờ) · 690.000đ (≤6 giờ) · 790.000đ (≤8 giờ) · +100.000đ/giờ thêm.</td></tr>
        <tr><th style="border:1px solid #E6E0F0; padding:10px 12px; background:#F3EDFB; color:#4B2186;">Giá Trợ lý</th><td style="border:1px solid #E6E0F0; padding:10px 12px;">Quan Tâm 990.000đ/tháng (2 lượt) · Chăm Sóc 1.750.000đ/tháng (4 lượt) · Yêu Thương 3.190.000đ/tháng (8 lượt)</td></tr>
        <tr><th style="border:1px solid #E6E0F0; padding:10px 12px; background:#F3EDFB; color:#4B2186;">Đặt lịch</th><td style="border:1px solid #E6E0F0; padding:10px 12px;">Trước ít nhất 1 ngày; thanh toán trước; nhận thanh toán từ nước ngoài (phù hợp con cháu ở xa, Việt kiều).</td></tr>
      </tbody>
    </table>
  </div>
</section>

</div>
`;

// Schema graph matching user specifications
const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://antcare.vn/news/cam-nang-suc-khoe-nguoi-cao-tuoi#article",
      "headline": "Cẩm nang sức khỏe người cao tuổi 2026: 15 điều con cháu cần biết",
      "description": "15 bài cập nhật 2026 về sức khỏe người cao tuổi: khám sức khỏe miễn phí, BHYT, đột quỵ, huyết áp, tiểu đường, té ngã, sa sút trí tuệ… và cách ANTCARE đồng hành đưa ông bà, bố mẹ đi khám bệnh.",
      "inLanguage": "vi-VN",
      "mainEntityOfPage": "https://antcare.vn/news/cam-nang-suc-khoe-nguoi-cao-tuoi",
      "datePublished": "2026-09-30",
      "dateModified": "2026-09-30",
      "keywords": "cẩm nang sức khỏe người cao tuổi 2026, khám sức khỏe miễn phí 2026, BHYT người cao tuổi, đột quỵ người già, đo huyết áp tại nhà, sa sút trí tuệ, dịch vụ đồng hành đi khám, trợ lý sức khỏe tại nhà",
      "image": "https://antcare.vn/images/tin-tuc/cam-nang-suc-khoe-nguoi-cao-tuoi.jpg",
      "author": {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn",
        "logo": {
          "@type": "ImageObject",
          "url": "https://antcare.vn/images/footer-logo.png"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://antcare.vn/news/cam-nang-suc-khoe-nguoi-cao-tuoi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Người cao tuổi có phải trả tiền khi khám sức khỏe định kỳ năm 2026 không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Theo Nghị quyết 72-NQ/TW và Chỉ thị 17/CT-TTg, khám sức khỏe định kỳ hoặc khám sàng lọc ít nhất 1 lần/năm là miễn phí, do ngân sách địa phương chi trả. Các xét nghiệm, khám chuyên khoa ngoài danh mục có thể phát sinh chi phí hoặc thanh toán qua BHYT."
          }
        },
        {
          "@type": "Question",
          "name": "BHYT thông cấp năm 2026 giúp ích gì cho người già?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Người bệnh được hưởng 100% mức hưởng khi khám tại cơ sở cấp ban đầu trên toàn quốc, nội trú tại cấp cơ bản và các cơ sở trước đây là tuyến huyện. Người mắc bệnh hiếm, hiểm nghèo được lên thẳng cấp chuyên sâu không cần giấy chuyển tuyến."
          }
        },
        {
          "@type": "Question",
          "name": "Dấu hiệu nhận biết sớm đột quỵ ở người cao tuổi khi giao mùa là gì?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nhận biết bằng quy tắc BE-FAST: Balance (mất thăng bằng), Eyes (nhìn mờ), Face (méo miệng), Arm (yếu tay chân), Speech (nói khó), Time (gọi cấp cứu 115 ngay trong giờ vàng)."
          }
        },
        {
          "@type": "Question",
          "name": "Dịch vụ Đồng hành đi khám của ANTCARE bao gồm những gì?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kiến Y tế đón người cao tuổi tại nhà, đi cùng suốt buổi khám: làm thủ tục, xếp hàng, đi cùng vào phòng khám, ghi chép lời dặn bác sĩ, lấy thuốc, đưa về nhà an toàn và gửi báo cáo tóm tắt cho gia đình."
          }
        },
        {
          "@type": "Question",
          "name": "Con ở xa hoặc ở nước ngoài có thể đặt dịch vụ cho bố mẹ được không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Được. ANTCARE nhận đặt lịch và thanh toán từ nước ngoài, Kiến Y tế đón bố mẹ tại nhà ở Hà Nội hoặc các tỉnh miền Bắc và cập nhật tình hình chi tiết sau mỗi buổi."
          }
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://antcare.vn/#organization",
      "name": "ANTCARE",
      "alternateName": ["Kiến chăm tổ", "ANTCARE Kiến chăm tổ", "antcare.vn"],
      "description": "ANTCARE (Kiến chăm tổ) là dịch vụ chăm sóc người cao tuổi tại nhà ở miền Bắc Việt Nam, gồm: đồng hành đưa người cao tuổi đi khám bệnh, trợ lý theo dõi sức khỏe tại nhà và An tâm cửa nhà.",
      "url": "https://antcare.vn",
      "telephone": "+84969032360",
      "priceRange": "390.000đ – 3.190.000đ",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hà Nội",
        "addressCountry": "VN"
      }
    }
  ]
};

const newArticle = {
  id: 151,
  title: "Cẩm nang sức khỏe người cao tuổi 2026: 15 điều con cháu cần biết",
  slug: "cam-nang-suc-khoe-nguoi-cao-tuoi",
  oldSlugs: [
    "cam-nang-suc-khoe-nguoi-cao-tuoi",
    "blog/cam-nang-suc-khoe-nguoi-cao-tuoi",
    "tin-tuc/cam-nang-suc-khoe-nguoi-cao-tuoi"
  ],
  category: "Cẩm nang chăm sóc",
  date: "30/09/2026",
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  views: "1.2k",
  summary: "15 bài cập nhật 2026 về sức khỏe người cao tuổi: khám sức khỏe miễn phí, BHYT, đột quỵ, huyết áp, tiểu đường, té ngã, sa sút trí tuệ… và cách ANTCARE đồng hành đưa ông bà, bố mẹ đi khám bệnh.",
  metaTitle: "Cẩm nang sức khỏe người cao tuổi 2026 – 15 bài hướng dẫn cho con cháu | ANTCARE",
  metaDescription: "15 bài cập nhật 2026 về sức khỏe người cao tuổi: khám sức khỏe miễn phí, BHYT, đột quỵ, huyết áp, tiểu đường, té ngã, sa sút trí tuệ… và cách ANTCARE đồng hành đưa ông bà, bố mẹ đi khám bệnh.",
  keywords: "cẩm nang sức khỏe người cao tuổi 2026, khám sức khỏe miễn phí 2026, BHYT người cao tuổi, đột quỵ người già, đo huyết áp tại nhà, sa sút trí tuệ, dịch vụ đồng hành đi khám, trợ lý sức khỏe tại nhà",
  image: "/images/tin-tuc/cam-nang-suc-khoe-nguoi-cao-tuoi.jpg",
  content: articleContent,
  schema: articleSchema,
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    role: "Ban Biên Tập Y Khoa & Chăm Sóc Lão Khoa",
    image: "/images/footer-logo.png"
  }
};

// Check if article 151 or slug already exists
const existingIdx = newsData.list.findIndex(x => x.id === 151 || x.slug === 'cam-nang-suc-khoe-nguoi-cao-tuoi');
if (existingIdx >= 0) {
  newsData.list[existingIdx] = newArticle;
  console.log('Updated existing article at index', existingIdx);
} else {
  // Prepend to top of list as newest cornerstone article
  newsData.list.unshift(newArticle);
  console.log('Added new article as id 151!');
}

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('news.json updated! Total articles:', newsData.list.length);
