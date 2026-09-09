const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 69) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Tăng huyết áp ở người cao tuổi có đặc điểm riêng khác với người trẻ. Mục tiêu huyết áp, sai lầm phổ biến khi dùng thuốc và khi nào cần thay đổi phác đồ.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Hơn 50% người Việt Nam trên 60 tuổi có tăng huyết áp, nhưng tỷ lệ được kiểm soát tốt chỉ khoảng 30%. Phần lớn là do những sai lầm có thể tránh được trong cách dùng thuốc và theo dõi.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Năm sai lầm phổ biến nhất khi điều trị tăng huyết áp ở người cao tuổi:
      <strong>tự ý bỏ thuốc khi thấy huyết áp về bình thường</strong>,
      <strong>dùng thuốc không đúng giờ và không đủ liều</strong>,
      <strong>không báo với bác sĩ khi có tác dụng phụ</strong>,
      <strong>tự tăng liều khi thấy huyết áp cao một lần</strong>, và
      <strong>không đo huyết áp tại nhà để đối chiếu</strong>.
      Tăng huyết áp ở người cao tuổi cần điều trị suốt đời — huyết áp về bình thường là
      dấu hiệu thuốc đang có tác dụng, không phải dấu hiệu đã khỏi bệnh.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tăng huyết áp ở người cao tuổi — một số điểm khác biệt</h2>
  <p>Tăng huyết áp ở người cao tuổi có một số đặc điểm khác với người trung niên, và những khác biệt này ảnh hưởng đến cách điều trị:</p>
  <p><strong>Tăng huyết áp tâm thu đơn độc</strong> — huyết áp tâm thu (số trên) cao nhưng huyết áp tâm trương (số dưới) bình thường hoặc thấp — phổ biến hơn ở người cao tuổi do thành mạch xơ cứng. Loại này làm tăng nguy cơ đột quỵ và đòi hỏi chú ý riêng trong lựa chọn thuốc.</p>
  <p><strong>Hạ huyết áp tư thế</strong> — huyết áp giảm khi đứng dậy — ảnh hưởng nhiều người cao tuổi và làm tăng nguy cơ ngã, đặc biệt khi dùng thuốc huyết áp. Cần đo huyết áp cả ở tư thế nằm và đứng để phát hiện.</p>
  <p><strong>Biến thiên huyết áp lớn hơn</strong> — huyết áp dao động nhiều hơn trong ngày và theo mùa. Đây là lý do cần đo nhiều lần và theo dõi theo chuỗi thay vì dựa vào một lần đo.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Năm sai lầm phổ biến và cách khắc phục</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sai lầm 1: Bỏ thuốc khi huyết áp về bình thường</h3>
  <p>Đây là sai lầm phổ biến nhất và nguy hiểm nhất. Huyết áp về bình thường là bằng chứng thuốc đang phát huy tác dụng, không phải bằng chứng bệnh đã khỏi. Bỏ thuốc đột ngột, huyết áp thường tăng trở lại trong vòng vài ngày đến vài tuần — và đôi khi tăng cao hơn cả trước khi điều trị (hiện tượng huyết áp bật lại).</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sai lầm 2: Uống thuốc không đúng giờ</h3>
  <p>Nhiều thuốc huyết áp cần uống vào giờ cố định để duy trì nồng độ ổn định trong máu. Uống giờ khác nhau mỗi ngày làm huyết áp dao động không đều. Dùng hộp chia thuốc theo ngày và uống vào cùng một giờ mỗi ngày — thường là buổi sáng trước hoặc sau ăn theo chỉ định.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sai lầm 3: Không báo tác dụng phụ với bác sĩ</h3>
  <p>Ho khan (tác dụng phụ của nhóm thuốc ức chế men chuyển), phù mắt cá chân (nhóm chẹn kênh canxi), mệt mỏi, chóng mặt — nhiều người chịu đựng những tác dụng phụ này vì sợ phiền hoặc sợ phải đổi thuốc. Trong khi đó, đổi sang thuốc khác cùng nhóm hoặc điều chỉnh liều thường giải quyết được vấn đề mà không ảnh hưởng đến hiệu quả điều trị.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sai lầm 4: Tự tăng liều khi thấy huyết áp cao một lần</h3>
  <p>Huyết áp cao đơn lẻ sau một buổi mệt mỏi, căng thẳng hoặc ngủ kém không có nghĩa là thuốc đang không đủ liều. Tự tăng liều không có chỉ định có thể gây hạ huyết áp nguy hiểm. Khi thấy huyết áp cao liên tục nhiều ngày, ghi lại số liệu và báo với bác sĩ để được điều chỉnh phác đồ đúng cách.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sai lầm 5: Không đo huyết áp tại nhà</h3>
  <p>Huyết áp đo tại phòng khám chỉ là một thời điểm, bị ảnh hưởng bởi lo lắng và di chuyển. Chuỗi số đo tại nhà vào cùng giờ mỗi ngày có giá trị cao hơn nhiều để bác sĩ đánh giá hiệu quả điều trị và điều chỉnh thuốc.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thay đổi lối sống — vẫn cần dù đang dùng thuốc</h2>
  <p>Thuốc huyết áp không thay thế được thay đổi lối sống, mà hai thứ này bổ trợ cho nhau. Bốn thay đổi có bằng chứng khoa học mạnh nhất:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #efe7fb; color: #2a1b3d;">
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Thay đổi</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Mức giảm huyết áp tâm thu ước tính</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Giảm muối xuống dưới 5g/ngày</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">2–8 mmHg</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Vận động vừa phải 30 phút mỗi ngày</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">4–9 mmHg</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Duy trì cân nặng phù hợp (giảm 10kg nếu thừa cân)</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">5–20 mmHg</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Hạn chế rượu bia</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">2–4 mmHg</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Các con số trên chỉ mang tính tham khảo và dao động theo từng người. Nhưng kết hợp nhiều thay đổi lối sống với thuốc thường cho kết quả kiểm soát huyết áp tốt hơn dùng thuốc đơn thuần.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Theo dõi sát hơn trong giao mùa</h2>
  <p>Nhiệt độ giảm trong những tháng cuối năm làm mạch máu co lại, huyết áp thường tăng hơn so với mùa hè. Người cao tuổi đang điều trị tăng huyết áp nên tăng tần suất đo lên mỗi ngày trong tháng 9–10 và thông báo với bác sĩ nếu thấy huyết áp tăng đều đặn so với tháng trước. Đây có thể là thời điểm cần điều chỉnh liều thuốc theo mùa.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ đang điều trị huyết áp — bạn theo dõi được không?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đo và ghi nhận huyết áp định kỳ tại nhà, gửi báo cáo về cho gia đình để bạn biết việc điều trị đang hiệu quả đến đâu.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Huyết áp bao nhiêu là mục tiêu cho người cao tuổi?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không có một con số đúng cho tất cả. Theo hướng dẫn Hội Tim mạch học Việt Nam, mục tiêu chung cho người dưới 80 tuổi là huyết áp tâm thu dưới 140 mmHg. Với người từ 80 tuổi trở lên, mục tiêu thường rộng hơn (tâm thu 140–150 mmHg) để tránh hạ huyết áp khi đứng dậy gây ngã. Người có đái tháo đường hoặc bệnh thận mạn tính có mục tiêu khác. Bác sĩ điều trị sẽ đặt mục tiêu cá nhân hóa dựa trên tình trạng cụ thể.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tại sao bác sĩ kê nhiều thuốc huyết áp cùng lúc?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Phối hợp nhiều thuốc huyết áp liều thấp thường an toàn và hiệu quả hơn dùng một thuốc liều cao. Các nhóm thuốc khác nhau tác động qua các cơ chế khác nhau, nên kết hợp tạo hiệu quả hạ áp tốt hơn trong khi giảm tác dụng phụ của từng thuốc. Đây là phác đồ phổ biến và được khuyến nghị trong các hướng dẫn điều trị, không phải dấu hiệu bệnh nặng hơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Huyết áp tụt khi đứng dậy ở người cao tuổi có nguy hiểm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và đây là vấn đề đặc trưng của người cao tuổi. Huyết áp thế đứng (hạ huyết áp tư thế) xảy ra khi huyết áp giảm đột ngột khi đứng dậy từ tư thế nằm hoặc ngồi, gây chóng mặt và dễ ngã. Đây là tác dụng phụ của nhiều thuốc huyết áp và cũng là biểu hiện của lão hóa mạch máu. Cần báo bác sĩ để điều chỉnh thuốc và học cách đứng dậy chậm, bám vào điểm tựa.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bố mẹ tự đo được huyết áp 170/100 lúc 9 giờ tối thì làm gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đầu tiên cho nghỉ ngơi yên tĩnh 5 phút rồi đo lại. Nếu vẫn cao nhưng không có triệu chứng như đau đầu dữ dội, nhìn mờ, đau ngực, khó thở — không tự ý tăng thuốc, ghi lại số và gọi điện hỏi bác sĩ điều trị vào sáng hôm sau. Nếu có bất kỳ triệu chứng nào kể trên kèm theo huyết áp trên 180/120 — đó là cấp cứu tăng huyết áp, cần đến bệnh viện ngay.</p>
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
    "headline": "Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh",
    "description": "Tăng huyết áp ở người cao tuổi có đặc điểm riêng khác với người trẻ. Mục tiêu huyết áp, sai lầm phổ biến khi dùng thuốc và khi nào cần thay đổi phác đồ.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 69,
  slug: 'tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet',
  oldSlugs: ['tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet'],
  title: 'Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh',
  category: 'Sức khỏe người cao tuổi',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 69 to news.json!');
