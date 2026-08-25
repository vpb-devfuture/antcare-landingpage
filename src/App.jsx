import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Activities from './pages/Activities';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Recruitment from './pages/Recruitment';
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
    const canonicalUrl = `https://antcare.vn${cleanPath}`;

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

    // Page titles & meta description updates for standard routes (NewsDetail updates its own)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (cleanPath === '/') {
      document.title = "Antcare -  Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "ANTCARE - Dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà chuẩn quốc tế. Hotline: 0969 032 360. Địa chỉ: Tòa Rox Tower, 138 Hồ Tùng Mậu, Hà Nội.";
    } else if (cleanPath === '/activities') {
      document.title = "Hoạt động cộng đồng | ANTCARE - Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Hành trình lan tỏa yêu thương, tập huấn sơ cấp cứu, y tế cộng đồng và các hoạt động xã hội của ANTCARE.";
    } else if (cleanPath === '/news') {
      document.title = "Tin tức & Y tế | ANTCARE - Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE.";
    } else if (cleanPath === '/recruitment') {
      document.title = "Tuyển dụng | ANTCARE - Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Cơ hội gia nhập đội ngũ Trợ lý sức khỏe & Điều dưỡng chăm sóc người cao tuổi tại ANTCARE - Kiến chăm tổ.";
    } else if (cleanPath === '/privacy-policy') {
      document.title = "Chính sách bảo mật | ANTCARE - Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Chính sách bảo mật thông tin và quyền riêng tư của khách hàng tại ANTCARE.";
    } else if (cleanPath === '/terms-of-use') {
      document.title = "Điều khoản sử dụng | ANTCARE - Kiến chăm tổ";
      if (metaDesc) metaDesc.content = "Quy định và điều khoản sử dụng dịch vụ trợ lý chăm sóc sức khỏe ANTCARE.";
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
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="activities" element={<Activities />} />
        <Route path="activities/:id" element={<NewsDetail />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="recruitment" element={<Recruitment />} />
      </Route>
    </Routes>
  );
}

export default App;
