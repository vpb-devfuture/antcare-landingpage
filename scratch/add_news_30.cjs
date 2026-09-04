const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// The new article object to set as featured
const newArticle = {
  id: 30,
  category: "Tin tức",
  date: "04 Tháng 9, 2026",
  title: "Khám sức khỏe miễn phí cho người cao tuổi từ năm 2026: quyền lợi, thủ tục và cách chuẩn bị cho bố mẹ",
  description: "Từ năm 2026 người cao tuổi được khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí ít nhất mỗi năm một lần. Hướng dẫn đăng ký, giấy tờ cần mang và cách chuẩn bị cho bố mẹ. ANTCARE – Kiến chăm tổ biên soạn.",
  image: "/images/tin-tuc/kham-suc-khoe-mien-phi-2026.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "kham-suc-khoe-mien-phi-nguoi-cao-tuoi-2026",
  oldSlugs: [
    "tin-tuc/kham-suc-khoe-mien-phi-nguoi-cao-tuoi-2026"
  ],
  content: `<p class="ant-sapo"><strong>Từ năm 2026, người cao tuổi được khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí ít nhất mỗi năm một lần và được lập hồ sơ theo dõi quản lý sức khỏe. Tại Hà Nội, chính sách áp dụng cho người thường trú hoặc tạm trú từ 12 tháng trở lên. Bài viết này hướng dẫn gia đình cách đăng ký, giấy tờ cần mang và những việc nên chuẩn bị trước khi đưa bố mẹ đi khám.</strong></p>

<div style="background-color: #f0fdf4; padding: 15px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <strong style="color: #166534;">💡 4 Điểm Cần Nhớ Về Khám Sức Khỏe Miễn Phí Từ 2026:</strong> 
    <ol style="margin-top: 10px; margin-bottom: 0;">
      <li><strong>Quyền lợi:</strong> Khám sức khỏe định kỳ / sàng lọc miễn phí ít nhất 1 lần/năm + lập hồ sơ quản lý sức khỏe.</li>
      <li><strong>Đối tượng tại Hà Nội:</strong> Người dân thường trú hoặc tạm trú từ 12 tháng trở lên.</li>
      <li><strong>Đầu mối đăng ký:</strong> Trạm y tế phường nơi bố mẹ đang cư trú.</li>
      <li><strong>Giấy tờ cần mang:</strong> CCCD, BHYT (giấy hoặc VssID/VNeID), sổ khám cũ, ảnh vỏ thuốc đang dùng.</li>
    </ol>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Chính sách khám sức khỏe miễn phí cho người cao tuổi 2026 quy định gì?</h2>

<p>Quyết định số 1116/QĐ-TTg sửa đổi, bổ sung Chương trình chăm sóc sức khỏe người cao tuổi đến năm 2030 đã mở rộng đáng kể quyền lợi của người cao tuổi. Nội dung đáng chú ý nhất: <strong>từ năm 2026, người cao tuổi được khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí ít nhất mỗi năm một lần, đồng thời được lập hồ sơ theo dõi quản lý sức khỏe</strong>.</p>

<p>Chương trình cũng đặt mục tiêu đến năm 2030: ít nhất 90% người cao tuổi được phát hiện, điều trị và quản lý các bệnh không lây nhiễm như ung thư, tim mạch, tăng huyết áp, đái tháo đường; 100% tỉnh, thành phố có bệnh viện lão khoa hoặc bệnh viện đa khoa có chuyên khoa lão khoa.</p>

<h3 style="color: #1e3a8a; font-size: 19px; font-weight: 600; margin-top: 24px;">Tại Hà Nội, ai được hưởng?</h3>

<p>HĐND TP Hà Nội đã thông qua Nghị quyết quy định chính sách hỗ trợ an sinh xã hội, theo đó từ năm 2026 <strong>người dân thường trú hoặc tạm trú từ 12 tháng trở lên tại Hà Nội</strong> được hỗ trợ khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí mỗi năm một lần.</p>

<p>Chương trình đang được triển khai với quy mô lớn: tính đến hết ngày 26/8/2026, Hà Nội đã khám sức khỏe cho gần 1,7 triệu người, với 565.242 hồ sơ sức khỏe được cập nhật thành công lên Cổng Bộ Y tế — đứng thứ nhất toàn quốc.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Đăng ký khám sức khỏe miễn phí cho bố mẹ ở đâu?</h2>

<p><strong>Đầu mối là trạm y tế phường nơi bố mẹ cư trú.</strong> Trạm y tế phường tổ chức và thông báo lịch khám cho người dân trên địa bàn.</p>

<p>Ba kênh gia đình có thể hỏi thông tin:</p>
<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Trạm y tế phường:</strong> Nguồn chính xác nhất về lịch khám và đối tượng áp dụng.</li>
  <li style="margin-bottom: 10px;"><strong>Tổ dân phố:</strong> Thường nhận thông báo và phổ biến tới các hộ gia đình.</li>
  <li style="margin-bottom: 0;"><strong>Chi hội người cao tuổi tại địa phương:</strong> Nơi cập nhật các hoạt động sinh hoạt và chăm sóc sức khỏe cộng đồng.</li>
</ul>

<p>Thực tế nhiều gia đình bỏ lỡ đợt khám không phải vì không đủ điều kiện, mà vì <strong>không biết có lịch</strong>. Thông báo thường qua loa phường hoặc nhóm Zalo tổ dân phố — con cái đi làm cả ngày rất dễ bỏ sót. Nếu bố mẹ ở một mình, nên chủ động gọi trạm y tế phường hỏi lịch mỗi quý một lần.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Đi khám cần mang những giấy tờ gì?</h2>

<div style="overflow-x:auto; margin-bottom:25px;">
  <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb; border-radius:8px;">
    <thead>
      <tr style="background-color:#1e3a8a; color:white;">
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Giấy tờ</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Ghi chú quan trọng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Căn cước công dân</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bắt buộc, để đối chiếu dữ liệu dân cư tích hợp chíp.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Thẻ bảo hiểm y tế</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Dùng bản giấy hoặc ứng dụng VssID / VNeID trên điện thoại.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Sổ khám bệnh cũ</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Giúp bác sĩ nắm diễn biến tiền sử bệnh — hay bị bỏ quên nhất.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Ảnh vỏ thuốc đang dùng</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Chụp bằng điện thoại hoặc mang theo khay thuốc là nhanh nhất.</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Kết quả xét nghiệm gần nhất</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Tránh phải làm lại xét nghiệm máu, siêu âm không cần thiết.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Nên chuẩn bị gì trước buổi khám?</h2>

<p><strong>Hỏi trước xem có cần nhịn ăn không.</strong> Nhiều đợt khám sàng lọc có xét nghiệm máu, yêu cầu nhịn ăn từ tối hôm trước. Người cao tuổi nhịn lâu dễ tụt đường huyết — hãy mang theo bánh, sữa cho bác ăn ngay sau khi lấy máu xong.</p>

<p><strong>Đo và ghi lại chỉ số sức khỏe tại nhà.</strong> Huyết áp, nhịp tim, nhiệt độ, nhịp thở và SpO2 đo trong vài ngày trước khi đi. Bác sĩ luôn hỏi "ở nhà thế nào" — có số liệu cụ thể giúp chẩn đoán chính xác hơn nhiều so với câu trả lời "bình thường ạ".</p>

<p><strong>Ghi sẵn danh sách điều muốn hỏi.</strong> Trong phòng khám đông người, người cao tuổi thường quên mất điều định hỏi. Viết ra giấy 3 câu quan trọng nhất trước khi đi.</p>

<p><strong>Đi sớm và chuẩn bị chờ.</strong> Các đợt khám miễn phí ở phường thường rất đông, nhiều nơi bà con có mặt từ sáng sớm. Mang nước, đồ ăn nhẹ và áo khoác mỏng.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vấn đề thật của nhiều gia đình: không ai đưa bố mẹ đi</h2>

<p>Chính sách miễn phí giải quyết được bài toán chi phí, nhưng không giải quyết được bài toán <strong>thời gian và người đi cùng</strong>.</p>

<p>Một buổi khám sàng lọc có thể mất cả buổi sáng: chờ lấy số, chờ khám, chờ xét nghiệm, chờ kết quả. Con cái trong độ tuổi 30–55 đang đi làm rất khó xin nghỉ, đặc biệt khi bố mẹ cần tái khám định kỳ hằng tháng chứ không chỉ một lần trong năm.</p>

<p>Nhiều bác cao tuổi ngại phiền con cháu nên tự đi một mình — rồi về nhà không nhớ bác sĩ dặn gì, thuốc uống ra sao, khi nào tái khám.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ</h2>

    <p style="color: #4b5563; font-size: 16px;"><strong>Đồng hành khám bệnh</strong> là một trong ba dịch vụ chính của ANTCARE, dành cho gia đình không thể thu xếp thời gian đưa bố mẹ đi khám. Dịch vụ gồm năm phần:</p>

    <ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
      <li style="margin-bottom: 10px;"><strong>Kiểm tra sức khỏe trước khi đi:</strong> Đo đủ 5 chỉ số sinh tồn tại nhà (huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2), ghi lại để bác sĩ tham khảo.</li>
      <li style="margin-bottom: 10px;"><strong>Đưa đón tận nhà:</strong> Không để bác tự di chuyển, không lo chờ xe ở cổng bệnh viện.</li>
      <li style="margin-bottom: 10px;"><strong>Hỗ trợ toàn bộ thủ tục:</strong> Lấy số, nộp hồ sơ bảo hiểm, đưa đi giữa các phòng khám và khu xét nghiệm.</li>
      <li style="margin-bottom: 10px;"><strong>Ghi chép đầy đủ lời bác sĩ dặn:</strong> Thuốc, kiêng khem, lịch tái khám, gửi lại báo cáo cho gia đình.</li>
      <li style="margin-bottom: 10px;"><strong>Định vị theo dõi suốt buổi:</strong> Gia đình biết bác đang ở đâu trong toàn bộ thời gian.</li>
    </ol>

    <p>Mỗi Kiến của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Người cao tuổi được khám sức khỏe miễn phí mấy lần một năm?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;"><strong>Ít nhất mỗi năm một lần.</strong> Theo Quyết định số 1116/QĐ-TTg, từ năm 2026 người cao tuổi được khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí ít nhất mỗi năm một lần và được lập hồ sơ theo dõi quản lý sức khỏe.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Ai được khám sức khỏe miễn phí tại Hà Nội?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Người dân <strong>thường trú hoặc tạm trú từ 12 tháng trở lên</strong> tại Hà Nội. Gia đình nên liên hệ trạm y tế phường nơi cư trú để biết lịch khám cụ thể của địa bàn mình.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Đăng ký khám sức khỏe miễn phí cho bố mẹ ở đâu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Tại <strong>trạm y tế phường</strong> nơi bố mẹ cư trú — đây là đầu mối tổ chức và thông báo lịch. Ngoài ra có thể hỏi tổ dân phố hoặc chi hội người cao tuổi địa phương.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Đi khám sức khỏe miễn phí cần mang giấy tờ gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Căn cước công dân, thẻ bảo hiểm y tế (bản giấy hoặc VssID/VNeID), sổ khám bệnh cũ, ảnh vỏ thuốc đang dùng và kết quả xét nghiệm gần nhất nếu có.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bận đi làm, không đưa bố mẹ đi khám được thì làm sao?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Có thể dùng dịch vụ đồng hành khám bệnh. ANTCARE – Kiến chăm tổ nhận đưa đón tận nhà, hỗ trợ thủ tục, ghi lại đầy đủ lời bác sĩ dặn và gửi báo cáo cho gia đình. Gói trải nghiệm từ 299.000đ/buổi, hotline 0969 032 360.</p>

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
console.log('Successfully updated news.json with new featured article ID 30!');
