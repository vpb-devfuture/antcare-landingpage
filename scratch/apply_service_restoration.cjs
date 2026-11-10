const fs = require('fs');
const path = require('path');

// 1. Update src/config/menu.json
const menuPath = path.join(__dirname, '..', 'src', 'config', 'menu.json');
const menuData = [
  {
    "id": "products",
    "path": "/#quan-lot-tham-hut",
    "i18nKey": "menu.products"
  },
  {
    "id": "about",
    "path": "/ve-chung-toi",
    "i18nKey": "menu.about"
  },
  {
    "id": "handbook",
    "path": "/kinh-nguyet",
    "i18nKey": "menu.handbook",
    "children": [
      {
        "id": "handbook_period",
        "path": "/kinh-nguyet",
        "i18nKey": "menu.handbook_period"
      },
      {
        "id": "handbook_incontinence",
        "path": "/son-tieu",
        "i18nKey": "menu.handbook_incontinence"
      }
    ]
  },
  {
    "id": "news",
    "path": "/news",
    "i18nKey": "menu.news"
  },
  {
    "id": "services",
    "path": "/dich-vu",
    "i18nKey": "menu.services"
  }
];
fs.writeFileSync(menuPath, JSON.stringify(menuData, null, 2) + '\n', 'utf8');
console.log('Updated src/config/menu.json');

