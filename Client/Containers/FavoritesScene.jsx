import React from 'react';
import FavoriteCard from '../Components/FavoriteCard.jsx';

const FavoritesScene = () => {
  // const favsList = useSelector(store => store.favs.favsList);
  const favsList = ['hello','hi','hiya']
  let favoriteCards = [];
  for (let i = 0; i < favsList.length; i++) {
    const uniqueId = 'favorite' + favsList[i].id;
    favoriteCards.push(<FavoriteCard index={i} key={uniqueId} />);
  }
  return (
    <>
    <p>Congrats! Here are your liked options</p>
    {favoriteCards}
    </>
  );
}
export default FavoritesScene;