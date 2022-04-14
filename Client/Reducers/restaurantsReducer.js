import * as types from '../constants/actionTypes.js';

const initState = {
  restaurantList: [],
  category: '',
  location: '',
  offset: 0,
};
// returns restaurants in category and location entered by user
const restaurantsReducer = (state = initState, action) => {
  let restaurantList;
  switch (action.type) {
    case types.GET_RESTAURANTS: {
      restaurantList = action.payload;
      return {
        ...state,
        restaurantList,
      };
    } // returns a new restaurant after user 'swipes' on option presented to them
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
