const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Common author
const defaultAuthor = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

const dateStr = "02/10/2026";
const isoDate = "2026-10-02";

// Clean ID 82 oldSlugs so it won't conflict with tram-cam-o-nguoi-cao-tuoi
const art82 = newsData.list.find(x => x.id === 82);
if (art82 && Array.isArray(art82.oldSlugs)) {
  art82.oldSlugs = art82.oldSlugs.filter(s => s !== 'tram-cam-o-nguoi-cao-tuoi');
}

// Helper to format tables
function wrapTable(html) {
  return `<div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      ${html}
    </table>
  </div>`;
}

// 10 Articles definition
const articles = [
  // 1. tieu-son-o-nguoi-cao-tuoi
  {
    id: 152,
    slug: "tieu-son-o-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/tieu-son-o-nguoi-cao-tuoi", "blog/tieu-son-o-nguoi-cao-tuoi"],
    title: "Tiểu són ở người cao tuổi: nguyên nhân, dấu hiệu và cách chăm sóc tại nhà",
    metaTitle: "Tiểu són ở người cao tuổi: nguyên nhân, cách khắc phục tại nhà | ANTCARE",
    description: "Tiểu són ở người già không phải \"tuổi già đương nhiên\". Tìm hiểu 4 dạng tiểu són, khi nào cần đi khám và cách chăm sóc giúp ông bà tự tin, sạch sẽ mỗi ngày.",
    excerpt: "Tiểu són ở người già không phải \"tuổi già đương nhiên\". Tìm hiểu 4 dạng tiểu són, khi nào cần đi khám và cách chăm sóc giúp ông bà tự tin, sạch sẽ mỗi ngày.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Tiết niệu",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "tiểu són ở người cao tuổi, tiểu không tự chủ, người già tiểu són, bài tập sàn chậu",
    image: "/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Tiểu són (tiểu không tự chủ) là tình trạng nước tiểu rỉ ra ngoài ý muốn. Bệnh rất hay gặp ở người cao tuổi nhưng <b>không phải điều hiển nhiên của tuổi già</b>: nhiều trường hợp cải thiện rõ nhờ tập cơ sàn chậu, đi tiểu theo giờ, điều chỉnh nước uống và điều trị nguyên nhân như nhiễm trùng tiểu, phì đại tiền liệt tuyến hay tác dụng phụ của thuốc. Nên đưa ông bà đi khám tiết niệu để xác định đúng dạng tiểu són.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg" alt="Tiểu són ở người cao tuổi - nguyên nhân và giải pháp chăm sóc tại nhà" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Tiểu són ở người cao tuổi hoàn toàn có thể cải thiện nếu phát hiện đúng dạng và chăm sóc khoa học.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Tiểu són ở người già là gì?</h2>
<p>Tiểu són là khi bàng quang không giữ được nước tiểu như bình thường, khiến người bệnh rỉ vài giọt khi ho, hắt hơi, hoặc không kịp vào nhà vệ sinh. Nhiều ông bà ngại nói ra, âm thầm hạn chế uống nước, ngại ra khỏi nhà và dần thu mình. Vì vậy, tiểu són ảnh hưởng tới cả sức khỏe thể chất lẫn tinh thần.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Có những dạng tiểu són nào?</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
    <thead>
      <tr style="background-color: #6633B4; color: #ffffff;">
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dạng</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Biểu hiện</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Hay gặp ở</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tiểu són khi gắng sức</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Rỉ nước tiểu khi ho, cười, hắt hơi, bê vác</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Phụ nữ sau sinh nở, mãn kinh</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tiểu gấp (bàng quang tăng hoạt)</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Buồn tiểu đột ngột, dữ dội, không kịp vào nhà vệ sinh; tiểu đêm nhiều lần</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cả nam và nữ lớn tuổi</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tiểu són do tràn đầy</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tiểu rỉ liên tục, tia yếu, cảm giác tiểu không hết</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Nam giới phì đại tiền liệt tuyến, người tiểu đường lâu năm</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tiểu són chức năng</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Bàng quang bình thường nhưng không tới kịp nhà vệ sinh do đi lại khó, đãng trí</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Người thoái hóa khớp, sau tai biến, sa sút trí tuệ</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Nguyên nhân khiến ông bà bị tiểu són</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Cơ sàn chậu và cơ thắt niệu đạo yếu đi theo tuổi tác.</li>
  <li>Nhiễm trùng đường tiết niệu, táo bón kéo dài (phân chèn ép bàng quang).</li>
  <li>Phì đại tiền liệt tuyến ở nam giới.</li>
  <li>Bệnh lý thần kinh: tai biến mạch máu não, Parkinson, sa sút trí tuệ, tiểu đường.</li>
  <li>Một số thuốc như lợi tiểu, thuốc an thần, thuốc huyết áp; uống nhiều cà phê, trà, rượu bia.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Khi nào cần đưa người cao tuổi đi khám?</h2>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Đi khám sớm:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Nếu ông bà tiểu buốt, tiểu ra máu, sốt, đau hông lưng, bí tiểu (muốn tiểu mà không tiểu được), tiểu són xuất hiện đột ngột kèm lú lẫn, hoặc tiểu són làm ông bà ngại ra ngoài, mất ngủ vì tiểu đêm.</p>
</div>
<p>Khi đi khám, hãy chuẩn bị <b>nhật ký đi tiểu 3 ngày</b> (giờ uống nước, lượng uống, giờ đi tiểu, số lần rỉ) và <b>danh sách thuốc đang dùng</b>. Đây là thông tin bác sĩ cần để chẩn đoán đúng dạng tiểu són.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Cách chăm sóc người già bị tiểu són tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Tập cơ sàn chậu (bài tập Kegel):</b> siết cơ như đang nhịn tiểu, giữ vài giây rồi thả; tập đều mỗi ngày theo hướng dẫn của nhân viên y tế.</li>
  <li><b>Đi tiểu theo giờ:</b> nhắc ông bà đi vệ sinh định kỳ (ví dụ 2–3 giờ/lần), kéo giãn dần khoảng cách.</li>
  <li><b>Không cắt giảm nước uống:</b> uống quá ít làm nước tiểu đặc, dễ kích thích bàng quang và nhiễm trùng. Chỉ nên giảm uống vào buổi tối.</li>
  <li><b>Hạn chế cà phê, trà đặc, rượu bia</b> và phòng táo bón bằng rau xanh, vận động.</li>
  <li><b>Làm nhà vệ sinh dễ tiếp cận:</b> đèn ngủ chỉ đường, tay vịn, bô cạnh giường vào ban đêm, quần áo dễ cởi.</li>
  <li><b>Giữ thể diện cho ông bà:</b> dùng tấm lót, bỉm người lớn kín đáo; tránh trách mắng khiến ông bà xấu hổ.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE giúp gì cho ông bà bị tiểu són?</h2>
<p>Kiến Y tế của ANTCARE có nền tảng điều dưỡng, đến nhà hướng dẫn ông bà tập cơ sàn chậu, theo dõi nhật ký đi tiểu và nhận ra sớm dấu hiệu nhiễm trùng tiểu. Đội Kiến Nhà cửa đánh giá đường đi tới nhà vệ sinh, giảm nguy cơ té ngã khi ông bà dậy đêm. Khi cần, Kiến Y tế đồng hành đưa ông bà đi khám tiết niệu và ghi chép đầy đủ lời dặn bác sĩ cho gia đình.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về tiểu són ở người già</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Tiểu són ở người già có chữa khỏi được không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Nhiều trường hợp cải thiện rõ rệt hoặc kiểm soát tốt nhờ tập cơ sàn chậu, đi tiểu theo giờ, điều trị nguyên nhân và thuốc khi bác sĩ chỉ định. Mức độ cải thiện phụ thuộc vào dạng tiểu són và bệnh nền.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già tiểu són có nên uống ít nước không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Không nên. Uống quá ít làm nước tiểu đặc, dễ kích thích bàng quang, gây táo bón và nhiễm trùng tiểu. Nên uống đều trong ngày và giảm vào 2–3 giờ trước khi ngủ, trừ khi bác sĩ dặn khác.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Tiểu đêm nhiều lần ở người cao tuổi có nguy hiểm không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Tiểu đêm làm ông bà mất ngủ và tăng nguy cơ té ngã khi dậy trong bóng tối. Đây cũng có thể là dấu hiệu của tiểu đường, suy tim, phì đại tiền liệt tuyến, nên cần được khám.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Ông bà ngại nói, con cháu lại ở xa?</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Để Kiến Y tế của ANTCARE đến nhà theo dõi sức khỏe định kỳ và đồng hành đưa ông bà đi khám tiết niệu, trọn gói từ 390.000đ.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Gọi 0969 032 360
    </a>
    <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Xem dịch vụ đi khám
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/tieu-son-o-nguoi-cao-tuoi#webpage",
          "headline": "Tiểu són ở người cao tuổi: nguyên nhân, dấu hiệu và cách chăm sóc tại nhà",
          "url": "https://antcare.vn/news/tieu-son-o-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Tiểu són ở người già không phải \"tuổi già đương nhiên\". Tìm hiểu 4 dạng tiểu són, khi nào cần đi khám và cách chăm sóc giúp ông bà tự tin, sạch sẽ mỗi ngày.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Tiểu không tự chủ (tiểu són)"
          },
          "audience": {
            "@type": "PeopleAudience",
            "suggestedMinAge": 60
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/tieu-son-o-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Tiểu són ở người già có chữa khỏi được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nhiều trường hợp cải thiện rõ rệt hoặc kiểm soát tốt nhờ tập cơ sàn chậu, đi tiểu theo giờ, điều trị nguyên nhân và thuốc khi bác sĩ chỉ định."
              }
            },
            {
              "@type": "Question",
              "name": "Người già tiểu són có nên uống ít nước không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không nên. Uống quá ít làm nước tiểu đặc, dễ kích thích bàng quang, gây táo bón và nhiễm trùng tiểu. Nên uống đều trong ngày và giảm vào 2–3 giờ trước khi ngủ."
              }
            },
            {
              "@type": "Question",
              "name": "Tiểu đêm nhiều lần ở người cao tuổi có nguy hiểm không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tiểu đêm làm mất ngủ và tăng nguy cơ té ngã; cũng có thể là dấu hiệu của tiểu đường, suy tim hoặc phì đại tiền liệt tuyến nên cần được khám."
              }
            }
          ]
        }
      ]
    }
  },

  // 2. dang-tri-o-nguoi-gia
  {
    id: 153,
    slug: "dang-tri-o-nguoi-gia",
    oldSlugs: ["tin-tuc/dang-tri-o-nguoi-gia", "blog/dang-tri-o-nguoi-gia"],
    title: "Đãng trí ở người già: lão hóa bình thường hay dấu hiệu sa sút trí tuệ?",
    metaTitle: "Đãng trí ở người già: lão hóa bình thường hay sa sút trí tuệ? | ANTCARE",
    description: "Hay quên ở ông bà là bình thường hay dấu hiệu Alzheimer? Bảng phân biệt dễ hiểu, 10 dấu hiệu cảnh báo và cách giúp người thân giữ trí nhớ minh mẫn tại nhà.",
    excerpt: "Hay quên ở ông bà là bình thường hay dấu hiệu Alzheimer? Bảng phân biệt dễ hiểu, 10 dấu hiệu cảnh báo và cách giúp người thân giữ trí nhớ minh mẫn tại nhà.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Thần kinh – Trí nhớ",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "đãng trí ở người già, sa sút trí tuệ, Alzheimer, người già hay quên, rèn luyện trí nhớ",
    image: "/images/tin-tuc/sa-sut-tri-tue-nguoi-cao-tuoi.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Quên tên người quen rồi nhớ lại sau đó, thỉnh thoảng để nhầm chìa khóa là <b>lão hóa bình thường</b>. Nhưng nếu ông bà hỏi đi hỏi lại một chuyện, lạc đường ở nơi quen thuộc, không tự làm được việc hằng ngày hay thay đổi tính tình, đó có thể là <b>dấu hiệu sa sút trí tuệ</b> (trong đó Alzheimer là nguyên nhân hay gặp nhất). Cần đưa ông bà đi khám thần kinh hoặc lão khoa sớm, vì một số nguyên nhân gây hay quên có thể điều trị được.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/sa-sut-tri-tue-nguoi-cao-tuoi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/sa-sut-tri-tue-nguoi-cao-tuoi.jpg" alt="Phân biệt đãng trí tuổi già và dấu hiệu sa sút trí tuệ" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Nhận diện sớm các dấu hiệu sa sút trí tuệ giúp can thiệp và cải thiện chất lượng sống cho cha mẹ.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Phân biệt hay quên do tuổi tác và sa sút trí tuệ</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
    <thead>
      <tr style="background-color: #6633B4; color: #ffffff;">
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Lão hóa bình thường</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dấu hiệu đáng lo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Thỉnh thoảng quên tên, sau đó nhớ ra</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #B42318; font-weight: 600;">Quên chuyện vừa xảy ra, hỏi lặp lại nhiều lần trong ngày</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Để quên kính, chìa khóa nhưng lần lại được</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #B42318; font-weight: 600;">Cất đồ vào chỗ lạ (điện thoại trong tủ lạnh), nghi người khác lấy</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Chậm hơn khi làm việc mới</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #B42318; font-weight: 600;">Không tự làm được việc quen: nấu ăn, dùng điện thoại, tính tiền</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Quên ngày thứ, nhớ lại sau</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #B42318; font-weight: 600;">Nhầm lẫn thời gian, mùa, không biết mình đang ở đâu</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Đôi lúc khó tìm từ</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #B42318; font-weight: 600;">Nói ngắt quãng, gọi sai tên đồ vật thường xuyên</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tâm trạng ổn định</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #B42318; font-weight: 600;">Thay đổi tính cách: cáu gắt, nghi ngờ, thờ ơ, thu mình</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Nguyên nhân gây đãng trí ở người cao tuổi</h2>
<p>Ngoài bệnh Alzheimer và sa sút trí tuệ mạch máu (sau tai biến, do tăng huyết áp lâu năm), nhiều nguyên nhân <b>có thể điều trị được</b> cũng gây hay quên:</p>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Thiếu vitamin B12, suy giáp, thiếu máu.</li>
  <li>Trầm cảm, mất ngủ kéo dài.</li>
  <li>Tác dụng phụ thuốc ngủ, thuốc an thần, thuốc chống dị ứng thế hệ cũ.</li>
  <li>Nghe kém, nhìn kém khiến ông bà khó tiếp nhận thông tin.</li>
  <li>Nhiễm trùng (nhất là nhiễm trùng tiểu) gây lú lẫn đột ngột.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Khi nào cần đưa ông bà đi khám?</h2>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Đi cấp cứu ngay (gọi 115):</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Nếu ông bà đột ngột lú lẫn, nói khó, méo miệng, yếu tay chân một bên – đây có thể là đột quỵ. Đi khám chuyên khoa sớm nếu tình trạng hay quên tăng dần trong vài tháng hoặc ảnh hưởng sinh hoạt hằng ngày.</p>
</div>
<p>Bác sĩ thường đánh giá trí nhớ bằng các bài trắc nghiệm ngắn, xét nghiệm máu và chụp não khi cần. Người nhà nên đi cùng để kể lại những thay đổi mình quan sát được – thông tin này rất quan trọng.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Cách giúp người già giữ trí nhớ minh mẫn tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Vận động đều đặn:</b> đi bộ, tập dưỡng sinh giúp tăng tuần hoàn não.</li>
  <li><b>Rèn luyện trí não bằng hoạt động có mục đích:</b> chơi cờ, ghép hình, làm đồ thủ công, trồng cây – nhất là việc tạo ra thành phẩm khiến ông bà thấy mình còn có ích.</li>
  <li><b>Giữ kết nối xã hội:</b> trò chuyện, gặp bạn bè, gọi video cho con cháu.</li>
  <li><b>Kiểm soát huyết áp, đường huyết, mỡ máu</b> – bảo vệ mạch máu não.</li>
  <li><b>Sắp xếp nhà cửa đơn giản:</b> lịch treo tường lớn, hộp chia thuốc theo ngày, dán nhãn ngăn tủ.</li>
  <li><b>Kiên nhẫn:</b> không tranh cãi khi ông bà nhớ sai; nhẹ nhàng nhắc lại và chuyển hướng câu chuyện.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE đồng hành thế nào với người cao tuổi hay quên?</h2>
<p>Kiến Y tế đến nhà định kỳ trò chuyện, theo dõi những thay đổi về trí nhớ và tinh thần, nhắc uống thuốc đúng giờ và báo lại cho gia đình. ANTCARE cũng có bộ <b>bảng hoạt động rèn luyện trí não</b> theo phương pháp Montessori dành riêng cho người cao tuổi, được làm từ vật liệu tự nhiên như dây bèo, gỗ cao su – vừa luyện tay, luyện trí, vừa tạo ra món quà ông bà tự tay làm tặng con cháu.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về đãng trí ở người già</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già hay quên có phải bị Alzheimer không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Không phải lúc nào cũng vậy. Hay quên nhẹ là bình thường theo tuổi. Chỉ khi trí nhớ suy giảm tăng dần và ảnh hưởng sinh hoạt mới cần nghĩ đến sa sút trí tuệ, và cần bác sĩ chẩn đoán.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Sa sút trí tuệ có chữa được không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Phần lớn các dạng sa sút trí tuệ như Alzheimer chưa chữa khỏi, nhưng phát hiện sớm giúp làm chậm tiến triển, kiểm soát triệu chứng và giúp gia đình chuẩn bị chăm sóc tốt hơn. Một số nguyên nhân gây hay quên như thiếu B12, suy giáp, trầm cảm có thể điều trị được.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Có nên để người già đãng trí ở nhà một mình?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Tùy mức độ. Ở giai đoạn sớm, ông bà vẫn có thể sinh hoạt độc lập nếu nhà cửa an toàn và có người kiểm tra định kỳ. Khi ông bà hay quên tắt bếp, đi lạc hoặc uống nhầm thuốc, cần có người hỗ trợ thường xuyên hơn.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Bố mẹ dạo này hay quên mà con chưa có thời gian để ý?</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Gói Trợ lý Sức khỏe ANTCARE giúp con có "đôi mắt" ở cạnh bố mẹ: Quan Tâm (990k/tháng), Chăm Sóc (1.750k/tháng), Yêu Thương (3.190k/tháng).</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Tư vấn 0969 032 360
    </a>
    <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Tìm hiểu ANTCARE
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/dang-tri-o-nguoi-gia#webpage",
          "headline": "Đãng trí ở người già: lão hóa bình thường hay dấu hiệu sa sút trí tuệ?",
          "url": "https://antcare.vn/news/dang-tri-o-nguoi-gia",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Hay quên ở ông bà là bình thường hay dấu hiệu Alzheimer? Bảng phân biệt dễ hiểu, 10 dấu hiệu cảnh báo và cách giúp người thân giữ trí nhớ minh mẫn tại nhà.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Sa sút trí tuệ"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/dang-tri-o-nguoi-gia#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người già hay quên có phải bị Alzheimer không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không phải lúc nào cũng vậy. Hay quên nhẹ là bình thường theo tuổi. Chỉ khi trí nhớ suy giảm tăng dần và ảnh hưởng sinh hoạt mới cần nghĩ đến sa sút trí tuệ và cần bác sĩ chẩn đoán."
              }
            },
            {
              "@type": "Question",
              "name": "Sa sút trí tuệ có chữa được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Phần lớn chưa chữa khỏi, nhưng phát hiện sớm giúp làm chậm tiến triển và kiểm soát triệu chứng. Một số nguyên nhân gây hay quên như thiếu B12, suy giáp, trầm cảm có thể điều trị được."
              }
            },
            {
              "@type": "Question",
              "name": "Có nên để người già đãng trí ở nhà một mình?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ở giai đoạn sớm có thể nếu nhà an toàn và có người kiểm tra định kỳ. Khi ông bà hay quên tắt bếp, đi lạc hoặc uống nhầm thuốc thì cần người hỗ trợ thường xuyên hơn."
              }
            }
          ]
        }
      ]
    }
  },

  // 3. tang-huyet-ap-nguoi-cao-tuoi
  {
    id: 154,
    slug: "tang-huyet-ap-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/tang-huyet-ap-nguoi-cao-tuoi", "blog/tang-huyet-ap-nguoi-cao-tuoi"],
    title: "Tăng huyết áp ở người cao tuổi: chỉ số bao nhiêu là cao và cách kiểm soát tại nhà",
    metaTitle: "Tăng huyết áp ở người cao tuổi: chỉ số, dấu hiệu và cách kiểm soát | ANTCARE",
    description: "Huyết áp bao nhiêu là cao ở người già? Cách đo huyết áp đúng tại nhà, dấu hiệu cấp cứu và 6 thói quen giúp ông bà kiểm soát huyết áp ổn định.",
    excerpt: "Huyết áp bao nhiêu là cao ở người già? Cách đo huyết áp đúng tại nhà, dấu hiệu cấp cứu và 6 thói quen giúp ông bà kiểm soát huyết áp ổn định.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Tim mạch",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "tăng huyết áp người cao tuổi, huyết áp người già bao nhiêu là bình thường, cách đo huyết áp tại nhà",
    image: "/images/tin-tuc/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Theo khuyến cáo phổ biến tại Việt Nam, huyết áp đo tại phòng khám <b>từ 140/90 mmHg trở lên</b> được coi là tăng huyết áp (đo tại nhà thường lấy mốc 135/85 mmHg). Người cao tuổi thường không có triệu chứng rõ, vì vậy bệnh được gọi là "kẻ giết người thầm lặng". Cách tốt nhất là <b>đo huyết áp đều đặn, uống thuốc đúng chỉ định, ăn nhạt và vận động vừa sức</b>. Mục tiêu huyết áp cụ thể cho từng người do bác sĩ quyết định.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet.jpg" alt="Đo và kiểm soát tăng huyết áp cho người cao tuổi tại nhà" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Đo huyết áp hằng ngày đúng phương pháp là lá chắn bảo vệ tim mạch cho người cao tuổi.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao người già dễ bị tăng huyết áp?</h2>
