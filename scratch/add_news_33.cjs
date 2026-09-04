const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// The new article object to set as featured
const newArticle = {
  id: 33,
  category: "Tin tức",
  date: "04 Tháng 9, 2026",
  title: "Bệnh viện nào tốt cho người cao tuổi ở Hà Nội? Hướng dẫn chọn theo từng tình trạng",
  description: "Bố mẹ bị bệnh gì thì nên khám ở bệnh viện nào tại Hà Nội? So sánh Bệnh viện Lão khoa Trung ương, Bạch Mai, Đại học Y, Việt Đức và các chuyên khoa, kèm lưu ý thực tế khi đưa người cao tuổi đi khám.",
  image: "/images/tin-tuc/benh-vien-nguoi-cao-tuoi.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "ANTCARE – Kiến chăm tổ (antcare.vn)"
  },
  slug: "benh-vien-nao-tot-cho-nguoi-cao-tuoi-ha-noi",
  oldSlugs: [
    "tin-tuc/benh-vien-nao-tot-cho-nguoi-cao-tuoi-ha-noi"
  ],
  content: `<p class="ant-sapo"><strong>Không có một bệnh viện "tốt nhất" cho mọi trường hợp. Với người cao tuổi mắc nhiều bệnh cùng lúc, Bệnh viện Lão khoa Trung ương thường là lựa chọn phù hợp nhất vì bác sĩ lão khoa quen xử lý đa bệnh lý. Với bệnh thông thường hoặc tái khám ổn định, bệnh viện tuyến thành phố gần nhà lại tốt hơn vì chờ ít và bố mẹ đỡ mệt.</strong></p>

<div style="background-color: #f0fdf4; padding: 15px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <strong style="color: #166534;">💡 3 Tiêu Chí Lựa Chọn Bệnh Viện Cho Bố Mẹ Cao Tuổi:</strong> 
    <ol style="margin-top: 10px; margin-bottom: 0;">
      <li><strong>Chuyên môn phù hợp:</strong> Mắc đa bệnh lý chọn Lão khoa; chấn thương/gãy xương chọn Việt Đức; tim mạch chọn Tim Hà Nội/Bạch Mai.</li>
      <li><strong>Thời gian chờ đợi:</strong> Tuyến trung ương thường đông, nên ưu tiên tuyến thành phố gần nhà cho các đợt tái khám ổn định.</li>
      <li><strong>Điều kiện tiếp cận:</strong> Có thang máy, hỗ trợ mượn xe lăn, chỗ đỗ xe thuận tiện cho người đi lại khó khăn.</li>
    </ol>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Ba yếu tố cần cân nhắc, không chỉ danh tiếng</h2>

<p>Nhiều gia đình mặc định đưa bố mẹ lên bệnh viện tuyến trung ương lớn nhất. Điều đó không phải lúc nào cũng đúng, vì với người cao tuổi có ba yếu tố quan trọng ngang nhau:</p>

<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;"><strong>Chuyên môn phù hợp với tình trạng:</strong> Bệnh viện mạnh về ngoại khoa chưa chắc phù hợp với bác cần theo dõi nội tiết dài hạn.</li>
  <li style="margin-bottom: 10px;"><strong>Thời gian chờ:</strong> Bác ngồi chờ 4 tiếng ở bệnh viện đông sẽ mệt hơn nhiều so với chờ 1 tiếng ở tuyến thành phố — và sự mệt mỏi đó ảnh hưởng trực tiếp đến sức khỏe.</li>
  <li style="margin-bottom: 0;"><strong>Quãng đường di chuyển và điều kiện tiếp cận:</strong> Có thang máy không, mượn được xe lăn không, chỗ đỗ xe cách quầy tiếp đón bao xa.</li>
</ul>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Bệnh viện chuyên khoa lão khoa: Bệnh viện Lão khoa Trung ương</h2>

<p><strong>Địa chỉ:</strong> Số 1A Phương Mai, Hà Nội.</p>

<p>Đây là bệnh viện chuyên khoa đầu ngành về lão khoa tại Việt Nam, và là lựa chọn số một khi bố mẹ <strong>mắc nhiều bệnh cùng lúc</strong>. Lý do: bác sĩ lão khoa được đào tạo riêng để xử lý đa bệnh lý và tương tác thuốc ở người cao tuổi — vấn đề mà bác sĩ chuyên khoa đơn lẻ ít khi nhìn tổng thể.</p>

<p>Thế mạnh: sa sút trí tuệ, Parkinson, loãng xương, đột quỵ ở người già, nội tiết – cơ xương khớp, tim mạch can thiệp.</p>

<p><em>Lưu ý thực tế:</em> khu vực này tập trung nhiều bệnh viện nên ô tô rất khó đỗ. Nên đi taxi hoặc xe máy. Nếu đưa bác đi cấp cứu hoặc nghi đột quỵ, khu Cấp cứu & Đột quỵ ở tầng 1.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Chọn bệnh viện theo tình trạng của bố mẹ</h2>

<div style="overflow-x:auto; margin-bottom:25px;">
  <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb; border-radius:8px;">
    <thead>
      <tr style="background-color:#1e3a8a; color:white;">
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Tình trạng sức khỏe</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Chuyên khoa</th>
        <th style="padding:11px 12px; border:1px solid #ddd; text-align:left;">Gợi ý nơi khám tốt nhất tại Hà Nội</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Mắc nhiều bệnh cùng lúc, uống nhiều loại thuốc</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Lão khoa</td>
        <td style="padding:11px 12px; border:1px solid #ddd; color:#1e3a8a; font-weight:bold;">Bệnh viện Lão khoa Trung ương</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Hay quên, lẫn, lạc đường quen</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Lão khoa / Thần kinh</td>
        <td style="padding:11px 12px; border:1px solid #ddd; color:#1e3a8a; font-weight:bold;">Bệnh viện Lão khoa Trung ương</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Tay run, đi chậm, bước ngắn</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Thần kinh</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Lão khoa Trung ương, Bạch Mai</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Huyết áp cao, đau ngực khi gắng sức</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Tim mạch</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bạch Mai, Bệnh viện E, Bệnh viện Tim Hà Nội</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Đái tháo đường, bệnh tuyến giáp</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Nội tiết</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Nội tiết Trung ương, Bạch Mai</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Nhìn mờ dần như có màn sương</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Nhãn khoa</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Mắt Trung ương</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Nghe kém, ù tai, chóng mặt</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Tai mũi họng</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Tai Mũi Họng Trung ương</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Ho kéo dài, khó thở, từng hút thuốc</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Hô hấp</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Phổi Trung ương, Bạch Mai</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Ngã gãy xương, cần thay khớp</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Chấn thương chỉnh hình</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Hữu nghị Việt Đức</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Phục hồi sau tai biến, liệt nửa người</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Phục hồi chức năng</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện Châm cứu Trung ương, Y học cổ truyền Trung ương</td>
      </tr>
      <tr>
        <td style="padding:11px 12px; border:1px solid #ddd; font-weight:bold;">Bệnh thông thường, tái khám ổn định</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Nội tổng hợp</td>
        <td style="padding:11px 12px; border:1px solid #ddd;">Bệnh viện tuyến thành phố gần nhà</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Bảng này chỉ để định hướng nơi khám, không phải để chẩn đoán bệnh.</strong> Việc xác định bệnh là của bác sĩ.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Khi nào KHÔNG nên đưa đi khám thường mà phải gọi 115</h2>

<p>Có những dấu hiệu mà việc chờ đến giờ khám có thể trả giá rất đắt:</p>

<ul style="background-color: #fef2f2; border: 1px solid #fee2e2; border-left: 4px solid #ef4444; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px; color: #991b1b;"><strong>Méo miệng, nói ngọng đột ngột, yếu một bên tay chân</strong> — nghi đột quỵ. Gọi 115 ngay và ghi lại chính xác giờ bắt đầu triệu chứng.</li>
  <li style="margin-bottom: 10px; color: #991b1b;"><strong>Đau ngực dữ dội lan lên vai trái hoặc hàm, vã mồ hôi lạnh</strong> — nghi nhồi máu cơ tim.</li>
  <li style="margin-bottom: 10px; color: #991b1b;"><strong>Ngã và không đứng dậy được, đau háng dữ dội</strong> — nghi gãy cổ xương đùi. Tuyệt đối không tự đỡ bác dậy.</li>
  <li style="margin-bottom: 10px; color: #991b1b;"><strong>Ngã có đập đầu</strong>, dù bác nói vẫn bình thường — đặc biệt nguy hiểm nếu bác đang dùng thuốc chống đông máu.</li>
  <li style="margin-bottom: 0; color: #991b1b;"><strong>Khó thở dữ dội, môi hoặc đầu ngón tay tím.</strong></li>
</ul>

<p>Nguyên tắc: <strong>nghi ngờ thì gọi 115</strong>. Gọi nhầm không sao — không gọi mới là sai lầm không sửa được.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Bốn điều nên hỏi khi gọi bệnh viện trước ngày đi</h2>

<ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
  <li style="margin-bottom: 10px;">Bệnh viện có mấy cơ sở, khám chuyên khoa này ở cơ sở nào?</li>
  <li style="margin-bottom: 10px;">Có đặt lịch trước được không, đặt qua kênh nào?</li>
  <li style="margin-bottom: 10px;">Xét nghiệm dự kiến có cần nhịn ăn không?</li>
  <li style="margin-bottom: 10px;">Có mượn được xe lăn không, mượn ở đâu?</li>
</ol>

<p>Câu hỏi số 1 tưởng thừa nhưng rất quan trọng — nhiều bệnh viện lớn ở Hà Nội có 2–3 cơ sở cách nhau hàng chục cây số. Đi nhầm là mất cả buổi và bác mệt vô ích.</p>

<div style="height: 1px; background: #ece7f6; margin: 34px 0;"></div>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 24px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 14px;">Không thu xếp được thời gian đưa bố mẹ đi khám?</h2>

    <p style="color: #4b5563; font-size: 16px;">Chọn đúng bệnh viện mới là nửa việc. Nửa còn lại là có người đi cùng bác suốt buổi — biết đường trong bệnh viện, biết đỡ dìu đúng cách, và ghi lại đầy đủ lời bác sĩ dặn.</p>

    <p>Dịch vụ <strong>Đồng hành khám bệnh</strong> của ANTCARE – Kiến chăm tổ gồm năm phần: đo 5 chỉ số sinh tồn tại nhà trước khi đi; đưa đón tận nhà; hỗ trợ toàn bộ thủ tục; ghi chép đầy đủ lời bác sĩ dặn gửi cho gia đình; và định vị theo dõi suốt buổi.</p>

    <p>Mỗi Kiến của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>

    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 18px;">
      <strong style="color: #FF8A00; font-size: 16.5px;">Gói trải nghiệm từ 299.000đ/buổi. Tư vấn miễn phí — kể cả tư vấn nên đưa bác đi khám ở đâu.</strong><br>
      <span>Hotline: <strong>0969 032 360</strong> · Website: <a href="https://antcare.vn" style="color: #7C4DCC; font-weight: 700;">antcare.vn</a></span>
    </div>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bệnh viện nào chuyên khám cho người cao tuổi ở Hà Nội?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;"><strong>Bệnh viện Lão khoa Trung ương</strong> (số 1A Phương Mai) là bệnh viện chuyên khoa đầu ngành về lão khoa. Đây là lựa chọn phù hợp nhất khi bố mẹ mắc nhiều bệnh cùng lúc, vì bác sĩ lão khoa quen xử lý đa bệnh lý và tương tác thuốc.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Bố mẹ hay quên, lẫn thì nên khám ở đâu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Khám chuyên khoa <strong>Lão khoa hoặc Thần kinh</strong>. Cần có người nhà đi cùng để kể lại diễn biến, vì người cao tuổi thường không tự nhận thấy sự thay đổi trí nhớ của mình.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Người cao tuổi bị ngã đau háng nên đưa đi đâu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;"><strong>Gọi 115 ngay, tuyệt đối không tự đỡ bác dậy</strong> — nghi gãy cổ xương đùi, kéo dậy có thể làm tổn thương nặng thêm. Bệnh viện Hữu nghị Việt Đức là tuyến cuối về chấn thương chỉnh hình.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Có nên đưa bố mẹ đi bệnh viện tuyến trung ương không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Không phải lúc nào cũng cần. Tuyến trung ương rất đông, chờ lâu và người cao tuổi dễ mệt. Với <strong>bệnh thông thường hoặc tái khám ổn định</strong>, bệnh viện tuyến thành phố gần nhà thường phù hợp hơn.</p>

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
console.log('Successfully updated news.json with new featured article ID 33!');
