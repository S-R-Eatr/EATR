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

  return (
    <main>
      <Header handleSceneChange={handleSceneChange}/>
      <div className="scene">
        {scene == 'feed' && <FeedScene/>}
        {scene == 'favorites' && <FavoritesScene />}
        {scene == 'home' && <HomeScene />}
        {/* {renderSwitch()} */}
      </div>
    </main>
  )
}
export default MainContainer;