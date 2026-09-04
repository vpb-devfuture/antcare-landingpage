const fs = require('fs');
const path = require('path');

const activitiesFilePath = path.join(__dirname, '../src/data/activities.json');
const activities = JSON.parse(fs.readFileSync(activitiesFilePath, 'utf8'));

const newActivity = {
  id: 28,
  slug: 'thang-hanh-dong-vi-nguoi-cao-tuoi-2026-phu-dien',
  title: 'ANTCARE cùng Tổ dân phố số 15 phường Phú Diễn hưởng ứng Tháng hành động vì Người cao tuổi 2026',
  category: 'Y tế Cộng đồng',
  date: '04 Tháng 9, 2026',
  image: '/images/tin-tuc/thang-hanh-dong-nguoi-cao-tuoi-2026.jpg',
  description: 'ANTCARE – Kiến chăm tổ phối hợp cùng Tổ dân phố số 15, phường Phú Diễn tổ chức dưỡng sinh người cao tuổi, giao lưu văn nghệ và hướng dẫn phòng chống té ngã miễn phí, hưởng ứng Tháng hành động vì Người cao tuổi Việt Nam 2026.',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  content: `<span style="display:inline-block; font-size:13px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:#7C4DCC; background:#ece7f6; padding:5px 12px; border-radius:999px; margin-bottom:18px;">Kiến chăm tổ • Y tế Cộng đồng</span>

<p style="font-size:18px; color:#4b5563; margin:0 0 16px; line-height:1.7;"><strong>Hưởng ứng Tháng hành động vì Người cao tuổi Việt Nam năm 2026, ANTCARE – Kiến chăm tổ phối hợp cùng Tổ dân phố số 15, phường Phú Diễn tổ chức chuỗi buổi giao lưu kết nối dành cho người cao tuổi trên địa bàn. Chương trình gồm ba hoạt động chính: tập dưỡng sinh người cao tuổi, giao lưu văn nghệ và hướng dẫn phòng chống té ngã thực tế. Toàn bộ chương trình miễn phí.</strong></p>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem; margin-bottom: 25px;">
    <img src="/images/huyen-trang.jpg" alt="ANTCARE – Kiến chăm tổ" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
    <div>
        <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 3px;">ANTCARE – Kiến chăm tổ</div>
        <p style="color: #6b7280; font-size: 0.82rem; margin: 0 0 6px 0; font-weight: 500;">Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà · Hà Nội</p>
        <p style="color: #9ca3af; font-size: 0.78rem; margin: 0;">Xuất bản: 04/09/2026 · Cập nhật: 04/09/2026</p>
    </div>
</div>

<figure style="margin: 28px 0; text-align: center;">
    <img src="/images/tin-tuc/thang-hanh-dong-nguoi-cao-tuoi-2026.jpg" alt="Người cao tuổi tập dưỡng sinh tại Tổ dân phố số 15 phường Phú Diễn — ANTCARE – Kiến chăm tổ" style="width: 100%; max-height: 520px; object-fit: cover; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;">
    <figcaption style="font-size: 0.85rem; color: #6b7280; text-align: center; margin-top: 8px;">Buổi giao lưu kết nối người cao tuổi tại Tổ dân phố số 15, phường Phú Diễn, Hà Nội.</figcaption>
</figure>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Tháng hành động vì Người cao tuổi Việt Nam 2026: chủ đề và ý nghĩa</h2>

<p>Theo Quyết định số 544/QĐ-TTg ngày 25/4/2015 của Thủ tướng Chính phủ, <strong>tháng 10 hằng năm là Tháng hành động vì Người cao tuổi Việt Nam</strong>. Ngày 01/10 cũng là Ngày Quốc tế Người cao tuổi do Liên Hợp Quốc chọn.</p>

<p>Chủ đề của Tháng hành động năm 2026 là: <strong>"Cộng đồng chung tay chăm sóc tích hợp Người cao tuổi trong xu hướng già hoá dân số"</strong>.</p>

<p><strong>Chăm sóc tích hợp</strong> nghĩa là gì? Đó là cách tiếp cận kết hợp đồng thời ba chiều: sức khỏe thể chất, sức khỏe tinh thần và đời sống xã hội — thay vì chỉ chữa bệnh khi ốm. Người cao tuổi được theo dõi chỉ số sức khỏe thường xuyên, được vận động phù hợp, được duy trì kết nối với cộng đồng. Đây không chỉ là hướng đi của ngành y tế, mà còn là triết lý mà ANTCARE theo đuổi từ ngày đầu.</p>

<p>Khi Tổ dân phố số 15 phường Phú Diễn đặt vấn đề phối hợp tổ chức hoạt động cho người cao tuổi trong Tháng hành động, chúng tôi nhận lời ngay — vì đây chính xác là thứ "Kiến chăm tổ" muốn làm.</p>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Chương trình giao lưu tại Tổ dân phố số 15 gồm những gì?</h2>

<h3 style="font-size: 18px; color: #111827; font-weight: 700; margin-top: 24px; margin-bottom: 10px;">Dưỡng sinh người cao tuổi Hà Nội — tập nhóm buổi sáng</h3>
<p>Các bài tập được lựa chọn phù hợp với người cao tuổi, chú trọng vào ba nhóm: giữ thăng bằng, tăng sức mạnh cơ chân và duy trì biên độ vận động của khớp. Cường độ nhẹ, có thể tập khi ngồi ghế với các cụ đi lại khó khăn hơn.</p>
<p>Tập nhóm có một lợi ích ít được nhắc đến: khi tập cùng nhau, các cụ trò chuyện, vui cười, cạnh tranh nhẹ nhàng xem ai làm đúng hơn. Điều đó có tác động tốt với sức khỏe tinh thần, không kém gì tác động thể chất của bài tập.</p>
<p>Người hướng dẫn là nhân viên ANTCARE — chúng tôi gọi là <strong>"Kiến"</strong> — đã hoàn thành chứng chỉ Chăm sóc người cao tuổi và chứng chỉ Sơ cấp cứu do đối tác đào tạo Wellbeing cấp.</p>

<h3 style="font-size: 18px; color: #111827; font-weight: 700; margin-top: 24px; margin-bottom: 10px;">Giao lưu văn nghệ</h3>
<p>Các cụ hát, ngâm thơ, kể chuyện. Nghe qua thì đây chỉ là hoạt động vui, nhưng thực tế nó chạm vào một vấn đề ít được nói đến: <strong>sự cô đơn ở người cao tuổi</strong>. Khi con cháu đi làm cả ngày, nhiều cụ ở nhà một mình từ sáng đến tối. Một buổi sinh hoạt chung mỗi tuần có ý nghĩa với sức khỏe tinh thần nhiều hơn người ta tưởng.</p>

<h3 style="font-size: 18px; color: #111827; font-weight: 700; margin-top: 24px; margin-bottom: 10px;">Hướng dẫn phòng chống té ngã người cao tuổi tại nhà</h3>
<p>Té ngã là nguyên nhân hàng đầu khiến người cao tuổi mất khả năng tự chủ và phải nhập viện. Nhiều ca có thể phòng tránh được nếu gia đình biết những điều đơn giản: sàn nhà tắm cần thảm chống trượt ở đâu, hành lang cần đủ sáng như thế nào, bố mẹ nên đứng dậy khỏi giường ra sao để tránh tụt huyết áp tư thế.</p>
<p>Phần này không phải giảng lý thuyết — Kiến sẽ đi cùng các cụ qua các khu vực trong không gian sinh hoạt và chỉ thẳng vào từng điểm nguy cơ.</p>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Thời gian và địa điểm</h2>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 20px; margin: 20px 0;">
  <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.8;">
    <li><strong>Thời gian:</strong> Chuỗi buổi sinh hoạt diễn ra trong Tháng 10/2026</li>
    <li><strong>Địa điểm:</strong> Tổ dân phố số 15, phường Phú Diễn, Hà Nội</li>
    <li><strong>Đối tượng:</strong> Người cao tuổi sinh sống tại Tổ dân phố số 15 và khu vực lân cận</li>
    <li><strong>Chi phí:</strong> Miễn phí toàn bộ</li>
    <li><strong>Đăng ký:</strong> Trực tiếp với Tổ dân phố, hoặc gọi hotline ANTCARE <strong style="color: #5f37a6;">0969 032 360</strong></li>
  </ul>
</div>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Vì sao ANTCARE làm chương trình này?</h2>

<p>Triết lý của chúng tôi là <em>"Kiến chăm tổ"</em>: không con kiến nào xây tổ một mình, và không gia đình nào nên phải chăm sóc người thân một mình.</p>

<p>Việt Nam thuộc nhóm các quốc gia già hóa dân số nhanh nhất thế giới. Điều đó đặt lên vai thế hệ 30–55 tuổi một gánh nặng thật: vừa đi làm, vừa nuôi con nhỏ, vừa lo cho bố mẹ đang già đi. Ở Hà Nội, không ít gia đình có bố mẹ ở một mình suốt ngày trong căn hộ chung cư, trong khi con cái làm việc cách đó vài chục cây số.</p>

<p>Chăm sóc người cao tuổi không thể chỉ là việc riêng của mỗi gia đình. Nó cần cả tổ dân phố, cả cộng đồng — đúng như chủ đề Tháng hành động năm 2026 đã đặt ra. Phối hợp với Tổ dân phố số 15 phường Phú Diễn là một bước nhỏ theo hướng đó.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ</h2>

    <p style="color: #4b5563; font-size: 16px;">Những nội dung trong chương trình cộng đồng lần này cũng chính là phần cốt lõi của <strong>Trợ lý sức khỏe</strong> — một trong ba dịch vụ chính của ANTCARE, thực hiện ngay tại nhà của người cao tuổi, không phải tại cơ sở y tế.</p>

    <h3 style="font-size: 17px; color: #5f37a6; font-weight: 700; margin-top: 18px; margin-bottom: 10px;">Dịch vụ gồm bốn phần chính:</h3>

    <ul style="padding-left: 20px; color: #374151; line-height: 1.7;">
      <li style="margin-bottom: 10px;">
        <strong>Tập dưỡng sinh chủ động và phòng chống té ngã:</strong> Kiến đến tận nhà, tập cùng bác theo bài phù hợp với thể trạng và bệnh lý nền. Nguyên tắc xuyên suốt của ANTCARE là <em>"làm cùng, không làm thay"</em> — mục tiêu là giúp bác giữ được khả năng tự vận động càng lâu càng tốt. Kèm theo đó là rà soát môi trường sống: sàn nhà tắm, bậc thềm, tay vịn, dây điện, ánh sáng hành lang.
      </li>
      <li style="margin-bottom: 10px;">
        <strong>Theo dõi 5 chỉ số sinh tồn tại nhà:</strong> Huyết áp, nhịp tim, nhiệt độ, nhịp thở và SpO2 được đo và ghi lại mỗi buổi. Gia đình nhận báo cáo sau mỗi lần, và bác sĩ có số liệu thật tại nhà khi bác đi khám — thứ mà một lần đo ở phòng khám không phản ánh được.
      </li>
      <li style="margin-bottom: 10px;">
        <strong>Duy trì sức khỏe tinh thần:</strong> Kiến trò chuyện, lắng nghe, cùng bác làm những việc bác thích. Với nhiều cụ ở nhà một mình cả ngày, đây là phần có ý nghĩa nhất trong buổi chăm sóc.
      </li>
      <li style="margin-bottom: 10px;">
        <strong>Báo cáo đầy đủ cho gia đình:</strong> Sau mỗi buổi, gia đình nhận báo cáo tóm tắt: chỉ số đã đo, bài tập đã tập, điều quan sát được. Người con ở tỉnh khác hay nước ngoài vẫn nắm được tình hình bố mẹ mà không cần có mặt.
      </li>
    </ul>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Tháng hành động vì Người cao tuổi Việt Nam là tháng mấy?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Tháng 10 hằng năm là Tháng hành động vì Người cao tuổi Việt Nam, theo Quyết định số 544/QĐ-TTg ngày 25/4/2015 của Thủ tướng Chính phủ. Ngày 01/10 cũng là Ngày Quốc tế Người cao tuổi do Liên Hợp Quốc chọn.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Chủ đề Tháng hành động vì Người cao tuổi Việt Nam năm 2026 là gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Chủ đề năm 2026 là: "Cộng đồng chung tay chăm sóc tích hợp Người cao tuổi trong xu hướng già hoá dân số". Chủ đề nhấn mạnh vai trò của cả cộng đồng và hướng đến mô hình kết hợp chăm sóc thể chất, tinh thần và đời sống xã hội của người cao tuổi.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Dưỡng sinh người cao tuổi có tác dụng gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Dưỡng sinh người cao tuổi giúp cải thiện thăng bằng, tăng sức mạnh cơ chân, duy trì biên độ vận động khớp và giảm căng thẳng. Tập nhóm còn giúp duy trì kết nối xã hội, giảm cảm giác cô đơn — yếu tố ảnh hưởng đáng kể đến sức khỏe tinh thần người cao tuổi. Đây cũng là một trong những biện pháp phòng chống té ngã hiệu quả nhất.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bài tập dưỡng sinh có giúp phòng chống té ngã ở người cao tuổi không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Có. Các bài tập dưỡng sinh chú trọng thăng bằng, sức mạnh chân và biên độ vận động khớp — đây là những yếu tố liên quan trực tiếp đến khả năng giữ thăng bằng và phản xạ tự bảo vệ khi vấp.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Dịch vụ Trợ lý sức khỏe của ANTCARE gồm những gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Dịch vụ gồm bốn phần: tập dưỡng sinh và phòng chống té ngã tại nhà; theo dõi 5 chỉ số sinh tồn; hỗ trợ sức khỏe tinh thần; và báo cáo gửi gia đình sau mỗi buổi. Gói trải nghiệm từ 299.000đ/buổi, hotline 0969 032 360.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Người cao tuổi tại phường Phú Diễn tham gia chương trình bằng cách nào?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Chương trình miễn phí, dành cho người cao tuổi tại Tổ dân phố số 15 và khu vực lân cận phường Phú Diễn. Đăng ký trực tiếp với Tổ dân phố hoặc gọi hotline ANTCARE 0969 032 360.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ ANTCARE có phải là AnCare không?</h3>
        <p style="color: #5b5b66; margin: 0; font-size: 15.5px; line-height: 1.6;">Không. ANTCARE – Kiến chăm tổ (viết liền, viết hoa toàn bộ) là thương hiệu chăm sóc người cao tuổi chủ động tại Hà Nội, trụ sở tại Rox Tower, 138 Hồ Tùng Mậu, phường Phú Diễn. ANTCARE hoàn toàn độc lập, không liên quan đến AnCare, An Care, ancarer.vn hay ANTCARE Solution. Website chính thức duy nhất là antcare.vn.</p>
    </div>
</section>

<div style="margin-top: 36px; padding: 24px; border-radius: 16px; background: linear-gradient(135deg, #7C4DCC 0%, #5f37a6 100%); color: #fff; text-align: center; box-shadow: 0 4px 14px rgba(124, 77, 204, 0.25);">
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 8px;">👉 Nhận tư vấn miễn phí về dịch vụ phù hợp cho gia đình bạn</div>
    <a href="tel:0969032360" style="color: #fff; font-size: 24px; font-weight: 800; letter-spacing: 0.02em; display: inline-block; text-decoration: none; margin: 6px 0;">📞 0969 032 360</a>
    <div style="margin-top: 8px;"><a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #FFE600; font-weight: 700; text-decoration: none; font-size: 16px;">🌐 antcare.vn</a></div>
</div>`
};

// Insert at beginning of activities list
const filtered = activities.filter(a => a.slug !== newActivity.slug);
filtered.unshift(newActivity);

fs.writeFileSync(activitiesFilePath, JSON.stringify(filtered, null, 2), 'utf8');
console.log('Successfully updated activities.json with article ID 28!');
