const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 39,
  category: "Công nghệ Y tế",
  date: "05 Tháng 9, 2026",
  title: "Ứng Dụng Công Nghệ Chăm Sóc Người Cao Tuổi: Từ Thiết Bị Định Vị Đến Báo Cáo Y Tế Số Sau Mỗi Buổi",
  description: "Kết hợp thiết bị định vị (AirTag, SmartTag) và báo cáo y tế số hóa giúp gia đình theo dõi vị trí và sức khỏe cha mẹ theo thời gian thực một cách tiện lợi, bảo mật.",
  image: "/images/tin-tuc/cong-nghe-cham-soc-nguoi-cao-tuoi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "ung-dung-cong-nghe-cham-soc-nguoi-cao-tuoi-dinh-vi-den-bao-cao-so",
  oldSlugs: [
    "tin-tuc/ung-dung-cong-nghe-cham-soc-nguoi-cao-tuoi-dinh-vi-den-bao-cao-so"
  ],
  content: `<p class="ant-sapo">Kết hợp <strong>thiết bị định vị</strong> (AirTag, SmartTag) và <strong>báo cáo y tế số hóa</strong> giúp gia đình theo dõi vị trí và sức khỏe cha mẹ theo thời gian thực một cách tiện lợi, bảo mật.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet-de-cham-soc-dung" style="color: #68259E; font-weight: 600; text-decoration: underline;">Đái Tháo Đường Ở Người Cao Tuổi: Những Điều Con Cái Cần Biết Để Chăm Sóc Đúng</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/tang-huyet-ap-o-nguoi-cao-tuoi-vi-sao-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #68259E; font-weight: 600; text-decoration: underline;">Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/sa-sut-tri-tue-o-nguoi-cao-tuoi-dau-hieu-nhan-biet-som" style="color: #68259E; font-weight: 600; text-decoration: underline;">Sa Sút Trí Tuệ Ở Người Cao Tuổi: Dấu Hiệu Nhận Biết Sớm Và Cách Theo Dõi Tại Nhà</a></li>
  </ul>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Giải quyết bài toán đi lạc bằng thiết bị định vị thông minh</h2>
<p>Đối với người lớn tuổi bị suy giảm trí nhớ nhẹ, việc cài đặt AirTag hoặc SmartTag vào đế giày, móc chìa khóa hay cài vào túi áo khoác mang lại sự yên tâm tuyệt đối. Gia đình có thể thiết lập hàng rào địa lý (geofencing) để nhận thông báo tức thời ngay khi cha mẹ rời khỏi khu vực nhà ở an toàn.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. Minh bạch hóa quy trình y tế bằng báo cáo số sau mỗi buổi</h2>
<p>Thời kỳ con cái phải đoán già đoán non tình trạng của bố mẹ qua vài cuộc gọi chớp nhoáng đã qua. Các dịch vụ chăm sóc lão khoa chuyên nghiệp hiện nay đều áp dụng số hóa chuẩn mực:</p>
<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Báo cáo 5 chỉ số sinh tồn:</strong> Huyết áp, mạch, nhiệt độ, nhịp thở và nồng độ SpO2 được đo và cập nhật tức thì.</li>
  <li style="margin-bottom: 10px;"><strong>Lịch trình di chuyển minh bạch:</strong> Quá trình di chuyển và thời gian thăm khám tại bệnh viện được định vị thời gian thực.</li>
  <li style="margin-bottom: 0;"><strong>Số hóa dặn dò của bác sĩ:</strong> Đơn thuốc, kết quả xét nghiệm và căn dặn chuyên khoa được ghi âm, tóm tắt rõ ràng, lưu trữ thành hồ sơ điện tử trọn đời.</li>
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
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu Hỏi Thường Gặp Về Ứng Dụng Công Nghệ Chăm Sóc Người Già</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ AirTag có thể thay thế hoàn toàn đồng hồ định vị chuyên dụng không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">AirTag rất tiện lợi vì nhỏ gọn và pin bền 1 năm, hoạt động dựa trên mạng lưới thiết bị Apple xung quanh. Tuy nhiên, nếu ở vùng thưa người hoặc cần nút bấm gọi khẩn cấp SOS hai chiều, một chiếc đồng hồ định vị lắp SIM 4G riêng sẽ là phương án bổ trợ an toàn hơn.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Báo cáo số sau mỗi buổi khám bệnh của ANTCARE gửi qua đâu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Báo cáo tổng hợp bao gồm 5 chỉ số sinh tồn, ảnh chụp kết quả xét nghiệm, đơn thuốc và tóm tắt lời dặn của bác sĩ sẽ được gửi trực tiếp qua Zalo/Ứng dụng đến con cái ngay khi kết thúc ca đồng hành.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Lắp camera giám sát tại nhà có làm người già cảm thấy khó chịu không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Để tránh tâm lý bị "canh chừng", gia đình nên trao đổi trước với cha mẹ rằng camera chỉ đặt ở khu vực chung (phòng khách, lối đi, cầu thang) để phát hiện sự cố té ngã kịp thời, tuyệt đối không lắp đặt trong phòng ngủ hay nhà vệ sinh.</p>

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
console.log('Successfully updated news.json with new featured article ID 39!');
