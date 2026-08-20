import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import menu from '../config/menu.json';
import { trackEvent } from '../utils/analytics';

const TopNavBar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, path) => {
    if (path && path.includes('#')) {
      const [basePath, hashPart] = path.split('#');
      const targetHash = `#${hashPart}`;
      const currentPath = window.location.pathname;

      if ((basePath === '/' || basePath === '') && currentPath === '/') {
        const targetElement = document.querySelector(targetHash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', path);
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-plum-deep/5 text-plum-deep transition-all duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full">
        {/* Single row: Logo | Nav links | Hotline + Language */}
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
              <img alt="ANTCARE logo" className="h-10 md:h-12 w-auto object-contain" src="/images/logo.png" />
            </Link>
          </div>

          {/* Desktop: Nav links (center) */}
          <div className="hidden md:flex items-center gap-0.5">
            {menu.map(item => item.children ? (
              <div key={item.id} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium">
                  <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} /> <span className="text-[9px] group-hover:text-earth-orange-bright">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-xl border border-surface-lavender opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="flex flex-col py-2">
                    {item.children.map(child => (
                      <a 
                        key={child.id} 
                        className="px-5 py-2.5 text-sm text-plum-deep hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors" 
                        href={child.path} 
                        onClick={(e) => handleNavClick(e, child.path)}
                        dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a 
                key={item.id} 
                className="group flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium" 
                href={item.path} 
                onClick={(e) => handleNavClick(e, item.path)}
                dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} 
              />
            ))}
          </div>

          {/* Desktop: Hotline + Language (right) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a onClick={() => trackEvent('click_hotline', { location: 'header_desktop' })} className="flex items-center gap-2 px-4 py-2 border border-[#68259E]/30 rounded-full text-plum-deep hover:bg-earth-orange-bright hover:text-white hover:border-earth-orange-bright transition-all duration-300 shadow-sm hover:shadow-md group" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">call</span>
              <span className="text-[15px] font-bold">{siteInfo.hotline}</span>
            </a>
            <div className="h-5 w-px bg-border-muted"></div>
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-muted text-sm font-medium text-plum-deep hover:border-plum-deep/30 hover:bg-plum-deep/5 transition-all">
                <img src={i18n.language === 'en' ? '/images/gb-w20.png' : '/images/vn-w20.png'} srcSet={i18n.language === 'en' ? '/images/gb-w40.png 2x' : '/images/vn-w40.png 2x'} alt={i18n.language === 'en' ? 'EN' : 'VN'} className="w-5 h-auto rounded-sm border border-border-muted/30" /> {i18n.language === 'en' ? 'EN' : 'VN'} <span className="text-[9px] opacity-50">▼</span>
              </button>
              <div className="absolute top-full right-0 mt-1 w-36 bg-white rounded-lg shadow-xl border border-surface-lavender opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="flex flex-col py-1">
                  <button onClick={() => i18n.changeLanguage("vi")} className="flex items-center gap-2 px-4 py-2 text-sm text-primary font-bold hover:bg-earth-orange-bright/10 bg-earth-orange-bright/5 transition-colors text-left w-full">
                    <img src="/images/vn-w20.png" srcSet="/images/vn-w40.png 2x" alt="VN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> Tiếng Việt
                  </button>
                  <button onClick={() => i18n.changeLanguage("en")} className="flex items-center gap-2 px-4 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-earth-orange-bright/10 transition-colors text-left w-full">
                    <img src="/images/gb-w20.png" srcSet="/images/gb-w40.png 2x" alt="EN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> English
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Compact hotline + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a onClick={() => trackEvent('click_hotline', { location: 'header_mobile' })} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#68259E]/30 rounded-full text-plum-deep hover:bg-earth-orange-bright hover:text-white hover:border-earth-orange-bright transition-all text-sm font-bold active:bg-earth-orange-dark" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>
              <span className="material-symbols-outlined" style={{fontSize: "16px"}}>call</span> {siteInfo.hotline}
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-plum-deep/10 transition-colors" aria-label="Mở menu">
              <span className="material-symbols-outlined text-plum-deep">{isMobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-border-muted ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col py-2">
            {menu.map(item => (
              <div key={item.id} className="flex flex-col">
                <a 
                  className="px-4 py-3 text-sm text-plum-deep font-medium hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors border-b border-border-muted/50" 
                  href={item.path} 
                  dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} 
                  onClick={(e) => { handleNavClick(e, item.path); setIsMobileMenuOpen(false); }} 
                />
                {item.children && (
                  <div className="flex flex-col bg-surface-lavender/30 pl-4">
                    {item.children.map(child => (
                      <a 
                        key={child.id} 
                        className="px-4 py-3 text-sm text-plum-deep/80 hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors border-b border-border-muted/30" 
                        href={child.path} 
                        dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }} 
                        onClick={(e) => { handleNavClick(e, child.path); setIsMobileMenuOpen(false); }} 
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 px-4 py-3 border-t border-border-muted mt-1">
              <button onClick={() => { i18n.changeLanguage("vi"); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-earth-orange-bright transition-colors bg-earth-orange-bright/10 px-4 py-2 rounded-lg">
                <img src="/images/vn-w20.png" srcSet="/images/vn-w40.png 2x" alt="VN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> Tiếng Việt
              </button>
              <button onClick={() => { i18n.changeLanguage("en"); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-plum-deep/5">
                <img src="/images/gb-w20.png" srcSet="/images/gb-w40.png 2x" alt="EN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> English
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
