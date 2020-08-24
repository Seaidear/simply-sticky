import { useEffect, useState } from 'react';
import netlifyIdentity, { currentUser } from 'netlify-identity-widget';
import { logoutUser, loginUser } from '../helpers/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser()) {
      setIsAuthenticated(true);
      setUser(currentUser());
    }

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