<p>Theo tuổi, thành mạch máu cứng dần, kém đàn hồi nên huyết áp – đặc biệt là huyết áp tâm thu (số trên) – có xu hướng tăng. Ăn mặn, ít vận động, thừa cân, tiểu đường, bệnh thận, căng thẳng và mất ngủ khiến tình trạng này nặng thêm.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu tăng huyết áp ở người già</h2>
<p>Đa số không có biểu hiện. Một số ông bà có thể thấy đau đầu vùng gáy, chóng mặt, ù tai, hoa mắt, mệt mỏi, khó ngủ. <b>Không nên đợi có triệu chứng mới đo huyết áp.</b></p>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Gọi cấp cứu 115 ngay:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Nếu huyết áp rất cao kèm đau ngực, khó thở, đau đầu dữ dội, nhìn mờ đột ngột, nói khó, méo miệng hoặc yếu liệt tay chân.</p>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Cách đo huyết áp đúng tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li>Ngồi nghỉ yên 5 phút, không uống cà phê, không hút thuốc, không vận động 30 phút trước khi đo.</li>
  <li>Ngồi tựa lưng, hai chân chạm sàn, không bắt chéo; tay đặt trên bàn ngang mức tim.</li>
  <li>Quấn bao đo sát da, cách nếp khuỷu tay khoảng 2 cm; không nói chuyện khi đo.</li>
  <li>Đo 2 lần cách nhau 1–2 phút, ghi lại cả hai, đo vào buổi sáng và buổi tối.</li>
  <li>Ghi sổ (ngày, giờ, chỉ số, nhịp tim) và mang theo khi đi tái khám.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">6 thói quen giúp người cao tuổi kiểm soát huyết áp</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li><b>Ăn nhạt:</b> giảm nước mắm, dưa cà, đồ ăn chế biến sẵn; nêm nếm bằng chanh, tỏi, rau thơm.</li>
  <li><b>Nhiều rau xanh, trái cây, ngũ cốc nguyên hạt</b> (trừ khi bác sĩ hạn chế kali do bệnh thận).</li>
  <li><b>Vận động vừa sức</b> như đi bộ, dưỡng sinh khoảng 30 phút/ngày.</li>
  <li><b>Uống thuốc đều mỗi ngày</b>, kể cả khi huyết áp đã ổn; không tự ý ngừng hay đổi liều.</li>
  <li><b>Đứng dậy từ từ</b> để tránh hạ huyết áp tư thế – nguyên nhân gây choáng, té ngã ở người dùng thuốc huyết áp.</li>
  <li><b>Ngủ đủ, hạn chế rượu bia, bỏ thuốc lá.</b></li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE hỗ trợ ông bà bị tăng huyết áp thế nào?</h2>
