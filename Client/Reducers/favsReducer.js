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
    //case for call to database (not setup yet)
    case types.GET_FAVS: {
      favsList = action.payload;
      return {
        ...state,
        favsList,
      };
    }
    default: {
      return state;
    }
  }
};

export default favsReducer;
