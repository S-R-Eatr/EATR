import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer.js';
import favsReducer from './favsReducer.js';
import setSceneReducer from './setSceneReducer.js';

const reducers = combineReducers({
  restaurants: restaurantsReducer,
  favs: favsReducer,
  setScene: setSceneReducer,
});

export default reducers;
