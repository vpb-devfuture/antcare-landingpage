import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import promoConfig from '../config/promo.json';

const AnnouncementBar = () => {
  const { t, i18n } = useTranslation();
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

  const isEn = i18n.language === 'en';

  return (
    <div className="relative w-full bg-[#FDF8F3] text-[#3D1A47] text-xs py-2 px-3 z-40 select-none border-b border-[#E86A17]/15 shadow-2xs overflow-hidden group">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* Left Badge */}
        <div 
          onClick={handleCtaClick}
          className="hidden sm:flex items-center gap-1.5 shrink-0 bg-[#68259E]/10 text-[#68259E] px-3 py-0.5 rounded-full text-xs font-normal border border-[#68259E]/15 z-10 cursor-pointer hover:bg-[#68259E]/15 transition-colors"
        >
          <span className="text-xs select-none">🥮</span>
          <span>{isEn ? 'Mid-Autumn Reunion' : (promoConfig.badge || 'Tết Trung Thu Đoàn Viên')}</span>
        </div>

        {/* Continuous Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div 
            className="animate-marquee flex items-center whitespace-nowrap gap-8 group-hover:[animation-play-state:paused] cursor-pointer" 
            onClick={handleCtaClick}
          >
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="flex items-center gap-2.5 shrink-0 text-xs">
                
                {/* Main Narrative Text */}
                <span className="font-normal text-[#3D1A47]">
                  {isEn 
                    ? 'Mid-Autumn Reunion — Special home elderly care experience package' 
                    : 'Vui Tết Trung Thu Đoàn Viên — Ưu đãi đặc biệt dịch vụ chăm sóc người cao tuổi tại nhà'}
                </span>

                {/* Highlighted Price Tag (RED COLOR) */}
                <span className="font-bold text-[#DC2626]">
                  {isEn ? 'from only 299k/session' : 'chỉ từ 299k/buổi'}
                </span>

                <span className="font-normal text-[#3D1A47]">
                  {isEn ? '· Handwritten gift card & fresh flowers included.' : '· Quà tặng thiệp viết tay & hoa tươi tri ân.'}
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
            <span>{isEn ? 'Register Now' : promoConfig.ctaText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-5 h-5 rounded-full hover:bg-plum-deep/10 flex items-center justify-center text-plum-deep/60 hover:text-plum-deep transition-colors cursor-pointer text-xs font-normal"
            title={isEn ? 'Close notice' : 'Đóng thông báo'}
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
