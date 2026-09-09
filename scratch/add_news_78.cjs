const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\phong_nga_purple_uniform_1788922575727.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/che-do-an-cho-nguoi-benh-xuong-khop.jpg');

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
    <h1 itemprop="headline">Chế độ ăn cho người bệnh xương khớp: Thực phẩm chống viêm và những gì nên tránh</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Không có thực phẩm thần kỳ chữa khỏi bệnh khớp. Nhưng chế độ ăn chống viêm đúng cách có thể giảm đau, làm chậm tiến triển bệnh và giảm nhu cầu dùng thuốc giảm đau.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Chế độ ăn hỗ trợ bệnh xương khớp tập trung vào hai hướng:
      <strong>thực phẩm chống viêm</strong> (cá béo giàu omega-3, gừng, nghệ, rau xanh đậm, dầu olive, các loại đậu) và
      <strong>thực phẩm hỗ trợ sụn khớp và xương</strong> (thực phẩm giàu canxi, vitamin D, vitamin C và collagen tự nhiên từ nước hầm xương).
      Cần hạn chế: thịt đỏ nhiều, đường và tinh bột tinh chế, rượu bia — những thứ làm tăng viêm.
      Với bệnh gout (thống phong): cần thêm hạn chế thực phẩm giàu purine như nội tạng, hải sản vỏ cứng và bia.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/phong-nga-nguoi-cao-tuoi-mua-lanh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Phòng ngã cho người cao tuổi mùa lạnh: Đánh giá nguy cơ và 10 thay đổi thiết thực trong nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/che-do-an-cho-nguoi-benh-tim-mach" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người bệnh tim mạch: Thực phẩm bảo vệ tim và những điều cần tránh
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/che-do-an-cho-nguoi-tieu-duong-type-2" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người tiểu đường type 2: Hướng dẫn thực tế cho bữa ăn Việt Nam
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bệnh khớp và vai trò của chế độ ăn — hiểu đúng trước khi ăn đúng</h2>
  <p>Trước khi bàn về thực phẩm, cần phân biệt các loại bệnh khớp chính vì chế độ ăn có điểm khác nhau:</p>
  <p><strong>Thoái hóa khớp (osteoarthritis)</strong> — do mòn sụn khớp theo thời gian. Chế độ ăn chống viêm và duy trì cân nặng hợp lý là quan trọng nhất.</p>
  <p><strong>Viêm khớp dạng thấp (rheumatoid arthritis)</strong> — bệnh tự miễn, viêm mạn tính. Chế độ ăn chống viêm đặc biệt quan trọng; một số thực phẩm có thể kích hoạt đợt viêm.</p>
  <p><strong>Gout (thống phong)</strong> — lắng đọng tinh thể acid uric trong khớp. Cần thêm hạn chế thực phẩm giàu purine và uống nhiều nước.</p>
  <p><strong>Loãng xương (osteoporosis)</strong> — mất mật độ xương, không phải bệnh khớp nhưng thường đi kèm. Cần đủ canxi và vitamin D.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm chống viêm — nền tảng của chế độ ăn bệnh khớp</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Cá béo — omega-3 giảm viêm khớp</h3>
  <p>Omega-3 EPA và DHA trong cá béo ức chế các chất gây viêm (cytokine, prostaglandin) trong cơ thể. Nghiên cứu cho thấy ăn cá béo 2–3 lần mỗi tuần giảm đau khớp và độ cứng khớp buổi sáng ở người viêm khớp dạng thấp, đôi khi giảm được nhu cầu dùng thuốc giảm đau.</p>
  <p>Tại Việt Nam: cá thu biển, cá ngừ, cá trích, cá mòi (nếu không bị gout). Cá basa, cá tra ít omega-3 hơn nhưng vẫn là nguồn protein tốt.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Gừng và nghệ — chống viêm tự nhiên có bằng chứng</h3>
  <p>Gingerol trong gừng và curcumin trong nghệ có tác dụng ức chế viêm qua cơ chế tương tự một số thuốc kháng viêm không steroid, nhưng yếu hơn và ít tác dụng phụ hơn. Các nghiên cứu nhỏ cho thấy uống chiết xuất gừng và nghệ giảm đau khớp gối có ý nghĩa.</p>
  <p>Cách dùng thực tế: nấu ăn với gừng và nghệ thường xuyên, hoặc uống trà gừng tươi mỗi ngày. Hấp thu curcumin từ nghệ tăng đáng kể khi ăn cùng hạt tiêu đen.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Rau xanh đậm và trái cây nhiều màu</h3>
  <p>Vitamin C trong ổi, bưởi, ớt chuông cần thiết cho tổng hợp collagen — thành phần chính của sụn khớp. Chất chống oxy hóa trong rau trái cây nhiều màu giảm stress oxy hóa gây tổn thương sụn. Ưu tiên đa dạng màu sắc: rau xanh đậm, cà rốt cam, cà chua đỏ, bưởi vàng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Dầu olive — chất béo chống viêm</h3>
  <p>Oleocanthal trong dầu olive có cấu trúc tương tự ibuprofen và tác dụng ức chế viêm theo cơ chế tương tự. Dùng dầu olive thay một phần dầu ăn thông thường trong nấu nướng là cách đơn giản và bền vững để tăng tác dụng chống viêm từ chế độ ăn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm hỗ trợ xương và sụn</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Canxi và vitamin D — bộ đôi không thể thiếu</h3>
  <p>Canxi xây dựng và duy trì mật độ xương. Vitamin D giúp hấp thu canxi và có thêm tác dụng chống viêm. Thiếu một trong hai làm giảm tác dụng của cái còn lại.</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Thực phẩm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Canxi (mg/100g)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cá nhỏ ăn cả xương (cá cơm, cá mòi)</td>
          <td style="padding: 0.8rem 1rem;">300–500mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Sữa tươi</td>
          <td style="padding: 0.8rem 1rem;">120mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Đậu phụ</td>
          <td style="padding: 0.8rem 1rem;">100–130mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Rau cải xanh luộc</td>
          <td style="padding: 0.8rem 1rem;">100mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Mè (vừng)</td>
          <td style="padding: 0.8rem 1rem;">975mg — nhưng ăn lượng nhỏ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Vitamin D chủ yếu tổng hợp qua da khi tiếp xúc ánh nắng (15–20 phút mỗi ngày, tránh giờ cao điểm). Người cao tuổi ở nhiều trong nhà thường thiếu vitamin D và cần bổ sung theo chỉ định bác sĩ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Nước hầm xương</h3>
  <p>Chứa collagen, gelatin và các axit amin hỗ trợ tổng hợp sụn khớp. Bằng chứng khoa học chưa mạnh nhưng là thực phẩm an toàn, giàu dinh dưỡng và phù hợp với người cao tuổi khó ăn. Hầm xương lâu (4–8 tiếng) ở lửa nhỏ chiết xuất collagen tốt hơn hầm nhanh.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm làm nặng thêm bệnh khớp</h2>
  <p><strong>Đường và tinh bột tinh chế</strong> — đường kích thích sản xuất các chất gây viêm (cytokine) trong cơ thể. Giảm đường và bánh kẹo thường cải thiện đau khớp trong 2–4 tuần ở nhiều người.</p>
  <p><strong>Thịt đỏ và thịt chế biến sẵn</strong> — axit arachidonic trong thịt đỏ là tiền chất của các chất gây viêm. Không cần kiêng hoàn toàn nhưng không nên ăn hằng ngày.</p>
  <p><strong>Rượu bia</strong> — làm tăng viêm toàn thân và đặc biệt kích hoạt cơn gout cấp. Bia là thủ phạm hàng đầu gây gout vì chứa cả purine và ức chế thải acid uric.</p>
  <p><strong>Đồ chiên rán và thức ăn nhanh</strong> — chứa chất béo trans và omega-6 cao làm tăng viêm mạn tính.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý về cân nặng</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Với thoái hóa khớp gối và khớp háng, mỗi kg thừa cân tạo thêm 3–4kg lực tác động lên khớp gối khi đi lại. Giảm 5–10% cân nặng ở người thừa cân thường cải thiện đau khớp đáng kể và làm chậm tiến triển thoái hóa. Đây thường là can thiệp hiệu quả nhất cho thoái hóa khớp gối, quan trọng hơn cả việc chọn thực phẩm cụ thể.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực đơn mẫu một ngày hỗ trợ bệnh khớp</h2>
  <p><strong>Bữa sáng:</strong> Cháo yến mạch nấu với sữa, thêm một ít hạt điều và trái cây tươi. Hoặc trứng luộc với bánh mì nguyên cám và rau tươi.</p>
  <p><strong>Bữa trưa:</strong> Cơm gạo lứt, cá thu kho gừng nhạt, canh cải xanh, đậu phụ hấp. Uống một ly nước ép bưởi hoặc cam ép tươi (vitamin C hỗ trợ collagen).</p>
  <p><strong>Bữa tối:</strong> Súp xương hầm rau củ, hoặc cháo cá. Thêm một thìa nghệ vào nước luộc gà hoặc súp.</p>
  <p><strong>Đồ uống trong ngày:</strong> Trà gừng tươi, nước lọc đủ 2 lít. Tránh nước ngọt và rượu bia.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Hỗ trợ người cao tuổi đi khám xương khớp</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Đưa đón đến các khoa xương khớp, làm thủ tục và ghi chép đầy đủ hướng dẫn điều trị của bác sĩ gửi về gia đình. Phù hợp với người đi lại khó khăn do đau khớp.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Canxi bổ sung có giúp ích cho khớp không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Canxi quan trọng cho xương chứ không trực tiếp cho sụn khớp. Bổ sung canxi giúp giảm nguy cơ loãng xương, giảm gãy xương — điều quan trọng với người cao tuổi có bệnh khớp. Tuy nhiên bổ sung quá nhiều canxi (trên 1.500mg/ngày) có thể tăng nguy cơ sỏi thận và một số nghiên cứu gợi ý liên quan đến tăng nguy cơ tim mạch. Ưu tiên canxi từ thực phẩm (sữa, cá nhỏ ăn cả xương, rau xanh đậm) hơn từ viên uống.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Glucosamine và chondroitin có thực sự giúp bệnh khớp không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Bằng chứng khoa học còn chưa nhất quán. Một số nghiên cứu lớn cho thấy glucosamine và chondroitin không hiệu quả hơn giả dược ở mức có ý nghĩa thống kê trong giảm đau thoái hóa khớp gối. Tuy nhiên một số bệnh nhân báo cáo thấy có cải thiện. Đây là thực phẩm chức năng tương đối an toàn và có thể thử trong 3–6 tháng để xem có hiệu quả với từng người không. Không thay thế điều trị y tế.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người bị gout có ăn hải sản được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tùy loại. Hải sản vỏ cứng (tôm, cua, sò, hàu, mực) và cá cơm, cá mòi, cá trích chứa nhiều purine, nên hạn chế khi gout đang cấp tính hoặc acid uric cao. Cá trắng như cá basa, cá tra chứa ít purine hơn và thường được chấp nhận với lượng vừa phải. Thịt đỏ và bia là hai tác nhân gây tăng acid uric mạnh nhất cần hạn chế nghiêm ngặt hơn cả hải sản.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Uống nhiều nước có giúp bệnh khớp không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, đặc biệt với người bị gout. Uống đủ 2–2,5 lít nước mỗi ngày giúp thận thải acid uric hiệu quả hơn, giảm nguy cơ lắng đọng tinh thể urat gây cơn gout cấp. Với thoái hóa khớp, nước cần thiết để duy trì chất nhầy khớp (synovial fluid) bôi trơn sụn. Người cao tuổi dễ thiếu nước do cảm giác khát giảm — nên đặt lịch uống nước chủ động.</p>
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
    "headline": "Chế độ ăn cho người bệnh xương khớp: Thực phẩm chống viêm và những gì nên tránh",
    "description": "Chế độ ăn chống viêm cho người thoái hóa khớp và viêm khớp dạng thấp: thực phẩm giảm đau khớp tự nhiên, bổ sung canxi đúng cách và thực phẩm làm nặng thêm triệu chứng.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 78,
  slug: "che-do-an-cho-nguoi-benh-xuong-khop",
  oldSlugs: [
    "che-do-an-cho-nguoi-benh-xuong-khop"
  ],
  title: "Chế độ ăn cho người bệnh xương khớp: Thực phẩm chống viêm và những gì nên tránh",
  category: "Dinh dưỡng theo bệnh",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Chế độ ăn chống viêm cho người thoái hóa khớp và viêm khớp dạng thấp: thực phẩm giảm đau khớp tự nhiên, bổ sung canxi đúng cách và thực phẩm làm nặng thêm triệu chứng.",
  excerpt: "Chế độ ăn chống viêm cho người thoái hóa khớp và viêm khớp dạng thấp: thực phẩm giảm đau khớp tự nhiên, bổ sung canxi đúng cách và thực phẩm làm nặng thêm triệu chứng.",
  image: "/images/tin-tuc/che-do-an-cho-nguoi-benh-xuong-khop.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 78!');
