const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 37,
  category: "Tim mạch & Lão khoa",
  date: "05 Tháng 9, 2026",
  title: "Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?",
  description: "Vì sao đo huyết áp tại nhà chuẩn xác hơn ở viện? Việc theo dõi tại nhà loại bỏ hoàn toàn 'tăng huyết áp áo choàng trắng' (huyết áp tăng vọt vì lo lắng trước bác sĩ) và phát hiện sớm 'tăng huyết áp ẩn giấu' (bình thường ở viện nhưng tăng cao nguy hiểm khi ở nhà). Bảng theo dõi huyết áp liên tục tại gia là căn cứ thực tế nhất để bác sĩ kê đơn chính xác.",
  image: "/images/tin-tuc/tang-huyet-ap-do-tai-nha.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "tang-huyet-ap-o-nguoi-cao-tuoi-vi-sao-do-tai-nha-quan-trong-hon-o-phong-kham",
  oldSlugs: [
    "tin-tuc/tang-huyet-ap-o-nguoi-cao-tuoi-vi-sao-do-tai-nha-quan-trong-hon-o-phong-kham"
  ],
  content: `<p class="ant-sapo"><strong>Vì sao đo huyết áp tại nhà chuẩn xác hơn ở viện?</strong> Việc theo dõi tại nhà loại bỏ hoàn toàn "tăng huyết áp áo choàng trắng" (huyết áp tăng vọt vì lo lắng trước bác sĩ) và phát hiện sớm "tăng huyết áp ẩn giấu" (bình thường ở viện nhưng tăng cao nguy hiểm khi ở nhà). Bảng theo dõi huyết áp liên tục tại gia là căn cứ thực tế nhất để bác sĩ kê đơn chính xác.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/muc-tieu-90-nguoi-cao-tuoi-duoc-phat-hien-va-quan-ly-benh-khong-lay-nhiem-den-nam-2030" style="color: #68259E; font-weight: 600; text-decoration: underline;">Mục Tiêu 90% Người Cao Tuổi Được Phát Hiện Và Quản Lý Bệnh Không Lây Nhiễm Đến Năm 2030</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/sa-sut-tri-tue-o-nguoi-cao-tuoi-dau-hieu-nhan-biet-som" style="color: #68259E; font-weight: 600; text-decoration: underline;">Sa Sút Trí Tuệ Ở Người Cao Tuổi: Dấu Hiệu Nhận Biết Sớm Và Cách Theo Dõi Tại Nhà</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/nguoi-cao-tuoi-duoc-kham-sang-loc-mien-phi-hang-nam" style="color: #68259E; font-weight: 600; text-decoration: underline;">Người Cao Tuổi Được Khám Sàng Lọc Miễn Phí Hằng Năm: Ý Nghĩa Thiết Thực Với Từng Gia Đình</a></li>
  </ul>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Hai sai số kinh điển khi chỉ phụ thuộc vào đo huyết áp tại viện</h2>
<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Hội chứng áo choàng trắng:</strong> Khi bước vào phòng khám đông đúc, tâm lý người già dễ hồi hộp khiến huyết áp vọt lên &gt;150 mmHg. Nếu bác sĩ tăng liều dựa trên con số này, người bệnh khi về nhà rất dễ bị tụt huyết áp tư thế, hoa mắt và té ngã.</li>
  <li style="margin-bottom: 0;"><strong>Tăng huyết áp ẩn giấu ban đêm:</strong> Nhiều người già có chỉ số đo ở phòng khám rất đẹp nhưng lại có cơn tăng áp vọt lúc rạng sáng tại nhà, đây chính là nguyên nhân hàng đầu gây đột quỵ khi ngủ dậy.</li>
</ul>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. Nguyên tắc vàng khi đo huyết áp cho người cao tuổi</h2>
<ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
  <li style="margin-bottom: 10px;"><strong>Ưu tiên máy đo bắp tay điện tử</strong> đạt chuẩn chứng nhận y tế quốc tế.</li>
  <li style="margin-bottom: 10px;"><strong>Đo cố định 2 lần/ngày:</strong> Buổi sáng sau khi thức dậy và đi vệ sinh (chưa uống thuốc, chưa ăn sáng) và buổi tối trước khi đi ngủ.</li>
  <li style="margin-bottom: 10px;"><strong>Nghỉ ngơi yên tĩnh tối thiểu 5 phút</strong>, lưng tựa thẳng, chân đặt bằng trên sàn, vòng bít đặt ngang mức tim và không nói chuyện trong suốt quá trình đo.</li>
</ol>

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
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu Hỏi Thường Gặp Về Theo Dõi Huyết Áp Tại Nhà</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Huyết áp mục tiêu an toàn cho người trên 65 tuổi là bao nhiêu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Theo khuyến cáo tim mạch hiện nay, mức huyết áp mục tiêu đo tại nhà cho người cao tuổi thường được duy trì dưới 130/80 mmHg nếu dung nạp tốt, nhưng không nên hạ huyết áp tâm thu xuống dưới 120 mmHg để tránh nguy cơ thiếu máu tưới não và cơ tim.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Nên chọn máy đo huyết áp bắp tay hay cổ tay cho bố mẹ?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Nên chọn máy đo bắp tay. Mạch máu cổ tay ở người cao tuổi thường bị xơ vữa và vôi hóa, vị trí đo lại nhạy cảm với tư thế đặt tay nên máy đo cổ tay thường cho sai số lớn hơn so với máy đo bắp tay.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Huyết áp đo hai tay lệch nhau thì lấy kết quả bên nào?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Trong lần đo đầu tiên, hãy đo cả hai tay. Nếu có sự chênh lệch, hãy chọn tay có chỉ số cao hơn để theo dõi trong những lần tiếp theo. Nếu mức chênh lệch giữa hai tay vượt quá 15–20 mmHg, gia đình cần báo ngay với bác sĩ tim mạch để loại trừ hẹp động mạch dưới đòn.</p>

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
console.log('Successfully updated news.json with new featured article ID 37!');
