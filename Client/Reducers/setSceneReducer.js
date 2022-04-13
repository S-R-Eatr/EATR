import * as types from '../Constants/actionTypes.js';

const initState = {
  sceneState: 'home',
  isLoggedIn: false,
  isNewUser: true,
};

const setSceneReducer = (state = initState, action) => {
  let sceneState;
  switch (action.type) {
    case types.SET_SCENE: {
      sceneState = action.payload;
      return {
        ...state,
        sceneState,
      };
    }
    case types.GET_ISNEWUSER: {
      return{
        ...state,
        isNewUser: !(state.isNewUser)
      }
    }
    default: {
      return state;
    }
  }
};

export default setSceneReducer;
