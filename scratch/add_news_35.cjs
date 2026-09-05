const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 35,
  category: "Chính sách & Sức khỏe",
  date: "05 Tháng 9, 2026",
  title: "Mục Tiêu 90% Người Cao Tuổi Được Phát Hiện Và Quản Lý Bệnh Không Lây Nhiễm Đến Năm 2030",
  description: "Mục tiêu quản lý bệnh không lây nhiễm người cao tuổi Việt Nam đến 2030: Đạt tối thiểu 90% người cao tuổi được phát hiện sớm, lập hồ sơ quản lý và điều trị liên tục đối với các bệnh mạn tính phổ biến: tăng huyết áp, đái tháo đường và các rối loạn tâm thần, sa sút trí tuệ thông qua trạm y tế xã/phường và bệnh viện tuyến quận/huyện.",
  image: "/images/tin-tuc/muc-tieu-90-nguoi-cao-tuoi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "muc-tieu-90-nguoi-cao-tuoi-duoc-phat-hien-va-quan-ly-benh-khong-lay-nhiem-den-nam-2030",
  oldSlugs: [
    "tin-tuc/muc-tieu-90-nguoi-cao-tuoi-duoc-phat-hien-va-quan-ly-benh-khong-lay-nhiem-den-nam-2030"
  ],
  content: `<p class="ant-sapo"><strong>Mục tiêu quản lý bệnh không lây nhiễm người cao tuổi Việt Nam đến 2030:</strong> Đạt tối thiểu 90% người cao tuổi được phát hiện sớm, lập hồ sơ quản lý và điều trị liên tục đối với các bệnh mạn tính phổ biến: tăng huyết áp, đái tháo đường và các rối loạn tâm thần, sa sút trí tuệ thông qua trạm y tế xã/phường và bệnh viện tuyến quận/huyện.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Tam giác bệnh lý "thầm lặng" đe dọa người già Việt Nam</h2>

<p>Bệnh không lây nhiễm (NCDs) chiếm hơn 70% gánh nặng bệnh tật và tử vong tại Việt Nam. Trong đó, người cao tuổi thường chịu gánh nặng đa bệnh lý:</p>

<div style="overflow-x:auto; margin-bottom:25px;">
  <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb; border-radius:8px;">
    <thead>
      <tr style="background-color:#1e3a8a; color:white;">
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Bệnh lý</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Nguy cơ chính</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Mục tiêu kiểm soát 2030</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Tăng huyết áp</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Đột quỵ não, nhồi máu cơ tim, suy tim</td>
        <td style="padding:11px 12px; border:1px solid #ddd; color:#166534; font-weight:bold;">Phát hiện sớm &gt;90%, kiểm soát huyết áp mục tiêu &lt;140/90 mmHg</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Đái tháo đường</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bàn chân tiểu đường, mù lòa, suy thận giai đoạn cuối</td>
        <td style="padding:11px 12px; border:1px solid #ddd; color:#166534; font-weight:bold;">Theo dõi chỉ số HbA1c định kỳ 3 tháng/lần tại cơ sở y tế</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Sa sút trí tuệ</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Mất nhận thức, phụ thuộc hoàn toàn vào người chăm sóc</td>
        <td style="padding:11px 12px; border:1px solid #ddd; color:#166534; font-weight:bold;">Được sàng lọc bằng thang điểm chuẩn hóa và can thiệp sa sút sớm</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. Vai trò hạt nhân của y tế cơ sở và gia đình</h2>

<p>Để đạt tỷ lệ 90%, trạm y tế không chỉ đóng vai trò phát thuốc mà trở thành trạm điều phối quản lý liên tục. Con cái trong gia đình chính là cánh tay nối dài, đảm bảo bệnh nhân tuân thủ liệu trình dùng thuốc và chế độ ăn giảm muối, hạn chế đường.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Bạn cần hỗ trợ đồng hành kiểm soát bệnh mạn tính cho cha mẹ?</h2>

    <p style="color: #4b5563; font-size: 16px;">Dịch vụ <strong>Trợ lý sức khỏe</strong> và <strong>Đồng hành khám bệnh</strong> của <strong>ANTCARE – Kiến chăm tổ</strong> giúp theo dõi 5 chỉ số sinh tồn tại nhà, nhắc lịch uống thuốc đúng giờ, đưa đón đi khám định kỳ và gửi báo cáo theo dõi chỉ số sức khỏe liên tục cho gia đình.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Mục tiêu 90% người cao tuổi được quản lý bệnh mạn tính 2030 là gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Đó là mục tiêu quốc gia đảm bảo ít nhất 90% người từ 60 tuổi trở lên được khám phát hiện sớm, lập hồ sơ quản lý và điều trị liên tục các bệnh không lây nhiễm phổ biến tại cơ sở y tế.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Những bệnh không lây nhiễm nào được ưu tiên quản lý?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Các bệnh ưu tiên hàng đầu bao gồm: tăng huyết áp, đái tháo đường, ung thư, rối loạn tâm thần và sa sút trí tuệ.</p>

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
console.log('Successfully updated news.json with new featured article ID 35!');
