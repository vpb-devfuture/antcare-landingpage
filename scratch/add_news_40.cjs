const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 40,
  category: "Tâm lý & Gia đình",
  date: "05 Tháng 9, 2026",
  title: "Sandwich Generation: Áp Lực Kiệt Quệ Của Thế Hệ \"Kẹp Giữa\" Vừa Nuôi Con Vừa Chăm Bố Mẹ Già",
  description: "Sandwich generation là thế hệ chịu áp lực kép khi vừa gánh vác nuôi dạy con nhỏ, vừa chăm sóc phụng dưỡng cha mẹ già yếu, rất dễ rơi vào kiệt sức thể chất và tâm lý.",
  image: "/images/tin-tuc/sandwich-generation-ap-luc.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "sandwich-generation-ap-luc-kiet-que-cua-the-he-kep-giua",
  oldSlugs: [
    "tin-tuc/sandwich-generation-ap-luc-kiet-que-cua-the-he-kep-giua"
  ],
  content: `<p class="ant-sapo"><strong>Sandwich generation</strong> là thế hệ chịu áp lực kép khi vừa gánh vác nuôi dạy con nhỏ, vừa chăm sóc phụng dưỡng cha mẹ già yếu, rất dễ rơi vào kiệt sức thể chất và tâm lý.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/ung-dung-cong-nghe-cham-soc-nguoi-cao-tuoi-dinh-vi-den-bao-cao-so" style="color: #68259E; font-weight: 600; text-decoration: underline;">Ứng Dụng Công Nghệ Chăm Sóc Người Cao Tuổi: Từ Thiết Bị Định Vị Đến Báo Cáo Y Tế Số Sau Mỗi Buổi</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet-de-cham-soc-dung" style="color: #68259E; font-weight: 600; text-decoration: underline;">Đái Tháo Đường Ở Người Cao Tuổi: Những Điều Con Cái Cần Biết Để Chăm Sóc Đúng</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/tang-huyet-ap-o-nguoi-cao-tuoi-vi-sao-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #68259E; font-weight: 600; text-decoration: underline;">Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?</a></li>
  </ul>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Một ngày kiệt quệ của người con thế hệ kẹp giữa tại đô thị</h2>
<p>Sáng đưa con đến trường, cả ngày quay cuồng với áp lực công việc văn phòng, chiều muộn vừa tan sở đã phải chạy vội về đưa bố mẹ đi khám vì cơn tăng huyết áp đột ngột. Tại bệnh viện, cảnh xếp hàng đông đúc, chờ đợi kết quả xét nghiệm hàng tiếng đồng hồ giữa giờ hành chính khiến nhiều người con rơi vào trạng thái quá tải cảm xúc.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. Giải pháp giải phóng sức lao động và cân bằng cuộc sống</h2>
<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Ủy thác thông minh các khâu kỹ thuật:</strong> Hiếu thảo hiện đại không đồng nghĩa với việc tự tay làm mọi việc một mình đến mức kiệt sức. Việc sử dụng dịch vụ chuyên môn hỗ trợ đưa đón, làm thủ tục bệnh viện giúp bố mẹ được chăm sóc an toàn nhất mà con cái vẫn chu toàn công việc.</li>
  <li style="margin-bottom: 0;"><strong>Thiết lập ranh giới cảm xúc:</strong> Chấp nhận rằng sức lực của bản thân có giới hạn và việc tìm kiếm sự trợ giúp chuyên nghiệp chính là cách bảo vệ hạnh phúc gia đình bền vững.</li>
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
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu Hỏi Thường Gặp Của Thế Hệ Kẹp Giữa (Sandwich Generation)</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Làm thế nào để không cảm thấy có lỗi khi không tự mình đưa bố mẹ đi viện?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Hiếu thảo là đảm bảo cha mẹ nhận được sự chăm sóc y tế an toàn, chu đáo và đúng giờ nhất. Việc nhờ dịch vụ đồng hành chuyên nghiệp có chuyên môn sơ cứu và nắm rõ quy trình bệnh viện đôi khi còn giúp buổi khám diễn ra nhanh gọn và êm ái hơn nhiều so với việc con cái vừa đưa đi vừa căng thẳng giải quyết việc cơ quan.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Chi phí cho dịch vụ đồng hành khám bệnh có đắt không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Chi phí rất linh hoạt và tiết kiệm hơn so với việc phải xin nghỉ phép cả ngày làm việc. Tại ANTCARE, gói trải nghiệm chỉ từ 299.000đ/buổi, bao gồm đầy đủ xe đưa đón, đo chỉ số sinh tồn và người đồng hành hỗ trợ suốt quá trình khám.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bố mẹ tôi hay ngại người lạ, dịch vụ ANTCARE giải quyết ra sao?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Đội ngũ "Kiến" ANTCARE đều được đào tạo bài bản về tâm lý tiếp xúc với người cao tuổi, luôn đến nhà trước giờ đi để chào hỏi, làm quen, đo chỉ số sinh tồn và tạo cảm giác thân tình, ấm áp như con cháu trong nhà trước khi khởi hành.</p>

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
console.log('Successfully updated news.json with new featured article ID 40!');
