import React from 'react';

const RestaurantCard = () => {
  const business = useSelector(store => store.favsList[0]);
  return(
    <article className="restaurant-card">
      <title>{business.name}</title>
      {/* <img> */}
      <section className="review-info">
        <p></p>
        <p></p>
      </section>
      <section className="business-info">
        <p></p>
        <p></p>
      </section>
      <section className="location-info"></section>
      <section className="reviews"></section>
    </article>
  );
}
export default RestaurantCard;