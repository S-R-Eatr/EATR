import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
