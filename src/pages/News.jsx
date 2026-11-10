import React, { useEffect, useState } from 'react';
import { useAppTranslation, sortArticlesByDate } from '../utils/i18nHelper';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newsViData from '../data/news.json';
import newsEnData from '../data/news.en.json';

const News = () => {
  const { isEn, tr } = useAppTranslation();
  const currentNewsData = isEn ? newsEnData : newsViData;
  const location = useLocation();
  const navigate = useNavigate();

  const isSonTieuPath = 
    location.pathname.startsWith('/son-tieu') || 
    location.pathname.startsWith('/tieu-son');

  const isKinhNguyetPath = 
    location.pathname.startsWith('/kinh-nguyet') || 
    location.pathname.startsWith('/kinhnguyet') || 
    location.pathname.startsWith('/cam-nang') || 
    location.pathname.startsWith('/camnang');

  const isHandbook = isSonTieuPath || isKinhNguyetPath;

  const basePrefix = isSonTieuPath 
    ? '/son-tieu' 
    : isKinhNguyetPath 
      ? '/kinh-nguyet' 
      : '/news';

  // Strict classification to guarantee 0 crossover between Kinh nguyệt and Tiểu són
  const isSonTieuItem = (item) => {
    if (!item) return false;
    if (item.category === 'Tiểu són' || item.group === 'son-tieu' || item.category === 'Incontinence' || item.category === 'Urinary Incontinence') return true;
    if (item.slug && !item.slug.includes('quan-kinh-nguyet') && (
      item.slug.includes('son-tieu') || 
      item.slug.includes('tieu-son') || 
      item.slug.includes('ri-tieu') || 
      item.slug.includes('quan-chong-son')
    )) return true;
    return false;
  };

  const isKinhNguyetItem = (item) => {
    if (!item) return false;
    if (isSonTieuItem(item)) return false;
    if (item.category === 'Kinh nguyệt' || item.category === 'Menstrual Care' || item.category === 'Menstrual Health') return true;
    if (item.group === 'kinh-nguyet') return true;
    if (item.category === 'Cẩm nang') return true;
    if (item.slug && (
      item.slug.includes('kinh-nguyet') || 
      item.slug.includes('nguyet-san') || 
      item.slug.includes('tampon') || 
      item.slug.includes('bang-ve-sinh') || 
      item.slug.includes('den-thang') ||
      item.slug.includes('quan-boy-short') ||
      item.slug.includes('quan-lot-nu') ||
      item.slug.includes('pfas') ||
      item.slug.includes('oeko-tex')
    )) return true;
    return false;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const siteSuffix = isEn ? 'ANTCARE' : 'ANTCARE – Kiến chăm tổ';
    if (isSonTieuPath) {
      document.title = isEn 
        ? `Incontinence & Pelvic Health Handbook | ${siteSuffix}`
        : `Cẩm nang Tiểu són & Bài tập Kegel | ${siteSuffix}`;
    } else if (isKinhNguyetPath) {
      document.title = isEn 
        ? `Menstrual Health & Period Care Handbook | ${siteSuffix}`
        : `Cẩm nang Kinh nguyệt & Sức khỏe Phụ nữ | ${siteSuffix}`;
    } else {
      document.title = isEn 
        ? `Healthcare News & Medical Escort Guides | ${siteSuffix}`
        : `Tin tức & Đồng hành khám bệnh | ${siteSuffix}`;
    }
  }, [isSonTieuPath, isKinhNguyetPath, isEn]);

  // Section list strictly separated by topic
  const sectionList = (currentNewsData.list || []).filter(item => {
    if (isSonTieuPath) return isSonTieuItem(item);
    if (isKinhNguyetPath) return isKinhNguyetItem(item);
    return !isSonTieuItem(item) && !isKinhNguyetItem(item);
  });

  const sortedList = sortArticlesByDate(sectionList);

  const featuredArticle = isHandbook
    ? (sortedList.find(item => item.isPinned) || sortedList[0])
    : (currentNewsData.featured && !isSonTieuItem(currentNewsData.featured) && !isKinhNguyetItem(currentNewsData.featured)
        ? currentNewsData.featured
        : (sortedList.find(item => item.isPinned) || sortedList[0]));

  const remainingList = sortedList.filter(item => item.id !== featuredArticle?.id && item.slug !== featuredArticle?.slug);

  const allArticles = featuredArticle 
    ? [featuredArticle, ...remainingList]
    : sortedList;

  // Carousel articles for top left hero banner (Default slide 0 is fixed featured article)
  const carouselArticles = allArticles.slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide(prev => (prev - 1 + carouselArticles.length) % carouselArticles.length);
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide(prev => (prev + 1) % carouselArticles.length);
  };

  // Top Right 3 Stacked Cards (3 next newest articles)
  const topRightArticles = allArticles.slice(1, 4);

  // Category filtering for archive list below (News only)
  const [selectedCategory, setSelectedCategory] = useState(isEn ? 'All' : 'Tất cả');

  useEffect(() => {
    if (!isHandbook) {
      if (location.pathname.includes('dong-hanh-di-kham') || location.pathname.includes('dong-hanh-kham-benh')) {
        setSelectedCategory(isEn ? 'Medical Escort' : 'Đồng hành đi khám');
      } else if (location.pathname.includes('cham-soc-nguoi-cao-tuoi')) {
        setSelectedCategory(isEn ? 'Elderly Care' : 'Chăm sóc người cao tuổi');
      } else {
        setSelectedCategory(isEn ? 'All' : 'Tất cả');
      }
    }
    setCurrentPage(1);
    setActiveSlide(0);
  }, [isEn, location.pathname, isHandbook]);

  const handbookTabs = [
    { id: 'kinh-nguyet', path: '/kinh-nguyet', label: tr('Kinh nguyệt', 'Menstrual Care') },
    { id: 'son-tieu', path: '/son-tieu', label: tr('Tiểu són', 'Incontinence') }
  ];

  const newsCategories = isEn 
    ? ['All', 'News & Updates', 'Medical Escort', 'Elderly Care', 'Healthcare']
    : ['Tất cả', 'Tin tức', 'Đồng hành đi khám', 'Chăm sóc người cao tuổi', 'Chăm sóc sức khỏe'];

  const getCategoryLabel = (cat) => {
    if (isEn) return cat;
    const map = {
      'Tất cả': 'Tất cả',
      'All': 'All',
      'Kinh nguyệt': 'Kinh nguyệt',
      'Menstrual Health': 'Menstrual Health',
      'Menstrual Care': 'Menstrual Care',
      'Tiểu són': 'Tiểu són',
      'Urinary Incontinence': 'Urinary Incontinence',
      'Incontinence': 'Incontinence',
      'Cẩm nang': 'Cẩm nang',
      'Đồng hành đi khám': 'Đồng hành đi khám',
      'Medical Escort': 'Medical Escort',
      'Tin tức': 'Tin tức',
      'News & Updates': 'News & Updates',
      'Chăm sóc người cao tuổi': 'Chăm sóc người cao tuổi',
      'Elderly Care': 'Elderly Care',
      'Chăm sóc sức khỏe': 'Chăm sóc sức khỏe',
      'Healthcare': 'Healthcare'
    };
    return map[cat] || cat;
  };

  // Pagination state (Max 12 articles / page)
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const isAllCategory = selectedCategory === 'Tất cả' || selectedCategory === 'All';
  const filteredArchive = isHandbook
    ? allArticles
    : isAllCategory
      ? allArticles
      : ((selectedCategory === 'Đồng hành đi khám' || selectedCategory === 'Medical Escort')
          ? allArticles.filter(item => item.category === 'Đồng hành đi khám' || item.group === 'dong-hanh-di-kham' || item.group === 'dai-hoc-y-ha-noi' || (item.slug && item.slug.includes('kham')))
          : allArticles.filter(item => item.category === selectedCategory));

  const totalPages = Math.ceil(filteredArchive.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArchive = filteredArchive.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Maximum ~10 pages displayed per window
  const PAGE_WINDOW = 10;
  const currentBlock = Math.floor((currentPage - 1) / PAGE_WINDOW);
  const startPage = currentBlock * PAGE_WINDOW + 1;
  const endPage = Math.min(startPage + PAGE_WINDOW - 1, totalPages);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const currentHeroArticle = carouselArticles[activeSlide] || allArticles[0] || {};

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8 md:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* TOP HERO SECTION: Left Big Banner + Right 3 Stacked Cards (Clean White Theme) */}
        <div className={`grid grid-cols-1 ${topRightArticles.length > 0 ? 'lg:grid-cols-12' : ''} gap-5 sm:gap-6 items-stretch mb-10 md:mb-14`}>
          
          {/* Left Large Hero Banner */}
          <div className={`${topRightArticles.length > 0 ? 'lg:col-span-7 aspect-[16/9] sm:aspect-[1.9/1]' : 'w-full aspect-[16/9] sm:aspect-[2.2/1]'} relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group bg-slate-900 flex flex-col justify-end`}>
            <Link 
              to={`${basePrefix}/${currentHeroArticle.slug || currentHeroArticle.id}`} 
              className="absolute inset-0 z-10 cursor-pointer block"
              aria-label={currentHeroArticle.title}
            >
              <img 
                src={currentHeroArticle.image} 
                alt={currentHeroArticle.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
              />
              {/* Subtle dark gradient overlay at bottom for high legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </Link>

            {/* Carousel Arrow Buttons & Indicators (only if > 1 article in carousel) */}
            {carouselArticles.length > 1 && (
              <>
                <button 
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer border border-white/20"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>

                <button 
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer border border-white/20"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>

                <div className="absolute top-3 right-3 z-30 flex gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {carouselArticles.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveSlide(idx); }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === activeSlide ? 'w-5 bg-earth-orange-bright' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Title Overlay Directly on Image */}
            <div className="relative z-20 p-4 sm:p-5 md:p-6 pointer-events-none">
              <Link to={`${basePrefix}/${currentHeroArticle.slug || currentHeroArticle.id}`} className="block group/link pointer-events-auto">
                <div className="flex items-center gap-2 mb-2">
                  {currentHeroArticle.isPinned && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-950 bg-amber-300 px-2.5 py-0.5 rounded-full shadow-xs">
                      📌 {tr("Đã ghim", "Pinned")}
                    </span>
                  )}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white bg-earth-orange-bright px-2.5 py-0.5 rounded-full">
                    {getCategoryLabel(currentHeroArticle.category || (isSonTieuPath ? 'Tiểu són' : isKinhNguyetPath ? 'Kinh nguyệt' : 'Tin tức'))}
                  </span>
                </div>
                <h1 className="text-base sm:text-lg md:text-2xl font-extrabold md:font-black text-white leading-snug line-clamp-2 group-hover/link:text-earth-orange-bright transition-colors drop-shadow-md tracking-tight">
                  {currentHeroArticle.title}
                </h1>
              </Link>
            </div>
          </div>

          {/* Right Stacked 3 Cards (only if > 0) */}
          {topRightArticles.length > 0 && (
            <div className="lg:col-span-5 flex flex-col justify-start gap-3 sm:gap-3.5">
              {topRightArticles.map((item) => (
                <Link
                  key={item.id}
                  to={`${basePrefix}/${item.slug || item.id}`}
                  className="bg-white hover:bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5 transition-all duration-300 group shadow-2xs hover:shadow-md"
                >
                  <div className="w-24 sm:w-28 h-16 sm:h-20 rounded-md overflow-hidden shrink-0 shadow-2xs border border-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-earth-orange-bright leading-snug line-clamp-2 mb-1.5 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
                      <span className="material-symbols-outlined text-xs text-earth-orange-bright">calendar_today</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>

        {/* ALL ARTICLES ARCHIVE WITH CATEGORY TABS (Clean White Theme) */}
        <section className="pt-6 border-t border-slate-200 scroll-mt-24" id="tat-ca-bai-viet">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
                {isSonTieuPath 
                  ? tr("Cẩm nang Tiểu són & Quần chống són tiểu", "Incontinence & Bladder Care Handbook")
                  : isKinhNguyetPath
                    ? tr("Cẩm nang Kinh nguyệt & Quần lót thấm hút", "Menstrual Health & Period Care Handbook")
                    : tr("Tin tức & Đồng hành khám bệnh", "Healthcare News & Medical Escort Guides")}
              </h2>
              <p className="text-sm text-slate-600">
                {isSonTieuPath
                  ? tr("Kiến thức toàn diện về són tiểu, rỉ tiểu sau sinh, tuổi tiền mãn kinh, bài tập Kegel và giải pháp quần chống són thấm hút từ ANTCARE.", "Comprehensive guide on bladder leaks, postpartum & menopausal incontinence, Kegel exercises, and absorbent apparel from ANTCARE.")
                  : isKinhNguyetPath
                    ? tr("Kiến thức toàn diện về chu kỳ kinh nguyệt, so sánh băng vệ sinh, tampon, cốc, đĩa nguyệt san và giải pháp quần kinh nguyệt chống tràn ANTCARE.", "Comprehensive guides on menstrual cycles, comparing pads, tampons, cups, discs, and leakproof period underwear from ANTCARE.")
                    : tr("Cập nhật tin y tế mới nhất, kinh nghiệm đưa bố mẹ đi khám tại các bệnh viện lớn ở Hà Nội và kiến thức chăm sóc người cao tuổi từ ANTCARE.", "Latest healthcare news, hospital escort experiences in Hanoi, and eldercare insights from ANTCARE.")}
              </p>
            </div>
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {isHandbook ? (
                handbookTabs.map((tab) => {
                  const isActive = (tab.id === 'son-tieu' && isSonTieuPath) || (tab.id === 'kinh-nguyet' && isKinhNguyetPath);
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        navigate(tab.path);
                        setCurrentPage(1);
                        setActiveSlide(0);
                      }}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-primary text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })
              ) : (
                newsCategories.map((cat) => (
                  <button
                    key={getCategoryLabel(cat)}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {getCategoryLabel(cat)}
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedArchive.map((article) => (
              <article key={article.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group duration-300 border border-slate-200/90">
                <Link to={`${basePrefix}/${article.slug || article.id}`} className="h-48 sm:h-52 overflow-hidden block cursor-pointer">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2.5">
                    {article.isPinned && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                        📌 {tr("Đã ghim", "Pinned")}
                      </span>
                    )}
                    <span className="text-[11px] font-bold text-earth-orange-bright uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-earth-orange-bright/10">{getCategoryLabel(article.category)}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{article.date}</span>
                  </div>
                  <Link to={`${basePrefix}/${article.slug || article.id}`} className="block cursor-pointer">
                    <h3 className="font-extrabold text-base sm:text-[17px] text-plum-deep mb-2.5 group-hover:text-earth-orange-bright transition-colors line-clamp-2 leading-snug tracking-tight">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <Link className="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-earth-orange-bright transition-colors text-xs sm:text-sm" to={`${basePrefix}/${article.slug || article.id}`}>
                    {tr("Đọc thêm", "Read article")} <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Control Bar */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-10 pt-6 border-t border-surface-lavender/60">
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(prev => prev - 1);
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === 1}
                aria-label={`${tr("Trang", "Page")} trước`}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all cursor-pointer ${
                  currentPage === 1 
                    ? 'bg-surface-mist text-slate-300 cursor-not-allowed' 
                    : 'bg-surface-mist text-plum-deep hover:bg-primary hover:text-white border border-surface-lavender'
                }`}
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>

              {/* Biểu tượng xem các trang trước */}
              {startPage > 1 && (
                <button
                  onClick={() => {
                    const prevPage = startPage - 1;
                    setCurrentPage(prevPage);
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label={tr("Xem các trang trước", "View previous pages")}
                  title={`${tr("Xem các trang trước", "View previous pages")} (${Math.max(1, startPage - PAGE_WINDOW)} - ${startPage - 1})`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer bg-surface-mist text-plum-deep hover:bg-primary hover:text-white border border-surface-lavender group shadow-2xs"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Danh sách tối đa khoảng 10 trang */}
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-surface-mist text-plum-deep hover:bg-surface-lavender border border-surface-lavender'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Biểu tượng xem các trang sau */}
              {endPage < totalPages && (
                <button
                  onClick={() => {
                    const nextPage = endPage + 1;
                    setCurrentPage(nextPage);
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label={tr("Xem các trang sau", "View next pages")}
                  title={`${tr("Xem các trang sau", "View next pages")} (${endPage + 1} - ${Math.min(totalPages, endPage + PAGE_WINDOW)})`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer bg-surface-mist text-plum-deep hover:bg-primary hover:text-white border border-surface-lavender group shadow-2xs"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(prev => prev + 1);
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === totalPages}
                aria-label={`${tr("Trang", "Page")} sau`}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all cursor-pointer ${
                  currentPage === totalPages 
                    ? 'bg-surface-mist text-slate-300 cursor-not-allowed' 
                    : 'bg-surface-mist text-plum-deep hover:bg-primary hover:text-white border border-surface-lavender'
                }`}
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default News;
