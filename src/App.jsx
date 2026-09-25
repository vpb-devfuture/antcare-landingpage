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
    } else if (cleanPath === '/news' || cleanPath === '/blog') {
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
        
        {/* 301 Redirects for consolidated articles */}
        <Route path="news/chuan-bi-gi-khi-dua-bo-me-di-kham-benh" element={<Navigate to="/news/checklist-dua-bo-me-di-kham-benh-vien" replace />} />
        <Route path="news/dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi" element={<Navigate to="/news/checklist-dua-bo-me-di-kham-benh-vien" replace />} />
        <Route path="news/dich-vu-dong-hanh-kham-benh-la-gi" element={<Navigate to="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" replace />} />
        <Route path="news/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia" element={<Navigate to="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" replace />} />
        
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
