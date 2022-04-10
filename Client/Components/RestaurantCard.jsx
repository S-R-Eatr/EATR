import React from 'react';

const RestaurantCard = () => {
  const business = useSelector(store => store.favsList[0]);
  const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
  return(
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
  );
}
export default RestaurantCard;