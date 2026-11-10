const fs = require('fs');

let content = fs.readFileSync('src/pages/MedicalEscortService.jsx', 'utf-8');

// 1. Update breadcrumb JSON-LD
const oldBreadcrumb = `    // BreadcrumbList JSON-LD: 2 levels only (Trang chủ > Đưa người cao tuổi đi khám)
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "item": canonicalUrl
        }
      ]
    };`;

const newBreadcrumb = `    // BreadcrumbList JSON-LD: 3 levels (Trang chủ > Chăm sóc người cao tuổi > Đưa người cao tuổi đi khám)
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "item": canonicalUrl
        }
      ]
    };`;

content = content.replace(oldBreadcrumb, newBreadcrumb);

// 2. Update visual breadcrumb
const oldVisualBreadcrumb = `<nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <Link to="/" className="hover:text-[#6633B4] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <Link to="/#dich-vu" className="hover:text-[#6633B4] transition-colors">
            Dịch vụ
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-semibold" aria-current="page">
            Đưa người cao tuổi đi khám
          </span>
        </nav>`;

const newVisualBreadcrumb = `<nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <Link to="/" className="hover:text-[#6633B4] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <Link to="/cham-soc-nguoi-cao-tuoi" className="hover:text-[#6633B4] transition-colors">
            Chăm sóc người cao tuổi
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-semibold" aria-current="page">
            Đưa người cao tuổi đi khám
          </span>
        </nav>`;

content = content.replace(oldVisualBreadcrumb, newVisualBreadcrumb);

// 3. Add pause notice block right below H1
const targetH1 = `<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
            Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội
          </h1>`;

const h1WithNotice = `<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
            Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội
          </h1>

          {/* Pause notification banner */}
          <div className="bg-[#FFF8F3] border-l-4 border-[#FD711A] p-4 sm:p-5 rounded-r-2xl shadow-xs mb-6 text-left">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#FD711A] text-2xl shrink-0 mt-0.5">info</span>
              <p className="text-sm sm:text-base text-[#1f1a2b] leading-relaxed">
                <strong>Thông báo:</strong> Dịch vụ chăm sóc người cao tuổi của ANTCARE hiện tạm dừng nhận khách mới để tập trung phát triển đồ lót chức năng. Chúng tôi giữ lại trang này như một phần câu chuyện của ANTCARE. Nếu cần tư vấn, bạn vẫn có thể nhắn Zalo <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" className="text-[#FD711A] font-bold hover:underline">0969 032 360</a>.
              </p>
            </div>
          </div>`;

content = content.replace(targetH1, h1WithNotice);

// 4. Replace remaining anchor links to elderly care page
content = content.replace(/to="\/#bang-gia-chi-tiet"/g, 'to="/cham-soc-nguoi-cao-tuoi#bang-gia-chi-tiet"');
content = content.replace(/href="\/#bang-gia-chi-tiet"/g, 'href="/cham-soc-nguoi-cao-tuoi#bang-gia-chi-tiet"');
content = content.replace(/to="\/#dich-vu"/g, 'to="/cham-soc-nguoi-cao-tuoi#dich-vu"');
content = content.replace(/href="\/#dich-vu"/g, 'href="/cham-soc-nguoi-cao-tuoi#dich-vu"');

fs.writeFileSync('src/pages/MedicalEscortService.jsx', content);
console.log('Successfully updated MedicalEscortService.jsx');

