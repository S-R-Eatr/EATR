import React from 'react';
import { useSelector } from 'react-redux';
import store from '../store.js';

const RestaurantCard = () => {
//   const business = useSelector(store => store.favs.favsList[0]);
//--?? store.RestaurantList[0]
  const business = {
      name: 'Subway',
      rating: '4.2',
      review_count: 2122,
      price: '$$'
  }

console.log(business);

//   const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
  const formattedAddress = '1 Subway St'
  return(
    <>
    <h3>This is the RestaurantCard </h3>
    <article className="restaurant-card">
      <title>{business.name}</title>
      {/* <img> */}
      <section className="review-info">
        <p>Avg. Review: {business.rating}</p>
        <p># of Reviews: {business.review_count}</p>
      </section>
      <section className="business-info">
        <p>Price: {business.price}</p>
        <p>WE NEED HOURS!</p>
      </section>
      <section className="location-info">Location: </section>
      <section className="reviews">WE NEED TO GET REVIEWS!</section>
    </article>
    </> 
  );
}

export default RestaurantCard;
