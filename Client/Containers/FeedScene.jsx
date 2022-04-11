
import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getNextActionCreator, addToFavActionCreator } from '../Actions/actions.js';

import RestaurantCard from '../Components/RestaurantCard.jsx';


const FeedScene = () => {
  const dispatch = useDispatch();
  
  const business = useSelector(store => store.favs.favsList[0]);

  const handleThumbsUp = (e) => {
    if (e.target.id === 'thumbsup') {      
        //dispatch action to add to favorites
        dispatch(addToFavActionCreator());
        //dispatch aciton to get next restaurant
        dispatch(getNextActionCreator());
    }
  }

  const handleThumbsDown = (e) => {
    if (e.target.id === 'thumbsdown') {
      //dispatch aciton to get next restaurant
      dispatch(getNextActionCreator());
    }
  }

    return (
        <>
        < RestaurantCard />
        <button
        onClick={handleThumbsDown}
        id='thumbsdown'
        >X                
        </button>
                
        <button
        onClick={handleThumbsUp}
        id='thumbsup'
        >✓                
        </button>        
        </>
    )

}

export default FeedScene;
