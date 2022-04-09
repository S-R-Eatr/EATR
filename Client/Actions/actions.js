import axios from 'axios';
import * as types from '../Constants/actionTypes';

export const getRestaurantsActionCreator = () => async (dispatch) => {
  // FETCH API WITH AXIOS
  const restaurants = await axios.get(URL);
  dispatch({
    type: types.GET_RESTAURANTS,
    payload: restaurants.data,
  });
};

export const addToFavActionCreator = () => async (dispatch) => {
  // FETCH API WITH AXIOS
  const addFav = await axios.post(URL);
  dispatch({
    type: types.ADD_TO_FAVS,
    payload: addFav.data,
  });
};

export const getFavsActionCreator = () => async (dispatch) => {
  // FETCH API WITH AXIOS
  const favRestaurants = await axios.post(URL);
  dispatch({
    type: types.GET_FAVS,
    payload: faveRestaurants.data,
  });
};

export const getNextActionCreator = () => async (dispatch) => {
  return {
    type: types.GET_NEXT,
  };
};

export const setSceneActionCreator = (data) => {
  return {
    type: types.SET_SCENE,
    payload: data,
  };
};
