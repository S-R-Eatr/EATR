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
    const handleFormSubmission = (e) => {
      e.preventDefault();
      const form = e.target.parentNode;
      const location = form.children[2].value;
      const category = form.children[6].value;
      dispatch(getRestaurantsActionCreator({location: location, category: category}));
      handleSceneChange(e);
    }
    const renderSwitch = () => {
      switch(scene) {
        case 'feed':
          return (
            <>
            < FeedScene />
            </>
          )
        case 'favorites':
          return (
            <>
            < FavoritesScene />
            </>
          )
        default:
          return (
            <>
            < HomeScene onClick={handleFormSubmission}/>
            </>
          );
      }
    }
    return (
      <div className="outerDiv">
        < Header onClick={handleSceneChange}/>
        {renderSwitch()}
      </div>
    )
}
export default MainContainer;