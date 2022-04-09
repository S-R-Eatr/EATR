import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';

const reducers = combineReducers({
  restaurants: restaurantsReducer,
});

export default reducers;
