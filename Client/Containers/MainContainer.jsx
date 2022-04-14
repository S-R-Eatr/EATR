import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { setScene } from '../actions/actions.js';

import Header from '../components/Header.jsx';
import HomeScene from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavoritesScene from './FavoritesScene.jsx'

const MainContainer = () => {
  const dispatch = useDispatch();
  //this will allow us to pull the sceneState from the redux store
  const scene = useSelector(store => store.setScene.sceneState);
  
  //this function allows to change the scene of the current page 
  //will allow for conditional rendering in the return statement
  const handleSceneChange = (e) => {
    if (scene === 'feed' && e.target.id === 'back') dispatch(setScene('home'));
    else if (scene === 'feed' && e.target.id === 'favorites') dispatch(setScene('favorites'));
    else if (scene === 'favorites' && e.target.id === 'back') dispatch(setScene('feed'));
    else if(scene === 'home' && e.target.id === 'favorites') dispatch(setScene('favorites'));
    else dispatch(setScene('feed'));
  }

  return (
    <main>
      <Header handleSceneChange={handleSceneChange}/>
      <div className="scene">
        {scene == 'feed' && <FeedScene/>}
        {scene == 'favorites' && <FavoritesScene />}
        {scene == 'home' && <HomeScene />}
      </div>
    </main>
  )
}
export default MainContainer;