import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import MedicalEscortService from './pages/MedicalEscortService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Activities from './pages/Activities';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Recruitment from './pages/Recruitment';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { trackPageView, initClarity } from './utils/analytics';
import siteInfo from './config/siteInfo.json';

function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const clarityId = siteInfo.clarityId || import.meta.env.VITE_CLARITY_ID;
    if (clarityId) {
      initClarity(clarityId);
    }
  }, []);

  useEffect(() => {
    trackPageView(pathname + hash);
    
    // Dynamic Canonical URL and Open Graph URL management
    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const canonicalUrl = cleanPath === '/' ? 'https://antcare.vn/' : `https://antcare.vn${cleanPath}/`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonicalUrl;

    // Page titles & meta description updates for standard routes
    let metaDesc = document.querySelector('meta[name="description"]');
    if (cleanPath === '/') {
      document.title = "ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi tại nhà Hà Nội";
      if (metaDesc) metaDesc.content = "ANTCARE – Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà chuẩn quốc tế. Hotline: 0969 032 360. Địa chỉ: Tòa Rox Tower, 138 Hồ Tùng Mậu, Hà Nội.";
    } else if (cleanPath === '/giai-phap-cham-soc') {
      document.title = "Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "ANTCARE — Kiến chăm tổ cung cấp 3 dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà và hỗ trợ an toàn nhà cửa. Hotline: 0969 032 360.";
    } else if (cleanPath === '/san-pham') {
      document.title = "Dụng cụ rèn luyện thể chất & trí não cho người cao tuổi | ANTCARE — Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Đồ chơi thủ công, dụng cụ rèn luyện vận động tinh ngón tay và kích thích trí não chuyên biệt cho người cao tuổi từ ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/san-pham/bang-luon-day-beo') {
      document.title = "Bảng luồn dây bèo – Dụng cụ rèn luyện thể chất & trí não người cao tuổi | ANTCARE";
      if (metaDesc) metaDesc.content = "Bảng luồn dây bèo tây tự nhiên ANTCARE giúp người cao tuổi rèn luyện vận động tinh bàn tay, kích thích trí não và giảm cứng khớp hiệu quả.";
    } else if (cleanPath === '/activities') {
      document.title = "Hoạt động cộng đồng | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Hành trình lan tỏa yêu thương, tập huấn sơ cấp cứu, y tế cộng đồng và các hoạt động xã hội của ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/tieu-son' || cleanPath === '/son-tieu') {
      document.title = "Tiểu són & Rối loạn sàn chậu: Nguyên nhân, cách xử lý & chăm sóc | ANTCARE";
      if (metaDesc) metaDesc.content = "Chuyên mục kiến thức toàn diện về són tiểu, rỉ tiểu sau sinh, tuổi mãn kinh và người cao tuổi. Bài tập Kegel, cách chọn và sử dụng quần chống són thấm hút từ ANTCARE.";
    } else if (cleanPath === '/dong-hanh-di-kham' || cleanPath === '/dong-hanh-kham-benh') {
      document.title = "Dịch vụ đồng hành đi khám cho người cao tuổi: cẩm nang cho gia đình | ANTCARE";
      if (metaDesc) metaDesc.content = "10 bài cẩm nang về dịch vụ đồng hành đi khám, đưa bố mẹ đi khám khi con bận hoặc ở xa: chuẩn bị giấy tờ, thủ tục BHYT, quy trình khám, chi phí và cách chọn dịch vụ uy tín.";
    } else if (cleanPath === '/cham-soc-nguoi-cao-tuoi') {
      document.title = "Chăm sóc người cao tuổi tại Hà Nội: Trợ lý Sức khỏe & Đồng hành đi khám | ANTCARE";
      if (metaDesc) metaDesc.content = "15 bài cẩm nang chăm sóc người cao tuổi tại Hà Nội: trợ lý sức khỏe bán thời gian, theo dõi huyết áp, quản lý thuốc, phòng té ngã, sau xuất viện và đưa bố mẹ đi khám.";
    } else if (cleanPath === '/news' || cleanPath === '/blog' || cleanPath === '/tin-tuc') {
      const isEnglish = (localStorage.getItem('i18nextLng') || '').startsWith('en');
      document.title = isEnglish
        ? "Senior Activity Tools & Elder Care Articles | ANTCARE"
        : "Tin tức & Y tế | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = isEnglish
        ? "Explore purposeful activity tools for older adults, dementia care resources, busy boards, sensory mats and handcrafted gift kits from ANTCARE."
        : "Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/recruitment') {
      document.title = "Tuyển dụng & Hợp tác | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Cơ hội gia nhập đội ngũ Trợ lý sức khỏe & Điều dưỡng chăm sóc người cao tuổi tại ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/hop-tac') {
      document.title = "Hợp tác y tế & Bệnh viện | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Chương trình hợp tác y tế, bệnh viện và trung tâm phục hồi chức năng cùng ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/lien-he') {
      document.title = "Thông tin liên hệ | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Thông tin liên hệ văn phòng đại diện, số điện thoại hotline và email hỗ trợ của ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/privacy-policy') {
      document.title = "Chính sách bảo mật | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Chính sách bảo mật thông tin và quyền riêng tư của khách hàng tại ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/ve-antcare' || cleanPath === '/about') {
      document.title = "Về ANTCARE – Kiến chăm tổ | Trợ Lý Chăm Sóc Sức Khỏe Người Cao Tuổi Tại Nhà Hà Nội";
      if (metaDesc) metaDesc.content = "ANTCARE – Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà ở Hà Nội, với 4 dịch vụ: Trợ lý sức khỏe, Đồng hành khám bệnh, An tâm nhà cửa, Kết nối dịch vụ y tế.";
    } else if (cleanPath === '/terms-of-use') {
      document.title = "Điều khoản sử dụng | ANTCARE – Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Quy định và điều khoản sử dụng dịch vụ trợ lý chăm sóc sức khỏe ANTCARE – Kiến chăm tổ.";
    } else if (cleanPath === '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi') {
      document.title = "Dịch vụ đưa người cao tuổi đi khám tại Hà Nội – từ 390.000đ | ANTCARE";
      if (metaDesc) metaDesc.content = "Kiến Y tế ANTCARE có nền tảng điều dưỡng, đưa ông bà đi khám tại các bệnh viện Hà Nội: lấy số, làm thủ tục BHYT, đi cùng vào phòng khám, báo cáo cho gia đình. Từ 390.000đ/lần.";
      if (canonicalLink) canonicalLink.href = "https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi";
      if (ogUrl) ogUrl.content = "https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi";
    }

    if (hash) {
      let attempts = 0;
      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 25) {
          attempts++;
          setTimeout(scrollToHash, 100);
        }
      };
      setTimeout(scrollToHash, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="giai-phap-cham-soc" element={<LandingPage />} />
        <Route path="dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" element={<MedicalEscortService />} />
        
        {/* 301 Redirects for consolidated articles & service root */}
        <Route path="dich-vu" element={<Navigate to="/" replace />} />
        <Route path="news/chuan-bi-gi-khi-dua-bo-me-di-kham-benh" element={<Navigate to="/news/checklist-dua-bo-me-di-kham-benh-vien" replace />} />
        <Route path="news/dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi" element={<Navigate to="/news/checklist-dua-bo-me-di-kham-benh-vien" replace />} />
        <Route path="news/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia" element={<Navigate to="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" replace />} />
        <Route path="cam-nang-suc-khoe-nguoi-cao-tuoi" element={<Navigate to="/news/cam-nang-suc-khoe-nguoi-cao-tuoi" replace />} />
        
        {/* 301 Redirects for 10 SEO/AEO articles root URLs to /news/<slug> */}
        <Route path="dong-hanh-kham-benh-nguoi-cao-tuoi" element={<Navigate to="/news/dong-hanh-kham-benh-nguoi-cao-tuoi" replace />} />
        <Route path="bang-gia-dua-nguoi-gia-di-kham" element={<Navigate to="/news/bang-gia-dua-nguoi-gia-di-kham" replace />} />
        <Route path="dua-nguoi-cao-tuoi-di-kham-bach-mai" element={<Navigate to="/news/dua-nguoi-cao-tuoi-di-kham-bach-mai" replace />} />
        <Route path="dua-bo-me-di-kham-benh-vien-lao-khoa" element={<Navigate to="/news/dua-bo-me-di-kham-benh-vien-lao-khoa" replace />} />
        <Route path="con-o-xa-cham-soc-suc-khoe-bo-me" element={<Navigate to="/news/con-o-xa-cham-soc-suc-khoe-bo-me" replace />} />
        <Route path="nguoi-cao-tuoi-tu-tinh-len-ha-noi-kham-benh" element={<Navigate to="/news/nguoi-cao-tuoi-tu-tinh-len-ha-noi-kham-benh" replace />} />
        <Route path="checklist-chuan-bi-di-kham-cho-nguoi-gia" element={<Navigate to="/news/checklist-chuan-bi-di-kham-cho-nguoi-gia" replace />} />
        <Route path="tro-ly-suc-khoe-tai-nha-nguoi-cao-tuoi" element={<Navigate to="/news/tro-ly-suc-khoe-tai-nha-nguoi-cao-tuoi" replace />} />
        <Route path="theo-doi-suc-khoe-nguoi-cao-tuoi-benh-man-tinh" element={<Navigate to="/news/theo-doi-suc-khoe-nguoi-cao-tuoi-benh-man-tinh" replace />} />
        <Route path="co-nen-thue-nguoi-dua-nguoi-gia-di-kham" element={<Navigate to="/news/co-nen-thue-nguoi-dua-nguoi-gia-di-kham" replace />} />

        {/* 301 Redirects for 10 October 2026 articles root URLs to /news/<slug> */}
        <Route path="thang-hanh-dong-vi-nguoi-cao-tuoi-2026-cham-soc-tich-hop" element={<Navigate to="/news/thang-hanh-dong-vi-nguoi-cao-tuoi-2026-cham-soc-tich-hop" replace />} />
        <Route path="nghi-dinh-335-2026-tro-cap-nguoi-cao-tuoi" element={<Navigate to="/news/nghi-dinh-335-2026-tro-cap-nguoi-cao-tuoi" replace />} />
        <Route path="kham-suc-khoe-mien-phi-2026-nguoi-cao-tuoi" element={<Navigate to="/news/kham-suc-khoe-mien-phi-2026-nguoi-cao-tuoi" replace />} />
        <Route path="so-suc-khoe-dien-tu-vneid-cho-nguoi-cao-tuoi" element={<Navigate to="/news/so-suc-khoe-dien-tu-vneid-cho-nguoi-cao-tuoi" replace />} />
        <Route path="bhyt-chi-tra-100-nguoi-cao-tuoi-75-tuoi" element={<Navigate to="/news/bhyt-chi-tra-100-nguoi-cao-tuoi-75-tuoi" replace />} />
        <Route path="uy-quyen-nhan-luong-huu-2026" element={<Navigate to="/news/uy-quyen-nhan-luong-huu-2026" replace />} />
        <Route path="lua-dao-nguoi-cao-tuoi-2026-cach-phong-tranh" element={<Navigate to="/news/lua-dao-nguoi-cao-tuoi-2026-cach-phong-tranh" replace />} />
        <Route path="c-sui-gia-thuc-pham-bo-sung-nguoi-cao-tuoi" element={<Navigate to="/news/c-sui-gia-thuc-pham-bo-sung-nguoi-cao-tuoi" replace />} />
        <Route path="dot-quy-nguoi-cao-tuoi-khi-troi-chuyen-lanh" element={<Navigate to="/news/dot-quy-nguoi-cao-tuoi-khi-troi-chuyen-lanh" replace />} />
        <Route path="cum-mua-thu-dong-nguoi-cao-tuoi" element={<Navigate to="/news/cum-mua-thu-dong-nguoi-cao-tuoi" replace />} />
        
        {/* 301 Redirects for 10 Son Tieu articles root URLs to /news/<slug> */}
        <Route path="son-tieu-la-gi" element={<Navigate to="/news/son-tieu-la-gi" replace />} />
        <Route path="son-tieu-sau-sinh" element={<Navigate to="/news/son-tieu-sau-sinh" replace />} />
        <Route path="son-tieu-tuoi-man-kinh" element={<Navigate to="/news/son-tieu-tuoi-man-kinh" replace />} />
        <Route path="son-tieu-nguoi-cao-tuoi" element={<Navigate to="/news/son-tieu-nguoi-cao-tuoi" replace />} />
        <Route path="son-tieu-co-nen-dung-bang-ve-sinh" element={<Navigate to="/news/son-tieu-co-nen-dung-bang-ve-sinh" replace />} />
        <Route path="quan-chong-son-tieu-la-gi" element={<Navigate to="/news/quan-chong-son-tieu-la-gi" replace />} />
        <Route path="so-sanh-giai-phap-son-tieu" element={<Navigate to="/news/so-sanh-giai-phap-son-tieu" replace />} />
        <Route path="cach-chon-quan-chong-son-tieu" element={<Navigate to="/news/cach-chon-quan-chong-son-tieu" replace />} />
        <Route path="cach-giat-quan-tham-hut" element={<Navigate to="/news/cach-giat-quan-tham-hut" replace />} />
        <Route path="bai-tap-kegel-giam-son-tieu" element={<Navigate to="/news/bai-tap-kegel-giam-son-tieu" replace />} />
        <Route path="khong-nen-dung-bang-ve-sinh" element={<Navigate to="/news/son-tieu-co-nen-dung-bang-ve-sinh" replace />} />
        <Route path="so-sanh-giai-phap" element={<Navigate to="/news/so-sanh-giai-phap-son-tieu" replace />} />
        <Route path="cach-chon-quan" element={<Navigate to="/news/cach-chon-quan-chong-son-tieu" replace />} />
        <Route path="cach-giat-quan" element={<Navigate to="/news/cach-giat-quan-tham-hut" replace />} />
        <Route path="bai-tap-kegel" element={<Navigate to="/news/bai-tap-kegel-giam-son-tieu" replace />} />
        
        {/* 301 Redirects for 10 Dong Hanh Di Kham articles root URLs to /news/<slug> */}
        <Route path="dich-vu-dong-hanh-di-kham-la-gi" element={<Navigate to="/news/dich-vu-dong-hanh-di-kham-la-gi" replace />} />
        <Route path="dua-bo-me-di-kham-khi-con-ban" element={<Navigate to="/news/dua-bo-me-di-kham-khi-con-ban" replace />} />
        <Route path="con-o-xa-cham-bo-me-di-kham" element={<Navigate to="/news/con-o-xa-cham-bo-me-di-kham" replace />} />
        <Route path="chuan-bi-gi-khi-dua-nguoi-gia-di-kham" element={<Navigate to="/news/chuan-bi-gi-khi-dua-nguoi-gia-di-kham" replace />} />
        <Route path="kham-bhyt-nguoi-cao-tuoi" element={<Navigate to="/news/kham-bhyt-nguoi-cao-tuoi" replace />} />
        <Route path="kinh-nghiem-di-kham-benh-vien-lon" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-lon" replace />} />
        <Route path="dua-nguoi-gia-tu-tinh-len-ha-noi-kham" element={<Navigate to="/news/dua-nguoi-gia-tu-tinh-len-ha-noi-kham" replace />} />
        <Route path="gia-dich-vu-dong-hanh-di-kham" element={<Navigate to="/news/gia-dich-vu-dong-hanh-di-kham" replace />} />
        <Route path="chon-dich-vu-dong-hanh-di-kham-uy-tin" element={<Navigate to="/news/chon-dich-vu-dong-hanh-di-kham-uy-tin" replace />} />
        <Route path="tai-kham-dinh-ky-benh-man-tinh" element={<Navigate to="/news/tai-kham-dinh-ky-benh-man-tinh" replace />} />
        <Route path="dong-hanh-di-kham-la-gi" element={<Navigate to="/news/dich-vu-dong-hanh-di-kham-la-gi" replace />} />
        <Route path="con-ban-ai-dua-bo-me-di-kham" element={<Navigate to="/news/dua-bo-me-di-kham-khi-con-ban" replace />} />
        <Route path="con-o-xa" element={<Navigate to="/news/con-o-xa-cham-bo-me-di-kham" replace />} />
        <Route path="chuan-bi-gi" element={<Navigate to="/news/chuan-bi-gi-khi-dua-nguoi-gia-di-kham" replace />} />
        <Route path="kham-bhyt" element={<Navigate to="/news/kham-bhyt-nguoi-cao-tuoi" replace />} />
        <Route path="quy-trinh-benh-vien-lon" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-lon" replace />} />
        <Route path="tu-tinh-len-ha-noi" element={<Navigate to="/news/dua-nguoi-gia-tu-tinh-len-ha-noi-kham" replace />} />
        <Route path="bang-gia" element={<Navigate to="/news/gia-dich-vu-dong-hanh-di-kham" replace />} />
        <Route path="chon-dich-vu-uy-tin" element={<Navigate to="/news/chon-dich-vu-dong-hanh-di-kham-uy-tin" replace />} />
        <Route path="tai-kham-dinh-ky" element={<Navigate to="/news/tai-kham-dinh-ky-benh-man-tinh" replace />} />
        
        {/* Category redirects from /kien-thuc/<category> */}
        <Route path="kien-thuc/cham-soc-nguoi-cao-tuoi-ha-noi" element={<Navigate to="/cham-soc-nguoi-cao-tuoi" replace />} />
        <Route path="kien-thuc/dong-hanh-di-kham" element={<Navigate to="/dong-hanh-di-kham" replace />} />
        <Route path="kien-thuc/dong-hanh-kham-benh" element={<Navigate to="/dong-hanh-di-kham" replace />} />
        <Route path="kien-thuc/son-tieu" element={<Navigate to="/son-tieu" replace />} />
        <Route path="kien-thuc/tieu-son" element={<Navigate to="/tieu-son" replace />} />

        {/* 301 Redirects for 15 Cham Soc Nguoi Cao Tuoi Ha Noi articles root URLs to /news/<slug> */}
        <Route path="dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi" element={<Navigate to="/news/dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi" replace />} />
        <Route path="tro-ly-suc-khoe-nguoi-cao-tuoi" element={<Navigate to="/news/tro-ly-suc-khoe-nguoi-cao-tuoi" replace />} />
        <Route path="gia-cham-soc-nguoi-gia-tai-nha-ha-noi" element={<Navigate to="/news/gia-cham-soc-nguoi-gia-tai-nha-ha-noi" replace />} />
        <Route path="bo-me-song-mot-minh-ha-noi" element={<Navigate to="/news/bo-me-song-mot-minh-ha-noi" replace />} />
        <Route path="theo-doi-huyet-ap-duong-huyet-tai-nha" element={<Navigate to="/news/theo-doi-huyet-ap-duong-huyet-tai-nha" replace />} />
        <Route path="quan-ly-thuoc-nguoi-cao-tuoi" element={<Navigate to="/news/quan-ly-thuoc-nguoi-cao-tuoi" replace />} />
        <Route path="phong-nga-nguoi-cao-tuoi-tai-nha" element={<Navigate to="/news/phong-nga-nguoi-cao-tuoi-tai-nha" replace />} />
        <Route path="cham-soc-nguoi-gia-sau-xuat-vien" element={<Navigate to="/news/cham-soc-nguoi-gia-sau-xuat-vien" replace />} />
        <Route path="dau-hieu-bo-me-can-cham-soc" element={<Navigate to="/news/dau-hieu-bo-me-can-cham-soc" replace />} />
        <Route path="chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi" element={<Navigate to="/news/chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi" replace />} />
        <Route path="dich-vu-dua-nguoi-gia-di-kham-ha-noi" element={<Navigate to="/news/dich-vu-dua-nguoi-gia-di-kham-ha-noi" replace />} />
        <Route path="kham-lao-khoa-ha-noi" element={<Navigate to="/news/kham-lao-khoa-ha-noi" replace />} />
        <Route path="kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi" element={<Navigate to="/news/kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi" replace />} />
        <Route path="dua-nguoi-gia-di-noi-soi-gay-me" element={<Navigate to="/news/dua-nguoi-gia-di-noi-soi-gay-me" replace />} />
        <Route path="dua-nguoi-gia-sa-sut-tri-tue-di-kham" element={<Navigate to="/news/dua-nguoi-gia-sa-sut-tri-tue-di-kham" replace />} />
        {/* Short hash aliases */}
        <Route path="cham-soc-nguoi-cao-tuoi-ha-noi" element={<Navigate to="/news/dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi" replace />} />
        <Route path="tro-ly-suc-khoe-la-gi" element={<Navigate to="/news/tro-ly-suc-khoe-nguoi-cao-tuoi" replace />} />
        <Route path="gia-cham-soc-nguoi-gia-ha-noi" element={<Navigate to="/news/gia-cham-soc-nguoi-gia-tai-nha-ha-noi" replace />} />
        <Route path="bo-me-song-mot-minh" element={<Navigate to="/news/bo-me-song-mot-minh-ha-noi" replace />} />
        <Route path="theo-doi-huyet-ap-duong-huyet" element={<Navigate to="/news/theo-doi-huyet-ap-duong-huyet-tai-nha" replace />} />
        <Route path="quan-ly-thuoc" element={<Navigate to="/news/quan-ly-thuoc-nguoi-cao-tuoi" replace />} />
        <Route path="phong-te-nga" element={<Navigate to="/news/phong-nga-nguoi-cao-tuoi-tai-nha" replace />} />
        <Route path="cham-soc-sau-xuat-vien" element={<Navigate to="/news/cham-soc-nguoi-gia-sau-xuat-vien" replace />} />
        <Route path="dau-hieu-can-cham-soc" element={<Navigate to="/news/dau-hieu-bo-me-can-cham-soc" replace />} />
        <Route path="chon-dich-vu-cham-soc-uy-tin" element={<Navigate to="/news/chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi" replace />} />
        <Route path="dua-nguoi-gia-di-kham-ha-noi" element={<Navigate to="/news/dich-vu-dua-nguoi-gia-di-kham-ha-noi" replace />} />
        <Route path="kham-tong-quat-nguoi-cao-tuoi" element={<Navigate to="/news/kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi" replace />} />
        <Route path="noi-soi-thu-thuat" element={<Navigate to="/news/dua-nguoi-gia-di-noi-soi-gay-me" replace />} />
        <Route path="di-kham-sa-sut-tri-tue" element={<Navigate to="/news/dua-nguoi-gia-sa-sut-tri-tue-di-kham" replace />} />
        
        {/* 301 Redirects for 10 Benh Vien Tim Ha Noi articles root URLs to /news/<slug> */}
        <Route path="kinh-nghiem-di-kham-benh-vien-tim-ha-noi" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="benh-vien-tim-ha-noi-co-so-2-vo-chi-cong" element={<Navigate to="/news/benh-vien-tim-ha-noi-co-so-2-vo-chi-cong" replace />} />
        <Route path="dat-lich-kham-benh-vien-tim-ha-noi" element={<Navigate to="/news/dat-lich-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="quy-trinh-kham-benh-vien-tim-ha-noi" element={<Navigate to="/news/quy-trinh-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="benh-vien-tim-ha-noi-dong-meo-tranh-cho-lau" element={<Navigate to="/news/benh-vien-tim-ha-noi-dong-meo-tranh-cho-lau" replace />} />
        <Route path="kham-tim-co-can-nhin-an-khong" element={<Navigate to="/news/kham-tim-co-can-nhin-an-khong" replace />} />
        <Route path="kham-tim-can-mang-giay-to-ho-so-gi" element={<Navigate to="/news/kham-tim-can-mang-giay-to-ho-so-gi" replace />} />
        <Route path="kham-bhyt-benh-vien-tim-ha-noi" element={<Navigate to="/news/kham-bhyt-benh-vien-tim-ha-noi" replace />} />
        <Route path="dua-nguoi-cao-tuoi-di-kham-tim-mach" element={<Navigate to="/news/dua-nguoi-cao-tuoi-di-kham-tim-mach" replace />} />
        <Route path="dich-vu-dua-di-kham-benh-vien-tim-ha-noi" element={<Navigate to="/news/dich-vu-dua-di-kham-benh-vien-tim-ha-noi" replace />} />

        {/* Short hash aliases for Benh Vien Tim Ha Noi */}
        <Route path="cam-nang-kham-benh-vien-tim-ha-noi" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="benh-vien-tim-co-so-2-vo-chi-cong" element={<Navigate to="/news/benh-vien-tim-ha-noi-co-so-2-vo-chi-cong" replace />} />
        <Route path="dat-lich-kham-benh-vien-tim" element={<Navigate to="/news/dat-lich-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="quy-trinh-kham-benh-vien-tim" element={<Navigate to="/news/quy-trinh-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="benh-vien-tim-dong-meo-tranh-cho" element={<Navigate to="/news/benh-vien-tim-ha-noi-dong-meo-tranh-cho-lau" replace />} />
        <Route path="nhin-an-truoc-khi-kham-tim" element={<Navigate to="/news/kham-tim-co-can-nhin-an-khong" replace />} />
        <Route path="ho-so-thuoc-mang-theo-kham-tim" element={<Navigate to="/news/kham-tim-can-mang-giay-to-ho-so-gi" replace />} />
        <Route path="kham-bhyt-benh-vien-tim" element={<Navigate to="/news/kham-bhyt-benh-vien-tim-ha-noi" replace />} />
        <Route path="dua-nguoi-cao-tuoi-kham-tim" element={<Navigate to="/news/dua-nguoi-cao-tuoi-di-kham-tim-mach" replace />} />
        <Route path="dich-vu-di-kham-benh-vien-tim-antcare" element={<Navigate to="/news/dich-vu-dua-di-kham-benh-vien-tim-ha-noi" replace />} />
        <Route path="kien-thuc/kham-benh-vien-tim-ha-noi" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-tim-ha-noi" replace />} />
        
        {/* 301 Redirects for 10 Benh Vien Dai Hoc Y Ha Noi articles root URLs to /news/<slug> */}
        <Route path="kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="4-khu-kham-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/4-khu-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="kham-bhyt-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/kham-bhyt-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="kham-theo-yeu-cau-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/kham-theo-yeu-cau-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="trung-tam-y-khoa-so-1-ton-that-tung" element={<Navigate to="/news/trung-tam-y-khoa-so-1-ton-that-tung" replace />} />
        <Route path="kham-suc-khoe-doanh-nghiep-dai-hoc-y-ha-noi" element={<Navigate to="/news/kham-suc-khoe-doanh-nghiep-dai-hoc-y-ha-noi" replace />} />
        <Route path="dat-lich-kham-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/dat-lich-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="luu-y-khi-di-kham-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/luu-y-khi-di-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="dua-nguoi-cao-tuoi-di-kham-dai-hoc-y-ha-noi" element={<Navigate to="/news/dua-nguoi-cao-tuoi-di-kham-dai-hoc-y-ha-noi" replace />} />
        <Route path="dich-vu-dong-hanh-kham-benh-dai-hoc-y-ha-noi" element={<Navigate to="/news/dich-vu-dong-hanh-kham-benh-dai-hoc-y-ha-noi" replace />} />

        {/* Short hash aliases for Benh Vien Dai Hoc Y Ha Noi */}
        <Route path="kinh-nghiem-kham-dai-hoc-y" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="4-khu-kham-dai-hoc-y" element={<Navigate to="/news/4-khu-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="khoa-kham-benh-a2" element={<Navigate to="/news/kham-bhyt-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="kham-theo-yeu-cau-a2" element={<Navigate to="/news/kham-theo-yeu-cau-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="trung-tam-y-khoa-so-1" element={<Navigate to="/news/trung-tam-y-khoa-so-1-ton-that-tung" replace />} />
        <Route path="kham-suc-khoe-doanh-nghiep" element={<Navigate to="/news/kham-suc-khoe-doanh-nghiep-dai-hoc-y-ha-noi" replace />} />
        <Route path="dat-lich-dai-hoc-y" element={<Navigate to="/news/dat-lich-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="luu-y-kham-dai-hoc-y" element={<Navigate to="/news/luu-y-khi-di-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="nguoi-cao-tuoi-kham-dai-hoc-y" element={<Navigate to="/news/dua-nguoi-cao-tuoi-di-kham-dai-hoc-y-ha-noi" replace />} />
        <Route path="dich-vu-dong-hanh-dai-hoc-y" element={<Navigate to="/news/dich-vu-dong-hanh-kham-benh-dai-hoc-y-ha-noi" replace />} />
        <Route path="kham-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        <Route path="kien-thuc/kham-benh-vien-dai-hoc-y-ha-noi" element={<Navigate to="/news/kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi" replace />} />
        
        <Route path="san-pham" element={<Products />} />
        <Route path="san-pham/bang-luon-day-beo" element={<ProductDetail />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="activities" element={<Activities />} />
        <Route path="activities/:id" element={<NewsDetail />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="blog" element={<News />} />
        <Route path="blog/:id" element={<NewsDetail />} />
        <Route path="tin-tuc" element={<News />} />
        <Route path="tin-tuc/:id" element={<NewsDetail />} />
        <Route path="song-tu-tin" element={<News />} />
        <Route path="song-tu-tin/:id" element={<NewsDetail />} />
        <Route path="cham-soc-nguoi-cao-tuoi" element={<News />} />
        <Route path="cham-soc-nguoi-cao-tuoi/:id" element={<NewsDetail />} />
        <Route path="tieu-son" element={<News />} />
        <Route path="tieu-son/:id" element={<NewsDetail />} />
        <Route path="son-tieu" element={<News />} />
        <Route path="son-tieu/:id" element={<NewsDetail />} />
        <Route path="dong-hanh-di-kham" element={<News />} />
        <Route path="dong-hanh-di-kham/:id" element={<NewsDetail />} />
        <Route path="dong-hanh-kham-benh" element={<News />} />
        <Route path="dong-hanh-kham-benh/:id" element={<NewsDetail />} />
        <Route path="kien-thuc" element={<News />} />
        <Route path="kien-thuc/:id" element={<NewsDetail />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="hop-tac" element={<Recruitment />} />
        <Route path="lien-he" element={<Recruitment />} />
        <Route path="ve-antcare" element={<AboutUs />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