<p>Trong mỗi lượt thăm nhà, Kiến Y tế đo huyết áp, nhịp tim, đường huyết, kiểm tra hộp thuốc, nhắc lịch tái khám và gửi kết quả cho con cháu. Khi chỉ số bất thường, ANTCARE báo ngay cho gia đình và đồng hành đưa ông bà đi khám tim mạch.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về huyết áp người cao tuổi</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Huyết áp người già bao nhiêu là bình thường?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Huyết áp dưới 140/90 mmHg (đo tại phòng khám) thường được xem là chưa tăng. Tuy nhiên mục tiêu điều trị ở người cao tuổi được bác sĩ cá thể hóa theo sức khỏe, bệnh nền và nguy cơ té ngã.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Huyết áp ổn rồi có được ngừng thuốc không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Không tự ý ngừng. Huyết áp ổn thường là nhờ thuốc; ngừng đột ngột có thể khiến huyết áp tăng vọt. Mọi điều chỉnh cần hỏi ý kiến bác sĩ.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nên dùng máy đo huyết áp loại nào cho người già?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Máy đo điện tử bắp tay thường cho kết quả ổn định và dễ dùng hơn máy đo cổ tay. Nên chọn máy có màn hình lớn, bao quấn vừa cỡ tay và mang máy đi đối chiếu với máy của phòng khám.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Theo dõi huyết áp cho bố mẹ, ngay cả khi con ở xa</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Kiến Y tế đến nhà đo chỉ số, nhắc thuốc và báo kết quả cho gia đình. Gói Trợ lý Sức khỏe chỉ từ 990.000đ/tháng.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Gọi 0969 032 360
    </a>
    <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Xem các gói chăm sóc
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/tang-huyet-ap-nguoi-cao-tuoi#webpage",
          "headline": "Tăng huyết áp ở người cao tuổi: chỉ số bao nhiêu là cao và cách kiểm soát tại nhà",
          "url": "https://antcare.vn/news/tang-huyet-ap-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Huyết áp bao nhiêu là cao ở người già? Cách đo huyết áp đúng tại nhà, dấu hiệu cấp cứu và 6 thói quen giúp ông bà kiểm soát huyết áp ổn định.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Tăng huyết áp"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/tang-huyet-ap-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Huyết áp người già bao nhiêu là bình thường?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Huyết áp dưới 140/90 mmHg đo tại phòng khám thường được xem là chưa tăng; mục tiêu điều trị ở người cao tuổi do bác sĩ cá thể hóa."
              }
            },
            {
              "@type": "Question",
              "name": "Huyết áp ổn rồi có được ngừng thuốc không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không tự ý ngừng. Ngừng đột ngột có thể khiến huyết áp tăng vọt; mọi điều chỉnh cần hỏi ý kiến bác sĩ."
              }
            },
            {
              "@type": "Question",
              "name": "Nên dùng máy đo huyết áp loại nào cho người già?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Máy đo điện tử bắp tay thường ổn định và dễ dùng hơn máy cổ tay; nên chọn màn hình lớn và bao quấn vừa cỡ tay."
              }
            }
          ]
        }
      ]
    }
  },

  // 4. tieu-duong-o-nguoi-cao-tuoi
  {
    id: 155,
    slug: "tieu-duong-o-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/tieu-duong-o-nguoi-cao-tuoi", "blog/tieu-duong-o-nguoi-cao-tuoi"],
    title: "Tiểu đường ở người cao tuổi: dấu hiệu, biến chứng và cách chăm sóc tại nhà",
    metaTitle: "Tiểu đường ở người cao tuổi: dấu hiệu, biến chứng và chăm sóc | ANTCARE",
    description: "Dấu hiệu tiểu đường type 2 ở người già thường mờ nhạt. Tìm hiểu chỉ số đường huyết, biến chứng cần phòng, cách chăm sóc bàn chân và xử trí hạ đường huyết tại nhà.",
    excerpt: "Dấu hiệu tiểu đường type 2 ở người già thường mờ nhạt. Tìm hiểu chỉ số đường huyết, biến chứng cần phòng, cách chăm sóc bàn chân và xử trí hạ đường huyết tại nhà.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Nội tiết",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "tiểu đường ở người cao tuổi, đái tháo đường type 2 người già, hạ đường huyết, chăm sóc bàn chân tiểu đường",
    image: "/images/tin-tuc/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Tiểu đường (đái tháo đường) type 2 rất phổ biến ở người trên 60 tuổi nhưng triệu chứng thường mờ nhạt: mệt mỏi, khát nước, tiểu nhiều, sụt cân, vết thương lâu lành. Bệnh được chẩn đoán khi đường huyết lúc đói <b>≥ 7,0 mmol/L</b> hoặc HbA1c <b>≥ 6,5%</b> (bác sĩ xác nhận). Với người cao tuổi, mục tiêu là <b>giữ đường huyết ổn định, tránh hạ đường huyết và phòng biến chứng</b> ở mắt, thận, tim mạch và bàn chân.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly.jpg" alt="Tiểu đường ở người già - dấu hiệu và quản lý biến chứng" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Quản lý tiểu đường ở người cao tuổi cần chú trọng đặc biệt đến việc phòng hạ đường huyết và chăm sóc bàn chân.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu tiểu đường ở người già</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Khát nhiều, tiểu nhiều, hay tiểu đêm.</li>
  <li>Mệt mỏi, sụt cân không rõ lý do.</li>
  <li>Nhìn mờ, tê bì châm chích bàn chân.</li>
  <li>Vết thương, vết loét lâu lành; hay bị nhiễm trùng da, tiết niệu.</li>
</ul>
<p>Nhiều ông bà chỉ phát hiện bệnh khi khám sức khỏe định kỳ hoặc khi đã có biến chứng. Vì vậy người trên 45 tuổi, nhất là người thừa cân, tăng huyết áp, nên xét nghiệm đường huyết định kỳ.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Biến chứng tiểu đường cần phòng ngừa</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
    <thead>
      <tr style="background-color: #6633B4; color: #ffffff;">
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cơ quan</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Biến chứng</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cách phòng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Mắt</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Bệnh võng mạc, đục thủy tinh thể</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Khám mắt định kỳ hằng năm</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Thận</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Suy thận</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Xét nghiệm nước tiểu, chức năng thận theo hẹn</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tim, não</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Nhồi máu cơ tim, đột quỵ</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Kiểm soát huyết áp, mỡ máu, bỏ thuốc lá</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Bàn chân</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Loét, nhiễm trùng, nguy cơ cắt cụt</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Kiểm tra chân mỗi ngày, đi giày vừa</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Hạ đường huyết – nguy hiểm thường bị bỏ qua</h2>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Dấu hiệu hạ đường huyết:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Run tay, vã mồ hôi, đói cồn cào, hồi hộp, chóng mặt, lú lẫn, nói lắp. Nếu ông bà còn tỉnh, cho uống ngay nước đường hoặc nước trái cây, sau đó đo lại đường huyết và báo bác sĩ. Nếu ông bà <b>lơ mơ, không nuốt được, co giật – gọi 115 ngay, không cố đổ nước vào miệng.</b></p>
</div>
<p>Người cao tuổi dùng insulin hoặc một số thuốc hạ đường huyết, ăn uống thất thường hay bỏ bữa có nguy cơ cao. Hạ đường huyết còn làm tăng nguy cơ té ngã.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Chăm sóc người già bị tiểu đường tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Ăn đúng bữa, đều giờ:</b> ưu tiên rau xanh, đạm nạc, cơm vừa phải, hạn chế đồ ngọt và nước ngọt; không bỏ bữa.</li>
  <li><b>Đo đường huyết theo lịch bác sĩ dặn</b> và ghi sổ.</li>
  <li><b>Uống thuốc, tiêm insulin đúng giờ, đúng liều.</b></li>
  <li><b>Kiểm tra bàn chân mỗi tối:</b> tìm vết xước, phồng rộp, đổi màu; lau khô kẽ chân, cắt móng thẳng.</li>
  <li><b>Đi bộ nhẹ sau ăn</b> 15–20 phút nếu sức khỏe cho phép.</li>
  <li><b>Tái khám đúng hẹn</b> và khám mắt, thận định kỳ.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE giúp gia đình quản lý tiểu đường cho ông bà</h2>
