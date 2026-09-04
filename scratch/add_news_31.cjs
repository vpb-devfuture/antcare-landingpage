const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// The new article object to set as featured
const newArticle = {
  id: 31,
  category: "Chăm sóc sức khỏe",
  date: "04 Tháng 9, 2026",
  title: "Thủ tục khám bảo hiểm y tế cho người cao tuổi: 9 bước và giấy tờ cần mang",
  description: "Hướng dẫn đầy đủ thủ tục khám bảo hiểm y tế cho người cao tuổi tại Hà Nội: giấy tờ cần mang, 9 bước trong bệnh viện, cách dùng VssID và VNeID, và những lỗi hay gặp. ANTCARE – Kiến chăm tổ biên soạn.",
  image: "/images/tin-tuc/thu-tuc-bhyt.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "thu-tuc-kham-bao-hiem-y-te-nguoi-cao-tuoi",
  oldSlugs: [
    "tin-tuc/thu-tuc-kham-bao-hiem-y-te-nguoi-cao-tuoi"
  ],
  content: `<p class="ant-sapo"><strong>Để khám bảo hiểm y tế cho người cao tuổi, cần mang căn cước công dân, thẻ bảo hiểm y tế (bản giấy hoặc trên VssID/VNeID), giấy chuyển tuyến nếu khám trái tuyến, sổ khám cũ và danh sách thuốc đang dùng. Quy trình trong bệnh viện gồm 9 bước, trong đó bước làm xét nghiệm và chờ kết quả thường mất nhiều thời gian nhất.</strong></p>

<div style="background-color: #f0fdf4; padding: 15px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <strong style="color: #166534;">💡 9 Bước Quy Trình Khám BHYT Cho Người Cao Tuổi Tại Bệnh Viện:</strong> 
    <ol style="margin-top: 10px; margin-bottom: 0;">
      <li>Quầy tiếp đón → Lấy số thứ tự → Đến phòng khám chuyên khoa.</li>
      <li>Bác sĩ khám & cho chỉ định → Đóng dấu chỉ định tại quầy thu phí.</li>
      <li>Làm xét nghiệm, chiếu chụp → Quay lại phòng khám bác sĩ đọc kết quả.</li>
      <li>Nhận đơn thuốc & đóng phí → Nhận thuốc tại quầy dược bảo hiểm.</li>
    </ol>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Giấy tờ cần mang khi khám bảo hiểm y tế</h2>

<div style="overflow-x:auto; margin-bottom:25px;">
  <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb; border-radius:8px;">
    <thead>
      <tr style="background-color:#1e3a8a; color:white;">
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Giấy tờ</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:center;">Bắt buộc?</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Ghi chú quan trọng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Căn cước công dân</td>
        <td style="padding:11px 12px; border:1px solid #ddd; text-align:center; color:#166534; font-weight:bold;">Có</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Nhiều bệnh viện đã tra được từ Cơ sở dữ liệu quốc gia về dân cư.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Thẻ bảo hiểm y tế</td>
        <td style="padding:11px 12px; border:1px solid #ddd; text-align:center; color:#166534; font-weight:bold;">Có</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Dùng được bản giấy hoặc bản trên VssID / VNeID.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Giấy chuyển tuyến</td>
        <td style="padding:11px 12px; border:1px solid #ddd; text-align:center; color:#9a3412;">Tùy trường hợp</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Cần nếu khám trái tuyến và muốn hưởng bảo hiểm đầy đủ.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Sổ khám bệnh cũ</td>
        <td style="padding:11px 12px; border:1px solid #ddd; text-align:center; color:#1e3a8a;">Nên có</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Giúp bác sĩ nắm diễn biến — hay bị bỏ quên nhất.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Ảnh vỏ thuốc đang dùng</td>
        <td style="padding:11px 12px; border:1px solid #ddd; text-align:center; color:#1e3a8a;">Nên có</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Chụp bằng điện thoại là nhanh nhất.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Kết quả xét nghiệm gần nhất</td>
        <td style="padding:11px 12px; border:1px solid #ddd; text-align:center; color:#1e3a8a;">Nên có</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Tránh phải làm lại xét nghiệm không cần thiết.</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Mẹo phòng thân:</strong> chụp toàn bộ giấy tờ trên lưu vào điện thoại. Khi quên hoặc thất lạc, có ảnh vẫn xử lý được nhiều tình huống.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Dùng thẻ bảo hiểm y tế trên điện thoại như thế nào?</h2>

<p>Thẻ bảo hiểm y tế bản điện tử trên ứng dụng <strong>VssID</strong> hoặc <strong>VNeID</strong> được chấp nhận tại các cơ sở khám chữa bệnh, thay cho thẻ giấy.</p>

<p>Nhưng có một vấn đề thực tế: nhiều người cao tuổi không tự thao tác được. Nếu định dùng bản điện tử, hãy <strong>cài đặt và đăng nhập sẵn trước khi đi</strong>, mở thử màn hình thẻ để chắc chắn hiển thị được, và tốt nhất là chụp màn hình lưu vào album để mở nhanh khi ở quầy.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Chín bước khám bảo hiểm y tế trong bệnh viện</h2>

<ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
  <li style="margin-bottom: 10px;"><strong>Đến quầy tiếp đón:</strong> Xuất trình căn cước và thẻ bảo hiểm y tế, kèm giấy chuyển tuyến nếu có. Tìm chỗ cho bác ngồi trước, người đi cùng đi xếp hàng thay.</li>
  <li style="margin-bottom: 10px;"><strong>Lấy số thứ tự:</strong> Nhận phiếu ghi số và phòng khám. Chụp ảnh phiếu ngay. Nếu khám khu yêu cầu thì đóng phí chênh lệch ở bước này.</li>
  <li style="margin-bottom: 10px;"><strong>Đến phòng khám chuyên khoa:</strong> Xác định trước lộ trình để bác không phải đi lại nhiều lần.</li>
  <li style="margin-bottom: 10px;"><strong>Bác sĩ khám và cho chỉ định:</strong> Hỏi ngay có cần nhịn ăn hay chuẩn bị gì trước khi làm xét nghiệm không.</li>
  <li style="margin-bottom: 10px;"><strong>Đóng dấu chỉ định tại quầy thu phí.</strong></li>
  <li style="margin-bottom: 10px;"><strong>Làm xét nghiệm, chiếu chụp:</strong> Bước mất thời gian nhất. Để bác ngồi chờ chỗ có ghế, người đi cùng lo thủ tục.</li>
  <li style="margin-bottom: 10px;"><strong>Quay lại phòng khám để bác sĩ đọc kết quả:</strong> Ghi lại đầy đủ lời dặn.</li>
  <li style="margin-bottom: 10px;"><strong>Nhận đơn thuốc, đóng phí, lấy số lãnh thuốc:</strong> Chụp ảnh đơn thuốc ngay tại chỗ.</li>
  <li style="margin-bottom: 10px;"><strong>Nhận thuốc tại quầy dược bảo hiểm:</strong> Kiểm tra đủ thuốc so với đơn trước khi rời quầy.</li>
</ol>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Khám trái tuyến có được hưởng bảo hiểm không?</h2>

<p>Mức hưởng khi khám trái tuyến khác với đúng tuyến, và quy định này <strong>thay đổi theo từng thời kỳ</strong>. Vì vậy bài viết này không đưa ra con số cụ thể — thay vào đó, lời khuyên thực tế là: gọi tổng đài bệnh viện hoặc cơ quan bảo hiểm xã hội <strong>trước ngày đi</strong> để xác nhận mức hưởng và giấy tờ cần thiết.</p>

<p>Một cuộc gọi 5 phút có thể tránh được khoản chi phí ngoài dự tính vài triệu đồng.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Ba lỗi khiến gia đình mất cả buổi</h2>

<ul style="background-color: #fef2f2; border: 1px solid #fee2e2; border-left: 4px solid #ef4444; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px; color: #991b1b;"><strong>Quên sổ khám bệnh cũ:</strong> Đây là lỗi phổ biến nhất. Không có sổ, bác sĩ không nắm được diễn biến và có thể phải chỉ định lại các xét nghiệm đã làm.</li>
  <li style="margin-bottom: 10px; color: #991b1b;"><strong>Không hỏi trước về việc nhịn ăn:</strong> Đến nơi mới biết cần nhịn ăn để xét nghiệm máu — phải hẹn lại buổi khác, mất trọn một ngày công.</li>
  <li style="margin-bottom: 0; color: #991b1b;"><strong>Đi nhầm cơ sở:</strong> Nhiều bệnh viện lớn ở Hà Nội có 2–3 cơ sở ở các địa điểm khác nhau. Phải hỏi rõ cơ sở nào trước khi đi.</li>
</ul>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Làm sao để không quên lời bác sĩ dặn?</h2>

<p>Bác sĩ nói nhanh, phòng khám đông, người cao tuổi nghe không rõ, và về đến nhà thì cả nhà chỉ nhớ mang máng. Ba cách xử lý:</p>

<ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
  <li style="margin-bottom: 10px;"><strong>Xin phép ghi âm:</strong> Đa số bác sĩ đồng ý nếu hỏi lịch sự.</li>
  <li style="margin-bottom: 10px;"><strong>Chụp lại đơn thuốc và phiếu chỉ định</strong> ngay tại chỗ.</li>
  <li style="margin-bottom: 10px;"><strong>Hỏi lại ba câu chốt</strong> trước khi rời phòng khám: uống thuốc thế nào, cần kiêng gì, khi nào tái khám.</li>
</ol>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Không thu xếp được thời gian đưa bố mẹ đi khám?</h2>

    <p style="color: #4b5563; font-size: 16px;">Toàn bộ 9 bước ở trên là những gì Kiến của <strong>ANTCARE – Kiến chăm tổ</strong> làm thay gia đình trong dịch vụ <strong>Đồng hành khám bệnh</strong>: đo 5 chỉ số sinh tồn tại nhà trước khi đi, đưa đón tận nhà, xếp hàng và lo toàn bộ thủ tục, ghi chép đầy đủ lời bác sĩ dặn, và định vị theo dõi để gia đình biết bác đang ở đâu suốt buổi.</p>

    <p>Mỗi Kiến đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Khám bảo hiểm y tế cho người cao tuổi cần mang giấy tờ gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Căn cước công dân, thẻ bảo hiểm y tế (bản giấy hoặc VssID/VNeID), giấy chuyển tuyến nếu khám trái tuyến, sổ khám bệnh cũ, ảnh vỏ thuốc đang dùng và kết quả xét nghiệm gần nhất.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Có thể dùng thẻ bảo hiểm y tế trên điện thoại thay thẻ giấy không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;"><strong>Được.</strong> Bản thẻ trên VssID hoặc VNeID được chấp nhận. Nên cài sẵn và đăng nhập thử trước khi đi, vì nhiều người cao tuổi không tự thao tác được tại quầy.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Người cao tuổi khám trái tuyến có được hưởng bảo hiểm y tế không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Mức hưởng khác với đúng tuyến và thay đổi theo quy định từng thời kỳ. Nên gọi tổng đài bệnh viện hoặc cơ quan bảo hiểm xã hội xác nhận trước khi đi.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Làm sao để không quên lời bác sĩ dặn?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Xin phép ghi âm, chụp ảnh đơn thuốc ngay tại chỗ, và hỏi lại ba câu chốt: <strong>uống thuốc thế nào, cần kiêng gì, khi nào tái khám.</strong></p>

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

// Move previous featured article to list
const oldFeatured = newsData.featured;

newsData.featured = newArticle;

// Remove any existing article with same slug or id from list to avoid duplication
newsData.list = newsData.list.filter(item => item.slug !== newArticle.slug && item.id !== newArticle.id);

if (oldFeatured && oldFeatured.slug !== newArticle.slug) {
  newsData.list.unshift(oldFeatured);
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with new featured article ID 31!');
