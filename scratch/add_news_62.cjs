const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Té ngã, nhịn ăn quá lâu, không nghe rõ khi gọi tên, quên lời bác sĩ dặn — những rủi ro thực tế khi người cao tuổi đi khám một mình và cách phòng tránh.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">7 rủi ro khi để người cao tuổi đi khám bệnh một mình</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Bố mẹ nói tự đi được, và thường thì đúng là đi được. Nhưng "đi được" và "đi an toàn, khám có hiệu quả" là hai chuyện khác nhau.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Bảy rủi ro phổ biến khi người cao tuổi đi khám một mình gồm: 
      <strong>té ngã khi di chuyển</strong>, <strong>tụt đường huyết do nhịn ăn xét nghiệm quá lâu</strong>, 
      <strong>bỏ lỡ lượt khám vì không nghe rõ khi gọi tên</strong>, <strong>lạc trong khuôn viên bệnh viện</strong>, 
      <strong>không nhớ hết lời bác sĩ dặn</strong>, <strong>mô tả triệu chứng không đầy đủ</strong>, và 
      <strong>nhầm lẫn khi lĩnh thuốc hoặc dùng thuốc mới</strong>. 
      Rủi ro tăng rõ rệt với người trên 75 tuổi, người có bệnh nền, người đi lại khó khăn hoặc có suy giảm thị lực, thính lực.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/chuan-bi-gi-khi-dua-bo-me-di-kham-benh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          12 câu hỏi nên hỏi bác sĩ khi đưa người cao tuổi đi khám
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao chủ đề này ít được bàn tới</h2>
  <p>Trong nhiều gia đình Việt, việc người cao tuổi tự đi khám được coi là bình thường, thậm chí là dấu hiệu tốt cho thấy ông bà còn khỏe. Bố mẹ cũng thường chủ động nói "cứ để bố mẹ tự đi, các con bận".</p>
  <p>Vấn đề là những rủi ro dưới đây phần lớn không xuất hiện ngay, và khi xuất hiện thì thường được coi là chuyện xui rủi chứ không phải hệ quả có thể phòng tránh.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 1: Té ngã</h2>
  <p>Té ngã là nguyên nhân hàng đầu gây chấn thương nghiêm trọng ở người cao tuổi, và môi trường bệnh viện có đủ các yếu tố làm tăng nguy cơ: sàn gạch trơn, sàn ướt sau khi lau, bậc thềm, đám đông chen lấn, và quãng đường di chuyển dài giữa các khu.</p>
  <p>Nguy cơ tăng thêm khi người cao tuổi đã đứng chờ lâu, mệt, hoặc vừa lấy máu xong trong tình trạng bụng đói.</p>
  <p>Hậu quả của một cú ngã ở tuổi cao không dừng ở vết thương. Gãy cổ xương đùi ở người cao tuổi thường dẫn tới nằm lâu, và nằm lâu kéo theo chuỗi biến chứng — viêm phổi, loét tì đè, mất khối cơ, suy giảm khả năng đi lại vĩnh viễn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 2: Tụt đường huyết do nhịn ăn kéo dài</h2>
  <p>Khi có chỉ định xét nghiệm máu, người bệnh phải nhịn ăn từ tối hôm trước. Nếu buổi sáng phải chờ đợi lâu, thời gian nhịn có thể kéo dài tới 12–14 tiếng.</p>
  <p>Với người cao tuổi, đặc biệt người có đái tháo đường đang dùng thuốc, đây là tình huống nguy hiểm thực sự: hạ đường huyết gây chóng mặt, vã mồ hôi, run tay, lú lẫn, và có thể dẫn tới ngã hoặc mất ý thức.</p>
  <p>Người đi một mình thường không mang theo đồ ăn, và cũng không nhận ra dấu hiệu hạ đường huyết sớm để xử lý kịp.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 3: Bỏ lỡ lượt khám</h2>
  <p>Nhiều bệnh viện gọi tên qua loa. Trong không gian ồn ào, với người có giảm thính lực — tình trạng rất phổ biến sau tuổi 70 — việc không nghe thấy tên mình là chuyện thường xuyên.</p>
  <p>Hậu quả là mất lượt, phải đăng ký lại, và có khi hết buổi làm việc mà chưa được khám.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 4: Lạc trong khuôn viên bệnh viện</h2>
  <p>Các bệnh viện lớn có nhiều tòa nhà, nhiều tầng, và biển chỉ dẫn không phải lúc nào cũng dễ hiểu. Một quy trình khám thông thường có thể yêu cầu di chuyển qua 4–5 điểm khác nhau.</p>
  <p>Với người cao tuổi có suy giảm trí nhớ nhẹ hoặc thị lực kém, đây là trở ngại lớn hơn nhiều so với người trẻ hình dung.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 5: Không nhớ hết lời bác sĩ dặn</h2>
  <p>Đây là rủi ro phổ biến nhất và cũng gây hậu quả kéo dài nhất.</p>
  <p>Sau một buổi sáng chờ đợi mệt mỏi, trong 5–10 phút ngồi trước bác sĩ, người cao tuổi phải tiếp nhận: chẩn đoán, tên thuốc mới, liều dùng, những điều cần kiêng, lịch tái khám, và dấu hiệu cần quay lại. Khả năng nhớ đầy đủ tất cả những thứ này là rất thấp.</p>
  <p>Kết quả thường gặp: về nhà uống thuốc sai liều, quên lịch tái khám, hoặc gia đình hỏi lại thì bố mẹ chỉ nhớ mang máng "bác sĩ bảo không sao".</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 6: Mô tả triệu chứng không đầy đủ</h2>
  <p>Ở tuổi cao, nhiều người có xu hướng giảm nhẹ triệu chứng khi nói với bác sĩ — vì ngại làm mất thời gian, vì cho rằng đau nhức là chuyện đương nhiên, hoặc vì lo nghe tin xấu.</p>
  <p>Thêm vào đó, người cao tuổi thường có nhiều vấn đề cùng lúc và dễ quên nhắc tới những triệu chứng không phải lý do chính khiến họ đi khám — dù đó có thể lại là thông tin quan trọng với bác sĩ.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rủi ro 7: Nhầm lẫn thuốc</h2>
  <p>Sau buổi khám, người cao tuổi mang về đơn thuốc mới. Nếu không có ai rà soát, hai tình huống dễ xảy ra: uống chồng thuốc mới với thuốc cũ có cùng tác dụng, hoặc ngừng luôn thuốc cũ đang cần duy trì vì tưởng thuốc mới thay thế hoàn toàn.</p>
  <p>Với người dùng từ năm loại thuốc trở lên — rất phổ biến ở tuổi cao — nguy cơ này tăng rõ rệt.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Ai có nguy cơ cao nhất</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Người trên 75 tuổi; người đi lại cần gậy hoặc khung tập đi; người có tiền sử té ngã hoặc chóng mặt; người giảm thính lực, thị lực; người có suy giảm trí nhớ; người mắc đái tháo đường hoặc bệnh tim mạch; và người đang dùng từ năm loại thuốc trở lên. Có từ hai yếu tố trở lên thì nên có người đi cùng.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nếu bắt buộc phải để bố mẹ đi một mình</h2>
  <p>Không phải gia đình nào cũng thu xếp được người đi cùng. Trong trường hợp đó, những biện pháp sau giúp giảm rủi ro:</p>

  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đặt lịch khám trước qua ứng dụng của bệnh viện để rút ngắn thời gian chờ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Chuẩn bị sẵn túi giấy tờ và một tờ ghi triệu chứng, câu hỏi bằng chữ to
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Cho bố mẹ mang theo bánh và sữa để ăn ngay sau khi lấy máu
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Ghi số điện thoại của bạn bằng chữ lớn bỏ trong túi áo
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Gọi điện theo dõi từng chặng: khi đến nơi, sau khi khám, khi về đến nhà
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Dặn bố mẹ chụp ảnh đơn thuốc và sổ khám gửi ngay cho bạn
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Nhờ nhân viên tại quầy hướng dẫn hỗ trợ, và hỏi về luồng ưu tiên người cao tuổi
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thuyết phục bố mẹ chấp nhận có người đi cùng</h2>
  <p>Rào cản lớn nhất thường không phải chi phí hay lịch trình, mà là tâm lý của chính người cao tuổi. Nhiều người từ chối vì cảm thấy việc cần người đi kèm đồng nghĩa với việc mình đã yếu.</p>
  <p>Cách nói tạo ra khác biệt. Thay vì "bố mẹ già rồi không đi một mình được", có thể đóng khung theo hướng khác:</p>
  <p><em>"Con muốn có người ghi lại lời bác sĩ dặn để cả nhà cùng biết, chứ nghe kể lại thì hay sót."</em></p>
  <p><em>"Có người lo thủ tục thì mẹ đỡ phải xếp hàng, ngồi nghỉ cho khỏe."</em></p>
  <p>Cả hai cách nói này đều đúng sự thật, và đều giữ được thể diện — điều quan trọng hơn nhiều người con vẫn nghĩ.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi con cái không thể có mặt</h2>
  <p>Với những gia đình có con ở tỉnh khác, hoặc con không xin nghỉ làm được vào ngày trong tuần, dịch vụ đồng hành khám bệnh giải quyết đúng bảy rủi ro ở trên: có người đưa đón nên không phải tự di chuyển, có người mang theo đồ ăn và theo dõi tình trạng trong lúc chờ, có người nghe gọi tên và dẫn đường, có người ghi chép đầy đủ và gửi lại cho gia đình.</p>
  <p>Và với gia đình ở xa, việc theo dõi được vị trí của bố mẹ trong suốt buổi khám — qua định vị hoặc qua cập nhật theo từng mốc — thường là điều làm người con yên tâm nhất trong cả buổi sáng hôm đó.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Không để bố mẹ đi khám một mình</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón tận nhà, đo chỉ số trước khi đi, bật định vị suốt buổi khám để gia đình theo dõi, và ghi chép đầy đủ lời bác sĩ dặn.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người bao nhiêu tuổi thì không nên đi khám một mình?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không có mốc tuổi cố định, vì thể trạng mỗi người rất khác nhau. Quan trọng hơn tuổi là các yếu tố cụ thể: đi lại có cần dụng cụ hỗ trợ không, thị lực và thính lực thế nào, trí nhớ ra sao, có tiền sử té ngã hoặc chóng mặt không, và có bệnh nền cần theo dõi sát không. Nếu có từ hai yếu tố trở lên, nên có người đi cùng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bố mẹ không chịu cho ai đi cùng thì nên làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là phản ứng rất phổ biến, xuất phát từ mong muốn giữ sự tự chủ chứ không phải bướng bỉnh. Cách hiệu quả là đóng khung việc đi cùng như một sự hỗ trợ về thủ tục và đi lại, không phải vì bố mẹ yếu. Ví dụ nói rằng cần người ghi chép lại lời bác sĩ để cả nhà cùng nắm, hoặc để bố mẹ đỡ phải xếp hàng. Cách nói này giữ được thể diện cho người cao tuổi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi đi taxi một mình đến bệnh viện có ổn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Việc di chuyển bằng taxi thường ổn hơn tự đi xe máy, nhưng rủi ro không nằm ở quãng đường mà nằm ở bên trong bệnh viện: xếp hàng lâu, di chuyển giữa các khu, nghe gọi tên, và ghi nhớ chỉ dẫn. Nếu bắt buộc phải để bố mẹ đi một mình, nên gọi điện theo dõi từng chặng và nhờ nhân viên bệnh viện hỗ trợ tại quầy hướng dẫn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Làm sao biết bố mẹ có đến bệnh viện an toàn không khi mình ở xa?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cách phổ biến là gọi video khi bố mẹ đã đến nơi và khi khám xong. Một số gia đình dùng thiết bị định vị nhỏ như AirTag đặt trong túi để theo dõi vị trí. Nếu dùng dịch vụ đồng hành, gia đình thường nhận được cập nhật theo từng mốc: đã đón, đã đến bệnh viện, đã khám xong, đã về đến nhà.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "7 rủi ro khi để người cao tuổi đi khám bệnh một mình",
    "description": "Té ngã, nhịn ăn quá lâu, không nghe rõ khi gọi tên, quên lời bác sĩ dặn — những rủi ro thực tế khi người cao tuổi đi khám một mình và cách phòng tránh.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 62,
  slug: 'rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh',
  title: '7 rủi ro khi để người cao tuổi đi khám bệnh một mình',
  category: 'Đồng hành Khám bệnh',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 62 to news.json!');
