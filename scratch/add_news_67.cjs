const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 67) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Cúm mùa 2025–2026 đạt mức cao nhất 30 năm qua trên toàn cầu. Người cao tuổi Việt Nam cần biết gì về nguy cơ, vắc xin và khi nào cần đi khám.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cúm mùa 2026 tăng mạnh toàn cầu: Những điều người cao tuổi và gia đình cần biết</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Mùa cúm 2025–2026 được ghi nhận là cao nhất trong 30 năm qua ở nhiều nước. Tại Việt Nam, nguy cơ tiếp tục cao trong các tháng cuối năm khi thời tiết chuyển mát.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Người cao tuổi từ 65 tuổi trở lên cần tiêm vắc xin cúm mỗi năm,
      lý tưởng nhất vào tháng 9–10 trước khi mùa dịch cao điểm.
      Dấu hiệu cần đi khám trong ngày (không tự điều trị tại nhà):
      <strong>sốt trên 39°C kéo dài hơn 3 ngày, khó thở, đau ngực, SpO2 dưới 94%,
      lú lẫn hoặc mất ý thức</strong>.
      Người cao tuổi có bệnh nền tim mạch, phổi hoặc đái tháo đường thuộc nhóm ưu tiên
      điều trị sớm bằng thuốc kháng virus (Oseltamivir) ngay khi được chẩn đoán cúm.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/sot-xuat-huyet-mua-mua-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Sốt xuất huyết mùa mưa 2026: Vì sao nguy hiểm hơn với người cao tuổi
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bối cảnh toàn cầu và tình hình Việt Nam</h2>
  <p>Mùa cúm 2025–2026 được các cơ quan y tế ghi nhận là một trong những mùa cúm nặng nhất trong 30 năm qua tại nhiều nước phương Tây và châu Á. Tại Việt Nam, theo Bộ Y tế, trong 11 tháng năm 2025 ghi nhận hơn 132.000 ca cúm mùa. Năm 2026, nguy cơ tiếp tục cao khi thời tiết chuyển mát vào tháng 9–12.</p>
  <p>Các chủng virus cúm lưu hành chủ yếu hiện nay gồm cúm A (H1N1), A (H3N2) và cúm B — cả ba đều được cập nhật trong thành phần vắc xin mùa này.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nhóm nguy cơ cao nhất</h2>
  <p>Bộ Y tế xác định người cao tuổi từ 65 tuổi trở lên là một trong các nhóm ưu tiên phòng ngừa và điều trị sớm, cùng với trẻ nhỏ dưới 5 tuổi, phụ nữ mang thai và người có bệnh nền mạn tính. Lý do người cao tuổi thuộc nhóm nguy cơ cao:</p>
  <ul>
    <li>Hệ miễn dịch suy giảm theo tuổi, phản ứng chậm hơn với virus</li>
    <li>Chức năng phổi giảm, khả năng tống đờm nhớt yếu hơn</li>
    <li>Bệnh nền làm tăng nguy cơ biến chứng viêm phổi — biến chứng nguy hiểm nhất của cúm</li>
    <li>Tỷ lệ tiêm vắc xin cúm hằng năm ở người cao tuổi Việt Nam còn thấp</li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về vắc xin cúm mùa này</h2>
  <p>Tháng 9 là thời điểm lý tưởng để tiêm vắc xin cúm cho người cao tuổi tại Hà Nội — đủ thời gian tạo miễn dịch trước khi thời tiết lạnh hơn vào tháng 11–12.</p>
  <p>Vắc xin cúm hiện có sẵn tại các trung tâm tiêm chủng và nhiều phòng khám. Người cao tuổi có thể tiêm cùng ngày với vắc xin phế cầu (Pneumovax 23) — loại vắc xin phòng viêm phổi do phế cầu khuẩn, thường được khuyến nghị cho người từ 65 tuổi trở lên.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Lưu ý khi đưa người cao tuổi đi tiêm vắc xin</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Mang theo danh sách thuốc đang dùng và sổ tiêm chủng cũ nếu có. Ở lại theo dõi tại trung tâm tiêm chủng ít nhất 30 phút sau tiêm. Tránh đưa đi tiêm khi người cao tuổi đang sốt hoặc đang có đợt bệnh cấp tính — nên hoãn đến khi hồi phục hoàn toàn.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phân biệt cúm và Covid-19 — và tại sao điều đó quan trọng</h2>
  <p>Cúm và Covid-19 hiện lưu hành đồng thời và có triệu chứng rất giống nhau. Phân biệt chính xác quan trọng vì phác đồ điều trị khác nhau — Oseltamivir cho cúm, không có tác dụng với Covid-19.</p>
  <p>Cách duy nhất để phân biệt chắc chắn là xét nghiệm. Test nhanh cúm và test nhanh Covid-19 đều có bán tại nhà thuốc và thực hiện được tại nhà. Với người cao tuổi có bệnh nền, nên đến cơ sở y tế để làm xét nghiệm và được hướng dẫn điều trị phù hợp thay vì tự điều trị tại nhà.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào không nên ở nhà theo dõi</h2>
  <p>Nhiều gia đình mắc sai lầm khi để người cao tuổi ở nhà tự theo dõi cúm quá lâu. Các tình huống sau cần đưa đi khám trong ngày:</p>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Sốt trên 39°C kéo dài hơn 3 ngày dù đã dùng hạ sốt đúng cách
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Khó thở, thở nhanh trên 25 lần/phút khi nghỉ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      SpO2 dưới 94% khi đo tại nhà
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đau ngực hoặc tức ngực
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Lú lẫn, ngủ nhiều bất thường, khó đánh thức
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Không uống được nước, nôn nhiều
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Triệu chứng có vẻ đỡ rồi đột ngột nặng trở lại — dấu hiệu có thể đang bị bội nhiễm
    </li>
  </ul>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Chưa tiêm vắc xin cúm cho bố mẹ mùa này?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón để tiêm phòng hoặc đi khám khi bố mẹ có triệu chứng. Ghi chép kết quả gửi về cho gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Vắc xin cúm tiêm năm ngoái còn tác dụng không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không. Vắc xin cúm cần tiêm lại mỗi năm vì hai lý do: virus cúm biến đổi liên tục theo năm, nên thành phần vắc xin được cập nhật hằng năm theo khuyến nghị của WHO; và miễn dịch từ vắc xin giảm dần theo thời gian, thường chỉ bảo vệ hiệu quả trong 6–12 tháng. Tiêm vắc xin cúm của năm trước không bảo vệ được cho mùa cúm năm nay.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Cúm và cảm lạnh thông thường khác nhau thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cúm thường khởi phát đột ngột với sốt cao, đau nhức toàn thân nặng, mệt lả không làm được gì. Cảm lạnh thông thường thường khởi phát từ từ, ít sốt hoặc không sốt, chủ yếu sổ mũi và đau họng, ít ảnh hưởng đến toàn thân hơn. Tuy nhiên ở người cao tuổi, sự phân biệt này không phải lúc nào cũng rõ ràng, vì cúm có thể biểu hiện nhẹ hơn bình thường.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người đang dùng thuốc huyết áp, tiểu đường có tiêm vắc xin cúm được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Bệnh mạn tính và thuốc điều trị bệnh mạn tính thông thường không phải chống chỉ định với vắc xin cúm. Ngược lại, người có bệnh nền tim mạch, tiểu đường, bệnh phổi mạn tính lại là nhóm được ưu tiên tiêm vì nguy cơ biến chứng nặng khi mắc cúm cao hơn nhiều. Gia đình nên thông báo với nhân viên y tế về danh sách thuốc đang dùng trước khi tiêm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Oseltamivir (Tamiflu) có cần thiết không khi bị cúm?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không phải ai bị cúm cũng cần Oseltamivir. Thuốc kháng virus này hiệu quả nhất khi dùng trong 48 giờ đầu từ khi có triệu chứng, và được chỉ định cho người cao tuổi từ 65 tuổi trở lên, người có bệnh nền nghiêm trọng, và người có triệu chứng nặng hoặc diễn tiến xấu nhanh. Gia đình không nên tự mua thuốc này mà nên đưa người cao tuổi đi khám để được chỉ định phù hợp.</p>
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
    "headline": "Cúm mùa 2026 tăng mạnh toàn cầu: Những điều người cao tuổi và gia đình cần biết",
    "description": "Cúm mùa 2025–2026 đạt mức cao nhất 30 năm qua trên toàn cầu. Người cao tuổi Việt Nam cần biết gì về nguy cơ, vắc xin và khi nào cần đi khám.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 67,
  slug: 'cum-mua-2026-nguoi-cao-tuoi-nen-biet',
  oldSlugs: ['cum-mua-2026-nguoi-cao-tuoi-nen-biet'],
  title: 'Cúm mùa 2026 tăng mạnh toàn cầu: Những điều người cao tuổi và gia đình cần biết',
  category: 'Tin tức sức khỏe',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cum-mua-2026-nguoi-cao-tuoi-nen-biet.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 67 to news.json!');
