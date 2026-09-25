const fs = require('fs');
const path = require('path');

const newsPath = path.resolve(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const commonAuthor = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
};

const articles = [
  // BÀI 1
  {
    id: 63, // Update existing article 63
    slug: "dich-vu-dong-hanh-kham-benh-la-gi",
    metaTitle: "Dịch vụ đồng hành khám bệnh là gì? Ai cần? | ANTCARE",
    title: "Dịch vụ đồng hành khám bệnh là gì? Ai nên sử dụng và vì sao ngày càng nhiều gia đình cần đến?",
    category: "Đồng hành đi khám",
    date: "23/09/2026",
    author: commonAuthor,
    description: "Đồng hành khám bệnh là dịch vụ có người đi cùng người cao tuổi từ nhà đến bệnh viện, hỗ trợ thủ tục, ghi chép lời bác sĩ và báo lại gia đình. Tìm hiểu ai nên dùng.",
    excerpt: "Đồng hành khám bệnh là dịch vụ có người đi cùng người cao tuổi từ nhà đến bệnh viện, hỗ trợ thủ tục, ghi chép lời bác sĩ và báo lại gia đình. Tìm hiểu ai nên dùng.",
    image: "/images/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia.jpg",
    content: `<p class="sapo">Bố mẹ đến lịch tái khám đúng hôm con có cuộc họp quan trọng. Ông bà muốn đi khám mắt nhưng ngại &quot;phiền con&quot;. Nếu bạn từng rơi vào những tình huống này, dịch vụ đồng hành khám bệnh chính là mảnh ghép còn thiếu giữa tình thương và quỹ thời gian có hạn của người con.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Dịch vụ đồng hành khám bệnh là hình thức gia đình thuê một nhân viên được đào tạo để đi cùng người cao tuổi trong suốt buổi khám: đón tại nhà, làm thủ tục, dìu đỡ di chuyển giữa các khoa, ghi chép chính xác chỉ định của bác sĩ, nhắc thuốc, đưa về nhà an toàn và gửi báo cáo cho người thân. Dịch vụ phù hợp với người cao tuổi đi lại khó khăn, mắc bệnh mạn tính cần tái khám định kỳ, hoặc có con cái bận rộn, ở xa.
</div>

<h2>Vì sao dịch vụ này xuất hiện ở Việt Nam?</h2>
<p>Việt Nam đang già hóa với tốc độ thuộc hàng nhanh nhất khu vực. Theo Tổng điều tra Dân số và Nhà ở năm 2019, người từ 60 tuổi trở lên đã chiếm gần 12% dân số, và tỷ lệ này tiếp tục tăng qua từng năm. Song song đó, gia đình nhiều thế hệ dần nhường chỗ cho gia đình hạt nhân: con cái đi làm cả ngày, sống ở thành phố khác, thậm chí ở nước ngoài.</p>
<p>Trong khi đó, người cao tuổi lại là nhóm đi khám nhiều nhất: tăng huyết áp, tiểu đường, xương khớp, tim mạch, mắt… đều cần tái khám định kỳ. Một buổi khám ở bệnh viện lớn có thể kéo dài từ sáng đến trưa, thậm chí cả ngày, với rất nhiều bước: lấy số, đóng tiền, xét nghiệm, chụp chiếu, quay lại gặp bác sĩ, lấy thuốc. Với một người 70–80 tuổi, đó là cả một thử thách về sức khỏe lẫn tinh thần.</p>
<p>Dịch vụ đồng hành khám bệnh ra đời để lấp khoảng trống ấy: <strong>không thay thế tình cảm của con cháu, mà thay con cháu có mặt đúng lúc cha mẹ cần.</strong></p>

<h2>Dịch vụ đồng hành khám bệnh bao gồm những gì?</h2>
<p>Tại ANTCARE, nhân viên đồng hành – chúng tôi gọi thân mật là <strong>&quot;Kiến Y tế&quot;</strong> – đảm nhận trọn vẹn hành trình khám:</p>
<ul>
  <li><strong>Trước buổi khám:</strong> xác nhận lịch hẹn, trao đổi với gia đình về tiền sử bệnh, đơn thuốc đang dùng, những điều cần hỏi bác sĩ.</li>
  <li><strong>Đón tại nhà:</strong> kiểm tra giấy tờ (CCCD, thẻ BHYT, sổ khám, kết quả cũ), hỗ trợ lên xuống xe an toàn.</li>
  <li><strong>Tại bệnh viện:</strong> lấy số, làm thủ tục, dìu đỡ hoặc đẩy xe lăn giữa các khoa, xếp hàng thay, giữ đồ, nhắc uống nước, ăn nhẹ đúng lúc.</li>
  <li><strong>Khi gặp bác sĩ:</strong> trình bày triệu chứng theo ghi chú của gia đình, ghi lại chẩn đoán, chỉ định, lịch tái khám; hỏi lại những điều người cao tuổi chưa nghe rõ.</li>
  <li><strong>Sau buổi khám:</strong> lấy thuốc, đưa về nhà, sắp xếp thuốc theo cữ nếu gia đình yêu cầu, gửi báo cáo tổng hợp (kèm ảnh chụp kết quả, đơn thuốc) cho người thân.</li>
</ul>

<h2>Ai nên sử dụng dịch vụ đồng hành khám bệnh?</h2>
<h3>1. Người cao tuổi đi lại khó khăn</h3>
<p>Người đau khớp gối, sau đột quỵ, dùng gậy hoặc xe lăn, hay người dễ chóng mặt khi đứng lâu. Với nhóm này, nguy cơ té ngã ở hành lang bệnh viện đông đúc là có thật.</p>
<h3>2. Người mắc bệnh mạn tính cần tái khám định kỳ</h3>
<p>Tăng huyết áp, tiểu đường, bệnh thận, bệnh tim… thường tái khám hàng tháng. Lặp đi lặp lại nhiều lần, con cái rất khó xin nghỉ làm mỗi lần.</p>
<h3>3. Người suy giảm trí nhớ nhẹ hoặc thính lực kém</h3>
<p>Nhiều cụ về nhà không nhớ bác sĩ dặn gì, uống thuốc sai liều hoặc bỏ tái khám. Một người ghi chép cẩn thận giúp hạn chế điều này.</p>
<h3>4. Gia đình có con cái bận rộn, ở xa, ở nước ngoài</h3>
<p>Đây là nhóm khách hàng đông nhất của dịch vụ đồng hành trên thế giới: người con muốn chăm cha mẹ chu đáo nhưng không thể có mặt trực tiếp.</p>
<h3>5. Người cao tuổi sống một mình</h3>
<p>Ngay cả khi các cụ còn minh mẫn, có người đi cùng vẫn giúp buổi khám nhẹ nhàng, an toàn và bớt cô đơn hơn rất nhiều.</p>

<h2>Lợi ích thực tế cho cả người cao tuổi và gia đình</h2>
<table>
  <thead>
    <tr><th>Với người cao tuổi</th><th>Với con cái, gia đình</th></tr>
  </thead>
  <tbody>
    <tr><td>An toàn khi di chuyển, giảm nguy cơ té ngã</td><td>Không phải xin nghỉ làm, không lỡ công việc</td></tr>
    <tr><td>Ít mệt mỏi, ít phải đứng chờ</td><td>Nắm chính xác kết quả, chỉ định của bác sĩ</td></tr>
    <tr><td>Được lắng nghe, được giải thích lại rõ ràng</td><td>An tâm vì có báo cáo cụ thể sau mỗi buổi</td></tr>
    <tr><td>Giữ được sự tự chủ, không cảm thấy &quot;làm phiền con&quot;</td><td>Giảm căng thẳng, xung đột trong gia đình</td></tr>
  </tbody>
</table>

<div class="note"><strong>Lưu ý:</strong> Nhân viên đồng hành không thay thế bác sĩ và không đưa ra chẩn đoán hay tư vấn điều trị. Mọi quyết định y khoa vẫn do bác sĩ điều trị và gia đình cùng thống nhất.</div>

<div class="cta">
  <h3>Để &quot;Kiến Y tế&quot; thay bạn đưa bố mẹ đi khám</h3>
  <p>ANTCARE – Kiến chăm tổ đồng hành cùng người cao tuổi từ cửa nhà đến phòng khám và trở về. Gọi hotline <a href="tel:0969032360">0969 032 360</a> hoặc truy cập <a href="/giai-phap-cham-soc">antcare.vn</a> để đặt lịch.</p>
  <a class="btn" href="tel:0969032360">Đặt lịch đồng hành khám bệnh</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Dịch vụ đồng hành khám bệnh có phải là điều dưỡng tại nhà không?</summary><p>Không. Điều dưỡng tại nhà thực hiện các thủ thuật chăm sóc y tế. Đồng hành khám bệnh tập trung vào việc đưa đón, hỗ trợ thủ tục, di chuyển, ghi chép và báo cáo cho gia đình trong buổi khám.</p></details>
  <details><summary>Người nhà có cần đi cùng không?</summary><p>Không bắt buộc. Gia đình có thể theo dõi qua điện thoại, nhắn tin với nhân viên trong suốt buổi khám và nhận báo cáo sau đó.</p></details>
  <details><summary>Nên đặt lịch trước bao lâu?</summary><p>Nên đặt trước ít nhất 1–2 ngày để ANTCARE sắp xếp nhân viên phù hợp và chuẩn bị thông tin bệnh sử cùng gia đình.</p></details>
</section>

<p class="tags">#DongHanhKhamBenh #ChamSocNguoiCaoTuoi #ANTCARE #KienChamTo</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Dịch vụ đồng hành khám bệnh là gì? Ai nên sử dụng?",
          "inLanguage": "vi",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE",
            "url": "https://antcare.vn"
          },
          "about": "Dịch vụ đồng hành khám bệnh cho người cao tuổi"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Dịch vụ đồng hành khám bệnh là gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Là dịch vụ có nhân viên được đào tạo đi cùng người cao tuổi trong suốt buổi khám: đón tại nhà, làm thủ tục, hỗ trợ di chuyển, ghi chép chỉ định của bác sĩ, đưa về nhà và báo cáo cho gia đình."
              }
            },
            {
              "@type": "Question",
              "name": "Dịch vụ đồng hành khám bệnh có phải là điều dưỡng tại nhà không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không. Dịch vụ tập trung vào đưa đón, thủ tục, di chuyển, ghi chép và báo cáo; không thực hiện thủ thuật y tế hay chẩn đoán."
              }
            },
            {
              "@type": "Question",
              "name": "Người nhà có cần đi cùng không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không bắt buộc. Gia đình có thể theo dõi qua điện thoại và nhận báo cáo sau buổi khám."
              }
            }
          ]
        }
      ]
    }
  },

  // BÀI 2
  {
    id: 135,
    slug: "bo-me-di-kham-mot-minh-rui-ro",
    metaTitle: "Bố mẹ già đi khám một mình: 6 rủi ro con cần biết | ANTCARE",
    title: "Con bận đi làm, bố mẹ già đi khám một mình: 6 rủi ro ít ai nói ra và cách phòng tránh",
    category: "Đồng hành đi khám",
    date: "23/09/2026",
    author: commonAuthor,
    description: "Té ngã, nghe nhầm lời dặn, uống sai thuốc, bỏ tái khám… là những rủi ro khi người cao tuổi đi khám một mình. Cách phòng tránh mà không cần con phải nghỉ làm.",
    excerpt: "Té ngã, nghe nhầm lời dặn, uống sai thuốc, bỏ tái khám… là những rủi ro khi người cao tuổi đi khám một mình. Cách phòng tránh mà không cần con phải nghỉ làm.",
    image: "/images/con-o-xa-bo-me-di-kham-mot-minh.jpg",
    content: `<p class="sapo">&quot;Thôi, bố tự bắt xe đi được, con cứ đi làm đi.&quot; Câu nói quen thuộc ấy khiến nhiều người con vừa nhẹ lòng vừa áy náy. Nhưng phía sau sự tự lập đáng quý của cha mẹ là những rủi ro thật sự mà gia đình thường chỉ nhận ra khi chuyện đã xảy ra.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Người cao tuổi đi khám một mình thường gặp 6 rủi ro chính: té ngã khi di chuyển, kiệt sức vì chờ đợi lâu, nghe nhầm hoặc quên lời dặn của bác sĩ, uống thuốc sai cách, bỏ lỡ xét nghiệm hay lịch tái khám, và căng thẳng tâm lý. Giải pháp là có người đi cùng – con cháu hoặc nhân viên đồng hành khám bệnh chuyên nghiệp – để hỗ trợ, ghi chép và báo cáo lại cho gia đình.
</div>

<h2>Rủi ro 1: Té ngã trên đường đi và trong bệnh viện</h2>
<p>Theo Tổ chức Y tế Thế giới (WHO), té ngã là một trong những nguyên nhân hàng đầu gây chấn thương ở người cao tuổi. Bệnh viện là môi trường nhiều yếu tố nguy cơ: sàn vừa lau còn ướt, cầu thang đông người, thang máy chen chúc, người bệnh phải cúi, đứng lên ngồi xuống liên tục. Một cú ngã gãy xương hông ở tuổi 75 có thể thay đổi hoàn toàn chất lượng cuộc sống những năm sau đó.</p>

<h2>Rủi ro 2: Kiệt sức vì xếp hàng, nhịn đói, di chuyển nhiều khoa</h2>
<p>Nhiều xét nghiệm yêu cầu nhịn ăn. Người cao tuổi đi khám từ sáng sớm, chờ lấy máu, chờ kết quả, rồi quay lại phòng khám, có khi đến trưa vẫn chưa được ăn. Với người tiểu đường, việc nhịn đói kéo dài còn tiềm ẩn nguy cơ hạ đường huyết. Không có ai nhắc, các cụ thường &quot;cố chịu&quot; vì sợ mất lượt.</p>

<h2>Rủi ro 3: Nghe nhầm, nghe thiếu lời bác sĩ dặn</h2>
<p>Phòng khám đông, bác sĩ phải khám nhiều bệnh nhân, thời gian trao đổi mỗi người rất ngắn. Người cao tuổi nghe kém, ngại hỏi lại, hoặc hiểu sai thuật ngữ. Khi về nhà, con hỏi &quot;bác sĩ nói gì hả mẹ?&quot;, câu trả lời thường là &quot;à, bảo không sao, cứ uống thuốc&quot;.</p>

<h2>Rủi ro 4: Uống thuốc sai liều, sai giờ</h2>
<p>Đơn thuốc mới có thể thay đổi liều của thuốc cũ, thêm thuốc mới hoặc ngưng một loại thuốc. Nếu không ai đối chiếu, người cao tuổi dễ uống chồng thuốc cũ và mới, hoặc bỏ sót. Với người dùng nhiều loại thuốc cùng lúc, đây là rủi ro không nhỏ.</p>

<h2>Rủi ro 5: Bỏ lỡ xét nghiệm, bỏ lỡ lịch tái khám</h2>
<p>Bác sĩ chỉ định thêm một xét nghiệm nhưng các cụ thấy mệt nên &quot;để hôm khác&quot;. Lịch tái khám ghi trong sổ nhưng không ai nhắc. Bệnh mạn tính không được theo dõi đều đặn có thể tiến triển âm thầm.</p>

<h2>Rủi ro 6: Căng thẳng, lo âu và cảm giác cô đơn</h2>
<p>Ít ai nghĩ đến điều này, nhưng đi khám một mình, chờ kết quả một mình là trải nghiệm rất nặng nề về tâm lý. Nhiều cụ lo lắng suốt nhiều ngày trước buổi khám, hoặc giấu con những triệu chứng vì &quot;không muốn con lo&quot;.</p>

<h2>Vậy con cái nên làm gì khi không thể đi cùng?</h2>
<ol>
  <li><strong>Trò chuyện trước buổi khám:</strong> hỏi bố mẹ đang có triệu chứng gì, ghi thành danh sách câu hỏi cho bác sĩ.</li>
  <li><strong>Chuẩn bị sẵn giấy tờ và đơn thuốc cũ:</strong> để trong một túi riêng, dễ lấy.</li>
  <li><strong>Đặt lịch khám trước (nếu bệnh viện cho phép)</strong> để giảm thời gian chờ.</li>
  <li><strong>Sắp xếp người đi cùng:</strong> người thân, hàng xóm tin cậy, hoặc dịch vụ đồng hành khám bệnh chuyên nghiệp.</li>
  <li><strong>Yêu cầu báo cáo sau khám:</strong> ảnh chụp đơn thuốc, kết quả, lịch tái khám để con lưu trữ và theo dõi.</li>
</ol>

<h2>Khi &quot;Kiến Y tế&quot; đi cùng, những rủi ro trên được xử lý thế nào?</h2>
<p>Nhân viên đồng hành của ANTCARE được hướng dẫn để dìu đỡ đúng cách, luôn đi bên cạnh các cụ ở những đoạn dễ trượt ngã; chủ động sắp xếp thứ tự các bước khám hợp lý; mang theo nước, đồ ăn nhẹ theo dặn dò của gia đình; ghi chép nguyên văn chỉ định của bác sĩ và hỏi lại những điểm chưa rõ; đối chiếu đơn thuốc mới với thuốc cũ để báo gia đình; nhắc lịch tái khám. Quan trọng không kém, các cụ có người trò chuyện suốt buổi, bớt lo lắng và thấy mình được quan tâm.</p>

<div class="cta">
  <h3>Bố mẹ tự lập, con vẫn an tâm</h3>
  <p>Đừng để sự bận rộn biến thành nỗi áy náy. Gọi <a href="tel:0969032360">0969 032 360</a> để ANTCARE – Kiến chăm tổ đồng hành cùng bố mẹ bạn trong buổi khám tới.</p>
  <a class="btn" href="tel:0969032360">Tìm hiểu dịch vụ tại antcare.vn</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Bố mẹ tôi còn khỏe, có cần người đi cùng không?</summary><p>Người cao tuổi còn khỏe vẫn có thể gặp khó khăn với thủ tục, thời gian chờ dài và việc ghi nhớ lời dặn. Có người đi cùng giúp buổi khám an toàn và hiệu quả hơn, đặc biệt với các buổi khám nhiều xét nghiệm.</p></details>
  <details><summary>Làm sao thuyết phục bố mẹ đồng ý có người đi cùng?</summary><p>Hãy nhấn mạnh rằng đây là cách giúp con yên tâm làm việc, chứ không phải vì bố mẹ &quot;yếu&quot;. Nhiều cụ đồng ý dễ dàng hơn khi hiểu mình đang giúp con bớt lo.</p></details>
</section>

<p class="tags">#NguoiGiaDiKham #ChamSocBoMe #DongHanhKhamBenh #ANTCARE</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Con bận đi làm, bố mẹ già đi khám một mình: 6 rủi ro và cách phòng tránh",
          "inLanguage": "vi",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE",
            "url": "https://antcare.vn"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Người cao tuổi đi khám một mình có những rủi ro gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Té ngã, kiệt sức vì chờ đợi, nghe nhầm hoặc quên lời bác sĩ, uống thuốc sai cách, bỏ lỡ xét nghiệm hoặc tái khám, và căng thẳng tâm lý."
              }
            },
            {
              "@type": "Question",
              "name": "Bố mẹ còn khỏe có cần người đi khám cùng không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vẫn nên có, vì thủ tục, thời gian chờ và việc ghi nhớ lời dặn đều là thách thức với người cao tuổi."
              }
            }
          ]
        }
      ]
    }
  },

  // BÀI 3
  {
    id: 136,
    slug: "quy-trinh-dong-hanh-kham-benh-antcare",
    metaTitle: "Quy trình đồng hành khám bệnh 7 bước của ANTCARE",
    title: "Một buổi đồng hành khám bệnh cùng ANTCARE diễn ra như thế nào? Quy trình 7 bước chi tiết",
    category: "Đồng hành đi khám",
    date: "23/09/2026",
    author: commonAuthor,
    description: "Từ cuộc gọi đặt lịch đến bản báo cáo sau khám: xem chi tiết 7 bước một buổi đồng hành khám bệnh cho người cao tuổi cùng Kiến Y tế của ANTCARE.",
    excerpt: "Từ cuộc gọi đặt lịch đến bản báo cáo sau khám: xem chi tiết 7 bước một buổi đồng hành khám bệnh cho người cao tuổi cùng Kiến Y tế của ANTCARE.",
    image: "/images/quy-trinh-dong-hanh-di-kham-antcare.jpg",
    content: `<p class="sapo">Giao bố mẹ cho một người chưa từng gặp là quyết định không dễ dàng. Vì vậy, chúng tôi muốn gia đình biết rõ từng việc &quot;Kiến Y tế&quot; sẽ làm, từ trước khi gõ cửa nhà bạn cho đến khi các cụ nghỉ ngơi an toàn sau buổi khám.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Quy trình đồng hành khám bệnh của ANTCARE gồm 7 bước: (1) tiếp nhận yêu cầu và tìm hiểu tình trạng sức khỏe, (2) chuẩn bị hồ sơ và danh sách câu hỏi cho bác sĩ, (3) đón tại nhà, (4) hỗ trợ thủ tục và di chuyển tại cơ sở y tế, (5) cùng gặp bác sĩ và ghi chép, (6) lấy thuốc và đưa về nhà, (7) gửi báo cáo và nhắc lịch tái khám cho gia đình.
</div>

<h2>Bước 1: Tiếp nhận yêu cầu và lắng nghe gia đình</h2>
<p>Khi gia đình gọi hotline hoặc để lại thông tin trên antcare.vn, chúng tôi sẽ hỏi những điều cần thiết: nơi khám, chuyên khoa, giờ hẹn, khả năng đi lại của các cụ (tự đi, dùng gậy, cần xe lăn), bệnh nền, thói quen và cả tính cách. Một cụ ông ít nói, ngại người lạ sẽ cần cách tiếp cận khác với một cụ bà thích trò chuyện. Những chi tiết nhỏ này giúp chúng tôi chọn nhân viên phù hợp.</p>

<h2>Bước 2: Chuẩn bị hồ sơ và &quot;danh sách câu hỏi cho bác sĩ&quot;</h2>
<p>Trước ngày khám, nhân viên sẽ cùng gia đình rà soát:</p>
<ul>
  <li>Giấy tờ: CCCD, thẻ bảo hiểm y tế, giấy chuyển tuyến (nếu có), sổ khám bệnh.</li>
  <li>Kết quả xét nghiệm, phim chụp, đơn thuốc các lần trước.</li>
  <li>Danh sách thuốc đang uống, kể cả thực phẩm chức năng.</li>
  <li>Triệu chứng mới, diễn biến gần đây và những câu hỏi gia đình muốn hỏi bác sĩ.</li>
  <li>Yêu cầu nhịn ăn, nhịn uống (nếu có xét nghiệm).</li>
</ul>

<h2>Bước 3: Đón tại nhà</h2>
<p>&quot;Kiến Y tế&quot; đến sớm để các cụ không phải vội vàng. Nhân viên kiểm tra lại giấy tờ, nhắc mang áo khoác, nước uống, đồ ăn nhẹ (nếu không phải nhịn), hỗ trợ lên xe và ngồi cạnh các cụ trên đường đi. Phương tiện di chuyển được thống nhất trước với gia đình.</p>

<h2>Bước 4: Hỗ trợ thủ tục và di chuyển tại bệnh viện</h2>
<p>Đây là phần tốn sức nhất của buổi khám và cũng là nơi dịch vụ phát huy giá trị rõ nhất. Nhân viên lấy số, làm thủ tục, đóng phí; tìm ghế cho các cụ ngồi nghỉ trong khi mình đứng xếp hàng; dìu đỡ hoặc đẩy xe lăn giữa các khu xét nghiệm, chụp chiếu; theo dõi dấu hiệu mệt mỏi và nhắc uống nước, nghỉ ngơi.</p>

<h2>Bước 5: Cùng gặp bác sĩ và ghi chép đầy đủ</h2>
<p>Khi vào phòng khám, nhân viên hỗ trợ các cụ trình bày triệu chứng dựa trên ghi chú đã chuẩn bị, sau đó ghi lại chẩn đoán, kết quả chính, thay đổi về thuốc, chế độ ăn, vận động và ngày tái khám. Nếu các cụ chưa nghe rõ, nhân viên sẽ lễ phép hỏi lại bác sĩ. Trong trường hợp cần thiết và được bác sĩ đồng ý, gia đình có thể được kết nối điện thoại để trực tiếp trao đổi.</p>

<h2>Bước 6: Lấy thuốc và đưa về nhà</h2>
<p>Nhân viên nhận thuốc, kiểm tra đủ số lượng theo đơn, giải thích lại cách uống bằng lời lẽ dễ hiểu. Về đến nhà, nếu gia đình yêu cầu, &quot;Kiến Y tế&quot; hỗ trợ sắp thuốc vào hộp chia cữ theo đúng đơn bác sĩ và nhắc các cụ nghỉ ngơi.</p>

<h2>Bước 7: Gửi báo cáo và nhắc lịch tái khám</h2>
<p>Trong ngày, gia đình nhận được bản tóm tắt buổi khám gồm: thời gian khám, bác sĩ/khoa khám, kết quả chính, chỉ định mới, đơn thuốc (ảnh chụp), lưu ý sinh hoạt và ngày tái khám. Đây cũng là tài liệu quý để gia đình theo dõi sức khỏe các cụ lâu dài.</p>

<table>
  <thead>
    <tr><th>Giai đoạn</th><th>Việc nhân viên làm</th><th>Gia đình nhận được</th></tr>
  </thead>
  <tbody>
    <tr><td>Trước khám</td><td>Tìm hiểu bệnh sử, chuẩn bị hồ sơ, câu hỏi</td><td>Kế hoạch buổi khám rõ ràng</td></tr>
    <tr><td>Trong khám</td><td>Thủ tục, di chuyển, ghi chép, hỏi lại bác sĩ</td><td>Cập nhật tiến độ qua tin nhắn</td></tr>
    <tr><td>Sau khám</td><td>Lấy thuốc, đưa về, sắp thuốc (nếu cần)</td><td>Báo cáo tổng hợp + lịch tái khám</td></tr>
  </tbody>
</table>

<div class="note"><strong>Cam kết của ANTCARE:</strong> Thông tin sức khỏe của các cụ chỉ được chia sẻ với người thân do gia đình chỉ định. Nhân viên không tư vấn thay bác sĩ và không tự ý thay đổi bất kỳ chỉ định nào.</div>

<div class="cta">
  <h3>Sẵn sàng đặt lịch cho buổi khám tới?</h3>
  <p>Gọi <a href="tel:0969032360">0969 032 360</a> hoặc nhắn tin qua fanpage ANTCARE – Kiến chăm tổ. Chúng tôi sẽ lắng nghe trước, rồi mới lên kế hoạch.</p>
  <a class="btn" href="tel:0969032360">Đặt lịch tại antcare.vn</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Một buổi đồng hành khám bệnh kéo dài bao lâu?</summary><p>Tùy cơ sở y tế và số lượng xét nghiệm, thường từ nửa buổi đến cả ngày. ANTCARE sẽ thống nhất khung thời gian dự kiến với gia đình khi đặt lịch.</p></details>
  <details><summary>Gia đình có theo dõi được trong lúc khám không?</summary><p>Có. Nhân viên cập nhật tiến độ qua tin nhắn/điện thoại theo kênh gia đình chọn.</p></details>
  <details><summary>ANTCARE có hỗ trợ người ngồi xe lăn không?</summary><p>Có. Gia đình vui lòng thông báo trước để chúng tôi chuẩn bị phương án di chuyển phù hợp.</p></details>
</section>

<p class="tags">#QuyTrinhDongHanh #DuaNguoiGiaDiKham #ANTCARE #KienYTe</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HowTo",
          "name": "Quy trình đồng hành khám bệnh cho người cao tuổi cùng ANTCARE",
          "inLanguage": "vi",
          "step": [
            {
              "@type": "HowToStep",
              "position": 1,
              "name": "Tiếp nhận yêu cầu",
              "text": "Tìm hiểu nơi khám, giờ hẹn, khả năng đi lại, bệnh nền và tính cách người cao tuổi."
            },
            {
              "@type": "HowToStep",
              "position": 2,
              "name": "Chuẩn bị hồ sơ",
              "text": "Rà soát giấy tờ, kết quả cũ, thuốc đang dùng và danh sách câu hỏi cho bác sĩ."
            },
            {
              "@type": "HowToStep",
              "position": 3,
              "name": "Đón tại nhà",
              "text": "Kiểm tra giấy tờ, hỗ trợ lên xe và đi cùng trên đường."
            },
            {
              "@type": "HowToStep",
              "position": 4,
              "name": "Hỗ trợ thủ tục và di chuyển",
              "text": "Lấy số, đóng phí, xếp hàng, dìu đỡ giữa các khoa."
            },
            {
              "@type": "HowToStep",
              "position": 5,
              "name": "Gặp bác sĩ và ghi chép",
              "text": "Hỗ trợ trình bày triệu chứng, ghi lại chẩn đoán, chỉ định, lịch tái khám."
            },
            {
              "@type": "HowToStep",
              "position": 6,
              "name": "Lấy thuốc và đưa về",
              "text": "Kiểm tra thuốc, giải thích cách dùng, đưa về nhà an toàn."
            },
            {
              "@type": "HowToStep",
              "position": 7,
              "name": "Báo cáo gia đình",
              "text": "Gửi tóm tắt buổi khám, ảnh đơn thuốc và nhắc lịch tái khám."
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Một buổi đồng hành khám bệnh kéo dài bao lâu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Thường từ nửa buổi đến cả ngày tùy cơ sở y tế và số lượng xét nghiệm."
              }
            },
            {
              "@type": "Question",
              "name": "Gia đình có theo dõi được trong lúc khám không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có, nhân viên cập nhật tiến độ qua tin nhắn hoặc điện thoại."
              }
            }
          ]
        }
      ]
    }
  },

  // BÀI 4
  {
    id: 137,
    slug: "checklist-chuan-bi-dua-nguoi-cao-tuoi-di-kham",
    metaTitle: "Checklist 15 việc chuẩn bị khi đưa người già đi khám",
    title: "Checklist 15 việc cần chuẩn bị trước khi đưa người cao tuổi đi khám bệnh",
    category: "Cẩm nang chăm sóc",
    date: "23/09/2026",
    author: commonAuthor,
    description: "Giấy tờ, thuốc, đồ dùng, câu hỏi cho bác sĩ, lưu ý nhịn ăn… Checklist đầy đủ giúp buổi khám của ông bà nhanh gọn, an toàn và không bỏ sót.",
    excerpt: "Giấy tờ, thuốc, đồ dùng, câu hỏi cho bác sĩ, lưu ý nhịn ăn… Checklist đầy đủ giúp buổi khám của ông bà nhanh gọn, an toàn và không bỏ sót.",
    image: "/images/checklist-dua-bo-me-di-kham-benh-vien.jpg",
    content: `<p class="sapo">Quên sổ khám, thiếu kết quả cũ, không nhớ tên thuốc đang uống… chỉ một thiếu sót nhỏ cũng có thể khiến ông bà phải chờ thêm, làm lại xét nghiệm hoặc quay lại vào hôm khác. Dưới đây là checklist mà đội ngũ ANTCARE sử dụng trước mỗi buổi đồng hành, gia đình có thể lưu lại dùng ngay.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Trước khi đưa người cao tuổi đi khám cần chuẩn bị 3 nhóm: <em>giấy tờ</em> (CCCD, thẻ BHYT, giấy chuyển tuyến, sổ khám, kết quả cũ), <em>thông tin sức khỏe</em> (danh sách thuốc đang dùng, triệu chứng, câu hỏi cho bác sĩ, yêu cầu nhịn ăn) và <em>đồ dùng cá nhân</em> (nước, đồ ăn nhẹ, áo khoác, kính, máy trợ thính, gậy, thuốc cấp cứu). Nên chuẩn bị từ tối hôm trước và cho vào một túi riêng.
</div>

<h2>Nhóm 1: Giấy tờ (chuẩn bị từ tối hôm trước)</h2>
<ol>
  <li><strong>Căn cước công dân</strong> – bản gốc.</li>
  <li><strong>Thẻ bảo hiểm y tế</strong> (thẻ giấy hoặc trên ứng dụng VNeID nếu cơ sở chấp nhận) – kiểm tra còn hạn.</li>
  <li><strong>Giấy chuyển tuyến/giấy hẹn tái khám</strong> nếu có, để được hưởng đúng quyền lợi BHYT.</li>
  <li><strong>Sổ khám bệnh, kết quả xét nghiệm, phim chụp các lần trước</strong> – xếp theo thứ tự thời gian, mới nhất ở trên.</li>
  <li><strong>Tiền mặt/thẻ thanh toán</strong> cho các khoản ngoài BHYT.</li>
</ol>

<h2>Nhóm 2: Thông tin sức khỏe (quan trọng nhất nhưng hay bị bỏ qua)</h2>
<ol start="6">
  <li><strong>Danh sách thuốc đang dùng:</strong> tên thuốc, liều, giờ uống. Cách đơn giản nhất: chụp ảnh tất cả vỏ hộp thuốc, hoặc mang theo túi thuốc.</li>
  <li><strong>Nhật ký triệu chứng:</strong> triệu chứng gì, bắt đầu khi nào, xuất hiện lúc nào trong ngày, nặng lên hay nhẹ đi. Nếu có đo huyết áp, đường huyết tại nhà, hãy mang sổ ghi chỉ số.</li>
  <li><strong>Tiền sử dị ứng thuốc, phẫu thuật, bệnh nền.</strong></li>
  <li><strong>Danh sách 3–5 câu hỏi cho bác sĩ</strong>, ví dụ: Kết quả này có đáng lo không? Thuốc mới có thay thuốc cũ không? Cần kiêng gì? Khi nào cần đi khám ngay?</li>
  <li><strong>Kiểm tra yêu cầu nhịn ăn:</strong> nhiều xét nghiệm máu, siêu âm bụng cần nhịn ăn. Với người tiểu đường, hãy hỏi trước bác sĩ về cách dùng thuốc hạ đường huyết buổi sáng hôm đó.</li>
</ol>

<h2>Nhóm 3: Đồ dùng cá nhân</h2>
<ol start="11">
  <li><strong>Nước uống và đồ ăn nhẹ</strong> (bánh quy, sữa) – ăn ngay sau khi lấy máu xong.</li>
  <li><strong>Áo khoác mỏng</strong> – phòng chờ và phòng chụp chiếu thường lạnh.</li>
  <li><strong>Kính, máy trợ thính, răng giả, gậy/khung tập đi</strong> – những vật dụng các cụ dùng hằng ngày.</li>
  <li><strong>Quần áo dễ cởi</strong>: áo cài cúc trước, tránh áo chui đầu khi phải đo điện tim, chụp X-quang; giày dép chống trơn, có quai hậu.</li>
  <li><strong>Thuốc cấp cứu cá nhân</strong> (nếu có, như thuốc ngậm dưới lưỡi cho người bệnh tim theo chỉ định của bác sĩ) và số điện thoại người thân ghi trên giấy, để trong túi áo.</li>
</ol>

<h2>Mẹo nhỏ giúp buổi khám nhẹ nhàng hơn</h2>
<ul>
  <li><strong>Đặt lịch hẹn trước</strong> qua tổng đài hoặc ứng dụng của bệnh viện nếu có.</li>
  <li><strong>Đi sớm hơn giờ hẹn 20–30 phút</strong> để không phải vội.</li>
  <li><strong>Chọn khung giờ phù hợp với nhịp sinh hoạt của các cụ</strong>, tránh giờ cao điểm nếu có thể.</li>
  <li><strong>Chụp ảnh mọi giấy tờ nhận được</strong> trong ngày khám để lưu trữ.</li>
  <li><strong>Trò chuyện nhẹ nhàng trước buổi khám</strong> để các cụ bớt lo lắng; tránh những câu như &quot;chắc là bệnh nặng rồi&quot;.</li>
</ul>

<div class="note"><strong>Tải checklist:</strong> Gia đình có thể in checklist này, dán ở tủ lạnh hoặc cạnh túi giấy tờ khám bệnh của ông bà để dùng cho mọi lần khám.</div>

<div class="cta">
  <h3>Không có thời gian chuẩn bị? Để ANTCARE lo</h3>
  <p>&quot;Kiến Y tế&quot; rà soát toàn bộ checklist cùng gia đình trước mỗi buổi đồng hành, để bố mẹ bạn chỉ việc ra khỏi nhà với tâm thế thoải mái. Hotline <a href="tel:0969032360">0969 032 360</a>.</p>
  <a class="btn" href="tel:0969032360">Xem dịch vụ đồng hành khám bệnh</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Đi khám bệnh cần mang giấy tờ gì?</summary><p>Căn cước công dân, thẻ bảo hiểm y tế, giấy chuyển tuyến hoặc giấy hẹn (nếu có), sổ khám bệnh và kết quả các lần khám trước.</p></details>
  <details><summary>Người già đi xét nghiệm máu có cần nhịn ăn không?</summary><p>Một số xét nghiệm (như đường huyết lúc đói, mỡ máu) cần nhịn ăn. Nên hỏi trước bệnh viện hoặc bác sĩ, đặc biệt với người đang dùng thuốc tiểu đường.</p></details>
  <details><summary>Có nên mang theo thuốc đang uống khi đi khám?</summary><p>Nên mang theo hoặc chụp ảnh vỏ thuốc để bác sĩ biết chính xác người bệnh đang dùng gì, tránh kê trùng hoặc tương tác thuốc.</p></details>
</section>

<p class="tags">#ChecklistDiKham #ChuanBiDiKham #NguoiCaoTuoi #ANTCARE</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Checklist 15 việc cần chuẩn bị trước khi đưa người cao tuổi đi khám bệnh",
          "inLanguage": "vi",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE",
            "url": "https://antcare.vn"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Đi khám bệnh cần mang giấy tờ gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Căn cước công dân, thẻ bảo hiểm y tế, giấy chuyển tuyến hoặc giấy hẹn, sổ khám bệnh và kết quả các lần khám trước."
              }
            },
            {
              "@type": "Question",
              "name": "Người già đi xét nghiệm máu có cần nhịn ăn không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Một số xét nghiệm cần nhịn ăn; nên hỏi trước bác sĩ, đặc biệt với người dùng thuốc tiểu đường."
              }
            },
            {
              "@type": "Question",
              "name": "Có nên mang theo thuốc đang uống khi đi khám?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nên mang theo hoặc chụp ảnh vỏ thuốc để bác sĩ tránh kê trùng hoặc tương tác thuốc."
              }
            }
          ]
        }
      ]
    }
  },

  // BÀI 5
  {
    id: 138,
    slug: "kinh-nghiem-dua-nguoi-gia-kham-benh-vien-lon",
    metaTitle: "Đưa ông bà khám bệnh viện lớn: 8 kinh nghiệm đỡ mệt",
    title: "Đưa ông bà đi khám ở bệnh viện lớn: 8 kinh nghiệm giúp đỡ mệt, bớt chờ, an toàn hơn",
    category: "Cẩm nang chăm sóc",
    date: "23/09/2026",
    author: commonAuthor,
    description: "Bệnh viện tuyến trung ương đông, nhiều khu, nhiều bước. 8 kinh nghiệm thực tế giúp người cao tuổi khám nhanh hơn, ít chờ và an toàn hơn.",
    excerpt: "Bệnh viện tuyến trung ương đông, nhiều khu, nhiều bước. 8 kinh nghiệm thực tế giúp người cao tuổi khám nhanh hơn, ít chờ và an toàn hơn.",
    image: "/images/benh-vien-nguoi-cao-tuoi.jpg",
    content: `<p class="sapo">Bệnh viện tuyến trung ương có đội ngũ chuyên môn giỏi, trang thiết bị hiện đại nên luôn là lựa chọn ưu tiên của nhiều gia đình. Nhưng đi kèm là cảnh đông đúc, nhiều tòa nhà, nhiều tầng, nhiều bước thủ tục. Với người cao tuổi, &quot;khám bệnh viện lớn&quot; nhiều khi mệt hơn cả bản thân căn bệnh.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Để người cao tuổi đỡ mệt khi khám ở bệnh viện lớn, gia đình nên: đặt lịch hẹn trước, chọn khung giờ ít đông, tìm hiểu trước sơ đồ bệnh viện, chuẩn bị đủ hồ sơ, hỏi về quyền ưu tiên cho người cao tuổi, chia việc giữa người đi cùng (một người xếp hàng, một người ở cạnh ông bà), mang đồ ăn uống phù hợp và có người ghi chép lời bác sĩ.
</div>

<h2>1. Đặt lịch hẹn trước bất cứ khi nào có thể</h2>
<p>Nhiều bệnh viện đã có tổng đài, website hoặc ứng dụng đặt lịch khám. Đặt lịch giúp giảm đáng kể thời gian chờ lấy số và gặp bác sĩ. Hãy lưu ý giờ hẹn là giờ gặp bác sĩ, còn các bước thủ tục cần đến sớm hơn.</p>

<h2>2. Chọn đúng ngày, đúng khung giờ</h2>
<p>Đầu tuần và sáng sớm thường đông nhất. Nếu bệnh không cấp bách, có thể cân nhắc giữa tuần. Với các cụ khó dậy sớm hoặc dễ tụt huyết áp buổi sáng, hãy trao đổi với bác sĩ về khung giờ phù hợp.</p>

<h2>3. Tìm hiểu sơ đồ bệnh viện trước khi đi</h2>
<p>Biết trước khu khám, khu xét nghiệm, khu chẩn đoán hình ảnh, nhà thuốc, thang máy và nhà vệ sinh nằm ở đâu giúp giảm quãng đường đi bộ không cần thiết. Nếu cụ đi lại khó, hãy hỏi quầy hướng dẫn về xe lăn của bệnh viện.</p>

<h2>4. Hỏi về quy định ưu tiên người cao tuổi</h2>
<p>Theo Luật Người cao tuổi, người cao tuổi được ưu tiên khi khám bệnh, đặc biệt là người từ 80 tuổi trở lên. Cách thực hiện ưu tiên ở mỗi bệnh viện có thể khác nhau, vì vậy hãy hỏi quầy tiếp đón để được hướng dẫn đúng.</p>

<h2>5. Chia việc: một người &quot;chạy thủ tục&quot;, một người ở cạnh ông bà</h2>
<p>Sai lầm phổ biến là để các cụ đi theo con khắp các quầy. Cách tốt hơn: tìm một chỗ ngồi thoải mái, gần khu cần đến tiếp theo, để các cụ nghỉ; người đi cùng xếp hàng, đóng phí, lấy kết quả. Nếu chỉ có một người đi cùng, hãy tính toán thứ tự các bước để các cụ di chuyển ít nhất.</p>

<h2>6. Ăn uống đúng lúc</h2>
<p>Mang theo nước và đồ ăn nhẹ. Sau khi lấy máu xét nghiệm lúc đói, cho các cụ ăn ngay. Tránh để cụ nhịn đói kéo dài chỉ vì sợ mất lượt khám.</p>

<h2>7. Ghi chép – và hỏi lại cho đến khi hiểu</h2>
<p>Thời gian gặp bác sĩ ở bệnh viện lớn thường ngắn. Chuẩn bị sẵn câu hỏi, ghi chép (hoặc xin phép ghi âm) những điểm chính. Trước khi rời phòng, tóm tắt lại: &quot;Dạ, như vậy bố cháu uống thuốc A buổi sáng, thuốc B buổi tối, tái khám sau một tháng, đúng không ạ?&quot;</p>

<h2>8. Đừng ngại nhờ người hỗ trợ chuyên nghiệp</h2>
<p>Khi gia đình không thể sắp xếp người đi cùng, hoặc chỉ có một người mà các cụ cần hỗ trợ nhiều, dịch vụ đồng hành khám bệnh là lựa chọn thực tế. Nhân viên đã quen với quy trình, biết cách sắp xếp các bước hợp lý và luôn ở cạnh các cụ trong những đoạn di chuyển nhiều rủi ro.</p>

<table>
  <thead>
    <tr><th>Tình huống thường gặp</th><th>Cách xử lý gợi ý</th></tr>
  </thead>
  <tbody>
    <tr><td>Cụ mệt, choáng khi chờ lâu</td><td>Cho ngồi nghỉ, uống nước, ăn nhẹ (nếu không phải nhịn); báo nhân viên y tế nếu không đỡ</td></tr>
    <tr><td>Phải đi nhiều khu cách xa nhau</td><td>Dùng xe lăn của bệnh viện; sắp xếp thứ tự đi hợp lý</td></tr>
    <tr><td>Chờ kết quả vài tiếng</td><td>Cho cụ nghỉ ở khu yên tĩnh, người đi cùng theo dõi màn hình/loa gọi</td></tr>
    <tr><td>Cụ lo lắng, muốn về</td><td>Trò chuyện, giải thích còn bao nhiêu bước; gọi điện để con cháu động viên</td></tr>
  </tbody>
</table>

<div class="cta">
  <h3>Để buổi khám ở bệnh viện lớn không còn là &quot;cực hình&quot;</h3>
  <p>ANTCARE – Kiến chăm tổ hỗ trợ đồng hành khám bệnh cho người cao tuổi, từ đặt lịch, chuẩn bị hồ sơ đến báo cáo sau khám. Gọi <a href="tel:0969032360">0969 032 360</a>.</p>
  <a class="btn" href="tel:0969032360">Đặt người đồng hành</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Người cao tuổi có được ưu tiên khi khám bệnh không?</summary><p>Có. Luật Người cao tuổi quy định người cao tuổi được ưu tiên khi khám bệnh, trong đó người từ 80 tuổi trở lên được ưu tiên hơn. Hãy hỏi quầy tiếp đón để được hướng dẫn cụ thể.</p></details>
  <details><summary>Có nên ghi âm lời bác sĩ không?</summary><p>Chỉ nên ghi âm khi được bác sĩ đồng ý. Thay vào đó, ghi chép và tóm tắt lại với bác sĩ trước khi ra về là cách lịch sự và hiệu quả.</p></details>
</section>

<p class="tags">#KhamBenhVienLon #KinhNghiemDiKham #NguoiCaoTuoi #ANTCARE</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Đưa ông bà đi khám ở bệnh viện lớn: 8 kinh nghiệm giúp đỡ mệt, bớt chờ, an toàn hơn",
          "inLanguage": "vi",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE",
            "url": "https://antcare.vn"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Làm sao để người cao tuổi đỡ mệt khi khám ở bệnh viện lớn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Đặt lịch trước, chọn khung giờ ít đông, tìm hiểu sơ đồ bệnh viện, hỏi quyền ưu tiên, chia việc giữa người đi cùng, ăn uống đúng lúc và ghi chép lời bác sĩ."
              }
            },
            {
              "@type": "Question",
              "name": "Người cao tuổi có được ưu tiên khi khám bệnh không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có, theo Luật Người cao tuổi; người từ 80 tuổi trở lên được ưu tiên hơn."
              }
            }
          ]
        }
      ]
    }
  },

  // BÀI 6
  {
    id: 139,
    slug: "cham-soc-bo-me-tu-xa-khi-di-kham",
    metaTitle: "Con ở xa, ở nước ngoài: chăm bố mẹ đi khám từ xa | ANTCARE",
    title: "Con ở xa, ở nước ngoài: làm sao chăm bố mẹ đi khám bệnh tại Việt Nam một cách chu đáo?",
    category: "Đồng hành đi khám",
    date: "23/09/2026",
    author: commonAuthor,
    description: "Dành cho người con xa quê, Việt kiều: cách theo dõi sức khỏe và sắp xếp người đưa bố mẹ đi khám tại Việt Nam, nhận báo cáo chi tiết sau mỗi buổi khám.",
    excerpt: "Dành cho người con xa quê, Việt kiều: cách theo dõi sức khỏe và sắp xếp người đưa bố mẹ đi khám tại Việt Nam, nhận báo cáo chi tiết sau mỗi buổi khám.",
    image: "/images/con-o-xa-theo-doi-suc-khoe-bo-me.jpg",
    content: `<p class="sapo">Cách nhau vài trăm cây số hay nửa vòng trái đất, nỗi lo của người con vẫn như nhau: &quot;Hôm nay bố đi khám, ai đưa bố đi? Bác sĩ nói gì? Bố có giấu mình điều gì không?&quot;. Bài viết này dành cho những người con xa nhà muốn chăm sóc cha mẹ một cách chủ động, thay vì chỉ nghe qua điện thoại &quot;bố mẹ vẫn khỏe&quot;.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Để chăm bố mẹ đi khám từ xa, người con nên: lập hồ sơ sức khỏe số của bố mẹ, nắm lịch tái khám, xác định một đầu mối tin cậy tại Việt Nam (người thân hoặc dịch vụ đồng hành khám bệnh chuyên nghiệp), thống nhất cách báo cáo sau mỗi buổi khám (tóm tắt, ảnh đơn thuốc, kết quả), và duy trì gọi video định kỳ để theo dõi cả sức khỏe lẫn tinh thần của bố mẹ.
</div>

<h2>Nỗi lo rất thật của người con xa nhà</h2>
<p>Nhiều người con ở TP.HCM có bố mẹ ở Hà Nội, hoặc làm việc ở Mỹ, Úc, Nhật, Hàn trong khi bố mẹ ở Việt Nam. Khó khăn không nằm ở tiền bạc mà ở chỗ: <strong>không có mặt, nên không có thông tin.</strong> Bố mẹ thường nói giảm nói tránh để con yên tâm. Anh chị em ở gần lại bận rộn, không thể lần nào cũng xin nghỉ. Khác biệt múi giờ khiến việc gọi hỏi bác sĩ ngay trong buổi khám gần như không thể.</p>

<h2>5 bước để chăm bố mẹ đi khám từ xa hiệu quả</h2>

<h3>Bước 1: Lập &quot;hồ sơ sức khỏe số&quot; cho bố mẹ</h3>
<p>Tạo một thư mục chung (Google Drive, iCloud…) lưu ảnh chụp: thẻ BHYT, sổ khám, kết quả xét nghiệm, đơn thuốc theo từng lần khám; một file ghi danh sách bệnh nền, thuốc đang dùng, dị ứng. Khi có chuyện gấp, bất kỳ ai trong gia đình cũng tra cứu được ngay.</p>

<h3>Bước 2: Nắm lịch tái khám và lịch uống thuốc</h3>
<p>Đưa lịch tái khám vào lịch điện thoại của bạn, đặt nhắc trước 3–5 ngày để kịp sắp xếp người đưa đi. Đừng chờ bố mẹ báo.</p>

<h3>Bước 3: Có một &quot;đầu mối&quot; tin cậy tại chỗ</h3>
<p>Đó có thể là anh chị em, họ hàng, hàng xóm thân thiết, hoặc một đơn vị đồng hành khám bệnh chuyên nghiệp. Ưu điểm của đơn vị chuyên nghiệp là tính ổn định: có người thay thế khi nhân viên bận, có quy trình ghi chép và báo cáo rõ ràng, không phụ thuộc vào &quot;tình cảm&quot; hay sự rảnh rỗi của ai.</p>

<h3>Bước 4: Thống nhất cách báo cáo sau mỗi buổi khám</h3>
<p>Một báo cáo tốt nên có: ngày giờ, nơi khám, bác sĩ/chuyên khoa, lý do khám, kết quả chính, chẩn đoán, thay đổi về thuốc, lời dặn sinh hoạt, ngày tái khám, và ảnh chụp đơn thuốc, kết quả. Nhờ vậy, bạn có thể trao đổi thêm với bác sĩ quen hoặc theo dõi xu hướng sức khỏe của bố mẹ qua thời gian.</p>

<h3>Bước 5: Theo dõi cả tinh thần, không chỉ chỉ số</h3>
<p>Gọi video sau buổi khám, hỏi bố mẹ cảm thấy thế nào, có lo lắng gì không. Người cao tuổi sống xa con thường cô đơn hơn chúng ta nghĩ. Một cuộc gọi đúng lúc có giá trị không kém một đơn thuốc.</p>

<h2>ANTCARE hỗ trợ người con xa nhà như thế nào?</h2>
<ul>
  <li><strong>Đặt lịch từ xa:</strong> qua điện thoại, Zalo, Facebook – không cần có mặt tại Việt Nam.</li>
  <li><strong>Buổi trao đổi trước khám:</strong> bạn trình bày bệnh sử, lo lắng và câu hỏi cho bác sĩ; chúng tôi chuẩn bị cùng bố mẹ bạn.</li>
  <li><strong>Cập nhật trong buổi khám:</strong> tin nhắn theo từng mốc quan trọng.</li>
  <li><strong>Báo cáo sau khám bằng văn bản</strong>, kèm ảnh đơn thuốc, kết quả, giúp bạn xây dựng hồ sơ sức khỏe số.</li>
  <li><strong>Kết hợp dịch vụ Trợ lý theo dõi sức khỏe:</strong> nhân viên đến thăm định kỳ, đo chỉ số, kiểm tra việc uống thuốc, trò chuyện cùng các cụ – để giữa các buổi khám, bạn vẫn nắm được tình hình.</li>
  <li><strong>An tâm cửa nhà:</strong> hỗ trợ kiểm tra an toàn nhà ở và dọn dẹp, giảm nguy cơ té ngã khi bố mẹ sống một mình.</li>
</ul>

<div class="note"><strong>Gợi ý cho Việt kiều:</strong> Hãy chọn một khung giờ cố định mỗi tuần (phù hợp cả hai múi giờ) để gọi video cho bố mẹ, và dặn đơn vị đồng hành gửi báo cáo vào đầu mối liên lạc mà bạn đọc được ngay khi thức dậy.</div>

<div class="cta">
  <h3>Ở xa nhưng không vắng mặt</h3>
  <p>Hãy để &quot;Kiến Y tế&quot; của ANTCARE trở thành đôi tay và đôi mắt của bạn tại Việt Nam trong mỗi buổi khám của bố mẹ. Hotline/Zalo: <a href="tel:0969032360">0969 032 360</a>.</p>
  <a class="btn" href="tel:0969032360">Liên hệ ANTCARE</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Tôi ở nước ngoài có đặt dịch vụ cho bố mẹ ở Việt Nam được không?</summary><p>Được. Toàn bộ việc đặt lịch, trao đổi và nhận báo cáo có thể thực hiện từ xa qua điện thoại hoặc ứng dụng nhắn tin.</p></details>
  <details><summary>Báo cáo sau khám gồm những gì?</summary><p>Thời gian, nơi khám, kết quả chính, chẩn đoán, thay đổi về thuốc, lời dặn của bác sĩ, ngày tái khám và ảnh chụp đơn thuốc, kết quả.</p></details>
  <details><summary>Thông tin sức khỏe của bố mẹ tôi có được bảo mật không?</summary><p>ANTCARE chỉ chia sẻ thông tin với người thân do gia đình chỉ định.</p></details>
</section>

<p class="tags">#ChamBoMeTuXa #VietKieu #DongHanhKhamBenh #ANTCARE</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Con ở xa, ở nước ngoài: làm sao chăm bố mẹ đi khám bệnh tại Việt Nam?",
          "inLanguage": "vi",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE",
            "url": "https://antcare.vn"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Làm sao chăm bố mẹ đi khám bệnh khi con ở xa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lập hồ sơ sức khỏe số, nắm lịch tái khám, có đầu mối tin cậy tại chỗ hoặc dịch vụ đồng hành khám bệnh, thống nhất cách báo cáo sau khám và gọi video định kỳ."
              }
            },
            {
              "@type": "Question",
              "name": "Ở nước ngoài có đặt dịch vụ đồng hành khám bệnh cho bố mẹ ở Việt Nam được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Được, việc đặt lịch và nhận báo cáo đều thực hiện từ xa."
              }
            }
          ]
        }
      ]
    }
  },

  // BÀI 7
  {
    id: 140,
    slug: "chon-dich-vu-dong-hanh-kham-benh-uy-tin",
    metaTitle: "Tự đưa, nhờ người quen hay thuê dịch vụ đi khám cùng bố mẹ?",
    title: "Tự đưa đi, nhờ người quen hay thuê dịch vụ? So sánh và 7 tiêu chí chọn dịch vụ đồng hành khám bệnh uy tín",
    category: "Đồng hành đi khám",
    date: "23/09/2026",
    author: commonAuthor,
    description: "So sánh 3 lựa chọn đưa người cao tuổi đi khám và 7 tiêu chí chọn dịch vụ đồng hành khám bệnh uy tín, an toàn, minh bạch.",
    excerpt: "So sánh 3 lựa chọn đưa người cao tuổi đi khám và 7 tiêu chí chọn dịch vụ đồng hành khám bệnh uy tín, an toàn, minh bạch.",
    image: "/images/dich-vu-dong-hanh-di-kham-nguoi-cao-tuoi.jpg",
    content: `<p class="sapo">Không có lựa chọn nào là &quot;đúng tuyệt đối&quot; khi đưa bố mẹ đi khám. Mỗi gia đình có hoàn cảnh riêng. Bài viết này giúp bạn so sánh khách quan ba phương án phổ biến và, nếu chọn thuê dịch vụ, biết cách đánh giá một đơn vị có thật sự đáng tin hay không.</p>

<div class="answer">
  <strong>Trả lời nhanh:</strong> Tự đưa bố mẹ đi khám là tốt nhất về mặt tình cảm nhưng tốn thời gian và khó duy trì đều đặn. Nhờ người quen tiện nhưng thiếu ổn định và khó yêu cầu. Thuê dịch vụ đồng hành khám bệnh phù hợp khi cần sự đều đặn, có quy trình và báo cáo rõ ràng. Khi chọn dịch vụ, hãy xét 7 tiêu chí: thông tin pháp lý minh bạch, nhân viên được đào tạo và lý lịch rõ ràng, quy trình cụ thể, báo cáo sau khám, bảo mật thông tin, chi phí rõ ràng, và thái độ tôn trọng người cao tuổi.
</div>

<h2>So sánh 3 phương án đưa người cao tuổi đi khám</h2>
<table>
  <thead>
    <tr><th>Tiêu chí</th><th>Con cháu tự đưa</th><th>Nhờ người quen/thuê xe</th><th>Dịch vụ đồng hành chuyên nghiệp</th></tr>
  </thead>
  <tbody>
    <tr><td>Tình cảm, sự gắn kết</td><td>Rất cao</td><td>Trung bình</td><td>Trung bình – cao (nếu cùng một nhân viên lâu dài)</td></tr>
    <tr><td>Thời gian của con</td><td>Mất nửa ngày – cả ngày</td><td>Ít</td><td>Gần như không</td></tr>
    <tr><td>Tính ổn định</td><td>Phụ thuộc lịch làm việc</td><td>Thấp, khó nhờ nhiều lần</td><td>Cao, có người thay thế</td></tr>
    <tr><td>Hỗ trợ trong bệnh viện</td><td>Tốt nếu quen thủ tục</td><td>Thường chỉ đưa đón</td><td>Toàn trình: thủ tục, di chuyển, ghi chép</td></tr>
    <tr><td>Ghi chép, báo cáo</td><td>Tùy người</td><td>Hầu như không</td><td>Có quy trình, có văn bản</td></tr>
    <tr><td>Chi phí trực tiếp</td><td>Không (nhưng mất ngày công)</td><td>Thấp</td><td>Có phí dịch vụ</td></tr>
  </tbody>
</table>
<p>Trên thực tế, nhiều gia đình <strong>kết hợp</strong>: con cháu đi cùng những buổi khám quan trọng (nhận kết quả sinh thiết, tư vấn phẫu thuật), còn các buổi tái khám định kỳ thì giao cho dịch vụ đồng hành.</p>

<h2>7 tiêu chí chọn dịch vụ đồng hành khám bệnh uy tín</h2>

<h3>1. Thông tin doanh nghiệp minh bạch</h3>
<p>Có website, địa chỉ, số điện thoại, fanpage hoạt động thực tế. Tránh những cá nhân nhận việc qua mạng không rõ danh tính.</p>

<h3>2. Nhân viên có lý lịch rõ ràng và được đào tạo</h3>
<p>Hỏi đơn vị về cách tuyển chọn, đào tạo nhân viên: kỹ năng dìu đỡ, sơ cứu cơ bản, giao tiếp với người cao tuổi, xử lý tình huống khi các cụ mệt, choáng.</p>

<h3>3. Quy trình cụ thể, không &quot;tùy cơ ứng biến&quot;</h3>
<p>Một đơn vị chuyên nghiệp có thể mô tả rõ các bước trước, trong và sau buổi khám. Nếu câu trả lời chỉ là &quot;cứ yên tâm&quot;, hãy cân nhắc.</p>

<h3>4. Có báo cáo sau khám</h3>
<p>Đây là giá trị cốt lõi. Hãy xin xem mẫu báo cáo trước khi đặt dịch vụ.</p>

<h3>5. Cam kết bảo mật thông tin sức khỏe</h3>
<p>Thông tin bệnh tật là thông tin nhạy cảm. Đơn vị cần cam kết chỉ chia sẻ với người được gia đình chỉ định.</p>

<h3>6. Chi phí rõ ràng, báo trước</h3>
<p>Hỏi rõ phí tính theo buổi hay theo giờ, phí phát sinh nếu khám kéo dài, chi phí đi lại, và ai thanh toán viện phí, tiền thuốc (thường gia đình tạm ứng hoặc thanh toán trực tiếp).</p>

<h3>7. Thái độ tôn trọng người cao tuổi</h3>
<p>Tiêu chí khó đo nhất nhưng quan trọng nhất. Người cao tuổi cần được đối xử như người lớn có quyền quyết định, không phải &quot;đối tượng cần trông&quot;. Hãy để ý cách nhân viên xưng hô, lắng nghe và hỏi ý kiến các cụ.</p>

<h2>Câu hỏi nên đặt ra khi gọi cho đơn vị đồng hành</h2>
<ul>
  <li>Nhân viên đi cùng bố mẹ tôi là ai? Có thể giữ cố định một người cho các lần sau không?</li>
  <li>Nếu bố mẹ tôi mệt đột ngột trong bệnh viện, anh/chị xử lý thế nào?</li>
  <li>Tôi sẽ nhận báo cáo khi nào, qua kênh nào?</li>
  <li>Chi phí gồm những gì, có phát sinh không?</li>
</ul>

<h2>Vì sao chọn ANTCARE – Kiến chăm tổ?</h2>
<p>Tên gọi &quot;Kiến chăm tổ&quot; nói lên cách chúng tôi làm việc: cần mẫn, tỉ mỉ, và coi mỗi gia đình như &quot;tổ&quot; của mình. ANTCARE xây dựng dịch vụ đồng hành khám bệnh với quy trình 7 bước rõ ràng, báo cáo sau mỗi buổi khám, và có thể kết hợp với dịch vụ <strong>Trợ lý theo dõi sức khỏe</strong> (thăm khám định kỳ tại nhà) và <strong>An tâm cửa nhà</strong> (an toàn nhà ở, dọn dẹp) để chăm sóc các cụ một cách liên tục, không chỉ trong ngày đi khám. Chúng tôi hoan nghênh gia đình hỏi kỹ mọi câu hỏi ở trên trước khi quyết định.</p>

<div class="cta">
  <h3>Hỏi kỹ trước, an tâm sau</h3>
  <p>Gọi <a href="tel:0969032360">0969 032 360</a> để được giải đáp về quy trình, nhân sự và chi phí dịch vụ đồng hành khám bệnh của ANTCARE.</p>
  <a class="btn" href="tel:0969032360">Tìm hiểu thêm tại antcare.vn</a>
</div>

<section class="faq">
  <h2>Câu hỏi thường gặp</h2>
  <details><summary>Có nên thuê người đưa bố mẹ đi khám không?</summary><p>Nên cân nhắc khi con cái không thể đi cùng đều đặn, bố mẹ đi lại khó khăn hoặc cần tái khám thường xuyên. Nhiều gia đình kết hợp: con đi cùng các buổi quan trọng, dịch vụ đảm nhận các buổi định kỳ.</p></details>
  <details><summary>Làm sao biết dịch vụ đồng hành khám bệnh có uy tín?</summary><p>Xem xét thông tin doanh nghiệp, cách đào tạo nhân viên, quy trình, mẫu báo cáo, cam kết bảo mật, chi phí minh bạch và thái độ tôn trọng người cao tuổi.</p></details>
  <details><summary>Có thể yêu cầu cùng một nhân viên cho các lần khám sau không?</summary><p>Gia đình nên đề xuất điều này; một nhân viên quen thuộc giúp các cụ thoải mái và nắm bệnh sử tốt hơn. Hãy trao đổi với ANTCARE khi đặt lịch.</p></details>
</section>

<p class="tags">#DichVuUyTin #DongHanhKhamBenh #ChamSocNguoiCaoTuoi #ANTCARE #KienChamTo</p>`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Tự đưa đi, nhờ người quen hay thuê dịch vụ? 7 tiêu chí chọn dịch vụ đồng hành khám bệnh uy tín",
          "inLanguage": "vi",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ANTCARE",
            "url": "https://antcare.vn",
            "telephone": "+84969032360"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Có nên thuê người đưa bố mẹ đi khám không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nên cân nhắc khi con cái không thể đi cùng đều đặn, bố mẹ đi lại khó khăn hoặc tái khám thường xuyên; có thể kết hợp với việc con đi cùng các buổi quan trọng."
              }
            },
            {
              "@type": "Question",
              "name": "Làm sao chọn dịch vụ đồng hành khám bệnh uy tín?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dựa trên 7 tiêu chí: thông tin minh bạch, nhân viên được đào tạo, quy trình cụ thể, báo cáo sau khám, bảo mật thông tin, chi phí rõ ràng và thái độ tôn trọng người cao tuổi."
              }
            }
          ]
        }
      ]
    }
  }
];

