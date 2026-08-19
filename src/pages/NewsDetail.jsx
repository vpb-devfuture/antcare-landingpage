import React, { useEffect, useState, useRef } from 'react';
import { useAppTranslation, translateArticle, getCategoryLabel } from '../utils/i18nHelper';
import { useParams, Link, useNavigate } from 'react-router-dom';
import newsData from '../data/news.json';

const NewsDetail = () => {
  const { tr, isEn } = useAppTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(id, 10);

  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Scroll to top when ID changes

  const allArticlesList = [
    ...(newsData.featured ? [newsData.featured] : []),
    ...(newsData.list || [])
  ];

  let rawArticle = allArticlesList.find(item => item.slug === id || item.id === numericId);
  let article = translateArticle(rawArticle, isEn);

  // Update document.title and meta description dynamically for SEO Meta Title & Meta Description matching H1 & P
  useEffect(() => {
    if (article) {
      const cleanTitle = article.title.replace(/\n/g, ' ');
      document.title = `${cleanTitle} | ANTCARE`;

      // Update or create meta description tag in document head for SEO crawler
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = article.description || '';

      // Update Open Graph tags for Facebook & Zalo sharing preview
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = `${cleanTitle} | ANTCARE`;

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = article.description || '';

      let ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg && article.image) {
        const fullImgUrl = article.image.startsWith('http') ? article.image : `https://antcare-landingpage.vercel.app${article.image}`;
        ogImg.content = fullImgUrl;
      }
    }
  }, [article?.id, article?.title, article?.description, article?.image]);

  // Ensure all images inside article content have SEO-optimized ALT attributes
  useEffect(() => {
    if (!contentRef.current || !article) return;
    const timer = setTimeout(() => {
      if (!contentRef.current) return;
      const imgs = contentRef.current.querySelectorAll('img');
      const cleanTitle = article.title ? article.title.replace(/\n/g, ' ') : 'ANTCARE';
      imgs.forEach((img, idx) => {
        if (!img.alt || img.alt.trim() === '' || img.alt.toLowerCase() === 'mock image') {
          img.alt = `${cleanTitle} - Hình minh họa ${idx + 1}`;
        }
      });
    }, 150);
    return () => clearTimeout(timer);
  }, [article?.id, article?.content]);

  // Extract H2 and H3 headings for Table of Contents
  useEffect(() => {
    if (!contentRef.current || !article) return;

    // Small timeout to ensure DOM rendered
    const timer = setTimeout(() => {
      if (!contentRef.current) return;
      const headingElements = contentRef.current.querySelectorAll('h2, h3');
      const items = [];

      headingElements.forEach((el, index) => {
        const id = `toc-heading-${index}`;
        el.id = id;
        items.push({
          id,
          text: el.innerText || el.textContent,
          level: el.tagName.toLowerCase()
        });
      });

      setToc(items);

      // Intersection Observer for highlighting active TOC heading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '-90px 0px -60% 0px', threshold: 0.1 }
      );

      headingElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [article?.id, article?.content]);

  const scrollToHeading = (headingId) => {
    const el = document.getElementById(headingId);
    if (el) {
      const yOffset = -90; // sticky header height offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(headingId);
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface-mist px-4">
        <h1 className="text-4xl font-display-lg text-plum-deep mb-4">404</h1>
        <p className="text-on-surface-variant mb-8 text-lg">{tr("Không tìm thấy bài viết này.", "Article not found.")}</p>
        <button 
          onClick={() => navigate('/news')}
          className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-plum-deep transition-colors"
        >
          {tr("Quay lại trang Tin tức", "Return to News")}
        </button>
      </div>
    );
  }

  // Get all other articles for the right sidebar
  const allArticles = [
    ...(newsData.featured ? [newsData.featured] : []),
    ...(newsData.list || [])
  ];
  const otherArticles = allArticles.filter(item => item.id !== numericId);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "headline": article.title,
        "datePublished": "2026-08-11T09:00:00+07:00",
        "description": article.description,
        "author": {
          "@type": "Person",
          "name": article.author ? article.author.name : "Huyền Trang"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Độ tuổi nào bắt đầu được trang bị kiến thức tuổi già theo dự thảo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Theo dự thảo, các hoạt động tư vấn và cung cấp tài liệu kiến thức tuổi già áp dụng cho công dân từ 40 tuổi trở lên."
          }
        }, {
          "@type": "Question",
          "name": "Cần chuẩn bị những kiến thức gì cho tuổi già?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Có 5 nhóm kỹ năng chính cần chuẩn bị: lối sống lành mạnh, rèn luyện sức khỏe, chăm sóc người cao tuổi tại nhà, chuẩn bị tài chính và chuẩn bị lao động/việc làm phù hợp."
          }
        }, {
          "@type": "Question",
          "name": "Thời gian thực hiện chương trình này là khi nào?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Đề xuất này nằm trong Chương trình mục tiêu quốc gia về chăm sóc sức khỏe, dân số và phát triển giai đoạn 2026 - 2035, trong đó giai đoạn I được triển khai từ năm 2026 đến năm 2030."
          }
        }]
      }
    ]
  };

  // Add link click event handler for injected HTML content
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && (href.startsWith('/news/') || href.startsWith('/'))) {
          e.preventDefault();
          e.stopPropagation();
          navigate(href);
          window.scrollTo(0, 0);
        }
      }
    };

    container.addEventListener('click', handleLinkClick);
    return () => {
      container.removeEventListener('click', handleLinkClick);
    };
  }, [navigate, id, article?.content]);

  return (
    <div className="pt-0 bg-surface-mist min-h-screen pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Clean Modern Article Header - Top Nav Left, Title Centered */}
      <section className="bg-white border-b border-surface-lavender/60 py-6 md:py-8">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col items-center">
          {/* Top navigation row: Left-aligned with bold text */}
          <div className="w-full flex items-center justify-start gap-3 mb-4">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-plum-deep hover:text-earth-orange-bright transition-colors group"
            >
              <span className="material-symbols-outlined text-lg group-hover:-translate-x-0.5 transition-transform font-bold">arrow_back</span>
              <span>{tr("Trở về Tin tức", "Back to News")}</span>
            </Link>
            <span className="text-surface-lavender">•</span>
            <span className="px-3 py-0.5 rounded-full bg-earth-orange-bright/10 text-earth-orange-bright font-bold text-xs">
              {getCategoryLabel(article.category, isEn)}
            </span>
          </div>

          {/* Title centered & broke into 2 lines cleanly */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-plum-deep leading-snug whitespace-pre-line max-w-4xl mx-auto mb-3 text-center">
            {article.title}
          </h1>

          {/* Sapo / Meta Description Paragraph (<p>) DIRECTLY FOLLOWING <h1> for 100% SEO Compliance */}
          <p className="text-sm sm:text-base md:text-[16.5px] font-medium text-plum-deep/90 max-w-3xl mx-auto text-center leading-relaxed italic bg-surface-mist/60 px-5 py-3 rounded-2xl border border-surface-lavender/50">
            {article.description}
          </p>
        </div>
      </section>

      {/* Main Content Grid: Article Body (Expanded +1.5cm wider) + Sidebar */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Article Body (Left Column - 8 Cols, Extra Roomy Width) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm border border-surface-lavender">
             {/* Beautiful Framed Featured Image */}
             <div className="w-full overflow-hidden rounded-xl shadow-xs border border-surface-lavender/60 bg-white mb-6 flex items-center justify-center p-2">
               <img 
                 src={article.image} 
                 alt={article.title} 
                 className="w-full h-auto max-h-[520px] object-contain mx-auto rounded-lg" 
               />
             </div>

             {/* Injected HTML Content (Sanitized to guarantee exactly 1 H1 per page for SEO) */}
             <div 
               ref={contentRef}
               className="prose max-w-none text-sm sm:text-base md:text-[16.5px] text-on-surface-variant leading-[1.8] prose-headings:text-plum-deep prose-headings:font-semibold prose-p:mb-4 prose-li:mb-1.5 prose-a:text-earth-orange-bright prose-img:rounded-xl prose-img:shadow-sm"
               dangerouslySetInnerHTML={{ __html: article.content ? article.content.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '') : '' }}
             >
             </div>

             {/* Author & Date Footer Block at Bottom of Article */}
             <div className="mt-10 pt-6 border-t border-surface-lavender flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-mist p-4 sm:p-5 rounded-2xl border border-surface-lavender/60">
               {article.author && (
                 <div className="flex items-center gap-3.5">
                   <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                     <img src={article.author.image} alt={article.author.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="font-bold text-sm text-plum-deep">{article.author.name}</p>
                     <p className="text-on-surface-variant text-xs mt-0.5">{article.author.description || 'Nhân viên truyền thông Antcare'}</p>
                   </div>
                 </div>
               )}
               {article.date && (
                 <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                   <span className="material-symbols-outlined text-sm text-earth-orange-bright">calendar_today</span>
                   <span>Ngày đăng: {article.date}</span>
                 </div>
               )}
             </div>
          </div>

          {/* Sidebar - Dịch vụ của ANTCARE + Bài viết khác (Right Column - 4 Cols) */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6">
            
            {/* Sidebar Widget 1: Dịch vụ của ANTCARE */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-surface-lavender">
              <h3 className="font-bold text-sm sm:text-base text-plum-deep mb-3.5 pb-2.5 border-b border-surface-lavender flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">medical_services</span>
                <span>Dịch vụ của ANTCARE</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <Link to="/#giai-phap-cham-soc" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface-mist transition-all border border-transparent hover:border-surface-lavender/60 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-base">home_health</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-plum-deep group-hover:text-earth-orange-bright transition-colors text-xs sm:text-sm">Chăm sóc sức khỏe tại nhà</h4>
                    <p className="text-[11px] text-on-surface-variant line-clamp-1">Điều dưỡng tận tâm, hỗ trợ sinh hoạt &amp; y tế 24/7</p>
                  </div>
                </Link>

                <Link to="/#giai-phap-cham-soc" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface-mist transition-all border border-transparent hover:border-surface-lavender/60 group">
                  <div className="w-8 h-8 rounded-lg bg-earth-orange-bright/10 text-earth-orange-bright flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-earth-orange-bright group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-base">local_hospital</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-plum-deep group-hover:text-earth-orange-bright transition-colors text-xs sm:text-sm">Chăm sóc tại Bệnh viện</h4>
                    <p className="text-[11px] text-on-surface-variant line-clamp-1">Đồng hành túc trực, hỗ trợ thủ tục &amp; chăm sóc người bệnh</p>
                  </div>
                </Link>

                <Link to="/#goi-cham-soc-linh-hoat" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface-mist transition-all border border-transparent hover:border-surface-lavender/60 group">
                  <div className="w-8 h-8 rounded-lg bg-plum-light/10 text-plum-light flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-plum-light group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-base">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-plum-deep group-hover:text-earth-orange-bright transition-colors text-xs sm:text-sm">Gói chăm sóc Linh hoạt</h4>
                    <p className="text-[11px] text-on-surface-variant line-clamp-1">Lựa chọn ca 8h, 12h, 24h hoặc theo giờ linh hoạt</p>
                  </div>
                </Link>

                <Link to="/#giai-phap-cham-soc" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface-mist transition-all border border-transparent hover:border-surface-lavender/60 group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-base">translate</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-plum-deep group-hover:text-earth-orange-bright transition-colors text-xs sm:text-sm">Trợ lý sức khỏe Song ngữ</h4>
                    <p className="text-[11px] text-on-surface-variant line-clamp-1">Đội ngũ điều dưỡng hỗ trợ cả tiếng Việt và tiếng Anh</p>
                  </div>
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-surface-lavender/60 text-center">
                <Link 
                  to="/#lien-he-gia-dinh" 
                  className="w-full py-2.5 px-3 bg-gradient-to-r from-earth-orange-bright to-earth-orange-dark text-white rounded-xl font-bold text-xs shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Nhận tư vấn dịch vụ miễn phí</span>
                </Link>
              </div>
            </div>

            {/* Sidebar Widget 2: Bài viết khác */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-surface-lavender">
              <h3 className="font-bold text-sm sm:text-base text-plum-deep mb-3.5 pb-2.5 border-b border-surface-lavender flex items-center justify-between">
                <span>Bài viết khác</span>
                <span className="text-xs font-normal text-on-surface-variant">({otherArticles.length})</span>
              </h3>

              <div className="space-y-3">
                {otherArticles.map(item => (
                  <Link 
                    to={`/news/${item.slug || item.id}`} 
                    key={item.id}
                    className="flex gap-3 group items-center p-2 rounded-xl hover:bg-surface-mist transition-all duration-200 border border-transparent hover:border-surface-lavender/60"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 shadow-sm border border-surface-lavender/50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-earth-orange-bright uppercase tracking-wider">{item.category}</span>
                        {item.date && <span className="text-[10px] text-on-surface-variant">{item.date}</span>}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-plum-deep group-hover:text-earth-orange-bright transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-3.5 border-t border-surface-lavender/60 text-center">
                <Link 
                  to="/news" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-earth-orange-bright transition-colors"
                >
                  <span>Xem tất cả tin tức</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
