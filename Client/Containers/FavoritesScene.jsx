import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from '../components/FavoriteCard.jsx';


//This will render when the scene is set to favorites, allows user to see which restaurants were listed as their favorites

const FavoritesScene = () => {
  //grabs the user's favorite list from redux store
  const favsList = useSelector(store => store.favs.favsList);
  
  //logic to handle saving the user's favorite list to the server/database
  const handleSave = async () => {
    const toSend = await axios.put('/user', {
      favorites: favsList
    })
  }
  
  //create an array of components, each that will represent a favorited restaurant
  let favoriteCards = [];
  for (let i = 0; i < favsList.length; i++) {
    const uniqueId = 'favorite' + favsList[i].id;
    favoriteCards.push(<FavoriteCard index={i} key={uniqueId} />);
  }
  
  return (
    <>
    <button onClick={handleSave}>SAVE FAVORITES</button>
    {favoriteCards}
    </>
  );
}
export default FavoritesScene;