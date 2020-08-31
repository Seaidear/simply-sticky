import * as Types from '../actions';

const initialState = null;

const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_NOTES:
    case Types.CREATE_NOTE:
    case Types.UPDATE_NOTE:
    case Types.DELETE_NOTE:
      return payload;

    case Types.CLEAR_NOTES:
      return null;

    default:
      return state;
  }
};

export default notesReducer;
