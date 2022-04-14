import setScenceReducer from '../../client/reducers/setScenceReducer.js'

// GET_RESTAURANTS = 'GET_RESTAURANTS';
// ADD_TO_FAVS = 'ADD_TO_FAVS';
// SET_FAVS = 'SET_FAVS';
// GET_NEXT = 'GET_NEXT';
// XXSET_SCENE = 'SET_SCENE';
// XXGET_ISNEWUSER = 'GET_ISNEWUSER';
// XXSET_ISLOGGEDIN = 'SET_ISLOGGEDIN';
// SET_USER = 'SET_USER';


//** Test for setSceneReducer */
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
  describe('SET_SCENE', ()=> { //assuming that set_scene brings one back to home screen, but unsure what home screen is
                                  //is login screen or location/category screen
    const action = {
      type: 'SET_SCENE',
      payload: 'home',
    };
    it('returns user to home screen', () => {
      const { sceneState } = subject(state, action);
      expect(sceneState).toEqual(action.payload)
    });  
  });
  describe('GET_ISNEWUSER', () => {
    const action = {
      type: 'GET_ISNEWUSER',
      payload: true, 
    };
    it('determines whether a user has a profile or not', () => {
      const { isNewUser } = subject(state, action);
      expect(isNewUser).toEqual(action.payload);
  });
  describe('SET_ISLOGGEDIN', () => {
    const action = {
      type: 'SET_ISLOGGEDIN',
      payload: true,
    }
    it('determines if a user is logged in', () => {
      const{ isLoggedIn } = subject(state, action);
      expect(isLoggedIn).toEqual(action.payload);
    });
  })
  
})})

//** Test for restaurantReducer */
decscribe('restaurantsReducer Tests', () => {
  let state;

  beforeEach(() => {
    const state = {
      restaurantList: [],
      category: '', //do we need category and location as separate strings or can they exists w/in restaurantList?
      location: '',
      offset: 0, //not sure what offset means...
    };
    describe('default state', () => {
      it('should return a default state when given an undefined input', () => {
        expect(restaurantsReducer(undefined, { type: undefined })).toEqual(state);
      });
    });
  
    describe('unrecognized action types', () => {
      it('should return the original without any duplication', () => {
        const action = { type: 'aajsbicawlbejckr' };
        expect(restaurantsReducer(state, action)).toBe(state);
      });
      describe('GET_RESTAURANTS', () => {
        const action = {
          type: 'GET_RESTAURANTS',
          payload: [{category: 'burgers', location: 'moon'}] 
        }
        /**rather than the state for restaurantReducer having category and location as separate categories,
          does it make more sense to have them inside the restaurantList array?
         */
        // const state = {
        //   restaurantList: [{category: burgers, location: mars}],
        //   offset: 0,
        // };
      it('populates array with restaurants based on category and location', () => {
        const { restaurantList } = subject(state, action);
        expect(restaurantList[0]).toEqual({
          category: 'burgers',
          location: 'moon',
          });
    //unsure about how to do get_next; is it connected to offset in state? does not have payload in reducer
    //assuming it feeds next restaurant after user 'swipes' left or right
      // describe('GET_NEXT', () => { 
      //   const action = {
      //     type: 'GET_NEXT',

      //   }
      // })
        });

           //** Test for favsReducer */
      decscribe('favsReducer Tests', () => {
        let state;
      
        beforeEach(() => {
          const state = {
            favsList: [], //assuming that favsList will be an array of objects w/ category and location like restaurantList
          };
          };
          describe('default state', () => {
            it('should return a default state when given an undefined input', () => {
              expect(favsReducer(undefined, { type: undefined })).toEqual(state);
            });
          });
        
          describe('unrecognized action types', () => {
            it('should return the original without any duplication', () => {
              const action = { type: 'aajsbicawlbejckr' };
              expect(favsReducer(state, action)).toBe(state);
            });
          describe('ADD_TO_FAVS', () => {
            const action = {
              type:'ADD_TO_FAVS',
              payload: [{category: 'fave burger', location: 'fave moon'}] 
            };
          it('populates array with restaurants favorites by user', () => {
            expect(favsList[0]).toEqual({
              category: 'fave burgers',
              location: 'fave moon',
              });
          });
          //not sure what to do about SET_FAVS
          });
      });

          