<p>Kiến Y tế đo đường huyết, huyết áp tại nhà, kiểm tra bàn chân, nhắc lịch thuốc và tái khám, đồng thời hướng dẫn người chăm sóc nhận biết hạ đường huyết. Mỗi lần tái khám, Kiến Y tế có thể đồng hành cùng ông bà từ lúc đón tại nhà đến khi lấy thuốc, ghi lại lời dặn của bác sĩ cho gia đình.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về tiểu đường ở người cao tuổi</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già bị tiểu đường có ăn được trái cây không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Có, nhưng nên ăn lượng vừa phải, chia nhỏ trong ngày, ưu tiên trái cây ít ngọt như ổi, bưởi, táo; hạn chế nước ép và trái cây sấy, rất ngọt.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Đường huyết người cao tuổi bao nhiêu là ổn?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Mục tiêu ở người cao tuổi thường nới lỏng hơn người trẻ để tránh hạ đường huyết. Con số cụ thể tùy sức khỏe từng người và do bác sĩ đặt ra.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Tiểu đường type 2 có chữa khỏi được không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Bệnh thường cần quản lý lâu dài. Một số người kiểm soát rất tốt nhờ ăn uống, vận động, giảm cân và thuốc; điều quan trọng là theo dõi đều và phòng biến chứng.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đồng hành tái khám tiểu đường – con không phải xin nghỉ làm</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Kiến Y tế có nền tảng điều dưỡng đón ông bà tại nhà, làm thủ tục, đưa đi xét nghiệm và báo kết quả cho gia đình. Gói đến 3 giờ chỉ 390.000đ.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      Đặt lịch đi khám
    </a>
    <a href="tel:0969032360" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      📞 0969 032 360
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/tieu-duong-o-nguoi-cao-tuoi#webpage",
          "headline": "Tiểu đường ở người cao tuổi: dấu hiệu, biến chứng và cách chăm sóc tại nhà",
          "url": "https://antcare.vn/news/tieu-duong-o-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Dấu hiệu tiểu đường type 2 ở người già thường mờ nhạt. Tìm hiểu chỉ số đường huyết, biến chứng cần phòng, cách chăm sóc bàn chân và xử trí hạ đường huyết tại nhà.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Đái tháo đường type 2"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/tieu-duong-o-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người già bị tiểu đường có ăn được trái cây không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có, nhưng ăn lượng vừa phải, chia nhỏ trong ngày, ưu tiên trái cây ít ngọt như ổi, bưởi, táo; hạn chế nước ép và trái cây sấy."
              }
            },
            {
              "@type": "Question",
              "name": "Đường huyết người cao tuổi bao nhiêu là ổn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mục tiêu thường nới lỏng hơn người trẻ để tránh hạ đường huyết; con số cụ thể do bác sĩ đặt theo sức khỏe từng người."
              }
            },
            {
              "@type": "Question",
              "name": "Tiểu đường type 2 có chữa khỏi được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bệnh thường cần quản lý lâu dài; nhiều người kiểm soát tốt nhờ ăn uống, vận động, giảm cân và thuốc."
              }
            }
          ]
        }
      ]
    }
  },

  // 5. loang-xuong-va-te-nga-o-nguoi-gia
  {
    id: 156,
    slug: "loang-xuong-va-te-nga-o-nguoi-gia",
    oldSlugs: ["tin-tuc/loang-xuong-va-te-nga-o-nguoi-gia", "blog/loang-xuong-va-te-nga-o-nguoi-gia"],
    title: "Loãng xương và té ngã ở người già: dấu hiệu, nguy cơ và cách phòng tránh",
    metaTitle: "Loãng xương và té ngã ở người già: dấu hiệu và cách phòng tránh | ANTCARE",
    description: "Loãng xương thường \"im lặng\" cho đến khi gãy xương. Dấu hiệu nhận biết, khi nào cần đo mật độ xương và checklist làm nhà an toàn chống té ngã cho ông bà.",
    excerpt: "Loãng xương thường \"im lặng\" cho đến khi gãy xương. Dấu hiệu nhận biết, khi nào cần đo mật độ xương và checklist làm nhà an toàn chống té ngã cho ông bà.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Cơ xương khớp",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "loãng xương ở người già, phòng té ngã người cao tuổi, gãy cổ xương đùi, đo mật độ xương",
    image: "/images/tin-tuc/loang-xuong-o-nguoi-cao-tuoi-phong-ngua.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Loãng xương là tình trạng xương mỏng, giòn, dễ gãy – thường không có triệu chứng cho đến khi ông bà <b>bị gãy xương sau một cú ngã nhẹ</b>, hay gặp nhất ở cổ xương đùi, cột sống và cổ tay. Phòng ngừa cần làm đồng thời hai việc: <b>giữ xương chắc</b> (canxi, vitamin D, vận động, điều trị theo chỉ định) và <b>phòng té ngã</b> (nhà an toàn, tập thăng bằng, rà soát thuốc gây chóng mặt).
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/loang-xuong-o-nguoi-cao-tuoi-phong-ngua.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/loang-xuong-o-nguoi-cao-tuoi-phong-ngua.jpg" alt="Phòng ngừa loãng xương và giảm thiểu rủi ro té ngã ở người cao tuổi" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Phòng chống té ngã trong nhà là biện pháp sống còn để bảo vệ người lớn tuổi bị loãng xương.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu loãng xương ở người cao tuổi</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Giảm chiều cao, lưng còng dần.</li>
  <li>Đau lưng âm ỉ hoặc đau đột ngột (có thể do lún xẹp đốt sống).</li>
  <li>Gãy xương sau va chạm nhẹ, ngã từ tư thế đứng.</li>
</ul>
<p>Phụ nữ sau mãn kinh, người gầy, ít vận động, hút thuốc, uống rượu, dùng corticoid lâu ngày có nguy cơ cao. Bác sĩ có thể chỉ định <b>đo mật độ xương (DEXA)</b> để chẩn đoán.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao té ngã ở người già lại nguy hiểm?</h2>
<p>Một cú ngã có thể gây gãy cổ xương đùi, chấn thương đầu, khiến ông bà phải nằm lâu, dẫn đến loét, viêm phổi, yếu cơ và mất khả năng tự đi lại. Nhiều người sau lần ngã đầu tiên trở nên sợ đi lại, ít vận động hơn – và lại càng dễ ngã.</p>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Sau khi ông bà ngã:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Không vội kéo dậy. Kiểm tra xem ông bà có đau dữ dội ở hông, không cử động được chân, đầu bị va đập, nôn, lơ mơ hay không. Nếu có, giữ nguyên tư thế, giữ ấm và gọi 115.</p>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Checklist nhà an toàn chống té ngã</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
    <thead>
      <tr style="background-color: #6633B4; color: #ffffff;">
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Khu vực</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Việc nên làm</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Nhà tắm, nhà vệ sinh</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Thảm chống trơn, tay vịn cạnh bồn cầu và vòi sen, ghế ngồi tắm</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Phòng ngủ</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Giường vừa tầm (ngồi chân chạm đất), đèn ngủ, đèn cảm ứng trên đường đi vệ sinh</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Lối đi</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dọn dây điện, thảm mép quăn, đồ đạc vướng víu; đủ ánh sáng</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Cầu thang</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tay vịn hai bên, dán viền phản quang mép bậc</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Bản thân ông bà</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dép đế chống trơn ôm gót, khám mắt, dùng gậy/khung tập đi nếu cần</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Giữ xương chắc khỏe cho người cao tuổi</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Đủ canxi từ thực phẩm:</b> sữa, sữa chua, đậu phụ, cá nhỏ ăn cả xương, rau lá xanh đậm.</li>
  <li><b>Vitamin D:</b> tắm nắng sáng sớm ngắn; bổ sung viên uống chỉ khi bác sĩ chỉ định.</li>
  <li><b>Tập thăng bằng và sức cơ:</b> đi bộ, dưỡng sinh, đứng một chân có vịn – giảm nguy cơ ngã rõ rệt.</li>
  <li><b>Rà soát thuốc:</b> thuốc ngủ, thuốc an thần, thuốc huyết áp có thể gây chóng mặt – hỏi bác sĩ khi ông bà hay choáng.</li>
  <li><b>Điều trị loãng xương đúng phác đồ</b> nếu đã được chẩn đoán.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dịch vụ "An tâm cửa nhà" của ANTCARE</h2>
<p>Đội Kiến Nhà cửa của ANTCARE đến <b>đánh giá rủi ro té ngã trong nhà</b>, chỉ ra từng điểm nguy hiểm và đề xuất cách khắc phục phù hợp ngân sách gia đình, kết hợp dọn dẹp hỗ trợ. Kiến Y tế hướng dẫn ông bà bài tập thăng bằng theo chuẩn Senior Fitness trong các lượt thăm nhà định kỳ.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về loãng xương và té ngã</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già có nên uống canxi mỗi ngày không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Nên ưu tiên canxi từ thực phẩm. Việc uống viên canxi, vitamin D và liều lượng cần hỏi bác sĩ, vì bổ sung không đúng có thể gây táo bón hoặc ảnh hưởng thận ở một số người.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Gãy cổ xương đùi ở người già có nguy hiểm không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Đây là chấn thương nặng, thường cần phẫu thuật sớm và phục hồi chức năng để ông bà sớm đi lại, tránh biến chứng do nằm lâu.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Làm sao biết ông bà có nguy cơ té ngã cao?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Ông bà đã từng ngã, đi lại loạng choạng, phải vịn đồ đạc, đứng dậy khó, dùng nhiều thuốc hoặc nhìn kém là những dấu hiệu nguy cơ cao, nên được đánh giá và can thiệp sớm.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Một lần đánh giá nhà – nhiều năm an tâm</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Đặt lịch Kiến Nhà cửa đến rà soát nguy cơ té ngã và tư vấn cải tạo đơn giản cho nhà của bố mẹ.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Đặt lịch 0969 032 360
    </a>
    <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Dịch vụ An tâm cửa nhà
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/loang-xuong-va-te-nga-o-nguoi-gia#webpage",
          "headline": "Loãng xương và té ngã ở người già: dấu hiệu, nguy cơ và cách phòng tránh",
          "url": "https://antcare.vn/news/loang-xuong-va-te-nga-o-nguoi-gia",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Loãng xương thường \"im lặng\" cho đến khi gãy xương. Dấu hiệu nhận biết, khi nào cần đo mật độ xương và checklist làm nhà an toàn chống té ngã cho ông bà.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Loãng xương"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/loang-xuong-va-te-nga-o-nguoi-gia#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người già có nên uống canxi mỗi ngày không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nên ưu tiên canxi từ thực phẩm; uống viên canxi, vitamin D và liều lượng cần hỏi bác sĩ."
              }
            },
            {
              "@type": "Question",
              "name": "Gãy cổ xương đùi ở người già có nguy hiểm không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Đây là chấn thương nặng, thường cần phẫu thuật sớm và phục hồi chức năng để tránh biến chứng do nằm lâu."
              }
            },
            {
              "@type": "Question",
              "name": "Làm sao biết ông bà có nguy cơ té ngã cao?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Đã từng ngã, đi loạng choạng, phải vịn đồ đạc, đứng dậy khó, dùng nhiều thuốc hoặc nhìn kém là dấu hiệu nguy cơ cao."
              }
            }
          ]
        }
      ]
    }
  },

  // 6. thoai-hoa-khop-goi-nguoi-cao-tuoi
  {
    id: 157,
    slug: "thoai-hoa-khop-goi-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/thoai-hoa-khop-goi-nguoi-cao-tuoi", "blog/thoai-hoa-khop-goi-nguoi-cao-tuoi"],
    title: "Thoái hóa khớp gối ở người cao tuổi: triệu chứng, cách giảm đau và bài tập phù hợp",
    metaTitle: "Thoái hóa khớp gối ở người cao tuổi: triệu chứng và cách giảm đau | ANTCARE",
    description: "Đau gối khi đứng lên, lục khục khi đi lại – dấu hiệu thoái hóa khớp gối. Cách giảm đau an toàn, bài tập nhẹ nhàng và những điều nên tránh cho ông bà.",
    excerpt: "Đau gối khi đứng lên, lục khục khi đi lại – dấu hiệu thoái hóa khớp gối. Cách giảm đau an toàn, bài tập nhẹ nhàng và những điều nên tránh cho ông bà.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Cơ xương khớp",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "thoái hóa khớp gối người cao tuổi, đau khớp gối người già, bài tập cho người thoái hóa khớp",
    image: "/images/tin-tuc/che-do-an-cho-nguoi-benh-xuong-khop.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Thoái hóa khớp gối là tình trạng sụn khớp mòn dần theo tuổi, gây <b>đau khi vận động, cứng khớp buổi sáng, tiếng lục khục khi co duỗi</b>. Bệnh không "chữa dứt" được nhưng kiểm soát tốt nhờ <b>vận động đúng cách, giữ cân nặng hợp lý, tập mạnh cơ đùi</b> và dùng thuốc theo chỉ định. Không nên tự dùng thuốc giảm đau, thuốc "gia truyền" không rõ nguồn gốc.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/che-do-an-cho-nguoi-benh-xuong-khop.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/che-do-an-cho-nguoi-benh-xuong-khop.jpg" alt="Chăm sóc và bài tập cho người cao tuổi bị thoái hóa khớp gối" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Tập luyện cơ đùi nhẹ nhàng mỗi ngày giúp giải tỏa áp lực đè nặng lên khớp gối.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Triệu chứng thoái hóa khớp gối</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Đau khi đứng lên ngồi xuống, leo cầu thang; đỡ đau khi nghỉ.</li>
  <li>Cứng khớp buổi sáng, thường dưới 30 phút.</li>
  <li>Lục khục, lạo xạo khi co duỗi gối.</li>
  <li>Gối sưng nhẹ, về lâu dài có thể biến dạng (chân vòng kiềng).</li>
