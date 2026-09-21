const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// If current featured exists, move it into list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

// Common author
const defaultAuthor = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
};

const dateStr = "21/09/2026";
const isoDate = "2026-09-21";

// --- BÀI 1 ---
const content1 = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Trợ lý theo dõi sức khỏe tại nhà cho người cao tuổi | ANTCARE</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Trợ lý theo dõi sức khỏe của ANTCARE đến nhà đo chỉ số, nhắc thuốc, ghi nhật ký và báo cáo cho con cái. Tìm hiểu cách dịch vụ hoạt động.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="${isoDate}">${dateStr}</time> · Cập nhật <time itemprop="dateModified" datetime="${isoDate}">${dateStr}</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="/images/tin-tuc/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg" alt="Bộ thiết bị đo chỉ số sinh tồn và nhật ký theo dõi sức khỏe tại nhà của ANTCARE" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Trợ lý theo dõi sức khỏe tại nhà là dịch vụ cử nhân viên đến nhà người cao tuổi định kỳ để đo các chỉ số cơ bản (huyết áp, nhịp tim, SpO2, cân nặng…), nhắc uống thuốc, quan sát thay đổi bất thường và gửi báo cáo cho gia đình. Dịch vụ giúp phát hiện sớm vấn đề, không thay thế bác sĩ.
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li><a href="#s1" style="color: #6633B4; text-decoration: none; font-weight: 500;">Vì sao người cao tuổi cần được theo dõi sức khỏe đều đặn?</a></li>
      <li><a href="#s2" style="color: #6633B4; text-decoration: none; font-weight: 500;">Trợ lý theo dõi sức khỏe của ANTCARE làm những gì?</a></li>
      <li><a href="#s3" style="color: #6633B4; text-decoration: none; font-weight: 500;">Theo dõi sức khỏe tại nhà khác gì đi khám định kỳ?</a></li>
      <li><a href="#s4" style="color: #6633B4; text-decoration: none; font-weight: 500;">Ai nên dùng dịch vụ này?</a></li>
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao người cao tuổi cần được theo dõi sức khỏe đều đặn?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Nhiều bệnh mạn tính ở người lớn tuổi — tăng huyết áp, tiểu đường, bệnh tim — tiến triển âm thầm. Một chỉ số huyết áp cao bất thường, một lần quên thuốc kéo dài cả tuần, hay việc ông bà ăn ít đi mà không ai để ý… thường chỉ được phát hiện khi đã phải nhập viện.
  </p>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Trong khi đó, con cái bận đi làm, ở xa, hoặc sống ở nước ngoài. Bố mẹ lại hay nói <em>"bố mẹ khỏe, không sao đâu"</em> để con yên tâm. Khoảng trống giữa "không sao" và "phải đi cấp cứu" chính là nơi trợ lý theo dõi sức khỏe phát huy tác dụng.
  </p>

  <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Trợ lý theo dõi sức khỏe của ANTCARE làm những gì?</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Tại ANTCARE, người thực hiện dịch vụ được gọi là <strong>Kiến Y tế</strong>. Mỗi buổi thăm nhà gồm:
  </p>
  <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Đo chỉ số cơ bản:</strong> huyết áp, nhịp tim, SpO2, nhiệt độ, cân nặng (và đường huyết nếu gia đình yêu cầu, có thiết bị phù hợp).</li>
    <li style="margin-bottom: 8px;"><strong>Kiểm tra thuốc:</strong> đối chiếu đơn thuốc, xem thuốc đã uống đúng chưa, còn đủ không, sắp xếp hộp chia thuốc theo ngày.</li>
    <li style="margin-bottom: 8px;"><strong>Quan sát tổng quát:</strong> ăn uống, giấc ngủ, đi lại, tinh thần, dấu hiệu té ngã, vết thương, phù chân…</li>
    <li style="margin-bottom: 8px;"><strong>Trò chuyện và vận động nhẹ:</strong> cùng ông bà làm bài tập trí nhớ, vận động tay chân với bộ dụng cụ rèn luyện của ANTCARE.</li>
    <li style="margin-bottom: 8px;"><strong>Báo cáo cho gia đình:</strong> gửi nhật ký chỉ số và ghi chú qua Zalo/tin nhắn sau mỗi buổi; báo ngay khi có dấu hiệu cần đi khám.</li>
  </ol>

  <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Theo dõi sức khỏe tại nhà khác gì đi khám định kỳ?</h2>
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
      <thead>
        <tr style="background-color: #6633B4; color: #ffffff;">
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 25%;">Tiêu chí</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 35%;">Khám định kỳ ở bệnh viện</th>
          <th style="padding: 12px 16px; border: 1px solid #e2d6f5; width: 40%;">Trợ lý theo dõi sức khỏe tại nhà</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tần suất</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Vài tháng một lần</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Hằng tuần hoặc theo lịch gia đình chọn</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Địa điểm</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Bệnh viện, phòng khám</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Tại nhà riêng quen thuộc</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Mục đích</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Chẩn đoán, kê đơn điều trị</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Theo dõi xu hướng, phát hiện sớm, nhắc thuốc</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Dữ liệu</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Một thời điểm khi đến viện</td>
          <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Chuỗi dữ liệu liên tục mang theo khi đi khám</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
    Hai hình thức bổ sung cho nhau: nhật ký chỉ số từ các buổi thăm nhà giúp bác sĩ có thêm thông tin khi tái khám.
  </p>

  <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Ai nên dùng dịch vụ này?</h2>
  <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
    <li style="margin-bottom: 8px;">Người cao tuổi sống một mình hoặc chỉ có hai ông bà.</li>
    <li style="margin-bottom: 8px;">Người có bệnh mạn tính cần theo dõi huyết áp, đường huyết, dùng nhiều loại thuốc.</li>
    <li style="margin-bottom: 8px;">Người vừa xuất viện, đang trong quá trình hồi phục tại nhà.</li>
    <li style="margin-bottom: 8px;">Gia đình có con cái ở xa, ở nước ngoài, muốn có "đôi mắt" tin cậy bên bố mẹ.</li>
  </ul>

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đặt lịch Trợ lý theo dõi sức khỏe cho bố mẹ</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được tư vấn gói phù hợp.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Tìm hiểu các giải pháp
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Trợ lý theo dõi sức khỏe có phải bác sĩ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Không. Kiến Y tế đo chỉ số, theo dõi và báo cáo; mọi chẩn đoán và thay đổi thuốc do bác sĩ quyết định.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Bao lâu nên theo dõi một lần?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Tùy tình trạng sức khỏe: người khỏe có thể 1 lần/tuần, người có bệnh mạn tính hoặc mới xuất viện có thể 2–3 lần/tuần.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Gia đình nhận báo cáo bằng cách nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Qua Zalo hoặc tin nhắn sau mỗi buổi, kèm bảng chỉ số để theo dõi xu hướng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Có kết hợp với dịch vụ đưa đi khám không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Có. Khi chỉ số bất thường, ANTCARE có thể sắp xếp dịch vụ Đồng hành đi khám thuận tiện cho gia đình.</p>
      </div>
    </details>
  </section>

  <p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
    <strong>Lưu ý y tế (YMYL):</strong> Dịch vụ Trợ lý theo dõi sức khỏe của ANTCARE là hoạt động hỗ trợ đo lường, đồng hành nhắc nhở và báo cáo; không thay thế chẩn đoán hay phác đồ điều trị của bác sĩ chuyên khoa. Trường hợp cấp cứu khẩn cấp, gia đình vui lòng gọi 115.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trợ lý theo dõi sức khỏe tại nhà cho người cao tuổi | ANTCARE",
    "description": "Trợ lý theo dõi sức khỏe của ANTCARE đến nhà đo chỉ số, nhắc thuốc, ghi nhật ký và báo cáo cho con cái. Tìm hiểu cách dịch vụ hoạt động.",
    "inLanguage": "vi-VN",
    "datePublished": "${isoDate}",
    "dateModified": "${isoDate}",
    "mainEntityOfPage": "https://antcare.vn/news/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi",
    "image": "https://antcare.vn/images/tin-tuc/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg",
    "author": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn",
      "telephone": "+84969032360"
    }
  }
  </script>
</article>`;

// Danh sách 10 bài viết
const newArticles = [
  {
    id: 125,
    slug: "tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi",
    oldSlugs: ["blog/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi", "tin-tuc/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi"],
    title: "Trợ lý theo dõi sức khỏe tại nhà cho người cao tuổi | ANTCARE",
    category: "Theo dõi sức khỏe",
    date: dateStr,
    author: defaultAuthor,
    description: "Trợ lý theo dõi sức khỏe của ANTCARE đến nhà đo chỉ số, nhắc thuốc, ghi nhật ký và báo cáo cho con cái. Tìm hiểu cách dịch vụ hoạt động.",
    excerpt: "Trợ lý theo dõi sức khỏe của ANTCARE đến nhà đo chỉ số, nhắc thuốc, ghi nhật ký và báo cáo cho con cái. Tìm hiểu cách dịch vụ hoạt động.",
    image: "/images/tin-tuc/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg",
    featured: false,
    content: content1
  }
];

fs.writeFileSync(path.join(__dirname, 'batch_data.json'), JSON.stringify(newArticles, null, 2), 'utf8');
console.log('Sample batch file created.');
