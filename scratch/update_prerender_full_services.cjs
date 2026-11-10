const fs = require('fs');
const path = require('path');

const prerenderPath = path.join(__dirname, '..', 'scripts', 'prerender.js');
let prerenderCode = fs.readFileSync(prerenderPath, 'utf8');

// 1. Remove notice in Medical Escort prerender
prerenderCode = prerenderCode.replace(
  /<div class="bg-\[#FFF8F3\] border-l-4 border-\[#FD711A\] p-5 rounded-r-2xl text-left my-6">[\s\S]*?<\/div>/g,
  ''
);

// 2. Remove notice in FAQ entries
prerenderCode = prerenderCode.replace(
  /"text": "Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện đang tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được giữ tại trang Chăm sóc người cao tuổi."/g,
  '"text": "ANTCARE cung cấp các dịch vụ chăm sóc người cao tuổi tại Hà Nội: Trợ lý sức khỏe tại nhà, đưa người cao tuổi đi khám bệnh viện và giải pháp an tâm nhà cửa."'
);
prerenderCode = prerenderCode.replace(
  /<dd class="text-slate-700 mt-1">Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện đang tạm dừng nhận khách mới để tập trung vào đồ lót chức năng\. Thông tin dịch vụ vẫn được giữ tại trang Chăm sóc người cao tuổi \(\/cham-soc-nguoi-cao-tuoi\)\.<\/dd>/g,
  '<dd class="text-slate-700 mt-1">ANTCARE cung cấp các dịch vụ chăm sóc người cao tuổi tại Hà Nội: Trợ lý sức khỏe tại nhà, đưa người cao tuổi đi khám bệnh viện và giải pháp an tâm nhà cửa. Chi tiết xem tại trang <a href="/dich-vu" class="text-[#6633B4] font-bold hover:underline">/dich-vu</a>.</dd>'
);

prerenderCode = prerenderCode.replace(
  /"text": "Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được lưu giữ tại trang Chăm sóc người cao tuổi \(antcare\.vn\/cham-soc-nguoi-cao-tuoi\)\."/g,
  '"text": "ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội bao gồm Trợ lý sức khỏe tại nhà và Đồng hành đi khám bệnh. Chi tiết tại antcare.vn/dich-vu."'
);
prerenderCode = prerenderCode.replace(
  /<dd class="text-slate-700 mt-1">Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng\. Thông tin dịch vụ vẫn được lưu giữ tại trang Chăm sóc người cao tuổi \(antcare\.vn\/cham-soc-nguoi-cao-tuoi\)\.<\/dd>/g,
  '<dd class="text-slate-700 mt-1">ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội; chi tiết xem tại <a href="/dich-vu" class="text-[#6633B4] font-bold hover:underline">/dich-vu</a>.</dd>'
);
prerenderCode = prerenderCode.replace(
  /Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng; thông tin dịch vụ vẫn được giữ tại trang <a href="\/cham-soc-nguoi-cao-tuoi" class="text-\[#6633B4\] font-bold hover:underline">\/cham-soc-nguoi-cao-tuoi<\/a>\./g,
  'ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội; thông tin dịch vụ chi tiết được cung cấp tại trang <a href="/dich-vu" class="text-[#6633B4] font-bold hover:underline">/dich-vu</a>.'
);

