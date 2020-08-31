import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import middleware from './middleware';

const initialState = {
  isLoading: false,
  notes: null,
  isAuthenticated: false,
  user: null,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleware),
);

export default store;
