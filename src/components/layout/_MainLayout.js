import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';

const MainLayout = ({
  isAuthenticated,
  children,
  login,
  logout,
  register,
  user,
}) => (
  <div className="full-height">
    <div className="full-height">
      <header>
        <Navbar
          isAuthenticated={isAuthenticated}
          login={login}
          logout={logout}
          register={register}
          user={user}
        />
      </header>
      <main>{children}</main>
    </div>

    {!isAuthenticated && <Footer />}
  </div>
);

export default MainLayout;