// Update Article 63 in list if exists, otherwise append
const existingIdx63 = newsData.list.findIndex(x => x.id === 63 || x.slug === 'dich-vu-dong-hanh-kham-benh-la-gi');
if (existingIdx63 !== -1) {
  const oldArticle = newsData.list[existingIdx63];
  newsData.list[existingIdx63] = {
    ...oldArticle,
    ...articles[0],
    oldSlugs: Array.from(new Set([...(oldArticle.oldSlugs || []), oldArticle.slug, articles[0].slug]))
  };
  console.log(`Updated article ID 63 at index ${existingIdx63}`);
} else {
  newsData.list.unshift(articles[0]);
  console.log('Appended article 63 to list');
}

// Now insert articles 135 to 140 at the beginning of newsData.list (after any other top priority) or unshift so they show up prominently
const remainingArticles = articles.slice(1);
for (const art of remainingArticles) {
  const existingIdx = newsData.list.findIndex(x => x.id === art.id || x.slug === art.slug);
  if (existingIdx !== -1) {
    newsData.list[existingIdx] = { ...newsData.list[existingIdx], ...art };
    console.log(`Updated article ID ${art.id} at index ${existingIdx}`);
  } else {
    // Put near top of list so it is immediately visible in latest news
    newsData.list.unshift(art);
    console.log(`Added new article ID ${art.id}: ${art.title.substring(0, 40)}...`);
  }
}

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated src/data/news.json!');
