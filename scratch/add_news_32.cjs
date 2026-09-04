const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// The new article object to set as featured
const newArticle = {
  id: 32,
  category: "Chăm sóc sức khỏe",
  date: "04 Tháng 9, 2026",
  title: "Con cái ở xa: 7 cách theo dõi sức khỏe bố mẹ cao tuổi ở Hà Nội từ xa",
  description: "Con cái ở tỉnh khác hoặc nước ngoài làm sao nắm được tình hình sức khỏe bố mẹ? 7 cách thiết lập theo dõi từ xa, và dịch vụ đồng hành khám bệnh có báo cáo cho gia đình. ANTCARE – Kiến chăm tổ.",
  image: "/images/tin-tuc/con-cai-o-xa.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "con-cai-o-xa-cham-soc-bo-me-tu-xa",
  oldSlugs: [
    "tin-tuc/con-cai-o-xa-cham-soc-bo-me-tu-xa"
  ],
  content: `<p class="ant-sapo"><strong>Con cái ở tỉnh khác hoặc nước ngoài có thể theo dõi sức khỏe bố mẹ từ xa bằng bảy việc: lập hồ sơ sức khỏe dùng chung, đo chỉ số sinh tồn định kỳ tại nhà, cài sẵn giấy tờ điện tử, lập danh sách liên lạc khẩn cấp, rà soát an toàn trong nhà, cố định lịch gọi điện, và sắp xếp người đi cùng bố mẹ mỗi buổi khám có báo cáo lại.</strong></p>

<div style="background-color: #f0fdf4; padding: 15px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <strong style="color: #166534;">💡 7 Việc Cần Thiết Lập Để Chăm Sóc Bố Mẹ Từ Xa:</strong> 
    <ol style="margin-top: 10px; margin-bottom: 0;">
      <li>Lập hồ sơ sức khỏe cơ bản dùng chung cho cả nhà.</li>
      <li>Đo chỉ số sinh tồn định kỳ tại nhà (huyết áp, SpO2).</li>
      <li>Cài sẵn ứng dụng VssID/VNeID & lưu ảnh giấy tờ vào máy bố mẹ.</li>
      <li>Lập danh sách liên lạc khẩn cấp dán chỗ dễ thấy.</li>
      <li>Rà soát an toàn chống té ngã trong không gian sống.</li>
      <li>Cố định lịch gọi điện thăm hỏi hằng ngày.</li>
      <li>Sắp xếp người đi cùng mỗi buổi khám có báo cáo đầy đủ cho gia đình.</li>
    </ol>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Câu "bố mẹ vẫn khỏe" thường không phải sự thật</h2>

<p>Đây là câu quen thuộc trong hầu hết cuộc gọi về nhà. Không phải bố mẹ nói dối — mà vì hai lý do khác.</p>

<p>Thứ nhất, <strong>bố mẹ không muốn con cái lo lắng</strong>. Con đang đi làm xa, đang bận, nói ra chỉ thêm gánh nặng. Thứ hai, nhiều triệu chứng ở người cao tuổi diễn ra âm thầm — huyết áp cao thường không có cảm giác gì, đường huyết tăng dần cũng vậy. Bố mẹ thật sự nghĩ mình vẫn ổn.</p>

<p>Kết quả là gia đình chỉ biết khi vấn đề đã lớn. Cách xử lý không phải hỏi nhiều hơn, mà là <strong>thay câu hỏi bằng số liệu</strong>.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Bảy việc nên thiết lập</h2>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">1. Lập hồ sơ sức khỏe cơ bản, dùng chung cho cả nhà</h3>
<p>Một file trên Google Drive hoặc nhóm chat gia đình, ghi rõ: bệnh nền, thuốc đang uống kèm ảnh vỏ thuốc, dị ứng thuốc nếu có, nhóm máu, bác sĩ đang theo dõi, bệnh viện thường khám, lịch tái khám.</p>
<p>Nghe đơn giản nhưng rất nhiều gia đình không có. Khi có sự cố lúc nửa đêm, đây là thông tin đầu tiên bác sĩ hỏi — và người ở xa không trả lời được.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">2. Đo chỉ số sinh tồn định kỳ tại nhà</h3>
<p>Hai thiết bị cơ bản: <strong>máy đo huyết áp điện tử bắp tay</strong> và <strong>máy đo SpO2 kẹp ngón tay</strong>. Đo vào giờ cố định, ghi vào sổ hoặc chụp ảnh gửi nhóm gia đình.</p>
<p>Điều quan trọng không phải con số của một lần đo, mà là <strong>xu hướng theo thời gian</strong>. Huyết áp 150 một lần có thể do bác vừa đi bộ về. Huyết áp 150 suốt hai tuần là chuyện khác hẳn — và chỉ nhìn ra được nếu có ghi chép.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">3. Cài sẵn ứng dụng và giấy tờ điện tử</h3>
<p>Cài VssID hoặc VNeID trên điện thoại bố mẹ, đăng nhập sẵn, và chụp màn hình thẻ bảo hiểm y tế lưu vào album ảnh. Khi ở quầy tiếp đón đông người, bố mẹ chỉ cần mở album là xong — không phải loay hoay đăng nhập.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">4. Lập danh sách liên lạc khẩn cấp</h3>
<p>Ghi rõ số của: hàng xóm thân, tổ trưởng dân phố, trạm y tế phường, bệnh viện gần nhất. In ra dán ở nơi dễ thấy — cạnh điện thoại bàn hoặc trên tủ lạnh — và lưu vào danh bạ điện thoại bố mẹ với tên dễ nhận.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">5. Rà soát an toàn trong nhà</h3>
<p>Té ngã là nguyên nhân hàng đầu khiến người cao tuổi phải nhập viện và mất khả năng tự chủ. Bốn điểm cần kiểm tra: sàn nhà tắm có thảm chống trượt chưa, có tay vịn cạnh bồn vệ sinh không, hành lang và cầu thang có đủ sáng ban đêm không, dây điện có vắt ngang lối đi không.</p>
<p>Nếu ở xa, nhờ người thân quay video từng phòng gửi cho mình xem.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">6. Cố định lịch gọi điện</h3>
<p>Gọi vào giờ cố định — ví dụ 8 giờ tối mỗi ngày, hoặc sáng thứ Bảy và thứ Tư. Lịch cố định có giá trị chẩn đoán: <strong>khi bố mẹ không nghe máy vào đúng giờ quen thuộc, đó là tín hiệu cần kiểm tra ngay</strong>, thay vì chờ đến lần gọi ngẫu nhiên tiếp theo.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">7. Sắp xếp người đi cùng mỗi buổi khám</h3>
<p>Đây là việc khó nhất với người ở xa, và cũng là việc quan trọng nhất. Bố mẹ đi khám một mình thường về nhà không nhớ bác sĩ dặn gì. Con cái gọi hỏi thì nhận được câu "bác sĩ bảo không sao".</p>
<p>Điều cần có: sau mỗi buổi khám, gia đình nhận đủ <strong>kết quả khám, ảnh đơn thuốc, và toàn bộ lời bác sĩ dặn</strong> — uống thuốc thế nào, kiêng gì, khi nào tái khám.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vấn đề mà công nghệ không giải quyết được</h2>

<p>Camera, đồng hồ thông minh, ứng dụng theo dõi — tất cả đều hữu ích, nhưng không thay được một điều: <strong>có người thật ở bên bố mẹ trong buổi khám</strong>.</p>

<p>Không camera nào đỡ được bác khi đi lại khó khăn giữa các phòng khám. Không ứng dụng nào ghi lại được lời bác sĩ dặn khi phòng khám đông và bác nghe không rõ. Và không thiết bị nào nhận ra được rằng hôm nay bác mệt hơn mọi khi.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ</h2>

    <p style="color: #4b5563; font-size: 16px;">Dịch vụ này được thiết kế cho đúng tình huống con cái không có mặt được. Năm phần:</p>

    <ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
      <li style="margin-bottom: 10px;"><strong>Đo 5 chỉ số sinh tồn tại nhà trước khi đi:</strong> Huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2, ghi lại để bác sĩ tham khảo.</li>
      <li style="margin-bottom: 10px;"><strong>Đưa đón tận nhà.</strong></li>
      <li style="margin-bottom: 10px;"><strong>Hỗ trợ toàn bộ thủ tục:</strong> Lấy số, nộp hồ sơ bảo hiểm, đưa bác giữa các phòng.</li>
      <li style="margin-bottom: 10px;"><strong>Ghi chép đầy đủ lời bác sĩ dặn:</strong> Kèm ảnh đơn thuốc, gửi cho gia đình sau buổi.</li>
      <li style="margin-bottom: 10px;"><strong>Định vị theo dõi suốt buổi:</strong> Bạn ở nước ngoài vẫn biết bố mẹ đang ở đâu.</li>
    </ol>

    <p>Mỗi Kiến của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>

    <p>Triết lý của chúng tôi là <em>"Kiến chăm tổ"</em>: không con kiến nào xây tổ một mình, và không gia đình nào nên phải chăm sóc người thân một mình — kể cả khi bạn ở cách nhà mười nghìn cây số.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Con cái ở nước ngoài làm sao theo dõi sức khỏe bố mẹ ở Việt Nam?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Ba việc cốt lõi: <strong>lập hồ sơ sức khỏe dùng chung cho cả nhà; đo và ghi chỉ số sinh tồn định kỳ tại nhà; và sắp xếp người đi cùng mỗi buổi khám có báo cáo lại.</strong> Dịch vụ đồng hành khám bệnh có định vị và báo cáo giúp nắm tình hình mà không cần có mặt.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Nên mua máy gì để theo dõi sức khỏe bố mẹ tại nhà?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Hai thiết bị cơ bản: <strong>máy đo huyết áp điện tử bắp tay</strong> và <strong>máy đo SpO2 kẹp ngón tay</strong>. Quan trọng hơn thiết bị là thói quen đo vào giờ cố định và ghi lại.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bố mẹ giấu bệnh, không nói thật tình hình thì làm sao?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Rất phổ biến, thường vì bố mẹ không muốn con lo. Cách hiệu quả là có <strong>bên thứ ba quan sát khách quan</strong> — người thân ở gần, hàng xóm thân, hoặc nhân viên chăm sóc có quy trình ghi chép. Số liệu đo được nói thay lời bố mẹ.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Con cái ở xa có theo dõi được buổi khám của bố mẹ không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;"><strong>Có.</strong> Với ANTCARE, gia đình theo dõi được vị trí suốt buổi và nhận báo cáo đầy đủ sau khi kết thúc: kết quả khám, đơn thuốc và toàn bộ lời dặn của bác sĩ.</p>

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
console.log('Successfully updated news.json with new featured article ID 32!');
