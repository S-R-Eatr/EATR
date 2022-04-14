
import React from 'react';
import { useDispatch } from 'react-redux';

import { getNext, addToFavActionCreator } from '../actions/actions.js';

import RestaurantCard from '../components/RestaurantCard.jsx';

//will render when the scene is set to 'feed'
const FeedScene = () => {
  const dispatch = useDispatch();
  
  //logic to handle clicks on either button
  //if clicked on the like button, will add current restaurant to the favlist of the user
  const handleClick = (e) => {
    if (e.target.id === 'like') {
      //dispatch action to add to favorites
      dispatch(addToFavActionCreator());
    } 
    
    //regardless of which button is hit, will send the next restaurant to the user's feed
    dispatch(getNext());
  }

    return (
        <>
          <RestaurantCard />
          <div className='buttons'>
            <button onClick={handleClick} id='dislike'>X</button>  
            <button onClick={handleClick} id='like'>✓</button>  
          </div>
                
        </>
    )

}

export default FeedScene;
