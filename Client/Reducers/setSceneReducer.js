import * as types from '../Constants/actionTypes.js';

const initState = {
  sceneState: 'home',
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
    default: {
      return state;
    }
  }
};

export default setSceneReducer;
