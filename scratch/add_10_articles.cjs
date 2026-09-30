const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Common author object
const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

const articles = [
  // 1. so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi
  {
    id: 141,
    slug: "so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi",
    oldSlugs: ["blog/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi", "tin-tuc/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi"],
    metaTitle: "Sổ sức khỏe điện tử VNeID cho người cao tuổi: cách cài cho bố mẹ",
    title: "Sổ sức khỏe điện tử VNeID cho người cao tuổi: Hướng dẫn con cái chuẩn bị cho bố mẹ trước khi đi khám",
    category: "Hướng dẫn y tế",
    date: "28/09/2026",
    author: authorObj,
    description: "Từ 2026 người cao tuổi đi khám có thể dùng VNeID thay sổ giấy. Hướng dẫn con cái kích hoạt, kiểm tra và chuẩn bị cho bố mẹ trước ngày khám.",
    excerpt: "Từ 2026 người cao tuổi đi khám có thể dùng VNeID thay sổ giấy. Hướng dẫn con cái kích hoạt, kiểm tra và chuẩn bị cho bố mẹ trước ngày khám.",
    image: "/images/tin-tuc/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Từ ngày 1/1/2026, các cơ sở khám chữa bệnh phải liên thông dữ liệu Sổ sức khỏe điện tử lên ứng dụng VNeID. Người cao tuổi có thể dùng VNeID thay sổ khám giấy. Con cái nên kích hoạt sẵn cho bố mẹ, kiểm tra thông tin thẻ BHYT và lịch hẹn tái khám trước mỗi lần đi viện.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi.jpg" alt="Sổ sức khỏe điện tử VNeID trên điện thoại thông minh cho người cao tuổi" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Ứng dụng Sổ sức khỏe điện tử tích hợp trên VNeID giúp số hóa toàn bộ lịch sử khám bệnh và thẻ BHYT của cha mẹ.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Sổ sức khỏe điện tử trên VNeID là gì?</h2>
<p>Đây là hồ sơ sức khỏe cá nhân tích hợp trong ứng dụng định danh điện tử VNeID. Trên sổ có thông tin cá nhân, số định danh, thẻ BHYT, lịch sử khám chữa bệnh, phiếu hẹn khám lại và giấy chuyển tuyến. Theo hướng dẫn của Bộ Y tế, các thông tin này có giá trị như bản giấy.</p>
<p>Người bệnh hoặc người đại diện hợp pháp còn có thể tải bản ghi của từng đợt khám dưới dạng PDF ngay trên ứng dụng. Với người cao tuổi hay khám nhiều chuyên khoa, đây là cách giữ hồ sơ gọn hơn hẳn một túi giấy tờ.</p>
<p>Theo Bộ Y tế, đến đầu tháng 1/2026 cả nước đã có hơn 30 triệu Sổ sức khỏe điện tử trên VNeID. Năm nay Bộ Y tế tiếp tục Chiến dịch 100 ngày tạo lập, cập nhật sổ, kéo dài từ 8/7 đến 15/10/2026. Nếu bố mẹ chưa có sổ, đây là thời điểm thuận lợi để làm.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao người cao tuổi cần con cái hỗ trợ?</h2>
<p>Nhiều ông bà không quen điện thoại thông minh, hay quên mật khẩu, chữ trên màn hình nhỏ khó đọc. Đến bệnh viện đông người, việc mở đúng ứng dụng và đúng mục càng dễ rối. Chính Bộ Y tế cũng khuyến khích người thân giúp người cao tuổi làm quen với VNeID.</p>
<p>Chuẩn bị trước ở nhà, khi không vội, sẽ giúp bố mẹ tự tin hơn nhiều so với lúc đứng trước quầy tiếp đón.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Các bước chuẩn bị Sổ sức khỏe điện tử cho bố mẹ</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><strong>Kiểm tra tài khoản:</strong> Đảm bảo bố mẹ đã có tài khoản định danh điện tử mức 2 trên VNeID. Nếu chưa, liên hệ công an xã, phường nơi cư trú để kích hoạt.</li>
  <li><strong>Kích hoạt tính năng:</strong> Đăng nhập VNeID, mở mục "Sổ sức khỏe điện tử", đọc điều khoản và chọn đồng ý sử dụng.</li>
  <li><strong>Cập nhật thông tin:</strong> Bổ sung đầy đủ thông tin cá nhân và tiền sử y tế cơ bản theo yêu cầu của ứng dụng.</li>
  <li><strong>Rà soát BHYT:</strong> Kiểm tra thông tin thẻ BHYT hiển thị đúng số thẻ, hạn dùng và nơi đăng ký khám chữa bệnh ban đầu.</li>
  <li><strong>Xem lịch sử khám:</strong> Mở mục lịch sử khám để xem các lần khám gần nhất đã được cơ sở y tế đồng bộ chưa.</li>
  <li><strong>Thực hành trước:</strong> Tập cho bố mẹ mở sổ vài lần, hoặc ghi các bước ra giấy chữ to để ông bà tự làm khi cần.</li>
</ol>
<p><em>Lưu ý: Giao diện ứng dụng có thể thay đổi theo từng phiên bản cập nhật, nên làm theo hướng dẫn hiển thị trực tiếp trên màn hình.</em></p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Checklist trước ngày đi khám</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Điện thoại sạc đầy pin, bố mẹ nhớ hoặc ghi lại mã đăng nhập/passcode VNeID.</li>
  <li>Mang Căn cước công dân gắn chip để dự phòng khi mạng chập chờn hoặc quên mật khẩu.</li>
  <li>Danh sách các loại thuốc đang dùng hằng ngày, kể cả thực phẩm chức năng và thuốc nam.</li>
  <li>Kết quả xét nghiệm, chẩn đoán hình ảnh cũ (bản PDF trên VNeID hoặc bản giấy).</li>
  <li>Ghi sẵn các câu hỏi gia đình muốn tham vấn bác sĩ ra giấy chữ to.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Lưu ý bảo mật cho người cao tuổi</h2>
<p>Tuyệt đối không đọc mã đăng nhập hay mã OTP cho bất kỳ ai qua điện thoại, kể cả người xưng là nhân viên bệnh viện hay cán bộ cơ quan chức năng. Chỉ sử dụng ứng dụng VNeID chính thức của Bộ Công an. Bộ Y tế nhấn mạnh việc lưu trữ và chia sẻ dữ liệu sức khỏe phải tuân thủ nghiêm ngặt Luật Bảo vệ dữ liệu cá nhân.</p>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Với dịch vụ <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700;">Đồng hành khám bệnh</a>, Kiến Y tế của ANTCARE (có nền tảng điều dưỡng, chứng chỉ sơ cấp cứu) đón ông bà tại nhà, hỗ trợ làm thủ tục bằng VNeID hoặc căn cước tại quầy tiếp đón/ki-ốt, đi cùng qua từng phòng khám và ghi lại lời dặn của bác sĩ để gửi tóm tắt về cho gia đình.</p>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Kiến Y tế hướng dẫn ông bà tự thao tác an toàn trên điện thoại; tài khoản VNeID hoàn toàn do gia đình và ông bà quản lý.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh cho bố mẹ:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn 24/7: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ không dùng điện thoại thông minh thì có đi khám được không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Được. Người bệnh vẫn có thể dùng Căn cước công dân gắn chip hoặc thẻ BHYT bản cứng để làm thủ tục tiếp đón. VNeID chỉ giúp quy trình nhanh gọn và lưu trữ đồng bộ hơn.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bệnh viện có được yêu cầu nộp giấy tờ bản giấy nữa không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Theo Quyết định 31/QĐ-BYT ngày 6/1/2026, dữ liệu trên Sổ sức khỏe điện tử có thể thay thế giấy tờ y tế tương đương trong các thủ tục hành chính khi dữ liệu đã được liên thông và hiển thị đầy đủ.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Kết quả khám có tự cập nhật lên VNeID không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Các cơ sở khám chữa bệnh có trách nhiệm liên thông dữ liệu từ 1/1/2026. Tuy vậy, gia đình vẫn nên kiểm tra lại sau mỗi lần khám và lưu bản chụp hoặc bản cứng kết quả quan trọng.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Con ở xa có theo dõi được lịch khám của bố mẹ không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Gia đình có thể cùng bố mẹ tải bản PDF từng đợt khám để lưu trữ. Khi dùng dịch vụ của ANTCARE, Kiến Y tế gửi báo cáo tóm tắt buổi khám chi tiết cho người thân ngay sau khi kết thúc.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý y tế (YMYL):</strong> Bài viết mang tính thông tin tham khảo, không thay thế hướng dẫn chuyên môn của cơ sở y tế.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://tuoitre.vn/so-suc-khoe-dien-tu-tren-vneid-chinh-thuc-thay-the-so-giay-trong-thu-tuc-hanh-chinh-20260106164303444.htm" target="_blank" rel="noopener nofollow">Tuổi Trẻ – Sổ sức khỏe điện tử trên VNeID thay thế sổ giấy</a> · 
  <a href="https://mst.gov.vn/so-hoa-thong-tin-y-te-thuan-tien-hon-cho-nguoi-dan-197260909094710524.htm" target="_blank" rel="noopener nofollow">Cổng TTĐT Bộ KH&CN – Số hóa thông tin y tế</a> · 
  <a href="https://baohatinh.vn/nguoi-di-kham-benh-can-biet-tinh-nang-nay-tren-vneid-post317598.html" target="_blank" rel="noopener nofollow">Báo Hà Tĩnh – Người đi khám cần biết tính năng này trên VNeID</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi#article",
          "headline": "Sổ sức khỏe điện tử VNeID cho người cao tuổi: Hướng dẫn con cái chuẩn bị cho bố mẹ trước khi đi khám",
          "description": "Từ 2026 người cao tuổi đi khám có thể dùng VNeID thay sổ giấy. Hướng dẫn con cái kích hoạt, kiểm tra và chuẩn bị cho bố mẹ trước ngày khám.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi.jpg",
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
          "@id": "https://antcare.vn/news/so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Bố mẹ không dùng điện thoại thông minh thì có đi khám được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Được. Người bệnh vẫn có thể dùng căn cước công dân gắn chip hoặc thẻ BHYT để làm thủ tục. VNeID chỉ giúp nhanh và gọn hơn."
              }
            },
            {
              "@type": "Question",
              "name": "Bệnh viện có được yêu cầu nộp giấy tờ bản giấy nữa không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Theo Quyết định 31/QĐ-BYT ngày 6/1/2026, dữ liệu trên Sổ sức khỏe điện tử có thể thay thế giấy tờ y tế tương đương trong một số thủ tục, khi dữ liệu đã được liên thông và hiển thị đầy đủ."
              }
            },
            {
              "@type": "Question",
              "name": "Kết quả khám có tự cập nhật lên VNeID không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Các cơ sở khám chữa bệnh có trách nhiệm liên thông dữ liệu từ 1/1/2026. Tuy vậy, gia đình nên kiểm tra sau mỗi lần khám và giữ thêm bản kết quả quan trọng."
              }
            },
            {
              "@type": "Question",
              "name": "Con ở xa có theo dõi được lịch khám của bố mẹ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gia đình có thể cùng bố mẹ tải bản PDF từng đợt khám để lưu trữ. Khi dùng dịch vụ của ANTCARE, Kiến Y tế gửi tóm tắt buổi khám cho người thân sau mỗi lần đi viện."
              }
            }
          ]
        }
      ]
    }
  },

  // 2. dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong
  {
    id: 142,
    slug: "dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong",
    oldSlugs: ["blog/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong", "tin-tuc/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong"],
    metaTitle: "Đột quỵ ở người cao tuổi khi giao mùa: dấu hiệu và cách phòng",
    title: "Giao mùa thu – đông: Vì sao người cao tuổi dễ đột quỵ và cách theo dõi tại nhà",
    category: "Sức khỏe người già",
    date: "28/09/2026",
    author: authorObj,
    description: "Số ca đột quỵ có thể tăng 20–30% vào mùa lạnh. Cách nhận biết sớm, đo huyết áp đúng và giữ ấm cho bố mẹ khi miền Bắc chuyển lạnh.",
    excerpt: "Số ca đột quỵ có thể tăng 20–30% vào mùa lạnh. Cách nhận biết sớm, đo huyết áp đúng và giữ ấm cho bố mẹ khi miền Bắc chuyển lạnh.",
    image: "/images/tin-tuc/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Khi trời chuyển lạnh, mạch máu co lại và máu đặc hơn, khiến huyết áp dễ tăng và nguy cơ đột quỵ cao hơn, nhất là ở người cao tuổi có bệnh nền. Gia đình nên đo huyết áp cho bố mẹ đều đặn, giữ ấm buổi sáng sớm và đêm, và gọi cấp cứu 115 ngay khi thấy dấu hiệu méo miệng, nói khó, yếu tay chân.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong.jpg" alt="Phòng ngừa đột quỵ ở người cao tuổi khi giao mùa thu đông và theo dõi huyết áp" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Theo dõi huyết áp định kỳ tại nhà và giữ ấm đúng cách trong giai đoạn chuyển mùa giúp giảm nguy cơ đột quỵ.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Đột quỵ tăng bao nhiêu vào mùa lạnh?</h2>
<p>Theo các bác sĩ thần kinh, vào các tháng lạnh nhất (tháng 11, 12, 1, 2), tỷ lệ đột quỵ có thể tăng khoảng 20–30% so với ngày thời tiết bình thường. Không chỉ cái lạnh, những ngày nhiệt độ giảm nhanh sau nắng nóng cũng làm số ca đột quỵ tăng trong 24–72 giờ sau đó.</p>
<p>Tổ chức Đột quỵ Thế giới và WHO hiện coi nhiệt độ cực đoan là yếu tố nguy cơ độc lập của bệnh tim mạch và đột quỵ. Miền Bắc thường đón các đợt không khí lạnh từ tháng 10, nên giai đoạn giao mùa là lúc gia đình cần chú ý sớm.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao người cao tuổi chịu ảnh hưởng nặng nhất?</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Mạch máu ở người lớn tuổi thường đã xơ cứng, lòng mạch hẹp, kém đàn hồi.</li>
  <li>Khi lạnh kéo dài, máu có xu hướng đặc hơn, chảy chậm hơn và dễ hình thành cục máu đông.</li>
  <li>Khả năng điều hòa thân nhiệt kém, nên cơ thể phản ứng chậm với thay đổi nhiệt độ đột ngột.</li>
  <li>Mùa lạnh người ta thường ít vận động, uống ít nước và ăn nhiều chất béo hơn.</li>
</ul>
<p>Nguy cơ cao nhất rơi vào người có tăng huyết áp, đái tháo đường, rối loạn mỡ máu, bệnh tim mạch hoặc từng bị cơn thiếu máu não thoáng qua.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu đột quỵ cần nhớ (FAST / BE-FAST)</h2>
<p>Các bác sĩ khuyến cáo đưa người bệnh đến cơ sở y tế có đơn vị đột quỵ ngay khi có một trong các dấu hiệu sau:</p>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li><strong>B (Balance):</strong> Mất thăng bằng, chóng mặt đột ngột, đi loạng choạng.</li>
  <li><strong>E (Eyes):</strong> Nhìn mờ hoặc mất thị lực một bên mắt.</li>
  <li><strong>F (Face):</strong> Méo miệng, lệch một bên mặt, nụ cười méo mó.</li>
  <li><strong>A (Arms):</strong> Yếu hoặc tê bì một bên tay, chân; không nhấc được tay lên.</li>
  <li><strong>S (Speech):</strong> Nói khó, nói ngọng, líu lưỡi hoặc không hiểu lời người khác.</li>
  <li><strong>T (Time):</strong> Thời gian là vàng! Gọi cấp cứu 115 ngay lập tức.</li>
</ul>
<p><strong>"Giờ vàng"</strong> điều trị đột quỵ nhồi máu não thường là 4–4,5 giờ đầu sau khi khởi phát triệu chứng. Đến viện trong khoảng này, người bệnh có cơ hội được dùng thuốc tiêu sợi huyết hoặc can thiệp lấy huyết khối cơ học, giảm tối đa di chứng tàn phế. <em>Tuyệt đối không cạo gió, chích máu đầu ngón tay hay cho uống thuốc dân gian: hãy gọi 115 ngay.</em></p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Cách theo dõi huyết áp cho bố mẹ tại nhà</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li>Đo vào cùng khung giờ mỗi ngày, ví dụ sáng sớm trước khi uống thuốc và buổi tối trước khi đi ngủ.</li>
  <li>Ngồi nghỉ tĩnh 5–10 phút, không nói chuyện khi đo, băng quấn bắp tay đặt ngang tim.</li>
  <li>Ghi lại kết quả vào sổ tay hoặc ứng dụng điện thoại, kèm triệu chứng bất thường nếu có.</li>
  <li>Mang sổ theo dõi khi đi tái khám định kỳ để bác sĩ điều chỉnh liều thuốc phù hợp.</li>
  <li>Tuyệt đối không tự ý ngừng hay thay đổi liều thuốc huyết áp khi chưa có chỉ định của bác sĩ.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Giữ ấm đúng cách trong những ngày chuyển lạnh</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Giữ ấm đầu, cổ, ngực và bàn chân bằng khăn quàng, tất ấm, nhất là sáng sớm và ban đêm.</li>
  <li>Khi thức dậy, nằm yên vài phút, ngồi dậy từ từ trên giường trước khi bước xuống sàn.</li>
  <li>Không tắm khuya, tắm nước ấm trong phòng kín gió, lau khô người nhanh trước khi mặc quần áo.</li>
  <li>Uống đủ 1.5 – 2 lít nước ấm mỗi ngày dù không khát; hạn chế rượu bia và thức ăn quá mặn.</li>
  <li>Duy trì vận động nhẹ nhàng trong nhà khi trời gió rét đậm.</li>
</ul>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Nhiều gia đình biết cần đo huyết áp cho bố mẹ, nhưng con cái đi làm cả ngày nên khó duy trì liên tục. Với dịch vụ <a href="/#giai-phap-cham-soc" style="color: #FD711A; font-weight: 700;">Trợ lý theo dõi sức khỏe</a>, Kiến Y tế của ANTCARE đến nhà theo lịch để đo huyết áp, nhịp tim, đường huyết và hướng dẫn bài tập vận động nhẹ nhàng theo chuẩn Senior Fitness.</p>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Các chỉ số được ghi chép qua từng lần thăm, giúp gia đình thấy rõ xu hướng và có dữ liệu mang theo khi đi khám. Khi cần tái khám, dịch vụ <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700;">Đồng hành khám bệnh</a> đưa ông bà đi và về an toàn.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Trợ lý sức khỏe tại nhà cho bố mẹ:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Huyết áp bao nhiêu thì người cao tuổi cần đi khám?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Ngưỡng huyết áp mục tiêu khác nhau tùy thể trạng và bệnh nền từng người. Hãy hỏi bác sĩ điều trị con số cụ thể cho bố mẹ. Nếu huyết áp tăng cao (tâm thu trên 180 mmHg) kèm đau đầu dữ dội, nôn ói, yếu tay chân, hãy đưa đi cấp cứu ngay.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Người cao tuổi có nên tập thể dục sáng sớm khi trời lạnh?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Không nên ra ngoài trời tập khi sương lạnh hoặc gió rét. Hãy lùi giờ tập khi trời đã có nắng ấm, hoặc tập các bài tập dưỡng sinh, co duỗi nhẹ nhàng trong phòng kín gió.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Chỉ người có bệnh nền mới cần lo đột quỵ?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Người có bệnh nền có nguy cơ cao nhất, nhưng đột quỵ có thể xảy ra ở bất kỳ ai khi thời tiết thay đổi đột ngột. Người cao tuổi chưa từng đo huyết áp nên kiểm tra định kỳ trước mùa đông.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý y tế (YMYL):</strong> Bài viết mang tính thông tin, không thay thế chẩn đoán và chỉ định điều trị của bác sĩ. Khi nghi ngờ đột quỵ, gọi 115 ngay.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://tamanhhospital.vn/tin-tuc/dot-quy-tang-20-30-trong-mua-lanh/" target="_blank" rel="noopener nofollow">Bệnh viện Tâm Anh – Đột quỵ tăng 20–30% trong mùa lạnh</a> · 
  <a href="https://www.nguoiduatin.vn/chuyen-gia-ly-giai-thoi-tiet-ret-dam-ret-hai-lam-tang-nguy-co-dot-quy-204260123090246978.htm" target="_blank" rel="noopener nofollow">Người Đưa Tin – Rét đậm làm tăng nguy cơ đột quỵ</a> · 
  <a href="https://vietbao.vn/mua-nang-that-thuong-kich-hoat-con-dot-quy-601020.html" target="_blank" rel="noopener nofollow">Vietbao – Mưa nắng thất thường kích hoạt cơn đột quỵ</a> · 
  <a href="https://baohaiphong.vn/nang-nong-gay-gat-nguoi-cao-tuoi-nhap-vien-vi-dot-quy-tang-546344.html" target="_blank" rel="noopener nofollow">Báo Hải Phòng – Người cao tuổi nhập viện vì đột quỵ</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong#article",
          "headline": "Giao mùa thu – đông: Vì sao người cao tuổi dễ đột quỵ và cách theo dõi tại nhà",
          "description": "Số ca đột quỵ có thể tăng 20–30% vào mùa lạnh. Cách nhận biết sớm, đo huyết áp đúng và giữ ấm cho bố mẹ khi miền Bắc chuyển lạnh.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong.jpg",
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
          "@id": "https://antcare.vn/news/dot-quy-nguoi-cao-tuoi-giao-mua-thu-dong#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Huyết áp bao nhiêu thì người cao tuổi cần đi khám?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ngưỡng mục tiêu khác nhau tùy bệnh nền của từng người. Hãy hỏi bác sĩ đang điều trị con số cụ thể cho bố mẹ và ghi lại. Nếu huyết áp tăng cao kèm đau đầu dữ dội, nôn, yếu tay chân, đưa đi cấp cứu ngay."
              }
            },
            {
              "@type": "Question",
              "name": "Người cao tuổi có nên tập thể dục sáng sớm khi trời lạnh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nên lùi giờ tập khi trời đã ấm hơn, hoặc tập nhẹ trong nhà. Tránh ra ngoài đột ngột từ phòng ấm."
              }
            },
            {
              "@type": "Question",
              "name": "Chỉ người có bệnh nền mới cần lo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Người có bệnh nền có nguy cơ cao nhất, nhưng đột quỵ có thể xảy ra ở bất kỳ ai. Người cao tuổi chưa từng đo huyết áp nên kiểm tra ít nhất một lần trước mùa lạnh."
              }
            }
          ]
        }
      ]
    }
  },

  // 3. kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026
  {
    id: 143,
    slug: "kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026",
    oldSlugs: ["blog/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026", "tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026"],
    metaTitle: "Khám sức khỏe định kỳ miễn phí cho người cao tuổi 2026: cần chuẩn bị gì",
    title: "Khám sức khỏe định kỳ miễn phí cho người cao tuổi từ 2026: Gia đình cần biết gì để không bỏ lỡ?",
    category: "Chính sách & Quyền lợi",
    date: "28/09/2026",
    author: authorObj,
    description: "Từ 2026, người cao tuổi được khám định kỳ hoặc sàng lọc miễn phí ít nhất 1 lần/năm. Hỏi ở đâu, chuẩn bị gì và làm gì khi kết quả bất thường.",
    excerpt: "Từ 2026, người cao tuổi được khám định kỳ hoặc sàng lọc miễn phí ít nhất 1 lần/năm. Hỏi ở đâu, chuẩn bị gì và làm gì khi kết quả bất thường.",
    image: "/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Theo Quyết định 1116/QĐ-TTg ngày 22/6/2026, từ năm 2026 người cao tuổi được khám sức khỏe định kỳ hoặc khám sàng lọc miễn phí ít nhất mỗi năm một lần và được lập hồ sơ theo dõi sức khỏe. Gia đình nên hỏi lịch tại trạm y tế xã, phường nơi bố mẹ cư trú, chuẩn bị giấy tờ và đặc biệt là theo đuổi tái khám nếu kết quả có dấu hiệu bất thường.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg" alt="Chính sách khám sức khỏe định kỳ miễn phí cho người cao tuổi năm 2026" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Chính sách khám định kỳ miễn phí hằng năm giúp phát hiện sớm bệnh không lây nhiễm ở người cao tuổi.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Chính sách mới quy định gì?</h2>
<p>Quyết định 1116 sửa đổi Chương trình Chăm sóc sức khỏe người cao tuổi đến năm 2030. Điểm mới quan trọng: người cao tuổi không chỉ được khám miễn phí ít nhất một lần mỗi năm mà còn được lập hồ sơ để theo dõi và quản lý sức khỏe lâu dài.</p>
<p>Mục tiêu đến năm 2030 là ít nhất 90% người cao tuổi được phát hiện, điều trị và quản lý các bệnh không lây nhiễm như ung thư, tim mạch, tăng huyết áp, đái tháo đường, bệnh phổi tắc nghẽn mạn tính và sa sút trí tuệ. Quyết định cũng giao Bộ Y tế nghiên cứu, vận hành mô hình cơ sở chăm sóc người cao tuổi ban ngày.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Bố mẹ được khám ở đâu?</h2>
<p>Việc khám được tổ chức qua mạng lưới y tế địa phương: trạm y tế xã, phường phối hợp với bệnh viện tuyến trên, bệnh viện lão khoa hoặc bệnh viện đa khoa có chuyên khoa lão. Tại Hà Nội, thành phố đã yêu cầu rà soát, lập danh sách đối tượng khám định kỳ, khám sàng lọc miễn phí.</p>
<p>Cách nhanh nhất là liên hệ trạm y tế hoặc tổ dân phố, chi hội người cao tuổi nơi bố mẹ đang ở để hỏi lịch cụ thể. Mỗi địa phương triển khai theo kế hoạch riêng.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Chuẩn bị gì trước buổi khám?</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Căn cước công dân gắn chip hoặc VNeID, thẻ BHYT.</li>
  <li>Nhịn ăn sáng nếu có xét nghiệm máu (hỏi trước nơi khám).</li>
  <li>Danh sách thuốc đang dùng và các bệnh đã biết.</li>
  <li>Kết quả khám gần nhất, sổ theo dõi huyết áp hoặc đường huyết nếu có.</li>
  <li>Kính, máy trợ thính, gậy hoặc khung tập đi nếu ông bà đang dùng.</li>
  <li>Một người đi cùng để nghe và ghi lại lời dặn.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Khám sàng lọc không phải điểm kết thúc</h2>
<p>Khám sàng lọc giúp phát hiện sớm dấu hiệu như huyết áp cao, đường huyết cao, suy giảm trí nhớ. Khi có dấu hiệu bất thường, bố mẹ thường được khuyên khám chuyên khoa ở bệnh viện. Đây là bước nhiều gia đình bỏ lỡ, vì con cái bận, còn ông bà ngại đi viện một mình.</p>
<p>Sau buổi khám, gia đình nên:</p>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li>Đọc kỹ kết quả và hỏi lại nơi khám chỉ số nào cần theo dõi.</li>
  <li>Đặt lịch khám chuyên khoa sớm nếu được khuyên.</li>
  <li>Lưu kết quả vào hồ sơ sức khỏe (Sổ sức khỏe điện tử trên VNeID hoặc bản giấy).</li>
  <li>Theo dõi các chỉ số định kỳ tại nhà cho đến lần khám sau.</li>
</ol>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">ANTCARE giúp nối hai đầu của lần khám định kỳ. Trước và sau buổi khám, <a href="/#giai-phap-cham-soc" style="color: #FD711A; font-weight: 700;">Trợ lý theo dõi sức khỏe</a> đến nhà đo huyết áp, nhịp tim, đường huyết, ghi lại chỉ số để gia đình có dữ liệu mang theo.</p>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Khi bố mẹ cần khám chuyên khoa, <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700;">Đồng hành khám bệnh</a> có Kiến Y tế nền tảng điều dưỡng đón tận nhà, làm thủ tục, đi cùng suốt buổi khám và báo lại cho gia đình.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh hoặc Trợ lý sức khỏe:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Người bao nhiêu tuổi được tính là người cao tuổi?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Theo quy định của Luật Người cao tuổi Việt Nam, người cao tuổi là công dân từ đủ 60 tuổi trở lên.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Đã có BHYT thì có cần đi khám định kỳ miễn phí nữa không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Có. BHYT chủ yếu chi trả khi đi khám chữa bệnh, còn khám định kỳ, sàng lọc giúp phát hiện bệnh sớm trước khi có triệu chứng rõ rệt.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Khám định kỳ một lần/năm có đủ không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Với người khỏe mạnh, đây là mức tối thiểu. Người đã có bệnh mạn tính vẫn cần tái khám theo lịch bác sĩ hẹn và theo dõi chỉ số thường xuyên hơn tại nhà.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý y tế (YMYL):</strong> Bài viết mang tính thông tin. Lịch và danh mục khám cụ thể do cơ quan y tế địa phương công bố.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://baochinhphu.vn/tu-nam-2026-nguoi-cao-tuoi-duoc-kham-suc-khoe-dinh-ky-mien-phi-it-nhat-moi-nam-1-lan-102260623165043093.htm" target="_blank" rel="noopener nofollow">Báo Chính phủ – Người cao tuổi được khám định kỳ miễn phí từ 2026</a> · 
  <a href="https://www.vietnamplus.vn/nguoi-cao-tuoi-duoc-kham-suc-khoe-dinh-ky-mien-phi-moi-nam-1-lan-post1120089.vnp" target="_blank" rel="noopener nofollow">VietnamPlus – Mục tiêu 90% đến 2030</a> · 
  <a href="https://nongnghiepmoitruong.vn/nguoi-cao-tuoi-duoc-kham-suc-khoe-dinh-ky-mien-phi-it-nhat-1-lan-nam-d817854.html" target="_blank" rel="noopener nofollow">Nông nghiệp & Môi trường – Quyết định 1116/QĐ-TTg</a> · 
  <a href="https://doisongphapluat.com.vn/nguoi-cao-tuoi-duoc-kham-suc-khoe-dinh-ky-mien-phi-it-nhat-moi-nam-1-lan-tu-nam-2026-a725822.html" target="_blank" rel="noopener nofollow">Đời sống & Pháp luật – Hà Nội lập danh sách đối tượng</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026#article",
          "headline": "Khám sức khỏe định kỳ miễn phí cho người cao tuổi từ 2026: Gia đình cần biết gì để không bỏ lỡ?",
          "description": "Từ 2026, người cao tuổi được khám định kỳ hoặc sàng lọc miễn phí ít nhất 1 lần/năm. Hỏi ở đâu, chuẩn bị gì và làm gì khi kết quả bất thường.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg",
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
          "@id": "https://antcare.vn/news/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người bao nhiêu tuổi được tính là người cao tuổi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Theo quy định của Việt Nam, người cao tuổi là công dân từ đủ 60 tuổi trở lên."
              }
            },
            {
              "@type": "Question",
              "name": "Đã có BHYT thì có cần đi khám định kỳ miễn phí nữa không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. BHYT chủ yếu chi trả khi đi khám chữa bệnh, còn khám định kỳ, sàng lọc giúp phát hiện bệnh sớm trước khi có triệu chứng."
              }
            },
            {
              "@type": "Question",
              "name": "Khám định kỳ một lần/năm có đủ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Với người khỏe mạnh, đây là mức tối thiểu. Người đã có bệnh mạn tính vẫn cần tái khám theo lịch bác sĩ hẹn và theo dõi chỉ số thường xuyên hơn."
              }
            }
          ]
        }
      ]
    }
  },

  // 4. dich-vu-dong-hanh-kham-benh-la-gi
  {
    id: 144,
    slug: "dich-vu-dong-hanh-kham-benh-la-gi",
    oldSlugs: ["blog/dich-vu-dong-hanh-kham-benh-la-gi", "tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi"],
    metaTitle: "Dịch vụ đồng hành khám bệnh là gì? Ai nên dùng và quy trình ra sao",
    title: "Dịch vụ đồng hành khám bệnh là gì? Khác gì thuê xe đưa đón hay người giúp việc?",
    category: "Đồng hành đi khám",
    date: "28/09/2026",
    author: authorObj,
    description: "Đồng hành khám bệnh là dịch vụ có người nền tảng y tế đưa người cao tuổi đi khám từ nhà đến khi về. So sánh với xe đưa đón, người giúp việc và cách chọn.",
    excerpt: "Đồng hành khám bệnh là dịch vụ có người nền tảng y tế đưa người cao tuổi đi khám từ nhà đến khi về. So sánh với xe đưa đón, người giúp việc và cách chọn.",
    image: "/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Dịch vụ đồng hành khám bệnh (medical escort) là khi một người có nền tảng y tế đón người cao tuổi tại nhà, làm thủ tục, đi cùng qua từng phòng khám, ghi lại lời dặn của bác sĩ và đưa về an toàn. Khác với xe đưa đón hay người giúp việc, người đồng hành hiểu quy trình bệnh viện và biết xử trí khi ông bà mệt, chóng mặt hay gặp sự cố.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg" alt="Dịch vụ đồng hành khám bệnh chuyên nghiệp cho người cao tuổi" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Dịch vụ đồng hành khám bệnh có điều dưỡng túc trực, hỗ trợ toàn diện từ nhà đến bệnh viện và trở về.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao dịch vụ này ngày càng cần thiết?</h2>
<p>Theo Bộ Y tế, năm 2026 Việt Nam có khoảng 16,5 triệu người từ 60 tuổi trở lên, chiếm khoảng 16% dân số. Khoảng 60,9% người cao tuổi mắc từ 3 bệnh trở lên và 55% gặp khó khăn khi đi lại. Nhóm từ 80 tuổi trở lên, nhóm cần chăm sóc nhiều nhất, được dự báo tăng từ khoảng 2 triệu lên 3,3 triệu người chỉ trong 10 năm.</p>
<p>Nhiều bệnh nghĩa là nhiều lần tái khám, nhiều chuyên khoa. Trong khi đó, con cái đi làm, sống xa hoặc ở nước ngoài ngày càng phổ biến. Các chuyên gia gọi đây là động lực của "kinh tế bạc": nhu cầu chăm sóc sức khỏe, phục hồi và dịch vụ cho người cao tuổi tăng mạnh.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Người đồng hành làm những gì trong một buổi khám?</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><strong>Xác nhận trước buổi khám:</strong> Bệnh viện, chuyên khoa, giấy tờ, thuốc đang dùng, danh sách câu hỏi gia đình cần hỏi bác sĩ.</li>
  <li><strong>Đón tại nhà:</strong> Hỗ trợ ông bà lên xuống xe an toàn, che chắn khi thời tiết thay đổi.</li>
  <li><strong>Làm thủ tục hành chính:</strong> Lấy số tiếp đón, làm thủ tục BHYT, thanh toán, dùng VNeID hoặc Căn cước tại ki-ốt.</li>
  <li><strong>Đồng hành di chuyển:</strong> Đi cùng qua từng phòng khám, phòng xét nghiệm, chụp chiếu; hỗ trợ xe lăn khi di chuyển xa.</li>
  <li><strong>Lắng nghe & ghi chép:</strong> Ghi lại chẩn đoán, dặn dò của bác sĩ, đơn thuốc và lịch hẹn tái khám.</li>
  <li><strong>Đưa về & báo cáo:</strong> Đưa ông bà về nhà an toàn và gửi bản báo cáo tóm tắt buổi khám cho người thân.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">So sánh các lựa chọn khi bố mẹ cần đi khám</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <thead>
      <tr style="background: #efe7fb; color: #6633B4;">
        <th style="border: 1px solid #e4dcf2; padding: 10px; text-align: left;">Lựa chọn</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px;">Đưa đón</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px;">Đi cùng trong viện</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px;">Hiểu quy trình y tế</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px;">Xử trí khi cụ mệt</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px;">Báo lại gia đình</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 600;">Tự đi một mình</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Tùy người</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
      </tr>
      <tr>
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 600;">Taxi, xe công nghệ</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Có</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Không</td>
      </tr>
      <tr>
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 600;">Người giúp việc</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Tùy</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Có</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Thường không</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Hạn chế</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center;">Tùy</td>
      </tr>
      <tr style="background: #faf7ff;">
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 700; color: #6633B4;">Đồng hành khám bệnh</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center; color: #16a34a; font-weight: bold;">Có</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center; color: #16a34a; font-weight: bold;">Có</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center; color: #16a34a; font-weight: bold;">Có</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center; color: #16a34a; font-weight: bold;">Có (sơ cứu)</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; text-align: center; color: #16a34a; font-weight: bold;">Có</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Ai nên dùng dịch vụ đồng hành khám bệnh?</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Con cái đi làm giờ hành chính, không thể xin nghỉ phép mỗi lần bố mẹ tái khám.</li>
  <li>Gia đình có con sống ở tỉnh khác hoặc đang định cư ở nước ngoài.</li>
  <li>Người cao tuổi đi lại chậm, hay chóng mặt, nghe kém hoặc bắt đầu hay quên.</li>
  <li>Người cần khám nhiều chuyên khoa trong một buổi, hoặc làm nhiều xét nghiệm, chụp chiếu.</li>
  <li>Người vừa xuất viện, cần tái khám nhưng chưa đủ sức đi một mình.</li>
</ul>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">Dịch vụ Đồng hành khám bệnh của ANTCARE</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Tại ANTCARE – Kiến chăm tổ, người đồng hành được gọi là <strong>Kiến Y tế</strong>: có nền tảng điều dưỡng, kinh nghiệm chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Kiến Y tế đưa ông bà đi khám tại các bệnh viện lớn ở Hà Nội (Bạch Mai, Việt Đức, 108, Lão khoa TW, Xanh Pôn, Tim Hà Nội...) và phục vụ cả người cao tuổi ở các tỉnh miền Bắc.</p>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Gia đình nên đặt lịch trước ít nhất một ngày. ANTCARE nhận thanh toán từ nước ngoài, đặc biệt tiện lợi cho người con đang sống xa xứ.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh:</strong><br>
    <span>Website: <a href="https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700;">Xem chi tiết gói dịch vụ</a> · Hotline: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Người đồng hành có thay bác sĩ tư vấn không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Không. Người đồng hành hỗ trợ, ghi chép và truyền đạt lại lời dặn của bác sĩ. Mọi chẩn đoán và chỉ định thuốc hoàn toàn do bác sĩ điều trị quyết định.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Gia đình có theo dõi được buổi khám không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Có. Kiến Y tế cập nhật thông tin cho gia đình trong suốt buổi khám và gửi bản tóm tắt chi tiết sau khi kết thúc.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Ông bà ngại đi với người lạ thì sao?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Gia đình có thể giới thiệu Kiến Y tế với ông bà qua điện thoại trước ngày khám. Nhiều gia đình kết hợp thêm gói Trợ lý sức khỏe thăm nhà để ông bà quen mặt người chăm sóc trước khi đi viện.</p>
</div>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 24px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://suckhoedoisong.vn/chu-dong-thich-ung-gia-hoa-dan-so-phat-huy-toi-da-nguon-luc-nguoi-cao-tuoi-169260916202152985.htm" target="_blank" rel="noopener nofollow">Sức khỏe & Đời sống – 16,5 triệu người cao tuổi năm 2026</a> · 
  <a href="https://baomoi.com/bien-ap-luc-gia-hoa-dan-so-thanh-du-dia-tang-truong-c56136850.epi" target="_blank" rel="noopener nofollow">Thời báo Ngân hàng (qua Báo Mới) – Biến áp lực già hóa thành dư địa tăng trưởng</a> · 
  <a href="https://tuoitre.vn/viet-nam-buoc-vao-thoi-ky-dan-so-gia-trong-it-nam-toi-20260126171300799.htm" target="_blank" rel="noopener nofollow">Tuổi Trẻ – Việt Nam bước vào thời kỳ dân số già</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/dich-vu-dong-hanh-kham-benh-la-gi#article",
          "headline": "Dịch vụ đồng hành khám bệnh là gì? Khác gì thuê xe đưa đón hay người giúp việc?",
          "description": "Đồng hành khám bệnh là dịch vụ có người nền tảng y tế đưa người cao tuổi đi khám từ nhà đến khi về. So sánh với xe đưa đón, người giúp việc và cách chọn.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/dich-vu-dong-hanh-kham-benh-la-gi",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg",
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
          "@id": "https://antcare.vn/news/dich-vu-dong-hanh-kham-benh-la-gi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người đồng hành có thay bác sĩ tư vấn không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không. Người đồng hành hỗ trợ, ghi chép và truyền đạt lại lời bác sĩ. Mọi chẩn đoán và chỉ định thuốc vẫn do bác sĩ điều trị quyết định."
              }
            },
            {
              "@type": "Question",
              "name": "Gia đình có theo dõi được buổi khám không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Kiến Y tế cập nhật cho gia đình trong buổi khám và gửi tóm tắt sau khi kết thúc."
              }
            },
            {
              "@type": "Question",
              "name": "Ông bà ngại đi với người lạ thì sao?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gia đình có thể giới thiệu Kiến Y tế với ông bà qua điện thoại trước ngày khám. Nhiều gia đình kết hợp thêm gói Trợ lý sức khỏe để ông bà quen mặt người chăm sóc."
              }
            }
          ]
        }
      ]
    }
  },

  // 5. bao-hiem-y-te-nguoi-cao-tuoi-2026
  {
    id: 145,
    slug: "bao-hiem-y-te-nguoi-cao-tuoi-2026",
    oldSlugs: ["blog/bao-hiem-y-te-nguoi-cao-tuoi-2026", "tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026"],
    metaTitle: "BHYT 2026 cho người cao tuổi: ai được 100%, cần lưu ý gì",
    title: "BHYT 2026 cho người cao tuổi: Ai được hưởng 100% và cần lưu ý gì khi đưa bố mẹ đi khám?",
    category: "Chính sách & Quyền lợi",
    date: "28/09/2026",
    author: authorObj,
    description: "Từ 1/1/2026, người từ đủ 75 tuổi đang hưởng trợ cấp hưu trí xã hội được BHYT chi trả 100%. Những điểm gia đình cần biết trước khi đưa bố mẹ đi khám.",
    excerpt: "Từ 1/1/2026, người từ đủ 75 tuổi đang hưởng trợ cấp hưu trí xã hội được BHYT chi trả 100%. Những điểm gia đình cần biết trước khi đưa bố mẹ đi khám.",
    image: "/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Từ ngày 1/1/2026, người cao tuổi từ đủ 75 tuổi trở lên đang hưởng trợ cấp hưu trí xã hội, cùng người thuộc hộ cận nghèo, được BHYT chi trả 100% chi phí khám chữa bệnh trong phạm vi quyền lợi. Không phải mọi người trên 75 tuổi đều thuộc diện này, và dịch vụ ngoài phạm vi BHYT vẫn phải tự chi trả.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg" alt="Quyền lợi bảo hiểm y tế BHYT 100% cho người cao tuổi năm 2026" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Chính sách BHYT 2026 tăng mức thanh toán lên 100% cho đối tượng người từ đủ 75 tuổi hưởng trợ cấp hưu trí xã hội.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Những thay đổi BHYT từ 2026 liên quan đến người cao tuổi</h2>
<p>Nghị quyết của Quốc hội có hiệu lực từ 1/1/2026 quyết định tăng tỷ lệ và mức thanh toán chi phí khám chữa bệnh BHYT. Các điểm đáng chú ý:</p>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Người từ đủ 75 tuổi đang hưởng trợ cấp hưu trí xã hội và người thuộc hộ cận nghèo được hưởng 100% chi phí trong phạm vi quyền lợi.</li>
  <li>Quỹ BHYT từng bước chi cho khám sàng lọc, chẩn đoán và điều trị sớm một số bệnh, thay vì chỉ chi khi bệnh đã nặng.</li>
  <li>Thí điểm đa dạng hóa gói BHYT và BHYT bổ sung do doanh nghiệp bảo hiểm cung cấp, trong đó có hướng gói chăm sóc dài hạn.</li>
  <li>Chính sách miễn viện phí ở mức cơ bản trong phạm vi BHYT có hiệu lực từ 1/1/2030, thực hiện theo lộ trình.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Bố mẹ tôi trên 75 tuổi, có chắc chắn được 100% không?</h2>
<p>Chưa chắc. Điều kiện là vừa đủ 75 tuổi, vừa đang hưởng trợ cấp hưu trí xã hội. Người có lương hưu thường thuộc nhóm quyền lợi khác. Một số nhóm như người có công với cách mạng đã được hưởng 100% từ trước theo Luật BHYT.</p>
<p>Cách kiểm tra nhanh nhất: xem mức hưởng ghi trên thông tin thẻ BHYT (trên VNeID hoặc VssID), hoặc hỏi cơ quan BHXH, UBND xã phường nơi bố mẹ cư trú.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">"Trong phạm vi quyền lợi" nghĩa là gì?</h2>
<p>BHYT chi trả cho thuốc, xét nghiệm, kỹ thuật nằm trong danh mục và đúng quy định khám chữa bệnh. Những khoản thường phải tự chi trả gồm:</p>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Khám theo yêu cầu, chọn bác sĩ, phòng dịch vụ.</li>
  <li>Thuốc, vật tư ngoài danh mục BHYT chi trả.</li>
  <li>Phần chênh lệch khi dùng dịch vụ cao hơn mức BHYT thanh toán.</li>
  <li>Các dịch vụ ngoài y tế như đi lại, người đi cùng.</li>
</ul>
<p>Trước khi làm kỹ thuật tốn kém, gia đình nên hỏi rõ phần nào BHYT chi trả để chủ động tài chính.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Checklist khi đưa bố mẹ đi khám BHYT</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li>Kiểm tra thẻ BHYT còn hạn và đúng nơi đăng ký khám ban đầu.</li>
  <li>Mang Căn cước gắn chip hoặc mở VNeID; người đang chờ cấp lại thẻ cần giấy hẹn trả kết quả.</li>
  <li>Mang giấy chuyển tuyến hoặc phiếu hẹn tái khám nếu có (có thể đã tích hợp trên VNeID).</li>
  <li>Nói rõ với quầy tiếp đón là khám BHYT hay khám dịch vụ.</li>
  <li>Giữ lại hóa đơn, bảng kê chi phí để đối chiếu.</li>
</ol>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Thủ tục BHYT không khó với người trẻ, nhưng với ông bà đứng xếp hàng, đọc bảng kê và phân biệt luồng BHYT, luồng dịch vụ là cả một thử thách. Với <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700;">Đồng hành khám bệnh</a>, Kiến Y tế của ANTCARE chuẩn bị giấy tờ cùng gia đình từ trước, làm thủ tục tại viện, hỏi rõ các khoản chi phí trước khi ông bà làm kỹ thuật, và gửi lại đơn thuốc, bảng kê cho gia đình.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh cho bố mẹ:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">BHYT có chi trả dịch vụ đưa đón, đồng hành khám bệnh không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Không. Đây là dịch vụ hỗ trợ y tế ngoài phạm vi quỹ BHYT chi trả.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Từ 2030 đi khám có hoàn toàn miễn phí không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Chính sách là miễn viện phí ở mức cơ bản, trong phạm vi quyền lợi BHYT, và thực hiện theo lộ trình. Các dịch vụ theo yêu cầu vẫn có thể phải trả phí.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ đi khám sàng lọc có dùng BHYT được không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Quỹ BHYT đang từng bước chi cho sàng lọc một số bệnh theo lộ trình. Ngoài ra, từ 2026 người cao tuổi còn được khám định kỳ hoặc sàng lọc miễn phí ít nhất mỗi năm một lần theo chương trình riêng.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý y tế (YMYL):</strong> Bài viết mang tính thông tin, không phải tư vấn pháp lý. Quyền lợi cụ thể của từng người cần xác nhận với cơ quan BHXH.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://tuoitre.vn/tang-muc-thanh-toan-kham-chua-benh-bao-hiem-y-te-tu-2026-mien-vien-phi-tu-2030-20251211104530069.htm" target="_blank" rel="noopener nofollow">Tuổi Trẻ – Tăng mức thanh toán BHYT từ 2026, miễn viện phí từ 2030</a> · 
  <a href="https://znews.vn/thay-doi-quan-trong-ve-bao-hiem-y-te-kham-chua-benh-tu-112026-post1615436.html" target="_blank" rel="noopener nofollow">Znews – Thay đổi quan trọng về BHYT từ 1/1/2026</a> · 
  <a href="https://luatvietnam.vn/bao-hiem-y-te/tu-1-1-2026-nhung-truong-hop-nao-duoc-huong-bao-hiem-y-te-100-585-106217-article.html" target="_blank" rel="noopener nofollow">LuatVietnam – Trường hợp được hưởng BHYT 100%</a> · 
  <a href="https://tuoitre.vn/tu-nam-2026-se-thuc-hien-lo-trinh-mien-vien-phi-toan-dan-ra-sao-20260105111221431.htm" target="_blank" rel="noopener nofollow">Tuổi Trẻ – Lộ trình miễn viện phí toàn dân</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/bao-hiem-y-te-nguoi-cao-tuoi-2026#article",
          "headline": "BHYT 2026 cho người cao tuổi: Ai được hưởng 100% và cần lưu ý gì khi đưa bố mẹ đi khám?",
          "description": "Từ 1/1/2026, người từ đủ 75 tuổi đang hưởng trợ cấp hưu trí xã hội được BHYT chi trả 100%. Những điểm gia đình cần biết trước khi đưa bố mẹ đi khám.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/bao-hiem-y-te-nguoi-cao-tuoi-2026",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg",
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
          "@id": "https://antcare.vn/news/bao-hiem-y-te-nguoi-cao-tuoi-2026#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "BHYT có chi trả dịch vụ đưa đón, đồng hành khám bệnh không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không. Đây là dịch vụ hỗ trợ ngoài phạm vi BHYT."
              }
            },
            {
              "@type": "Question",
              "name": "Từ 2030 đi khám có hoàn toàn miễn phí không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chính sách là miễn viện phí ở mức cơ bản, trong phạm vi quyền lợi BHYT, và thực hiện theo lộ trình. Các dịch vụ theo yêu cầu vẫn có thể phải trả phí."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ đi khám sàng lọc có dùng BHYT được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Quỹ BHYT đang từng bước chi cho sàng lọc một số bệnh theo lộ trình. Ngoài ra, từ 2026 người cao tuổi còn được khám định kỳ hoặc sàng lọc miễn phí ít nhất mỗi năm một lần theo chương trình riêng."
              }
            }
          ]
        }
      ]
    }
  },

  // 6. dua-bo-me-di-kham-benh-vien-ha-noi
  {
    id: 146,
    slug: "dua-bo-me-di-kham-benh-vien-ha-noi",
    oldSlugs: ["blog/dua-bo-me-di-kham-benh-vien-ha-noi", "tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi"],
    metaTitle: "Đưa bố mẹ đi khám bệnh viện Hà Nội: đặt lịch, tránh chờ đợi",
    title: "Đưa bố mẹ đi khám ở bệnh viện lớn tại Hà Nội: Cách tránh giờ cao điểm và giảm thời gian chờ",
    category: "Cẩm nang đi viện",
    date: "28/09/2026",
    author: authorObj,
    description: "Bệnh viện lớn ở Hà Nội thường quá tải 7–9h sáng. Cách đặt lịch trước, dùng ki-ốt VNeID và chuẩn bị để người cao tuổi đỡ mệt khi đi khám.",
    excerpt: "Bệnh viện lớn ở Hà Nội thường quá tải 7–9h sáng. Cách đặt lịch trước, dùng ki-ốt VNeID và chuẩn bị để người cao tuổi đỡ mệt khi đi khám.",
    image: "/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Muốn bố mẹ đỡ mệt khi khám ở bệnh viện lớn tại Hà Nội, hãy đặt lịch trước ít nhất 24 giờ, đến sớm 15–20 phút so với giờ hẹn, dùng VNeID hoặc căn cước gắn chip tại ki-ốt tự phục vụ và luôn có người đi cùng. Khung 7–9 giờ sáng là lúc nhiều bệnh viện đông nhất.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg" alt="Khu tiếp đón hiện đại với ki-ốt tự phục vụ tại bệnh viện lớn Hà Nội" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Hệ thống ki-ốt thông minh tại các bệnh viện lớn ở Hà Nội giúp giảm đáng kể thời gian chờ đợi tiếp đón.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Bệnh viện lớn ở Hà Nội đông đến mức nào?</h2>
<p>Khu tiếp đón của Bệnh viện Đa khoa Xanh Pôn mỗi ngày đón 2.000–3.000 người đến khám, và thường quá tải trong khung 7–9 giờ sáng. Với người cao tuổi, đứng hay ngồi chờ lâu, đi qua nhiều tòa nhà để xét nghiệm, chụp chiếu dễ gây mệt, tụt đường huyết hoặc chóng mặt.</p>
<p>Tin tốt là năm 2026 nhiều bệnh viện đã số hóa mạnh: đặt lịch qua website, ứng dụng, ki-ốt tự phục vụ và thanh toán không tiền mặt.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">4 cách giảm thời gian chờ cho bố mẹ</h2>
<p><strong>1. Đặt lịch trước:</strong> Nhiều bệnh viện như Xanh Pôn, Đại học Y Hà Nội, Tim Hà Nội đã có đặt lịch qua website hoặc ứng dụng. Nên đặt trước ít nhất 24 giờ, nhất là khi muốn khám với bác sĩ chuyên gia. Một số nơi sẽ gọi lại xác nhận, lịch chỉ chính thức sau bước này.</p>
<p><strong>2. Dùng ki-ốt và VNeID:</strong> Tại các bệnh viện số hóa, người bệnh có thể làm thủ tục tại ki-ốt bằng căn cước gắn chip hoặc VNeID thay vì xếp hàng tại quầy tiếp đón truyền thống.</p>
<p><strong>3. Tránh đến đúng khung đông nhất nếu không cần nhịn ăn:</strong> Với các lần khám không xét nghiệm máu lúc đói, khung giữa buổi sáng (9h30–10h30) hoặc đầu giờ chiều thường thoáng hơn rất nhiều.</p>
<p><strong>4. Xem kết quả online:</strong> Một số bệnh viện cho phép tra cứu kết quả xét nghiệm, đơn thuốc trên ứng dụng, giúp ông bà không phải quay lại lấy giấy sau khi khám.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Chuẩn bị cho một buổi khám nhẹ nhàng</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Giấy tờ: căn cước gắn chip, thẻ BHYT hoặc VNeID, VssID, giấy chuyển tuyến nếu có.</li>
  <li>Hồ sơ cũ, đơn thuốc đang dùng, danh sách câu hỏi cho bác sĩ.</li>
  <li>Nước, bánh nhẹ ăn sau khi lấy máu, thuốc uống buổi sáng mang theo nếu phải nhịn ăn.</li>
  <li>Áo khoác mỏng vì phòng khám máy lạnh, giày dép chống trơn.</li>
  <li>Hỏi bệnh viện về xe lăn nếu ông bà đi lại chậm.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vai trò của người đi cùng</h2>
<p>Người cao tuổi thường phải đi qua nhiều bước: tiếp đón, khám, xét nghiệm, chụp chiếu, quay lại đọc kết quả, thanh toán, lấy thuốc. Người đi cùng giúp ông bà không bị lạc, không bỏ sót bước nào, và nghe đầy đủ lời dặn của bác sĩ, điều mà người nghe kém hay hay quên rất dễ bỏ lỡ.</p>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Khi con cái không thể nghỉ làm, dịch vụ <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700;">Đồng hành khám bệnh</a> của ANTCARE thay gia đình đi cùng bố mẹ. Kiến Y tế có nền tảng điều dưỡng cùng gia đình đặt lịch, đón ông bà tại nhà, làm thủ tục, đi cùng qua từng phòng và gửi tóm tắt buổi khám. Thời gian dịch vụ tính từ lúc đón, nên gia đình chủ động ước lượng được buổi khám.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh tại Hà Nội:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Nên đặt lịch khám qua đâu cho chắc?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Ưu tiên website, ứng dụng hoặc tổng đài chính thức của bệnh viện. Cẩn thận với các trang, tài khoản mạng xã hội tự xưng "đặt lịch nhanh" và đòi chuyển khoản trước.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ khám nhiều chuyên khoa, có khám trong một buổi được không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Tùy bệnh viện và sức khỏe của ông bà. Nếu phải khám 3 chuyên khoa trở lên, nên chia thành hai buổi để ông bà không kiệt sức.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Khám dịch vụ có nhanh hơn khám BHYT không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Thường có, vì ít người hơn và được hẹn giờ. Tuy nhiên chi phí cao hơn, gia đình nên hỏi rõ phần BHYT còn chi trả hay không.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý:</strong> Quy trình đặt lịch của từng bệnh viện có thể thay đổi; gia đình nên kiểm tra trên kênh chính thức của bệnh viện.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://vietbao.vn/mot-thay-doi-giup-hang-nghin-benh-nhan-thoat-canh-cho-doi-599143.html" target="_blank" rel="noopener nofollow">Vietbao – Xanh Pôn dùng VNeID giảm cảnh chờ đợi</a> · 
  <a href="https://youmed.vn/tin-tuc/dat-lich-kham-benh-vien-xanh-pon-ha-noi/" target="_blank" rel="noopener nofollow">YouMed – Đặt lịch khám Bệnh viện Xanh Pôn 2026</a> · 
  <a href="https://youmed.vn/tin-tuc/dat-lich-kham-benh-vien-tim-ha-noi/" target="_blank" rel="noopener nofollow">YouMed – Đặt lịch khám Bệnh viện Tim Hà Nội 2026</a> · 
  <a href="https://youmed.vn/tin-tuc/dat-lich-kham-benh-vien-dai-hoc-y-ha-noi/" target="_blank" rel="noopener nofollow">YouMed – Đặt lịch khám Bệnh viện Đại học Y Hà Nội</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/dua-bo-me-di-kham-benh-vien-ha-noi#article",
          "headline": "Đưa bố mẹ đi khám ở bệnh viện lớn tại Hà Nội: Cách tránh giờ cao điểm và giảm thời gian chờ",
          "description": "Bệnh viện lớn ở Hà Nội thường quá tải 7–9h sáng. Cách đặt lịch trước, dùng ki-ốt VNeID và chuẩn bị để người cao tuổi đỡ mệt khi đi khám.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/dua-bo-me-di-kham-benh-vien-ha-noi",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg",
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
          "@id": "https://antcare.vn/news/dua-bo-me-di-kham-benh-vien-ha-noi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Nên đặt lịch khám qua đâu cho chắc?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ưu tiên website, ứng dụng hoặc tổng đài chính thức của bệnh viện. Cẩn thận với các trang, tài khoản mạng xã hội tự xưng \"đặt lịch nhanh\" và đòi chuyển khoản trước."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ khám nhiều chuyên khoa, có khám trong một buổi được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tùy bệnh viện và sức khỏe của ông bà. Nếu phải khám 3 chuyên khoa trở lên, nên chia thành hai buổi để ông bà không kiệt sức."
              }
            },
            {
              "@type": "Question",
              "name": "Khám dịch vụ có nhanh hơn khám BHYT không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Thường có, vì ít người hơn và được hẹn giờ. Tuy nhiên chi phí cao hơn, gia đình nên hỏi rõ phần BHYT còn chi trả hay không."
              }
            }
          ]
        }
      ]
    }
  },

  // 7. tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi
  {
    id: 147,
    slug: "tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi",
    oldSlugs: ["blog/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi", "tin-tuc/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi"],
    metaTitle: "Trợ lý chăm sóc sức khỏe tại nhà cho người cao tuổi là gì?",
    title: "Trợ lý chăm sóc sức khỏe tại nhà cho người cao tuổi: Làm gì trong mỗi lần thăm và khi nào nên dùng?",
    category: "Tư vấn chăm sóc",
    date: "28/09/2026",
    author: authorObj,
    description: "Trợ lý sức khỏe đến nhà theo lịch để đo chỉ số, hướng dẫn vận động và báo lại cho gia đình. Công việc cụ thể, 6 dấu hiệu nên cân nhắc và cách chọn tần suất.",
    excerpt: "Trợ lý sức khỏe đến nhà theo lịch để đo chỉ số, hướng dẫn vận động và báo lại cho gia đình. Công việc cụ thể, 6 dấu hiệu nên cân nhắc và cách chọn tần suất.",
    image: "/images/tin-tuc/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Trợ lý chăm sóc sức khỏe tại nhà là người có nền tảng y tế đến thăm người cao tuổi theo lịch cố định, đo huyết áp, nhịp tim, đường huyết, hướng dẫn vận động, ghi lại chỉ số và báo cho gia đình. Dịch vụ này phù hợp khi bố mẹ có bệnh mạn tính cần theo dõi giữa các lần tái khám mà con cái không thể có mặt thường xuyên.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg" alt="Bộ dụng cụ theo dõi sức khỏe và rèn luyện thể chất tại nhà cho người cao tuổi" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Trợ lý sức khỏe hỗ trợ đo chỉ số sinh tồn và hướng dẫn bài tập vận động chuẩn Senior Fitness tại nhà.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao "theo dõi giữa hai lần khám" lại quan trọng?</h2>
<p>Khoảng 60,9% người cao tuổi Việt Nam mắc từ 3 bệnh trở lên. Với tăng huyết áp hay đái tháo đường, bác sĩ chỉ gặp bệnh nhân vài lần mỗi năm, còn phần lớn quãng thời gian giữa các lần khám diễn ra ở nhà. Chỉ số đo đều đặn tại nhà giúp phát hiện sớm khi bệnh chưa ổn và giúp bác sĩ chỉnh thuốc chính xác hơn.</p>
<p>Chính sách cũng đi theo hướng này. Quyết định 1116/QĐ-TTg năm 2026 yêu cầu người cao tuổi được lập hồ sơ theo dõi quản lý sức khỏe và từng bước xây dựng mô hình chăm sóc sức khỏe dài hạn. Chăm sóc không còn chỉ là "ốm thì đi viện".</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Trợ lý sức khỏe làm gì trong mỗi lần thăm?</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><strong>Hỏi thăm tình trạng chung:</strong> Ăn uống, giấc ngủ, đau nhức cơ khớp, tâm trạng từ lần thăm trước.</li>
  <li><strong>Đo chỉ số sinh tồn:</strong> Đo huyết áp, nhịp tim, đường huyết và so sánh với lịch sử theo dõi.</li>
  <li><strong>Kiểm tra tuân thủ thuốc:</strong> Nhắc nhở và kiểm tra việc uống thuốc đúng giờ, đúng đơn bác sĩ kê.</li>
  <li><strong>Hướng dẫn vận động:</strong> Hướng dẫn các bài tập phù hợp thể trạng theo chuẩn Senior Fitness (sức mạnh, độ dẻo, sức bền và thăng bằng chống té ngã).</li>
  <li><strong>Báo cáo gia đình:</strong> Gửi cập nhật chi tiết cho con cái; báo ngay nếu thấy chỉ số bất thường hoặc dấu hiệu cần đi khám.</li>
</ol>
<p><em>Lưu ý: Trợ lý sức khỏe không chẩn đoán, không tự ý kê hay đổi thuốc. Vai trò là theo dõi, nhắc nhở và kết nối kịp thời với gia đình, bác sĩ.</em></p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">6 dấu hiệu gia đình nên cân nhắc dịch vụ</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Bố mẹ có tăng huyết áp, đái tháo đường hoặc bệnh tim nhưng ít khi tự đo hoặc đo sai cách.</li>
  <li>Ông bà sống một mình hoặc chỉ hai người già chăm sóc lẫn nhau.</li>
  <li>Con cái đi làm cả ngày, ở tỉnh khác hoặc đang định cư ở nước ngoài.</li>
  <li>Bố mẹ vừa xuất viện hoặc vừa được bác sĩ điều chỉnh phác đồ thuốc mới.</li>
  <li>Ông bà ít vận động, đi lại chậm hơn, từng bị trượt ngã hoặc suýt ngã.</li>
  <li>Gia đình muốn có nhật ký số liệu chính xác để mang đi tái khám thay vì kể lại theo trí nhớ.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Nên chọn tần suất thăm bao nhiêu?</h2>
<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <thead>
      <tr style="background: #efe7fb; color: #6633B4;">
        <th style="border: 1px solid #e4dcf2; padding: 10px; text-align: left;">Tình trạng của bố mẹ</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px; text-align: left;">Tần suất gợi ý</th>
        <th style="border: 1px solid #e4dcf2; padding: 10px; text-align: left;">Gói ANTCARE tương ứng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #e4dcf2; padding: 10px;">Khỏe, bệnh nền ổn định, cần theo dõi định kỳ</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px;">2 lần/tháng</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 600; color: #6633B4;">Quan Tâm</td>
      </tr>
      <tr>
        <td style="border: 1px solid #e4dcf2; padding: 10px;">Có bệnh mạn tính cần theo dõi sát, sống một mình</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px;">4 lần/tháng (hằng tuần)</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 600; color: #6633B4;">Chăm Sóc</td>
      </tr>
      <tr>
        <td style="border: 1px solid #e4dcf2; padding: 10px;">Sau xuất viện, vừa đổi thuốc, nhiều bệnh cùng lúc</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px;">8 lần/tháng</td>
        <td style="border: 1px solid #e4dcf2; padding: 10px; font-weight: 600; color: #6633B4;">Yêu Thương</td>
      </tr>
    </tbody>
  </table>
</div>
<p>Tần suất có thể điều chỉnh linh hoạt theo diễn biến sức khỏe thực tế và lời khuyên của bác sĩ điều trị.</p>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">Trợ lý sức khỏe của ANTCARE</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Ở ANTCARE – Kiến chăm tổ, trợ lý sức khỏe là <strong>Kiến Y tế</strong> có nền tảng điều dưỡng và chứng chỉ sơ cấp cứu. Khi cần tái khám, gia đình có thể kết hợp <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700;">Đồng hành khám bệnh</a> để người quen mặt đưa ông bà đi viện, mang theo luôn số liệu đã theo dõi. Dịch vụ <a href="/#giai-phap-cham-soc" style="color: #FD711A; font-weight: 700;">An tâm nhà cửa</a> bổ sung phần đánh giá nguy cơ té ngã trong nhà.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đăng ký Trợ lý sức khỏe tại nhà cho bố mẹ:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Trợ lý sức khỏe khác gì điều dưỡng chăm sóc tại nhà 24/24?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Trợ lý sức khỏe thăm theo lượt cố định, tập trung theo dõi chỉ số, rèn luyện vận động và phát hiện bất thường sớm. Điều dưỡng 24/24 dành cho bệnh nhân cần hỗ trợ sinh hoạt liên tục như nằm liệt giường hoặc thở máy.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Gia đình ở nước ngoài có đăng ký được không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Có. ANTCARE nhận thanh toán quốc tế và gửi cập nhật chi tiết qua ứng dụng/tin nhắn sau mỗi lần thăm.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ có máy đo huyết áp rồi, có cần dịch vụ không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Có máy là rất tốt, nhưng nhiều ông bà đo sai tư thế, quên ghi lại hoặc không biết khi nào là bất thường. Trợ lý sức khỏe giúp đo đúng chuẩn, theo dõi xu hướng và hướng dẫn ông bà tự đo giữa các lần thăm.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý y tế (YMYL):</strong> Dịch vụ không thay thế việc khám chữa bệnh và điều trị của bác sĩ chuyên khoa.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://baomoi.com/bien-ap-luc-gia-hoa-dan-so-thanh-du-dia-tang-truong-c56136850.epi" target="_blank" rel="noopener nofollow">Thời báo Ngân hàng (qua Báo Mới) – 60,9% người cao tuổi mắc từ 3 bệnh</a> · 
  <a href="https://nongnghiepmoitruong.vn/nguoi-cao-tuoi-duoc-kham-suc-khoe-dinh-ky-mien-phi-it-nhat-1-lan-nam-d817854.html" target="_blank" rel="noopener nofollow">Nông nghiệp & Môi trường – Quyết định 1116/QĐ-TTg</a> · 
  <a href="https://baohaiphong.vn/nguoi-cao-tuoi-duoc-kham-suc-khoe-mien-phi-it-nhat-moi-nam-mot-lan-546789.html" target="_blank" rel="noopener nofollow">Báo Hải Phòng – Lập hồ sơ theo dõi, quản lý sức khỏe người cao tuổi</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi#article",
          "headline": "Trợ lý chăm sóc sức khỏe tại nhà cho người cao tuổi: Làm gì trong mỗi lần thăm và khi nào nên dùng?",
          "description": "Trợ lý sức khỏe đến nhà theo lịch để đo chỉ số, hướng dẫn vận động và báo lại cho gia đình. Công việc cụ thể, 6 dấu hiệu nên cân nhắc và cách chọn tần suất.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg",
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
          "@id": "https://antcare.vn/news/tro-ly-cham-soc-suc-khoe-tai-nha-nguoi-cao-tuoi#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Trợ lý sức khỏe khác gì điều dưỡng chăm sóc tại nhà 24/24?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trợ lý sức khỏe thăm theo lượt, tập trung theo dõi chỉ số và vận động. Điều dưỡng 24/24 dành cho người cần hỗ trợ sinh hoạt liên tục, như nằm liệt giường."
              }
            },
            {
              "@type": "Question",
              "name": "Gia đình ở nước ngoài có đăng ký được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. ANTCARE nhận thanh toán từ nước ngoài và gửi cập nhật sau mỗi lần thăm."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ có máy đo huyết áp rồi, có cần dịch vụ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có máy là tốt, nhưng nhiều ông bà đo sai tư thế, quên ghi lại hoặc không biết khi nào là bất thường. Trợ lý sức khỏe giúp đo đúng, theo dõi xu hướng và hướng dẫn ông bà tự đo giữa các lần thăm."
              }
            }
          ]
        }
      ]
    }
  },

  // 8. quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh
  {
    id: 148,
    slug: "quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh",
    oldSlugs: ["blog/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh", "tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh"],
    metaTitle: "Quản lý thuốc cho người cao tuổi nhiều bệnh: tránh trùng thuốc, sót lịch",
    title: "Người cao tuổi mắc nhiều bệnh cùng lúc: Cách quản lý thuốc và lịch tái khám an toàn",
    category: "Hướng dẫn y tế",
    date: "28/09/2026",
    author: authorObj,
    description: "60,9% người cao tuổi mắc từ 3 bệnh trở lên, uống thuốc từ nhiều đơn. Cách lập danh sách thuốc, dùng đơn thuốc điện tử và gom lịch tái khám cho bố mẹ.",
    excerpt: "60,9% người cao tuổi mắc từ 3 bệnh trở lên, uống thuốc từ nhiều đơn. Cách lập danh sách thuốc, dùng đơn thuốc điện tử và gom lịch tái khám cho bố mẹ.",
    image: "/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Khi bố mẹ khám nhiều chuyên khoa, hãy lập một danh sách thuốc duy nhất (tên, liều, giờ uống, bác sĩ kê), mang theo mỗi lần khám và xin bác sĩ rà soát trùng lặp, tương tác. Từ 2026, các cơ sở khám chữa bệnh phải kê đơn thuốc điện tử, nên gia đình có thêm công cụ để lưu và đối chiếu đơn.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg" alt="Quản lý thuốc và hộp chia thuốc thông minh cho người cao tuổi mắc nhiều bệnh" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Hộp chia thuốc 7 ngày kết hợp đơn thuốc điện tử giúp phòng ngừa nhầm lẫn thuốc nguy hiểm ở người cao tuổi.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Nhiều bệnh, nhiều đơn: rủi ro nằm ở đâu?</h2>
<p>Khoảng 60,9% người cao tuổi Việt Nam mắc từ 3 bệnh trở lên. Một người có thể khám tim mạch, nội tiết, cơ xương khớp ở ba nơi khác nhau, mỗi nơi một đơn. Rủi ro thường gặp:</p>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Trùng thuốc có cùng hoạt chất nhưng khác tên biệt dược thương mại.</li>
  <li>Tương tác bất lợi giữa các loại thuốc với nhau, hoặc với thuốc bổ, thảo dược.</li>
  <li>Uống sai giờ, quên liều, hoặc uống gấp đôi liều khi chợt nhớ ra.</li>
  <li>Tự ý ngừng thuốc khi thấy triệu chứng "đỡ rồi", đặc biệt nguy hiểm với thuốc hạ áp, hạ đường huyết.</li>
  <li>Sót lịch tái khám vì mỗi chuyên khoa hẹn một thời điểm khác nhau.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Đơn thuốc điện tử thay đổi gì cho gia đình?</h2>
<p>Theo Thông tư 26/2025/TT-BYT, tất cả bệnh viện phải kê đơn thuốc điện tử trước 1/10/2025, các cơ sở khám chữa bệnh khác trước 1/1/2026. Đơn điện tử có giá trị pháp lý như đơn giấy. Người kê đơn phải gửi đơn hoặc mã đơn cho người bệnh hoặc người đại diện qua phương tiện điện tử.</p>
<p>Thông tư cũng yêu cầu đơn ghi rõ liều dùng, số lần dùng trong ngày và thời gian sử dụng. Với gia đình, đây là cơ hội để lưu đơn tập trung thay vì giữ từng tờ giấy rời dễ thất lạc.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">5 bước quản lý thuốc an toàn cho bố mẹ</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><strong>Lập danh sách thuốc tổng hợp:</strong> Tên thuốc, hàm lượng, liều, giờ uống, bác sĩ và bệnh viện kê, ngày bắt đầu. Gồm cả thuốc bổ, thuốc nam.</li>
  <li><strong>Mang danh sách (hoặc cả túi thuốc) đến mỗi lần khám:</strong> Hỏi bác sĩ xem có thuốc nào trùng lặp, tương tác hay nên dừng không.</li>
  <li><strong>Dùng hộp chia thuốc theo ngày và buổi:</strong> Chia sẵn thuốc vào đầu tuần để tránh nhầm cữ uống.</li>
  <li><strong>Không tự mua thêm thuốc ngoài:</strong> Nhất là kháng sinh và thuốc giảm đau kháng viêm khi chưa hỏi ý kiến bác sĩ.</li>
  <li><strong>Gom lịch tái khám vào một lịch chung:</strong> Đồng bộ lịch tái khám các chuyên khoa trên điện thoại và đặt nhắc hẹn trước 2–3 ngày.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Dấu hiệu cần hỏi lại bác sĩ ngay</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Chóng mặt, mệt lả, buồn ngủ bất thường sau khi đổi hoặc thêm thuốc mới.</li>
  <li>Huyết áp hoặc đường huyết dao động nhiều so với mức thường lệ.</li>
  <li>Phát ban da, ngứa ngáy, khó thở, tức ngực.</li>
  <li>Ngã hoặc suýt ngã do mất thăng bằng.</li>
  <li>Lú lẫn, sa sút trí nhớ nhanh hơn gần đây.</li>
</ul>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Với <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700;">Đồng hành khám bệnh</a>, Kiến Y tế mang theo danh sách thuốc của ông bà, hỏi bác sĩ những điểm gia đình còn băn khoăn, ghi lại đơn mới và lịch hẹn tái khám để gửi về gia đình.</p>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Với <a href="/#giai-phap-cham-soc" style="color: #FD711A; font-weight: 700;">Trợ lý theo dõi sức khỏe</a>, Kiến Y tế đến nhà đo huyết áp, nhịp tim, đường huyết sau khi ông bà đổi thuốc, giúp gia đình và bác sĩ thấy thuốc mới có phù hợp hay không.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh hoặc Trợ lý sức khỏe:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Có nên gộp tất cả vào một bác sĩ khám không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Nhiều bệnh viện có chuyên khoa lão khoa, nơi bác sĩ nhìn tổng thể các bệnh của người cao tuổi. Gia đình có thể hỏi bác sĩ hiện tại xem có nên khám lão khoa để rà soát toàn diện tương tác thuốc hay không.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ hay quên uống thuốc thì làm sao?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Dùng hộp chia thuốc, đặt thuốc cạnh vật dụng dùng hằng ngày, hẹn giờ nhắc trên điện thoại. Nếu quên liều, không tự ý uống gấp đôi liều tiếp theo; hãy tham vấn bác sĩ hoặc dược sĩ cách xử trí.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Thực phẩm chức năng có cần báo bác sĩ không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Rất cần thiết. Nhiều loại thực phẩm chức năng có thể tương tác làm giảm hoặc tăng quá mức tác dụng của thuốc điều trị tim mạch, tiểu đường.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý y tế (YMYL):</strong> Bài viết mang tính thông tin. Mọi thay đổi về thuốc bắt buộc phải theo chỉ định của bác sĩ điều trị.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://luatvietnam.vn/y-te/thong-tu-26-2025-tt-byt-quy-dinh-ke-don-thuoc-hoa-duoc-sinh-pham-tai-co-so-kham-chua-benh-404246-d1.html" target="_blank" rel="noopener nofollow">LuatVietnam – Thông tư 26/2025/TT-BYT về kê đơn thuốc</a> · 
  <a href="https://vov2.vov.vn/suc-khoe/bo-y-te-ban-hanh-thong-tu-siet-chat-tinh-trang-ban-khang-sinh-khong-theo-don-53920.vov2" target="_blank" rel="noopener nofollow">VOV2 – Quy định mới về thông tin trên đơn thuốc</a> · 
  <a href="https://baomoi.com/bien-ap-luc-gia-hoa-dan-so-thanh-du-dia-tang-truong-c56136850.epi" target="_blank" rel="noopener nofollow">Thời báo Ngân hàng (qua Báo Mới) – 60,9% người cao tuổi mắc từ 3 bệnh</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh#article",
          "headline": "Người cao tuổi mắc nhiều bệnh cùng lúc: Cách quản lý thuốc và lịch tái khám an toàn",
          "description": "60,9% người cao tuổi mắc từ 3 bệnh trở lên, uống thuốc từ nhiều đơn. Cách lập danh sách thuốc, dùng đơn thuốc điện tử và gom lịch tái khám cho bố mẹ.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg",
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
          "@id": "https://antcare.vn/news/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Có nên gộp tất cả vào một bác sĩ khám không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nhiều bệnh viện có chuyên khoa lão, nơi bác sĩ nhìn tổng thể các bệnh của người cao tuổi. Gia đình có thể hỏi bác sĩ hiện tại xem có nên khám lão khoa để rà soát thuốc hay không."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ hay quên uống thuốc thì làm sao?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dùng hộp chia thuốc, đặt thuốc cạnh vật dụng dùng hằng ngày, hẹn giờ nhắc trên điện thoại. Nếu quên liều, không tự uống gấp đôi; hỏi bác sĩ hoặc dược sĩ cách xử trí với từng loại thuốc."
              }
            },
            {
              "@type": "Question",
              "name": "Thực phẩm chức năng có cần báo bác sĩ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Một số sản phẩm có thể ảnh hưởng tác dụng của thuốc điều trị, nên hãy liệt kê cả vào danh sách."
              }
            }
          ]
        }
      ]
    }
  },

  // 9. cham-soc-bo-me-tu-xa
  {
    id: 149,
    slug: "cham-soc-bo-me-tu-xa",
    oldSlugs: ["blog/cham-soc-bo-me-tu-xa", "tin-tuc/cham-soc-bo-me-tu-xa", "cham-soc-bo-me-tu-xa-huong-dan-thuc-te-cho-nguoi-con-o-tinh-khac"],
    metaTitle: "Chăm sóc bố mẹ từ xa: kế hoạch 5 bước cho con cái ở xa",
    title: "Chăm sóc bố mẹ từ xa: Kế hoạch cho con cái đi làm bận hoặc sống ở nước ngoài",
    category: "Chăm sóc từ xa",
    date: "28/09/2026",
    author: authorObj,
    description: "Con ở xa vẫn có thể theo dõi sức khỏe bố mẹ với Sổ sức khỏe điện tử, đơn thuốc điện tử và một người chăm sóc tại chỗ. Kế hoạch 5 bước dễ làm.",
    excerpt: "Con ở xa vẫn có thể theo dõi sức khỏe bố mẹ với Sổ sức khỏe điện tử, đơn thuốc điện tử và một người chăm sóc tại chỗ. Kế hoạch 5 bước dễ làm.",
    image: "/images/tin-tuc/cham-soc-bo-me-tu-xa.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Để chăm sóc bố mẹ từ xa, con cái cần ba thứ: dữ liệu sức khỏe xem được từ xa (Sổ sức khỏe điện tử VNeID, đơn thuốc điện tử), một người tin cậy có mặt tại chỗ theo lịch, và một kế hoạch khẩn cấp rõ ràng. Thiếu người tại chỗ là lỗ hổng lớn nhất, và đây là việc dịch vụ trợ lý sức khỏe, đồng hành khám bệnh có thể đảm nhận.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/cham-soc-bo-me-tu-xa.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/cham-soc-bo-me-tu-xa.jpg" alt="Chăm sóc và theo dõi sức khỏe bố mẹ từ xa cho con cái đi làm hoặc ở nước ngoài" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Hệ thống chăm sóc từ xa kết nối dữ liệu y tế trực tiếp giữa cha mẹ và con cái ở xa.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Vì sao ngày càng nhiều gia đình cần "chăm từ xa"?</h2>
<p>Năm 2026, Việt Nam có khoảng 16,5 triệu người từ 60 tuổi trở lên. Con cái đi làm ở thành phố khác, xuất khẩu lao động hay định cư nước ngoài ngày càng phổ biến, trong khi nhóm từ 80 tuổi trở lên, cần hỗ trợ nhiều nhất, lại tăng nhanh nhất. Nhiều ông bà sống một mình hoặc chỉ hai vợ chồng già chăm nhau.</p>
<p>Điều mới trong năm 2026 là dữ liệu y tế đã số hóa mạnh hơn, giúp con cái ở xa nắm tình hình dễ hơn trước.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Kế hoạch 5 bước chăm sóc bố mẹ từ xa</h2>
<p><strong>1. Số hóa hồ sơ sức khỏe:</strong> Cài Sổ sức khỏe điện tử trên VNeID cho bố mẹ. Người bệnh hoặc người đại diện hợp pháp có thể tải bản ghi từng đợt khám dạng PDF. Từ 2026, bác sĩ cũng phải gửi đơn thuốc điện tử hoặc mã đơn cho người bệnh hoặc người đại diện.</p>
<p><strong>2. Có một "người tại chỗ" theo lịch cố định:</strong> Có thể là họ hàng, hàng xóm, hoặc dịch vụ chuyên nghiệp. Điều quan trọng là lịch đều đặn và người đó báo lại cho bạn.</p>
<p><strong>3. Gọi video có mục đích:</strong> Ngoài hỏi thăm, hãy chú ý: bố mẹ ăn có ngon không, đi lại có vững không, nói có lẫn lộn không, nhà cửa có bừa hơn không, tủ thuốc có đúng không.</p>
<p><strong>4. Chuẩn bị kế hoạch khẩn cấp:</strong> Dán cạnh điện thoại bàn hoặc cửa tủ lạnh: số 115, số người thân gần nhất, bệnh viện gần nhà, danh sách bệnh và thuốc đang dùng, dị ứng thuốc nếu có.</p>
<p><strong>5. Giảm nguy cơ té ngã trong nhà:</strong> Đèn ngủ ban đêm, thảm chống trơn nhà tắm, tay vịn cạnh bồn cầu, dẹp dây điện vướng lối đi.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Những dấu hiệu cần thu xếp về hoặc nhờ người tới ngay</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Bố mẹ không nghe máy nhiều lần liên tiếp, khác thói quen thường ngày.</li>
  <li>Giọng nói ngọng, lẫn lộn, quên việc vừa nói vài phút trước.</li>
  <li>Kể bị trượt ngã, chóng mặt, đau ngực, khó thở.</li>
  <li>Sụt cân nhanh, bỏ ăn, không ra khỏi nhà nhiều ngày.</li>
</ul>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE là "người tại chỗ" của gia đình</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">ANTCARE – Kiến chăm tổ ra đời với tinh thần: <em>Bạn không thể ở bên bố mẹ mọi lúc, nhưng luôn có người ở bên thay bạn.</em></p>
  <ul style="padding-left: 20px; line-height: 1.8; color: #4b5563; font-size: 15.5px;">
    <li><a href="/#giai-phap-cham-soc" style="color: #FD711A; font-weight: 700;">Trợ lý theo dõi sức khỏe:</a> Kiến Y tế thăm nhà theo gói 2, 4 hoặc 8 lần mỗi tháng, đo chỉ số, hướng dẫn vận động và gửi cập nhật sau mỗi lần thăm.</li>
    <li><a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700;">Đồng hành khám bệnh:</a> Đưa ông bà đi khám từ nhà đến khi về, ghi lại lời dặn của bác sĩ cho gia đình.</li>
    <li><a href="/#giai-phap-cham-soc" style="color: #FD711A; font-weight: 700;">An tâm nhà cửa:</a> Đánh giá nguy cơ té ngã trong nhà, hỗ trợ dọn dẹp và quan tâm đời sống tinh thần.</li>
  </ul>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">ANTCARE phục vụ tại Hà Nội và các tỉnh miền Bắc, nhận thanh toán từ nước ngoài.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đăng ký chăm sóc bố mẹ từ xa:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Tôi ở nước ngoài, lệch múi giờ thì nhận cập nhật thế nào?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Báo cáo được gửi qua tin nhắn sau mỗi lần thăm hoặc buổi khám, bạn đọc lúc thuận tiện. Trường hợp khẩn, ANTCARE gọi cho người liên hệ mà gia đình đã đăng ký.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ không muốn có người lạ vào nhà thì sao?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Bắt đầu bằng một dịch vụ cụ thể, như đưa đi khám một lần. Khi ông bà đã quen mặt Kiến Y tế, việc thăm nhà định kỳ sẽ dễ được chấp nhận hơn.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Có nên lắp camera trong nhà bố mẹ không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Camera giúp phát hiện sự cố như ngã, nhưng cần bố mẹ đồng ý và tôn trọng riêng tư (không lắp trong phòng ngủ, nhà tắm). Camera không thay được việc có người đến đo chỉ số và trò chuyện.</p>
</div>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 24px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://suckhoedoisong.vn/chu-dong-thich-ung-gia-hoa-dan-so-phat-huy-toi-da-nguon-luc-nguoi-cao-tuoi-169260916202152985.htm" target="_blank" rel="noopener nofollow">Sức khỏe & Đời sống – 16,5 triệu người cao tuổi năm 2026</a> · 
  <a href="https://tuoitre.vn/viet-nam-buoc-vao-thoi-ky-dan-so-gia-trong-it-nam-toi-20260126171300799.htm" target="_blank" rel="noopener nofollow">Tuổi Trẻ – Dân số 80+ tăng nhanh nhất</a> · 
  <a href="https://tuoitre.vn/so-suc-khoe-dien-tu-tren-vneid-chinh-thuc-thay-the-so-giay-trong-thu-tuc-hanh-chinh-20260106164303444.htm" target="_blank" rel="noopener nofollow">Tuổi Trẻ – Quyền tải bản ghi khám chữa bệnh trên VNeID</a> · 
  <a href="https://luatvietnam.vn/y-te/thong-tu-26-2025-tt-byt-quy-dinh-ke-don-thuoc-hoa-duoc-sinh-pham-tai-co-so-kham-chua-benh-404246-d1.html" target="_blank" rel="noopener nofollow">LuatVietnam – Thông tư 26/2025/TT-BYT</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/cham-soc-bo-me-tu-xa#article",
          "headline": "Chăm sóc bố mẹ từ xa: Kế hoạch cho con cái đi làm bận hoặc sống ở nước ngoài",
          "description": "Con ở xa vẫn có thể theo dõi sức khỏe bố mẹ với Sổ sức khỏe điện tử, đơn thuốc điện tử và một người chăm sóc tại chỗ. Kế hoạch 5 bước dễ làm.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/cham-soc-bo-me-tu-xa",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/cham-soc-bo-me-tu-xa.jpg",
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
          "@id": "https://antcare.vn/news/cham-soc-bo-me-tu-xa#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Tôi ở nước ngoài, lệch múi giờ thì nhận cập nhật thế nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Báo cáo được gửi qua tin nhắn sau mỗi lần thăm hoặc buổi khám, bạn đọc lúc thuận tiện. Trường hợp khẩn, ANTCARE gọi cho người liên hệ mà gia đình đã đăng ký."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ không muốn có người lạ vào nhà thì sao?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bắt đầu bằng một dịch vụ cụ thể, như đưa đi khám một lần. Khi ông bà đã quen mặt Kiến Y tế, việc thăm nhà định kỳ sẽ dễ được chấp nhận hơn."
              }
            },
            {
              "@type": "Question",
              "name": "Có nên lắp camera trong nhà bố mẹ không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Camera giúp phát hiện sự cố như ngã, nhưng cần bố mẹ đồng ý và tôn trọng riêng tư (không lắp trong phòng ngủ, nhà tắm). Camera không thay được việc có người đến đo chỉ số và trò chuyện."
              }
            }
          ]
        }
      ]
    }
  },

  // 10. dua-bo-me-tu-tinh-ve-ha-noi-kham-benh
  {
    id: 150,
    slug: "dua-bo-me-tu-tinh-ve-ha-noi-kham-benh",
    oldSlugs: ["blog/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh", "tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh"],
    metaTitle: "Đưa bố mẹ từ tỉnh về Hà Nội khám: giấy chuyển tuyến, đi lại, lịch khám",
    title: "Đưa bố mẹ từ tỉnh về Hà Nội khám bệnh: Chuẩn bị thế nào để đỡ vất vả và giữ được quyền lợi BHYT?",
    category: "Đồng hành đi khám",
    date: "28/09/2026",
    author: authorObj,
    description: "Người cao tuổi ở tỉnh về Hà Nội khám cần lưu ý giấy chuyển tuyến trên VNeID, đặt lịch trước và sắp xếp đi lại. Checklist cho gia đình trước chuyến đi.",
    excerpt: "Người cao tuổi ở tỉnh về Hà Nội khám cần lưu ý giấy chuyển tuyến trên VNeID, đặt lịch trước và sắp xếp đi lại. Checklist cho gia đình trước chuyến đi.",
    image: "/images/tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh.jpg",
    content: `<div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
  <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
  <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
    Trước khi đưa bố mẹ từ tỉnh về Hà Nội khám, hãy xác nhận ông bà có cần giấy chuyển tuyến để hưởng đủ BHYT không (giấy này có thể hiển thị trên VNeID), đặt lịch khám trước, chọn phương tiện đến sớm mà ít mệt, và có người đi cùng suốt hành trình. Một chuyến đi tỉnh – Hà Nội trong ngày rất dễ vượt sức người cao tuổi nếu không chuẩn bị.
  </p>
</div>

<figure style="margin: 24px 0;">
  <a href="https://antcare.vn/images/tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh.jpg" target="_blank" rel="noopener">
    <img src="/images/tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh.jpg" alt="Đưa người cao tuổi từ các tỉnh về Hà Nội khám bệnh tại bệnh viện tuyến trung ương" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">Lên lộ trình di chuyển êm ái và chuẩn bị sẵn giấy chuyển tuyến giúp chuyến khám bệnh tại Hà Nội thuận lợi.</figcaption>
</figure>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Giấy chuyển tuyến: cần hay không?</h2>
<p>Từ 1/1/2025, hệ thống khám chữa bệnh chia thành ba cấp chuyên môn: ban đầu, cơ bản và chuyên sâu. Nhiều bệnh viện lớn ở Hà Nội thuộc cấp chuyên sâu. Thông thường, người bệnh cần giấy chuyển tuyến để được BHYT chi trả đầy đủ khi khám ở cấp này.</p>
<p><strong>Ngoại lệ quan trọng:</strong> người mắc một trong 62 bệnh hiểm nghèo, bệnh hiếm theo danh mục của Bộ Y tế (Thông tư 01/2025) được khám chữa bệnh ở tuyến chuyên sâu mà không cần giấy chuyển tuyến. Trường hợp cấp cứu cũng không cần. Bộ Y tế đang nghiên cứu đề xuất mở rộng diện miễn giấy chuyển tuyến, nên quy định có thể còn thay đổi.</p>
<p>Giấy chuyển tuyến hiện đã được tích hợp hiển thị trên VNeID, nhưng vẫn cần được cơ sở y tế nơi ông bà đang khám cấp. Gia đình nên hỏi bệnh viện ở tỉnh hoặc cơ quan BHXH để biết chính xác mức hưởng trước khi đi.</p>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Lên kế hoạch chuyến đi</h2>
<ol style="padding-left: 20px; line-height: 1.8;">
  <li><strong>Đặt lịch khám trước:</strong> Qua kênh chính thức của bệnh viện ít nhất 24 giờ, chọn khung giờ phù hợp với thời gian di chuyển.</li>
  <li><strong>Ước lượng cả ngày:</strong> Đi đường, chờ khám, xét nghiệm, chờ kết quả, lấy thuốc, về. Với tỉnh xa, cân nhắc nghỉ lại một đêm thay vì đi về trong ngày.</li>
  <li><strong>Chọn phương tiện êm ái:</strong> Có chỗ dừng nghỉ, tránh xe khách đông người nếu ông bà say xe hoặc đi lại khó khăn.</li>
  <li><strong>Chuẩn bị ăn uống:</strong> Nếu phải nhịn ăn xét nghiệm, mang sẵn đồ ăn nhẹ cho sau khi lấy máu; người tiểu đường cần hỏi bác sĩ cách dùng thuốc khi nhịn.</li>
  <li><strong>Mang thuốc dự phòng:</strong> Đủ dùng thêm 1–2 ngày phòng khi phải ở lại theo dõi.</li>
</ol>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Checklist giấy tờ</h2>
<ul style="padding-left: 20px; line-height: 1.8;">
  <li>Căn cước gắn chip, VNeID đã kích hoạt Sổ sức khỏe điện tử.</li>
  <li>Thẻ BHYT (hoặc thông tin thẻ trên VNeID, VssID).</li>
  <li>Giấy chuyển tuyến nếu có.</li>
  <li>Hồ sơ khám, kết quả xét nghiệm, phim chụp ở tuyến tỉnh.</li>
  <li>Danh sách thuốc đang dùng.</li>
</ul>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Sau khi khám xong</h2>
<p>Hỏi rõ bác sĩ: lần tái khám tiếp theo có bắt buộc phải lên Hà Nội không, hay có thể theo dõi ở tuyến tỉnh và chỉ lên khi cần. Nhiều bệnh mạn tính ổn định có thể điều trị duy trì gần nhà, giúp ông bà đỡ vất vả.</p>

<div style="border: 1px solid #ece7f6; border-radius: 16px; padding: 22px 24px; margin: 28px 0; background: linear-gradient(180deg,#faf7ff,#ffffff);">
  <h2 style="color: #6633B4; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px;">ANTCARE hỗ trợ gia đình ở tỉnh thế nào?</h2>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">ANTCARE không chỉ phục vụ trong Hà Nội. Với người cao tuổi ở các tỉnh miền Bắc, <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700;">Đồng hành khám bệnh</a> sắp xếp xe tiện chuyến hoặc phương tiện phù hợp, và Kiến Y tế có nền tảng điều dưỡng đi cùng ông bà suốt hành trình: trên xe, làm thủ tục, qua từng phòng khám, đến khi về nhà an toàn.</p>
  <p style="color: #4b5563; font-size: 15.5px; line-height: 1.7;">Gia đình nên đặt lịch trước ít nhất một ngày để ANTCARE chuẩn bị xe và phối hợp lịch với bệnh viện.</p>
  <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 18px; margin-top: 14px;">
    <strong style="color: #FD711A; font-size: 16px;">Đặt lịch Đồng hành khám bệnh từ tỉnh về Hà Nội:</strong><br>
    <span>Website: <a href="https://antcare.vn" style="color: #6633B4; font-weight: 700;">antcare.vn</a> · Hotline tư vấn: <a href="tel:0969032360" style="color: #FD711A; font-weight: 700;">0969 032 360</a></span>
  </div>
</div>

<h2 style="color: #6633B4; font-size: 1.35rem; font-weight: 700; margin-top: 32px; border-left: 4px solid #FD711A; padding-left: 10px;">Câu hỏi thường gặp</h2>
<div style="margin-top: 16px;">
  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Không có giấy chuyển tuyến có khám ở Hà Nội được không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Vẫn khám được, nhưng mức BHYT chi trả có thể thấp hơn hoặc phải khám dịch vụ, trừ các trường hợp được miễn như cấp cứu hoặc thuộc danh mục 62 bệnh hiểm nghèo.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Bố mẹ say xe nặng thì sao?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Chọn xe riêng hoặc xe tiện chuyến ít người, ngồi ghế trước, dừng nghỉ giữa đường. Hỏi bác sĩ trước nếu muốn dùng thuốc chống say xe, vì có thể tương tác với thuốc đang dùng.</p>

  <h3 style="font-size: 1.05rem; font-weight: 700; color: #2A1B3D; margin-bottom: 6px;">Con ở Hà Nội, bố mẹ ở quê, có đặt dịch vụ được không?</h3>
  <p style="color: #475569; margin-bottom: 18px;">Được. Gia đình đặt lịch và thanh toán từ xa, Kiến Y tế đón ông bà tại quê và cập nhật cho gia đình trong suốt chuyến đi.</p>
</div>

<p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
  <strong>Lưu ý:</strong> Bài viết mang tính thông tin, không phải tư vấn pháp lý. Quy định chuyển tuyến có thể thay đổi; hãy xác nhận với cơ sở y tế hoặc BHXH.
</p>

<p class="sources" style="font-size: 0.88rem; color: #64748b; margin-top: 10px;">
  <strong>Nguồn tham khảo:</strong> 
  <a href="https://vietnamnet.vn/de-xuat-mot-so-nhom-duoc-mien-giay-chuyen-tuyen-khi-kham-benh-cap-chuyen-sau-2527452.html" target="_blank" rel="noopener nofollow">VietNamNet – Đề xuất miễn giấy chuyển tuyến khi khám cấp chuyên sâu</a> · 
  <a href="https://vietbao.vn/de-xuat-mot-so-nhom-duoc-mien-giay-chuyen-tuyen-khi-kham-benh-cap-chuyen-sau-596235.html" target="_blank" rel="noopener nofollow">Vietbao – Danh mục 62 bệnh không cần giấy chuyển tuyến</a> · 
  <a href="https://soha.vn/thong-tin-moi-nhat-ve-bhyt-nam-2026-198260311113127337.htm" target="_blank" rel="noopener nofollow">Soha – Thông tin mới nhất về BHYT năm 2026</a> · 
  <a href="https://baohatinh.vn/nguoi-di-kham-benh-can-biet-tinh-nang-nay-tren-vneid-post317598.html" target="_blank" rel="noopener nofollow">Báo Hà Tĩnh – Giấy chuyển tuyến trên VNeID</a>
</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://antcare.vn/news/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh#article",
          "headline": "Đưa bố mẹ từ tỉnh về Hà Nội khám bệnh: Chuẩn bị thế nào để đỡ vất vả và giữ được quyền lợi BHYT?",
          "description": "Người cao tuổi ở tỉnh về Hà Nội khám cần lưu ý giấy chuyển tuyến trên VNeID, đặt lịch trước và sắp xếp đi lại. Checklist cho gia đình trước chuyến đi.",
          "inLanguage": "vi-VN",
          "mainEntityOfPage": "https://antcare.vn/news/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh",
          "datePublished": "2026-09-28",
          "dateModified": "2026-09-28",
          "image": "https://antcare.vn/images/tin-tuc/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh.jpg",
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
          "@id": "https://antcare.vn/news/dua-bo-me-tu-tinh-ve-ha-noi-kham-benh#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Không có giấy chuyển tuyến có khám ở Hà Nội được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vẫn khám được, nhưng mức BHYT chi trả có thể thấp hơn hoặc phải khám dịch vụ, trừ các trường hợp được miễn như cấp cứu hoặc thuộc danh mục 62 bệnh."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ say xe nặng thì sao?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chọn xe riêng hoặc xe tiện chuyến ít người, ngồi ghế trước, dừng nghỉ giữa đường. Hỏi bác sĩ trước nếu muốn dùng thuốc chống say xe, vì có thể tương tác với thuốc đang dùng."
              }
            },
            {
              "@type": "Question",
              "name": "Con ở Hà Nội, bố mẹ ở quê, có đặt dịch vụ được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Được. Gia đình đặt lịch và thanh toán từ xa, Kiến Y tế đón ông bà tại quê và cập nhật cho gia đình trong suốt chuyến đi."
              }
            }
          ]
        }
      ]
    }
  }
];

// Process into newsData
// Filter out any existing item with these slugs or IDs
const incomingSlugs = new Set(articles.map(a => a.slug));
const incomingIds = new Set(articles.map(a => a.id));

// Remove old cham-soc-bo-me-tu-xa (id 58) as it is replaced by the new comprehensive version
newsData.list = (newsData.list || []).filter(item => 
  !incomingSlugs.has(item.slug) && 
  !incomingIds.has(item.id) && 
  item.id !== 58 && 
  item.slug !== 'cham-soc-bo-me-tu-xa'
);

if (newsData.featured && (incomingSlugs.has(newsData.featured.slug) || incomingIds.has(newsData.featured.id))) {
  // if featured is one of them, replace it
  newsData.featured = articles[0];
}

// Add the 10 articles to the FRONT of list
newsData.list.unshift(...articles);

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully added/updated ${articles.length} articles in news.json! Total articles: ${1 + newsData.list.length}`);
