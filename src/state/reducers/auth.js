import * as Types from '../actions';

const initialState = { isAuthenticated: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.LOGIN_USER:
    case Types.LOGOUT_USER:
      return {
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
