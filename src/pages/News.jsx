import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/news.json';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { featured, list } = newsData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalPages = Math.ceil(list.length / itemsPerPage);
  
  const currentItems = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="pt-0">
      {/* Featured News Section */}
      {featured && (
        <section className="pt-8 pb-16 px-4 md:px-margin-desktop bg-surface-mist">
          <div className="max-w-container-max mx-auto">
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8 items-center border border-surface-lavender group cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl h-64 md:h-[400px]">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-surface-container text-primary font-label-md w-fit mb-6">
                  {featured.category}
                </div>
                <h1 className="font-display-lg text-3xl md:text-headline-lg text-plum-deep mb-6 leading-tight group-hover:text-earth-orange-bright transition-colors">
                  {featured.title}
                </h1>
                <p className="text-on-surface-variant font-body-md mb-8 line-clamp-3">
                  {featured.description}
                </p>
                {featured.author && (
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface-lavender">
                      <img src={featured.author.image} alt={featured.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-label-lg text-plum-deep">{featured.author.name}</p>
                      <p className="font-label-md text-on-surface-variant">{featured.author.description}</p>
                    </div>
                  </div>
                )}
                <Link className="inline-flex items-center gap-2 text-earth-orange-bright font-bold hover:gap-4 transition-all" to="/news/0">
                  Đọc bài viết <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article List Section */}
      <section className="w-full py-16 px-4 md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="mb-10">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-2">Danh sách bài viết</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map(article => (
              <article key={article.id} className="flex flex-col bg-surface-mist rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group duration-500 opacity-100 translate-y-0">
                <div className="h-56 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-earth-orange-bright uppercase tracking-wider">{article.category}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{article.date}</span>
                  </div>
                  <h3 className="font-headline-md text-xl md:text-headline-md text-plum-deep mb-4 group-hover:text-earth-orange-bright transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-sm line-clamp-2 mb-6">
                    {article.description}
                  </p>
                  <Link className="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-earth-orange-bright transition-colors" to={`/news/${article.id}`}>
                    Đọc thêm <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentPage === 1 ? 'border-outline/50 text-outline/50 cursor-not-allowed' : 'border-outline text-primary hover:bg-plum-light hover:text-white hover:border-plum-light'}`}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <span className="text-on-surface-variant font-medium">
              Trang {currentPage} / {totalPages}
            </span>
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentPage === totalPages ? 'border-outline/50 text-outline/50 cursor-not-allowed' : 'border-outline text-primary hover:bg-plum-light hover:text-white hover:border-plum-light'}`}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
