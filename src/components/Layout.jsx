import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

const Layout = () => {
  return (
    <div className="font-sans text-plum-deep bg-surface-mist min-h-screen flex flex-col pt-16 md:pt-[68px]">
      <TopNavBar />
      <AnnouncementBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
