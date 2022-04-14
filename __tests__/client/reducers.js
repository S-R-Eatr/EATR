import setScenceReducer from '../../client/reducers/setScenceReducer.js'

// GET_RESTAURANTS = 'GET_RESTAURANTS';
// ADD_TO_FAVS = 'ADD_TO_FAVS';
// SET_FAVS = 'SET_FAVS';
// GET_NEXT = 'GET_NEXT';
// SET_SCENE = 'SET_SCENE';
// GET_ISNEWUSER = 'GET_ISNEWUSER';
// SET_ISLOGGEDIN = 'SET_ISLOGGEDIN';
// SET_USER = 'SET_USER';


/*
favsReducer Tests
*/
/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */

// describe('favsReducer Tests', () => {
//     let state;
  
//     beforeEach(() => {
//       state = {
//         favsList: []
//       };
//     });

decscribe('setSceneReducer Tests', () => {
  let state;

  beforeEach(() => {
    state = {
      sceneState: 'home',
      isLoggedIn: false,
      isNewUser: true,
      }
  })
  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(setScenceReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(setScenceReducer(state, action)).toBe(state);
    });
  });
  describe('SET_SCENE', ()=> {
    const action = {
      type: 'SET_SCENE',
      payload: 'home',
    };
    it('returns user to home screen', () => {
      const { sceneState } = subject(state, action);
      expect(sceneState).toEqual({
        sceneState: 'home' //unsure?????
      });
    });  
  });
  describe('GET_ISNEWUSER', () => {
    const action = {
      type: 'GET_ISNEWUSER',
      payload: boolean, //can you use boolean in tests or do you have to hardcode 
    };
    it('determines whether a user has a profile or not', () => {
      const { isNewUser } = subject(state, action);
      expect(isNewUser).toEqual({action.payload});
  });
  describe('SET_ISLOGGEDIN', () => {
    const action = {
      type: 'SET_ISLOGGEDIN',
      payload: boolean,
    }
    it()
  })
});

