import fs from 'fs';

const activitiesFilePath = 'c:\\my-projects\\antcare\\sourcecode\\antcare-landingpage\\src\\data\\activities.json';
const rawData = fs.readFileSync(activitiesFilePath, 'utf8');
const activitiesData = JSON.parse(rawData);

const newActivity = {
  "id": 29,
  "slug": "tet-trung-thu-2026-mon-qua-cho-bo-me-gia",
  "oldSlugs": ["tin-tuc/tet-trung-thu-2026-mon-qua-cho-bo-me-gia"],
  "title": "Tết Trung Thu 2026: Món quà đoàn viên ý nghĩa nhất cho bố mẹ là sự có mặt",
  "category": "Thiện nguyện",
  "date": "04 Tháng 9, 2026",
  "image": "/images/trung-thu-2026-antcare.jpg",
  "description": "Tết Trung Thu 2026 rơi vào thứ Sáu 25/9/2026. Gợi ý món quà đoàn viên ý nghĩa cho bố mẹ già và dịch vụ chăm sóc người cao tuổi tại nhà từ 299.000đ.",
  "author": {
    "name": "ANTCARE – Kiến chăm tổ",
    "image": "/images/huyen-trang.jpg",
    "description": "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  "content": `<span style="display:inline-block; font-size:13px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:#7C4DCC; background:#ece7f6; padding:5px 12px; border-radius:999px; margin-bottom:18px;">Kiến chăm tổ • Tết Trung Thu 2026</span>

<p style="font-size:18px; color:#4b5563; margin:0 0 16px; line-height:1.7;"><strong>Tết Trung Thu 2026 rơi vào thứ Sáu, ngày 25/9/2026 dương lịch, tức Rằm tháng Tám năm Bính Ngọ. Đây là Tết Đoàn Viên — dịp cả gia đình quây quần bên mâm cỗ trông trăng. Nhưng với nhiều gia đình Việt hiện nay, đoàn viên lại là điều khó sắp xếp nhất: con cái lập nghiệp xa, còn bố mẹ ở nhà đón Rằm với nhau.</strong></p>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem; margin-bottom: 25px;">
    <img src="/images/huyen-trang.jpg" alt="ANTCARE – Kiến chăm tổ" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
    <div>
        <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 3px;">ANTCARE – Kiến chăm tổ</div>
        <p style="color: #6b7280; font-size: 0.82rem; margin: 0 0 6px 0; font-weight: 500;">Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà · Hà Nội</p>
        <p style="color: #9ca3af; font-size: 0.78rem; margin: 0;">Xuất bản: 04/09/2026 · Cập nhật: 04/09/2026</p>
    </div>
</div>

<p>Bài viết này gợi ý cho bạn một cách nghĩ khác về quà Trung Thu tặng bố mẹ — và giới thiệu chương trình ưu đãi Trung Thu của ANTCARE với mức từ 299.000đ mỗi dịch vụ.</p>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Tết Trung Thu 2026 là ngày nào?</h2>

<div style="background-color: #f0fdf4; padding: 16px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <strong style="color: #166534; font-size: 1rem; display: block; margin-bottom: 6px;">💡 Trả lời nhanh cho bạn:</strong>
    <p style="color: #14532d; font-size: 0.95rem; margin: 0; line-height: 1.6;">Tết Trung Thu diễn ra vào ngày 15 tháng 8 âm lịch hằng năm. Năm 2026, ngày này rơi vào thứ Sáu, 25/9/2026 dương lịch.</p>
</div>

<p>Vì Trung Thu năm nay rơi vào tối thứ Sáu, các gia đình có thể nối liền sang hai ngày cuối tuần — thuận lợi cho việc về thăm bố mẹ hoặc tổ chức một buổi sum họp trọn vẹn. Đây cũng là lý do bạn nên lên kế hoạch từ sớm.</p>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Vì sao Trung Thu còn được gọi là Tết Đoàn Viên?</h2>

<p>Trăng Rằm tháng Tám là đêm trăng tròn và sáng nhất trong năm. Hình tròn ấy — cũng như chiếc bánh Trung Thu hình tròn — tượng trưng cho sự đủ đầy, viên mãn và sum họp.</p>

<p>Trong văn hóa Việt, Trung Thu vì thế mang hai lớp ý nghĩa: là ngày hội của trẻ con với đèn lồng, múa lân, phá cỗ; và là dịp con cháu trở về bên ông bà cha mẹ. Lớp ý nghĩa thứ hai thường bị lãng quên, dù đó mới là điều người già mong đợi nhất.</p>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Điều bố mẹ mong nhất không phải là hộp bánh</h2>

<p>Có một điều hầu hết các gia đình đều nhận ra khi nghĩ kỹ: bố mẹ già không thiếu bánh Trung Thu. Cái các cụ thiếu là người ngồi cùng.</p>

<p>Người cao tuổi ở Việt Nam có một đặc điểm chung: rất ngại làm phiền con cái. Ông bà thường nói “bố mẹ ổn, các con lo công việc đi”, rồi tự mình xoay xở với những việc tưởng nhỏ mà không hề nhỏ:</p>

<ul style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 10px;">Tự bắt xe đi khám, tự xếp hàng lấy số, tự nghe bác sĩ dặn rồi về nhà quên mất một nửa</li>
  <li style="margin-bottom: 10px;">Tự nhớ lịch uống thuốc, mà trí nhớ thì không còn như xưa</li>
  <li style="margin-bottom: 10px;">Tự trèo ghế thay bóng đèn, tự lau sàn nhà tắm trơn trượt</li>
  <li style="margin-bottom: 0;">Ở nhà cả ngày không có ai để trò chuyện</li>
</ul>

<p>Trong khi đó, con cái ở xa chỉ biết hỏi qua điện thoại “bố mẹ có khỏe không” và nhận lại câu trả lời quen thuộc: “khỏe, con đừng lo”.</p>

<div style="background: #fff6ea; border: 1px solid #ffe3bf; border-left: 4px solid #FF8A00; border-radius: 12px; padding: 18px 20px; margin: 24px 0; font-size: 16.5px; color: #6b4b1f; font-weight: 500; line-height: 1.65;">
  Món quà Trung Thu ý nghĩa nhất, vì vậy, không phải là thứ để trên bàn thờ hay trong tủ lạnh — mà là sự có mặt đều đặn của một người đáng tin bên cạnh bố mẹ, cả những ngày bạn không thể về.
</div>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Dịch vụ chăm sóc người cao tuổi tại nhà là gì?</h2>

<div style="background-color: #f0fdf4; padding: 16px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
    <p style="color: #14532d; font-size: 0.95rem; margin: 0; line-height: 1.6;">Dịch vụ chăm sóc người cao tuổi tại nhà là hình thức hỗ trợ sức khỏe và sinh hoạt cho người lớn tuổi ngay tại ngôi nhà của họ, thay vì phải chuyển vào viện dưỡng lão hay cơ sở chăm sóc tập trung.</p>
</div>

<p>Ưu điểm lớn nhất của mô hình này là người cao tuổi được sống trong không gian quen thuộc, giữ được nếp sinh hoạt và sự tự chủ của mình — điều mà giới chuyên môn gọi là “già hóa tích cực” (active ageing). Đồng thời, gia đình vẫn yên tâm vì có người theo dõi sức khỏe và hỗ trợ các việc hằng ngày một cách bài bản.</p>

<p>Tại Việt Nam, mô hình này đang phát triển nhanh khi dân số già hóa và ngày càng nhiều gia đình có con cái sống xa bố mẹ.</p>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Ba dịch vụ của ANTCARE dành cho bố mẹ bạn</h2>

<p>ANTCARE — Kiến chăm tổ là đơn vị cung cấp dịch vụ chăm sóc người cao tuổi tại nhà, với ba nhóm dịch vụ được thiết kế theo đúng những nỗi lo thường gặp nhất của các gia đình Việt.</p>

<div style="border: 1px solid #ece7f6; border-radius: 14px; padding: 22px 24px; margin: 18px 0; background: linear-gradient(180deg,#fbf9ff,#ffffff);">
  <h3 style="margin-top:0; color:#5f37a6; font-size:19px; font-weight:700;">1. Đồng hành đi khám — không ai phải đi viện một mình</h3>
  <p style="color:#4b5563; margin-bottom: 10px;">Kiến Y tế của ANTCARE đón ông bà tại nhà và đồng hành suốt buổi khám: hỗ trợ làm thủ tục, xếp hàng lấy số, dẫn đường giữa các khoa phòng, ghi lại đầy đủ lời dặn của bác sĩ và đơn thuốc, sau đó đưa ông bà về nhà an toàn.</p>
  <p style="color:#4b5563; margin-bottom: 10px;">Kết thúc buổi khám, gia đình nhận được <strong>báo cáo đầy đủ</strong> về kết quả và những điều bác sĩ căn dặn. Bạn không phải xin nghỉ làm, bố mẹ không phải loay hoay giữa bệnh viện đông người.</p>
  <p style="font-size: 14.5px; color: #6E6486; border-top: 1px dashed #e5e7eb; pt: 10px; margin-top: 12px;"><em>Phù hợp với gia đình có bố mẹ đi khám định kỳ, tái khám theo lịch, hoặc con cái ở xa không về kịp.</em></p>
</div>

<div style="border: 1px solid #ece7f6; border-radius: 14px; padding: 22px 24px; margin: 18px 0; background: linear-gradient(180deg,#fbf9ff,#ffffff);">
  <h3 style="margin-top:0; color:#5f37a6; font-size:19px; font-weight:700;">2. Trợ lý theo dõi sức khỏe — có người ghé thăm đều đặn</h3>
  <p style="color:#4b5563; margin-bottom: 10px;">Kiến Y tế ghé thăm nhà theo lịch cố định, thực hiện các công việc theo quy trình chuẩn: đo và ghi lại các chỉ số sức khỏe cơ bản, hỗ trợ nhắc lịch uống thuốc theo đơn của bác sĩ, hướng dẫn vận động nhẹ nhàng phù hợp với người cao tuổi, và dành thời gian trò chuyện cùng ông bà.</p>
  <p style="color:#4b5563; margin-bottom: 10px;">Sau mỗi lần thăm, gia đình nhận được báo cáo với các chỉ số được ghi chép theo thời gian — để bạn ở xa vẫn nắm được diễn biến sức khỏe của bố mẹ, thay vì chỉ nghe câu “bố mẹ khỏe”.</p>
  <p style="font-size: 14.5px; color: #6E6486; border-top: 1px dashed #e5e7eb; pt: 10px; margin-top: 12px;"><em>Phù hợp với gia đình muốn theo dõi sức khỏe bố mẹ đều đặn, và muốn ông bà có người bầu bạn.</em></p>
</div>

<div style="border: 1px solid #ece7f6; border-radius: 14px; padding: 22px 24px; margin: 18px 0; background: linear-gradient(180deg,#fbf9ff,#ffffff);">
  <h3 style="margin-top:0; color:#5f37a6; font-size:19px; font-weight:700;">3. An tâm nhà cửa — ngôi nhà an toàn cho người già</h3>
  <p style="color:#4b5563; margin-bottom: 10px;">Té ngã tại nhà là một trong những rủi ro phổ biến nhất với người cao tuổi, và phần lớn đến từ những chi tiết rất nhỏ trong chính ngôi nhà quen thuộc.</p>
  <p style="color:#4b5563; margin-bottom: 10px;">Kiến Nhà cửa của ANTCARE không chỉ dọn dẹp, sắp xếp nhà cửa gọn gàng, mà còn rà soát các điểm mất an toàn theo một danh mục kiểm tra chuyên biệt cho người cao tuổi: sàn nhà tắm trơn, thiếu tay vịn, dây điện vướng lối đi, đồ dùng để quá cao hoặc quá thấp, lối đi thiếu ánh sáng, ngưỡng cửa dễ vấp.</p>
  <p style="font-size: 14.5px; color: #6E6486; border-top: 1px dashed #e5e7eb; pt: 10px; margin-top: 12px;"><em>Phù hợp với gia đình có bố mẹ đi lại khó khăn, hoặc muốn phòng ngừa rủi ro té ngã từ sớm.</em></p>
</div>

<h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-top: 36px; margin-bottom: 14px;">Vì sao lại là “Kiến”?</h2>

<p>Loài kiến nhỏ bé nhưng cần mẫn, bền bỉ và luôn có mặt. Chúng chăm nhau và không bỏ ai lại phía sau.</p>

<p>Đội ngũ ANTCARE cũng vậy — những chú Kiến Y tế, Kiến Nhà cửa lặng lẽ ghé thăm, chăm chút từng điều nhỏ, đều đặn mỗi ngày. Bởi chăm sóc thật sự không nằm ở những điều lớn lao, mà ở sự tận tâm bền bỉ với từng chi tiết.</p>

<p>Toàn bộ đội ngũ Kiến được đào tạo bài bản, làm việc theo quy trình rõ ràng, và <strong>sau mỗi ca đều gửi báo cáo về cho gia đình</strong>. Chi phí minh bạch, thống nhất trước khi bắt đầu.</p>

<div style="margin: 36px 0; padding: 32px 24px; background: linear-gradient(160deg, #6633B4 0%, #3D1E6D 100%); border-radius: 20px; color: #EFE7FB; text-align: center;">
  <h2 style="margin: 0 0 8px; color: #FFF; font-size: 24px;">Ưu đãi Tết Trung Thu 2026</h2>
  <p style="color: #DCD1F0; margin-bottom: 16px;">Nhân Tết Trung Thu — Tết Đoàn Viên, ANTCARE dành tặng các gia đình chương trình ưu đãi đặc biệt:</p>

  <div style="margin: 16px 0 8px; font-size: 38px; font-weight: 800; color: #FD711A;">
    Từ 299.000đ
    <span style="display: block; font-size: 15px; font-weight: 500; color: #D9CBF0; margin-top: 4px;">áp dụng cho cả ba dịch vụ nổi bật</span>
  </div>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 20px 0 24px;">
    <span style="padding: 6px 16px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; font-size: 14.5px; color: #FFF;">Đồng hành đi khám</span>
    <span style="padding: 6px 16px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; font-size: 14.5px; color: #FFF;">Trợ lý theo dõi sức khỏe</span>
    <span style="padding: 6px 16px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 100px; font-size: 14.5px; color: #FFF;">An tâm cửa nhà</span>
  </div>

  <p style="color: #DCD1F0; font-size: 15px; max-width: 580px; margin: 0 auto 20px;">Năm nay Trung Thu rơi vào thứ Sáu 25/9/2026. Nếu bạn chưa chắc có sắp xếp về được hay không, hãy để ANTCARE thay bạn có mặt bên bố mẹ.</p>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 12px;">
    <a href="tel:0969032360" style="display: inline-block; padding: 12px 28px; background: #FD711A; color: #FFF; border-radius: 100px; font-weight: 700; text-decoration: none;">Gọi 0969 032 360</a>
    <a href="/#thong-tin-lien-he" style="display: inline-block; padding: 12px 28px; background: rgba(255,255,255,0.15); color: #FFF; border: 1px solid rgba(255,255,255,0.35); border-radius: 100px; font-weight: 700; text-decoration: none;">Đăng ký ngay tại antcare.vn</a>
  </div>

  <p style="margin: 12px 0 0; font-size: 13.5px; color: #C4B4E0;">Đội ngũ ANTCARE tư vấn miễn phí để chọn dịch vụ phù hợp với tình trạng và nhu cầu của gia đình bạn. Không bắt buộc đăng ký.</p>
</div>

<section style="margin-top: 36px;">
    <h2 style="color: #5f37a6; font-size: 22px; font-weight: 700; margin-bottom: 18px;">Câu hỏi thường gặp</h2>

    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Tết Trung Thu 2026 vào ngày nào?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Tết Trung Thu 2026 rơi vào thứ Sáu, ngày 25/9/2026 dương lịch, tức ngày 15 tháng 8 âm lịch năm Bính Ngọ.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Nên tặng gì cho bố mẹ già dịp Trung Thu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Ngoài bánh Trung Thu và trà truyền thống, ngày càng nhiều gia đình chọn tặng bố mẹ các dịch vụ chăm sóc sức khỏe tại nhà. Đây là món quà có giá trị sử dụng thực tế và kéo dài, đặc biệt phù hợp khi con cái sống xa và không thể thường xuyên ở bên.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Dịch vụ chăm sóc người cao tuổi tại nhà gồm những gì?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Thông thường bao gồm: theo dõi các chỉ số sức khỏe cơ bản, hỗ trợ nhắc lịch uống thuốc theo đơn bác sĩ, đồng hành đi khám bệnh, hỗ trợ vận động, trò chuyện, và dọn dẹp — bảo đảm an toàn cho không gian sống của người cao tuổi.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Chi phí dịch vụ của ANTCARE là bao nhiêu?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Trong chương trình ưu đãi Tết Trung Thu 2026, ANTCARE áp dụng mức từ 299.000đ mỗi dịch vụ. Mức phí cụ thể tùy theo dịch vụ và nhu cầu của từng gia đình. Vui lòng liên hệ hotline <a href="tel:0969032360">0969 032 360</a> để được tư vấn và báo giá chi tiết.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Nhân viên ANTCARE có được đào tạo không?</h3>
        <p style="color: #5b5b66; margin: 0 0 16px 0; font-size: 15.5px; line-height: 1.6;">Có. Đội ngũ Kiến của ANTCARE được đào tạo bài bản và làm việc theo quy trình chuẩn. Sau mỗi ca làm việc, gia đình đều nhận được báo cáo về những gì đã thực hiện.</p>

        <h3 style="font-size: 16.5px; margin: 0 0 6px 0; color: #5f37a6; font-weight: 700;">❓ Làm sao để đăng ký dịch vụ?</h3>
        <p style="color: #5b5b66; margin: 0; font-size: 15.5px; line-height: 1.6;">Bạn gọi hotline <a href="tel:0969032360">0969 032 360</a>, truy cập <a href="https://antcare.vn">antcare.vn</a> hoặc nhắn tin cho fanpage ANTCARE. Đội ngũ tư vấn sẽ trao đổi để hiểu nhu cầu của gia đình, sau đó đề xuất dịch vụ phù hợp và thống nhất chi phí trước khi bắt đầu.</p>
    </div>
</section>

<div style="margin-top: 36px; padding: 24px; border-radius: 16px; background: linear-gradient(135deg, #7C4DCC 0%, #5f37a6 100%); color: #fff; text-align: center; box-shadow: 0 4px 14px rgba(124, 77, 204, 0.25);">
    <div style="font-size: 17px; font-weight: 600; margin-bottom: 4px;">ANTCARE — Kiến chăm tổ</div>
    <div style="font-size: 15px; font-style: italic; opacity: 0.9;">Bên cạnh bố mẹ bạn, mỗi ngày.</div>
</div>`
};

// Check if slug already exists
const existingIdx = activitiesData.findIndex(item => item.slug === newActivity.slug);
if (existingIdx !== -1) {
  activitiesData[existingIdx] = newActivity;
  console.log('Updated existing Trung Thu activity!');
} else {
  activitiesData.unshift(newActivity);
  console.log('Added new Trung Thu activity to activities.json!');
}

fs.writeFileSync(activitiesFilePath, JSON.stringify(activitiesData, null, 2), 'utf8');
console.log('Successfully written to activities.json!');
