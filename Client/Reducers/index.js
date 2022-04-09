import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import favsReducer from './favsReducer';
import setSceneReducer from './setSceneReducer';

const reducers = combineReducers({
  restaurants: restaurantsReducer,
  favs: favsReducer,
  setScene: setSceneReducer,
});

export default reducers;
