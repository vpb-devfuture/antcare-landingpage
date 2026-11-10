const fs = require('fs');
const path = require('path');

const userHtmlPath = path.join(__dirname, 'user_son_tieu_pillar.html');

// Let's write the user HTML into a dedicated scratch file first
const userHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Són tiểu là gì? Nguyên nhân và cách khắc phục | ANTCARE</title>
<meta name="description" content="Són tiểu là gì, vì sao bị, 4 dạng són tiểu, cách điều chỉnh sinh hoạt, tập sàn chậu, khi nào đi khám, khám ở đâu và nên dùng gì để sinh hoạt tự tin.">
<link rel="canonical" href="https://antcare.vn/son-tieu/son-tieu-la-gi">
<meta property="og:type" content="article">
<meta property="og:title" content="Són tiểu là gì? Nguyên nhân và cách khắc phục | ANTCARE">
<meta property="og:description" content="Són tiểu là gì, vì sao bị, 4 dạng són tiểu, cách điều chỉnh sinh hoạt, tập sàn chậu, khi nào đi khám, khám ở đâu và nên dùng gì để sinh hoạt tự tin.">
<meta property="og:url" content="https://antcare.vn/son-tieu/son-tieu-la-gi">
<meta property="og:locale" content="vi_VN">
<style>
  :root{--purple:#6633B4;--orange:#FD711A;--ink:#1f1a2b;--muted:#5b5568;--bg:#ffffff;--soft:#f6f1fc;--line:#e6dff2}
  *{box-sizing:border-box}
  body{margin:0;font-family:Arial,"Helvetica Neue",sans-serif;color:var(--ink);background:var(--bg);line-height:1.7;font-size:17px}
  .wrap{max-width:820px;margin:0 auto;padding:24px 16px 64px}
  header.site{border-bottom:4px solid var(--purple);padding-bottom:16px;margin-bottom:24px}
  header.site h1{color:var(--purple);font-size:1.9rem;line-height:1.3;margin:.2em 0}
  .eyebrow{color:var(--orange);font-weight:700;letter-spacing:.04em;text-transform:uppercase;font-size:.8rem}
  nav.toc{background:var(--soft);border-radius:10px;padding:16px 20px;margin:24px 0}
  nav.toc ol{margin:.5em 0 0;padding-left:1.3em}
  nav.toc a{color:var(--purple);text-decoration:none}
  .seo-plan{border:1px dashed var(--orange);border-radius:10px;padding:12px 16px;margin:24px 0;font-size:.85rem;background:#fff8f3}
  h2{color:var(--purple);font-size:1.5rem;line-height:1.35;margin:1.8em 0 .4em;border-top:1px solid var(--line);padding-top:24px}
  h3{color:var(--ink);font-size:1.2rem;margin:1.4em 0 .4em}
  .meta{color:var(--muted);font-size:.85rem}
  .answer{background:var(--soft);border-left:5px solid var(--purple);padding:14px 18px;border-radius:6px;margin:16px 0}
  .answer strong:first-child{color:var(--purple)}
  .verdict{background:#fff4ec;border-left:5px solid var(--orange);padding:14px 18px;border-radius:6px;margin:16px 0}
  table{border-collapse:collapse;width:100%;margin:16px 0;font-size:.95rem}
  th,td{border:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:top}
  th{background:var(--purple);color:#fff}
  tr:nth-child(even) td{background:#faf8fd}
  .table-scroll{overflow-x:auto}
  .pc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0}
  .pc div{border:1px solid var(--line);border-radius:8px;padding:10px 14px}
  .pc h4{margin:.2em 0 .4em}
  .pros h4{color:#1f7a4d}.cons h4{color:#b3261e}
  @media (max-width:600px){.pc{grid-template-columns:1fr}body{font-size:16px}header.site h1{font-size:1.5rem}h2{font-size:1.3rem}table{font-size:.85rem}}
  .cta{background:linear-gradient(135deg,#6633B4,#4e2590);color:#fff;border-radius:12px;padding:18px 20px;margin:24px 0}
  .cta h4{margin:0 0 6px;font-size:1.1rem}
  .cta a{color:#fff;font-weight:700}
  .btn{display:inline-block;background:var(--orange);color:#fff !important;text-decoration:none;padding:9px 16px;border-radius:999px;margin:8px 8px 0 0}
  .faq dt{font-weight:700;margin-top:14px}
  .faq dd{margin:4px 0 0}
  .note{font-size:.85rem;color:var(--muted);border-top:1px solid var(--line);margin-top:20px;padding-top:10px}
  .sources{font-size:.85rem;color:var(--muted)}
  .sources a{color:var(--muted)}
  a{color:var(--purple)}
</style>
<style>.news{background:#fff4ec;border-left:5px solid var(--orange);padding:12px 16px;border-radius:6px;margin:12px 0;font-size:.95rem}.news strong:first-child{color:#c4520f}.defs{background:var(--soft);border:1px dashed var(--purple);border-radius:8px;padding:10px 16px;margin:12px 0}.toc-inline{background:#faf8fd;border:1px solid var(--line);border-radius:8px;padding:12px 16px;margin:16px 0}.toc-inline ol{margin:6px 0 0 18px;padding:0}</style>
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Organization",
   "@id": "https://antcare.vn/#org",
   "name": "ANTCARE",
   "alternateName": [
    "ANTCARE – Kiến chăm tổ"
   ],
   "url": "https://antcare.vn/",
   "telephone": "+84969032360",
   "logo": "https://antcare.vn/images/footer-logo.png",
   "description": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội."
  },
  {
   "@type": "BlogPosting",
   "@id": "https://antcare.vn/son-tieu/son-tieu-la-gi",
   "mainEntityOfPage": "https://antcare.vn/son-tieu/son-tieu-la-gi",
   "headline": "Són tiểu là gì? Nguyên nhân, cách điều chỉnh sinh hoạt, khi nào đi khám và nên dùng gì",
   "description": "Són tiểu là gì, vì sao bị, 4 dạng són tiểu, cách điều chỉnh sinh hoạt, tập sàn chậu, khi nào đi khám, khám ở đâu và nên dùng gì để sinh hoạt tự tin.",
   "inLanguage": "vi",
   "datePublished": "2026-11-10",
   "dateModified": "2026-11-10",
   "keywords": "són tiểu là gì, són tiểu, tiểu không tự chủ, nguyên nhân són tiểu, són tiểu khám ở đâu, quần chống són tiểu, quần chống rò rỉ",
   "about": {
    "@type": "MedicalCondition",
    "name": "Són tiểu (tiểu không tự chủ)",
    "alternateName": [
     "Urinary incontinence",
     "Tiểu không kiểm soát"
    ]
   },
   "author": {
    "@id": "https://antcare.vn/#org"
   },
   "publisher": {
    "@id": "https://antcare.vn/#org"
   }
  },
  {
   "@type": "BreadcrumbList",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Trang chủ",
     "item": "https://antcare.vn/"
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Cẩm nang són tiểu",
     "item": "https://antcare.vn/son-tieu"
    },
    {
     "@type": "ListItem",
     "position": 3,
     "name": "Són tiểu là gì?",
     "item": "https://antcare.vn/son-tieu/son-tieu-la-gi"
    }
   ]
  },
  {
   "@type": "FAQPage",
   "mainEntity": [
    {
     "@type": "Question",
     "name": "Són tiểu là gì?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Són tiểu (tiểu không tự chủ) là tình trạng nước tiểu rỉ ra ngoài ý muốn, ví dụ khi ho, hắt hơi, cười, vận động hoặc khi mắc tiểu gấp không kịp vào nhà vệ sinh."
     }
    },
    {
     "@type": "Question",
     "name": "Vì sao phụ nữ hay bị són tiểu?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Vì mang thai, sinh con và mãn kinh làm cơ sàn chậu và mô nâng đỡ niệu đạo yếu đi; thừa cân, táo bón, ho mạn tính và tuổi tác cũng làm tăng nguy cơ."
     }
    },
    {
     "@type": "Question",
     "name": "Són tiểu có tự khỏi không?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Són tiểu do nguyên nhân tạm thời như nhiễm khuẩn tiết niệu, táo bón, đồ uống kích thích có thể hết khi xử lý nguyên nhân. Són tiểu do sàn chậu yếu thường không tự khỏi nhưng cải thiện rõ nhờ tập sàn chậu, điều chỉnh sinh hoạt và điều trị."
     }
    },
    {
     "@type": "Question",
     "name": "Són tiểu có chữa được không?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nhiều người cải thiện rõ hoặc hết són tiểu nhờ tập cơ sàn chậu, tập luyện bàng quang, thuốc hoặc thủ thuật tùy dạng són tiểu; nên đi khám để được tư vấn đúng."
     }
    },
    {
     "@type": "Question",
     "name": "Són tiểu nên khám ở đâu?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Khám chuyên khoa Tiết niệu hoặc Sản phụ khoa tại các bệnh viện lớn; nhiều nơi có đơn vị sàn chậu hoặc niệu nữ. Người cao tuổi có thể khám Lão khoa trước."
     }
    },
    {
     "@type": "Question",
     "name": "Són tiểu nên kiêng uống gì?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nên hạn chế cà phê, trà đặc, rượu bia và nước có ga; không nên nhịn uống nước mà hãy uống rải đều trong ngày và giảm uống trước khi ngủ."
     }
    },
    {
     "@type": "Question",
     "name": "Bị són tiểu nhẹ nên dùng gì?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Có thể dùng quần chống rò rỉ giặt được hoặc miếng lót chuyên cho són tiểu; không nên dùng băng vệ sinh thường vì hút nước tiểu chậm và dễ có mùi."
     }
    },
    {
     "@type": "Question",
     "name": "Quần chống rò rỉ có dùng cho cả kinh nguyệt không?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Có loại được thiết kế cho cả hai. Quần chống rò rỉ ANTCARE được phát triển để dùng cho són tiểu nhẹ và ngày kinh ra ít đến trung bình."
     }
    },
    {
     "@type": "Question",
     "name": "Són tiểu có nguy hiểm không?",
     "acceptedAnswer": {
      "@type": "Answer",
      "text": "Thường không nguy hiểm đến tính mạng nhưng ảnh hưởng nhiều đến chất lượng sống. Cần đi khám ngay nếu kèm tiểu ra máu, sốt, đau lưng, bí tiểu hoặc yếu, tê chân tay."
     }
    }
   ]
  }
 ]
}
</script>
</head>
<body>
<div class="wrap">
<header class="site">
  <div class="eyebrow">ANTCARE · Cẩm nang són tiểu</div>
  <h1>Són tiểu là gì? Nguyên nhân, cách điều chỉnh sinh hoạt, khi nào đi khám và nên dùng gì</h1>
  <p class="meta">Cập nhật 10/11/2026 · Thông tin tham khảo, không thay thế tư vấn của bác sĩ</p>
