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

  const isEn = i18n.language === 'en';
  const newsItems = promoConfig.items || [];

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleItemClick = (targetPath) => {
    if (targetPath.startsWith('/')) {
      navigate(targetPath);
    } else {
      window.location.href = targetPath;
    }
  };

  const handleCtaClick = () => {
    const link = promoConfig.ctaLink || '/news';
    if (link.startsWith('/')) {
      navigate(link);
    } else {
      window.location.href = link;
    }
  };

  const isCustomPromo = promoConfig.mode === 'promo' && promoConfig.fullText;
  const badgeText = isEn
    ? (promoConfig.badgeEn || t('announcement.badge', 'News & Guides'))
    : (promoConfig.badge || t('announcement.badge', 'Tin tức & Cẩm nang'));
  const ctaButtonText = isEn
    ? (promoConfig.ctaTextEn || t('announcement.cta', 'All News'))
    : (promoConfig.ctaText || t('announcement.cta', 'Xem tin tức'));

  return (
    <div className="relative w-full bg-[#FDF8F3] text-[#3D1A47] text-xs py-2 px-3 z-40 select-none border-b border-[#E86A17]/15 shadow-2xs overflow-hidden group">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3 relative">
        
        {/* Left Badge */}
        <button 
          onClick={handleCtaClick}
          className="hidden sm:inline-flex items-center gap-1.5 shrink-0 bg-[#68259E]/10 hover:bg-[#68259E]/15 text-[#68259E] px-3 py-1 rounded-full text-xs font-semibold border border-[#68259E]/20 z-10 cursor-pointer transition-all active:scale-95 shadow-2xs"
          title={isEn ? 'View all news' : 'Xem trang tin tức'}
        >
          <span className="text-xs select-none">📰</span>
          <span>{badgeText}</span>
        </button>

        {/* Continuous Marquee Track */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          {/* Subtle fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#FDF8F3] to-transparent z-1 hidden sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#FDF8F3] to-transparent z-1 hidden sm:block" />

          <div 
            className="animate-marquee flex items-center whitespace-nowrap gap-6 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: `${promoConfig.speedSeconds || 108}s` }}
          >
            {[0, 1, 2].map((repeatIdx) => (
              <div key={repeatIdx} className="flex items-center gap-6 shrink-0">
                {isCustomPromo ? (
                  <div 
                    onClick={handleCtaClick} 
                    className="flex items-center gap-2.5 shrink-0 text-xs cursor-pointer"
                  >
                    <span className="font-normal text-[#3D1A47]">{promoConfig.fullText}</span>
                    {promoConfig.highlightText && (
                      <span className="font-bold text-[#DC2626]">{promoConfig.highlightText}</span>
                    )}
                    <span className="text-plum-deep/30 font-light mx-2">✦</span>
                  </div>
                ) : (
                  newsItems.map((item, idx) => {
                    const categoryName = isEn ? (item.categoryEn || item.category) : item.category;
                    const title = isEn ? (item.titleEn || item.title) : item.title;
                    const link = item.link || '/news';

                    return (
                      <div 
                        key={`${repeatIdx}-${idx}`}
                        onClick={() => handleItemClick(link)}
                        className="inline-flex items-center gap-2 shrink-0 cursor-pointer group/item py-0.5"
                        title={title}
                      >
                        {/* News Category Tile / Tag */}
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/95 border border-[#E86A17]/25 text-[#E86A17] font-semibold text-[11px] shadow-2xs group-hover/item:bg-[#E86A17] group-hover/item:text-white transition-all">
                          {categoryName}
                        </span>

                        {/* Article Title */}
                        <span className="font-medium text-[#2D1537] group-hover/item:text-[#E86A17] group-hover/item:underline underline-offset-2 transition-colors max-w-[280px] sm:max-w-[380px] md:max-w-[480px] truncate text-xs">
                          {title}
                        </span>

                        {/* Separator */}
                        <span className="text-[#68259E]/30 font-light mx-2 select-none">✦</span>
                      </div>
                    );
                  })
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Button & Close Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button 
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center gap-1 bg-[#E86A17] hover:bg-[#d45b0f] text-white font-medium px-3.5 py-1 rounded-full text-xs transition-all shadow-2xs active:scale-95 cursor-pointer shrink-0"
          >
            <span>{ctaButtonText}</span>
            <span className="text-xs">→</span>
          </button>

          <button 
            onClick={handleDismiss} 
            className="w-5 h-5 rounded-full hover:bg-plum-deep/10 flex items-center justify-center text-plum-deep/60 hover:text-plum-deep transition-colors cursor-pointer text-xs font-normal shrink-0"
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

