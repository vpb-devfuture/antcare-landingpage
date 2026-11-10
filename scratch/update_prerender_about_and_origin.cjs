const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.js', 'utf-8');

// 1. Prepare Dedicated /ve-chung-toi and /cham-soc-nguoi-cao-tuoi prerender logic
const dedicatedPagesCode = `
  // ==========================================
  // 2B. TRANG VỀ CHÚNG TÔI (/ve-chung-toi)
  // ==========================================
  const aboutUrl = "https://antcare.vn/ve-chung-toi";
  const aboutTitle = "Về ANTCARE – Thương hiệu đồ lót chức năng Việt Nam";
  const aboutDesc = "ANTCARE là thương hiệu đồ lót chức năng Việt Nam: quần kinh nguyệt, quần chống són tiểu. Bắt nguồn từ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.";

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": \`\${aboutUrl}#webpage\`,
        "url": aboutUrl,
        "name": aboutTitle,
        "description": aboutDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${aboutUrl}#breadcrumb\`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://antcare.vn/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Về ANTCARE",
            "item": aboutUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": \`\${aboutUrl}#faq\`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ANTCARE là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội."
            }
          },
          {
            "@type": "Question",
            "name": "ANTCARE có phải thương hiệu Việt Nam không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có. ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan các công ty nước ngoài có tên tương tự."
            }
          },
          {
            "@type": "Question",
            "name": "Vì sao một đơn vị chăm sóc người cao tuổi lại làm đồ lót?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vì khi chăm sóc người cao tuổi và phụ nữ, ANTCARE thấy són tiểu, kinh nguyệt và kích ứng do sản phẩm dùng một lần là nhu cầu rất thật nhưng ít được quan tâm."
            }
          },
          {
            "@type": "Question",
            "name": "ANTCARE còn nhận dịch vụ chăm sóc người cao tuổi không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được lưu giữ tại trang Chăm sóc người cao tuổi (antcare.vn/cham-soc-nguoi-cao-tuoi)."
            }
          },
          {
            "@type": "Question",
            "name": "Mua sản phẩm ANTCARE ở đâu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sản phẩm đang chuẩn bị ra mắt; bạn có thể đăng ký nhận thông tin tại antcare.vn hoặc nhắn Zalo 0969 032 360 để được hỗ trợ sớm nhất."
            }
          }
        ]
      }
    ]
  };

  const aboutBody = \`
    <main class="antcare-about-prerender max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
        <a href="/" class="hover:underline">Trang chủ</a> / <span class="font-semibold text-slate-800">Về ANTCARE</span>
      </nav>
      <header class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-black text-[#1C1917] leading-tight mb-4">
          Về ANTCARE – thương hiệu đồ lót chức năng bắt nguồn từ chăm sóc sức khỏe
        </h1>
        <div class="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 rounded-r-2xl text-left my-6">
          <p class="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
            <strong class="text-[#6633B4] font-bold">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</strong>
          </p>
        </div>
      </header>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-[#6633B4] mb-4">Thông tin chung</h2>
        <table class="w-full text-left border-collapse text-sm border border-[#E8DFD5]">
          <tbody class="divide-y divide-[#E8DFD5]">
            <tr><td class="p-3 font-semibold w-1/3">Tên thương hiệu</td><td class="p-3">ANTCARE – Kiến chăm tổ</td></tr>
            <tr><td class="p-3 font-semibold">Lĩnh vực</td><td class="p-3">Đồ lót chức năng: quần kinh nguyệt, quần chống són tiểu</td></tr>
            <tr><td class="p-3 font-semibold">Khởi nguồn</td><td class="p-3">Dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội</td></tr>
            <tr><td class="p-3 font-semibold">Khách hàng</td><td class="p-3">Phụ nữ trong độ tuổi có kinh nguyệt, phụ nữ sau sinh, tuổi tiền mãn kinh, người cao tuổi bị són tiểu nhẹ</td></tr>
            <tr><td class="p-3 font-semibold">Khu vực bán</td><td class="p-3">Toàn quốc (khi ra mắt)</td></tr>
            <tr><td class="p-3 font-semibold">Website</td><td class="p-3"><a href="https://antcare.vn">antcare.vn</a></td></tr>
            <tr><td class="p-3 font-semibold">Hotline / Zalo</td><td class="p-3"><a href="tel:0969032360">0969 032 360</a></td></tr>
            <tr><td class="p-3 font-semibold">Địa chỉ</td><td class="p-3">Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội</td></tr>
          </tbody>
        </table>
        <p class="text-xs text-slate-500 italic mt-3">ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan đến các công ty nước ngoài có tên tương tự.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Câu chuyện ANTCARE</h2>
        <p class="text-slate-700 leading-relaxed">ANTCARE bắt đầu từ dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Làm việc hằng ngày với người cao tuổi và phụ nữ, chúng tôi nhận ra một nỗi khó chịu chung mà ít ai nói thành lời: những ngày đèn đỏ bí bách, tràn ban đêm; những lần rỉ nước tiểu khi ho, hắt hơi khiến người ta ngại ra ngoài; làn da hăm đỏ vì băng vệ sinh, tã, bỉm dùng một lần. Nhiều người són tiểu nhẹ không muốn mặc bỉm, nhưng cũng chưa có lựa chọn nào kín đáo và dễ chịu hơn.</p>
        <p class="text-slate-700 leading-relaxed">Từ đó, ANTCARE quyết định tập trung vào đồ lót chức năng: những chiếc quần mặc như quần lót bình thường, nhưng có lõi thấm hút cho máu kinh hoặc nước tiểu rỉ nhẹ, giặt và dùng lại được.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Ý nghĩa tên "Kiến chăm tổ"</h2>
        <p class="text-slate-700 leading-relaxed">Đàn kiến nhỏ bé nhưng chăm chỉ và luôn chăm lo cho tổ của mình. ANTCARE giữ tinh thần ấy: chăm sóc người phụ nữ và gia đình bằng những điều nhỏ, dùng mỗi ngày, làm thật tận tâm.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Sứ mệnh, tầm nhìn, giá trị</h2>
        <p class="text-slate-700"><strong>Sứ mệnh:</strong> Giúp phụ nữ và người cao tuổi Việt thoải mái, tự tin trong những ngày đèn đỏ và với són tiểu nhẹ, bằng đồ lót chức năng an toàn, dễ dùng.</p>
        <p class="text-slate-700"><strong>Tầm nhìn:</strong> Trở thành thương hiệu đồ lót chức năng được phụ nữ Việt tin dùng, đồng hành qua các giai đoạn: tuổi dậy thì, đi làm, sau sinh, tiền mãn kinh và tuổi già.</p>
        <p class="text-slate-700"><strong>Giá trị:</strong> Trung thực (chỉ công bố điều đã kiểm chứng) · Thấu hiểu (thiết kế từ nhu cầu thật) · An toàn (chất liệu có chứng nhận) · Bền vững (dùng lại, giảm rác).</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Sản phẩm của ANTCARE</h2>
        <p><a href="/#quan-kinh-nguyet" class="font-bold text-[#6633B4] hover:underline">Quần kinh nguyệt</a>: Mặc như quần lót, thay băng vệ sinh ngày ra ít đến trung bình.</p>
        <p><a href="/#quan-chong-son-tieu" class="font-bold text-[#FD711A] hover:underline">Quần chống són tiểu</a>: Dành cho người són tiểu nhẹ khi ho, hắt hơi, vận động.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Cách ANTCARE chọn sản phẩm</h2>
        <p class="text-slate-700">Chúng tôi cam kết minh bạch chất liệu, lựa chọn nhà sản xuất có chứng nhận vải an toàn tra cứu được (như OEKO-TEX Standard 100), màng chống thấm không chứa hóa chất độc hại PFAS và công bố thông số dựa trên thử nghiệm thực tế.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Cẩm nang sức khỏe</h2>
        <p class="text-slate-700">ANTCARE xuất bản cẩm nang về kinh nguyệt và són tiểu bằng tiếng Việt, có dẫn nguồn từ WHO, NHS và các hiệp hội chuyên môn. Nội dung mang tính tham khảo, không thay thế tư vấn của bác sĩ.</p>
        <p><a href="/kinh-nguyet" class="text-[#6633B4] font-bold hover:underline">Cẩm nang Kinh nguyệt</a> | <a href="/son-tieu" class="text-[#FD711A] font-bold hover:underline">Cẩm nang Són tiểu</a></p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Hành trình: từ chăm sóc người cao tuổi đến đồ lót chức năng</h2>
        <p class="text-slate-700">ANTCARE từng cung cấp dịch vụ Trợ lý sức khỏe tại nhà và Đồng hành đi khám cho người cao tuổi ở Hà Nội và các tỉnh miền Bắc. Đây là nơi chúng tôi học được nhiều nhất về nhu cầu thật của người cao tuổi và phụ nữ. Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng; thông tin dịch vụ vẫn được giữ tại trang <a href="/cham-soc-nguoi-cao-tuoi" class="text-[#6633B4] font-bold hover:underline">/cham-soc-nguoi-cao-tuoi</a>.</p>
      </section>

      <section class="mb-10 space-y-2">
        <h2 class="text-2xl font-bold text-[#6633B4]">Liên hệ</h2>
        <p>Hotline / Zalo: <a href="tel:0969032360" class="text-[#FD711A] font-bold">0969 032 360</a></p>
        <p>Email: support@antcare.vn</p>
        <p>Địa chỉ: Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội</p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-[#6633B4] mb-4">Câu hỏi thường gặp về ANTCARE</h2>
        <dl class="space-y-4">
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">1. ANTCARE là gì?</dt>
            <dd class="text-slate-700 mt-1">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">2. ANTCARE có phải thương hiệu Việt Nam không?</dt>
            <dd class="text-slate-700 mt-1">Có. ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan các công ty nước ngoài có tên tương tự.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">3. Vì sao một đơn vị chăm sóc người cao tuổi lại làm đồ lót?</dt>
            <dd class="text-slate-700 mt-1">Vì khi chăm sóc người cao tuổi và phụ nữ, ANTCARE thấy són tiểu, kinh nguyệt và kích ứng do sản phẩm dùng một lần là nhu cầu rất thật nhưng ít được quan tâm.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">4. ANTCARE còn nhận dịch vụ chăm sóc người cao tuổi không?</dt>
            <dd class="text-slate-700 mt-1">Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được lưu giữ tại trang Chăm sóc người cao tuổi (antcare.vn/cham-soc-nguoi-cao-tuoi).</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">5. Mua sản phẩm ANTCARE ở đâu?</dt>
            <dd class="text-slate-700 mt-1">Sản phẩm đang chuẩn bị ra mắt; bạn có thể đăng ký nhận thông tin tại antcare.vn hoặc nhắn Zalo 0969 032 360 để được hỗ trợ sớm nhất.</dd>
          </div>
        </dl>
      </section>
    </main>
  \`;

  writeStaticPage({
    relativeUrl: '/ve-chung-toi',
    title: aboutTitle,
    description: aboutDesc,
    canonical: aboutUrl,
    ogImage: '/images/footer-logo.png',
    h1Title: 'Về ANTCARE – thương hiệu đồ lót chức năng bắt nguồn từ chăm sóc sức khỏe',
    bodyContent: aboutBody,
    jsonLd: aboutJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });

  // ==========================================
  // 2C. TRANG CHĂM SÓC NGƯỜI CAO TUỔI (/cham-soc-nguoi-cao-tuoi)
  // ==========================================
  const originUrl = "https://antcare.vn/cham-soc-nguoi-cao-tuoi";
  const originTitle = "Chăm sóc người cao tuổi Hà Nội – Khởi nguồn ANTCARE";
  const originDesc = "Dịch vụ Trợ lý sức khỏe và Đồng hành đi khám cho người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu. Dịch vụ đang tạm dừng nhận khách mới.";

  const originJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${originUrl}#webpage\`,
        "url": originUrl,
        "name": originTitle,
        "description": originDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${originUrl}#breadcrumb\`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://antcare.vn/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Chăm sóc người cao tuổi",
            "item": originUrl
          }
        ]
      }
    ]
  };

  const originBody = \`
    <main class="antcare-origin-prerender max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
        <a href="/" class="hover:underline">Trang chủ</a> / <span class="font-semibold text-slate-800">Chăm sóc người cao tuổi</span>
      </nav>
      <header class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-black text-[#1C1917] leading-tight mb-4">
          Chăm sóc người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu
        </h1>
        <div class="bg-[#FFF8F3] border-l-4 border-[#FD711A] p-5 rounded-r-2xl text-left my-6">
          <p class="text-base text-[#1f1a2b] leading-relaxed">
            <strong>Thông báo:</strong> Dịch vụ chăm sóc người cao tuổi của ANTCARE hiện tạm dừng nhận khách mới để tập trung phát triển đồ lót chức năng. Chúng tôi giữ lại trang này như một phần câu chuyện của ANTCARE. Nếu cần tư vấn, bạn vẫn có thể nhắn Zalo <a href="https://zalo.me/0969032360" class="text-[#FD711A] font-bold hover:underline">0969 032 360</a>.
          </p>
        </div>
        <div class="bg-white p-6 rounded-3xl border border-[#E8DFD5] my-6 space-y-3">
          <h2 class="text-xl font-bold text-[#6633B4]">Hành trình từ sự thấu hiểu</h2>
          <p class="text-slate-700 leading-relaxed">
            ANTCARE bắt đầu từ dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Trong quá trình đồng hành cùng các bác, các cô chú, chúng tôi nhận thấy nhiều người gặp tình trạng són tiểu nhẹ hoặc da bị kích ứng, hăm bí do dùng tã, bỉm và băng vệ sinh dùng một lần trong thời gian dài nhưng không có giải pháp thay thế kín đáo. Đó là lý do ANTCARE chuyển hướng tập trung nghiên cứu và phát triển dòng đồ lót chức năng giặt dùng lại.
          </p>
          <p><a href="/" class="inline-block px-6 py-2.5 rounded-full bg-[#6633B4] text-white font-bold text-sm">Xem quần kinh nguyệt & quần chống són tiểu →</a></p>
        </div>
      </header>

      <section id="dich-vu" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-bold text-[#1C1917] mb-6">3 Dịch vụ chăm sóc người cao tuổi tại Hà Nội</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-2xl border border-[#E8DFD5]">
            <h3 class="text-lg font-bold text-[#6633B4] mb-2">Trợ lý Sức Khỏe</h3>
            <p class="text-sm text-slate-600 mb-4">Kiểm tra chỉ số sinh tồn (huyết áp, nhịp tim, SpO2, đường huyết), bài tập vận động thể chất & trí não, nhắc nhở uống thuốc và trò chuyện cùng ông bà.</p>
            <a href="https://zalo.me/0969032360" class="text-[#6633B4] font-bold text-sm">Nhắn Zalo →</a>
          </div>
          <div class="p-6 bg-white rounded-2xl border-2 border-[#FD711A]">
            <h3 class="text-lg font-bold text-[#FD711A] mb-2">Đồng Hành Khám Bệnh</h3>
            <p class="text-sm text-slate-600 mb-4">Đưa đón, hỗ trợ lấy số, làm thủ tục BHYT tại các bệnh viện lớn ở Hà Nội và báo cáo dặn dò của bác sĩ cho gia đình.</p>
            <a href="https://zalo.me/0969032360" class="text-[#FD711A] font-bold text-sm">Nhắn Zalo →</a>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-[#E8DFD5]">
            <h3 class="text-lg font-bold text-[#6633B4] mb-2">An Tâm Nhà Cửa</h3>
            <p class="text-sm text-slate-600 mb-4">Đánh giá nguy cơ té ngã, sắp xếp không gian sống thoáng đãng, an toàn và hỗ trợ sinh hoạt hàng ngày cho ông bà.</p>
            <a href="https://zalo.me/0969032360" class="text-[#6633B4] font-bold text-sm">Nhắn Zalo →</a>
          </div>
        </div>
      </section>

      <section id="bang-gia-chi-tiet" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-bold text-[#1C1917] mb-4">Bảng giá dịch vụ chăm sóc người cao tuổi</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-sm border border-[#E8DFD5]">
            <thead>
              <tr class="bg-[#F6F1FC] text-[#6633B4]">
                <th class="p-3">Gói dịch vụ</th>
                <th class="p-3">Thời lượng / Nội dung</th>
                <th class="p-3 text-right">Chi phí</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E8DFD5]">
              <tr><td class="p-3 font-semibold">Trợ lý Sức Khỏe tại nhà</td><td class="p-3">Gói Đồng Hành (4 ca/tháng, 1.5h/ca)</td><td class="p-3 text-right font-bold text-[#FD711A]">1.400.000 / tháng</td></tr>
              <tr><td class="p-3 font-semibold">Trợ lý Sức Khỏe tại nhà</td><td class="p-3">Gói Gắn Kết (8 ca/tháng, 1.5h/ca)</td><td class="p-3 text-right font-bold text-[#FD711A]">2.600.000 / tháng</td></tr>
              <tr><td class="p-3 font-semibold">Trợ lý Sức Khỏe tại nhà</td><td class="p-3">Gói Yêu Thương (12 ca/tháng, 1.5h/ca)</td><td class="p-3 text-right font-bold text-[#FD711A]">3.600.000 / tháng</td></tr>
              <tr><td class="p-3 font-semibold">Đồng Hành Khám Bệnh</td><td class="p-3">Khám nhanh buổi sáng (≤ 3 giờ)</td><td class="p-3 text-right font-bold text-[#FD711A]">390.000 / lần</td></tr>
              <tr><td class="p-3 font-semibold">Đồng Hành Khám Bệnh</td><td class="p-3">Khám tiêu chuẩn nửa ngày (≤ 4 giờ)</td><td class="p-3 text-right font-bold text-[#FD711A]">490.000 / lần</td></tr>
              <tr><td class="p-3 font-semibold">Đồng Hành Khám Bệnh</td><td class="p-3">Khám chuyên sâu cả ngày (≤ 6–8 giờ)</td><td class="p-3 text-right font-bold text-[#FD711A]">600.000 – 690.000 / lần</td></tr>
              <tr><td class="p-3 font-semibold">An Tâm Nhà Cửa</td><td class="p-3">Ca dọn dẹp, chống trượt, an toàn (3h/ca)</td><td class="p-3 text-right font-bold text-[#FD711A]">1.200.000 / tháng</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  \`;

  writeStaticPage({
    relativeUrl: '/cham-soc-nguoi-cao-tuoi',
    title: originTitle,
    description: originDesc,
    canonical: originUrl,
    ogImage: '/images/footer-logo.png',
    h1Title: 'Chăm sóc người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu',
    bodyContent: originBody,
    jsonLd: originJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });
`;

// Insert after Section 2 writeStaticPage
content = content.replace("writeStaticPage({\n    relativeUrl: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi',", dedicatedPagesCode + "\n  writeStaticPage({\n    relativeUrl: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi',");

fs.writeFileSync('scripts/prerender.js', content);
console.log('Successfully injected dedicated pages in prerender.js');