// 3. Update Section 2C: Full Services Body & writeStaticPage for both /dich-vu and /cham-soc-nguoi-cao-tuoi
const fullServicesBody = `
    <main class="antcare-service-prerender max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
        <a href="/" class="hover:underline">Trang chủ</a> / <span class="font-semibold text-slate-800">Dịch vụ chăm sóc người cao tuổi</span>
      </nav>
      
      <header class="mb-10 text-center md:text-left">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FD711A]/10 text-[#FD711A] text-xs font-bold uppercase tracking-wider mb-3">
          Chuẩn quốc tế tại Hà Nội
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917] leading-tight mb-4">
          Dịch vụ chăm sóc người cao tuổi tại Hà Nội | ANTCARE — Kiến chăm tổ
        </h1>
        <p class="text-lg text-slate-700 max-w-3xl leading-relaxed">
          ANTCARE mang đến giải pháp trợ lý sức khỏe tại nhà, đưa đón người cao tuổi đi khám bệnh tại các bệnh viện lớn và hỗ trợ an tâm không gian sống cho gia đình bạn.
        </p>
        <div class="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="tel:0969032360" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] text-white font-bold text-sm shadow-md hover:bg-[#e05e0f] transition-all">
            <span>📞 Hotline: 0969 032 360</span>
          </a>
          <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#6633B4] border border-[#6633B4] font-bold text-sm hover:bg-[#6633B4]/5 transition-all">
            <span>💬 Tư vấn Zalo</span>
          </a>
        </div>
      </header>

      <!-- 3 Core Services -->
      <section id="giai-phap-cham-soc" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-6">Giải pháp chăm sóc người cao tuổi toàn diện</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-3xl border border-[#E8DFD5] shadow-xs hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center text-2xl font-bold mb-4">🩺</div>
            <h3 class="text-xl font-bold text-[#6633B4] mb-3">Trợ lý Sức Khỏe tại nhà</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Đo và ghi nhận 5 chỉ số sinh tồn (huyết áp, nhịp tim, đường huyết, nhiệt độ, SpO2). Hướng dẫn bài tập vận động chuẩn Senior Fitness, nhắc nhở uống thuốc và trò chuyện tinh thần cùng ông bà.
            </p>
            <a href="https://zalo.me/0969032360" class="text-[#6633B4] font-bold text-sm hover:underline">Tư vấn gói tại nhà →</a>
          </div>

          <div class="p-6 bg-white rounded-3xl border-2 border-[#FD711A] shadow-xs hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#FD711A]/10 text-[#FD711A] flex items-center justify-center text-2xl font-bold mb-4">🏥</div>
            <h3 class="text-xl font-bold text-[#FD711A] mb-3">Đồng Hành Khám Bệnh viện</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Kiến Y tế đón ông bà tận nhà, định vị AirTag suốt buổi khám, làm thủ tục BHYT tại Bạch Mai, Lão Khoa, Việt Đức... Ghi lại lời bác sĩ dặn và gửi báo cáo chi tiết về cho người nhà.
            </p>
            <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" class="text-[#FD711A] font-bold text-sm hover:underline">Chi tiết dịch vụ đưa đi khám →</a>
          </div>

          <div class="p-6 bg-white rounded-3xl border border-[#E8DFD5] shadow-xs hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center text-2xl font-bold mb-4">🏡</div>
            <h3 class="text-xl font-bold text-[#6633B4] mb-3">An Tâm Nhà Cửa & Hỗ Trợ</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Khảo sát đánh giá nguy cơ té ngã trong nhà, hỗ trợ chống trượt nhà tắm, sắp xếp đồ dùng vừa tầm với ông bà và chăm sóc không gian sống an toàn, ấm áp.
            </p>
            <a href="https://zalo.me/0969032360" class="text-[#6633B4] font-bold text-sm hover:underline">Tư vấn gói nhà cửa →</a>
          </div>
        </div>
      </section>

      <!-- Pricing Table -->
      <section id="bang-gia-chi-tiet" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-4">Bảng giá dịch vụ chăm sóc người cao tuổi minh bạch</h2>
        <p class="text-sm text-slate-600 mb-6">Mọi chi phí đều được công khai rõ ràng, không phát sinh phụ phí ẩn.</p>
        <div class="overflow-x-auto rounded-2xl border border-[#E8DFD5]">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#F6F1FC] text-[#6633B4]">
                <th class="p-4 font-bold">Gói dịch vụ</th>
                <th class="p-4 font-bold">Thời lượng & Nội dung</th>
                <th class="p-4 font-bold text-right">Chi phí niêm yết</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E8DFD5] bg-white">
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Trợ lý Sức Khỏe – Gói Đồng Hành</td>
                <td class="p-4 text-slate-600">4 ca/tháng (1.5 giờ/ca), đo sinh tồn & bài tập thể chất</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">1.400.000đ / tháng</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Trợ lý Sức Khỏe – Gói Gắn Kết</td>
                <td class="p-4 text-slate-600">8 ca/tháng (1.5 giờ/ca), theo dõi chỉ số tuần 2 lần</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">2.600.000đ / tháng</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Trợ lý Sức Khỏe – Gói Yêu Thương</td>
                <td class="p-4 text-slate-600">12 ca/tháng (1.5 giờ/ca), chăm sóc toàn diện 3 buổi/tuần</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">3.600.000đ / tháng</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Đồng Hành Đi Khám – Buổi sáng</td>
                <td class="p-4 text-slate-600">Khám nhanh buổi sáng (≤ 3 giờ), đón tận nhà, làm thủ tục</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">390.000đ / lần</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Đồng Hành Đi Khám – Nửa ngày</td>
                <td class="p-4 text-slate-600">Khám tiêu chuẩn (≤ 4 giờ), phù hợp xét nghiệm máu, chụp chiếu</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">490.000đ / lần</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Đồng Hành Đi Khám – Cả ngày</td>
                <td class="p-4 text-slate-600">Khám chuyên sâu (≤ 6–8 giờ), hỗ trợ nhiều chuyên khoa</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">600.000đ – 690.000đ / lần</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">An Tâm Nhà Cửa</td>
                <td class="p-4 text-slate-600">Khảo sát nguy cơ té ngã, sắp xếp và hỗ trợ sinh hoạt</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">1.200.000đ / tháng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Why Choose ANTCARE -->
      <section id="tai-sao-la-antcare" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-6">Tại sao gia đình tin chọn ANTCARE — Kiến chăm tổ?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">🎓</span>
            <h4 class="font-bold text-[#6633B4] mb-1">100% Nhân sự Y tế</h4>
            <p class="text-xs text-slate-600">Kiến Y tế tốt nghiệp chuyên ngành y tế/điều dưỡng và chứng chỉ sơ cấp cứu.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">📱</span>
            <h4 class="font-bold text-[#6633B4] mb-1">Báo Cáo Minh Bạch</h4>
            <p class="text-xs text-slate-600">Cập nhật chỉ số sinh tồn và hình ảnh chăm sóc số hóa gửi ngay về gia đình.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">🎯</span>
            <h4 class="font-bold text-[#6633B4] mb-1">Cá Nhân Hóa</h4>
            <p class="text-xs text-slate-600">Lập kế hoạch chăm sóc riêng phù hợp thể trạng và thói quen sinh hoạt của từng cụ.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">❤️</span>
            <h4 class="font-bold text-[#6633B4] mb-1">Tận Tâm Như Con Cháu</h4>
            <p class="text-xs text-slate-600">Lắng nghe, thấu hiểu tâm lý người già, đem lại niềm vui và sự an tâm tuyệt đối.</p>
          </div>
        </div>
      </section>

      <!-- 4-Step Process -->
      <section id="quy-trinh-hoat-dong" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-6">Quy trình 4 bước bắt đầu dịch vụ</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 1</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Tiếp nhận yêu cầu</h4>
            <p class="text-xs text-slate-600">Tư vấn qua điện thoại/Zalo để nắm rõ tình trạng sức khỏe của ông bà.</p>
          </div>
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 2</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Khảo sát & Kế hoạch</h4>
            <p class="text-xs text-slate-600">Thăm nhà miễn phí, đánh giá thể trạng và thống nhất lịch trình chăm sóc.</p>
          </div>
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 3</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Thực hiện chăm sóc</h4>
            <p class="text-xs text-slate-600">Kiến Y tế đến đúng giờ, thực hiện quy trình chuyên môn chuẩn Senior Care.</p>
          </div>
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 4</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Báo cáo & Đồng hành</h4>
            <p class="text-xs text-slate-600">Gửi kết quả, chỉ số sinh tồn sau mỗi buổi và tinh chỉnh kế hoạch định kỳ.</p>
          </div>
        </div>
      </section>
    </main>
`;

