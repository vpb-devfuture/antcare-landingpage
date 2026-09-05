const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

const newArticle = {
  id: 36,
  category: "Thần kinh & Lão khoa",
  date: "05 Tháng 9, 2026",
  title: "Sa Sút Trí Tuệ Ở Người Cao Tuổi: Dấu Hiệu Nhận Biết Sớm Và Cách Theo Dõi Tại Nhà",
  description: "Dấu hiệu sớm nhất của sa sút trí tuệ người cao tuổi là gì? Khác với đãng trí sinh lý của tuổi già, sa sút trí tuệ biểu hiện qua việc quên thông tin vừa mới tiếp nhận, lặp lại cùng một câu hỏi nhiều lần, mất định hướng trong không gian quen thuộc, nhầm lẫn giá trị tiền bạc và thay đổi tính khí thất thường.",
  image: "/images/tin-tuc/sa-sut-tri-tue-nguoi-cao-tuoi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "sa-sut-tri-tue-o-nguoi-cao-tuoi-dau-hieu-nhan-biet-som",
  oldSlugs: [
    "tin-tuc/sa-sut-tri-tue-o-nguoi-cao-tuoi-dau-hieu-nhan-biet-som"
  ],
  content: `<p class="ant-sapo"><strong>Dấu hiệu sớm nhất của sa sút trí tuệ người cao tuổi là gì?</strong> Khác với đãng trí sinh lý của tuổi già, sa sút trí tuệ biểu hiện qua việc quên thông tin vừa mới tiếp nhận, lặp lại cùng một câu hỏi nhiều lần, mất định hướng trong không gian quen thuộc, nhầm lẫn giá trị tiền bạc và thay đổi tính khí thất thường.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/muc-tieu-90-nguoi-cao-tuoi-duoc-phat-hien-va-quan-ly-benh-khong-lay-nhiem-den-nam-2030" style="color: #68259E; font-weight: 600; text-decoration: underline;">Mục Tiêu 90% Người Cao Tuổi Được Phát Hiện Và Quản Lý Bệnh Không Lây Nhiễm Đến Năm 2030</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/nguoi-cao-tuoi-duoc-kham-sang-loc-mien-phi-hang-nam" style="color: #68259E; font-weight: 600; text-decoration: underline;">Người Cao Tuổi Được Khám Sàng Lọc Miễn Phí Hằng Năm: Ý Nghĩa Thiết Thực Với Từng Gia Đình</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/benh-vien-nao-tot-cho-nguoi-cao-tuoi-ha-noi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Bệnh viện nào tốt cho người cao tuổi ở Hà Nội? Hướng dẫn chọn theo từng tình trạng</a></li>
  </ul>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Phân biệt đãng trí tuổi già và sa sút trí tuệ bệnh lý</h2>
<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Quên sinh lý:</strong> Quên chìa khóa hoặc kính mắt nhưng sau đó tự nhớ lại được; thỉnh thoảng quên từ ngữ khi diễn đạt nhưng vẫn duy trì tốt mạch hội thoại.</li>
  <li style="margin-bottom: 0;"><strong>Sa sút trí tuệ (Alzheimer, sa sút mạch máu):</strong> Quên hoàn toàn sự việc vừa xảy ra 15 phút trước, không nhận ra người quen, mất khả năng vận hành thiết bị gia dụng cơ bản và đi lạc ngay trên con ngõ quen thuộc cạnh nhà.</li>
</ul>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. 5 Dấu hiệu cảnh báo gia đình không được xem nhẹ</h2>
<ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
  <li style="margin-bottom: 10px;"><strong>Khó khăn bất thường trong việc quản lý chi tiêu</strong> hoặc tính toán các hóa đơn sinh hoạt.</li>
  <li style="margin-bottom: 10px;"><strong>Lẫn lộn về thời gian và địa điểm:</strong> Không nhớ ngày đêm, quên mùa trong năm.</li>
  <li style="margin-bottom: 10px;"><strong>Đặt đồ vật ở những vị trí kỳ lạ</strong> (để ví tiền vào tủ đông, cất chìa khóa vào hộp gia vị).</li>
  <li style="margin-bottom: 10px;"><strong>Thu mình khỏi các tương tác xã hội</strong>, thường xuyên hoài nghi hoặc dễ nổi giận vô cớ.</li>
  <li style="margin-bottom: 10px;"><strong>Gặp trở ngại thị giác - không gian:</strong> Khó ước lượng độ cao khi bước bậc thềm hoặc lên xuống cầu thang.</li>
</ol>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">3. Cách theo dõi tại nhà và tầm quan trọng của việc thăm khám chuyên khoa</h2>
<p>Gia đình nên lập nhật ký theo dõi tần suất quên của người lớn tuổi. Khi các biểu hiện lặp lại với tần suất tăng dần, việc đưa bố mẹ đến các chuyên khoa Lão khoa hoặc Thần kinh để làm bài kiểm tra nhận thức (MMSE, MoCA) và chụp MRI sọ não là bước đi mang tính quyết định để làm chậm tiến triển bệnh.</p>

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
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp về Sa sút trí tuệ</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Sa sút trí tuệ có chữa khỏi hoàn toàn được không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Phần lớn các thể sa sút trí tuệ nguyên phát như Alzheimer không thể chữa khỏi hoàn toàn. Tuy nhiên, nếu phát hiện sớm ở giai đoạn suy giảm nhận thức nhẹ (MCI), thuốc và các can thiệp nhận thức - vận động có thể làm chậm đáng kể quá trình thoái hóa não, kéo dài thời gian tự chủ sinh hoạt cho người bệnh.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Nên đưa bố mẹ đi khám sa sút trí tuệ ở khoa nào và bệnh viện nào tại Hà Nội?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Gia đình nên đưa bố mẹ đến khám tại Khoa Khám bệnh hoặc Khoa Thần kinh - Lão khoa của các bệnh viện đầu ngành như: Bệnh viện Lão khoa Trung ương, Bệnh viện Bạch Mai, Bệnh viện Hữu Nghị hoặc Bệnh viện Đại học Y Hà Nội.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Làm sao để người già sa sút trí tuệ hợp tác đi khám bệnh?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Người bệnh thường sợ hãi hoặc tự ái khi bị nói là "lẫn" hay "bệnh thần kinh". Con cái nên giải thích nhẹ nhàng rằng đây là buổi kiểm tra sức khỏe tổng quát, kiểm tra giấc ngủ hoặc đo huyết áp định kỳ để bố mẹ thoải mái tinh thần.</p>

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
console.log('Successfully updated news.json with new featured article ID 36!');
