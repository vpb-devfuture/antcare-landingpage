import React, { useEffect, useState } from 'react';
import { useAppTranslation, sortArticlesByDate } from '../utils/i18nHelper';
import { Link } from 'react-router-dom';
import activitiesData from '../data/activities.json';

const Activities = () => {
  const { tr, isEn } = useAppTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort activities strictly by date descending (newest date first)
  const sortedActivities = sortArticlesByDate(activitiesData || []);

  // Top Carousel items (first 4 activities)
  const carouselActivities = sortedActivities.slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide(prev => (prev - 1 + carouselActivities.length) % carouselActivities.length);
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide(prev => (prev + 1) % carouselActivities.length);
  };

  // Right Top 3 Stacked Cards (items 1 to 3)
  const topRightActivities = sortedActivities.slice(1, 4);

  // Category Filter state
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const categories = ['Tất cả', 'Y tế Cộng đồng', 'Tập huấn Sơ cấp cứu', 'Thiện nguyện', 'Hợp tác chiến lược', 'Workshop'];

  const getCategoryLabel = (cat) => {
    if (!isEn) return cat;
    const map = {
      'Tất cả': 'All',
      'Y tế Cộng đồng': 'Community Healthcare',
      'Tập huấn Sơ cấp cứu': 'First Aid Training',
      'Thiện nguyện': 'Charity & Community',
      'Hợp tác chiến lược': 'Strategic Partnership',
      'Workshop': 'Workshop & Seminars'
    };
    return map[cat] || cat;
  };

  // Pagination state (Max 9 items / page)
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const filteredArchive = selectedCategory === 'Tất cả'
    ? sortedActivities
    : sortedActivities.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredArchive.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArchive = filteredArchive.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const currentHeroArticle = carouselActivities[activeSlide] || sortedActivities[0];

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8 md:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* TOP HERO SECTION: Left Big Banner + Right 3 Stacked Cards (Matching News Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch mb-10 md:mb-14">
          
          {/* Left Large Hero Banner (7 Columns) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group aspect-[16/9] sm:aspect-[1.9/1] bg-slate-900 flex flex-col justify-end">
            <Link 
              to={`/activities/${currentHeroArticle.slug || currentHeroArticle.id}`} 
              className="absolute inset-0 z-10 cursor-pointer block"
              aria-label={currentHeroArticle.title}
            >
              <img 
                src={currentHeroArticle.image} 
                alt={currentHeroArticle.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
              />
              {/* Dark gradient overlay for high legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </Link>

            {/* Left Carousel Arrow Button */}
            <button 
              onClick={handlePrevSlide}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer border border-white/20"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>

            {/* Right Carousel Arrow Button */}
            <button 
              onClick={handleNextSlide}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer border border-white/20"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>

            {/* Slide indicators top right */}
            <div className="absolute top-3 right-3 z-30 flex gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              {carouselActivities.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveSlide(idx); }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === activeSlide ? 'w-5 bg-earth-orange-bright' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                />
              ))}
            </div>

            {/* Title Overlay Directly on Image */}
            <div className="relative z-20 p-4 sm:p-5 md:p-6 pointer-events-none">
              <Link to={`/activities/${currentHeroArticle.slug || currentHeroArticle.id}`} className="block group/link pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-earth-orange-bright mb-2">
                  {currentHeroArticle.category}
                </div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug line-clamp-2 group-hover/link:text-earth-orange-bright transition-colors drop-shadow-sm">
                  {currentHeroArticle.title}
                </h1>
              </Link>
            </div>
          </div>

          {/* Right Stacked 3 Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-3 sm:gap-3.5">
            {topRightActivities.map((item) => (
              <Link
                key={item.id}
                to={`/activities/${item.slug || item.id}`}
                className="bg-white hover:bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5 transition-all duration-300 group shadow-2xs hover:shadow-md cursor-pointer"
              >
                <div className="w-24 sm:w-28 h-16 sm:h-20 rounded-md overflow-hidden shrink-0 shadow-2xs border border-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-earth-orange-bright leading-snug line-clamp-2 mb-1.5 transition-colors">
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

        </div>

        {/* ALL ACTIVITIES ARCHIVE WITH CATEGORY TABS */}
        <section className="pt-6 border-t border-slate-200 scroll-mt-24" id="tat-ca-hoat-dong">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">{tr("Tất cả hoạt động", "All Activities")}</h2>
              <p className="text-sm text-slate-600">{tr("Hành trình lan tỏa yêu thương & Chăm sóc cộng đồng từ ANTCARE", "A Journey Spreading Love & Community Care from ANTCARE - Kiến chăm tổ")}</p>
            </div>
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedArchive.map((activity) => (
              <article key={activity.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group duration-300 border border-slate-200/90">
                <Link to={`/activities/${activity.slug || activity.id}`} className="h-48 sm:h-52 overflow-hidden block cursor-pointer">
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-earth-orange-bright uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-earth-orange-bright/10">{activity.category}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{activity.date}</span>
                  </div>
                  <Link to={`/activities/${activity.slug || activity.id}`} className="block cursor-pointer">
                    <h3 className="font-bold text-base text-plum-deep mb-2.5 group-hover:text-earth-orange-bright transition-colors line-clamp-2 leading-snug">
                      {activity.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  <Link className="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-earth-orange-bright transition-colors text-xs sm:text-sm" to={`/activities/${activity.slug || activity.id}`}>
                    {tr("Xem chi tiết", "View Details")} <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Control Bar */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10 pt-6 border-t border-surface-lavender/60">
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(prev => prev - 1);
                    document.getElementById('tat-ca-hoat-dong')?.scrollIntoView({ behavior: 'smooth' });
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

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    document.getElementById('tat-ca-hoat-dong')?.scrollIntoView({ behavior: 'smooth' });
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

              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(prev => prev + 1);
                    document.getElementById('tat-ca-hoat-dong')?.scrollIntoView({ behavior: 'smooth' });
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

export default Activities;
