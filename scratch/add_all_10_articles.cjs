const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Common author
const defaultAuthor = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
};

const dateStr = "21/09/2026";
const isoDate = "2026-09-21";

// Helper function to build full HTML content
function buildArticleHtml({ title, description, image, alt, quickAnswer, toc, bodyHtml, faqList, ymylNote, schemaJson }) {
  const tocHtml = toc.map(item => `<li><a href="#${item.id}" style="color: #6633B4; text-decoration: none; font-weight: 500;">${item.text}</a></li>`).join('\n      ');
  const faqHtml = faqList.map(faq => `
    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">${faq.q}</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">${faq.a}</p>
      </div>
    </details>`).join('');

  return `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">${title}</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      ${description}
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="${isoDate}">${dateStr}</time> · Cập nhật <time itemprop="dateModified" datetime="${isoDate}">${dateStr}</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;"><img src="${image}" alt="${alt}" width="1200" height="675" loading="eager" style="width:100%;height:auto;border-radius:12px"></figure>

  <div class="quick-answer" id="tom-tat" style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <strong style="color: #6633B4; display: block; margin-bottom: 0.5rem; font-size: 1.05rem;">Trả lời nhanh:</strong>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      ${quickAnswer}
    </p>
  </div>

  <nav aria-label="Mục lục" style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
    <strong style="color: #6633B4; font-size: 1.1rem; display: block; margin-bottom: 8px;">Nội dung bài viết</strong>
    <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      ${tocHtml}
      <li><a href="#faq" style="color: #6633B4; text-decoration: none; font-weight: 500;">Câu hỏi thường gặp</a></li>
    </ol>
  </nav>

  ${bodyHtml}

  <!-- CTA Box -->
  <aside class="antcare-cta" style="background: linear-gradient(135deg, #6633B4 0%, #4a218c 100%); color: #ffffff; padding: 2rem; border-radius: 16px; margin: 2.5rem 0; text-align: center; box-shadow: 0 10px 25px rgba(102, 51, 180, 0.25);">
    <h3 style="font-size: 1.35rem; margin: 0 0 0.75rem 0; color: #ffffff; font-weight: 700;">Đồng hành cùng sức khỏe và niềm vui của bố mẹ</h3>
    <p style="margin: 0 0 1.25rem 0; font-size: 1.05rem; opacity: 0.95;">
      Gọi hotline <strong>0969 032 360</strong> hoặc nhắn tin fanpage ANTCARE để được chuyên viên y tế tư vấn tận tình.
    </p>
    <p style="margin-top: 15px; font-style: italic; color: #ffd600; font-weight: 600;">"ANTCARE - Kiến chăm tổ không chỉ là chăm sóc người già, mà là để hành trình tuổi già của mỗi người thêm khỏe, yên vui."</p>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="tel:0969032360" style="display: inline-block; font-weight: 700; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; background: #FD711A; color: #ffffff; box-shadow: 0 4px 12px rgba(253, 113, 26, 0.4);">
        📞 Gọi 0969 032 360
      </a>
      <a href="/giai-phap-cham-soc" style="display: inline-block; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 0.8rem 1.8rem; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.8); color: #ffffff;">
        Tìm hiểu dịch vụ ANTCARE
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>
    ${faqHtml}
  </section>

  <p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
    <strong>Lưu ý y tế (YMYL):</strong> ${ymylNote || 'Nội dung trên website mang tính chất tham khảo, hỗ trợ chăm sóc sức khỏe gia đình; không thay thế chẩn đoán, điều trị chuyên khoa của bác sĩ. Khi có tình huống khẩn cấp, vui lòng liên hệ ngay cơ sở y tế gần nhất hoặc gọi 115.'}
  </p>

  ${schemaJson ? `<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n</script>` : ''}
</article>`;
}

