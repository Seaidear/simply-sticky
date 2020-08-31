import { useEffect } from 'react';
import netlifyIdentity, { currentUser } from 'netlify-identity-widget';
import { loginUser, logoutUser } from '../state/actions/auth';
import { useDispatch } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();

    const checkAuthInterval = setInterval(checkAuth, 2500);

    netlifyIdentity.on('login', (user) => {
      dispatch(loginUser(user));
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      dispatch(logoutUser());
    });

    return () => {
      clearInterval(checkAuthInterval);
    };
    // eslint-disable-next-line
  }, []);

  const checkAuth = () => {
    const user = JSON.parse(localStorage.getItem('gotrue.user'));
    const token = user && user.token.access_token;
    const tokenExpiresAt = user && user.token.expires_at;
    const currentTime = new Date().getTime();

    if (currentUser() && token && tokenExpiresAt > currentTime) {
      dispatch(loginUser(user));
    } else if (currentUser() && (!token || tokenExpiresAt < currentTime)) {
      logout();
      netlifyIdentity.open('login');
    } else {
      dispatch(logoutUser());
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

  return [login, register, logout];
};
