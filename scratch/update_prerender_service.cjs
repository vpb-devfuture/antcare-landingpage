const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.js', 'utf-8');

// 1. Update Service section in prerender.js
const oldServiceJsonLd = `  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": \`\${serviceUrl}#breadcrumb\`,
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
            "name": "Đưa người cao tuổi đi khám",
            "item": serviceUrl
          }
        ]
      },
      {
        "@type": "Service",
        "@id": \`\${serviceUrl}#service\`,
        "name": "Dịch vụ đưa người cao tuổi đi khám",
        "serviceType": "Đồng hành khám bệnh",
        "provider": {
          "@type": "Organization",
          "name": "ANTCARE",
          "url": "https://antcare.vn",
          "telephone": "+84969032360",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tòa Rox Tower, 138 Hồ Tùng Mậu",
            "addressLocality": "Hà Nội",
            "addressCountry": "VN"
          }
        },
        "areaServed": ["Hà Nội", "Miền Bắc Việt Nam"],
        "offers": [
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 3 giờ)",
            "price": "390000",
            "priceCurrency": "VND",
            "description": "Thời lượng 3 giờ"
          },
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 4 giờ)",
            "price": "490000",
            "priceCurrency": "VND",
            "description": "Thời lượng 4 giờ"
          },
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 6 giờ)",
            "price": "690000",
            "priceCurrency": "VND",
            "description": "Thời lượng 6 giờ"
          },
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 8 giờ)",
            "price": "790000",
            "priceCurrency": "VND",
            "description": "Thời lượng 8 giờ"
          }
        ]
      },
      {
        "@type": "FAQPage",`;

const newServiceJsonLd = `  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": \`\${serviceUrl}#breadcrumb\`,
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
            "item": "https://antcare.vn/cham-soc-nguoi-cao-tuoi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Đưa người cao tuổi đi khám",
            "item": serviceUrl
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": \`\${serviceUrl}#webpage\`,
        "url": serviceUrl,
        "name": serviceTitle,
        "description": serviceDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "FAQPage",`;

content = content.replace(oldServiceJsonLd, newServiceJsonLd);

// 2. Update serviceBody breadcrumb & add pause notice
const oldServiceHeader = `<a href="/#dich-vu" class="hover:text-[#6633B4] transition-colors">Dịch vụ</a>
        <span class="text-slate-400">/</span>
        <span class="text-slate-800 font-semibold" aria-current="page">Đưa người cao tuổi đi khám</span>
      </nav>
    </div>

    <article class="max-w-5xl mx-auto px-4 sm:px-6">
      <header class="pt-2 pb-8 border-b border-purple-100">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-4">
          <span class="material-symbols-outlined text-sm">medical_services</span> Dịch vụ y tế chuyên biệt Hà Nội
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
          Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội
        </h1>`;

const newServiceHeader = `<a href="/cham-soc-nguoi-cao-tuoi" class="hover:text-[#6633B4] transition-colors">Chăm sóc người cao tuổi</a>
        <span class="text-slate-400">/</span>
        <span class="text-slate-800 font-semibold" aria-current="page">Đưa người cao tuổi đi khám</span>
      </nav>
    </div>

    <article class="max-w-5xl mx-auto px-4 sm:px-6">
      <header class="pt-2 pb-8 border-b border-purple-100">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-4">
          <span class="material-symbols-outlined text-sm">medical_services</span> Dịch vụ y tế chuyên biệt Hà Nội
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
          Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội
        </h1>
        <div class="bg-[#FFF8F3] border-l-4 border-[#FD711A] p-4 sm:p-5 rounded-r-2xl shadow-xs mb-6 text-left">
          <p class="text-sm sm:text-base text-[#1f1a2b] leading-relaxed">
            <strong>Thông báo:</strong> Dịch vụ chăm sóc người cao tuổi của ANTCARE hiện tạm dừng nhận khách mới để tập trung phát triển đồ lót chức năng. Chúng tôi giữ lại trang này như một phần câu chuyện của ANTCARE. Nếu cần tư vấn, bạn vẫn có thể nhắn Zalo <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="text-[#FD711A] font-bold hover:underline">0969 032 360</a>.
          </p>
        </div>`;

content = content.replace(oldServiceHeader, newServiceHeader);

// Update link /#bang-gia-chi-tiet and /#dich-vu in service body
content = content.replace(/href="\/#bang-gia-chi-tiet"/g, 'href="/cham-soc-nguoi-cao-tuoi#bang-gia-chi-tiet"');
content = content.replace(/href="\/#dich-vu"/g, 'href="/cham-soc-nguoi-cao-tuoi#dich-vu"');

fs.writeFileSync('scripts/prerender.js', content);
console.log('Successfully updated Service section in prerender.js');

