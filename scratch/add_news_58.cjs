const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 58) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Sống xa bố mẹ vẫn chăm sóc được. Cách thiết lập lịch liên lạc, mạng lưới hỗ trợ tại chỗ, hồ sơ sức khỏe và kế hoạch xử lý khi có việc khẩn cấp.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chăm sóc bố mẹ từ xa: hướng dẫn thực tế cho người con ở tỉnh khác</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Khoảng cách không làm bạn thành người con tệ. Nhưng nó buộc bạn phải chăm sóc theo một cách khác: có hệ thống hơn, và không dựa vào việc có mặt.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Để chăm sóc bố mẹ từ xa hiệu quả, gia đình cần bốn thứ: <strong>một lịch liên lạc cố định</strong> (gọi video vào giờ sinh hoạt bình thường, không chỉ gọi khi có việc), <strong>một mạng lưới hỗ trợ tại chỗ</strong> (hàng xóm, họ hàng, tổ dân phố, dịch vụ chăm sóc tại nhà), <strong>một hồ sơ sức khỏe được cập nhật</strong> (thuốc đang dùng, bệnh nền, bác sĩ điều trị, bảo hiểm), và <strong>một kế hoạch xử lý tình huống khẩn cấp</strong> đã được thống nhất trước giữa các anh chị em.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vấn đề thật sự không phải khoảng cách</h2>
  <p>Người con sống xa thường mang một cảm giác day dứt khá đặc trưng: cảm thấy mình không làm đủ, và mỗi cuộc gọi về đều kèm theo một chút áy náy. Cảm giác đó dễ hiểu, nhưng nó thường dẫn tới cách chăm sóc kém hiệu quả — dồn hết vào những lần về thăm, mua nhiều đồ, gửi nhiều tiền, rồi giữa các lần đó thì gần như không nắm được gì.</p>
  <p>Chăm sóc từ xa hiệu quả đòi hỏi cách nghĩ khác: thay vì cố bù đắp sự vắng mặt, hãy xây một <strong>hệ thống</strong> hoạt động được ngay cả khi bạn không có mặt. Hệ thống đó gồm bốn phần.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/bo-me-noi-van-khoe-dau-hieu-can-chu-y" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố mẹ luôn nói "vẫn khỏe": 9 dấu hiệu người cao tuổi thường giấu con cái
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/5-noi-so-vo-hinh-khien-nguoi-cao-tuoi-ngai-di-benh-vien" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/vien-duong-lao-giup-viec-hay-cham-soc-tai-gia" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện Dưỡng Lão, Người Giúp Việc Hay Chăm Sóc Tại Gia Theo Giờ: Đâu Là Lựa Chọn Đúng Cho Bố Mẹ?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Phần 1: Lịch liên lạc cố định</h2>
  <p>Nguyên tắc quan trọng nhất: <strong>gọi đều đặn vào giờ sinh hoạt bình thường</strong>, không phải chỉ gọi khi có việc hoặc vào cuối tuần.</p>
  <p>Lý do: khi bạn gọi vào một giờ đã hẹn trước, bố mẹ có thời gian chuẩn bị — mặc quần áo tươm tất, ngồi ngay ngắn, và trả lời theo cách họ muốn bạn nghe. Khi bạn gọi vào giờ sinh hoạt bình thường, bạn thấy được thực tế: nhà cửa thế nào, ông bà đang làm gì, sắc mặt ra sao.</p>
  <p><strong>Ưu tiên gọi video.</strong> Giọng nói che được rất nhiều thứ; hình ảnh thì khó che hơn. Qua màn hình bạn quan sát được sắc mặt, dáng ngồi, độ tỉnh táo, và cả tình trạng nhà cửa phía sau.</p>
  <p>Nếu bố mẹ chưa quen dùng điện thoại thông minh, đây là việc đáng đầu tư thời gian hướng dẫn trong lần về thăm gần nhất — nó thay đổi hoàn toàn chất lượng liên lạc về sau.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">Nội dung cuộc gọi</h3>
  <p>Như đã nói ở bài về dấu hiệu người cao tuổi thường giấu: hỏi cụ thể thay vì hỏi chung. Ba câu hỏi ngắn có giá trị hơn một câu "bố mẹ khỏe không":</p>
  <ul>
    <li>Hôm nay mẹ ăn được mấy bát cơm?</li>
    <li>Đêm qua bố ngủ có dậy nhiều lần không?</li>
    <li>Tuần này mẹ có đi chợ như mọi khi không?</li>
  </ul>
  <p>Và một điều thường bị quên: <strong>đừng biến mọi cuộc gọi thành cuộc kiểm tra sức khỏe</strong>. Bố mẹ cần trò chuyện, kể chuyện hàng xóm, hỏi thăm cháu — chứ không phải trả lời một bảng câu hỏi mỗi ngày.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Phần 2: Mạng lưới hỗ trợ tại chỗ</h2>
  <p>Đây là phần quan trọng nhất và cũng bị bỏ qua nhiều nhất. Dù bạn gọi điện mỗi ngày, khi có việc xảy ra thì người ở cách 300 km không làm được gì trong 3 giờ đầu tiên — mà 3 giờ đầu thường là quãng thời gian quyết định.</p>
  <p>Mạng lưới cần có ít nhất:</p>
  <p><strong>Một người hàng xóm tin cậy.</strong> Có số điện thoại của bạn, và bạn có số của họ. Lý tưởng nhất là người có chìa khóa nhà. Nên về thăm và gặp trực tiếp người này ít nhất một lần, đừng chỉ trao đổi qua bố mẹ.</p>
  <p><strong>Tổ dân phố hoặc hội người cao tuổi tại địa phương.</strong> Ở nhiều khu dân cư, đây là mạng lưới hoạt động thực chất và biết rõ hoàn cảnh từng nhà.</p>
  <p><strong>Họ hàng ở gần.</strong> Kể cả không thân thiết, một người cô chú ở cùng thành phố vẫn đến được trong 30 phút.</p>
  <p><strong>Dịch vụ chăm sóc tại nhà.</strong> Với những gia đình không có ai ở gần, đây là cách lấp khoảng trống một cách có kiểm soát: có người đến theo lịch cố định, có báo cáo, có trách nhiệm rõ ràng.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Việc nên làm trong lần về thăm tới</span>
    <p style="margin-bottom: 0;">Xin số điện thoại của ít nhất hai người hàng xóm, lưu vào danh bạ với ghi chú rõ ràng, và gửi lại số của bạn cho họ. Nghe rất nhỏ nhặt, nhưng đây là việc tạo ra khác biệt lớn nhất khi có tình huống bất ngờ.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Phần 3: Hồ sơ sức khỏe</h2>
  <p>Khi bố mẹ phải nhập viện đột xuất, câu hỏi đầu tiên bác sĩ hỏi là bệnh nền và thuốc đang dùng. Nếu người đưa đi không trả lời được, việc điều trị bị chậm lại.</p>
  <p>Hồ sơ tối thiểu nên có, lưu trên điện thoại của tất cả anh chị em và in một bản để trong nhà bố mẹ:</p>

  <table style="width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.95rem;">
    <thead>
      <tr style="background: #efe7fb; color: #2a1b3d;">
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 700; color: #2a1b3d; background: #efe7fb;">Thông tin</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 700; color: #2a1b3d; background: #efe7fb;">Chi tiết cần ghi</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bệnh nền</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tên bệnh, thời gian phát hiện, bác sĩ đang theo dõi</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Thuốc đang dùng</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tên thuốc, liều, thời điểm uống trong ngày</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Dị ứng thuốc</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Loại thuốc và biểu hiện dị ứng</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bảo hiểm y tế</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Số thẻ, nơi đăng ký khám ban đầu</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cơ sở y tế đang theo dõi</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tên bệnh viện, khoa, tên bác sĩ nếu có</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Chỉ số theo dõi</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Huyết áp, đường huyết gần nhất</td></tr>
    </tbody>
  </table>

  <p>Cách đơn giản nhất để cập nhật: chụp ảnh đơn thuốc và sổ khám sau mỗi lần bố mẹ đi khám, lưu vào một album riêng trên điện thoại và chia sẻ với anh chị em.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Phần 4: Kế hoạch cho tình huống khẩn cấp</h2>
  <p>Việc này nên bàn khi mọi thứ đang bình thường, chứ không phải lúc đang hoảng loạn. Cần thống nhất trước giữa các anh chị em:</p>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Ai là người liên lạc chính — người bệnh viện gọi khi có việc</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Ai ở gần nhất và có thể đến trong vòng 1 giờ</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Ai sẽ bay hoặc đi xe về nếu tình huống nghiêm trọng</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Chi phí xử lý ra sao, ai ứng trước</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Bệnh viện nào là nơi đưa đến trong trường hợp cấp cứu</li>
  </ul>

  <p>Danh sách số điện thoại khẩn cấp nên được in cỡ chữ lớn và dán ở nơi bố mẹ dễ thấy — cạnh điện thoại bàn hoặc trên tủ lạnh. Gồm: 115, số của các con, số hàng xóm tin cậy, số bệnh viện đang theo dõi.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Phân chia trách nhiệm giữa anh chị em</h2>
  <p>Đây là nguồn mâu thuẫn phổ biến trong các gia đình Việt: người ở gần thấy mình gánh hết, người ở xa thấy mình bị trách oan.</p>
  <p>Cách giảm mâu thuẫn hiệu quả là <strong>phân chia theo vai trò, không chia đều theo công việc</strong>:</p>
  <p><em>Người ở gần</em> đảm nhận phần có mặt: đưa đi khám, xử lý việc đột xuất.</p>
  <p><em>Người ở xa</em> đảm nhận phần không cần có mặt: theo dõi lịch khám và nhắc lịch, quản lý hồ sơ sức khỏe, liên hệ đặt lịch bệnh viện, và chia sẻ phần tài chính — bao gồm cả chi phí thuê dịch vụ để giảm gánh nặng cho người ở gần.</p>
  <p>Điểm mấu chốt: người ở xa cần chủ động đề xuất phần đóng góp của mình, thay vì đợi người ở gần lên tiếng. Đợi được nhắc thường là lúc đã tích tụ ấm ức.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Về cảm giác áy náy</h2>
  <p>Nhiều người con sống xa mang cảm giác mình chưa làm tròn bổn phận. Cảm giác đó tự nhiên, nhưng nếu để nó chi phối, nó thường dẫn tới hai hành vi không giúp ích: hoặc là dồn hết vào vật chất, hoặc là né tránh vì đối diện thấy khó chịu.</p>
  <p>Điều bố mẹ cần thường không phải là con phải ở bên mỗi ngày, mà là <strong>cảm giác mình không bị bỏ quên và có người biết mình đang thế nào</strong>. Cảm giác đó xây được từ xa — bằng sự đều đặn, bằng việc nhớ những chi tiết nhỏ trong đời sống của bố mẹ, và bằng việc thu xếp để luôn có người ở gần khi cần.</p>
  <p>Đó cũng chính là bài toán mà dịch vụ chăm sóc tại nhà được thiết kế để giải: không thay thế người con, mà đảm bảo rằng giữa những lần con về thăm, vẫn có người đến, có người quan sát, và có thông tin gửi về.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Đôi mắt của bạn tại nhà bố mẹ</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">ANTCARE đến nhà theo lịch, đo chỉ số sức khỏe, quan sát sinh hoạt và gửi báo cáo về cho gia đình sau mỗi buổi. Dành cho những người con không thể ở gần.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên gọi điện cho bố mẹ bao nhiêu lần một tuần?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không có con số đúng cho mọi gia đình, nhưng nguyên tắc chung là đều đặn quan trọng hơn nhiều. Một cuộc gọi ngắn mỗi ngày vào giờ cố định thường có giá trị hơn một cuộc gọi dài mỗi tuần, vì nó giúp bạn nhận ra thay đổi nhỏ và giúp bố mẹ có nhịp sinh hoạt để trông đợi. Nên ưu tiên gọi video thay vì gọi thoại.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Làm sao biết bố mẹ có uống thuốc đầy đủ không khi mình ở xa?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cách đơn giản nhất là dùng hộp chia thuốc theo ngày trong tuần, và yêu cầu bố mẹ chụp ảnh hộp thuốc gửi qua Zalo mỗi tối, hoặc mở hộp thuốc ra khi gọi video. Cách này ít gây cảm giác bị kiểm soát hơn là hỏi trực tiếp mỗi ngày. Nếu có người đến nhà theo lịch, việc kiểm tra vỉ thuốc còn lại là cách chính xác nhất.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Anh chị em nên phân chia trách nhiệm thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Nên phân chia theo vai trò cụ thể thay vì chia đều mọi việc, vì chia đều thường dẫn tới không ai chịu trách nhiệm cuối cùng. Một cách phổ biến: một người phụ trách y tế (theo dõi lịch khám, thuốc, liên hệ bác sĩ), một người phụ trách tài chính, một người phụ trách liên lạc hằng ngày. Người ở gần nhất thường đảm nhận phần có mặt, và các anh chị em ở xa nên chia sẻ phần tài chính hoặc thuê dịch vụ để cân bằng lại.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên chuẩn bị gì cho tình huống khẩn cấp?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cần chuẩn bị trước bốn thứ: danh sách số điện thoại khẩn cấp dán ở nơi dễ thấy trong nhà bố mẹ; một người ở gần có chìa khóa nhà và sẵn sàng đến trong 15 phút; hồ sơ y tế tóm tắt (bệnh nền, thuốc đang dùng, dị ứng thuốc) để mang theo khi nhập viện; và thống nhất trước giữa anh chị em về việc ai sẽ đến, ai lo thủ tục, ai lo chi phí.</p>
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
    "headline": "Chăm sóc bố mẹ từ xa: hướng dẫn thực tế cho người con ở tỉnh khác",
    "description": "Sống xa bố mẹ vẫn chăm sóc được. Cách thiết lập lịch liên lạc, mạng lưới hỗ trợ tại chỗ, hồ sơ sức khỏe và kế hoạch xử lý khi có việc khẩn cấp.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 58,
  slug: 'cham-soc-bo-me-tu-xa',
  oldSlugs: ['cham-soc-bo-me-tu-xa', 'cham-soc-bo-me-tu-xa-huong-dan-thuc-te-cho-nguoi-con-o-tinh-khac'],
  title: 'Chăm sóc bố mẹ từ xa: hướng dẫn thực tế cho người con ở tỉnh khác',
  category: 'Chăm sóc bố mẹ & Lão khoa',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cham-soc-bo-me-tu-xa.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 58 to news.json!');
