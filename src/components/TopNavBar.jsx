import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import menu from '../config/menu.json';
import { trackEvent } from '../utils/analytics';

const TopNavBar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({ services: true });

  const toggleSection = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, path) => {
    if (path && path.includes('#')) {
      const [basePath, hashPart] = path.split('#');
      const targetHash = `#${hashPart}`;
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const cleanBasePath = (basePath === '' || basePath === '/') ? '/' : basePath.replace(/\/$/, '');

      const isSamePage = (currentPath === cleanBasePath) ||
                         (currentPath === '/recruitment' && (cleanBasePath === '/hop-tac' || cleanBasePath === '/lien-he' || cleanBasePath === '/recruitment')) ||
                         ((currentPath === '/lien-he' || currentPath === '/hop-tac') && cleanBasePath === '/recruitment');

      if (isSamePage) {
        const targetElement = document.querySelector(targetHash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', path);
        }
      }
    }
  };

  const renderNavLink = (item, className, onClickExtra) => {
    const path = item.path;
    const i18nContent = <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} />;

    if (!path) {
      return (
        <button className={className} onClick={onClickExtra}>
          {i18nContent}
        </button>
      );
    }

    if (path.includes('#')) {
      return (
        <a
          href={path}
          className={className}
          onClick={(e) => {
            handleNavClick(e, path);
            if (onClickExtra) onClickExtra(e);
          }}
        >
          {i18nContent}
        </a>
      );
    }

    return (
      <Link
        to={path}
        className={className}
        onClick={(e) => {
          if (onClickExtra) onClickExtra(e);
          window.scrollTo(0, 0);
        }}
      >
        {i18nContent}
      </Link>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-plum-deep/5 text-plum-deep transition-all duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full">
        {/* Single row: Logo | Nav links | Hotline + Language */}
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer hover:opacity-95 transition-opacity">
              <img alt="ANTCARE – Kiến chăm tổ – Chăm sóc người cao tuổi tại Hà Nội" className="h-[46px] md:h-[58px] w-auto object-contain py-0.5" src="/images/logo.png" />
            </Link>
          </div>

          {/* Desktop: Nav links (center) */}
          <div className="hidden md:flex items-center gap-0.5">
            {menu.map(item => item.children ? (
              <div key={item.id} className="relative group">
                {item.path ? (
                  item.path.includes('#') ? (
                    <a
                      href={item.path}
                      className="flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium"
                      onClick={(e) => handleNavClick(e, item.path)}
                    >
                      <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} /> <span className="text-[9px] group-hover:text-earth-orange-bright">▼</span>
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} /> <span className="text-[9px] group-hover:text-earth-orange-bright">▼</span>
                    </Link>
                  )
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium">
                    <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} /> <span className="text-[9px] group-hover:text-earth-orange-bright">▼</span>
                  </button>
                )}
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-xl border border-surface-lavender opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="flex flex-col py-2">
                    {item.children.map(child => (
                      child.path && !child.path.includes('#') ? (
                        <Link
                          key={child.id}
                          to={child.path}
                          className="px-5 py-2.5 text-sm text-plum-deep hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors"
                          onClick={() => window.scrollTo(0, 0)}
                          dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }}
                        />
                      ) : (
                        <a
                          key={child.id}
                          className="px-5 py-2.5 text-sm text-plum-deep hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors"
                          href={child.path}
                          onClick={(e) => handleNavClick(e, child.path)}
                          dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }}
                        />
                      )
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              item.path && !item.path.includes('#') ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className="group flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium"
                  onClick={() => window.scrollTo(0, 0)}
                  dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                />
              ) : (
                <a
                  key={item.id}
                  className="group flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium"
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                />
              )
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
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-plum-deep/10 active:bg-plum-deep/20 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined text-plum-deep text-[28px]">{isMobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Dropdown / Drawer (Rendered outside <nav> to prevent backdrop-blur containing-block clipping) */}
    {isMobileMenuOpen && (
      <div
        id="mobile-nav-drawer"
        className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-white shadow-2xl flex flex-col border-t border-border-muted overflow-y-auto overscroll-contain"
        style={{
          WebkitOverflowScrolling: 'touch',
          height: 'calc(100dvh - 64px)',
          maxHeight: 'calc(100dvh - 64px)'
        }}
      >
        <div className="flex flex-col px-4 py-4 pb-36 max-w-lg mx-auto w-full">
          {/* Quick Contact & Action Banner in Mobile Drawer */}
          <div className="flex items-center justify-between p-3.5 mb-3 bg-gradient-to-r from-plum-deep/5 via-earth-orange-bright/5 to-surface-lavender/30 rounded-2xl border border-plum-deep/10">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-earth-orange-bright text-[22px]">support_agent</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-plum-deep/60">Tư vấn miễn phí 24/7</div>
                <a href={`tel:${siteInfo.hotline.replace(/ /g, "")}`} className="text-sm font-bold text-earth-orange-bright hover:underline">
                  {siteInfo.hotline}
                </a>
              </div>
            </div>
            <a
              href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}
              onClick={() => trackEvent('click_hotline', { location: 'drawer_header' })}
              className="flex items-center gap-1 px-3 py-1.5 bg-earth-orange-bright text-white text-xs font-bold rounded-full shadow-sm hover:bg-earth-orange-dark active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[14px]">call</span> Gọi ngay
            </a>
          </div>

          {/* Main Navigation Accordion */}
          <div className="flex flex-col divide-y divide-border-muted/40">
            {menu.map(item => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!expandedItems[item.id];
              const menuIcons = {
                services: 'medical_services',
                products: 'inventory_2',
                about: 'info',
                contact: 'support_agent',
                news: 'newspaper',
                activities: 'volunteer_activism'
              };
              const iconName = menuIcons[item.id] || 'arrow_forward';

              if (hasChildren) {
                return (
                  <div key={item.id} className="py-1.5">
                    <button
                      type="button"
                      onClick={() => toggleSection(item.id)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-plum-deep/5 active:bg-plum-deep/10 transition-colors text-left group cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isExpanded ? 'bg-earth-orange-bright/15 text-earth-orange-bright' : 'bg-plum-deep/5 text-plum-deep/70 group-hover:text-plum-deep'}`}>
                          <span className="material-symbols-outlined text-[19px]">{iconName}</span>
                        </div>
                        <span
                          className={`text-[15px] font-bold transition-colors ${isExpanded ? 'text-earth-orange-bright' : 'text-plum-deep'}`}
                          dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                        />
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-plum-deep/5 text-plum-deep/60">
                          {item.children.length}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined transition-transform duration-200 text-[20px] ${isExpanded ? 'rotate-180 text-earth-orange-bright' : 'text-plum-deep/40'}`}>
                        expand_more
                      </span>
                    </button>

                    {/* Sub-tabs List */}
                    {isExpanded && (
                      <div className="mt-1 mb-2 ml-4 pl-3 border-l-2 border-earth-orange-bright/30 flex flex-col gap-1">
                        {item.children.map(child => {
                          const isChildExternalOrPage = child.path && !child.path.includes('#');
                          return isChildExternalOrPage ? (
                            <Link
                              key={child.id}
                              className="flex items-center gap-2.5 px-3 py-2.5 text-[14px] text-plum-deep/80 hover:text-earth-orange-bright hover:bg-earth-orange-bright/5 active:bg-earth-orange-bright/10 rounded-lg transition-colors font-medium min-h-[44px]"
                              to={child.path}
                              onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                            >
                              <span className="material-symbols-outlined text-[16px] text-plum-deep/40">subdirectory_arrow_right</span>
                              <span dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }} />
                            </Link>
                          ) : (
                            <a
                              key={child.id}
                              className="flex items-center gap-2.5 px-3 py-2.5 text-[14px] text-plum-deep/80 hover:text-earth-orange-bright hover:bg-earth-orange-bright/5 active:bg-earth-orange-bright/10 rounded-lg transition-colors font-medium min-h-[44px]"
                              href={child.path}
                              onClick={(e) => { handleNavClick(e, child.path); setIsMobileMenuOpen(false); }}
                            >
                              <span className="material-symbols-outlined text-[16px] text-plum-deep/40">subdirectory_arrow_right</span>
                              <span dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }} />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // Single item without children (News, Activities, etc.)
              return (
                <div key={item.id} className="py-1.5">
                  {item.path && !item.path.includes('#') ? (
                    <Link
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-plum-deep/5 active:bg-plum-deep/10 transition-colors text-left cursor-pointer"
                      to={item.path}
                      onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-plum-deep/5 text-plum-deep/70 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[19px]">{iconName}</span>
                        </div>
                        <span
                          className="text-[15px] font-bold text-plum-deep"
                          dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                        />
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-plum-deep/40">chevron_right</span>
                    </Link>
                  ) : (
                    <a
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-plum-deep/5 active:bg-plum-deep/10 transition-colors text-left cursor-pointer"
                      href={item.path}
                      onClick={(e) => { handleNavClick(e, item.path); setIsMobileMenuOpen(false); }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-plum-deep/5 text-plum-deep/70 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[19px]">{iconName}</span>
                        </div>
                        <span
                          className="text-[15px] font-bold text-plum-deep"
                          dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                        />
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-plum-deep/40">chevron_right</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Language Switcher in Mobile Drawer */}
          <div className="pt-6 mt-3 border-t border-border-muted/50 px-1 flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-plum-deep/60">Ngôn ngữ / Language:</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { i18n.changeLanguage('vi'); setIsMobileMenuOpen(false); }}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  i18n.language !== 'en'
                    ? 'bg-earth-orange-bright text-white shadow-sm'
                    : 'bg-plum-deep/5 text-plum-deep hover:bg-plum-deep/10'
                }`}
              >
                <img src="/images/vn-w20.png" srcSet="/images/vn-w40.png 2x" alt="VN" className="w-5 h-auto rounded-sm border border-black/10" />
                Tiếng Việt
              </button>
              <button
                type="button"
                onClick={() => { i18n.changeLanguage('en'); setIsMobileMenuOpen(false); }}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  i18n.language === 'en'
                    ? 'bg-earth-orange-bright text-white shadow-sm'
                    : 'bg-plum-deep/5 text-plum-deep hover:bg-plum-deep/10'
                }`}
              >
                <img src="/images/gb-w20.png" srcSet="/images/gb-w40.png 2x" alt="EN" className="w-5 h-auto rounded-sm border border-black/10" />
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default TopNavBar;
