import axios from 'axios';
import * as types from '../constants/actionTypes.js';
import { useSelector} from 'react-redux';

//think action creator (getRestaurantsActionCreator) returning a thunk function: (async (dispatch) =>)
//action creator creates an axios get-request to get restaurants from yelp API --> dispatch to update restaurant list
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

//action creator that will send the restaurant user wants to add to favorites to the reducer
export const addToFavActionCreator = () => async (dispatch, getState) => {
  //const favorite = useSelector(store => store.restaurants.restaurantList[0])
  const favorite = await getState().restaurants.restaurantList[0];
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

//action creator that will perform a get request to obtain favorites list
//will dispatch that received list and dispatch to redux store 
export const setFavsActionCreator = () => async (dispatch) => {
  const favList = await axios.get('/user');

  dispatch({
    type: types.SET_FAVS,
    payload: favList.data
  });
};

//action that will get the next restaurant in the list
export const getNext = () => {
  return {
    type: types.GET_NEXT,
  };
};

//action that will change the scene the user is in
export const setScene = (scene) => {
  return {
    type: types.SET_SCENE,
    payload: scene,
  };
};

//action that will inverse the boolean of isNewUser state
export const getIsNewUser = () => {
  return {
    type: types.GET_ISNEWUSER,
  }
}

//action that will inverse the boolean of isLoggedIn state
export const setIsLoggedIn = () => {
  return {
    type: types.SET_ISLOGGEDIN
  }
}
