const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 34,
  category: "Y tế & Đời sống",
  date: "05 Tháng 9, 2026",
  title: "Người Cao Tuổi Được Khám Sàng Lọc Miễn Phí Hằng Năm: Ý Nghĩa Thiết Thực Với Từng Gia Đình",
  description: "Khám sàng lọc miễn phí người cao tuổi 2026 là gì? Đây là chính sách y tế cơ sở định kỳ giúp người từ 60 tuổi trở lên được tầm soát sớm các bệnh mạn tính không lây nhiễm (tăng huyết áp, đái tháo đường, ung thư, sa sút trí tuệ) ngay tại trạm y tế phường/xã, giúp giảm tải gánh nặng tài chính điều trị và hạn chế biến chứng nguy hiểm cho từng hộ gia đình.",
  image: "/images/tin-tuc/kham-sang-loc-mien-phi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "nguoi-cao-tuoi-duoc-kham-sang-loc-mien-phi-hang-nam",
  oldSlugs: [
    "tin-tuc/nguoi-cao-tuoi-duoc-kham-sang-loc-mien-phi-hang-nam"
  ],
  content: `<p class="ant-sapo"><strong>Khám sàng lọc miễn phí người cao tuổi 2026 là gì?</strong> Đây là chính sách y tế cơ sở định kỳ giúp người từ 60 tuổi trở lên được tầm soát sớm các bệnh mạn tính không lây nhiễm (tăng huyết áp, đái tháo đường, ung thư, sa sút trí tuệ) ngay tại trạm y tế phường/xã, giúp giảm tải gánh nặng tài chính điều trị và hạn chế biến chứng nguy hiểm cho từng hộ gia đình.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Thực trạng già hóa dân số và bước ngoặt từ chính sách khám miễn phí 2026</h2>

<p>Việt Nam đang là một trong những quốc gia có tốc độ già hóa dân số nhanh hàng đầu châu Á. Việc triển khai chương trình khám sàng lọc miễn phí định kỳ hằng năm tại mạng lưới y tế cơ sở đánh dấu sự chuyển dịch mạnh mẽ từ <em>chữa bệnh khi đã có triệu chứng</em> sang <em>chủ động phòng ngừa và phát hiện sớm</em>.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. 3 Ý nghĩa sống còn của đợt tầm soát đối với gia đình Việt</h2>

<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Giải tỏa áp lực kinh tế dài hạn:</strong> Chi phí điều trị biến chứng đột quỵ hoặc suy thận mạn do phát hiện muộn có thể lên tới hàng trăm triệu đồng mỗi năm. Tầm soát sớm triệt tiêu rủi ro này ngay từ vạch xuất phát.</li>
  <li style="margin-bottom: 10px;"><strong>Chấm dứt tâm lý "ngại phiền con cái":</strong> Đa số cha mẹ lớn tuổi thường giấu bệnh vì sợ tốn kém. Chương trình miễn phí giúp người già chủ động đi khám định kỳ với tâm lý nhẹ nhõm.</li>
  <li style="margin-bottom: 0;"><strong>Số hóa dữ liệu y tế gia đình:</strong> Kết quả khám tại trạm y tế được tích hợp vào hồ sơ sức khỏe điện tử (VNeID/Sổ sức khỏe điện tử), giúp con cái dù bận rộn vẫn dễ dàng theo dõi chỉ số của cha mẹ từ xa.</li>
</ul>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">3. Quy trình đưa cha mẹ đi khám sàng lọc miễn phí cần chuẩn bị gì?</h2>

<ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
  <li style="margin-bottom: 10px;"><strong>Mang theo Căn cước công dân gắn chip</strong> hoặc tài khoản VNeID mức độ 2 tích hợp thẻ BHYT.</li>
  <li style="margin-bottom: 10px;"><strong>Nhịn ăn sáng</strong> nếu chương trình khám có chỉ định xét nghiệm đường huyết và mỡ máu.</li>
  <li style="margin-bottom: 10px;"><strong>Mang theo đơn thuốc và hồ sơ bệnh án cũ</strong> (nếu đang điều trị bệnh nền).</li>
</ol>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Không thu xếp được thời gian đưa bố mẹ đi khám sàng lọc?</h2>

    <p style="color: #4b5563; font-size: 16px;">Dịch vụ <strong>Đồng hành khám bệnh</strong> của <strong>ANTCARE – Kiến chăm tổ</strong> hỗ trợ đưa đón tận nhà, cùng người cao tuổi làm thủ tục tại trạm y tế/bệnh viện, ghi chép đầy đủ kết quả chỉ số và gửi báo cáo chi tiết cho con cái từ xa.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Khám sàng lọc miễn phí cho người cao tuổi 2026 áp dụng cho độ tuổi nào?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Chương trình áp dụng định kỳ hằng năm cho tất cả công dân từ 60 tuổi trở lên đang sinh sống tại địa phương.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Khám sàng lọc tại trạm y tế gồm những nội dung gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Tầm soát các bệnh mạn tính không lây nhiễm (tăng huyết áp, đái tháo đường, ung thư, sa sút trí tuệ) và lập/cập nhật hồ sơ sức khỏe điện tử.</p>

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
console.log('Successfully updated news.json with new featured article ID 34!');
