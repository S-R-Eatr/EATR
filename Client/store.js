import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './Reducers/index.js';

const store = createStore(
  reducers,
  undefined,
  applyMiddleware(thunk)
);

export default store;
