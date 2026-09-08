const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 56) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Hướng dẫn 8 bài tập thăng bằng, sức mạnh và dẻo dai cho người cao tuổi tập tại nhà. Có lưu ý an toàn và dấu hiệu cần dừng tập ngay.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">8 bài tập vận động an toàn cho người cao tuổi tập tại nhà</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Không cần dụng cụ, không cần nhiều không gian. Điều quan trọng nhất ở tuổi này không phải tập nặng, mà là tập đều và tập đúng.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Người cao tuổi nên vận động <strong>ít nhất 150 phút mỗi tuần ở cường độ vừa phải</strong>, chia thành các buổi ngắn 20–30 phút. Chương trình tập nên gồm ba nhóm: <strong>bài tập thăng bằng</strong> (giảm nguy cơ té ngã), <strong>bài tập sức mạnh</strong> (giữ khối cơ, duy trì khả năng tự đứng lên ngồi xuống), và <strong>bài tập dẻo dai</strong>. Người có bệnh tim mạch, xương khớp hoặc mới phẫu thuật cần hỏi ý kiến bác sĩ trước khi bắt đầu.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao vận động quan trọng hơn ta tưởng ở tuổi già</h2>
  <p>Sau tuổi 60, khối cơ giảm dần theo thời gian nếu không được sử dụng. Cơ yếu dẫn tới một chuỗi hệ quả: khó đứng lên từ ghế, đi lại kém vững, dễ ngã, và sau một lần ngã thì thường nằm nhiều hơn — làm cơ tiếp tục yếu đi. Đây là vòng xoáy khiến nhiều người cao tuổi mất khả năng tự chăm sóc bản thân nhanh hơn hẳn so với tuổi thực.</p>
  <p>Điểm quan trọng: vòng xoáy này có thể chặn lại ở gần như mọi độ tuổi. Người 80 tuổi tập luyện đều đặn vẫn tăng được sức cơ. Mục tiêu không phải là khỏe như thời trẻ, mà là <strong>giữ được khả năng tự làm những việc hằng ngày</strong>: tự đứng dậy, tự đi vệ sinh, tự tắm rửa, tự đi chợ.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/bo-me-noi-van-khoe-dau-hieu-can-chu-y" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố mẹ luôn nói "vẫn khỏe": 9 dấu hiệu người cao tuổi thường giấu con cái
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/cai-tao-nha-o-chong-truot-nga-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cải Tạo Nhà Ở Chống Trượt Ngã Cho Người Cao Tuổi: Cẩm Nang Bảo Vệ Cha Mẹ Ngay Tại Gia
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Ba nhóm bài tập cần có</h2>
  <table style="width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.95rem;">
    <thead>
      <tr style="background: #2a1b3d; color: #ffffff;">
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Nhóm</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Mục tiêu</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Tần suất</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Thăng bằng</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Giảm nguy cơ té ngã</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Hằng ngày</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Sức mạnh</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Giữ khối cơ, duy trì sinh hoạt độc lập</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">2–3 buổi/tuần</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Dẻo dai</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Duy trì tầm vận động khớp</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Hằng ngày, sau khi tập</td></tr>
    </tbody>
  </table>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 1: Bài tập thăng bằng</h2>
  <p>Tất cả các bài dưới đây đều <strong>phải thực hiện cạnh một điểm tựa vững</strong> — lưng ghế chắc chắn, mép bàn, hoặc bờ tường. Người nhà nên đứng cạnh trong những lần tập đầu.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 1: Đứng một chân</h3>
  <p>Đứng cạnh ghế, một tay đặt nhẹ lên lưng ghế. Nhấc một chân lên khỏi mặt đất khoảng 10 cm, giữ 10 giây rồi đổi chân. Làm 3 lần mỗi bên.</p>
  <p>Khi đã vững, giảm dần điểm tựa: từ cả bàn tay xuống hai ngón tay, rồi một ngón, rồi bỏ hẳn tay ra nhưng vẫn đứng cạnh ghế.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 2: Đi nối gót</h3>
  <p>Đi thẳng một đường, đặt gót chân trước sát mũi chân sau, như đi trên một vạch kẻ. Đi 10 bước, quay lại. Thực hiện dọc theo hành lang có tường để bám khi cần.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 3: Chuyển trọng tâm</h3>
  <p>Đứng hai chân rộng bằng vai, tay đặt lên lưng ghế. Từ từ chuyển toàn bộ trọng lượng sang chân phải, giữ 10 giây, rồi chuyển sang chân trái. Lặp lại 5 lần mỗi bên.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 2: Bài tập sức mạnh</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 4: Đứng lên ngồi xuống từ ghế</h3>
  <p>Đây là bài tập giá trị nhất trong cả danh sách, vì nó mô phỏng chính xác động tác người cao tuổi cần dùng hằng ngày.</p>
  <p>Ngồi trên ghế chắc chắn, hai chân đặt phẳng trên sàn. Khoanh tay trước ngực nếu có thể, hoặc chống tay lên đùi nếu chưa đủ sức. Đứng lên chậm rãi rồi ngồi xuống có kiểm soát — không thả người rơi phịch xuống ghế. Làm 8–10 lần, nghỉ, rồi lặp lại 2–3 hiệp.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 5: Nâng gót chân</h3>
  <p>Đứng sau ghế, hai tay bám lưng ghế. Nhón gót lên cao nhất có thể, giữ 2 giây rồi hạ xuống chậm. Làm 10–15 lần. Bài này giúp khỏe cơ bắp chân, hỗ trợ trực tiếp cho việc giữ thăng bằng khi đi lại.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 6: Duỗi gối khi ngồi</h3>
  <p>Ngồi thẳng lưng trên ghế. Duỗi thẳng một chân ra phía trước cho tới khi song song mặt đất, giữ 3 giây, hạ xuống chậm. Làm 10 lần mỗi bên. Đây là bài an toàn cho người đau khớp gối vì không có trọng lực đè lên khớp.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 3: Bài tập dẻo dai</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 7: Xoay vai và cổ</h3>
  <p>Ngồi hoặc đứng thẳng. Xoay vai ra sau 10 vòng, ra trước 10 vòng. Sau đó nghiêng đầu sang từng bên, giữ 15 giây mỗi bên. <strong>Không xoay tròn cổ</strong> — động tác này không được khuyến nghị cho người cao tuổi, đặc biệt người có thoái hóa đốt sống cổ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Bài 8: Vươn người khi ngồi</h3>
  <p>Ngồi trên ghế, hai chân đặt phẳng. Từ từ vươn hai tay lên cao qua đầu, hít vào. Hạ tay xuống, thở ra. Làm 8 lần. Sau đó nghiêng người sang từng bên, giữ 10 giây.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Nguyên tắc an toàn khi tập tại nhà</span>
    <p style="margin-bottom: 0;">Sàn phải khô và không trơn. Không tập chân trần trên gạch men — nên đi dép có đế bám hoặc tất chống trượt. Dọn dẹp vật cản trong phạm vi tập. Luôn có nước uống trong tầm tay. Và quan trọng nhất: <strong>người cao tuổi không nên tập một mình trong những buổi đầu</strong>, cho tới khi đã quen với bài và người nhà chắc chắn về độ an toàn.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Dấu hiệu cần dừng tập ngay lập tức</h2>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Đau ngực hoặc cảm giác tức nặng ở ngực</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Khó thở nhiều, không nói được thành câu</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Chóng mặt, choáng váng, cảm giác sắp ngã</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Buồn nôn hoặc vã mồ hôi lạnh</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Đau khớp tăng lên rõ rệt trong khi tập</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Tim đập nhanh bất thường hoặc không đều</li>
  </ul>

  <p>Khi có bất kỳ dấu hiệu nào, cho người tập ngồi nghỉ ngay, đo huyết áp và mạch nếu có máy. Nếu sau vài phút nghỉ mà triệu chứng không thuyên giảm, cần đưa đi khám.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Làm sao để duy trì được lâu dài</h2>
  <p>Trở ngại lớn nhất không phải là bài tập khó, mà là việc duy trì. Vài cách đã được nhiều gia đình áp dụng có hiệu quả:</p>
  <p><strong>Gắn với thói quen sẵn có.</strong> Tập ngay sau khi uống trà sáng, hoặc trước chương trình tivi quen thuộc. Thói quen mới bám vào thói quen cũ thì dễ giữ hơn là đặt ra một khung giờ hoàn toàn mới.</p>
  <p><strong>Có người tập cùng.</strong> Người cao tuổi tập một mình rất dễ bỏ. Có con cháu tập cùng, hoặc tập cùng nhóm bạn trong khu, tỷ lệ duy trì cao hơn hẳn.</p>
  <p><strong>Ghi lại tiến bộ.</strong> Tuần đầu đứng một chân được 5 giây, tuần thứ tư được 15 giây — nhìn thấy tiến bộ là động lực mạnh nhất. Có thể ghi vào cùng cuốn sổ theo dõi huyết áp.</p>
  <p><strong>Đặt mục tiêu theo sinh hoạt, không theo con số.</strong> "Tự đứng dậy khỏi ghế không cần chống tay" là mục tiêu có ý nghĩa hơn nhiều so với "tập đủ 30 phút".</p>
  <p>Với những gia đình không thể ở cạnh để tập cùng bố mẹ hằng ngày, việc có người đến hướng dẫn và tập cùng theo lịch cố định giúp giải quyết đúng điểm khó này — vừa đảm bảo tập đúng kỹ thuật, vừa tạo được nhịp đều đặn mà tự tập ở nhà thường không giữ được.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Tập cùng ông bà, không để ông bà tập một mình</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Nhân viên ANTCARE hướng dẫn và tập cùng người cao tuổi tại nhà, chọn bài phù hợp với thể trạng từng người và theo dõi chỉ số trước, sau buổi tập.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người cao tuổi nên tập bao nhiêu phút mỗi ngày?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Khuyến nghị chung là 150 phút mỗi tuần ở cường độ vừa phải, tương đương khoảng 20–30 phút mỗi ngày. Nếu chưa quen, có thể bắt đầu từ 5–10 phút và tăng dần. Chia nhỏ thành nhiều lần trong ngày cũng có hiệu quả tương đương một buổi dài, và thường dễ duy trì hơn với người cao tuổi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người bị đau khớp gối có nên tập không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có, nhưng cần chọn bài phù hợp. Vận động đúng cách giúp giảm đau khớp về lâu dài do làm khỏe nhóm cơ quanh khớp. Nên ưu tiên các bài không chịu trọng lực lên gối như đạp xe tại chỗ, tập trong tư thế ngồi, hoặc đi bộ trong nước. Tránh ngồi xổm, quỳ và lên xuống cầu thang nhiều. Người đau khớp nhiều nên được bác sĩ hoặc kỹ thuật viên vật lý trị liệu hướng dẫn cụ thể.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Tập vào thời điểm nào trong ngày là tốt nhất?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Buổi sáng sau khi ăn nhẹ khoảng 1 giờ, hoặc chiều mát, là hai khung giờ phù hợp. Nên tránh tập ngay sau bữa ăn chính và tránh tập ngoài trời vào lúc quá lạnh hoặc quá nắng. Với người có tăng huyết áp, không nên tập ngay khi vừa ngủ dậy vì huyết áp buổi sáng sớm thường cao hơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Dấu hiệu nào cho thấy cần dừng tập ngay?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cần dừng ngay nếu xuất hiện đau ngực, khó thở nhiều, chóng mặt, choáng váng, buồn nôn, đau khớp tăng rõ rệt, hoặc nhịp tim không đều. Sau khi dừng, cho người tập ngồi nghỉ và theo dõi. Nếu triệu chứng không giảm sau vài phút, cần đưa đi khám hoặc gọi cấp cứu.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "8 bài tập vận động an toàn cho người cao tuổi tập tại nhà",
    "description": "Hướng dẫn 8 bài tập thăng bằng, sức mạnh và dẻo dai cho người cao tuổi tập tại nhà. Có lưu ý an toàn và dấu hiệu cần dừng tập ngay.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 56,
  slug: 'bai-tap-van-dong-cho-nguoi-cao-tuoi-tai-nha',
  oldSlugs: ['bai-tap-van-dong-cho-nguoi-cao-tuoi-tai-nha', '8-bai-tap-van-dong-an-toan-cho-nguoi-cao-tuoi-tap-tai-nha'],
  title: '8 bài tập vận động an toàn cho người cao tuổi tập tại nhà',
  category: 'Vận động & Thể chất Lão khoa',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/bai-tap-van-dong-cho-nguoi-cao-tuoi-tai-nha.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 56 to news.json!');
