import * as types from '../constants/actionTypes.js';

const initState = {
  favsList: [],
};
//** favsReducer logic adds favorited restaurants to user's profile */
const favsReducer = (state = initState, action) => {
  let favsList;
  switch (action.type) {
    case types.ADD_TO_FAVS: {
      favsList = state.favsList.slice();
      favsList.push(action.payload);
      return {
        ...state,
        favsList,
      };
    }

    case types.SET_FAVS: {
      return {
        ...state,
        favsList: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default favsReducer;
