import * as Types from './index';

export const setLoading = (isLoading) => (dispatch, state) => {
  state.isLoading !== isLoading &&
    dispatch({
      type: Types.TOGGLE_LOADING,
      payload: isLoading,
    });
};
