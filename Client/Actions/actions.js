import axios from 'axios';
import * as types from '../Constants/actionTypes.js';
import { useSelector} from 'react-redux';

//think action creator (getRestaurantsActionCreator) returning a thunk function: (async (dispatch) =>)
export const getRestaurantsActionCreator = body => async dispatch => {
  // FETCH API WITH AXIOS
  const restaurants = await axios.get('/restaurants', {
    params: body
  });
  dispatch({
    type: types.GET_RESTAURANTS,
    payload: restaurants.data,
  });
};

export const addToFavActionCreator = () => async (dispatch, getState) => {
  const favorite = await getState().restaurants.restaurantList[0];
  // FETCH API WITH AXIOS
  // add favorite to database (not set up yet)
  // const addFav = await axios.post(URL);
  dispatch({
    type: types.ADD_TO_FAVS,
    // payload: addFav.data,
    payload: favorite
  });
};

//setUser and setFavList won't run if username and password is wrong
export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user
  }
}
export const setFavsActionCreator = () => async (dispatch) => {
  const favList = await axios.get('/user');

  dispatch({
    type: types.SET_FAVS,
    payload: favList.data
  });
};

export const getNextActionCreator = () => {
  return {
    type: types.GET_NEXT,
  };
};

export const setSceneActionCreator = (scene) => {
  return {
    type: types.SET_SCENE,
    payload: scene,
  };
};

export const getIsNewUser = () => {
  return {
    type: types.GET_ISNEWUSER,
  }
}

export const setIsLoggedIn = () => {
  return {
    type: types.SET_ISLOGGEDIN
  }
}
