import * as types from '../Constants/actionTypes';

const initState = {
  restaurantList: {},
  resultList: [],
  category: '',
  location: '',
  offset: 0,
};

const restaurantsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_RESTAURANTS: {
      return {
        ...state,
        restaurantList,
      };
    }
    case types.ADD_TO_FAV: {
      return {
        ...state,
        resultList,
      };
    }
    case types.GET_FAVS: {
      return {
        ...state,
        resultList,
      };
    }
    default: {
      return state;
    }
  }
};

export default restaurantsReducer;
