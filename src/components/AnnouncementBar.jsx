import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import promoConfig from '../config/promo.json';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  if (!promoConfig.enabled || !isVisible) {
    return null;
  }

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleCtaClick = () => {
    if (promoConfig.ctaLink.startsWith('/')) {
      navigate(promoConfig.ctaLink);
    } else {
      window.location.href = promoConfig.ctaLink;
    }
  };

  return (
    <div className="relative w-full bg-[#FDF8F3] text-[#3D1A47] text-xs py-2 px-3 z-40 select-none border-b border-[#E86A17]/15 shadow-2xs overflow-hidden group">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* Left Badge: Vietnam Airlines style Golden Lotus SVG Icon + Normal weight badge text */}
        <div 
          onClick={handleCtaClick}
          className="hidden sm:flex items-center gap-1.5 shrink-0 bg-[#68259E]/10 text-[#68259E] px-3 py-0.5 rounded-full text-xs font-normal border border-[#68259E]/15 z-10 cursor-pointer hover:bg-[#68259E]/15 transition-colors"
        >
          {/* Stylized Golden Lotus SVG emblem */}
          <svg className="w-4 h-4 text-amber-600 inline-block shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C12 2 9 7.5 9 11.5C9 14.5 10.3 16.2 12 16.8C13.7 16.2 15 14.5 15 11.5C15 7.5 12 2 12 2Z" />
            <path d="M7.5 9C7.5 9 4.5 12.5 5.5 16.5C6 18.5 8 19.8 10.5 19.8C11.3 19.8 12.1 19.5 12.7 19.1C10.8 18.3 9.4 16.8 9 14.8C8.3 12.3 9.1 10.3 9.6 9.3C8.6 8.8 7.5 9 7.5 9Z" />
            <path d="M16.5 9C16.5 9 15.4 8.8 14.4 9.3C14.9 10.3 15.7 12.3 15 14.8C14.6 16.8 13.2 18.3 11.3 19.1C11.9 19.5 12.7 19.8 13.5 19.8C16 19.8 18 18.5 18.5 16.5C19.5 12.5 16.5 9 16.5 9Z" />
          </svg>
          <span>{promoConfig.badge || 'Mùa Lễ Vu Lan Báo Hiếu'}</span>
        </div>

        {/* Continuous Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div 
            className="animate-marquee flex items-center whitespace-nowrap gap-8 group-hover:[animation-play-state:paused] cursor-pointer" 
            onClick={handleCtaClick}
          >
            {/* Repeated Stream with Red Price & Red Expiry, No Duplicate CTA Inside */}
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="flex items-center gap-2.5 shrink-0 text-xs">
                
                {/* Main Narrative Text */}
                <span className="font-normal text-[#3D1A47]">
                  Tri ân Đấng Sinh Thành — Ưu đãi đặc biệt dịch vụ chăm sóc người cao tuổi tại nhà
                </span>

                {/* Highlighted Price Tag (RED COLOR) */}
                <span className="font-bold text-[#DC2626]">
                  chỉ từ 299k/buổi
                </span>

                <span className="font-normal text-[#3D1A47]">
                  · Quà tặng thiệp viết tay &amp; hoa tươi tri ân.
                </span>
                
                <span className="text-plum-deep/30 font-light mx-2">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Button & Close Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button 
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1 bg-[#E86A17] hover:bg-[#d45b0f] text-white font-medium px-3.5 py-1 rounded-full text-xs transition-all shadow-2xs active:scale-95 cursor-pointer"
          >
            <span>{promoConfig.ctaText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-5 h-5 rounded-full hover:bg-plum-deep/10 flex items-center justify-center text-plum-deep/60 hover:text-plum-deep transition-colors cursor-pointer text-xs font-normal"
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
