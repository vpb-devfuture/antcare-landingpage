import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fixed featured article (Trào Lưu Chụp Ảnh Mùa Thu Hà Nội)
  const featuredArticle = newsData.featured;

  // List articles sorted descending by ID (newest first)
  const listArticles = [...(newsData.list || [])].sort((a, b) => (b.id || 0) - (a.id || 0));

  // allArticles puts fixed featured article at index 0, followed by list articles
  const allArticles = [featuredArticle, ...listArticles.filter(item => item.id !== featuredArticle.id)];

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

  // Category filtering for archive list below
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const categories = ['Tất cả', 'Tri ân khách hàng', 'Chăm sóc sức khỏe', 'Sữa', 'Tin tức'];

  // Pagination state (Max 12 articles / page)
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const filteredArchive = selectedCategory === 'Tất cả' 
    ? allArticles 
    : allArticles.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredArchive.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArchive = filteredArchive.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const currentHeroArticle = carouselArticles[activeSlide] || allArticles[0];

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8 md:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* TOP HERO SECTION: Left Big Banner + Right 3 Stacked Cards (Clean White Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch mb-10 md:mb-14">
          
          {/* Left Large Hero Banner (7 Columns - Title Overlayed Directly on Image) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group aspect-[16/9] sm:aspect-[1.9/1] bg-slate-900 flex flex-col justify-end">
            <img 
              src={currentHeroArticle.image} 
              alt={currentHeroArticle.title} 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Subtle dark gradient overlay at bottom for high legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10 pointer-events-none"></div>

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
              {carouselArticles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === activeSlide ? 'w-5 bg-earth-orange-bright' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                />
              ))}
            </div>

            {/* Title Overlay Directly on Image (No date, no category tag) */}
            <div className="relative z-20 p-4 sm:p-5 md:p-6">
              <Link to={`/news/${currentHeroArticle.slug || currentHeroArticle.id}`} className="block group/link">
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug line-clamp-2 group-hover/link:text-earth-orange-bright transition-colors drop-shadow-sm">
                  {currentHeroArticle.title}
                </h1>
              </Link>
            </div>
          </div>

          {/* Right Stacked 3 Cards (5 Columns - Rectangular Images) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-3 sm:gap-3.5">
            {topRightArticles.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.slug || item.id}`}
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

        {/* ALL ARTICLES ARCHIVE WITH CATEGORY TABS (Clean White Theme) */}
        <section className="pt-6 border-t border-slate-200 scroll-mt-24" id="tat-ca-bai-viet">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">Tất cả bài viết</h2>
              <p className="text-sm text-slate-600">Khám phá thông tin dinh dưỡng &amp; chăm sóc sức khỏe cho người cao tuổi từ ANTCARE</p>
            </div>
            
            {/* Category Filter Tabs in Clean White Palette */}
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
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedArchive.map((article) => (
              <article key={article.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all group duration-300 border border-slate-200/90">
                <Link to={`/news/${article.slug || article.id}`} className="h-48 sm:h-52 overflow-hidden block cursor-pointer">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-earth-orange-bright uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-earth-orange-bright/10">{article.category}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{article.date}</span>
                  </div>
                  <Link to={`/news/${article.slug || article.id}`} className="block cursor-pointer">
                    <h3 className="font-bold text-base text-plum-deep mb-2.5 group-hover:text-earth-orange-bright transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <Link className="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-earth-orange-bright transition-colors text-xs sm:text-sm" to={`/news/${article.slug || article.id}`}>
                    Đọc thêm <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
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
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === 1}
                aria-label="Trang trước"
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

              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(prev => prev + 1);
                    document.getElementById('tat-ca-bai-viet')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === totalPages}
                aria-label="Trang sau"
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

