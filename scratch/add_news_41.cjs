const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 41,
  category: "Dịch vụ Y tế & Đời sống",
  date: "05 Tháng 9, 2026",
  title: "Mô Hình Xã Hội Hóa Chăm Sóc Người Cao Tuổi: Vì Sao Dịch Vụ Tư Nhân Đang Lấp Đúng Chỗ Trống?",
  description: "Dịch vụ chăm sóc người cao tuổi tư nhân giúp lấp đầy khoảng trống y tế gia đình nhờ điều dưỡng tại nhà và hỗ trợ chăm sóc chuyên nghiệp theo giờ, vừa vặn với nếp sống đô thị.",
  image: "/images/tin-tuc/mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi-dich-vu-tu-nhan",
  oldSlugs: [
    "tin-tuc/mo-hinh-xa-hoi-hoa-cham-soc-nguoi-cao-tuoi-dich-vu-tu-nhan"
  ],
  content: `<p class="ant-sapo">Dịch vụ chăm sóc người cao tuổi tư nhân giúp <strong>lấp đầy khoảng trống y tế gia đình</strong> nhờ điều dưỡng tại nhà và hỗ trợ chăm sóc chuyên nghiệp theo giờ, vừa vặn với nếp sống đô thị.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/sandwich-generation-ap-luc-kiet-que-cua-the-he-kep-giua" style="color: #68259E; font-weight: 600; text-decoration: underline;">Sandwich Generation: Áp Lực Kiệt Quệ Của Thế Hệ "Kẹp Giữa" Vừa Nuôi Con Vừa Chăm Bố Mẹ Già</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/ung-dung-cong-nghe-cham-soc-nguoi-cao-tuoi-dinh-vi-den-bao-cao-so" style="color: #68259E; font-weight: 600; text-decoration: underline;">Ứng Dụng Công Nghệ Chăm Sóc Người Cao Tuổi: Từ Thiết Bị Định Vị Đến Báo Cáo Y Tế Số Sau Mỗi Buổi</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet-de-cham-soc-dung" style="color: #68259E; font-weight: 600; text-decoration: underline;">Đái Tháo Đường Ở Người Cao Tuổi: Những Điều Con Cái Cần Biết Để Chăm Sóc Đúng</a></li>
  </ul>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Thực tế: Khoảng trống an toàn khi con cái vắng nhà</h2>
<p>Nhiều gia đình chọn giải pháp thuê người giúp việc phổ thông để trông nom bố mẹ. Tuy nhiên, khi xảy ra tình huống khẩn cấp (tăng huyết áp kịch phát, tụt đường huyết, sặc thức ăn hoặc té ngã trong nhà tắm), người giúp việc thường lúng túng do thiếu hoàn toàn kiến thức sơ cấp cứu và kỹ năng lão khoa cơ bản.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. Chăm sóc tại gia chuyên nghiệp: An toàn mà không xáo trộn lối sống</h2>
<p>Người già Việt Nam luôn có tâm lý gắn bó với mái ấm gia đình và ngần ngại vào viện dưỡng lão nội trú. Mô hình dịch vụ chăm sóc bán thời gian tại nhà ra đời nhằm giải quyết đúng mong mỏi này: đảm bảo bố mẹ được hỗ trợ sinh hoạt an toàn, đúng giờ giấc và được trò chuyện giải tỏa tâm lý ngay trong căn nhà thân thuộc.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Lo lắng khi để bố mẹ ở nhà một mình cả ngày dài?</h2>

    <p style="color: #4b5563; font-size: 16px;">Giúp việc thông thường khó có đủ kiến thức y tế khi gặp sự cố, còn con cái thì bận rộn với guồng quay công sở. Bố mẹ cần một người bạn đồng hành tin cậy ngay tại gian bếp, phòng khách quen thuộc.</p>

    <p style="color: #4b5563; font-size: 16px;"><strong>Dịch vụ An Tâm Cửa Nhà của ANTCARE – Kiến chăm tổ mang đến sự an lòng trọn vẹn:</strong></p>
    <ul style="padding-left: 20px; color: #374151; line-height: 1.8;">
      <li style="margin-bottom: 6px;">Túc trực hỗ trợ sinh hoạt thường nhật, phòng ngừa trượt ngã, đảm bảo an toàn tại gia.</li>
      <li style="margin-bottom: 6px;">Chuẩn bị bữa ăn theo thực đơn bệnh lý (giảm muối, hạn chế đường, dễ tiêu hóa).</li>
      <li style="margin-bottom: 6px;">Nhắc nhở uống thuốc đúng cữ, hỗ trợ vận động nhẹ nhàng và trò chuyện giải tỏa cô đơn.</li>
      <li style="margin-bottom: 6px;">Báo cáo tình trạng sinh hoạt mỗi ngày gửi trực tiếp cho con cái qua ứng dụng.</li>
    </ul>

    <p style="color: #4b5563; font-size: 16px; margin-top: 12px;">Mỗi "Kiến" của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Đặt lịch linh hoạt theo giờ hoặc theo ca ngày.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu Hỏi Thường Gặp Về Dịch Vụ Chăm Sóc Người Cao Tuổi Tư Nhân</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Dịch vụ An Tâm Cửa Nhà khác gì so với người giúp việc gia đình?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Nhân viên ANTCARE được đào tạo chuyên môn về sơ cấp cứu và chăm sóc người cao tuổi bởi Wellbeing. Không chỉ giúp việc nhà đơn thuần, ANTCARE tập trung vào sự an toàn y tế, chế độ ăn bệnh lý và sức khỏe tinh thần của người cao tuổi.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Tôi có thể đặt dịch vụ theo các khung giờ lẻ trong tuần không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Hoàn toàn được. ANTCARE cung cấp các gói linh hoạt theo ca 2 giờ, 4 giờ, theo ngày hoặc các ngày cố định trong tuần để phù hợp với lịch trình làm việc của gia đình.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Nhân viên chăm sóc có lý lịch rõ ràng và tin cậy không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Toàn bộ nhân sự "Kiến" tại ANTCARE đều được xác minh nhân thân, lý lịch tư pháp rõ ràng, trải qua các vòng kiểm tra sức khỏe và ký hợp đồng bảo đảm quyền lợi tài sản cho gia đình.</p>

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
console.log('Successfully updated news.json with new featured article ID 41!');
