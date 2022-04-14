
import React from 'react';
import { useDispatch } from 'react-redux';

import { getNextActionCreator, addToFavActionCreator } from '../actions/actions.js';

import RestaurantCard from '../components/RestaurantCard.jsx';


const FeedScene = () => {
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    if (e.target.id === 'like') {
      //dispatch action to add to favorites
      dispatch(addToFavActionCreator());
      //dispatch aciton to get next restaurant
      dispatch(getNextActionCreator());
    } else {
      dispatch(getNextActionCreator());
    }
  }

    return (
        <>
        < RestaurantCard />
        <button
        onClick={handleClick}
        id='dislike'
        >X                
        </button>
                
        <button
        onClick={handleClick}
        id='like'
        >✓                
        </button>        
        </>
    )

}

export default FeedScene;
