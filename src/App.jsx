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
import { trackPageView } from './utils/analytics';

function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname + hash);
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
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="recruitment" element={<Recruitment />} />
      </Route>
    </Routes>
  );
}

export default App;
