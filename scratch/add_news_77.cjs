const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\tang_huyet_ap_purple_uniform_1788921726912.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/che-do-an-cho-nguoi-benh-tim-mach.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chế độ ăn cho người bệnh tim mạch: Thực phẩm bảo vệ tim và những điều cần tránh</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Chế độ ăn lành mạnh cho tim được chứng minh giảm nguy cơ nhồi máu cơ tim và đột quỵ tái phát. Không cần ăn nhạt hoàn toàn hay kiêng khem khắc khổ — chỉ cần ưu tiên đúng thực phẩm.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Chế độ ăn được chứng minh tốt nhất cho sức khỏe tim mạch là chế độ ăn Địa Trung Hải:
      <strong>nhiều cá béo, dầu olive, các loại đậu, rau xanh, trái cây và ngũ cốc nguyên hạt;
      ít thịt đỏ và thịt chế biến sẵn; hạn chế muối, đường thêm vào và chất béo trans</strong>.
      Thực phẩm cần tránh hoàn toàn với bệnh tim: thịt chế biến sẵn (xúc xích, lạp xưởng),
      đồ chiên rán nhiều, thức ăn nhanh, rượu bia quá mức,
      và grapefruit (bưởi chùm) nếu đang dùng statin — vì tương tác thuốc.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/che-do-an-cho-nguoi-cao-huyet-ap" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người cao huyết áp: Hướng dẫn thực tế cho bữa ăn hằng ngày
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/che-do-an-cho-nguoi-huyet-ap-thap" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người huyết áp thấp: Những điều thực sự có ích và những điều cần thận trọng
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/che-do-an-cho-nguoi-tieu-duong-type-2" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người tiểu đường type 2: Hướng dẫn thực tế cho bữa ăn Việt Nam
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tại sao chế độ ăn quan trọng với người bệnh tim</h2>
  <p>Bệnh tim mạch — nhồi máu cơ tim, suy tim, rối loạn nhịp — chịu ảnh hưởng lớn từ chế độ ăn theo nhiều cơ chế: viêm mạch máu do chất béo xấu và đường, xơ vữa động mạch tích lũy theo thời gian, huyết áp tăng do muối, và rối loạn mỡ máu do chất béo bão hòa.</p>
  <p>Với người đã có bệnh tim, chế độ ăn đúng giúp:</p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Giảm nguy cơ nhồi máu cơ tim và đột quỵ tái phát</li>
    <li>Kiểm soát huyết áp và mỡ máu — hai yếu tố nguy cơ chính</li>
    <li>Hỗ trợ thuốc điều trị hoạt động hiệu quả hơn</li>
    <li>Duy trì cân nặng phù hợp, giảm gánh nặng cho tim</li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chế độ ăn Địa Trung Hải — chuẩn vàng cho sức khỏe tim</h2>
  <p>Trong số nhiều chế độ ăn được nghiên cứu, chế độ ăn Địa Trung Hải có nhiều bằng chứng khoa học mạnh nhất về giảm nguy cơ bệnh tim mạch. Nguyên tắc cốt lõi:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Ăn nhiều</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Ăn vừa phải</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Hạn chế tối đa</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem;">Rau xanh các loại</td>
          <td style="padding: 0.8rem 1rem;">Thịt gia cầm không da</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Thịt đỏ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem;">Trái cây tươi</td>
          <td style="padding: 0.8rem 1rem;">Trứng</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Thịt chế biến sẵn</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem;">Cá béo (2–3 lần/tuần)</td>
          <td style="padding: 0.8rem 1rem;">Sữa ít béo</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Đường thêm vào</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem;">Các loại đậu</td>
          <td style="padding: 0.8rem 1rem;">Rượu vang đỏ (nếu uống)</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Chất béo trans</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem;">Ngũ cốc nguyên hạt</td>
          <td style="padding: 0.8rem 1rem;"> </td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Đồ chiên rán, thức ăn nhanh</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem;">Dầu olive/dầu thực vật tốt</td>
          <td style="padding: 0.8rem 1rem;"> </td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Bánh kẹo, nước ngọt</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm bảo vệ tim — và lý do tại sao</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Cá béo — omega-3 trực tiếp cho tim</h3>
  <p>Axit béo omega-3 EPA và DHA trong cá béo giảm viêm, hạ triglyceride, giảm nhịp tim lúc nghỉ và giảm nguy cơ loạn nhịp tim nguy hiểm. Người sau nhồi máu cơ tim được khuyến nghị ăn cá béo ít nhất 2 lần mỗi tuần hoặc bổ sung omega-3 theo chỉ định bác sĩ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Các loại đậu — chất xơ hòa tan hạ cholesterol</h3>
  <p>Chất xơ hòa tan trong đậu đỏ, đậu đen, đậu xanh gắn với cholesterol trong ruột và đưa ra ngoài, giảm LDL-cholesterol (cholesterol xấu). Ăn đậu 4–5 lần mỗi tuần liên quan đến giảm 10–15% nguy cơ bệnh tim mạch trong các nghiên cứu dài hạn.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Rau xanh đậm và trái cây nhiều màu</h3>
  <p>Chất chống oxy hóa (flavonoid, carotenoid, vitamin C) trong rau trái cây bảo vệ thành mạch khỏi tổn thương do gốc tự do và giảm viêm mạn tính — nền tảng của xơ vữa động mạch.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Hạt — hạnh nhân, óc chó, hạt điều</h3>
  <p>Giàu chất béo không bão hòa tốt, magie và chất xơ. Nghiên cứu cho thấy ăn một nắm nhỏ hạt (khoảng 30g) mỗi ngày liên quan đến giảm nguy cơ bệnh tim. Không ăn hạt đã rang nhiều muối — chọn hạt tươi hoặc rang khô không muối.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm cần tránh — và mức độ nghiêm trọng</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Phải tránh hoàn toàn</h3>
  <p><strong>Chất béo trans</strong> — có trong đồ ăn nhanh, bánh quy công nghiệp, kem thực vật (margarine). Làm tăng LDL và giảm HDL cùng lúc — tác động xấu nhất trong tất cả các loại chất béo với tim. Đọc nhãn: nếu có "dầu thực vật hydro hóa" hoặc "partially hydrogenated oil" là có chất béo trans.</p>
  <p><strong>Thịt chế biến sẵn</strong> — xúc xích, lạp xưởng, thịt nguội, thịt hộp. Vừa nhiều muối, vừa nhiều chất béo bão hòa, vừa có nitrate bảo quản liên quan đến tăng nguy cơ bệnh tim trong nghiên cứu dài hạn.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Hạn chế đáng kể</h3>
  <p><strong>Thịt đỏ</strong> — không quá 300–500g mỗi tuần. Thịt heo, thịt bò nhiều chất béo bão hòa hơn cá và thịt gia cầm. Chọn phần nạc và nấu luộc, hấp thay vì chiên xào.</p>
  <p><strong>Muối</strong> — dưới 5g/ngày như với huyết áp cao. Đặc biệt quan trọng với người suy tim — natri làm giữ nước, tăng gánh nặng cho tim.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý về tương tác thuốc và thực phẩm</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Người bệnh tim thường dùng nhiều loại thuốc cùng lúc. Một số tương tác quan trọng: bưởi chùm (grapefruit) tương tác với statin và một số thuốc tim khác; vitamin K trong rau xanh ảnh hưởng đến warfarin; cam thảo (licorice) làm tăng huyết áp và tương tác với digoxin. Luôn hỏi bác sĩ về danh sách thực phẩm cần tránh với phác đồ thuốc cụ thể của người bệnh.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực tế bữa ăn hằng ngày</h2>
  <p><strong>Bữa sáng:</strong> Cháo yến mạch với hạt điều và trái cây tươi. Hoặc bánh mì nguyên cám với trứng luộc và rau tươi.</p>
  <p><strong>Bữa trưa:</strong> Cơm gạo lứt, cá kho nhạt, canh rau xanh, đậu phụ. Tránh nước chấm nhiều muối.</p>
  <p><strong>Bữa tối:</strong> Súp cá rau củ, hoặc cháo đậu đỏ. Bữa tối nên nhẹ hơn bữa trưa để giảm gánh nặng cho tim vào ban đêm.</p>
  <p><strong>Bữa phụ:</strong> Một nắm hạt điều hoặc hạnh nhân không muối, hoặc một quả táo, hoặc sữa chua không đường.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vận động — không thể thiếu dù chế độ ăn tốt</h2>
  <p>Chế độ ăn và vận động bổ trợ cho nhau trong bảo vệ tim. Người bệnh tim sau khi ổn định được khuyến nghị vận động 150 phút mỗi tuần ở cường độ vừa phải — đi bộ nhanh, bơi lội, đạp xe — theo hướng dẫn cụ thể của bác sĩ tim mạch. Không tự ý tập nặng sau nhồi máu cơ tim mà không có chỉ định.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Đồng hành theo dõi sức khỏe tim mạch</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Đo huyết áp, mạch và các chỉ số sinh tồn định kỳ tại nhà, kết hợp nhắc lịch tái khám tim mạch. Phù hợp với người sau nhồi máu cơ tim hoặc đang điều trị bệnh tim mạn tính.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Gọi 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Nhận tư vấn miễn phí
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người bệnh tim có ăn trứng được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có thể ăn với lượng vừa phải — không quá 4–6 quả mỗi tuần với người bệnh tim ổn định. Trứng chứa cholesterol nhưng ảnh hưởng của cholesterol từ thực phẩm lên cholesterol máu thấp hơn nhiều so với chất béo bão hòa và chất béo trans. Chất béo bão hòa trong thịt đỏ và thịt chế biến sẵn ảnh hưởng đến cholesterol máu nhiều hơn trứng. Hỏi bác sĩ về lượng cụ thể phù hợp với tình trạng của từng người.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Dầu gì tốt nhất cho người bệnh tim?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Dầu olive là lựa chọn tốt nhất với nhiều bằng chứng nghiên cứu nhất — giàu chất béo không bão hòa đơn và chất chống oxy hóa. Tại Việt Nam, dầu hướng dương và dầu đậu nành là lựa chọn thực tế hơn và cũng chứa chất béo không bão hòa đa tốt cho tim. Cần tránh: dầu dừa và dầu cọ (nhiều chất béo bão hòa), và tuyệt đối tránh mỡ trans trong đồ ăn nhanh và bánh kẹo công nghiệp.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Cá biển ăn bao nhiêu là đủ cho tim?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Hội Tim mạch Mỹ khuyến nghị ăn cá béo (cá hồi, cá thu, cá trích, cá mòi) ít nhất 2 lần mỗi tuần. Omega-3 trong cá béo giảm viêm, hạ triglyceride và giảm nguy cơ loạn nhịp tim. Tại Việt Nam, cá thu biển, cá ngừ và cá trích là những lựa chọn tốt và có giá phù hợp. Cá tươi tốt hơn cá đóng hộp nhiều dầu hoặc nhiều muối.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người dùng thuốc kháng đông có kiêng thực phẩm gì không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có — và đây rất quan trọng. Người dùng warfarin (Coumadin) cần giữ lượng vitamin K ổn định trong chế độ ăn vì vitamin K ảnh hưởng trực tiếp đến tác dụng của thuốc. Không cần tránh hoàn toàn rau xanh (nguồn vitamin K), nhưng cần ăn lượng ổn định hằng ngày thay vì ăn rất nhiều một ngày rồi bỏ ngày khác. Bưởi chùm (grapefruit) tương tác với nhiều thuốc tim mạch — cần hỏi bác sĩ về danh sách thực phẩm cần tránh với thuốc cụ thể đang dùng.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE – Kiến chăm tổ cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chế độ ăn cho người bệnh tim mạch: Thực phẩm bảo vệ tim và những điều cần tránh",
    "description": "Chế độ ăn lành mạnh cho tim theo kiểu Địa Trung Hải: thực phẩm bảo vệ tim, cần hạn chế và cần tránh hoàn toàn. Hướng dẫn thực tế cho bữa ăn hằng ngày.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 77,
  slug: "che-do-an-cho-nguoi-benh-tim-mach",
  oldSlugs: [
    "che-do-an-cho-nguoi-benh-tim-mach"
  ],
  title: "Chế độ ăn cho người bệnh tim mạch: Thực phẩm bảo vệ tim và những điều cần tránh",
  category: "Dinh dưỡng theo bệnh",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Chế độ ăn lành mạnh cho tim theo kiểu Địa Trung Hải: thực phẩm bảo vệ tim, cần hạn chế và cần tránh hoàn toàn. Hướng dẫn thực tế cho bữa ăn hằng ngày.",
  excerpt: "Chế độ ăn lành mạnh cho tim theo kiểu Địa Trung Hải: thực phẩm bảo vệ tim, cần hạn chế và cần tránh hoàn toàn. Hướng dẫn thực tế cho bữa ăn hằng ngày.",
  image: "/images/tin-tuc/che-do-an-cho-nguoi-benh-tim-mach.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 77!');
