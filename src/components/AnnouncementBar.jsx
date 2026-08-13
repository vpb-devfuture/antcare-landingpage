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
    <div className="relative w-full bg-gradient-to-r from-[#F5EBF7] via-[#FFF9F4] to-[#F5EBF7] text-[#3D1A47] text-xs sm:text-sm py-2.5 px-3 z-40 select-none border-b border-[#E86A17]/20 shadow-2xs overflow-hidden group">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* Left Badge (Fixed for immediate clarity) */}
        <div 
          onClick={handleCtaClick}
          className="hidden sm:flex items-center gap-1.5 shrink-0 bg-[#68259E]/10 text-[#68259E] px-3 py-1 rounded-full text-xs font-bold border border-[#68259E]/20 z-10 cursor-pointer hover:bg-[#68259E]/15 transition-colors"
        >
          <span className="animate-pulse">🌸</span>
          <span className="uppercase tracking-wide font-extrabold">{promoConfig.badge || 'MÙA LỄ VU LAN'}</span>
        </div>

        {/* Continuous Soft Scrolling Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div 
            className="animate-marquee flex items-center whitespace-nowrap gap-10 group-hover:[animation-play-state:paused] cursor-pointer" 
            onClick={handleCtaClick}
          >
            {/* Repeated Seamless Text Stream */}
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                
                {/* Main Offer Narrative */}
                <span className="font-medium text-xs sm:text-sm text-[#3D1A47]">
                  {promoConfig.fullText}
                </span>

                {/* Harmonized Price Pill */}
                <span className="inline-flex items-center gap-1 bg-[#E86A17]/15 text-[#E86A17] font-bold px-2.5 py-0.5 rounded-full text-xs border border-[#E86A17]/25 shadow-2xs">
                  ⚡ {promoConfig.highlightText}
                </span>

                {/* Expiry Pill */}
                <span className="inline-flex items-center gap-1 bg-[#68259E]/10 text-[#68259E] font-medium px-2.5 py-0.5 rounded-full text-[11px] border border-[#68259E]/15">
                  ⏰ Hạn: {promoConfig.endDate}
                </span>

                {/* Inline CTA Hint */}
                <span className="text-[#E86A17] font-bold text-xs hover:underline flex items-center gap-0.5">
                  {promoConfig.ctaText} →
                </span>
                
                <span className="text-[#68259E]/30 font-light mx-2">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Button & Close Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button 
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1 bg-[#E86A17] hover:bg-[#d45b0f] text-white font-bold px-3.5 py-1 rounded-full text-xs transition-all shadow-2xs active:scale-95 cursor-pointer"
          >
            <span>{promoConfig.ctaText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-6 h-6 rounded-full hover:bg-plum-deep/10 flex items-center justify-center text-plum-deep/70 hover:text-plum-deep transition-colors cursor-pointer text-xs font-bold"
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
