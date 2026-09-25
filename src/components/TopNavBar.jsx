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
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-plum-deep/10 transition-colors" aria-label="Mở menu">
              <span className="material-symbols-outlined text-plum-deep">{isMobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto overscroll-contain shadow-2xl flex flex-col border-t border-border-muted"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex flex-col px-4 py-4 pb-32 max-w-lg mx-auto w-full">
            {menu.map(item => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!expandedItems[item.id];

              if (hasChildren) {
                return (
                  <div key={item.id} className="border-b border-border-muted/50 py-1">
                    <button
                      type="button"
                      onClick={() => toggleSection(item.id)}
                      className="w-full flex items-center justify-between px-3 py-3.5 text-[15px] font-semibold text-plum-deep hover:text-earth-orange-bright transition-colors text-left"
                    >
                      <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} />
                      <span className={`material-symbols-outlined text-plum-deep/50 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="flex flex-col bg-surface-lavender/30 rounded-xl mb-2 py-1 pl-2">
                        {item.children.map(child => (
                          child.path && !child.path.includes('#') ? (
                            <Link
                              key={child.id}
                              className="px-4 py-3 text-sm text-plum-deep/85 hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright rounded-lg transition-colors border-b border-border-muted/20 last:border-b-0"
                              to={child.path}
                              dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }}
                              onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                            />
                          ) : (
                            <a
                              key={child.id}
                              className="px-4 py-3 text-sm text-plum-deep/85 hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright rounded-lg transition-colors border-b border-border-muted/20 last:border-b-0"
                              href={child.path}
                              dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }}
                              onClick={(e) => { handleNavClick(e, child.path); setIsMobileMenuOpen(false); }}
                            />
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Single item without children (News, Activities, etc.)
              return (
                <div key={item.id} className="border-b border-border-muted/50 py-1">
                  {item.path && !item.path.includes('#') ? (
                    <Link
                      className="flex items-center px-3 py-3.5 text-[15px] font-semibold text-plum-deep hover:text-earth-orange-bright transition-colors"
                      to={item.path}
                      dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                      onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                    />
                  ) : (
                    <a
                      className="flex items-center px-3 py-3.5 text-[15px] font-semibold text-plum-deep hover:text-earth-orange-bright transition-colors"
                      href={item.path}
                      dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }}
                      onClick={(e) => { handleNavClick(e, item.path); setIsMobileMenuOpen(false); }}
                    />
                  )}
                </div>
              );
            })}

            {/* Language Switcher in Mobile Drawer */}
            <div className="pt-6 px-3 flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-plum-deep/60">Ngôn ngữ / Language:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { i18n.changeLanguage('vi'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
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
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
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
    </nav>
  );
};

export default TopNavBar;
