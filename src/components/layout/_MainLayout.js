import React, { useContext } from 'react';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';
import GlobalContext from '../../context/global/globalContext';

const MainLayout = ({ children }) => {
  const { isAuthenticated } = useContext(GlobalContext);

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
