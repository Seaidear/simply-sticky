import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div id="wrapper">
      <header>
        <Navbar />
      </header>
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
