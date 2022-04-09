import * as types from '../Constants/actionTypes';

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
      return {
        ...state,
        restaurantList,
      };
    }
    case types.GET_NEXT: {
      restaurantList = restaurantList.slice(1);
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