// 2. Update src/App.jsx
const appPath = path.join(__dirname, '..', 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// Replace ElderlyCareOrigin import if present
appCode = appCode.replace(/import ElderlyCareOrigin from '\.\/pages\/ElderlyCareOrigin';\r?\n?/, '');

// Replace title & meta logic for services
const oldTitleCheck = `} else if (cleanPath === '/cham-soc-nguoi-cao-tuoi' || cleanPath === '/giai-phap-cham-soc') {\r
      document.title = "Chăm sóc người cao tuổi Hà Nội – Khởi nguồn ANTCARE";\r
      if (metaDesc) metaDesc.content = "Dịch vụ Trợ lý sức khỏe và Đồng hành đi khám cho người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu. Dịch vụ đang tạm dừng nhận khách mới.";`;

const newTitleCheck = `} else if (cleanPath === '/dich-vu' || cleanPath === '/cham-soc-nguoi-cao-tuoi' || cleanPath === '/giai-phap-cham-soc') {\r
      document.title = "Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ";\r
      if (metaDesc) metaDesc.content = "ANTCARE — Kiến chăm tổ cung cấp dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà, trợ lý sức khỏe và hỗ trợ y tế. Hotline: 0969 032 360.";`;

if (appCode.includes(oldTitleCheck)) {
  appCode = appCode.replace(oldTitleCheck, newTitleCheck);
} else {
  // Try regex replacement for flexible line endings
  appCode = appCode.replace(
    /} else if \(cleanPath === '\/cham-soc-nguoi-cao-tuoi' \|\| cleanPath === '\/giai-phap-cham-soc'\) {[\s\S]*?Dịch vụ đang tạm dừng nhận khách mới\.";/,
    `} else if (cleanPath === '/dich-vu' || cleanPath === '/cham-soc-nguoi-cao-tuoi' || cleanPath === '/giai-phap-cham-soc') {\n      document.title = "Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ";\n      if (metaDesc) metaDesc.content = "ANTCARE — Kiến chăm tổ cung cấp dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà, trợ lý sức khỏe và hỗ trợ y tế. Hotline: 0969 032 360.";`
  );
}

// Update routes
const oldServiceRouteGroup = `<Route index element={<Home />} />\r
        <Route path="giai-phap-cham-soc" element={<Navigate to="/cham-soc-nguoi-cao-tuoi" replace />} />\r
        <Route path="dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" element={<MedicalEscortService />} />\r
        \r
        {/* 301 Redirects for consolidated articles & service root */}\r
        <Route path="dich-vu" element={<Navigate to="/" replace />} />`;

const newServiceRouteGroup = `<Route index element={<Home />} />\r
        <Route path="dich-vu" element={<LandingPage />} />\r
        <Route path="cham-soc-nguoi-cao-tuoi" element={<LandingPage />} />\r
        <Route path="giai-phap-cham-soc" element={<LandingPage />} />\r
        <Route path="dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" element={<MedicalEscortService />} />`;

if (appCode.includes(oldServiceRouteGroup)) {
  appCode = appCode.replace(oldServiceRouteGroup, newServiceRouteGroup);
} else {
  // Flexible regex
  appCode = appCode.replace(
    /<Route index element={<Home \/>} \/>[\s\S]*?<Route path="dich-vu" element={<Navigate to="\/" replace \/>} \/>/,
    `<Route index element={<Home />} />\n        <Route path="dich-vu" element={<LandingPage />} />\n        <Route path="cham-soc-nguoi-cao-tuoi" element={<LandingPage />} />\n        <Route path="giai-phap-cham-soc" element={<LandingPage />} />\n        <Route path="dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" element={<MedicalEscortService />} />`
  );
}

// Also remove duplicate elderly route near bottom if present
appCode = appCode.replace(/<Route path="cham-soc-nguoi-cao-tuoi" element={<ElderlyCareOrigin \/>} \/>\r?\n?/, '');

fs.writeFileSync(appPath, appCode, 'utf8');
console.log('Updated src/App.jsx');

// 3. Update src/components/Footer.jsx
const footerPath = path.join(__dirname, '..', 'src', 'components', 'Footer.jsx');
let footerCode = fs.readFileSync(footerPath, 'utf8');
footerCode = footerCode.replace('to="/cham-soc-nguoi-cao-tuoi">{isEn ? \'Services\' : \'Dịch vụ\'}', 'to="/dich-vu">{isEn ? \'Services\' : \'Dịch vụ\'}');
fs.writeFileSync(footerPath, footerCode, 'utf8');
console.log('Updated src/components/Footer.jsx');

// 4. Update src/pages/MedicalEscortService.jsx
const escortPath = path.join(__dirname, '..', 'src', 'pages', 'MedicalEscortService.jsx');
let escortCode = fs.readFileSync(escortPath, 'utf8');
// Remove pause notification banner
const noticeBannerRegex = /{\/\* Pause notification banner \*\/}[\s\S]*?<\/div>\s*<\/div>/;
if (noticeBannerRegex.test(escortCode)) {
  escortCode = escortCode.replace(noticeBannerRegex, '');
  fs.writeFileSync(escortPath, escortCode, 'utf8');
  console.log('Removed pause notice from MedicalEscortService.jsx');
}

// 5. Update src/pages/Home.jsx
const homePath = path.join(__dirname, '..', 'src', 'pages', 'Home.jsx');
let homeCode = fs.readFileSync(homePath, 'utf8');
const oldHomeFaq = `Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện đang tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được lưu giữ tại trang <Link to="/cham-soc-nguoi-cao-tuoi" className="text-[#6633B4] font-bold underline">Chăm sóc người cao tuổi</Link>.`;
const newHomeFaq = `ANTCARE cung cấp các dịch vụ chăm sóc sức khỏe người cao tuổi tại Hà Nội bao gồm: Trợ lý sức khỏe tại nhà, đưa người cao tuổi đi khám bệnh viện và giải pháp an tâm nhà cửa. Quý khách có thể xem thông tin chi tiết tại trang <Link to="/dich-vu" className="text-[#6633B4] font-bold underline">Dịch vụ</Link> hoặc liên hệ Hotline 0969 032 360.`;
if (homeCode.includes(oldHomeFaq)) {
  homeCode = homeCode.replace(oldHomeFaq, newHomeFaq);
  fs.writeFileSync(homePath, homeCode, 'utf8');
  console.log('Updated FAQ 6 in src/pages/Home.jsx');
}

// 6. Update src/pages/AboutUsNew.jsx
const aboutPath = path.join(__dirname, '..', 'src', 'pages', 'AboutUsNew.jsx');
let aboutCode = fs.readFileSync(aboutPath, 'utf8');
aboutCode = aboutCode.replace(
  'Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được lưu giữ tại trang Chăm sóc người cao tuổi (antcare.vn/cham-soc-nguoi-cao-tuoi).',
  'ANTCARE duy trì các dịch vụ chăm sóc sức khỏe người cao tuổi tại Hà Nội bao gồm: Trợ lý sức khỏe tại nhà và Đồng hành đi khám bệnh. Chi tiết xem tại trang Dịch vụ (antcare.vn/dich-vu).'
);
aboutCode = aboutCode.replace(
  'Hiện ANTCARE tạm dừng nhận khách mới cho mảng dịch vụ để tập trung vào đồ lót chức năng; thông tin dịch vụ vẫn được giữ tại trang <Link to="/cham-soc-nguoi-cao-tuoi" className="text-[#6633B4] font-bold hover:underline">/cham-soc-nguoi-cao-tuoi</Link>.',
  'ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội; thông tin dịch vụ chi tiết được cung cấp tại trang <Link to="/dich-vu" className="text-[#6633B4] font-bold hover:underline">/dich-vu</Link>.'
);
fs.writeFileSync(aboutPath, aboutCode, 'utf8');
console.log('Updated src/pages/AboutUsNew.jsx');

// 7. Update vercel.json
const vercelPath = path.join(__dirname, '..', 'vercel.json');
const vercelData = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
// Filter out /dich-vu -> / redirects
vercelData.redirects = vercelData.redirects.filter(r => {
  if (r.source === '/dich-vu' && r.destination === '/') return false;
  if (r.source === '/dich-vu/' && r.destination === '/') return false;
  return true;
});
// Update /giai-phap-cham-soc to /dich-vu
vercelData.redirects.forEach(r => {
  if (r.source === '/giai-phap-cham-soc' || r.source === '/giai-phap-cham-soc/') {
    r.destination = '/dich-vu';
  }
});
fs.writeFileSync(vercelPath, JSON.stringify(vercelData, null, 2) + '\n', 'utf8');
console.log('Updated vercel.json');

