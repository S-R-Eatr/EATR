import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { setSceneActionCreator, getRestaurantsActionCreator } from '../Actions/actions.js';

import Header from '../Components/Header.jsx';
import HomeScene from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavoritesScene from './FavoritesScene.jsx'

const MainContainer = () => {
  const dispatch = useDispatch();
  const scene = useSelector(store => store.setScene.sceneState);
    const handleSceneChange = (e) => {
      if (scene === 'feed' && e.target.id === 'back') dispatch(setSceneActionCreator('home'));
      else if (scene === 'feed' && e.target.id === 'favorites') dispatch(setSceneActionCreator('favorites'));
      else if (scene === 'favorites' && e.target.id === 'back') dispatch(setSceneActionCreator('feed'));
      else dispatch(setSceneActionCreator('feed'));
    }
    const handleFormSubmission = (e) => { //possibly opening page that asks for restaurant name and zip
      e.preventDefault();
      /**
       * May be easier to target these by ID
       */
      
      const form = e.target.parentNode;
      const location = form.children[2].value;
      const category = form.children[6].value;
      dispatch(getRestaurantsActionCreator({term: category, location: location}));
      handleSceneChange(e);
    }
    const renderSwitch = () => { //switching from 'swipe' feed to faves back to home (ie category/location)
      switch(scene) {
        case 'feed':
          return (
            <>
            <FeedScene />
            </>
          )
        case 'favorites':
          return (
            <>
            <FavoritesScene />
            </>
          )
        default:
          return (
            <div className='homeScene'>
              <HomeScene onClick={handleFormSubmission}/>
            </div>
          );
      }
    }
    return (
      <main>
        <Header onClick={handleSceneChange}/>
        <div className="scene">
          {renderSwitch()}
        </div>
      </main>
    )
}
export default MainContainer;