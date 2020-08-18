import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div id="wrapper">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
