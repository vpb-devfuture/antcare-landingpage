const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// The new article object to set as featured
const newArticle = {
  id: 29,
  category: "Chăm sóc sức khỏe",
  date: "04 Tháng 9, 2026",
  title: "Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội: quy trình, chi phí và 6 điều cần hỏi trước khi thuê",
  description: "Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội gồm những gì, chi phí bao nhiêu, và 6 điều cần hỏi trước khi thuê. Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ từ 299.000đ/buổi.",
  image: "/images/tin-tuc/dong-hanh-kham-benh.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "dich-vu-dua-nguoi-cao-tuoi-di-kham-benh-ha-noi",
  oldSlugs: [
    "tin-tuc/dich-vu-dua-nguoi-cao-tuoi-di-kham-benh-ha-noi"
  ],
  content: `<p class="ant-sapo"><strong>Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội thường gồm đưa đón tận nhà, hỗ trợ thủ tục và ghi lại lời bác sĩ dặn, với chi phí từ khoảng 299.000đ/buổi tùy thời lượng và quãng đường. Trước khi thuê, gia đình nên hỏi rõ sáu điều: chứng chỉ của người đi cùng, cách xử lý khi có sự cố, quy trình báo cáo, bảng giá chi tiết, phương án khi người đó nghỉ đột xuất, và gia đình có theo dõi được buổi khám hay không.</strong></p>

<div style="background-color: #f0fdf4; padding: 15px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <strong style="color: #166534;">💡 6 Điều Cần Hỏi Trước Khi Thuê Người Đưa Bố Mẹ Đi Khám:</strong> 
    <ol style="margin-top: 10px; margin-bottom: 0;">
      <li>Người trực tiếp đi cùng có chứng chỉ gì? (Sơ cấp cứu & Chăm sóc người cao tuổi)</li>
      <li>Nếu xảy ra sự cố trên đường, ai chịu trách nhiệm?</li>
      <li>Gia đình được báo cáo như thế nào sau buổi khám?</li>
      <li>Bảng giá gồm những gì và không gồm những gì?</li>
      <li>Nếu người đi cùng nghỉ đột xuất thì sao?</li>
      <li>Gia đình có theo dõi được trong lúc bố mẹ đi khám không?</li>
    </ol>
</div>

<p>Một buổi khám bệnh của người cao tuổi ở Hà Nội hiếm khi gói gọn trong hai tiếng. Đi từ sáng sớm, chờ lấy số, chờ khám, đóng phí, chờ xét nghiệm, chờ kết quả. Nếu có chỉ định chiếu chụp thì thêm một vòng nữa.</p>

<p>Với gia đình có bố mẹ mắc bệnh mạn tính — tăng huyết áp, đái tháo đường, tim mạch — lịch tái khám là hằng tháng. Con cái trong độ tuổi 30–55 vừa đi làm vừa nuôi con nhỏ, rất khó xin nghỉ đều đặn như vậy.</p>

<p>Kết quả thường thấy: bác tự đi một mình vì ngại phiền con cháu, rồi về nhà không nhớ bác sĩ dặn gì, thuốc uống thế nào, khi nào tái khám. Hoặc bác bỏ luôn buổi tái khám.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vì sao ngày càng nhiều gia đình Hà Nội cần dịch vụ này?</h2>

<p>Một buổi khám bệnh của người cao tuổi ở Hà Nội hiếm khi gói gọn trong hai tiếng. Đi từ sáng sớm, chờ lấy số, chờ khám, đóng phí, chờ xét nghiệm, chờ kết quả. Nếu có chỉ định chiếu chụp thì thêm một vòng nữa.</p>

<p>Với gia đình có bố mẹ mắc bệnh mạn tính — tăng huyết áp, đái tháo đường, tim mạch — lịch tái khám là hằng tháng. Con cái trong độ tuổi 30–55 vừa đi làm vừa nuôi con nhỏ, rất khó xin nghỉ đều đặn như vậy.</p>

<p>Kết quả thường thấy: bác tự đi một mình vì ngại phiền con cháu, rồi về nhà không nhớ bác sĩ dặn gì, thuốc uống thế nào, khi nào tái khám. Hoặc bác bỏ luôn buổi tái khám.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Khi nào nên thuê người đưa bố mẹ đi khám bệnh?</h2>

<p>Không phải gia đình nào cũng cần. Bốn tình huống dịch vụ này thật sự giải quyết được vấn đề:</p>

<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Bố mẹ tái khám định kỳ:</strong> Bệnh mạn tính cần tái khám hằng tháng, con cái không xin nghỉ đều được.</li>
  <li style="margin-bottom: 10px;"><strong>Con cái ở xa:</strong> Ở tỉnh khác hoặc nước ngoài, không thể về mỗi lần bố mẹ đi khám.</li>
  <li style="margin-bottom: 10px;"><strong>Bố mẹ đi lại khó khăn:</strong> Cần người có kỹ năng đỡ dìu đúng cách — đỡ sai tư thế có thể gây tổn thương cột sống hoặc khớp háng.</li>
  <li style="margin-bottom: 0;"><strong>Buổi khám phức tạp:</strong> Nhiều chuyên khoa trong một buổi, hoặc nhiều xét nghiệm — cần người thạo quy trình bệnh viện.</li>
</ul>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Sáu điều cần hỏi trước khi thuê</h2>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">1. Người trực tiếp đi cùng có chứng chỉ gì?</h3>
<p>Đây là câu hỏi quan trọng nhất và dễ bị bỏ qua nhất. Đưa người cao tuổi đi khám không giống chạy xe ôm. Người đi cùng cần biết đỡ dìu đúng tư thế, nhận ra dấu hiệu bất thường và xử trí trong những phút đầu.</p>
<p>Hai chứng chỉ tối thiểu: <strong>Sơ cấp cứu</strong> và <strong>Chăm sóc người cao tuổi</strong>. Hãy yêu cầu được xem bản thật, không chỉ nghe nói "có đào tạo".</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">2. Nếu xảy ra sự cố trên đường, ai chịu trách nhiệm?</h3>
<p>Với người nhận việc tự do, thực tế là không ai chịu trách nhiệm ngoài chính người đó. Hãy hỏi rõ đơn vị có pháp nhân không, có hợp đồng dịch vụ không, và quy trình xử lý sự cố cụ thể ra sao.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">3. Gia đình được báo cáo như thế nào sau buổi khám?</h3>
<p>Đây là điểm phân biệt rõ nhất giữa dịch vụ có quy trình và dịch vụ tự phát. Sau buổi khám, gia đình nên nhận được: kết quả khám, đơn thuốc, và <strong>toàn bộ lời bác sĩ dặn</strong> — uống thuốc thế nào, kiêng gì, khi nào tái khám.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">4. Bảng giá gồm những gì và không gồm những gì?</h3>
<p>Yêu cầu bảng giá bằng văn bản, ghi rõ: giá mỗi buổi, thời lượng một buổi, chi phí đi lại tính riêng hay đã bao gồm, phụ phí ngoài giờ và cuối tuần, và cách tính khi buổi khám kéo dài hơn dự kiến. Dịch vụ báo giá mập mờ thường phát sinh về sau.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">5. Nếu người đi cùng nghỉ đột xuất thì sao?</h3>
<p>Điểm yếu lớn nhất của việc thuê cá nhân tự do. Người đó ốm hoặc có việc — gia đình rơi vào thế bị động đúng ngày đã đặt lịch khám. Hãy hỏi đơn vị có người thay thế không và bàn giao thông tin thế nào.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">6. Gia đình có theo dõi được trong lúc bố mẹ đi khám không?</h3>
<p>Với gia đình có con ở xa, đây là yếu tố quyết định. Hãy hỏi rõ có định vị theo dõi vị trí trong buổi khám không, và gia đình được cập nhật vào những thời điểm nào.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Chi phí dịch vụ đưa người cao tuổi đi khám bệnh là bao nhiêu?</h2>

<p>Mức giá phụ thuộc ba yếu tố: thời lượng buổi khám, quãng đường di chuyển, và mức độ hỗ trợ cần thiết (bác tự đi được hay cần xe lăn, có cần chờ xét nghiệm lâu không).</p>

<p>Tại ANTCARE – Kiến chăm tổ, <strong>gói trải nghiệm dịch vụ Đồng hành khám bệnh bắt đầu từ 299.000đ/buổi</strong>. Các khoản có thể phát sinh được nêu rõ từ đầu, không tính thêm sau khi kết thúc.</p>

<p>Một lưu ý về giá: mức thấp hơn hẳn mặt bằng thường đồng nghĩa với người chưa qua đào tạo. Với việc giao bố mẹ mình cho người lạ trong nửa ngày, chênh lệch vài chục nghìn không đáng để đánh đổi.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ gồm gì?</h2>

    <p style="color: #4b5563; font-size: 16px;">Dịch vụ được thiết kế theo đúng trình tự một buổi khám thực tế, gồm năm phần:</p>

    <ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
      <li style="margin-bottom: 10px;"><strong>Kiểm tra sức khỏe trước khi đi:</strong> Kiến đến nhà đo đủ 5 chỉ số sinh tồn — huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2 — và ghi lại. Hai lý do: nếu chỉ số bất thường ngay tại nhà thì cần cân nhắc gọi cấp cứu thay vì đi khám thường; và bác sĩ luôn hỏi tình trạng ở nhà, có số liệu cụ thể giúp chẩn đoán chính xác hơn.</li>
      <li style="margin-bottom: 10px;"><strong>Đưa đón tận nhà:</strong> Bác không phải tự di chuyển, không phải chờ xe ở cổng bệnh viện.</li>
      <li style="margin-bottom: 10px;"><strong>Hỗ trợ toàn bộ thủ tục:</strong> Lấy số, nộp hồ sơ bảo hiểm, đóng phí, đưa bác giữa các phòng khám và khu xét nghiệm. Bác ngồi nghỉ, Kiến đi xếp hàng.</li>
      <li style="margin-bottom: 10px;"><strong>Ghi chép đầy đủ lời bác sĩ dặn:</strong> Thuốc uống thế nào, kiêng gì, lịch tái khám — ghi lại và gửi cho gia đình, kèm ảnh đơn thuốc và phiếu chỉ định.</li>
      <li style="margin-bottom: 10px;"><strong>Định vị theo dõi suốt buổi:</strong> Gia đình biết bác đang ở đâu trong toàn bộ thời gian, kể cả khi đang ở nước ngoài.</li>
    </ol>

    <p>Mỗi Kiến của ANTCARE bắt buộc hoàn thành chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp trước khi được nhận ca.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí theo tình trạng cụ thể của bố mẹ bạn.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Dịch vụ đưa người cao tuổi đi khám bệnh ở Hà Nội giá bao nhiêu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Tùy thời lượng và quãng đường. Gói trải nghiệm của <strong>ANTCARE – Kiến chăm tổ từ 299.000đ/buổi</strong>, gồm đưa đón, hỗ trợ thủ tục và báo cáo gửi gia đình. Nên yêu cầu bảng giá bằng văn bản ghi rõ khoản nào có thể phát sinh.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Dịch vụ đồng hành khám bệnh gồm những gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Năm phần: <strong>kiểm tra 5 chỉ số sinh tồn tại nhà; đưa đón tận nhà; hỗ trợ thủ tục; ghi chép lời bác sĩ dặn; định vị theo dõi suốt buổi.</strong></p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Người đưa người cao tuổi đi khám cần có chứng chỉ gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Tối thiểu <strong>chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi</strong>. Gia đình nên yêu cầu được xem bản thật, không chỉ nghe cam kết bằng lời.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Khi nào nên thuê người đưa bố mẹ đi khám bệnh?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Bốn tình huống: bố mẹ tái khám định kỳ hằng tháng; con cái ở tỉnh khác hoặc nước ngoài; bố mẹ đi lại khó khăn; hoặc buổi khám có nhiều chuyên khoa và xét nghiệm.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Con cái ở nước ngoài có theo dõi được buổi khám không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;"><strong>Có.</strong> Gia đình theo dõi được vị trí trong suốt buổi và nhận báo cáo đầy đủ sau khi kết thúc, gồm kết quả khám, đơn thuốc và lời dặn của bác sĩ.</p>

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

// Move previous featured to list if exists
const oldFeatured = newsData.featured;

newsData.featured = newArticle;

// Remove any existing article with same slug from list to avoid duplication
newsData.list = newsData.list.filter(item => item.slug !== newArticle.slug && item.id !== newArticle.id);

if (oldFeatured && oldFeatured.slug !== newArticle.slug) {
  newsData.list.unshift(oldFeatured);
}

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with new featured article ID 29!');
