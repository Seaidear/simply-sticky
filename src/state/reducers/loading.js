import * as Types from '../actions';

const initialState = false;

const isLoading = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_LOADING:
      return payload;

    default:
      return state;
  }
};

export default isLoading;