// Data of 10 articles
const rawArticles = [
  // BÀI 1
  {
    id: 125,
    slug: "tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi",
    title: "Trợ lý theo dõi sức khỏe tại nhà cho người cao tuổi | ANTCARE",
    category: "Theo dõi sức khỏe",
    description: "Trợ lý theo dõi sức khỏe của ANTCARE đến nhà đo chỉ số, nhắc thuốc, ghi nhật ký và báo cáo cho con cái. Tìm hiểu cách dịch vụ hoạt động.",
    image: "/images/tin-tuc/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg",
    alt: "Bộ thiết bị đo chỉ số sinh tồn và nhật ký theo dõi sức khỏe tại nhà của ANTCARE",
    quickAnswer: "Trợ lý theo dõi sức khỏe tại nhà là dịch vụ cử nhân viên đến nhà người cao tuổi định kỳ để đo các chỉ số cơ bản (huyết áp, nhịp tim, SpO2, cân nặng…), nhắc uống thuốc, quan sát thay đổi bất thường và gửi báo cáo cho gia đình. Dịch vụ giúp phát hiện sớm vấn đề, không thay thế bác sĩ.",
    toc: [
      { id: "s1", text: "Vì sao người cao tuổi cần được theo dõi sức khỏe đều đặn?" },
      { id: "s2", text: "Trợ lý theo dõi sức khỏe của ANTCARE làm những gì?" },
      { id: "s3", text: "Theo dõi sức khỏe tại nhà khác gì đi khám định kỳ?" },
      { id: "s4", text: "Ai nên dùng dịch vụ này?" }
    ],
    bodyHtml: `
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
    `,
    faqList: [
      { q: "Trợ lý theo dõi sức khỏe có phải bác sĩ không?", a: "Không. Kiến Y tế đo chỉ số, theo dõi và báo cáo; mọi chẩn đoán và thay đổi thuốc do bác sĩ quyết định." },
      { q: "Bao lâu nên theo dõi một lần?", a: "Tùy tình trạng sức khỏe: người khỏe có thể 1 lần/tuần, người có bệnh mạn tính hoặc mới xuất viện có thể 2–3 lần/tuần." },
      { q: "Gia đình nhận báo cáo bằng cách nào?", a: "Qua Zalo hoặc tin nhắn sau mỗi buổi, kèm bảng chỉ số để theo dõi xu hướng." },
      { q: "Có kết hợp với dịch vụ đưa đi khám không?", a: "Có. Khi chỉ số bất thường, ANTCARE có thể sắp xếp dịch vụ Đồng hành đi khám thuận tiện cho gia đình." }
    ]
  },

  // BÀI 2
  {
    id: 126,
    slug: "dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia",
    title: "Dịch vụ đồng hành đi khám bệnh cho người già | ANTCARE",
    category: "Đồng hành đi khám",
    description: "Không có thời gian đưa bố mẹ đi khám? Kiến Y tế của ANTCARE đưa đón, làm thủ tục, ghi chép lời bác sĩ và báo lại cho gia đình.",
    image: "/images/tin-tuc/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia.jpg",
    alt: "Chuẩn bị chu đáo hồ sơ bệnh án và túi đồ đồng hành đưa người cao tuổi đi khám bệnh",
    quickAnswer: "Dịch vụ đồng hành đi khám bệnh là việc cử một nhân viên được đào tạo đưa người cao tuổi đi khám: đặt lịch, đón tại nhà, làm thủ tục, đi cùng qua từng phòng khám, ghi lại lời dặn của bác sĩ, mua thuốc, đưa về và gửi báo cáo cho gia đình.",
    toc: [
      { id: "s1", text: "Vì sao đi khám là 'cửa ải' với người cao tuổi?" },
      { id: "s2", text: "Quy trình đồng hành đi khám của ANTCARE" },
      { id: "s3", text: "Dịch vụ này khác gì thuê xe ôm / taxi đưa đi?" },
      { id: "s4", text: "Nhân viên đồng hành có quyết định thay gia đình không?" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao đi khám là "cửa ải" với người cao tuổi?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Một buổi khám ở bệnh viện lớn có thể kéo dài từ sáng đến chiều: xếp hàng lấy số, đóng tiền, xét nghiệm, siêu âm ở các tầng khác nhau, chờ kết quả, quay lại gặp bác sĩ. Với người lớn tuổi, đó là một ngày mệt mỏi, dễ lạc, dễ quên lời dặn. Con cái thì phải xin nghỉ làm — hoặc không thể về nếu đang ở tỉnh khác, nước khác.
      </p>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Quy trình đồng hành đi khám của ANTCARE</h2>
      <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li style="margin-bottom: 8px;"><strong>Trước ngày khám:</strong> trao đổi với gia đình về lý do khám, tiền sử, thuốc đang dùng; đặt lịch; chuẩn bị giấy tờ (CCCD, thẻ BHYT, sổ khám, kết quả cũ).</li>
        <li style="margin-bottom: 8px;"><strong>Đón tại nhà:</strong> Kiến Y tế đến đón, di chuyển bằng phương tiện phù hợp an toàn.</li>
        <li style="margin-bottom: 8px;"><strong>Tại bệnh viện:</strong> làm thủ tục, đi cùng qua từng khâu, hỗ trợ đi lại, đảm bảo ông bà ăn uống đúng giờ (với các xét nghiệm cần nhịn ăn thì tuân theo hướng dẫn).</li>
        <li style="margin-bottom: 8px;"><strong>Gặp bác sĩ:</strong> trình bày tiền sử và nhật ký chỉ số (nếu dùng dịch vụ Trợ lý theo dõi sức khỏe); ghi chép chẩn đoán, chỉ định, lời dặn. Có thể gọi video để con cái cùng nghe bác sĩ nếu bệnh viện cho phép.</li>
        <li style="margin-bottom: 8px;"><strong>Mua thuốc, đưa về nhà:</strong> kiểm tra đơn, sắp xếp thuốc theo ngày.</li>
        <li style="margin-bottom: 8px;"><strong>Báo cáo:</strong> gửi gia đình bản tóm tắt buổi khám, ảnh chụp đơn thuốc, kết quả, lịch tái khám.</li>
      </ol>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Dịch vụ này khác gì thuê xe ôm / taxi đưa đi?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Tài xế chỉ đưa đến cổng bệnh viện. Người đồng hành của ANTCARE đi cùng suốt buổi, hiểu quy trình bệnh viện, biết hỏi bác sĩ đúng câu cần hỏi và chuyển thông tin chính xác về cho gia đình. Quan trọng hơn: ông bà không phải cô đơn một mình giữa dòng người đông đúc.
      </p>

      <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nhân viên đồng hành có quyết định thay gia đình không?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Không. Mọi quyết định điều trị (đồng ý thủ thuật, nhập viện, thay đổi thuốc) do người bệnh và gia đình quyết định. Kiến Y tế là cầu nối thông tin, liên lạc với gia đình ngay khi có tình huống cần quyết định.
      </p>
    `,
    faqList: [
      { q: "Cần đặt dịch vụ trước bao lâu?", a: "Nên đặt trước ít nhất 1–2 ngày để chuẩn bị giấy tờ và đặt lịch khám." },
      { q: "Có đi cùng khám bảo hiểm y tế không?", a: "Có. Kiến Y tế hỗ trợ thủ tục khám BHYT cũng như khám dịch vụ." },
      { q: "Con ở nước ngoài có theo dõi được buổi khám không?", a: "Được. Gia đình nhận cập nhật trong ngày, có thể gọi video khi phù hợp và nhận bản tóm tắt sau buổi khám." },
      { q: "Nếu bác sĩ yêu cầu nhập viện thì sao?", a: "Kiến Y tế báo ngay cho gia đình để quyết định và hỗ trợ các thủ tục ban đầu theo thỏa thuận." }
    ]
  },

  // BÀI 3
  {
    id: 127,
    slug: "tin-tuc-nhat-ban-daycare-giam-xu-huong-cham-soc-tai-nha",
    title: "Nhật Bản: trung tâm daycare giảm, xu hướng chăm sóc tại nhà lên ngôi",
    category: "Tin tức Y tế",
    description: "Số cơ sở chăm sóc ban ngày ở Nhật giảm 3 năm liên tiếp, đóng cửa tăng mạnh năm 2025. Aging in place và mô hình Aoi Care cho thấy xu hướng mới.",
    image: "/images/tin-tuc/tin-tuc-nhat-ban-daycare-giam-xu-huong-cham-soc-tai-nha.jpg",
    alt: "Góc hiên nhà Nhật Bản thanh bình phản ánh xu hướng Aging in Place và chăm sóc tại nhà",
    quickAnswer: "Theo thống kê của Bộ Y tế – Lao động – Phúc lợi Nhật Bản, số cơ sở chăm sóc ban ngày (day service) cho người cao tuổi đã giảm 3 năm liên tiếp tính đến 2025, số cơ sở đóng cửa năm 2025 tăng hơn 35%. Song song, Nhật đẩy mạnh 'aging in place' – già đi tại chính ngôi nhà mình – và các mô hình như Aoi Care, nơi người già được giao việc thay vì chỉ được phục vụ.",
    toc: [
      { id: "s1", text: "Những con số đáng chú ý tại Nhật Bản" },
      { id: "s2", text: "'Aging in place' – già đi tại chính ngôi nhà của mình" },
      { id: "s3", text: "Aoi Care: người già được 'giao việc', không bị ỉ lại" },
      { id: "s4", text: "Bài học quý giá cho Việt Nam" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Những con số đáng chú ý tại Nhật Bản</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li style="margin-bottom: 8px;"><strong>Số cơ sở day service giảm 3 năm liên tiếp:</strong> Dữ liệu công bố tháng 7/2025 cho thấy cả nước Nhật còn khoảng 42.656 cơ sở chăm sóc ban ngày, ít hơn năm trước 362 cơ sở. Nhóm cơ sở nhỏ trong cộng đồng giảm mạnh nhất.</li>
        <li style="margin-bottom: 8px;"><strong>Đóng cửa tăng mạnh:</strong> Theo Tokyo Shoko Research, số cơ sở chăm sóc ban ngày ngừng hoạt động, giải thể năm 2025 là 95, tăng 35,7% so với năm trước; ngoài ra còn 45 vụ phá sản.</li>
        <li style="margin-bottom: 8px;"><strong>Dịch vụ tại nhà thì thiếu người làm:</strong> Toàn ngành ghi nhận 176 vụ phá sản; riêng mảng chăm sóc tại nhà chiếm 91 vụ, chủ yếu do thiếu nhân lực và cắt giảm mức chi trả.</li>
        <li style="margin-bottom: 8px;"><strong>Chăm sóc y tế tại nhà tăng đều:</strong> Số trạm điều dưỡng tại nhà cung cấp dịch vụ phòng ngừa đã tăng từ 12.100 (2020) lên khoảng 17.500 (2024).</li>
      </ul>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        <strong>Đọc đúng những con số này:</strong> Nhật Bản không "bỏ" trung tâm ban ngày, nhưng mô hình này đã bão hòa, trong khi nhu cầu được chăm sóc ngay tại nhà tiếp tục tăng nhanh hơn khả năng đáp ứng.
      </p>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">'Aging in place' – già đi tại chính ngôi nhà của mình</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Aging in place là định hướng giúp người cao tuổi sống lâu nhất có thể trong ngôi nhà, khu phố quen thuộc, với dịch vụ y tế – chăm sóc tìm đến tận nơi. Người già ở nhà mình ít bị xáo trộn tâm lý, giữ được thói quen, các mối quan hệ, và chi phí xã hội thấp hơn nhiều so với cơ sở nội trú.
      </p>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Aoi Care: người già được 'giao việc', không bị ỉ lại</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Aoi Care tại Fujisawa do ông Tadasuke Kato sáng lập, nổi tiếng với triết lý: <strong>luôn có vai trò cho người cao tuổi</strong>. Người già tham gia việc nhà hằng ngày: nấu ăn, nhặt rau, pha trà; tự lên kế hoạch hoạt động; trẻ em trong khu phố ghé qua chơi cùng. Thông điệp cốt lõi: <em>chăm sóc quá mức làm người già mất dần khả năng; được làm việc giúp họ giữ vận động và lòng tự trọng.</em>
      </p>

      <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bài học quý giá cho Việt Nam</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Văn hóa Việt gắn chặt với việc ông bà sống ở nhà cùng con cháu. Việt Nam có cơ hội đi thẳng vào mô hình <strong>chăm sóc tại nhà + rèn luyện chủ động</strong>. Đây chính là hướng đi của ANTCARE: Dịch vụ tìm đến nhà (Trợ lý theo dõi sức khỏe, Đồng hành đi khám) kết hợp bộ rèn luyện từ vật liệu tự nhiên (dây bèo, nan, gỗ cao su) để người già có việc làm mỗi ngày.
      </p>
    `,
    faqList: [
      { q: "Aging in place là gì?", a: "Là định hướng giúp người cao tuổi sống lâu nhất có thể tại nhà và cộng đồng của mình, với dịch vụ y tế, chăm sóc được đưa đến tận nơi." },
      { q: "Aoi Care có phải là một loại hình dịch vụ ở Nhật không?", a: "Aoi Care là tên một đơn vị cụ thể ở Fujisawa, nổi tiếng với triết lý để người cao tuổi tham gia việc hằng ngày và giao lưu nhiều thế hệ." },
      { q: "Vì sao trung tâm ban ngày ở Nhật giảm?", a: "Do thị trường bão hòa, thiếu nhân lực, chi phí tăng và chính sách ưu tiên chăm sóc tại nhà và cộng đồng." },
      { q: "Xu hướng này có phù hợp với Việt Nam?", a: "Rất phù hợp, vì phần lớn người cao tuổi Việt Nam vẫn sống tại nhà cùng gia đình và mong muốn được già đi trong ngôi nhà của mình." }
    ]
  },

  // BÀI 4
  {
    id: 128,
    slug: "con-o-xa-theo-doi-suc-khoe-bo-me",
    title: "Con ở xa, làm sao theo dõi sức khỏe bố mẹ già? | ANTCARE",
    category: "Chăm sóc từ xa",
    description: "Đi làm xa hay định cư nước ngoài vẫn có thể nắm sức khỏe bố mẹ hằng tuần. 5 cách thực tế và vai trò của trợ lý theo dõi sức khỏe tại nhà.",
    image: "/images/tin-tuc/con-o-xa-theo-doi-suc-khoe-bo-me.jpg",
    alt: "Theo dõi sức khỏe bố mẹ từ xa thông qua thiết bị đo và báo cáo số liệu ANTCARE",
    quickAnswer: "Để theo dõi sức khỏe bố mẹ khi ở xa, hãy kết hợp: gọi điện có lịch cố định, thiết bị đo tại nhà, hộp chia thuốc theo ngày, một người tin cậy ghé thăm định kỳ và một kênh nhận báo cáo chỉ số. Trợ lý theo dõi sức khỏe tại nhà gộp các việc này vào một dịch vụ.",
    toc: [
      { id: "s1", text: "Nỗi lo quen thuộc của người con xa nhà" },
      { id: "s2", text: "5 cách theo dõi sức khỏe bố mẹ từ xa" },
      { id: "s3", text: "Trợ lý theo dõi sức khỏe gộp cả 5 việc thành một" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nỗi lo quen thuộc của người con xa nhà</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        "Bố mẹ vẫn khỏe mà" — câu trả lời quen thuộc qua điện thoại. Nhưng người con ở xa đều hiểu: bố mẹ thường giấu bệnh để con yên tâm công tác. Nhiều gia đình chỉ biết bố bị tăng huyết áp lâu ngày khi ông đã phải nhập viện cấp cứu.
      </p>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">5 cách theo dõi sức khỏe bố mẹ từ xa</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li style="margin-bottom: 8px;"><strong>1. Gọi video có lịch và quan sát kỹ:</strong> Nhìn sắc mặt, giọng nói, bước đi, sự ngăn nắp trong nhà, tủ lạnh có đầy đủ đồ ăn không.</li>
        <li style="margin-bottom: 8px;"><strong>2. Trang bị thiết bị đo cơ bản:</strong> Máy đo huyết áp bắp tay, kẹp SpO2, cân nặng. Nhưng thiết bị chỉ có ích khi có người đo đúng cách và đều đặn.</li>
        <li style="margin-bottom: 8px;"><strong>3. Hộp chia thuốc theo ngày:</strong> Giúp kiểm tra nhanh bố mẹ có uống đúng hay bỏ quên cữ thuốc nào không.</li>
        <li style="margin-bottom: 8px;"><strong>4. Một 'đôi mắt' tin cậy ghé nhà định kỳ:</strong> Hàng xóm giúp được một lúc, nhưng khó đều đặn và thiếu chuyên môn theo dõi.</li>
        <li style="margin-bottom: 8px;"><strong>5. Kênh báo cáo số liệu rõ ràng:</strong> Biểu đồ chỉ số hàng tuần giúp thấy rõ xu hướng hơn là chỉ nghe câu "hôm nay mẹ hơi mệt".</li>
      </ul>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Trợ lý theo dõi sức khỏe gộp cả 5 việc thành một</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Với dịch vụ Trợ lý theo dõi sức khỏe của ANTCARE, Kiến Y tế đến nhà theo lịch, đo chỉ số, kiểm tra thuốc, trò chuyện với ông bà và gửi báo cáo cho bạn qua Zalo — dù bạn ở bất cứ múi giờ nào. Khi cần đi khám, dịch vụ Đồng hành đi khám thay bạn đưa bố mẹ đến bệnh viện và báo lại lời bác sĩ.
      </p>
    `,
    faqList: [
      { q: "Tôi ở nước ngoài, có thể đặt và thanh toán dịch vụ từ xa không?", a: "Có. Việc trao đổi, nhận báo cáo và thanh toán đều thực hiện online dễ dàng qua ngân hàng hoặc thẻ quốc tế." },
      { q: "Bố mẹ ngại người lạ vào nhà thì sao?", a: "Buổi đầu Kiến Y tế sẽ làm quen, có thể gọi video cùng con cái để ông bà yên tâm. Nên giới thiệu trước với bố mẹ rằng đây là người bạn nhờ đến hỗ trợ." },
      { q: "Tôi nhận báo cáo khi nào?", a: "Sau mỗi buổi thăm; trường hợp chỉ số bất thường sẽ được gọi báo ngay." }
    ]
  },

  // BÀI 5
  {
    id: 129,
    slug: "checklist-dua-bo-me-di-kham-benh-vien",
    title: "Checklist chuẩn bị đưa bố mẹ đi khám ở bệnh viện lớn | ANTCARE",
    category: "Cẩm nang đi khám",
    description: "Cần mang giấy tờ gì, nhịn ăn thế nào, nên hỏi bác sĩ câu gì? Checklist đầy đủ trước, trong và sau khi đưa người cao tuổi đi khám.",
    image: "/images/tin-tuc/checklist-dua-bo-me-di-kham-benh-vien.jpg",
    alt: "Checklist danh mục chuẩn bị đưa bố mẹ đi khám bệnh tại bệnh viện lớn",
    quickAnswer: "Trước khi đưa người cao tuổi đi khám, cần mang CCCD, thẻ BHYT, giấy chuyển tuyến (nếu có), sổ khám và kết quả cũ, danh sách thuốc đang dùng; hỏi trước có cần nhịn ăn không; chuẩn bị sẵn câu hỏi cho bác sĩ; và ghi lại toàn bộ lời dặn sau khám.",
    toc: [
      { id: "s1", text: "Trước ngày khám" },
      { id: "s2", text: "Trong ngày khám" },
      { id: "s3", text: "Những câu nên hỏi bác sĩ" },
      { id: "s4", text: "Sau khi khám xong" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Trước ngày khám</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li>Đặt lịch khám trước qua tổng đài hoặc ứng dụng bệnh viện.</li>
        <li>Hỏi rõ: xét nghiệm máu, nội soi hay siêu âm có cần <strong>nhịn ăn, nhịn tiểu</strong> không?</li>
        <li>Chuẩn bị giấy tờ: CCCD/VNeID, thẻ BHYT, giấy chuyển tuyến hoặc giấy hẹn tái khám.</li>
        <li>Gom sổ khám, đơn thuốc và phim chụp, xét nghiệm cũ vào một túi gọn gàng.</li>
        <li>Chụp ảnh hoặc ghi danh sách thuốc đang uống (tên thuốc, hàm lượng, giờ uống).</li>
      </ul>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Trong ngày khám</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li>Mặc trang phục rộng rãi, dễ kéo tay áo đo huyết áp, giày đế bằng chống trơn trượt.</li>
        <li>Mang theo bình nước ấm, đồ ăn nhẹ (dùng ngay sau khi lấy máu xong).</li>
        <li>Đến sớm vào đầu giờ sáng; chủ động mượn xe lăn bệnh viện nếu ông bà đau khớp, đi lại yếu.</li>
        <li>Không để ông bà ngồi một mình ở khu chờ quá lâu mà không có người trông chừng.</li>
      </ul>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Những câu nên hỏi bác sĩ</h2>
      <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li>Bác nhà tôi mắc bệnh gì, mức độ kiểm soát hiện tại ra sao?</li>
        <li>Đơn thuốc mới uống như thế nào, có tương tác với các thuốc mạn tính đang dùng không?</li>
        <li>Chế độ dinh dưỡng và vận động cần kiêng cữ gì đặc biệt?</li>
        <li>Dấu hiệu cảnh báo nguy hiểm nào cần đưa đi viện cấp cứu ngay?</li>
        <li>Lịch tái khám chính xác là khi nào?</li>
      </ol>

      <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Sau khi khám xong</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Chụp ảnh đơn thuốc gửi vào nhóm gia đình, xếp thuốc mới vào hộp chia theo ngày, ghi chú lịch tái khám vào điện thoại và theo dõi kỹ phản ứng của cơ thể trong 3 ngày đầu dùng thuốc mới.
      </p>
    `,
    faqList: [
      { q: "Người già đi khám nên đi lúc mấy giờ?", a: "Nên đến sớm từ đầu giờ sáng, đặc biệt nếu cần xét nghiệm máu lúc đói để ông bà không bị mệt vì nhịn ăn lâu." },
      { q: "Có cần mang theo thuốc đang uống không?", a: "Rất cần. Mang theo vỏ thuốc hoặc danh sách để bác sĩ đối chiếu, tránh kê trùng hoặc tương tác bất lợi." },
      { q: "Nếu bố mẹ hay quên lời bác sĩ dặn thì sao?", a: "Người đi cùng hãy ghi chép sổ tay hoặc xin phép ghi âm lời dặn, sau đó tổng hợp lại gửi cho cả gia đình." }
    ]
  },

  // BÀI 6
  {
    id: 130,
    slug: "dau-hieu-bo-me-can-theo-doi-suc-khoe",
    title: "8 dấu hiệu bố mẹ cần được theo dõi sức khỏe thường xuyên | ANTCARE",
    category: "Chăm sóc sức khỏe",
    description: "Hay quên thuốc, ăn ít, đi lại chậm, dễ ngã… 8 dấu hiệu cho thấy người cao tuổi cần được theo dõi sức khỏe đều đặn tại nhà.",
    image: "/images/tin-tuc/dau-hieu-bo-me-can-theo-doi-suc-khoe.jpg",
    alt: "Các dấu hiệu cảnh báo sức khỏe người cao tuổi cần được theo dõi định kỳ",
    quickAnswer: "Bố mẹ cần được theo dõi sức khỏe thường xuyên khi có các dấu hiệu: quên uống thuốc, ăn uống kém hoặc sụt cân, đi lại chậm và từng té ngã, huyết áp/đường huyết dao động, ngủ kém, hay lẫn, ngại ra ngoài, hoặc mới xuất viện.",
    toc: [
      { id: "s1", text: "8 dấu hiệu cảnh báo cụ thể" },
      { id: "s2", text: "Nên làm gì khi thấy những dấu hiệu này?" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">8 dấu hiệu cảnh báo cụ thể</h2>
      <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li><strong>Quên uống thuốc hoặc uống nhầm:</strong> Thuốc trong vỉ còn thừa nhiều bất thường hoặc hết trước hẹn. Với thuốc huyết áp hay tim mạch, điều này tiềm ẩn nguy cơ đột quỵ rất cao.</li>
        <li><strong>Ăn uống kém, sụt cân không rõ lý do:</strong> Quần áo rộng thùng thình, thức ăn trong tủ lạnh để quá hạn.</li>
        <li><strong>Đi lại chậm chạp, từng bị té ngã:</strong> Một lần ngã là hồi chuông báo động nguy cơ gãy xương và suy giảm khả năng đi lại.</li>
        <li><strong>Huyết áp hoặc đường huyết dao động thất thường:</strong> Cần được đo đều đặn để phát hiện sớm các đợt tăng vọt nguy hiểm.</li>
        <li><strong>Ngủ kém, mệt mỏi kéo dài:</strong> Thường xuyên thức trắng đêm, ngày gà gật.</li>
        <li><strong>Hay quên, lặp lại câu hỏi nhiều lần, lẫn giờ giấc:</strong> Cần phân biệt giữa đãng trí tuổi già và hội chứng sa sút trí tuệ sớm.</li>
        <li><strong>Ngại ra ngoài, thu mình, buồn bã:</strong> Thiếu giao tiếp xã hội khiến tinh thần và thể chất cùng suy giảm nhanh chóng.</li>
        <li><strong>Mới xuất viện hoặc vừa đổi đơn thuốc mới:</strong> Giai đoạn 2-4 tuần sau xuất viện là thời điểm nhạy cảm nhất cần người theo dõi sát sao.</li>
      </ol>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Nên làm gì khi thấy những dấu hiệu này?</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li>Đưa bố mẹ đi khám chuyên khoa lão khoa để có đánh giá toàn diện.</li>
        <li>Thiết lập lịch theo dõi chỉ số tại nhà với dịch vụ Trợ lý theo dõi sức khỏe ANTCARE.</li>
        <li>Cho ông bà có việc để làm mỗi ngày: bảng bận rộn rèn tay, thảm xúc giác rèn thăng bằng.</li>
        <li>Rà soát an toàn nhà ở: gắn thêm tay vịn, tháo bỏ thảm trơn trượt, lắp đèn cảm ứng ban đêm.</li>
      </ul>
    `,
    faqList: [
      { q: "Hay quên có phải là dấu hiệu sa sút trí tuệ?", a: "Không phải lúc nào cũng vậy. Nhưng nếu hay quên ảnh hưởng đến sinh hoạt độc lập, gia đình nên đưa đi khám chuyên khoa thần kinh hoặc lão khoa." },
      { q: "Người già ngã một lần có đáng lo không?", a: "Rất đáng lo. Cần tìm rõ nguyên nhân (tụt huyết áp tư thế, tác dụng phụ của thuốc, thị lực kém hay sàn trơn) để can thiệp kịp thời." }
    ]
  },

  // BÀI 7
  {
    id: 131,
    slug: "bang-ban-ron-cho-nguoi-cao-tuoi",
    title: "Bảng bận rộn cho người cao tuổi: rèn tay, rèn trí nhớ | ANTCARE",
    category: "Đồ chơi trí nhớ",
    description: "Bảng bận rộn (busy board) giúp người già luyện vận động tinh và trí nhớ. ANTCARE làm từ dây bèo, nan, gỗ cao su – ông bà làm ra quà tặng con cháu.",
    image: "/images/tin-tuc/bang-ban-ron-cho-nguoi-cao-tuoi.jpg",
    alt: "Bảng bận rộn thủ công bằng gỗ cao su và dây bèo rèn luyện trí nhớ cho người già",
    quickAnswer: "Bảng bận rộn (busy board) cho người cao tuổi là tấm bảng gắn các thao tác quen thuộc như cài khuy, buộc dây, vặn, xoay, đan, luồn để luyện vận động tinh và kích thích trí nhớ. Bảng của ANTCARE làm từ dây bèo, nan, gỗ cao su, có nhiều cấp độ, và ông bà làm ra thành phẩm để tặng con cháu.",
    toc: [
      { id: "s1", text: "Vì sao người cao tuổi cần 'việc để tay làm'?" },
      { id: "s2", text: "Bảng bận rộn của ANTCARE có gì khác biệt?" },
      { id: "s3", text: "Ai nên dùng bảng bận rộn?" },
      { id: "s4", text: "Cách dùng hiệu quả tại nhà" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao người cao tuổi cần 'việc để tay làm'?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Khi về già, nhiều người mất dần công việc, vai trò, và cả những thao tác tay quen thuộc. Đôi tay ít hoạt động thì cứng dần; đầu óc ít phải lên kế hoạch thì chậm dần. Các hoạt động thủ công đơn giản, lặp lại giúp duy trì vận động tinh, kích thích tập trung, phối hợp tay - mắt và giảm bồn chồn lo âu.
      </p>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bảng bận rộn của ANTCARE có gì khác biệt?</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li><strong>Chất liệu tự nhiên thân thuộc:</strong> Dây bèo tây, nan tre, gỗ cao su mộc gợi lại kỹ năng và ký ức làng quê xưa, mang lại xúc giác ấm áp khác hẳn đồ nhựa.</li>
        <li><strong>Đa dạng cấp độ:</strong> Từ luồn dây, vặn then đơn giản đến xếp hình, đan theo hoa văn nâng cao.</li>
        <li><strong>Tạo ra thành phẩm thật:</strong> Ông bà làm ra chiếc lót ly, giỏ nhỏ hay khay hoa quả để tặng lại con cháu — được cho đi và thấy mình có ích.</li>
      </ul>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Ai nên dùng bảng bận rộn?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Người cao tuổi ít vận động, người có dấu hiệu suy giảm nhận thức nhẹ, người đang phục hồi chức năng vận động bàn tay sau tai biến hoặc người thích làm đồ thủ công.
      </p>

      <h2 id="s4" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Cách dùng hiệu quả tại nhà</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Mỗi ngày 15–30 phút vào lúc ông bà tỉnh táo; ngồi cùng trò chuyện và trưng bày thành phẩm ở nơi trang trọng để khích lệ tinh thần.
      </p>
    `,
    faqList: [
      { q: "Bảng bận rộn có chữa được sa sút trí tuệ không?", a: "Không. Đây là hoạt động hỗ trợ kích hoạt nhận thức và duy trì vận động tinh, tạo niềm vui, không thay thế điều trị y khoa." },
      { q: "Người già tay run có dùng được không?", a: "Được, bắt đầu với các cấp độ chi tiết lớn, thao tác gạt then hoặc xoay tròn đơn giản." }
    ]
  },

  // BÀI 8
  {
    id: 132,
    slug: "tham-xuc-giac-cho-nguoi-gia",
    title: "Thảm xúc giác cho người già: rèn thăng bằng, phòng té ngã | ANTCARE",
    category: "Vận động & Thăng bằng",
    description: "Thảm xúc giác ghép mảnh với nhiều bề mặt giúp người cao tuổi kích thích cảm giác bàn chân, luyện thăng bằng và dáng đi. Cách dùng an toàn tại nhà.",
    image: "/images/tin-tuc/tham-xuc-giac-cho-nguoi-gia.jpg",
    alt: "Bộ thảm xúc giác ghép mảnh rèn thăng bằng và cảm giác bàn chân cho người già",
    quickAnswer: "Thảm xúc giác là bộ thảm ghép từ nhiều mảnh có bề mặt khác nhau (gai mềm, sóng, sỏi, gỗ, sợi…). Người cao tuổi đi chân trần trên thảm để kích thích cảm giác bàn chân, luyện thăng bằng và dáng đi — hỗ trợ giảm nguy cơ té ngã khi dùng đều đặn và có người hướng dẫn.",
    toc: [
      { id: "s1", text: "Vì sao bàn chân quan trọng với người già?" },
      { id: "s2", text: "Thảm xúc giác hoạt động thế nào?" },
      { id: "s3", text: "Cách tập luyện an toàn tại nhà" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao bàn chân quan trọng với người già?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Bàn chân là "cảm biến" giúp cơ thể giữ thăng bằng. Khi tuổi cao, cảm giác ở bàn chân giảm dần (nhất là ở người tiểu đường), cơ yếu đi, phản xạ chậm lại — người già đi dè dặt, lê chân, và dễ ngã. Té ngã là một trong những nguyên nhân hàng đầu khiến người cao tuổi phải nhập viện.
      </p>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Thảm xúc giác hoạt động thế nào?</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Mỗi mảnh thảm có một bề mặt khác nhau (sỏi bo tròn, nan tre, sợi bèo dệt thô, vân sóng gỗ). Khi bước qua, bàn chân liên tục "đọc" bề mặt mới, kích thích tuần hoàn gan bàn chân, đánh thức phản xạ điều chỉnh tư thế và rèn luyện thăng bằng.
      </p>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Cách tập luyện an toàn tại nhà</h2>
      <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li>Luôn có tay vịn vững chắc hoặc có người thân / Kiến Y tế đứng cạnh trong các buổi đầu.</li>
        <li>Bắt đầu bằng tư thế ngồi ghế, đặt hai bàn chân lên thảm cảm nhận.</li>
        <li>Chuyển sang đứng vịn ghế, dồn trọng lượng luân phiên giữa hai chân.</li>
        <li>Bước chậm từng bước qua các mảnh ghép từ 5–10 phút mỗi ngày.</li>
      </ol>
    `,
    faqList: [
      { q: "Thảm xúc giác có phòng được té ngã không?", a: "Thảm là công cụ hỗ trợ luyện thăng bằng hiệu quả; cần kết hợp rà soát thuốc, thị lực và an toàn sàn nhà." },
      { q: "Người ngồi xe lăn có dùng được không?", a: "Dùng rất tốt ở tư thế ngồi đặt chân lên thảm để kích thích tuần hoàn và cảm giác xúc giác." }
    ]
  },

  // BÀI 9
  {
    id: 133,
    slug: "combo-cham-soc-ren-luyen-nguoi-cao-tuoi",
    title: "Combo chăm sóc + rèn luyện cho người cao tuổi tại nhà | ANTCARE",
    category: "Giải pháp chăm sóc",
    description: "Không chỉ đo huyết áp, đưa đi khám: ANTCARE kết hợp theo dõi sức khỏe với bảng bận rộn, thảm xúc giác để ông bà chủ động, có vai trò mỗi ngày.",
    image: "/images/tin-tuc/combo-cham-soc-ren-luyen-nguoi-cao-tuoi.jpg",
    alt: "Combo chăm sóc theo dõi sức khỏe kết hợp dụng cụ rèn luyện trí não ANTCARE",
    quickAnswer: "Combo chăm sóc + rèn luyện của ANTCARE kết hợp dịch vụ theo dõi sức khỏe, đồng hành đi khám với bộ dụng cụ rèn luyện (bảng bận rộn từ vật liệu Việt Nam, thảm xúc giác). Mục tiêu: người cao tuổi vừa được an toàn về sức khỏe, vừa chủ động vận động, rèn trí nhớ và có việc có ích để làm mỗi ngày.",
    toc: [
      { id: "s1", text: "Chăm sóc quá mức cũng là một vấn đề" },
      { id: "s2", text: "Combo của ANTCARE gồm những gì?" },
      { id: "s3", text: "Vì sao đây là xu hướng tương lai?" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Chăm sóc quá mức cũng là một vấn đề</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        Thương bố mẹ, nhiều gia đình làm thay tất cả. Nhưng khi không còn việc gì để làm, người già mất dần sự tự chủ, khớp tay cứng dần và cảm thấy mình vô dụng. Mô hình Aoi Care tại Nhật Bản đã chứng minh: người già cần được tham gia, cần có vai trò trong cuộc sống hằng ngày.
      </p>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Combo của ANTCARE gồm những gì?</h2>
      <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li><strong>Trợ lý theo dõi sức khỏe:</strong> Kiến Y tế đo 5 chỉ số sinh tồn, kiểm tra thuốc, gửi báo cáo số liệu cho con cái sau mỗi buổi.</li>
        <li><strong>Đồng hành đi khám:</strong> Đưa đón, hỗ trợ thủ tục, ghi nhận lời dặn bác sĩ.</li>
        <li><strong>Bộ dụng cụ rèn luyện:</strong> Bảng bận rộn gỗ cao su dây bèo và thảm xúc giác luyện thăng bằng. Trong mỗi buổi, Kiến Y tế vừa đo chỉ số vừa đồng hành rèn luyện cùng ông bà.</li>
      </ul>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Vì sao đây là xu hướng tương lai?</h2>
      <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
          <thead>
            <tr style="background-color: #6633B4; color: #ffffff;">
              <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Mô hình cũ</th>
              <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Mô hình chăm sóc + rèn luyện ANTCARE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Người già thụ động được phục vụ</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Người già chủ động tham gia, có vai trò</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Chỉ can thiệp khi đã ốm đau</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Theo dõi đều, phòng ngừa rủi ro từ sớm</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Gia đình không có thông tin chi tiết</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 500; color: #6633B4;">Nhận báo cáo số liệu và hình ảnh định kỳ</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    faqList: [
      { q: "Combo khác gì so với chỉ thuê người giúp việc?", a: "Giúp việc làm thay việc nhà. Combo ANTCARE tập trung theo dõi sức khỏe và giúp ông bà tự rèn luyện, duy trì tự chủ, có báo cáo chuyên môn cho gia đình." },
      { q: "Ông bà không thích 'chơi đồ chơi' thì sao?", a: "Bảng của ANTCARE hướng tới làm ra sản phẩm thật (giỏ, lót ly) để tặng con cháu — ông bà xem đó là công việc ý nghĩa chứ không phải trò tiêu khiển." }
    ]
  },

  // BÀI 10
  {
    id: 134,
    slug: "so-sanh-cham-soc-tai-nha-vien-duong-lao-daycare",
    title: "Chăm sóc tại nhà, viện dưỡng lão hay daycare? So sánh chi tiết | ANTCARE",
    category: "Tư vấn chăm sóc",
    description: "So sánh chăm sóc người cao tuổi tại nhà, viện dưỡng lão và trung tâm ban ngày: chi phí, tâm lý, mức độ tự lập. Cách chọn phù hợp cho bố mẹ.",
    image: "/images/tin-tuc/so-sanh-cham-soc-tai-nha-vien-duong-lao-daycare.jpg",
    alt: "So sánh các phương án chăm sóc người cao tuổi: tại nhà, viện dưỡng lão và daycare",
    quickAnswer: "Chăm sóc tại nhà phù hợp với người còn tự lập một phần và muốn ở trong môi trường quen thuộc; trung tâm ban ngày phù hợp khi cần giao lưu và giám sát ban ngày; viện dưỡng lão phù hợp khi cần chăm sóc 24/7. Với phần lớn gia đình Việt, chăm sóc tại nhà kết hợp rèn luyện là lựa chọn cân bằng nhất.",
    toc: [
      { id: "s1", text: "Bảng so sánh nhanh 3 mô hình" },
      { id: "s2", text: "Phân tích ưu - nhược điểm từng lựa chọn" },
      { id: "s3", text: "5 câu hỏi giúp gia đình quyết định đúng" }
    ],
    bodyHtml: `
      <h2 id="s1" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Bảng so sánh nhanh 3 mô hình</h2>
      <div style="overflow-x: auto; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.98rem; text-align: left;">
          <thead>
            <tr style="background-color: #6633B4; color: #ffffff;">
              <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Tiêu chí</th>
              <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Chăm sóc tại nhà</th>
              <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Trung tâm ban ngày (Daycare)</th>
              <th style="padding: 12px 16px; border: 1px solid #e2d6f5;">Viện dưỡng lão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Môi trường</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #6633B4; font-weight: 500;">Nhà mình, thân thuộc</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Đi về hằng ngày</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Chuyển hẳn nơi ở</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Tâm lý người già</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #6633B4; font-weight: 500;">Ít xáo trộn nhất, yên tâm</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Cần thời gian thích nghi</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Dễ mang cảm giác bị con 'gửi đi'</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Mức độ cá nhân hóa</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #6633B4; font-weight: 500;">Rất cao, 1 kèm 1</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Trung bình theo nhóm</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Theo lịch trình chung viện</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; font-weight: 600; background: #faf8ff;">Đối tượng phù hợp nhất</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5; color: #6633B4; font-weight: 500;">Người tự lập một phần</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Người cần hoạt động ngày</td>
              <td style="padding: 12px 16px; border: 1px solid #e2d6f5;">Người phụ thuộc hoàn toàn / liệt</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="s2" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">Phân tích ưu - nhược điểm từng lựa chọn</h2>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        <strong>Chăm sóc tại nhà:</strong> Giữ nguyên nhịp sống và tình cảm gia đình. Hạn chế là thiếu giám sát liên tục nếu không có dịch vụ chuyên nghiệp. Giải pháp cân bằng là kết hợp Trợ lý theo dõi sức khỏe và rèn luyện chủ động ANTCARE.
      </p>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        <strong>Trung tâm ban ngày:</strong> Có bạn bè cùng trang lứa nhưng việc di chuyển đi lại mỗi ngày giữa thời tiết nắng mưa là trở ngại lớn cho người cao tuổi.
      </p>
      <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
        <strong>Viện dưỡng lão:</strong> Chăm sóc 24/7 tốt cho người nằm liệt, nhưng chi phí cao và dễ gây rạn nứt tâm lý nếu người già chưa sẵn sàng rời xa ngôi nhà thân quen.
      </p>

      <h2 id="s3" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">5 câu hỏi giúp gia đình quyết định đúng</h2>
      <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
        <li>Bố mẹ còn tự ăn uống, vệ sinh, đi lại được không?</li>
        <li>Có ai ở cùng bố mẹ vào buổi tối không?</li>
        <li>Bố mẹ thật lòng mong muốn điều gì? (Hãy trò chuyện thẳng thắn với bố mẹ).</li>
        <li>Tình trạng bệnh mạn tính cần theo dõi sát ở mức độ nào?</li>
        <li>Gia đình có thể dành bao nhiêu thời gian và ngân sách hằng tháng?</li>
      </ol>
    `,
    faqList: [
      { q: "Có nên gửi bố mẹ vào viện dưỡng lão?", a: "Nên cân nhắc khi bố mẹ cần chăm sóc y tế liên tục mà gia đình không thể đáp ứng. Nếu bố mẹ còn tự lập một phần, chăm sóc tại nhà phù hợp hơn nhiều về tâm lý." },
      { q: "Chăm sóc tại nhà có an toàn bằng viện dưỡng lão không?", a: "Với người còn tự lập một phần, chăm sóc tại nhà kết hợp theo dõi định kỳ và cải thiện an toàn nhà cửa hoàn toàn đảm bảo an toàn tối đa." },
      { q: "Xu hướng chăm sóc người cao tuổi trên thế giới là gì?", a: "Nhiều nước tiên tiến như Nhật Bản đang ưu tiên 'aging in place' — già đi tại chính ngôi nhà mình với các dịch vụ chăm sóc tìm đến tận nơi." }
    ]
  }
];

// Process all articles
const processedArticles = rawArticles.map(art => {
  const content = buildArticleHtml({
    title: art.title,
    description: art.description,
    image: art.image,
    alt: art.alt,
    quickAnswer: art.quickAnswer,
    toc: art.toc,
    bodyHtml: art.bodyHtml,
    faqList: art.faqList,
    schemaJson: {
      "@context": "https://schema.org",
      "@type": art.id === 127 ? "NewsArticle" : "Article",
      "headline": art.title,
      "description": art.description,
      "inLanguage": "vi-VN",
      "datePublished": isoDate,
      "dateModified": isoDate,
      "mainEntityOfPage": `https://antcare.vn/news/${art.slug}`,
      "image": `https://antcare.vn${art.image}`,
      "author": {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn",
        "telephone": "+84969032360"
      }
    }
  });

  return {
    id: art.id,
    slug: art.slug,
    oldSlugs: [`blog/${art.slug}`, `tin-tuc/${art.slug}`],
    title: art.title,
    category: art.category,
    date: dateStr,
    author: defaultAuthor,
    description: art.description,
    excerpt: art.description,
    image: art.image,
    featured: false,
    content: content
  };
});

// Bài 10 (id: 134) là featured mới nhất
const featuredArticle = { ...processedArticles[9], featured: true };
const other9Articles = processedArticles.slice(0, 9);

// Đưa 9 bài vào list và set bài 10 làm featured
// Lọc trùng id nếu đã chạy trước đó
for (const art of other9Articles.reverse()) {
  if (!newsData.list.some(item => item.id === art.id)) {
    newsData.list.unshift(art);
  }
}
newsData.featured = featuredArticle;

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully inserted all 10 articles into news.json!');
