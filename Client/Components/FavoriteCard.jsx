import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FavoriteCard = () => {
  const business = useSelector(store => store.favsList[props.index]);
  const formatedPhone = `(${business.phone.slice(1,4)}) ${business.phone.slice(4,7)}-${business.phone.slice(7,11)}`;
  const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
  return(
    <article className="favorite-card">
      {/* <img> */}
      <section className="favorites-business-info">
        <title>{business.name}</title>
        <address>
          <p>{formattedAddress}</p>
          {/* <br></br> */}
          <a href={`tel:+${business.phone}`}>{formattedPhone}</a>
        </address>
      </section>
    </article>
  );
}
export default FavoriteCard;