</header>

<!-- ===== GHI CHÚ SEO (XÓA KHI ĐĂNG) ===== -->
<section class="seo-plan">
  <strong>Ghi chú SEO (xóa khi đăng):</strong> Bài trụ cột (pillar) cho cụm són tiểu. URL đề xuất <code>/son-tieu/son-tieu-la-gi</code>; title 54 ký tự; meta 148 ký tự. Từ khóa chính: "són tiểu là gì"; phụ: "tiểu không tự chủ", "nguyên nhân són tiểu", "són tiểu khám ở đâu", "són tiểu nên dùng gì", "quần chống són tiểu", "quần chống rò rỉ". Liên kết từ trang chủ (mục Quần chống són tiểu), trang hub <code>/son-tieu</code> và mọi bài són tiểu khác về bài này; bài này link sang các bài con (són tiểu khi ho, hắt hơi; són tiểu tiền mãn kinh; quần kinh nguyệt dùng cho són tiểu) khi đã đăng. Khi trang chủ mới hoạt động, đổi link CTA <code>/quan-lot-tham-hut</code> thành <code>/#quan-chong-son-tieu</code>. Nên có bác sĩ Tiết niệu hoặc Sản phụ khoa duyệt và ghi tên người duyệt.
</section>

<article id="son-tieu-la-gi">
  
  <p class="meta">Từ khóa: són tiểu là gì, són tiểu, tiểu không tự chủ, nguyên nhân són tiểu, són tiểu ở phụ nữ, són tiểu khám ở đâu, són tiểu nên dùng gì, quần chống són tiểu, quần chống rò rỉ</p>

  <div class="news"><strong>Số liệu:</strong> Theo báo cáo của Deloitte Access Economics cho Continence Health Australia (2024), gần 4 trong 10 phụ nữ gặp tình trạng mất kiểm soát tiểu tiện hoặc đại tiện, và phụ nữ có khả năng bị nhiều gấp đôi nam giới. Són tiểu rất phổ biến, nhưng nhiều người im lặng chịu đựng nhiều năm vì ngại nói ra.</div>

  <div class="answer"><strong>Trả lời nhanh:</strong> <strong>Són tiểu</strong> (tiểu không tự chủ) là tình trạng nước tiểu rỉ ra ngoài ý muốn, từ vài giọt khi ho, hắt hơi đến lượng nhiều hơn khi mắc tiểu gấp không kịp vào nhà vệ sinh. Nguyên nhân thường gặp là <strong>cơ sàn chậu yếu</strong> (sau mang thai, sinh con, tuổi mãn kinh, tuổi cao), <strong>bàng quang hoạt động quá mức</strong>, táo bón, thừa cân, ho mạn tính, nhiễm khuẩn tiết niệu, tác dụng phụ của thuốc. Són tiểu <strong>phổ biến nhưng không phải điều bắt buộc phải chấp nhận</strong>: tập cơ sàn chậu, điều chỉnh đồ uống, tập luyện bàng quang và điều trị y khoa giúp nhiều người cải thiện rõ. Nên đi khám ở chuyên khoa <strong>Tiết niệu</strong> hoặc <strong>Sản phụ khoa</strong> khi són tiểu ảnh hưởng sinh hoạt, mới xuất hiện, nặng dần hoặc kèm tiểu buốt, tiểu ra máu, sốt. Trong lúc điều trị, <strong>quần chống rò rỉ</strong> giúp sinh hoạt tự tin, kín đáo hơn bỉm.</div>

  <nav class="toc-inline" aria-label="Nội dung bài">
    <strong>Nội dung bài</strong>
    <ol>
      <li><a href="#dinh-nghia">Són tiểu là gì? Có phổ biến không?</a></li>
      <li><a href="#cac-dang">4 dạng són tiểu thường gặp</a></li>
      <li><a href="#nguyen-nhan">Vì sao bị són tiểu?</a></li>
      <li><a href="#ai-de-bi">Ai dễ bị són tiểu?</a></li>
      <li><a href="#sinh-hoat">Điều chỉnh sinh hoạt khi bị són tiểu</a></li>
      <li><a href="#san-chau">Hướng dẫn tập cơ sàn chậu</a></li>
      <li><a href="#di-kham">Khi nào nên đi khám?</a></li>
      <li><a href="#kham-o-dau">Đi khám ở đâu, khám chuyên khoa gì?</a></li>
      <li><a href="#dieu-tri">Các phương pháp điều trị</a></li>
      <li><a href="#nen-dung-gi">Són tiểu nên dùng gì?</a></li>
      <li><a href="#antcare">Quần chống rò rỉ ANTCARE</a></li>
      <li><a href="#faq">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="dinh-nghia">1. Són tiểu là gì? Có phổ biến không?</h2>
  <div class="defs">
    <p><strong>Són tiểu</strong> (tiểu không tự chủ, tiểu không kiểm soát, rỉ nước tiểu; tiếng Anh: <em>urinary incontinence</em>) là khi nước tiểu thoát ra ngoài mà bạn không chủ động muốn đi tiểu.</p>
    <p><strong>Cơ sàn chậu</strong> là nhóm cơ như một "chiếc võng" ở đáy chậu, nâng đỡ bàng quang, tử cung, trực tràng và giúp đóng chặt niệu đạo khi áp lực trong bụng tăng.</p>
  </div>
  <p>Bình thường, khi bàng quang đầy, não gửi tín hiệu mắc tiểu và bạn có thể "giữ" đến khi vào nhà vệ sinh nhờ cơ thắt niệu đạo và cơ sàn chậu. Són tiểu xảy ra khi hệ thống này mất cân bằng: cơ nâng đỡ yếu đi, bàng quang co bóp không đúng lúc, hoặc đường ra bị tắc khiến bàng quang đầy tràn.</p>
  <p>Són tiểu gặp ở cả nam và nữ, nhưng phổ biến hơn ở phụ nữ vì mang thai, sinh con và mãn kinh đều ảnh hưởng đến sàn chậu. Đây là <strong>một triệu chứng</strong>, không phải một bệnh riêng lẻ; tìm ra nguyên nhân là bước quan trọng để điều trị đúng.</p>

  <h2 id="cac-dang">2. Bốn dạng són tiểu thường gặp</h2>
  <table>
    <tr><th>Dạng</th><th>Biểu hiện</th><th>Cơ chế chính</th><th>Hay gặp ở</th></tr>
    <tr><td><strong>Són tiểu do gắng sức</strong></td><td>Rỉ khi ho, hắt hơi, cười, chạy nhảy, nâng vật nặng; không thấy mắc tiểu trước</td><td>Cơ sàn chậu, cơ thắt niệu đạo yếu</td><td>Phụ nữ sau sinh, mãn kinh, người tập thể thao cường độ cao</td></tr>
    <tr><td><strong>Són tiểu gấp</strong></td><td>Đột ngột mắc tiểu rất gấp, rỉ trước khi kịp vào nhà vệ sinh; đi tiểu nhiều lần, thức dậy ban đêm để đi tiểu</td><td>Bàng quang co bóp quá mức (bàng quang tăng hoạt)</td><td>Người trung niên, cao tuổi; người có bệnh thần kinh</td></tr>
    <tr><td><strong>Són tiểu hỗn hợp</strong></td><td>Có cả hai dạng trên</td><td>Kết hợp</td><td>Phụ nữ trung niên, cao tuổi</td></tr>
    <tr><td><strong>Són tiểu do tràn đầy</strong></td><td>Rỉ liên tục từng giọt, cảm giác đi tiểu không hết, dòng tiểu yếu</td><td>Bàng quang không tống hết nước tiểu (tắc nghẽn, bàng quang co bóp yếu)</td><td>Nam giới phì đại tuyến tiền liệt, người tiểu đường lâu năm</td></tr>
  </table>
  <p>Ngoài ra còn có <strong>són tiểu chức năng</strong>: đường tiết niệu bình thường nhưng người bệnh không kịp vào nhà vệ sinh do đi lại khó khăn, sa sút trí nhớ, nhà vệ sinh xa. Dạng này rất hay gặp ở người cao tuổi.</p>

  <h2 id="nguyen-nhan">3. Vì sao bị són tiểu?</h2>
  <h3>Nguyên nhân kéo dài (són tiểu mạn tính)</h3>
  <ul>
    <li><strong>Mang thai và sinh con:</strong> trọng lượng thai nhi và quá trình sinh làm giãn, tổn thương cơ và dây thần kinh sàn chậu. Sinh mổ cũng không loại trừ hoàn toàn nguy cơ.</li>
    <li><strong>Tiền mãn kinh, mãn kinh:</strong> estrogen giảm làm mô niệu đạo, âm đạo mỏng và kém đàn hồi.</li>
    <li><strong>Tuổi tác:</strong> cơ bàng quang và sàn chậu yếu dần, bàng quang chứa được ít hơn.</li>
    <li><strong>Thừa cân, béo phì:</strong> tăng áp lực lên bàng quang và sàn chậu.</li>
    <li><strong>Ho mạn tính, táo bón kéo dài:</strong> rặn và ho liên tục làm sàn chậu yếu đi.</li>
    <li><strong>Sa tạng chậu:</strong> sa bàng quang, sa tử cung.</li>
    <li><strong>Phì đại tuyến tiền liệt, sau phẫu thuật tuyến tiền liệt</strong> (ở nam giới).</li>
    <li><strong>Bệnh thần kinh:</strong> đột quỵ, Parkinson, đa xơ cứng, tổn thương tủy sống, tiểu đường gây tổn thương thần kinh.</li>
    <li><strong>Phẫu thuật vùng chậu</strong> như cắt tử cung.</li>
  </ul>
  <h3>Nguyên nhân tạm thời (thường cải thiện khi xử lý nguyên nhân)</h3>
  <ul>
    <li><strong>Nhiễm khuẩn đường tiết niệu:</strong> gây tiểu gấp, tiểu buốt, có thể són tiểu.</li>
    <li><strong>Đồ uống kích thích bàng quang:</strong> cà phê, trà đặc, rượu bia, nước có ga.</li>
    <li><strong>Một số thuốc:</strong> thuốc lợi tiểu, thuốc an thần, một số thuốc huyết áp.</li>
    <li><strong>Táo bón:</strong> phân ứ ở trực tràng chèn ép bàng quang.</li>
    <li><strong>Uống quá nhiều nước trong thời gian ngắn</strong>, nhất là buổi tối.</li>
  </ul>
  <p class="meta">Không tự ý ngừng thuốc đang điều trị bệnh khác khi nghi thuốc gây són tiểu; hãy hỏi bác sĩ kê đơn.</p>

  <h2 id="ai-de-bi">4. Ai dễ bị són tiểu?</h2>
  <table>
    <tr><th>Nhóm</th><th>Vì sao</th></tr>
    <tr><td>Phụ nữ mang thai, sau sinh</td><td>Sàn chậu chịu áp lực và tổn thương khi mang thai, sinh nở</td></tr>
    <tr><td>Phụ nữ tiền mãn kinh, mãn kinh</td><td>Giảm estrogen</td></tr>
    <tr><td>Người cao tuổi</td><td>Cơ yếu dần, bệnh mạn tính, đi lại khó khăn</td></tr>
    <tr><td>Người thừa cân, ho mạn tính, táo bón</td><td>Tăng áp lực ổ bụng kéo dài</td></tr>
    <tr><td>Nam giới có bệnh tuyến tiền liệt</td><td>Tắc nghẽn đường ra hoặc sau phẫu thuật</td></tr>
    <tr><td>Phụ nữ trẻ chơi thể thao cường độ cao</td><td>Chạy, nhảy, nâng tạ tạo áp lực lặp lại lên sàn chậu</td></tr>
  </table>

  <h2 id="sinh-hoat">5. Điều chỉnh sinh hoạt khi bị són tiểu</h2>
  <p>Với nhiều người, đặc biệt là són tiểu nhẹ, thay đổi thói quen là bước đầu tiên và hiệu quả. Hãy áp dụng đều đặn ít nhất vài tuần.</p>
  <table>
    <tr><th>Việc nên làm</th><th>Cách làm</th><th>Tác dụng</th></tr>
    <tr><td>Uống đủ nước, đừng nhịn uống</td><td>Uống rải đều trong ngày; giảm uống 2–3 giờ trước khi ngủ</td><td>Nước tiểu cô đặc kích thích bàng quang hơn; giảm đi tiểu đêm</td></tr>
    <tr><td>Giảm đồ uống kích thích</td><td>Hạn chế cà phê, trà đặc, rượu bia, nước có ga; thử bỏ 2 tuần xem có đỡ không</td><td>Giảm tiểu gấp, tiểu nhiều lần</td></tr>
    <tr><td>Chống táo bón</td><td>Ăn rau, trái cây, ngũ cốc nguyên hạt; uống đủ nước; vận động</td><td>Giảm rặn, giảm chèn ép bàng quang</td></tr>
    <tr><td>Giảm cân nếu thừa cân</td><td>Giảm từ từ, kết hợp ăn uống và vận động</td><td>Giảm áp lực lên sàn chậu</td></tr>
    <tr><td>Bỏ thuốc lá</td><td>Nhờ hỗ trợ cai thuốc nếu cần</td><td>Giảm ho mạn tính</td></tr>
    <tr><td>Tập cơ sàn chậu</td><td>Xem hướng dẫn mục 6</td><td>Tăng sức giữ của niệu đạo</td></tr>
    <tr><td>Tập luyện bàng quang</td><td>Đi tiểu theo giờ cố định, kéo dài dần khoảng cách thêm 15 phút mỗi tuần</td><td>Giảm tiểu gấp, tăng sức chứa bàng quang</td></tr>
    <tr><td>Siết trước khi gắng sức</td><td>Chủ động siết cơ sàn chậu ngay trước khi ho, hắt hơi, nâng đồ</td><td>Giảm rỉ khi gắng sức</td></tr>
    <tr><td>Nhà vệ sinh dễ tiếp cận</td><td>Đèn ngủ, lối đi thông thoáng, quần áo dễ cởi (với người cao tuổi)</td><td>Giảm són tiểu chức năng, phòng ngã ban đêm</td></tr>
  </table>
  <h3>Nhật ký bàng quang: công cụ đơn giản mà bác sĩ rất cần</h3>
  <p>Ghi lại trong 3 ngày: giờ đi tiểu và lượng ước tính, giờ và loại đồ uống, những lần rỉ (đang làm gì, rỉ ít hay nhiều), số lần thức dậy ban đêm. Nhật ký giúp bạn tự nhận ra thói quen gây són và giúp bác sĩ phân biệt dạng són tiểu nhanh hơn.</p>

  <h2 id="san-chau">6. Hướng dẫn tập cơ sàn chậu (bài tập Kegel)</h2>
  <ol>
    <li><strong>Tìm đúng cơ:</strong> tưởng tượng bạn đang nhịn tiểu và nhịn trung tiện cùng lúc. Cảm giác "thắt và kéo lên" ở vùng đáy chậu chính là cơ sàn chậu. Không gồng bụng, mông, đùi, không nín thở.</li>
    <li><strong>Co chậm:</strong> siết cơ, giữ vài giây (tăng dần đến khoảng 10 giây), thả lỏng hoàn toàn bằng thời gian giữ.</li>
    <li><strong>Co nhanh:</strong> siết mạnh rồi thả ngay, lặp lại vài lần để tạo phản xạ khi ho, hắt hơi.</li>
    <li><strong>Đều đặn:</strong> tập nhiều lần mỗi ngày, ở các tư thế nằm, ngồi, đứng.</li>
    <li><strong>Kiên trì:</strong> hướng dẫn của NICE (Anh) khuyến nghị tập có giám sát ít nhất 3 tháng trước khi đánh giá hiệu quả.</li>
  </ol>
  <p>Không tập bằng cách nhịn tiểu giữa dòng thường xuyên, vì có thể khiến bàng quang không tống hết nước tiểu. Nếu khó xác định đúng cơ, hãy nhờ bác sĩ hoặc chuyên viên phục hồi chức năng sàn chậu; nhiều nơi có máy phản hồi sinh học (biofeedback) giúp bạn nhìn thấy mình đang siết đúng hay sai.</p>

  <h2 id="di-kham">7. Khi nào nên đi khám?</h2>
  <p>Bạn nên đi khám nếu són tiểu:</p>
  <ul>
    <li>Ảnh hưởng đến công việc, tập luyện, giấc ngủ, đời sống vợ chồng hoặc khiến bạn ngại ra ngoài.</li>
    <li>Mới xuất hiện không rõ lý do, hoặc ngày càng nặng.</li>
    <li>Không cải thiện sau khoảng 3 tháng tự tập sàn chậu và điều chỉnh sinh hoạt.</li>
    <li>Kèm cảm giác nặng, có khối sa xuống ở vùng kín.</li>
  </ul>
  <p><strong>Cần đi khám sớm hoặc cấp cứu</strong> khi:</p>
  <ul>
    <li>Tiểu buốt, tiểu rắt, nước tiểu đục, có mùi hôi, <strong>tiểu ra máu</strong>.</li>
    <li>Sốt, ớn lạnh, đau lưng hoặc đau hông.</li>
    <li><strong>Bí tiểu</strong>, không đi tiểu được hoặc rỉ liên tục kèm bụng dưới căng tức.</li>
    <li>Són tiểu đột ngột kèm yếu tay chân, tê bì, mất cảm giác vùng mông, đùi, khó đi lại, nói khó: <strong>gọi 115</strong>.</li>
    <li>Ở người cao tuổi: són tiểu mới kèm lú lẫn, mệt bất thường (có thể là nhiễm khuẩn tiết niệu).</li>
  </ul>

  <h2 id="kham-o-dau">8. Đi khám ở đâu, khám chuyên khoa gì?</h2>
  <table>
    <tr><th>Tình huống</th><th>Chuyên khoa phù hợp</th></tr>
    <tr><td>Phụ nữ són tiểu sau sinh, mãn kinh, kèm sa tạng chậu</td><td>Sản phụ khoa (đơn vị sàn chậu, nếu có) hoặc Tiết niệu (niệu nữ)</td></tr>
    <tr><td>Són tiểu gấp, tiểu nhiều lần, tiểu đêm</td><td>Tiết niệu (Thận – Tiết niệu)</td></tr>
    <tr><td>Nam giới són tiểu, dòng tiểu yếu</td><td>Tiết niệu (Nam học – Tiết niệu)</td></tr>
    <tr><td>Người cao tuổi nhiều bệnh nền, sa sút trí nhớ</td><td>Lão khoa, sau đó chuyển chuyên khoa nếu cần</td></tr>
    <tr><td>Cần tập sàn chậu có hướng dẫn</td><td>Phục hồi chức năng (vật lý trị liệu sàn chậu)</td></tr>
    <tr><td>Són tiểu kèm bệnh thần kinh (đột quỵ, Parkinson…)</td><td>Thần kinh phối hợp Tiết niệu</td></tr>
  </table>
  <p><strong>Gợi ý nơi khám:</strong> các bệnh viện lớn có chuyên khoa Tiết niệu và Sản phụ khoa đều khám được són tiểu. Tại Hà Nội có thể tham khảo Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức, Bệnh viện Phụ sản Trung ương, Bệnh viện Phụ sản Hà Nội, Bệnh viện Lão khoa Trung ương (cho người cao tuổi), Bệnh viện Đại học Y Hà Nội; tại TP.HCM có Bệnh viện Bình Dân, Bệnh viện Từ Dũ, Bệnh viện Hùng Vương, Bệnh viện Chợ Rẫy; một số bệnh viện tư nhân có đơn vị niệu nữ hoặc sàn chậu riêng. Trước khi đi, hãy gọi tổng đài để hỏi bệnh viện có <strong>khám sàn chậu / niệu nữ</strong> không và đặt lịch trước.</p>
  <h3>Chuẩn bị khi đi khám</h3>
  <ul>
    <li>Nhật ký bàng quang 3 ngày.</li>
    <li>Danh sách thuốc đang dùng, bệnh nền, số lần sinh, cách sinh.</li>
    <li>Thời điểm bắt đầu són tiểu, khi nào rỉ, rỉ nhiều hay ít.</li>
    <li>Bác sĩ có thể khám vùng chậu, cho xét nghiệm nước tiểu, siêu âm đo lượng nước tiểu tồn lưu, đôi khi đo niệu động học. Đây là các thăm khám thông thường, bạn không cần ngại.</li>
  </ul>

  <h2 id="dieu-tri">9. Các phương pháp điều trị són tiểu</h2>
  <p>Bác sĩ thường bắt đầu từ phương pháp đơn giản, ít xâm lấn nhất, rồi mới đến thuốc và thủ thuật.</p>
  <table>
    <tr><th>Phương pháp</th><th>Dùng cho</th><th>Ghi chú</th></tr>
    <tr><td>Thay đổi lối sống, nhật ký bàng quang</td><td>Mọi dạng</td><td>Luôn là bước đầu tiên</td></tr>
    <tr><td>Tập cơ sàn chậu có hướng dẫn, phản hồi sinh học, kích thích điện</td><td>Són tiểu do gắng sức, hỗn hợp</td><td>Cần kiên trì ít nhất 3 tháng</td></tr>
    <tr><td>Tập luyện bàng quang</td><td>Són tiểu gấp, hỗn hợp</td><td>Thường kéo dài vài tuần đến vài tháng</td></tr>
    <tr><td>Thuốc giảm co bóp bàng quang</td><td>Són tiểu gấp</td><td>Chỉ dùng theo đơn; có tác dụng phụ</td></tr>
    <tr><td>Estrogen tại chỗ</td><td>Một số phụ nữ sau mãn kinh</td><td>Theo chỉ định bác sĩ</td></tr>
    <tr><td>Vòng nâng âm đạo (pessary)</td><td>Són tiểu gắng sức, sa tạng chậu</td><td>Không phẫu thuật</td></tr>
    <tr><td>Kích thích thần kinh, tiêm botox bàng quang</td><td>Són tiểu gấp không đáp ứng thuốc</td><td>Thực hiện ở cơ sở chuyên sâu</td></tr>
    <tr><td>Phẫu thuật (đặt dải nâng niệu đạo…)</td><td>Són tiểu gắng sức nặng, đã thử điều trị khác</td><td>Bác sĩ cân nhắc từng trường hợp</td></tr>
  </table>

  <h2 id="nen-dung-gi">10. Són tiểu nên dùng gì để sinh hoạt thoải mái?</h2>
  <p>Trong lúc tập luyện và điều trị, sản phẩm thấm hút giúp bạn yên tâm đi làm, tập thể dục, ra ngoài. Chọn sản phẩm theo <strong>lượng rỉ</strong> và <strong>khả năng tự sinh hoạt</strong>:</p>
  <table>
    <tr><th>Sản phẩm</th><th>Phù hợp</th><th>Ưu điểm</th><th>Hạn chế</th></tr>
    <tr><td>Băng vệ sinh thường</td><td>Không khuyến khích</td><td>Có sẵn</td><td>Thiết kế cho máu kinh, hút nước tiểu chậm, dễ có mùi</td></tr>
    <tr><td>Miếng lót chuyên cho són tiểu (dùng một lần)</td><td>Rỉ nhẹ đến vừa</td><td>Hút nhanh, khóa mùi, dễ mua</td><td>Rác thải, chi phí đều đặn, có thể cọ xát, kích ứng</td></tr>
    <tr><td><strong>Quần chống rò rỉ (quần thấm hút giặt được)</strong></td><td><strong>Rỉ nhẹ, người còn tự sinh hoạt</strong></td><td><strong>Mặc như quần lót, kín đáo, không keo dán, dùng lại nhiều lần</strong></td><td>Cần giặt, phơi; không đủ cho són tiểu nặng</td></tr>
    <tr><td>Bỉm, tã quần người lớn</td><td>Són tiểu nặng, người nằm một chỗ, người cần bảo vệ lâu</td><td>Sức chứa lớn</td><td>Bí, nóng, dễ hăm; nhiều người ngại mặc</td></tr>
    <tr><td>Tấm lót giường</td><td>Ban đêm, người cao tuổi</td><td>Bảo vệ ga, nệm</td><td>Chỉ là biện pháp hỗ trợ</td></tr>
  </table>
  <h3>Mẹo chăm sóc da khi bị són tiểu</h3>
  <ul>
    <li>Thay sản phẩm ngay khi thấy ẩm; không để nước tiểu tiếp xúc da lâu.</li>
    <li>Rửa vùng kín bằng nước sạch, thấm khô nhẹ; tránh xà phòng mạnh, sản phẩm có hương liệu.</li>
    <li>Không dùng phấn rôm vùng kín; nếu da đỏ rát, hỏi dược sĩ về kem bảo vệ da.</li>
    <li>Không nhịn uống nước để "đỡ són": nước tiểu cô đặc gây mùi nặng hơn và kích thích bàng quang.</li>
  </ul>

  <h2 id="antcare">11. Quần chống rò rỉ ANTCARE: một chiếc quần cho cả són tiểu nhẹ và kinh nguyệt</h2>
  <p>ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội. Khi chăm sóc người cao tuổi và trò chuyện với các chị em sau sinh, tuổi tiền mãn kinh, chúng tôi gặp rất nhiều người són tiểu nhẹ nhưng <strong>không muốn mặc bỉm</strong>, trong khi băng vệ sinh lại không thấm kịp nước tiểu và gây hăm. Cũng chính những chị em ấy vẫn đang có kinh nguyệt, phải dùng thêm một loại sản phẩm khác.</p>
  <p>Vì vậy ANTCARE phát triển <strong>quần chống rò rỉ</strong>: một chiếc quần mặc như quần lót bình thường, được thiết kế để dùng cho <strong>cả són tiểu nhẹ và những ngày kinh nguyệt</strong>.</p>
  <ul>
    <li><strong>Một chiếc quần, hai nhu cầu:</strong> rỉ vài giọt khi ho, hắt hơi, cười, vận động; và ngày kinh ra ít đến trung bình. Không phải mua hai loại sản phẩm.</li>
    <li><strong>Đáy quần nhiều lớp:</strong> lớp tiếp xúc da mềm, lõi thấm hút và lớp chống thấm để không thấm ra quần ngoài.</li>
    <li><strong>Vùng thấm rộng cả phía trước</strong> (nơi nước tiểu thường thấm) và kéo dài về phía sau (cho máu kinh khi nằm).</li>
    <li><strong>Dáng boy short cạp cao</strong>, ôm đùi, không xô lệch khi vận động, không lộ như bỉm.</li>
    <li><strong>Không keo dán, không cánh băng</strong>, giảm cọ xát cho da nhạy cảm.</li>
    <li><strong>Giặt và dùng lại</strong>, giảm rác thải và chi phí so với sản phẩm dùng một lần.</li>
  </ul>
  <p><strong>Nói thật với bạn:</strong> quần chống rò rỉ dành cho <strong>són tiểu nhẹ</strong>. Nếu bạn rỉ nhiều lần mỗi ngày với lượng lớn, hoặc chăm sóc người nằm một chỗ, bỉm, tã chuyên dụng vẫn là lựa chọn phù hợp hơn. Quần không điều trị són tiểu; hãy kết hợp tập sàn chậu và đi khám khi cần. ANTCARE sẽ công bố cấu tạo, chất liệu, chứng nhận vải và kết quả thử thấm với cả nước tiểu và máu kinh khi sản phẩm ra mắt.</p>

  <div class="cta">
    <h3>Quần chống rò rỉ ANTCARE – cho són tiểu nhẹ và kinh nguyệt</h3>
    <p>Sản phẩm đang chuẩn bị ra mắt. Để lại số điện thoại hoặc nhắn Zalo để nhận thông tin sớm và được tư vấn chọn size, mức thấm phù hợp.</p>
    <a class="btn" href="https://antcare.vn/quan-lot-tham-hut">Tìm hiểu quần chống rò rỉ ANTCARE</a>
    <a class="btn" href="https://zalo.me/0969032360">Tư vấn Zalo 0969 032 360</a>
  </div>

  <h2 id="faq">12. Câu hỏi thường gặp về són tiểu</h2>
  <dl class="faq">
    <dt>Són tiểu là gì?</dt>
    <dd>Són tiểu (tiểu không tự chủ) là tình trạng nước tiểu rỉ ra ngoài ý muốn, ví dụ khi ho, hắt hơi, cười, vận động hoặc khi mắc tiểu gấp không kịp vào nhà vệ sinh.</dd>
    <dt>Vì sao phụ nữ hay bị són tiểu?</dt>
    <dd>Vì mang thai, sinh con và mãn kinh làm cơ sàn chậu và mô nâng đỡ niệu đạo yếu đi; thừa cân, táo bón, ho mạn tính và tuổi tác cũng làm tăng nguy cơ.</dd>
    <dt>Són tiểu có tự khỏi không?</dt>
    <dd>Són tiểu do nguyên nhân tạm thời như nhiễm khuẩn tiết niệu, táo bón, đồ uống kích thích có thể hết khi xử lý nguyên nhân. Són tiểu do sàn chậu yếu thường không tự khỏi nhưng cải thiện rõ nhờ tập sàn chậu, điều chỉnh sinh hoạt và điều trị.</dd>
    <dt>Són tiểu có chữa được không?</dt>
    <dd>Nhiều người cải thiện rõ hoặc hết són tiểu nhờ tập cơ sàn chậu, tập luyện bàng quang, thuốc hoặc thủ thuật tùy dạng són tiểu; nên đi khám để được tư vấn đúng.</dd>
    <dt>Són tiểu nên khám ở đâu?</dt>
    <dd>Khám chuyên khoa Tiết niệu hoặc Sản phụ khoa tại các bệnh viện lớn; nhiều nơi có đơn vị sàn chậu hoặc niệu nữ. Người cao tuổi có thể khám Lão khoa trước.</dd>
    <dt>Són tiểu nên kiêng uống gì?</dt>
    <dd>Nên hạn chế cà phê, trà đặc, rượu bia và nước có ga; không nên nhịn uống nước mà hãy uống rải đều trong ngày và giảm uống trước khi ngủ.</dd>
    <dt>Bị són tiểu nhẹ nên dùng gì?</dt>
    <dd>Có thể dùng quần chống rò rỉ giặt được hoặc miếng lót chuyên cho són tiểu; không nên dùng băng vệ sinh thường vì hút nước tiểu chậm và dễ có mùi.</dd>
    <dt>Quần chống rò rỉ có dùng cho cả kinh nguyệt không?</dt>
    <dd>Có loại được thiết kế cho cả hai. Quần chống rò rỉ ANTCARE được phát triển để dùng cho són tiểu nhẹ và ngày kinh ra ít đến trung bình.</dd>
    <dt>Són tiểu có nguy hiểm không?</dt>
    <dd>Thường không nguy hiểm đến tính mạng nhưng ảnh hưởng nhiều đến chất lượng sống. Cần đi khám ngay nếu kèm tiểu ra máu, sốt, đau lưng, bí tiểu hoặc yếu, tê chân tay.</dd>
  </dl>
  <p class="note">Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.</p>
