import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import promoConfig from '../config/promo.json';

const AnnouncementBar = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  if (!promoConfig.enabled || !isVisible) {
    return null;
  }

  const isEn = i18n.language === 'en';

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleCtaClick = () => {
    const link = promoConfig.ctaLink || '/#dang-ky';
    if (link.includes('#')) {
      const [path, hash] = link.split('#');
      const currentPath = window.location.pathname;
      if (currentPath === '/' || currentPath === path || !path) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      navigate(link);
    } else if (link.startsWith('/')) {
      navigate(link);
    } else {
      window.location.href = link;
    }
  };

  const badgeText = isEn
    ? (promoConfig.badgeEn || 'NATIONWIDE SHIPPING')
    : (promoConfig.badge || 'GIAO HÀNG TOÀN QUỐC');
    
  const ctaButtonText = isEn
    ? (promoConfig.ctaTextEn || 'Get Launch Info')
    : (promoConfig.ctaText || 'Nhận thông tin ra mắt');

  const items = promoConfig.shippingItems || promoConfig.items || [];

  return (
    <div className="relative w-full bg-gradient-to-r from-[#FFFBF7] via-[#FFF5ED] to-[#FFFBF7] text-[#2D1537] text-xs py-2 px-3 z-40 select-none border-b border-[#E86A17]/20 shadow-2xs overflow-hidden group">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* Left Badge */}
        <button 
          onClick={handleCtaClick}
          className="hidden sm:inline-flex items-center gap-1.5 shrink-0 bg-[#E86A17]/10 hover:bg-[#E86A17]/15 text-[#E86A17] px-3 py-1 rounded-full text-xs font-bold border border-[#E86A17]/25 z-10 cursor-pointer transition-all active:scale-95 shadow-2xs"
          title={isEn ? 'Nationwide Delivery Guarantee' : 'Chính sách giao hàng toàn quốc'}
        >
          <span className="text-xs select-none">🚚</span>
          <span>{badgeText}</span>
        </button>

        {/* Continuous Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          {/* Subtle fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FFFBF7] to-transparent z-1 hidden sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FFFBF7] to-transparent z-1 hidden sm:block" />

          <div 
            className="animate-marquee flex items-center whitespace-nowrap gap-6 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${promoConfig.speedSeconds || 32}s` }}
          >
            {[0, 1, 2].map((repeatIdx) => (
              <div key={repeatIdx} className="flex items-center gap-6 shrink-0">
                {items.map((item, idx) => {
                  const tag = isEn ? (item.tagEn || item.tag || item.categoryEn || item.category) : (item.tag || item.category);
                  const text = isEn ? (item.textEn || item.text || item.titleEn || item.title) : (item.text || item.title);
                  const icon = item.icon || '✦';

                  return (
                    <div 
                      key={`${repeatIdx}-${idx}`}
                      onClick={handleCtaClick}
                      className="inline-flex items-center gap-2 shrink-0 cursor-pointer group/item py-0.5"
                    >
                      {item.icon && <span className="text-sm select-none">{icon}</span>}
                      {tag && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white border border-[#E86A17]/25 text-[#E86A17] font-bold text-[11px] shadow-2xs group-hover/item:bg-[#E86A17] group-hover/item:text-white transition-all">
                          {tag}
                        </span>
                      )}
                      <span className="font-semibold text-[#2D1537] group-hover/item:text-[#E86A17] transition-colors text-xs tracking-tight">
                        {text}
                      </span>
                      <span className="text-[#E86A17]/40 font-light mx-2 select-none">✦</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Button & Close Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button 
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1.5 bg-[#E86A17] hover:bg-[#d45b0f] text-white font-bold px-3.5 py-1 rounded-full text-xs transition-all shadow-xs hover:shadow-sm active:scale-95 cursor-pointer shrink-0"
          >
            <span>{ctaButtonText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-5 h-5 rounded-full hover:bg-black/5 flex items-center justify-center text-[#2D1537]/50 hover:text-[#2D1537] transition-colors cursor-pointer text-xs font-normal shrink-0"
            title={isEn ? 'Close notice' : 'Đóng thông báo'}
            aria-label="Close announcement bar"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;
