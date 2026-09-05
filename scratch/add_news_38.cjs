const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 38,
  category: "Nội tiết & Chăm sóc gia đình",
  date: "05 Tháng 9, 2026",
  title: "Đái Tháo Đường Ở Người Cao Tuổi: Những Điều Con Cái Cần Biết Để Chăm Sóc Đúng",
  description: "Chăm sóc đái tháo đường ở người cao tuổi cần ưu tiên ngừa hạ đường huyết cấp tính và tránh biến chứng bàn chân hơn là ép đường huyết xuống quá thấp.",
  image: "/images/tin-tuc/dai-thao-duong-nguoi-cao-tuoi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet-de-cham-soc-dung",
  oldSlugs: [
    "tin-tuc/dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet-de-cham-soc-dung"
  ],
  content: `<p class="ant-sapo">Chăm sóc đái tháo đường ở người cao tuổi cần ưu tiên <strong>ngừa hạ đường huyết cấp tính</strong> và tránh biến chứng bàn chân hơn là ép đường huyết xuống quá thấp.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/tang-huyet-ap-o-nguoi-cao-tuoi-vi-sao-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #68259E; font-weight: 600; text-decoration: underline;">Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/muc-tieu-90-nguoi-cao-tuoi-duoc-phat-hien-va-quan-ly-benh-khong-lay-nhiem-den-nam-2030" style="color: #68259E; font-weight: 600; text-decoration: underline;">Mục Tiêu 90% Người Cao Tuổi Được Phát Hiện Và Quản Lý Bệnh Không Lây Nhiễm Đến Năm 2030</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/sa-sut-tri-tue-o-nguoi-cao-tuoi-dau-hieu-nhan-biet-som" style="color: #68259E; font-weight: 600; text-decoration: underline;">Sa Sút Trí Tuệ Ở Người Cao Tuổi: Dấu Hiệu Nhận Biết Sớm Và Cách Theo Dõi Tại Nhà</a></li>
  </ul>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Nhận diện hiểm họa hạ đường huyết thầm lặng</h2>
<p>Người lớn tuổi thường bị trơ với các dấu hiệu hạ đường huyết cổ điển như cồn cào, toát mồ hôi hay run tay. Thay vào đó, cơn tụt đường huyết ở người già biểu hiện bằng sự lú lẫn thoáng qua, hoa mắt, buồn ngủ bất thường hoặc té ngã. Nếu không xử trí kịp bằng nước đường hoặc viên kẹo ngọt, bệnh nhân có thể rơi vào hôn mê sâu.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. 3 Điểm lưu ý con cái bắt buộc phải theo dõi cho bố mẹ</h2>
<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Sử dụng khay chia thuốc 7 ngày:</strong> Bố mẹ lớn tuổi rất dễ quên hoặc uống lặp lại liều insulin/thuốc hạ đường huyết. Việc chia sẵn theo ô Sáng - Trưa - Chiều - Tối giúp triệt tiêu sai sót.</li>
  <li style="margin-bottom: 10px;"><strong>Kiểm tra bàn chân mỗi tối:</strong> Biến chứng thần kinh làm giảm cảm giác đau; một vết xước do cắt móng chân hoặc gai đâm nếu bỏ sót có thể dẫn đến viêm loét hoại tử nặng.</li>
  <li style="margin-bottom: 0;"><strong>Duy trì tái khám định kỳ 1–3 tháng/lần:</strong> Đánh giá lại chỉ số HbA1c và kiểm tra chức năng gan thận để điều chỉnh đơn thuốc phù hợp thể trạng từng thời kỳ.</li>
</ul>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Không thu xếp được thời gian đưa bố mẹ đi khám?</h2>

    <p style="color: #4b5563; font-size: 16px;">Chọn đúng bệnh viện mới là nửa việc. Nửa còn lại là có người đi cùng bác suốt buổi — biết đường trong bệnh viện, biết đỡ dìu đúng cách, và ghi lại đầy đủ lời bác sĩ dặn.</p>

    <p style="color: #4b5563; font-size: 16px;"><strong>Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ gồm năm phần:</strong></p>
    <ul style="padding-left: 20px; color: #374151; line-height: 1.8;">
      <li style="margin-bottom: 6px;">Đo 5 chỉ số sinh tồn tại nhà trước khi đi.</li>
      <li style="margin-bottom: 6px;">Đưa đón tận nhà chu đáo, an toàn.</li>
      <li style="margin-bottom: 6px;">Hỗ trợ toàn bộ thủ tục khám, xét nghiệm, lấy kết quả.</li>
      <li style="margin-bottom: 6px;">Ghi chép đầy đủ lời bác sĩ dặn gửi lại cho gia đình.</li>
      <li style="margin-bottom: 6px;">Định vị theo dõi suốt buổi giúp con cái an tâm tuyệt đối.</li>
    </ul>

    <p style="color: #4b5563; font-size: 16px; margin-top: 12px;">Mỗi "Kiến" của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí — kể cả tư vấn nên đưa bác đi khám ở đâu.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu Hỏi Thường Gặp Về Bệnh Tiểu Đường Ở Người Cao Tuổi</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Chỉ số đường huyết khi đói bao nhiêu là an toàn cho người già?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Với người già có nhiều bệnh nền, mức đường huyết lúc đói mục tiêu thường dao động từ 7.0 đến 8.5 mmol/L (126 - 153 mg/dL), và chỉ số HbA1c nên duy trì trong khoảng 7.5% - 8.0%, không nên ép xuống dưới 6.5% vì rủi ro tụt đường huyết rất nguy hiểm.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bố mẹ bị tiểu đường có cần cắt bỏ hoàn toàn cơm trắng không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Không nên cắt hoàn toàn. Cắt tinh bột đột ngột dễ làm người cao tuổi bị suy nhược, teo cơ và hạ đường huyết. Hãy giảm lượng cơm trắng, thay thế một phần bằng gạo lứt, khoai lang, yến mạch và ăn kèm nhiều rau xanh để làm chậm quá trình hấp thu đường.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Khi bố mẹ có dấu hiệu tụt đường huyết, cần sơ cứu thế nào?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Áp dụng quy tắc 15-15: Cho uống ngay nửa cốc nước đường (hoặc nước cam, 3 viên kẹo ngọt). Nghỉ ngơi 15 phút rồi đo lại đường huyết. Nếu vẫn dưới 4.0 mmol/L, lặp lại thêm một lần nữa. Nếu bệnh nhân lơ mơ, không nuốt được, tuyệt đối không đổ nước vào miệng mà phải gọi cấp cứu ngay lập tức.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ ANTCARE có phải là AnCare không?</h3>
        <p style="color: #5b5b66; margin: 0; font-size: 15.5px; line-height: 1.6;">Không. <strong>ANTCARE – Kiến chăm tổ</strong> là thương hiệu độc lập tại Hà Nội, trụ sở Rox Tower, 138 Hồ Tùng Mậu. Không liên quan đến AnCare, An Care, ancarer.vn hay ANTCARE Solution. Website chính thức duy nhất là <a href="https://antcare.vn">antcare.vn</a>.</p>
    </div>
</section>

<div style="margin-top: 36px; padding: 24px; border-radius: 16px; background: linear-gradient(135deg, #7C4DCC 0%, #5f37a6 100%); color: #fff; text-align: center; box-shadow: 0 4px 14px rgba(124, 77, 204, 0.25);">
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 8px;">👉 Nhận tư vấn miễn phí về dịch vụ Đồng hành khám bệnh phù hợp cho gia đình bạn</div>
    <a href="tel:0969032360" style="color: #fff; font-size: 24px; font-weight: 800; letter-spacing: 0.02em; display: inline-block; text-decoration: none; margin: 6px 0;">📞 0969 032 360</a>
    <div style="margin-top: 8px;"><a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #FFE600; font-weight: 700; text-decoration: none; font-size: 16px;">🌐 antcare.vn</a></div>
</div>`
};

const oldFeatured = newsData.featured;
newsData.featured = newArticle;

newsData.list = newsData.list.filter(item => item.slug !== newArticle.slug && item.id !== newArticle.id);

if (oldFeatured && oldFeatured.slug !== newArticle.slug) {
  newsData.list.unshift(oldFeatured);
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with new featured article ID 38!');
