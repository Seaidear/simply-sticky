import * as Types from './index';

export const setLoading = (isLoading) => (dispatch, getState) => {
  getState().isLoading !== isLoading &&
    dispatch({
      type: Types.TOGGLE_LOADING,
      payload: isLoading,
    });
};
