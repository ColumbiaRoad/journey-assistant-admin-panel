import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducer from '../reducers/adminPanel';

export const getStore = () => {
  const store = compose(
    applyMiddleware(ReduxThunk, logger),
    autoRehydrate()
  )(createStore)(reducer);
  
  persistStore(store);
  return store;
}