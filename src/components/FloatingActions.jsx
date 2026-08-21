import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const FloatingActions = () => {
  const { i18n } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const isEn = i18n.language === 'en';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-white/90 backdrop-blur-md text-plum-deep border border-plum-deep/10 rounded-full flex items-center justify-center shadow-lg md:hover:bg-earth-orange-bright md:hover:text-white md:hover:border-earth-orange-bright active:scale-95 transition-all duration-300 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        title={isEn ? 'Scroll to top' : 'Về đầu trang'}
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined text-[24px]">keyboard_arrow_up</span>
      </button>

      {/* Main Floating Contact Menu */}
      <div className="relative group/contact">
        {/* Expanded Buttons */}
        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 pb-4 flex flex-col gap-3 items-center transition-all duration-300 ${isContactOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}>
          {/* Zalo Button */}
          <a onClick={() => trackEvent('click_zalo', { location: 'floating_action' })} href={siteInfo.zalo} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0068FF] rounded-full flex items-center justify-center shadow-lg md:hover:scale-110 active:scale-95 transition-transform cursor-pointer relative group/zalo">
            <span className="text-white font-bold text-[13px]">Zalo</span>
            <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/zalo:opacity-100 group-hover/zalo:visible transition-all whitespace-nowrap border border-gray-100 hidden md:block">
              {isEn ? 'Chat via Zalo' : 'Chat qua Zalo'}
            </div>
          </a>

          {/* Facebook Button */}
          <a onClick={() => trackEvent('click_messenger', { location: 'floating_action' })} href={siteInfo.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0866FF] rounded-full flex items-center justify-center shadow-lg md:hover:scale-110 active:scale-95 transition-transform cursor-pointer relative group/fb">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/fb:opacity-100 group-hover/fb:visible transition-all whitespace-nowrap border border-gray-100 hidden md:block">
              {isEn ? 'Chat via Messenger' : 'Chat qua Messenger'}
            </div>
          </a>

          {/* YouTube Button */}
          <a href={siteInfo.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg md:hover:scale-110 active:scale-95 transition-transform cursor-pointer relative group/yt">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/yt:opacity-100 group-hover/yt:visible transition-all whitespace-nowrap border border-gray-100 hidden md:block">
              {isEn ? 'ANTCARE YouTube Channel' : 'Kênh YouTube ANTCARE'}
            </div>
          </a>
        </div>
        
        {/* Main Toggle Button */}
        <div className="relative">
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95 cursor-pointer relative z-10 ${
              isContactOpen ? 'bg-plum-deep text-white rotate-45' : 'bg-earth-orange-bright text-white md:hover:scale-105'
            }`}
            title={isEn ? 'Support contact' : 'Liên hệ hỗ trợ'}
            aria-label="Toggle contact buttons"
          >
            <span className="material-symbols-outlined text-[28px] transition-transform duration-300">
              {isContactOpen ? 'add' : 'chat'}
            </span>
          </button>
          
          {/* Pulsing ring animation when closed */}
          {!isContactOpen && (
            <div className="absolute inset-0 bg-earth-orange-bright rounded-full animate-ping opacity-30 pointer-events-none"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingActions;
