
import React, { Component } from 'react';
import RestaurantCard from '../Components/RestaurantCard.jsx';

// const restaurantList = from Redux store
const restaurantList = [1,2,3]
const feedItemArray = [];
for (let i = 0; i < restaurantList.length; i++) {
    feedItemArray.push(< RestaurantCard key={`item:${i}`} />);
}

const FeedScene = () => {
    return (
        <>
        {feedItemArray}
        </>
    )

}



export default FeedScene;