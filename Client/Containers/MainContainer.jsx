import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSceneActionCreator } from '../Actions/actions.js';
import Header from '../Components/Header.jsx';
import HomeScene from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavoritesScene from './FavoritesScene.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainContainer = () => {
  const dispatch = useDispatch();
  const scene = useSelector((store) => store.setScene.sceneState);
  const handleSceneChange = (e) => {
    if (scene === 'feed' && e.target.id === 'back')
      dispatch(setSceneActionCreator('home'));
    else if (scene === 'feed' && e.target.id === 'favorites')
      dispatch(setSceneActionCreator('favorites'));
    else if (scene === 'favorites' && e.target.id === 'back')
      dispatch(setSceneActionCreator('feed'));
    else dispatch(setSceneActionCreator('feed'));
  };
  const renderSwitch = () => {
    switch (scene) {
      case 'feed':
        return (
          <>
            <FeedScene />
          </>
        );
      case 'favorites':
        return (
          <>
            <FavoritesScene />
          </>
        );
      default:
        return (
          <>
            <HomeScene />
            <div className="btn-container">
              <button
                className="btn-restaurants"
                onClick={handleSceneChange}
                id="submit"
              >
                <span className="desktop">Start looking</span>
                <span className="mobile">
                  <ArrowForwardIcon style={{ color: 'white' }} />
                </span>
              </button>

              {/* <button
              onClick={handleSceneChange}
              id='submit'
              >>>>
            </button> */}
            </div>
          </>
        );
    }
  };
  return (
    <div className="outerDiv">
      <Header onClick={handleSceneChange} />
      {renderSwitch()}
    </div>
  );
};
export default MainContainer;
