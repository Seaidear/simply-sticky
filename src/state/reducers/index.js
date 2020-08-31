import { combineReducers } from 'redux';
import auth from './auth';
import isLoading from './loading';
import notes from './notes';

const rootReducer = combineReducers({ auth, isLoading, notes });

export default rootReducer;