</ul>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Cần khám ngay:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Nếu gối sưng nóng đỏ đột ngột, sốt, đau dữ dội không đi được, hoặc đau sau té ngã – có thể là viêm nhiễm, gút hoặc chấn thương, không phải thoái hóa đơn thuần.</p>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Cách giảm đau khớp gối an toàn tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Chườm ấm</b> khi khớp cứng, đau âm ỉ; <b>chườm mát</b> ngắn khi khớp sưng sau vận động nhiều.</li>
  <li><b>Giảm tải cho khớp:</b> tránh ngồi xổm, quỳ, leo nhiều bậc; dùng bồn cầu bệt, ghế cao vừa tầm.</li>
  <li><b>Dùng gậy</b> ở tay bên đối diện gối đau khi cần.</li>
  <li><b>Giữ cân nặng hợp lý</b> – mỗi kg thừa làm khớp gối chịu thêm áp lực khi đi lại.</li>
  <li><b>Dùng thuốc theo chỉ định:</b> nhiều thuốc giảm đau chống viêm ảnh hưởng dạ dày, thận, huyết áp – người cao tuổi đặc biệt cần thận trọng.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Bài tập nhẹ cho người thoái hóa khớp gối</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
    <thead>
      <tr style="background-color: #6633B4; color: #ffffff;">
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Bài tập</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cách làm</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Duỗi gối khi ngồi</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Ngồi ghế, duỗi thẳng từng chân, giữ vài giây, hạ xuống; lặp lại 10 lần mỗi bên</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Siết cơ đùi</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Nằm hoặc ngồi duỗi chân, kê khăn dưới gối, ấn gối xuống khăn, giữ 5 giây</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Đạp xe tại chỗ / đi bộ dưới nước</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Vận động khớp nhịp nhàng mà ít chịu lực</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Đi bộ trên đường bằng</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Quãng ngắn, tăng dần; tránh dốc, cầu thang nhiều</td>
      </tr>
    </tbody>
  </table>
</div>
<p>Tập khi khớp không sưng đau cấp; nếu đau tăng sau tập, hãy giảm mức độ và hỏi ý kiến bác sĩ hoặc kỹ thuật viên phục hồi chức năng.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE đồng hành cùng ông bà đau khớp</h2>
<p>Kiến Y tế hướng dẫn và cùng ông bà tập các bài vận động chuẩn Senior Fitness tại nhà, theo dõi mức độ đau, nhắc dùng thuốc đúng chỉ định. Khi cần khám cơ xương khớp hay vật lý trị liệu, dịch vụ <b>Đồng hành đi khám</b> giúp ông bà không phải tự đi lại, xếp hàng vất vả với đôi gối đau.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về thoái hóa khớp gối</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Thoái hóa khớp gối có nên đi bộ không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Có. Đi bộ vừa sức trên đường bằng giúp khớp được nuôi dưỡng và cơ đùi khỏe hơn. Nên chia thành nhiều quãng ngắn, đi giày êm và tránh leo dốc, cầu thang nhiều.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già thoái hóa khớp có cần uống thuốc bổ khớp không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Hiệu quả của các sản phẩm "bổ khớp" chưa rõ ràng với nhiều người. Hãy hỏi bác sĩ trước khi dùng, tránh tốn kém và tương tác thuốc.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Khi nào cần thay khớp gối?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Khi khớp hư nặng, đau nhiều ảnh hưởng sinh hoạt dù đã điều trị đầy đủ, bác sĩ chuyên khoa sẽ cân nhắc phẫu thuật thay khớp tùy tình trạng sức khỏe chung.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Gối đau, đường xa – đã có Kiến Y tế đi cùng</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Đón tận nhà, hỗ trợ di chuyển, làm thủ tục và ghi chép lời dặn bác sĩ. Trọn gói từ 390.000đ, phục vụ Hà Nội và các tỉnh miền Bắc.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      Đặt lịch đi khám
    </a>
    <a href="tel:0969032360" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      📞 0969 032 360
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/thoai-hoa-khop-goi-nguoi-cao-tuoi#webpage",
          "headline": "Thoái hóa khớp gối ở người cao tuổi: triệu chứng, cách giảm đau và bài tập phù hợp",
          "url": "https://antcare.vn/news/thoai-hoa-khop-goi-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Đau gối khi đứng lên, lục khục khi đi lại – dấu hiệu thoái hóa khớp gối. Cách giảm đau an toàn, bài tập nhẹ nhàng và những điều nên tránh cho ông bà.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Thoái hóa khớp gối"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/thoai-hoa-khop-goi-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Thoái hóa khớp gối có nên đi bộ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Đi bộ vừa sức trên đường bằng giúp khớp được nuôi dưỡng và cơ đùi khỏe hơn; tránh leo dốc, cầu thang nhiều."
              }
            },
            {
              "@type": "Question",
              "name": "Người già thoái hóa khớp có cần uống thuốc bổ khớp không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiệu quả của các sản phẩm bổ khớp chưa rõ ràng với nhiều người; hãy hỏi bác sĩ trước khi dùng."
              }
            },
            {
              "@type": "Question",
              "name": "Khi nào cần thay khớp gối?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Khi khớp hư nặng, đau nhiều ảnh hưởng sinh hoạt dù đã điều trị đầy đủ, bác sĩ sẽ cân nhắc phẫu thuật thay khớp."
              }
            }
          ]
        }
      ]
    }
  },

  // 7. mat-ngu-o-nguoi-cao-tuoi
  {
    id: 158,
    slug: "mat-ngu-o-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/mat-ngu-o-nguoi-cao-tuoi", "blog/mat-ngu-o-nguoi-cao-tuoi"],
    title: "Mất ngủ ở người cao tuổi: nguyên nhân và cách giúp ông bà ngủ ngon không cần thuốc",
    metaTitle: "Mất ngủ ở người cao tuổi: nguyên nhân và cách ngủ ngon không cần thuốc | ANTCARE",
    description: "Người già ngủ ít, dậy sớm có bình thường không? Nguyên nhân mất ngủ ở ông bà, rủi ro của thuốc ngủ và 8 thói quen giúp ngủ ngon tự nhiên.",
    excerpt: "Người già ngủ ít, dậy sớm có bình thường không? Nguyên nhân mất ngủ ở ông bà, rủi ro của thuốc ngủ và 8 thói quen giúp ngủ ngon tự nhiên.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Giấc ngủ",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "mất ngủ ở người cao tuổi, người già khó ngủ, cách ngủ ngon cho người già, thuốc ngủ người cao tuổi",
    image: "/images/tin-tuc/giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Người cao tuổi ngủ nông hơn, dậy sớm hơn là thay đổi bình thường. Nhưng nếu ông bà <b>khó vào giấc, thức giấc nhiều lần, ban ngày mệt mỏi, cáu gắt</b> kéo dài, đó là mất ngủ cần được quan tâm. Cách hiệu quả và an toàn nhất là <b>tìm và xử lý nguyên nhân</b> (tiểu đêm, đau nhức, lo âu, thuốc) và <b>xây dựng thói quen ngủ lành mạnh</b>. Thuốc ngủ ở người già làm tăng nguy cơ té ngã, lú lẫn – chỉ dùng khi bác sĩ kê.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/giac-ngu-nguoi-cao-tuoi-van-de-va-giai-phap.jpg" alt="Giải pháp chăm sóc giấc ngủ tự nhiên cho người cao tuổi không dùng thuốc" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Giấc ngủ ngon xuất phát từ thói quen sinh hoạt và tâm lý thoải mái ban ngày.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Nguyên nhân mất ngủ ở người già</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li><b>Bệnh lý:</b> tiểu đêm, đau khớp, ho, khó thở, trào ngược dạ dày, chân bồn chồn.</li>
  <li><b>Ngưng thở khi ngủ:</b> ngáy to, có lúc ngừng thở, sáng dậy vẫn mệt.</li>
  <li><b>Tâm lý:</b> lo âu, trầm cảm, cô đơn, buồn chuyện gia đình.</li>
  <li><b>Thói quen:</b> ngủ ngày quá nhiều, đi ngủ quá sớm, uống trà đặc, cà phê chiều tối.</li>
  <li><b>Thuốc:</b> lợi tiểu uống buổi tối, một số thuốc gây tỉnh táo.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">8 thói quen giúp người cao tuổi ngủ ngon</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li>Thức dậy và đi ngủ <b>cùng giờ mỗi ngày</b>, kể cả cuối tuần.</li>
  <li><b>Ra nắng buổi sáng</b> để điều chỉnh đồng hồ sinh học.</li>
  <li>Ngủ trưa <b>ngắn</b>, khoảng 30 phút, trước 3 giờ chiều.</li>
  <li><b>Vận động ban ngày</b>: đi bộ, dưỡng sinh, làm vườn, làm đồ thủ công.</li>
  <li>Hạn chế trà, cà phê sau trưa; không uống nhiều nước sát giờ ngủ.</li>
  <li>Phòng ngủ <b>yên tĩnh, tối, thoáng</b>; có đèn ngủ nhỏ để dậy đêm an toàn.</li>
  <li>Không nằm trên giường quá lâu khi không ngủ được – dậy làm việc nhẹ nhàng rồi quay lại khi buồn ngủ.</li>
  <li>Thư giãn trước khi ngủ: ngâm chân nước ấm, nghe nhạc nhẹ, hít thở chậm.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Khi nào cần đưa ông bà đi khám giấc ngủ?</h2>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Nên đi khám:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Nếu mất ngủ kéo dài trên vài tuần, ông bà ngáy to kèm ngừng thở, buồn ngủ ban ngày nhiều, hoặc mất ngủ đi kèm buồn chán, lo âu, sút cân.</p>
