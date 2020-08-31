import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  return (
    <div>
      <div className="full-height">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </div>

      {!isAuthenticated && <Footer />}
    </div>
  );
};

export default MainLayout;
