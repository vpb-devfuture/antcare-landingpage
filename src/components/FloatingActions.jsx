import React, { useState, useEffect } from 'react';
import siteInfo from '../config/siteInfo.json';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`w-11 h-11 bg-white border border-border-muted rounded-full flex items-center justify-center shadow-md text-plum-deep md:hover:bg-surface-mist md:hover:text-earth-orange-bright active:bg-surface-mist active:scale-95 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined text-xl">arrow_upward</span>
      </button>

      {/* Contact Speed Dial */}
      <div className="relative">
        {/* Expanded Buttons */}
        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 pb-4 flex flex-col gap-3 items-center transition-all duration-300 ${isContactOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}>
          {/* Zalo Button */}
          <a href={siteInfo.zalo} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0068FF] rounded-full flex items-center justify-center shadow-lg md:hover:scale-110 active:scale-95 transition-transform cursor-pointer relative group/zalo">
            <span className="text-white font-bold text-[13px]">Zalo</span>
            <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/zalo:opacity-100 group-hover/zalo:visible transition-all whitespace-nowrap border border-gray-100 hidden md:block">
              Chat qua Zalo
            </div>
          </a>

          {/* Facebook Button */}
          <a href={siteInfo.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0866FF] rounded-full flex items-center justify-center shadow-lg md:hover:scale-110 active:scale-95 transition-transform cursor-pointer relative group/fb">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/fb:opacity-100 group-hover/fb:visible transition-all whitespace-nowrap border border-gray-100 hidden md:block">
              Chat qua Messenger
            </div>
          </a>
        </div>
        
        {/* Main Toggle Button */}
        <button 
          onClick={() => setIsContactOpen(!isContactOpen)}
          className="w-14 h-14 bg-earth-orange-bright rounded-full flex items-center justify-center shadow-xl text-white md:hover:bg-earth-orange-bright/90 active:scale-95 transition-all shadow-earth-orange-bright/30 relative z-10"
        >
          <span className={`material-symbols-outlined text-2xl absolute duration-300 transition-transform ${isContactOpen ? 'scale-0' : 'scale-100'}`}>forum</span>
          <span className={`material-symbols-outlined text-2xl absolute duration-300 transition-transform ${isContactOpen ? 'scale-100' : 'scale-0'}`}>close</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