</div>
<p>Đừng tự mua thuốc ngủ hay thuốc an thần cho ông bà. Bác sĩ sẽ tìm nguyên nhân và có thể hướng dẫn liệu pháp hành vi cho mất ngủ – phương pháp không dùng thuốc được khuyến cáo rộng rãi.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE giúp ông bà có giấc ngủ tốt hơn</h2>
<p>Kiến Y tế cùng ông bà vận động, trò chuyện trong ngày, theo dõi giấc ngủ qua nhật ký đơn giản và phát hiện những nguyên nhân dễ bị bỏ qua như tiểu đêm, đau nhức hay thuốc uống sai giờ. Các bộ hoạt động trí não – thủ công của ANTCARE giúp ông bà có những giờ ban ngày bận rộn, vui vẻ, từ đó ngủ ngon hơn về đêm.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về mất ngủ ở người già</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già ngủ bao nhiêu tiếng là đủ?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Phần lớn người cao tuổi cần khoảng 7–8 giờ mỗi ngày, nhưng quan trọng hơn là ban ngày ông bà có tỉnh táo, khỏe khoắn hay không.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già có nên uống thuốc ngủ không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Chỉ dùng khi bác sĩ kê và trong thời gian ngắn. Thuốc ngủ ở người cao tuổi có thể gây chóng mặt, té ngã, lú lẫn và lệ thuộc thuốc.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Ông bà dậy lúc 3–4 giờ sáng có bình thường không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Người già có xu hướng ngủ sớm, dậy sớm. Nếu ông bà vẫn đủ giấc và khỏe ban ngày thì không đáng lo; nếu mệt mỏi, buồn chán thì nên được đánh giá thêm.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Ngày vui vẻ, đêm ngủ ngon</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Kiến Y tế đến nhà vận động, trò chuyện cùng ông bà và báo lại cho con cháu mọi thay đổi. Gói Trợ lý Sức khỏe từ 990.000đ/tháng.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Gọi 0969 032 360
    </a>
    <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Tìm hiểu thêm
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/mat-ngu-o-nguoi-cao-tuoi#webpage",
          "headline": "Mất ngủ ở người cao tuổi: nguyên nhân và cách giúp ông bà ngủ ngon không cần thuốc",
          "url": "https://antcare.vn/news/mat-ngu-o-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Người già ngủ ít, dậy sớm có bình thường không? Nguyên nhân mất ngủ ở ông bà, rủi ro của thuốc ngủ và 8 thói quen giúp ngủ ngon tự nhiên.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Mất ngủ"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/mat-ngu-o-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người già ngủ bao nhiêu tiếng là đủ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Phần lớn người cao tuổi cần khoảng 7–8 giờ mỗi ngày; quan trọng là ban ngày ông bà có tỉnh táo, khỏe khoắn hay không."
              }
            },
            {
              "@type": "Question",
              "name": "Người già có nên uống thuốc ngủ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chỉ dùng khi bác sĩ kê và trong thời gian ngắn, vì thuốc ngủ có thể gây chóng mặt, té ngã, lú lẫn và lệ thuộc."
              }
            },
            {
              "@type": "Question",
              "name": "Ông bà dậy lúc 3–4 giờ sáng có bình thường không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Người già có xu hướng ngủ sớm, dậy sớm; nếu vẫn khỏe ban ngày thì không đáng lo, nếu mệt mỏi, buồn chán thì nên được đánh giá."
              }
            }
          ]
        }
      ]
    }
  },

  // 8. tao-bon-o-nguoi-cao-tuoi
  {
    id: 159,
    slug: "tao-bon-o-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/tao-bon-o-nguoi-cao-tuoi", "blog/tao-bon-o-nguoi-cao-tuoi"],
    title: "Táo bón ở người cao tuổi: nguyên nhân, dấu hiệu nguy hiểm và cách khắc phục",
    metaTitle: "Táo bón ở người cao tuổi: nguyên nhân, dấu hiệu nguy hiểm và cách khắc phục | ANTCARE",
    description: "Táo bón kéo dài khiến ông bà mệt mỏi, chán ăn, thậm chí lú lẫn. Cách khắc phục bằng ăn uống, vận động và khi nào táo bón là dấu hiệu cần đi khám ngay.",
    excerpt: "Táo bón kéo dài khiến ông bà mệt mỏi, chán ăn, thậm chí lú lẫn. Cách khắc phục bằng ăn uống, vận động và khi nào táo bón là dấu hiệu cần đi khám ngay.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Tiêu hóa",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "táo bón ở người cao tuổi, người già bị táo bón, cách chữa táo bón cho người già",
    image: "/images/tin-tuc/tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Táo bón ở người già thường do <b>ăn ít chất xơ, uống ít nước, ít vận động và tác dụng phụ của thuốc</b>. Đa số cải thiện khi tăng rau xanh, trái cây, uống đủ nước, đi lại nhiều hơn và tập đi vệ sinh đúng giờ. Tuy nhiên, nếu táo bón <b>mới xuất hiện, kèm đi ngoài ra máu, sụt cân, đau bụng nhiều</b>, cần đưa ông bà đi khám tiêu hóa sớm.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi.jpg" alt="Chăm sóc tiêu hóa và xử trí táo bón ở người cao tuổi" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Chế độ dinh dưỡng giàu chất xơ và uống đủ nước giúp hệ tiêu hóa của người lớn tuổi hoạt động nhịp nhàng.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao người già hay bị táo bón?</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Nhu động ruột chậm lại theo tuổi.</li>
  <li>Ăn ít, răng yếu nên ít ăn rau; uống ít nước vì ngại tiểu nhiều.</li>
  <li>Ít vận động, nằm ngồi nhiều.</li>
  <li>Thuốc: sắt, canxi, một số thuốc huyết áp, giảm đau, chống trầm cảm.</li>
  <li>Bệnh lý: tiểu đường, suy giáp, Parkinson, trĩ, bệnh đại tràng.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu táo bón cần đi khám ngay</h2>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Đưa ông bà đi khám sớm:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Khi: đi ngoài ra máu hoặc phân đen; sụt cân không rõ lý do; thay đổi thói quen đại tiện đột ngột kéo dài; đau bụng dữ dội, bụng chướng, nôn, không trung tiện được (dấu hiệu tắc ruột – cần cấp cứu); thiếu máu, mệt nhiều.</p>
</div>
<p>Ở người cao tuổi, táo bón nặng có thể gây <b>u phân</b>, tiểu són, chán ăn, thậm chí lú lẫn. Đừng xem nhẹ nếu ông bà nhiều ngày không đi ngoài.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Cách khắc phục táo bón cho người già tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Tăng chất xơ từ từ:</b> rau mồng tơi, rau lang, đu đủ chín, chuối chín, thanh long, khoai lang, yến mạch. Nấu mềm, cắt nhỏ cho ông bà răng yếu.</li>
  <li><b>Uống đủ nước</b> rải đều trong ngày (trừ khi bác sĩ hạn chế nước vì bệnh tim, thận).</li>
  <li><b>Vận động:</b> đi bộ sau bữa ăn, xoa bụng theo chiều kim đồng hồ.</li>
  <li><b>Tập đi vệ sinh đúng giờ</b>, tốt nhất sau bữa sáng; kê ghế nhỏ dưới chân khi ngồi bồn cầu để tư thế dễ đi hơn.</li>
  <li><b>Không lạm dụng thuốc nhuận tràng</b>, thuốc thụt hay trà "thải độc" – hỏi bác sĩ, dược sĩ để chọn loại phù hợp.</li>
  <li><b>Rà soát thuốc đang dùng</b> với bác sĩ nếu táo bón xuất hiện sau khi đổi thuốc.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE hỗ trợ thế nào?</h2>
<p>Trong các lượt thăm nhà, Kiến Y tế theo dõi thói quen ăn uống, đi vệ sinh, lượng nước uống của ông bà – những điều con cháu ở xa khó nắm được – và gợi ý điều chỉnh phù hợp. Nếu có dấu hiệu bất thường, ANTCARE báo gia đình và đồng hành đưa ông bà đi khám tiêu hóa.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về táo bón ở người cao tuổi</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già mấy ngày không đi ngoài là táo bón?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Thường khi đi ngoài dưới 3 lần mỗi tuần, phân cứng, phải rặn nhiều hoặc cảm giác đi không hết. Quan trọng là so với thói quen bình thường của ông bà.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già táo bón có nên uống thuốc nhuận tràng hằng ngày?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Không nên tự dùng kéo dài. Một số loại có thể gây lệ thuộc hoặc rối loạn điện giải; hãy hỏi bác sĩ để chọn loại và cách dùng phù hợp.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Ăn gì để người già hết táo bón?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Rau xanh nấu mềm, trái cây chín như đu đủ, chuối chín, thanh long, khoai lang, yến mạch, kết hợp uống đủ nước và vận động nhẹ.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Những điều nhỏ con khó thấy – Kiến Y tế để ý giúp con</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Theo dõi ăn uống, giấc ngủ, đi vệ sinh và chỉ số sức khỏe của ông bà, báo cáo đều đặn cho gia đình.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Gọi 0969 032 360
    </a>
    <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Xem gói Trợ lý Sức khỏe
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/tao-bon-o-nguoi-cao-tuoi#webpage",
          "headline": "Táo bón ở người cao tuổi: nguyên nhân, dấu hiệu nguy hiểm và cách khắc phục",
          "url": "https://antcare.vn/news/tao-bon-o-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Táo bón kéo dài khiến ông bà mệt mỏi, chán ăn, thậm chí lú lẫn. Cách khắc phục bằng ăn uống, vận động và khi nào táo bón là dấu hiệu cần đi khám ngay.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Táo bón"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/tao-bon-o-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người già mấy ngày không đi ngoài là táo bón?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Thường khi đi ngoài dưới 3 lần mỗi tuần, phân cứng, phải rặn nhiều hoặc cảm giác đi không hết, so với thói quen bình thường của ông bà."
              }
            },
            {
              "@type": "Question",
              "name": "Người già táo bón có nên uống thuốc nhuận tràng hằng ngày?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không nên tự dùng kéo dài; hãy hỏi bác sĩ để chọn loại và cách dùng phù hợp."
              }
            },
            {
              "@type": "Question",
              "name": "Ăn gì để người già hết táo bón?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rau xanh nấu mềm, đu đủ, chuối chín, thanh long, khoai lang, yến mạch, kết hợp uống đủ nước và vận động nhẹ."
              }
            }
          ]
        }
      ]
    }
  },

  // 9. duc-thuy-tinh-the-nguoi-cao-tuoi
  {
    id: 160,
    slug: "duc-thuy-tinh-the-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/duc-thuy-tinh-the-nguoi-cao-tuoi", "blog/duc-thuy-tinh-the-nguoi-cao-tuoi"],
    title: "Đục thủy tinh thể ở người già: dấu hiệu, khi nào cần mổ và cách chăm sóc sau mổ",
    metaTitle: "Đục thủy tinh thể ở người già: dấu hiệu, khi nào mổ và chăm sóc sau mổ | ANTCARE",
    description: "Nhìn mờ như có màn sương, chói mắt khi ra nắng – dấu hiệu đục thủy tinh thể. Khi nào nên mổ, chuẩn bị gì và cách chăm sóc ông bà sau mổ mắt.",
    excerpt: "Nhìn mờ như có màn sương, chói mắt khi ra nắng – dấu hiệu đục thủy tinh thể. Khi nào nên mổ, chuẩn bị gì và cách chăm sóc ông bà sau mổ mắt.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Mắt",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "đục thủy tinh thể người cao tuổi, cườm khô, mổ mắt cho người già, chăm sóc sau mổ đục thủy tinh thể",
    image: "/images/tin-tuc/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Đục thủy tinh thể (cườm khô) là khi thấu kính trong mắt bị mờ đục theo tuổi, khiến ông bà <b>nhìn mờ như qua màn sương, chói mắt, nhìn kém về đêm, màu sắc nhạt đi</b>. Phẫu thuật thay thủy tinh thể nhân tạo là phương pháp điều trị hiệu quả, thường được cân nhắc khi thị lực kém <b>ảnh hưởng sinh hoạt hằng ngày</b>. Nhìn kém không điều trị làm tăng nguy cơ té ngã và khiến ông bà thu mình.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi.jpg" alt="Dấu hiệu đục thủy tinh thể và chăm sóc sau mổ mắt cho người già" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Phát hiện sớm và phẫu thuật đục thủy tinh thể kịp thời giúp khôi phục thị lực sáng rõ cho người cao tuổi.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu đục thủy tinh thể</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Nhìn mờ dần, không rõ nét, kính cũ không còn hợp.</li>
  <li>Chói, lóa khi ra nắng hoặc nhìn đèn xe ban đêm.</li>
  <li>Nhìn một hóa hai ở một mắt.</li>
  <li>Màu sắc nhạt, ngả vàng; cần nhiều ánh sáng hơn khi đọc.</li>
