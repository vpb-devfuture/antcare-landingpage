import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import newsData from '../data/news.json';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(id, 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Scroll to top when ID changes

  let article = null;

  if (newsData.featured && newsData.featured.id === numericId) {
    article = newsData.featured;
  } else if (newsData.list) {
    article = newsData.list.find(item => item.id === numericId);
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface-mist px-4">
        <h1 className="text-4xl font-display-lg text-plum-deep mb-4">404</h1>
        <p className="text-on-surface-variant mb-8 text-lg">Không tìm thấy bài viết này.</p>
        <button 
          onClick={() => navigate('/news')}
          className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-plum-deep transition-colors"
        >
          Quay lại trang Tin tức
        </button>
      </div>
    );
  }

  // Get recent articles (excluding current one, max 3)
  const recentArticles = newsData.list
    .filter(item => item.id !== numericId)
    .slice(0, 3);

  return (
    <div className="pt-0 bg-surface-mist min-h-screen pb-16">
      {/* Hero Image Section */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center items-center py-24">
        <img 
          src={article.image} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Improved Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-margin-desktop text-center flex flex-col items-center gap-6">
           <div className="inline-flex items-center px-4 py-1 rounded-full bg-earth-orange-bright text-white font-label-md shadow-sm">
              {article.category}
           </div>
           <h1 className="font-display-lg text-2xl md:text-4xl lg:text-5xl text-white leading-tight drop-shadow-md px-4">
              {article.title}
           </h1>
           <div className="flex items-center justify-center gap-4 text-white/90 font-medium">
             {article.date && <span>{article.date}</span>}
             {article.author && (
               <>
                 <span className="opacity-60">•</span>
                 <span>{article.author.name}</span>
               </>
             )}
           </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-margin-desktop -mt-12 relative z-20">
        <div className="bg-white rounded-2xl p-5 md:p-8 lg:p-10 shadow-lg border border-surface-lavender/50">
           
           <div className="mb-8 pb-8 border-b border-surface-lavender">
              <Link 
                to="/news" 
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-medium transition-colors mb-6 group"
              >
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Trở về trang Tin tức
              </Link>
              <p className="text-lg md:text-xl font-body-lg text-plum-deep font-medium leading-relaxed italic border-l-4 border-earth-orange-bright pl-4">
                {article.description}
              </p>
           </div>

           {/* Injected HTML Content */}
           <div 
             className="prose max-w-none prose-p:text-on-surface-variant prose-headings:text-plum-deep prose-a:text-earth-orange-bright prose-img:rounded-xl prose-img:shadow-sm"
             dangerouslySetInnerHTML={{ __html: article.content }}
           >
           </div>

           {article.author && (
             <div className="mt-10 pt-6 border-t border-surface-lavender flex items-center gap-4 bg-surface-mist/50 p-5 rounded-xl">
               <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                 <img src={article.author.image} alt={article.author.name} className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="font-bold text-base text-plum-deep">{article.author.name}</p>
                 <p className="text-on-surface-variant text-xs mt-1">{article.author.description}</p>
               </div>
             </div>
           )}
        </div>
      </section>

      {/* Recent Articles Section */}
      {recentArticles.length > 0 && (
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop mt-20">
          <div className="flex items-center justify-between mb-6">
             <h2 className="font-headline-lg text-xl md:text-2xl text-plum-deep">Bài viết gần đây</h2>
             <Link to="/news" className="text-primary text-sm font-bold hover:text-earth-orange-bright flex items-center gap-1 transition-colors">
                Xem tất cả <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map(item => (
              <Link to={`/news/${item.id}`} key={item.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group duration-300 border border-surface-lavender">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-earth-orange-bright uppercase tracking-wider">{item.category}</span>
                    <span className="text-[10px] text-on-surface-variant font-medium">{item.date}</span>
                  </div>
                  <h3 className="font-headline-md text-base text-plum-deep mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetail;
