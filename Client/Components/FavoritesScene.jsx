import React from 'react';
import FavoriteCard from './FavoriteCard.jsx';

const FavoritesScene = () => {
  const favsList = useSelector(store => store.favsList);
  let favoriteCards = [];
  for (let i = 0; i < favsList.length; i++) {
    const uniqueId = 'favorite' + favsList[i].id;
    favoriteCards.push(<FavoriteCard index={i} key={uniqueId} />);
  }
  return (
    {favoriteCards}
  );
}
export default FavoritesScene;