</ul>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Đi khám mắt ngay:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Nếu ông bà nhìn mờ đột ngột, đau nhức mắt, đỏ mắt kèm nhức đầu, buồn nôn (có thể là tăng nhãn áp cấp – cấp cứu), hoặc thấy chớp sáng, đốm đen, "màn che" trước mắt.</p>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Khi nào nên mổ đục thủy tinh thể?</h2>
<p>Không nhất thiết phải đợi "cườm chín". Ngày nay bác sĩ thường cân nhắc phẫu thuật khi thị lực giảm đến mức ảnh hưởng việc đọc, xem tivi, đi lại, nấu ăn hoặc gây nguy cơ té ngã. Người có tiểu đường, tăng huyết áp cần kiểm soát tốt bệnh nền trước mổ.</p>

<h3 style="color: #4B2186; font-size: 1.15rem; font-weight: 700; margin-top: 20px;">Chuẩn bị trước ngày mổ</h3>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Mang đầy đủ danh sách thuốc đang dùng, đặc biệt thuốc chống đông, thuốc tiểu đường.</li>
  <li>Hỏi bác sĩ việc ngừng hay tiếp tục thuốc trước mổ.</li>
  <li>Sắp xếp người đi cùng và đưa ông bà về – sau mổ ông bà không nên tự đi lại một mình.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Chăm sóc người già sau mổ đục thủy tinh thể</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Tra thuốc đúng giờ, đúng loại</b> theo đơn; rửa tay sạch trước khi tra.</li>
  <li><b>Đeo kính bảo vệ</b> ban ngày và che mắt khi ngủ theo hướng dẫn.</li>
  <li><b>Không dụi mắt</b>, tránh để nước bẩn, xà phòng vào mắt; gội đầu ngửa ra sau.</li>
  <li><b>Tránh cúi gập người, bê vật nặng</b> trong thời gian bác sĩ dặn.</li>
  <li><b>Tái khám đúng hẹn</b>; báo bác sĩ ngay nếu đau nhức tăng, nhìn mờ đi, mắt đỏ nhiều.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE đồng hành trong hành trình mổ mắt</h2>
<p>Mổ mắt thường cần đi lại nhiều lần: khám, đo chỉ số, mổ, tái khám. Kiến Y tế của ANTCARE đón ông bà tại nhà, hỗ trợ thủ tục, ở bên trong suốt thời gian chờ, ghi chép lịch tra thuốc và lời dặn của bác sĩ. Sau mổ, các lượt thăm nhà giúp kiểm tra việc tra thuốc và đảm bảo nhà cửa an toàn khi thị lực ông bà chưa ổn định.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về đục thủy tinh thể</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Mổ đục thủy tinh thể có đau không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Phẫu thuật thường được gây tê, người bệnh tỉnh táo và ít đau. Sau mổ có thể cộm, khó chịu nhẹ vài ngày; đau nhiều cần báo bác sĩ.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già bao nhiêu tuổi thì không mổ mắt được?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Tuổi cao không phải là rào cản chính. Bác sĩ đánh giá sức khỏe chung, bệnh nền và lợi ích thị lực để quyết định.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Có thuốc nhỏ mắt nào làm tan đục thủy tinh thể không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Hiện chưa có thuốc nhỏ mắt được chứng minh làm tan đục thủy tinh thể; phẫu thuật là phương pháp điều trị hiệu quả.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Ngày mổ mắt của bố mẹ – để Kiến Y tế ở bên</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">Đón tận nhà, chờ cùng, đưa về an toàn. Gói 4 giờ 490.000đ, 6 giờ 690.000đ, 8 giờ 790.000đ. Nhận thanh toán từ nước ngoài.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      Đặt lịch đồng hành
    </a>
    <a href="tel:0969032360" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      📞 0969 032 360
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/duc-thuy-tinh-the-nguoi-cao-tuoi#webpage",
          "headline": "Đục thủy tinh thể ở người già: dấu hiệu, khi nào cần mổ và cách chăm sóc sau mổ",
          "url": "https://antcare.vn/news/duc-thuy-tinh-the-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Nhìn mờ như có màn sương, chói mắt khi ra nắng – dấu hiệu đục thủy tinh thể. Khi nào nên mổ, chuẩn bị gì và cách chăm sóc ông bà sau mổ mắt.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Đục thủy tinh thể"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/duc-thuy-tinh-the-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Mổ đục thủy tinh thể có đau không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Phẫu thuật thường được gây tê, người bệnh tỉnh táo và ít đau; sau mổ có thể cộm, khó chịu nhẹ vài ngày."
              }
            },
            {
              "@type": "Question",
              "name": "Người già bao nhiêu tuổi thì không mổ mắt được?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tuổi cao không phải rào cản chính; bác sĩ đánh giá sức khỏe chung, bệnh nền và lợi ích thị lực để quyết định."
              }
            },
            {
              "@type": "Question",
              "name": "Có thuốc nhỏ mắt nào làm tan đục thủy tinh thể không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiện chưa có thuốc nhỏ mắt được chứng minh làm tan đục thủy tinh thể; phẫu thuật là phương pháp điều trị hiệu quả."
              }
            }
          ]
        }
      ]
    }
  },

  // 10. tram-cam-o-nguoi-cao-tuoi
  {
    id: 161,
    slug: "tram-cam-o-nguoi-cao-tuoi",
    oldSlugs: ["tin-tuc/tram-cam-o-nguoi-cao-tuoi", "blog/tram-cam-o-nguoi-cao-tuoi"],
    title: "Trầm cảm ở người cao tuổi: dấu hiệu dễ bị bỏ qua và cách gia đình đồng hành",
    metaTitle: "Trầm cảm ở người cao tuổi: dấu hiệu dễ bị bỏ qua và cách giúp đỡ | ANTCARE",
    description: "Ông bà chán ăn, mất ngủ, ít nói, hay than mệt? Có thể là trầm cảm. Dấu hiệu nhận biết, khác biệt với tuổi già và cách gia đình đồng hành.",
    excerpt: "Ông bà chán ăn, mất ngủ, ít nói, hay than mệt? Có thể là trầm cảm. Dấu hiệu nhận biết, khác biệt với tuổi già và cách gia đình đồng hành.",
    category: "Chăm sóc sức khỏe",
    specialtyTag: "Sức khỏe tinh thần",
    date: dateStr,
    datePublished: isoDate,
    dateModified: isoDate,
    keywords: "trầm cảm ở người cao tuổi, người già buồn chán, cô đơn tuổi già, sức khỏe tinh thần người cao tuổi",
    image: "/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg",
    content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Trầm cảm ở người già thường không biểu hiện bằng "buồn" rõ rệt mà bằng <b>mệt mỏi, chán ăn, mất ngủ, đau nhức không rõ nguyên nhân, ít nói, mất hứng thú</b> với những việc từng yêu thích. Đây là bệnh lý <b>có thể điều trị</b>, không phải "tính khí tuổi già". Nếu những dấu hiệu này kéo dài trên 2 tuần, hãy đưa ông bà đi khám bác sĩ tâm thần hoặc lão khoa và tăng cường kết nối, trò chuyện mỗi ngày.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg" alt="Dấu hiệu nhận biết và đồng hành cùng người cao tuổi trầm cảm" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Sự lắng nghe, chia sẻ và kết nối thường xuyên từ con cháu là liều thuốc tinh thần quý giá nhất.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu trầm cảm ở người cao tuổi</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
    <thead>
      <tr style="background-color: #6633B4; color: #ffffff;">
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Nhóm</th>
        <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Biểu hiện thường gặp</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Cảm xúc</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Buồn, trống rỗng, dễ khóc hoặc cáu gắt; cảm thấy mình là gánh nặng</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Hành vi</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Thu mình, không muốn gặp ai, bỏ sở thích cũ, không muốn ra khỏi nhà</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Cơ thể</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Mệt mỏi, chán ăn, sụt cân, mất ngủ hoặc ngủ quá nhiều, đau nhức khắp người</td>
      </tr>
      <tr>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Nhận thức</td>
        <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Kém tập trung, hay quên – đôi khi bị nhầm với sa sút trí tuệ</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Nguyên nhân khiến ông bà dễ trầm cảm</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Mất mát: người bạn đời, bạn bè qua đời; nghỉ hưu, mất vai trò.</li>
  <li>Cô đơn khi con cháu đi làm xa, sống một mình.</li>
  <li>Bệnh mạn tính, đau kéo dài, hạn chế vận động, nghe kém, nhìn kém.</li>
  <li>Sau tai biến, bệnh tim mạch; tác dụng phụ của một số thuốc.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Khi nào cần tìm trợ giúp chuyên môn?</h2>
<div style="background:#FFF5F5; border:1px solid #F5C2C2; border-left:5px solid #E53E3E; border-radius:12px; padding:16px 20px; margin:20px 0;">
  <b style="color:#B42318; display:block; margin-bottom:4px; font-size:1.05rem;">⚠️ Cần lưu ý đặc biệt:</b>
  <p style="margin:0; color:#2D3748; line-height:1.65;">Đưa ông bà đi khám nếu các dấu hiệu kéo dài trên 2 tuần hoặc ảnh hưởng ăn uống, sinh hoạt. <b>Liên hệ cấp cứu 115 hoặc đến cơ sở y tế gần nhất ngay</b> nếu ông bà nói về cái chết, muốn "đi cho xong", cho đi đồ đạc quý, hoặc có hành vi tự làm hại bản thân – và đừng để ông bà ở một mình.</p>
</div>
<p>Trầm cảm có thể điều trị bằng trị liệu tâm lý, thuốc và tăng cường hoạt động xã hội. Bác sĩ cũng sẽ kiểm tra các bệnh lý thực thể có thể gây triệu chứng giống trầm cảm.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Gia đình có thể làm gì mỗi ngày?</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><b>Lắng nghe, không phán xét:</b> tránh những câu như "có gì đâu mà buồn".</li>
  <li><b>Gọi điện, gọi video đều đặn</b>, dù chỉ vài phút.</li>
  <li><b>Giúp ông bà có lịch sinh hoạt có ý nghĩa:</b> đi bộ buổi sáng, làm vườn, làm đồ thủ công, tham gia câu lạc bộ người cao tuổi.</li>
  <li><b>Cho ông bà cảm giác được cần đến:</b> nhờ dạy cháu nấu một món, kể chuyện xưa, làm món quà tặng con cháu.</li>
  <li><b>Đồng hành đi khám và nhắc uống thuốc đều</b> – thuốc chống trầm cảm cần thời gian mới có tác dụng, không tự ý ngừng.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">ANTCARE chăm sóc cả đời sống tinh thần</h2>
<p>Ngoài theo dõi chỉ số sức khỏe, mỗi lượt thăm của Kiến Y tế là một buổi trò chuyện, cùng ông bà vận động và làm hoạt động trí não. Bộ hoạt động thủ công của ANTCARE – làm từ dây bèo, gỗ cao su – giúp ông bà tự tay tạo ra món quà tặng con cháu, tìm lại niềm vui và cảm giác mình vẫn có ích. Mọi thay đổi về tâm trạng đều được báo kịp thời cho gia đình.</p>

<section class="faq-section" style="margin: 2.75rem 0;">
  <h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp về trầm cảm ở người già</h2>
  
  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Làm sao phân biệt trầm cảm và tuổi già bình thường?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Tuổi già có thể chậm lại nhưng ông bà vẫn còn hứng thú, niềm vui. Trầm cảm khiến ông bà mất hứng thú kéo dài, chán ăn, mất ngủ, thu mình trên 2 tuần – khi đó cần được bác sĩ đánh giá.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Trầm cảm ở người già có chữa được không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Có. Trầm cảm đáp ứng tốt với điều trị tâm lý, thuốc và hỗ trợ xã hội; phát hiện càng sớm, hồi phục càng tốt.</p>
    </div>
  </details>

  <details style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
    <summary style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Trầm cảm có làm người già hay quên không?</summary>
    <div style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
      <p style="margin: 0;">Có. Trầm cảm có thể gây giảm tập trung, hay quên giống sa sút trí tuệ; khi trầm cảm được điều trị, trí nhớ thường cải thiện.</p>
    </div>
  </details>
</section>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #FD711A 0%, #FF9248 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(253, 113, 26, 0.25);">
  <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Con ở xa, nhưng bố mẹ không phải một mình</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">ANTCARE – Kiến chăm tổ: trợ lý sức khỏe tại nhà, đồng hành đi khám, an tâm cửa nhà. Phục vụ Hà Nội và các tỉnh miền Bắc.</p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #ffffff; color: #FD711A; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      📞 Gọi 0969 032 360
    </a>
    <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 2px solid #ffffff; color: #ffffff;">
      Tìm hiểu ANTCARE
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.
</p>
`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://antcare.vn/news/tram-cam-o-nguoi-cao-tuoi#webpage",
          "headline": "Trầm cảm ở người cao tuổi: dấu hiệu dễ bị bỏ qua và cách gia đình đồng hành",
          "url": "https://antcare.vn/news/tram-cam-o-nguoi-cao-tuoi",
          "inLanguage": "vi",
          "datePublished": isoDate,
          "dateModified": isoDate,
          "description": "Ông bà chán ăn, mất ngủ, ít nói, hay than mệt? Có thể là trầm cảm. Dấu hiệu nhận biết, khác biệt với tuổi già và cách gia đình đồng hành.",
          "about": {
            "@type": "MedicalCondition",
            "name": "Trầm cảm"
          },
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn",
            "logo": {
              "@type": "ImageObject",
              "url": "https://antcare.vn/images/footer-logo.png"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://antcare.vn/news/tram-cam-o-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Làm sao phân biệt trầm cảm và tuổi già bình thường?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trầm cảm khiến ông bà mất hứng thú kéo dài, chán ăn, mất ngủ, thu mình trên 2 tuần; khi đó cần được bác sĩ đánh giá."
              }
            },
            {
              "@type": "Question",
              "name": "Trầm cảm ở người già có chữa được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Trầm cảm đáp ứng tốt với điều trị tâm lý, thuốc và hỗ trợ xã hội; phát hiện càng sớm, hồi phục càng tốt."
              }
            },
            {
              "@type": "Question",
              "name": "Trầm cảm có làm người già hay quên không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Trầm cảm có thể gây giảm tập trung, hay quên giống sa sút trí tuệ; khi được điều trị, trí nhớ thường cải thiện."
              }
            }
          ]
        }
      ]
    }
  }
];

// 11. PILLAR ARTICLE: 10 bệnh lý thường gặp ở người cao tuổi: nhận biết sớm và chăm sóc đúng tại nhà
const pillarArticle = {
  id: 162,
  slug: "10-benh-ly-thuong-gap-o-nguoi-cao-tuoi",
  oldSlugs: [
    "tin-tuc/10-benh-ly-thuong-gap-o-nguoi-cao-tuoi",
    "blog/10-benh-ly-thuong-gap-o-nguoi-cao-tuoi",
    "10-benh-ly-thuong-gap-o-nguoi-cao-tuoi-va-cach-cham-soc-tai-nha"
  ],
  title: "10 bệnh lý thường gặp ở người cao tuổi: nhận biết sớm và chăm sóc đúng tại nhà",
  metaTitle: "10 bệnh lý thường gặp ở người cao tuổi và cách chăm sóc tại nhà | ANTCARE",
  description: "Tiểu són, đãng trí, tăng huyết áp, tiểu đường, loãng xương, thoái hóa khớp, mất ngủ, táo bón, đục thủy tinh thể, trầm cảm: dấu hiệu, khi nào cần đi khám và cách chăm sóc ông bà tại nhà. Tư vấn: 0969 032 360.",
  excerpt: "Cẩm nang nhận biết sớm và chăm sóc 10 bệnh lý hay gặp ở ông bà – từ ANTCARE, dịch vụ trợ lý sức khỏe và đồng hành khám bệnh cho người cao tuổi.",
  category: "Cẩm nang chăm sóc",
  date: dateStr,
  datePublished: isoDate,
  dateModified: isoDate,
  keywords: "bệnh người cao tuổi, tiểu són ở người già, đãng trí người già, tăng huyết áp người cao tuổi, tiểu đường người già, loãng xương, thoái hóa khớp gối, mất ngủ người già, táo bón người cao tuổi, đục thủy tinh thể, trầm cảm người cao tuổi, chăm sóc người cao tuổi tại nhà, đưa người cao tuổi đi khám",
  image: "/images/tin-tuc/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi.jpg",
  content: `
<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Cẩm nang dành cho con cháu bận rộn:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Tổng hợp 10 bệnh lý phổ biến nhất ở người lớn tuổi kèm dấu hiệu nhận biết, bảng đối chiếu, thời điểm cần đưa đi khám bệnh viện và hướng dẫn chăm sóc thực tế tại gia đình.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi.jpg" alt="10 bệnh lý thường gặp ở người cao tuổi và cách chăm sóc tại nhà" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Cẩm nang toàn diện 10 bệnh lý người cao tuổi từ ANTCARE – Kiến chăm tổ.</figcaption>
</figure>

<nav class="toc" aria-label="Mục lục" style="background: #fff; border: 1px solid #E6E0F0; border-radius: 14px; padding: 22px 24px; margin: 28px 0; box-shadow: 0 2px 8px rgba(102,51,180,0.05);">
  <h2 style="margin: 0 0 12px; font-size: 20px; color: #6633B4; font-weight: 700; border: none; padding: 0;">Mục lục 10 bệnh lý</h2>
  <ol style="margin: 0; padding-left: 22px; line-height: 1.8; color: #334155; font-size: 15.5px;">
    <li><a href="/news/tieu-son-o-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">1. Tiểu són ở người cao tuổi: nguyên nhân, dấu hiệu và cách chăm sóc tại nhà ↗</a></li>
    <li><a href="/news/dang-tri-o-nguoi-gia" style="color: #6633B4; font-weight: 600; text-decoration: none;">2. Đãng trí ở người già: lão hóa bình thường hay dấu hiệu sa sút trí tuệ? ↗</a></li>
    <li><a href="/news/tang-huyet-ap-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">3. Tăng huyết áp ở người cao tuổi: chỉ số bao nhiêu là cao và cách kiểm soát ↗</a></li>
    <li><a href="/news/tieu-duong-o-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">4. Tiểu đường ở người cao tuổi: dấu hiệu, biến chứng và cách chăm sóc tại nhà ↗</a></li>
    <li><a href="/news/loang-xuong-va-te-nga-o-nguoi-gia" style="color: #6633B4; font-weight: 600; text-decoration: none;">5. Loãng xương và té ngã ở người già: dấu hiệu, nguy cơ và cách phòng tránh ↗</a></li>
    <li><a href="/news/thoai-hoa-khop-goi-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">6. Thoái hóa khớp gối ở người cao tuổi: triệu chứng, giảm đau và bài tập ↗</a></li>
    <li><a href="/news/mat-ngu-o-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">7. Mất ngủ ở người cao tuổi: nguyên nhân và cách ngủ ngon không cần thuốc ↗</a></li>
    <li><a href="/news/tao-bon-o-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">8. Táo bón ở người cao tuổi: nguyên nhân, dấu hiệu nguy hiểm và cách khắc phục ↗</a></li>
    <li><a href="/news/duc-thuy-tinh-the-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">9. Đục thủy tinh thể ở người già: dấu hiệu, khi nào mổ và chăm sóc sau mổ ↗</a></li>
    <li><a href="/news/tram-cam-o-nguoi-cao-tuoi" style="color: #6633B4; font-weight: 600; text-decoration: none;">10. Trầm cảm ở người cao tuổi: dấu hiệu dễ bị bỏ qua và cách gia đình đồng hành ↗</a></li>
  </ol>
</nav>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 32px 0;">
  ${articles.map(a => `
    <div style="background: #faf8fd; border: 1px solid #e2d6f5; border-radius: 12px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span style="display: inline-block; background: #FFF1E7; color: #C4530C; font-size: 12px; font-weight: 700; padding: 2px 10px; border-radius: 999px; margin-bottom: 8px;">${a.specialtyTag}</span>
        <h3 style="font-size: 1.1rem; color: #4B2186; margin: 4px 0 8px; font-weight: 700; line-height: 1.4;">${a.title}</h3>
        <p style="font-size: 0.92rem; color: #475569; line-height: 1.5; margin: 0 0 14px;">${a.description}</p>
      </div>
      <a href="/news/${a.slug}" style="display: inline-flex; align-items: center; gap: 6px; color: #FD711A; font-weight: 700; font-size: 0.92rem; text-decoration: none;">
        Đọc chi tiết bài viết →
      </a>
    </div>
  `).join('')}
</div>

<aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4B2186 100%); color: #ffffff; padding: 2.2rem 2rem; border-radius: 16px; margin: 3rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
  <h3 style="font-size: 1.4rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Con ở xa, nhưng bố mẹ không phải một mình</h3>
  <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95; max-width: 680px; margin-left: auto; margin-right: auto;">
    ANTCARE – Kiến chăm tổ: Dịch vụ trợ lý sức khỏe tại nhà, đồng hành đi khám bệnh tại Hà Nội và các tỉnh miền Bắc. Đồng hành chu đáo, an tâm trọn vẹn.
  </p>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
    <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
      📞 Gọi hotline 0969 032 360
    </a>
    <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
      Dịch vụ đồng hành đi khám
    </a>
  </div>
