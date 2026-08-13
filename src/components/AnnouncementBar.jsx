import React, { useState } from 'react';
import promoConfig from '../config/promo.json';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!promoConfig.enabled || !isVisible) {
    return null;
  }

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleCtaClick = () => {
    const contactSection = document.getElementById('thong-tin-lien-he');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = promoConfig.ctaLink || '/#thong-tin-lien-he';
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-plum-deep via-[#8B2FA8] to-earth-orange-bright text-white text-xs sm:text-sm py-2 px-3 shadow-md z-40 overflow-hidden group select-none border-b border-white/10">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* Left Badge Indicator (Fixed on left for instant context) */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-yellow-200 border border-white/30 shadow-2xs z-10">
          <span className="animate-pulse">🌸</span>
          <span>{promoConfig.badge || 'KHUYẾN MÃI'}</span>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div className="animate-marquee flex items-center whitespace-nowrap gap-12 group-hover:[animation-play-state:paused] cursor-pointer" onClick={handleCtaClick}>
            
            {/* Repeated Items for Seamless Endless Loop */}
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                <span className="font-semibold text-white/95">
                  {promoConfig.fullText}
                </span>

                <span className="inline-flex items-center gap-1 bg-yellow-400 text-plum-deep font-extrabold px-2 py-0.5 rounded-md text-[12px] shadow-2xs">
                  ⚡ {promoConfig.highlightText}
                </span>

                <span className="inline-flex items-center gap-1 bg-white/20 text-white font-medium px-2 py-0.5 rounded-md text-[11px] border border-white/30">
                  ⏰ Hạn: {promoConfig.endDate}
                </span>

                <span className="text-yellow-300 font-bold hover:underline flex items-center gap-0.5 text-xs">
                  {promoConfig.ctaText} →
                </span>
                
                <span className="text-white/40 font-light mx-2">✦</span>
              </div>
            ))}
            
          </div>
        </div>

        {/* Right CTA Button & Close Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button 
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1 bg-white text-plum-deep hover:bg-yellow-300 font-bold px-3 py-1 rounded-full text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>{promoConfig.ctaText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer text-xs"
            title="Đóng thông báo"
            aria-label="Close promotion banner"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;
