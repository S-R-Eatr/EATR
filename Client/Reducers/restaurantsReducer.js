import * as types from '../Constants/actionTypes';

const initState = {
  restaurantList: {},
  favsList: [],
  category: '',
  location: '',
  offset: 0,
  sceneState: 'home',
};

const restaurantsReducer = (state = initState, action) => {
  let favsList;
  switch (action.type) {
    case types.GET_RESTAURANTS: {
      return {
        ...state,
        restaurantList,
      };
    }
    case types.ADD_TO_FAVS: {
      favsList = state.favsList.slice();

      return {
        ...state,
        favslist: action.payload,
      };
    }
    case types.GET_FAVS: {
      return {
        ...state,
        favsList,
      };
    }
    case types.GET_NEXT: {
      return {
        ...state,
      };
    }
    case types.SET_SCENE: {
      return {
        ...state,
      };
    }
    case types.default: {
      return state;
    }
  }
};

export default restaurantsReducer;
