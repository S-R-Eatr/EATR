import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const scene = useSelector(store => store.sceneState);
  const hideFavorites = useSelector(store => store.favsList.length < 4);
  const renderSwitch = () => {
    switch (scene) {
      case 'feed':
        return (
          <>
          <button id="back">Back</button>
          <title>Eatr</title>
          <button id="favorites" disabled={hideFavorites}>Back</button>
          </>
        );
      case 'favorites': 
        return (
          <>
          <button id="back">Back</button>
          <title>Eatr</title>
          <p>Congrats! Here are your liked options</p>
          </>
        );
      default:
        return (
          <title>Eatr</title>
        );
    }
  }
  return (
    {renderSwitch}
  );
}
export default Header;