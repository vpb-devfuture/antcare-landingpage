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
    <div className="relative w-full bg-surface-mist/80 backdrop-blur-md py-2 px-3 z-40 select-none border-b border-plum-deep/5 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* 3D Fixed Left Badge Pill */}
        <div 
          onClick={handleCtaClick}
          className="hidden sm:flex items-center gap-1.5 shrink-0 bg-gradient-to-r from-plum-deep to-[#7C2D99] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-[0_4px_12px_rgba(124,45,153,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/30 z-10 cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="animate-bounce">🌸</span>
          <span className="text-yellow-300 font-extrabold uppercase tracking-wide">{promoConfig.badge || 'VU LAN'}</span>
        </div>

        {/* 3D Glassmorphic Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center bg-white/60 backdrop-blur-lg rounded-full py-1 px-2 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.8)]">
          
          <div 
            className="animate-marquee flex items-center whitespace-nowrap gap-6 group-hover:[animation-play-state:paused] cursor-pointer py-0.5" 
            onClick={handleCtaClick}
          >
            {/* Repeated 3D Glossy Cards for Seamless Endless Loop */}
            {[1, 2, 3].map((idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 shrink-0 bg-gradient-to-r from-plum-deep via-[#8B2FA8] to-earth-orange-bright text-white px-4 py-1 rounded-full shadow-[0_4px_12px_rgba(124,45,153,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/30 hover:brightness-105 transition-all"
              >
                {/* Main Offer Text */}
                <span className="font-semibold text-xs sm:text-sm text-white drop-shadow-2xs">
                  {promoConfig.fullText}
                </span>

                {/* 3D Yellow Price Pill */}
                <span className="inline-flex items-center gap-1 bg-gradient-to-b from-amber-300 to-amber-500 text-plum-deep font-extrabold px-2.5 py-0.5 rounded-full text-[11px] shadow-[0_2px_6px_rgba(245,158,11,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] uppercase tracking-wider">
                  ⚡ {promoConfig.highlightText}
                </span>

                {/* 3D Glass Expiry Tag */}
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white font-medium px-2.5 py-0.5 rounded-full text-[11px] border border-white/30 shadow-inner">
                  ⏰ Hạn: {promoConfig.endDate}
                </span>

                {/* Arrow hint */}
                <span className="text-yellow-300 font-bold text-xs flex items-center gap-0.5 ml-1">
                  {promoConfig.ctaText} →
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* 3D Glossy CTA Button & Close Button (Right) */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button 
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-earth-orange-bright to-amber-500 hover:from-amber-500 hover:to-earth-orange-bright text-white font-bold px-4 py-1.5 rounded-full text-xs transition-all shadow-[0_4px_12px_rgba(232,106,23,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] border border-white/40 active:scale-95 cursor-pointer"
          >
            <span>{promoConfig.ctaText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-7 h-7 rounded-full bg-white/80 hover:bg-white text-plum-deep hover:text-earth-orange-bright flex items-center justify-center transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-white cursor-pointer text-xs font-bold"
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
