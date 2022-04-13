import * as types from '../Constants/actionTypes.js';

const initState = {
  favsList: [],
};

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
