const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Add imports for Home, ElderlyCareOrigin, AboutUsNew
const oldImports = `import LandingPage from './pages/LandingPage';
import MedicalEscortService from './pages/MedicalEscortService';`;

const newImports = `import Home from './pages/Home';
import ElderlyCareOrigin from './pages/ElderlyCareOrigin';
import AboutUsNew from './pages/AboutUsNew';
import LandingPage from './pages/LandingPage';
import MedicalEscortService from './pages/MedicalEscortService';`;

content = content.replace(oldImports, newImports);

// 2. Update dynamic title & meta description logic
const oldCleanPathHome = `    if (cleanPath === '/') {
      document.title = "ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi tại nhà Hà Nội";
      if (metaDesc) metaDesc.content = "ANTCARE – Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà chuẩn quốc tế. Hotline: 0969 032 360. Địa chỉ: Tòa Rox Tower, 138 Hồ Tùng Mậu, Hà Nội.";
    } else if (cleanPath === '/giai-phap-cham-soc') {
      document.title = "Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "ANTCARE — Kiến chăm tổ cung cấp 3 dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà và hỗ trợ an toàn nhà cửa. Hotline: 0969 032 360.";
    } else if (cleanPath === '/quan-lot-tham-hut' || cleanPath === '/quan-lot-son-tieu' || cleanPath === '/quan-lot-nguyet-san' || cleanPath === '/quan-chong-son-tieu' || cleanPath === '/quan-lot-tham-hut-nguyet-san-son-tieu' || cleanPath === '/quan-lot-nguyet-san-son-tieu') {
      document.title = "Quần Lót Thấm Hút ANTCARE – Chống Són Tiểu & Thay Thế Băng Vệ Sinh 2-in-1";
      if (metaDesc) metaDesc.content = "Quần lót thấm hút ANTCARE công nghệ 4 lớp kháng khuẩn: vừa là quần lót nguyệt san chống tràn ban đêm, vừa là quần lót chống són tiểu cho mẹ sau sinh & người lớn tuổi. Giặt tái dùng 100+ lần.";`;

const newCleanPathHome = `    if (cleanPath === '/') {
      document.title = "ANTCARE – Quần kinh nguyệt & quần chống són tiểu";
      if (metaDesc) metaDesc.content = "ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt.";
    } else if (cleanPath === '/cham-soc-nguoi-cao-tuoi' || cleanPath === '/giai-phap-cham-soc') {
      document.title = "Chăm sóc người cao tuổi Hà Nội – Khởi nguồn ANTCARE";
      if (metaDesc) metaDesc.content = "Dịch vụ Trợ lý sức khỏe và Đồng hành đi khám cho người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu. Dịch vụ đang tạm dừng nhận khách mới.";
    } else if (cleanPath === '/ve-chung-toi' || cleanPath === '/ve-antcare' || cleanPath === '/about') {
      document.title = "Về ANTCARE – Thương hiệu đồ lót chức năng Việt Nam";
      if (metaDesc) metaDesc.content = "ANTCARE là thương hiệu đồ lót chức năng Việt Nam: quần kinh nguyệt, quần chống són tiểu. Bắt nguồn từ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.";
    } else if (cleanPath === '/quan-lot-tham-hut' || cleanPath === '/quan-lot-son-tieu' || cleanPath === '/quan-lot-nguyet-san' || cleanPath === '/quan-chong-son-tieu' || cleanPath === '/quan-lot-tham-hut-nguyet-san-son-tieu' || cleanPath === '/quan-lot-nguyet-san-son-tieu') {
      document.title = "ANTCARE – Quần kinh nguyệt & quần chống són tiểu";
      if (metaDesc) metaDesc.content = "ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt.";`;

content = content.replace(oldCleanPathHome, newCleanPathHome);

// 3. Update Routes
// Root route renders Home
content = content.replace('<Route index element={<LandingPage />} />', '<Route index element={<Home />} />');
content = content.replace('<Route path="giai-phap-cham-soc" element={<LandingPage />} />', '<Route path="giai-phap-cham-soc" element={<Navigate to="/cham-soc-nguoi-cao-tuoi" replace />} />');

// /quan-lot-tham-hut renders 301 Navigate to /
content = content.replace('<Route path="quan-lot-tham-hut" element={<AbsorbentUnderwear />} />', '<Route path="quan-lot-tham-hut" element={<Navigate to="/" replace />} />');
content = content.replace('<Route path="quan-lot-tham-hut-nguyet-san-son-tieu" element={<Navigate to="/quan-lot-tham-hut" replace />} />', '<Route path="quan-lot-tham-hut-nguyet-san-son-tieu" element={<Navigate to="/" replace />} />');
content = content.replace('<Route path="quan-lot-nguyet-san-son-tieu" element={<Navigate to="/quan-lot-tham-hut" replace />} />', '<Route path="quan-lot-nguyet-san-son-tieu" element={<Navigate to="/" replace />} />');
content = content.replace('<Route path="quan-lot-son-tieu" element={<Navigate to="/quan-lot-tham-hut" replace />} />', '<Route path="quan-lot-son-tieu" element={<Navigate to="/" replace />} />');
content = content.replace('<Route path="quan-lot-nguyet-san" element={<Navigate to="/quan-lot-tham-hut" replace />} />', '<Route path="quan-lot-nguyet-san" element={<Navigate to="/" replace />} />');

// /cham-soc-nguoi-cao-tuoi renders ElderlyCareOrigin
content = content.replace('<Route path="cham-soc-nguoi-cao-tuoi" element={<News />} />', '<Route path="cham-soc-nguoi-cao-tuoi" element={<ElderlyCareOrigin />} />');

// /ve-chung-toi renders AboutUsNew, redirect /ve-antcare & /about to /ve-chung-toi
const oldAboutRoutes = `<Route path="ve-antcare" element={<AboutUs />} />
        <Route path="about" element={<AboutUs />} />`;

const newAboutRoutes = `<Route path="ve-chung-toi" element={<AboutUsNew />} />
        <Route path="ve-antcare" element={<Navigate to="/ve-chung-toi" replace />} />
        <Route path="about" element={<Navigate to="/ve-chung-toi" replace />} />`;

content = content.replace(oldAboutRoutes, newAboutRoutes);

fs.writeFileSync('src/App.jsx', content);
console.log('Successfully updated src/App.jsx');