</aside>

<p class="disclaimer" style="font-size: 13.5px; color: #64748b; border-top: 1px dashed #E2D6F5; padding-top: 14px; margin-top: 24px; font-style: italic;">
  Nội dung mang tính chất tham khảo y học thường thức, không thay thế chẩn đoán hay điều trị chuyên khoa của bác sĩ.
</p>
`,
  schema: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "10 bệnh lý thường gặp ở người cao tuổi",
    "itemListElement": articles.map((a, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://antcare.vn/news/${a.slug}`,
      "name": a.title
    }))
  }
};

// Process adding into newsData.list
const allNewArticles = [
  ...articles.map(a => ({
    id: a.id,
    slug: a.slug,
    oldSlugs: a.oldSlugs,
    title: a.title,
    metaTitle: a.metaTitle,
    description: a.description,
    excerpt: a.excerpt,
    category: a.category,
    specialtyTag: a.specialtyTag,
    date: a.date,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    keywords: a.keywords,
    image: a.image,
    author: defaultAuthor,
    content: a.content,
    schema: a.schema
  })),
  {
    id: pillarArticle.id,
    slug: pillarArticle.slug,
    oldSlugs: pillarArticle.oldSlugs,
    title: pillarArticle.title,
    metaTitle: pillarArticle.metaTitle,
    description: pillarArticle.description,
    excerpt: pillarArticle.excerpt,
    category: pillarArticle.category,
    date: pillarArticle.date,
    datePublished: pillarArticle.datePublished,
    dateModified: pillarArticle.dateModified,
    keywords: pillarArticle.keywords,
    image: pillarArticle.image,
    author: defaultAuthor,
    content: pillarArticle.content,
    schema: pillarArticle.schema
  }
];

// Remove any existing entries with these slugs or IDs to prevent duplicates
const newSlugs = new Set(allNewArticles.map(a => a.slug));
const newIds = new Set(allNewArticles.map(a => a.id));

newsData.list = newsData.list.filter(item => !newSlugs.has(item.slug) && !newIds.has(item.id));

// Insert all 11 new articles at the beginning of the list
newsData.list.unshift(...allNewArticles);

// Write back to news.json
fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully added ${allNewArticles.length} articles to news.json. Total articles: ${newsData.list.length}`);
