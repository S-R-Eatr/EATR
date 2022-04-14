import React from 'react';
import {useSelector} from 'react-redux';

//** This component contains logic for 'back' and 'favorites' buttons that exist in the header */
const Header = (props) => {
  const scene = useSelector(store => store.setScene.sceneState);
  //const hideFavorites = useSelector(store => store.favs.favsList.length < 4);
    switch (scene) {
      case 'feed':
        return (
          <>
            <button id="back" onClick={(e) => props.handleSceneChange(e)}>Back</button>
            <h1>Eatr</h1>
            <button id="favorites" onClick={(e) => props.handleSceneChange(e)}>Favorites</button>
          </>
        );
      case 'favorites':
        return (
          <>
          <button id="back" onClick={(e) => props.handleSceneChange(e)}>Back</button>
          <h1>Eatr</h1>
          <p>Here are your liked options</p>
          </>
        );
      default:
        return (
          <>
            <h1>Eatr</h1>
            <button id="favorites" onClick={(e) => props.handleSceneChange(e)}>Favorites</button>
          </>
        );
    }
}
export default Header;











