import setSceneReducer from '../../client/reducers/setSceneReducer.js'
import restaurantsReducer from '../../client/reducers/restaurantsReducer.js'
import favsReducer from '../../client/reducers/favsReducer.js'
import { addToFavActionCreator } from '../../client/actions/actions.js';
// GET_RESTAURANTS = 'GET_RESTAURANTS';
// ADD_TO_FAVS = 'ADD_TO_FAVS';
// SET_FAVS = 'SET_FAVS';
// GET_NEXT = 'GET_NEXT';
// XXSET_SCENE = 'SET_SCENE';
// XXGET_ISNEWUSER = 'GET_ISNEWUSER';
// XXSET_ISLOGGEDIN = 'SET_ISLOGGEDIN';
// SET_USER = 'SET_USER';

// describe('fake test', () => {
//   it('is a fake test', () => {
//     expect(1).toEqual(1);
//   })
// })
//** Test for setSceneReducer */
describe('setSceneReducer Tests', () => {
  let state;

  beforeEach(() => {
    state = {
      sceneState: 'home',
      isLoggedIn: false,
      isNewUser: false,
      }
  })
  
  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(setSceneReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(setSceneReducer(state, action)).toBe(state);
    });
    
  });

  describe('SET_SCENE', () => { //assuming that set_scene brings one back to home screen, but unsure what home screen is
                                  //is login screen or location/category screen
    const homeAction = {
      type: 'SET_SCENE',
      payload: 'home',
    };
    const feedAction = {
      type: 'SET_SCENE',
      payload: 'feed',
    };
    const favoriteAction = {
      type: 'SET_SCENE',
      payload: 'favorites',
    };
    
    it('returns user to home screen', () => {
      const { sceneState } = setSceneReducer(state, homeAction);
      expect(sceneState).toEqual(homeAction.payload)
    });
    it('returns user to feed screen', () => {
      const { sceneState } = setSceneReducer(state, feedAction);
      expect(sceneState).toEqual(feedAction.payload)
    });
    it('returns user to favorite screen', () => {
      const { sceneState } = setSceneReducer(state, favoriteAction);
      expect(sceneState).toEqual(favoriteAction.payload)
    });

  });
  
  // Test the signup vs login views
  describe('GET_ISNEWUSER', () => {
    const action = {
      type: 'GET_ISNEWUSER',
      //payload: true, 
    };

    it('determines whether a user has a profile or not', () => {
      const { isNewUser } = setSceneReducer(state, action);
      expect(isNewUser).toEqual(true);
    });

  })
  
  describe('SET_ISLOGGEDIN', () => {
    const action = {
      type: 'SET_ISLOGGEDIN',
      // payload: true,
    }
    it('determines if a user is logged in', () => {
      const{ isLoggedIn } = setSceneReducer(state, action);
      expect(isLoggedIn).toEqual(true);
    });
  })
})

  
//** Test for restaurantReducer */
describe('restaurantsReducer Tests', () => {
  let state;

  beforeEach(() => {
    state = {
      restaurantList: [],
      category: '', //do we need category and location as separate strings or can they exists w/in restaurantList?
      location: '',
      offset: 0, //not sure what offset means...
    };
  });

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
      const { restaurantList } = restaurantsReducer(state, action);
      expect(restaurantList[0]).toEqual({
        category: 'burgers',
        location: 'moon',
      });
    }) 
    
    // describe('GET_NEXT', () => { 
    //   const action = {
    //     type: 'GET_NEXT',
    //   }
    // })

  }) 
})

//** Test for favsReducer */
describe('favsReducer Tests', () => {
  let state;

  beforeEach(() => {
    state = {
      favsList: [], //array of objects w/ info detailing restaurants
    };
  });
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
  })
  describe('ADD_TO_FAVS', () => {
    const action = {
      type:'ADD_TO_FAVS',
      payload: {
        id: 1,
        name: 'john\'s',
        rating: 5,
        review_count: 100,
        location: 'New York, NY',
        price: '$$$$',
        image_url: 'google.com',
        transactions: ['delivery']
      }
    };
    it('populates array with restaurant favorites by user', () => {

      //   const mockFn = jest.fn(addToFavActionCreator)
      //   mockFn(action)
      // console.log('Favlist: ', state.favsList)
      // favsReducer(state, action);
      // console.log('Favlist[0]: ', state.favsList[0])
      // addToFavActionCreator(action, state);
      // expect(addToFavActionCreator).toHaveBeenCalled();
      // expect(favsReducer).toHaveBeenCalled();
      // expect(state.favsList[0]).toEqual({
      //   id: 1,
      //   name: 'john\'s',
      //   rating: 5,
      //   review_count: 100,
      //   location: 'New York, NY',
      //   price: '$$$$',
      //   image_url: 'google.com',
      //   transactions: ['delivery']
      // })
      const list = state.favsList.slice();
      list.push({
        id: 1,
        name: 'john\'s',
        rating: 5, 
        review_count: 100,
        location: 'New York, NY',
        price: '$$$$',
        image_url: 'google.com',
        transactions: ['delivery']
      })
      const {favsList} = favsReducer(state, action);
      expect(list).toEqual(favsList);
    });
  });
  describe('SET_FAVS', () => { 
    const action = {
      type: 'SET_FAVS',
      payload: [{
        id: 1,
        name: 'john\'s',
        rating: 5,
        review_count: 100,
        location: 'New York, NY',
        price: '$$$$',
        image_url: 'google.com',
        transactions: ['delivery']
      }]
    };
    it('loads users\' favorited restaurants ', () => {
      const list = [{
        id: 1,
        name: 'john\'s',
        rating: 5, 
        review_count: 100,
        location: 'New York, NY',
        price: '$$$$',
        image_url: 'google.com',
        transactions: ['delivery']
      }];
      const {favsList} = favsReducer(state, action);
      expect(list).toEqual(favsList);
    })
  });
})

