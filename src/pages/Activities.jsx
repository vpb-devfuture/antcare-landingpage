import React, { useEffect, useState } from 'react';
import activitiesData from '../data/activities.json';

const Activities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalPages = Math.ceil(activitiesData.length / itemsPerPage);
  
  const currentItems = activitiesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('/images/img_7c97fca0.jpg')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/80 via-plum-deep/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1240px] mx-auto w-full h-full flex flex-col items-center justify-center">
          <div className="max-w-4xl space-y-6 flex flex-col items-center text-center">
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold drop-shadow-lg">
              Hành trình lan tỏa yêu thương &amp; Chăm sóc cộng đồng
            </h1>
            <p className="text-white/95 font-body-lg text-lg md:text-xl max-w-2xl drop-shadow-md">
              Tại 247care, chúng tôi không chỉ cung cấp dịch vụ y tế mà còn xây dựng một hệ sinh thái chăm sóc nhân văn, nơi mỗi cá nhân đều cảm nhận được sự ấm áp và tôn trọng.
            </p>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-section-padding px-4 md:px-margin-desktop max-w-[1240px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-plum-deep">Danh sách hoạt động</h2>
            <p className="text-on-surface-variant font-body-md text-body-md">Cập nhật những chương trình cộng đồng mới nhất từ 247care.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentPage === 1 ? 'border-outline/50 text-outline/50 cursor-not-allowed' : 'border-outline text-outline hover:bg-plum-light hover:text-white'}`}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${currentPage === totalPages ? 'border-outline/50 text-outline/50 cursor-not-allowed' : 'border-outline text-outline hover:bg-plum-light hover:text-white'}`}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter-desktop">
          {currentItems.map((item) => {
            if (item.size === 'large_left' || item.size === 'large_right') {
              return (
                <div key={item.id} className="md:col-span-8 group cursor-pointer transition-all duration-700 opacity-100 translate-y-0">
                  <div className="bg-white rounded-lg p-1 shadow-md border border-surface-lavender hover:shadow-lg transition-all duration-500 flex flex-col md:flex-row h-full overflow-hidden">
                    <div className={`md:w-1/2 overflow-hidden h-64 md:h-full ${item.size === 'large_right' ? 'md:order-2' : ''}`}>
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className={`md:w-1/2 p-8 flex flex-col justify-between ${item.size === 'large_right' ? 'md:order-1' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-earth-orange-bright font-label-md text-label-md">
                          {item.date !== 'Đã hoàn thành' && <span className="material-symbols-outlined text-sm">calendar_today</span>}
                          {item.date}
                        </div>
                        <h3 className="font-headline-md text-xl md:text-headline-md text-plum-deep leading-snug group-hover:text-plum-light transition-colors">{item.title}</h3>
                        <p className="text-on-surface-variant line-clamp-3">{item.description}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="bg-surface-mist px-4 py-1 rounded-full text-plum-light font-label-md border border-plum-light/20">{item.category}</span>
                        <span className="material-symbols-outlined text-plum-light">arrow_right_alt</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item.id} className="md:col-span-4 group cursor-pointer transition-all duration-700 opacity-100 translate-y-0">
                  <div className={`bg-white rounded-lg p-1 shadow-md border border-surface-lavender hover:shadow-lg transition-all duration-500 h-full flex flex-col border-b-4 ${item.category === 'Workshop' ? 'border-plum-light' : 'border-earth-orange-bright'}`}>
                    <div className="overflow-hidden h-48 rounded-t-lg">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6 space-y-4 flex-grow">
                      <div className="text-earth-orange-bright font-label-md text-label-md">{item.category}</div>
                      <h3 className="font-headline-md text-lg text-plum-deep leading-snug">{item.title}</h3>
                      <p className="text-on-surface-variant font-body-sm text-body-sm line-clamp-2">{item.description}</p>
                    </div>
                    <div className="p-6 border-t border-surface-lavender flex items-center justify-between">
                      <span className="text-outline text-label-md">{item.date}</span>
                      <span className="material-symbols-outlined text-plum-light">open_in_new</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Activities;
