import * as types from '../Constants/actionTypes';

export const getRestaurantsActionCreator = () => {
  return {
    type: types.GET_RESTAURANTS,
  };
};

export const addToFavActionCreator = () => {
  return {
    type: types.ADD_TO_FAV,
  };
};

export const getFavsActionCreator = () => {
  return {
    type: types.GET_FAVS,
  };
};
