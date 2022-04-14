import * as types from '../constants/actionTypes.js';

const initState = {
  sceneState: 'home',
  isLoggedIn: false,
  isNewUser: false,
};
//returns user to home screen
const setSceneReducer = (state = initState, action) => {
  let sceneState;
  switch (action.type) {
    case types.SET_SCENE: {
      sceneState = action.payload;
      return {
        ...state,
        sceneState,
      };
    } //determines if a user has a profile
    case types.GET_ISNEWUSER: {
      return{
        ...state,
        isNewUser: !(state.isNewUser)
      }
    } //determins if a user is logged in 
    case types.SET_ISLOGGEDIN: {
      return {
        ...state,
        isLoggedIn: !(state.isLoggedIn)
      }
    }
    default: {
      return state;
    }
  }
};

export default setSceneReducer;
