const fs = require('fs');
const path = require('path');

// 1. Copy image from an existing high-quality medical equipment image in public/images/tin-tuc/
const srcImage = path.join(__dirname, '../public/images/tin-tuc/cam-nang-chon-qua-tang-thiet-bi-y-te-gia-dinh.jpg');
const destImage = path.join(__dirname, '../public/images/tin-tuc/suy-giam-thinh-luc-o-nguoi-cao-tuoi.jpg');

fs.copyFileSync(srcImage, destImage);
console.log('Successfully prepared image for hearing loss article at:', destImage);

// 2. Read news.json
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// 3. Convert previous featured article (ID 88) to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Nghe kém ở người cao tuổi ảnh hưởng đến giao tiếp, tâm lý và cả nhận thức. Dấu hiệu nhận biết, khi nào cần máy trợ thính và cách gia đình giao tiếp hiệu quả.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Suy giảm thính lực ở người cao tuổi: Vì sao không nên bỏ qua</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Nghe kém thường bị coi là chuyện đương nhiên của tuổi già. Nhưng nó liên quan đến cô lập xã hội, trầm cảm và cả tốc độ suy giảm nhận thức — và phần lớn có giải pháp.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Dấu hiệu suy giảm thính lực ở người cao tuổi:
      <strong>hay hỏi lại, bật tivi to hơn người khác, khó nghe trong môi trường ồn,
      khó nghe giọng nữ và trẻ em</strong> (mất tần số cao trước),
      và <strong>rút lui khỏi các cuộc trò chuyện đông người</strong>.
      Suy giảm thính lực không điều trị liên quan đến tăng nguy cơ cô lập xã hội,
      trầm cảm và suy giảm nhận thức nhanh hơn.
      Giải pháp gồm máy trợ thính (phù hợp với phần lớn trường hợp) và
      điều chỉnh cách giao tiếp trong gia đình.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/duc-thuy-tinh-the-va-suy-giam-thi-luc-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Đục thủy tinh thể và suy giảm thị lực ở người cao tuổi: Nhận biết và điều trị
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tao-bon-va-tieu-hoa-o-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Táo bón ở người cao tuổi: Nguyên nhân, cách xử lý và khi nào cần đi khám
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao không nên coi nghe kém là chuyện đương nhiên</h2>

  <p>Suy giảm thính lực do tuổi tác là hiện tượng phổ biến, nhưng hậu quả của việc để nó không được xử lý thì không hề nhỏ.</p>

  <p><strong>Cô lập xã hội.</strong> Người nghe kém dần tránh các cuộc gặp đông người vì mệt mỏi khi phải căng tai nghe và ngại phải hỏi lại nhiều lần. Họ ngồi im trong bữa cơm gia đình, không tham gia trò chuyện.</p>

  <p><strong>Trầm cảm.</strong> Cô lập xã hội kéo dài là yếu tố nguy cơ rõ ràng của trầm cảm ở người cao tuổi.</p>

  <p><strong>Suy giảm nhận thức nhanh hơn.</strong> Các nghiên cứu cho thấy mối liên hệ giữa suy giảm thính lực không được can thiệp và tốc độ suy giảm nhận thức.</p>

  <p><strong>Nguy hiểm về an toàn.</strong> Không nghe thấy còi xe, chuông báo cháy, tiếng gọi cảnh báo.</p>

  <p><strong>Ảnh hưởng đến khám chữa bệnh.</strong> Không nghe rõ lời bác sĩ dặn, không nghe thấy khi được gọi tên tại bệnh viện.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu nhận biết</h2>

  <p>Người nghe kém thường không tự nhận ra vì quá trình diễn ra từ từ. Gia đình thường là người phát hiện trước:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hay hỏi lại "gì cơ", "nói lại đi"
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bật tivi hoặc radio to hơn mức người khác thấy thoải mái
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nói to hơn bình thường mà không nhận ra
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khó nghe khi có tiếng ồn xung quanh — quán ăn, chợ, nhiều người nói cùng lúc
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khó nghe giọng phụ nữ và trẻ em hơn giọng nam
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Trả lời không đúng câu hỏi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nghe điện thoại khó hơn nói chuyện trực tiếp
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ngồi im trong các cuộc trò chuyện nhóm
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ù tai, cảm giác có tiếng vo ve trong tai
    </li>
  </ul>

  <p>Điểm về giọng nữ và trẻ em đáng chú ý: lão thính thường mất tần số cao trước, mà giọng phụ nữ và trẻ em ở tần số cao hơn. Đây là lý do nhiều ông bà nghe con trai tốt hơn nghe con gái hoặc cháu nhỏ.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nguyên nhân — không phải lúc nào cũng do tuổi</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Nguyên nhân</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Đặc điểm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Xử lý</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Lão thính</td>
          <td style="padding: 0.8rem 1rem;">Diễn tiến chậm, cả hai tai, mất tần số cao trước</td>
          <td style="padding: 0.8rem 1rem;">Máy trợ thính</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nút ráy tai</td>
          <td style="padding: 0.8rem 1rem;">Có thể xuất hiện nhanh, thường một bên, kèm cảm giác đầy tai</td>
          <td style="padding: 0.8rem 1rem;">Lấy ráy tai tại cơ sở y tế</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Viêm tai giữa</td>
          <td style="padding: 0.8rem 1rem;">Có thể kèm đau, chảy dịch</td>
          <td style="padding: 0.8rem 1rem;">Điều trị theo chỉ định bác sĩ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tác dụng phụ của thuốc</td>
          <td style="padding: 0.8rem 1rem;">Một số kháng sinh, thuốc lợi tiểu liều cao</td>
          <td style="padding: 0.8rem 1rem;">Báo bác sĩ để cân nhắc đổi thuốc</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Mất thính lực đột ngột</td>
          <td style="padding: 0.8rem 1rem;">Xảy ra trong vài giờ đến vài ngày, thường một bên</td>
          <td style="padding: 0.8rem 1rem; font-weight: bold; color: #e07600;">CẤP CỨU — cần khám ngay trong 72 giờ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Dòng cuối cùng đặc biệt quan trọng: <strong>mất thính lực đột ngột là cấp cứu tai mũi họng</strong>. Điều trị sớm trong vài ngày đầu có cơ hội phục hồi cao hơn nhiều so với để lâu.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về máy trợ thính</h2>

  <p>Nên bắt đầu bằng <strong>đo thính lực</strong> tại cơ sở chuyên khoa để biết mất thính lực ở mức nào và ở những tần số nào. Máy trợ thính sau đó được điều chỉnh theo kết quả đo này.</p>

  <p>Điểm cần phân biệt: máy trợ thính khác với các thiết bị khuếch đại âm thanh bán trôi nổi. Loại sau chỉ khuếch đại mọi âm thanh to lên đều nhau, khiến tiếng ồn cũng to theo và người dùng thấy khó chịu, ồn ào — đây là lý do nhiều người thử một lần rồi bỏ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Giúp người cao tuổi chấp nhận đeo máy</h3>

  <p>Sự phản đối thường xuất phát từ tâm lý chứ không phải lý do kỹ thuật. Vài cách tiếp cận hiệu quả:</p>

  <p>Đóng khung máy trợ thính như <strong>công cụ bình thường giống kính mắt</strong>, không phải dấu hiệu của sự già yếu.</p>

  <p>Nhấn mạnh <strong>lợi ích cụ thể</strong> có ý nghĩa với họ — nghe rõ tiếng cháu kể chuyện, nghe được lời bác sĩ dặn, tham gia được câu chuyện trong bữa cơm.</p>

  <p>Cho <strong>thời gian thích nghi</strong>. Những ngày đầu đeo máy, âm thanh nghe lạ và có thể khó chịu vì não phải làm quen lại với các âm thanh đã lâu không nghe. Nên bắt đầu đeo ở nhà, trong môi trường yên tĩnh, tăng dần thời gian.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ: cách gia đình giao tiếp với người nghe kém</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Nói <strong>chậm và rõ ràng</strong>, không cần nói to hơn — nói to thường làm méo âm thanh và khó nghe hơn. Đứng đối diện, để họ nhìn thấy khuôn miệng. Tắt tivi hoặc nguồn ồn khi nói chuyện. Nếu họ không hiểu, hãy <strong>nói lại bằng câu khác</strong> thay vì lặp lại y nguyên câu cũ to hơn. Và gọi tên trước khi bắt đầu nói để họ kịp tập trung.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào cần đi khám</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Mất thính lực đột ngột — đi khám ngay trong 72 giờ đầu
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nghe kém một bên rõ rệt hơn bên kia
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kèm đau tai, chảy dịch tai, hoặc chóng mặt
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ù tai kéo dài gây khó chịu
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nghe kém ảnh hưởng đến sinh hoạt và giao tiếp hằng ngày
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khám định kỳ: người từ 60 tuổi nên kiểm tra thính lực mỗi 1-2 năm
    </li>
  </ul>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ: Đồng hành cùng người cao tuổi</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Nghe kém khiến người cao tuổi khó tiếp nhận đầy đủ lời dặn của bác sĩ. ANTCARE đi cùng, ghi chép lại và gửi về cho gia đình để không sót thông tin.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Máy trợ thính có đắt không và mua ở đâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Giá máy trợ thính dao động rất lớn tùy loại và tính năng. Nên mua tại các cơ sở chuyên khoa Tai Mũi Họng hoặc trung tâm thính học có đo thính lực trước, không nên mua máy khuếch đại âm thanh bán trôi nổi vì chúng chỉ khuếch đại to lên mà không điều chỉnh theo mức độ mất thính lực từng tần số. Nên đo thính lực trước để biết chính xác cần loại máy nào.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Vì sao người cao tuổi thường từ chối dùng máy trợ thính?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Ba lý do phổ biến: cảm thấy đeo máy là thừa nhận mình đã già yếu; từng thử máy kém chất lượng và thấy khó chịu, ồn ào; và chi phí. Cách tiếp cận hiệu quả là đóng khung máy trợ thính như một công cụ bình thường giống kính mắt, cho họ trải nghiệm máy chất lượng tốt được điều chỉnh đúng, và nhấn mạnh lợi ích cụ thể như nghe rõ tiếng cháu nói chuyện.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ráy tai có gây nghe kém không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và đây là nguyên nhân dễ điều trị nhất. Ráy tai tích tụ bít ống tai gây nghe kém, ù tai, cảm giác đầy tai. Ở người cao tuổi ráy tai thường khô và cứng hơn nên dễ tích tụ. Không nên tự ngoáy bằng tăm bông vì đẩy ráy vào sâu hơn. Nên đến cơ sở y tế để lấy ráy tai an toàn — đôi khi chỉ cần làm việc này là thính lực cải thiện rõ rệt.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nghe kém có liên quan đến sa sút trí tuệ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Các nghiên cứu cho thấy có mối liên hệ. Suy giảm thính lực không được điều trị liên quan đến tốc độ suy giảm nhận thức nhanh hơn. Giả thuyết giải thích gồm: não phải dồn nguồn lực để giải mã âm thanh nên ít nguồn lực cho các chức năng khác; và nghe kém dẫn đến cô lập xã hội, mà cô lập xã hội là yếu tố nguy cơ của sa sút trí tuệ. Đây là lý do can thiệp sớm được khuyến nghị.</p>
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
    "headline": "Suy giảm thính lực ở người cao tuổi: Vì sao không nên bỏ qua",
    "description": "Nghe kém ở người cao tuổi ảnh hưởng đến giao tiếp, tâm lý và cả nhận thức. Dấu hiệu nhận biết, khi nào cần máy trợ thính và cách gia đình giao tiếp hiệu quả.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 89,
  slug: 'suy-giam-thinh-luc-o-nguoi-cao-tuoi',
  oldSlugs: [
    'suy-giam-thinh-luc-o-nguoi-cao-tuoi'
  ],
  title: 'Suy giảm thính lực ở người cao tuổi: Vì sao không nên bỏ qua',
  category: 'Sức khỏe người cao tuổi',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/suy-giam-thinh-luc-o-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 89 to news.json!');
