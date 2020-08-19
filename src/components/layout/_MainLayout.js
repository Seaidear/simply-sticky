import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';

const MainLayout = ({ isAuthenticated, children, login, logout }) => (
  <div id="wrapper">
    <header>
      <Navbar isAuthenticated={isAuthenticated} login={login} logout={logout} />
    </header>
    <main>{children}</main>
    {!isAuthenticated && <Footer />}
  </div>
);

export default MainLayout;
