import { useEffect, useState } from 'react';
import netlifyIdentity, { currentUser } from 'netlify-identity-widget';
import { logoutUser, loginUser } from '../helpers/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();

    setInterval(checkAuth, 2500);

    netlifyIdentity.on('login', (user) => {
      loginUser(user);
      setIsAuthenticated(true);
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      logoutUser();
      setIsAuthenticated(false);
      setUser(null);
    });
    // eslint-disable-next-line
  }, []);

  const checkAuth = () => {
    const user = JSON.parse(localStorage.getItem('gotrue.user'));
    const token = user && user.token.access_token;
    const tokenExpiresAt = user && user.token.expires_at;
    const currentTime = new Date().getTime();

    if (currentUser() && token && tokenExpiresAt > currentTime) {
      setIsAuthenticated(true);
      setUser(currentUser());
    } else if (currentUser() && (!token || tokenExpiresAt < currentTime)) {
      logout();
      netlifyIdentity.open('login');
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const login = () => {
    netlifyIdentity.open('login');
  };

  const register = () => {
    netlifyIdentity.open('signup');
  };

  const logout = async () => {
    await netlifyIdentity.logout();
  };

  return [isAuthenticated, user, login, register, logout];
};
