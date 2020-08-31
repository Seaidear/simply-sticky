import * as Types from './index';
import { loginUser as login, logoutUser as logout } from '../../helpers/auth';
import { getNotes } from './notes';
import axios from 'axios';

export const loginUser = (user) => (dispatch, getState) => {
  if (!getState().auth.isAuthenticated && !getState().auth.user) {
    login(user);

    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${user.token.access_token}`;

    dispatch({
      type: Types.LOGIN_USER,
      payload: {
        isAuthenticated: true,
        user,
      },
    });

    dispatch(getNotes());
  }
};

export const logoutUser = () => (dispatch, getState) => {
  if (getState().auth.isAuthenticated && getState().auth.user) {
    logout();
    dispatch({
      type: Types.LOGOUT_USER,
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });

    dispatch({
      type: Types.CLEAR_NOTES,
    });
  }
};