// Replace Section 2C block
const section2CRegex = /\/\/ ==========================================\s*\/\/ 2C\. TRANG CHĂM SÓC NGƯỜI CAO TUỔI[\s\S]*?writeStaticPage\({\s*relativeUrl:\s*'\/cham-soc-nguoi-cao-tuoi',[\s\S]*?changefreq:\s*'weekly'\s*}\);/;

const newSection2C = `// ==========================================
  // 2C. TRANG DỊCH VỤ & CHĂM SÓC NGƯỜI CAO TUỔI (/dich-vu & /cham-soc-nguoi-cao-tuoi)
  // ==========================================
  const serviceMainUrl = "https://antcare.vn/dich-vu";
  const serviceMainTitle = "Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ";
  const serviceMainDesc = "ANTCARE — Kiến chăm tổ cung cấp dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà, trợ lý sức khỏe và hỗ trợ y tế. Hotline: 0969 032 360.";

  const serviceMainJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${serviceMainUrl}#webpage\`,
        "url": serviceMainUrl,
        "name": serviceMainTitle,
        "description": serviceMainDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${serviceMainUrl}#breadcrumb\`,
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
            "name": "Dịch vụ",
            "item": serviceMainUrl
          }
        ]
      }
    ]
  };

  const serviceBodyContent = \`${fullServicesBody}\`;

  writeStaticPage({
    relativeUrl: '/dich-vu',
    title: serviceMainTitle,
    description: serviceMainDesc,
    canonical: serviceMainUrl,
    ogImage: '/images/footer-logo.png',
    h1Title: 'Dịch vụ chăm sóc người cao tuổi tại Hà Nội | ANTCARE — Kiến chăm tổ',
    bodyContent: serviceBodyContent,
    jsonLd: serviceMainJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });

  writeStaticPage({
    relativeUrl: '/cham-soc-nguoi-cao-tuoi',
    title: serviceMainTitle,
    description: serviceMainDesc,
    canonical: 'https://antcare.vn/cham-soc-nguoi-cao-tuoi',
    ogImage: '/images/footer-logo.png',
    h1Title: 'Dịch vụ chăm sóc người cao tuổi tại Hà Nội | ANTCARE — Kiến chăm tổ',
    bodyContent: serviceBodyContent,
    jsonLd: serviceMainJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });`;

if (section2CRegex.test(prerenderCode)) {
  prerenderCode = prerenderCode.replace(section2CRegex, newSection2C);
  console.log('Replaced Section 2C with full services body for /dich-vu and /cham-soc-nguoi-cao-tuoi');
} else {
  console.warn('Could not match section2CRegex in prerender.js!');
}

// 4. Remove /dich-vu -> / redirect rule from prerender.js
prerenderCode = prerenderCode.replace(/{\s*source:\s*'\/dich-vu',\s*target:\s*'\/'\s*},\r?\n?/, '');

// 5. Update /giai-phap-cham-soc to point to /dich-vu
prerenderCode = prerenderCode.replace(/target:\s*'\/cham-soc-nguoi-cao-tuoi'/g, "target: '/dich-vu'");

fs.writeFileSync(prerenderPath, prerenderCode, 'utf8');
console.log('Updated scripts/prerender.js successfully');

