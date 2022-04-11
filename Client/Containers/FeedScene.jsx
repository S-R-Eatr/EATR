
import React, { Component } from 'react';
import RestaurantCard from '../Components/RestaurantCard.jsx';
import getNextActionCreator from '../Actions/actions.js';
import { connect } from 'react-redux';

// const restaurantList = from Redux store
const restaurantList = [1,2,3]
const feedItemArray = [];
// for (let i = 0; i < restaurantList.length; i++) {
//     feedItemArray.push(< RestaurantCard key={`item:${i}`} />);
// }

const mapDispatchToProps = dispatch => (
    {
      getNext: () => {
        dispatch(actions.getNextActionCreator());
      }, 
    }
);


// handleThumbsUp (e) {
//     if (e.target.id === 'thumbsup') {
//         console.log("inside handleThumbsUp");
//         //kick off action types.GET_NEXT
//         // this.props.store.dispatch(getNextActionCreator())
//         // onChange={e => { setNewLocation(e.target.value); }}  
//         //push restaurant to favList
//     }
// }


const FeedScene = () => {
    return (
        <>
        {/* {feedItemArray} */}
        < RestaurantCard />

        <button
        // onClick={this.handleSceneChange}
        id='thumbsdown'
        >X                
        </button>
                
        <button
        // onClick={this.handleSceneChange}
        id='thumbsup'
        >✓                
        </button>

        <p>End of Feed Scene</p>
        
        </>
    )

}

// export default FeedScene;


export default connect(null, mapDispatchToProps)(FeedScene);