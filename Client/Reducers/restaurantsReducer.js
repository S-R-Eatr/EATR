import * as types from '../constants/actionTypes.js';

const initState = {
  restaurantList: [],
  category: '',
  location: '',
  offset: 0,
};

const restaurantsReducer = (state = initState, action) => {
  let restaurantList;
  switch (action.type) {
    case types.GET_RESTAURANTS: {
      restaurantList = action.payload;
      return {
        ...state,
        restaurantList,
      };
    }
    case types.GET_NEXT: {
      restaurantList = state.restaurantList.slice(1);
      return {
        ...state,
        restaurantList,
      };
    }
    default: {
      return state;
    }
  }
};

export default restaurantsReducer;