</article>

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tham khảo</h3>
  <ul>
    <li><a href="https://www.continence.org.au/about-incontinence/what-is-incontinence/statistics-on-incontinence/" rel="nofollow">Continence Health Australia – Statistics on incontinence (Deloitte Access Economics, 2024)</a></li>
    <li><a href="https://www.nhs.uk/conditions/urinary-incontinence/" rel="nofollow">NHS – Urinary incontinence</a></li>
    <li><a href="https://www.nhs.uk/conditions/urinary-incontinence/treatment/" rel="nofollow">NHS – Urinary incontinence: treatment</a></li>
    <li><a href="https://www.nice.org.uk/guidance/qs77/chapter/Quality-statement-4-Supervised-pelvic-floor-muscle-training" rel="nofollow">NICE QS77 – Supervised pelvic floor muscle training</a></li>
    <li><a href="https://evidence.nihr.ac.uk/alert/pelvic-floor-muscle-training-can-improve-symptoms-of-urinary-incontinence/" rel="nofollow">NIHR Evidence – Tập cơ sàn chậu cải thiện tiểu không tự chủ</a></li>
    <li><a href="https://vnexpress.net/dieu-tri-son-tieu-nu-khong-phau-thuat-4739420.html" rel="nofollow">VnExpress (4/2024) – Điều trị són tiểu nữ không phẫu thuật</a></li>
    <li><a href="https://vnexpress.net/tieu-khong-kiem-soat-sau-sinh-4633549.html" rel="nofollow">VnExpress – Tiểu không kiểm soát sau sinh</a></li>
  </ul>
</section>
</div>
</body>
</html>`;

fs.writeFileSync(userHtmlPath, userHtml, 'utf8');
console.log('Saved user HTML to scratch/user_son_tieu_pillar.html');

