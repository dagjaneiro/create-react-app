import app, * as fromApp from './app';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  app,
});

export const getNumber = state => fromApp.getNumber(state.app);

export default rootReducer;
