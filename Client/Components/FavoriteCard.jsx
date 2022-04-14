import React from 'react';
import { useSelector} from 'react-redux';

//This component is used to create the display for each favorite restaurant card
const FavoriteCard = (props) => {
  const business = useSelector(store => store.favs.favsList[props.index]);
  const location = business.location;
  const formattedPhone = `(${business.phone.slice(1,4)}) ${business.phone.slice(4,7)}-${business.phone.slice(7,11)}`;
  const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;

  return(
    <article className="favorite-card">
      <img src={business.image_url} alt="restaurant's main photo"></img>
      <section className="favorites-business-info">
        <h3>Name: {business.name}</h3>
        <address>
          <p>Address: {formattedAddress}</p>
          <a href={`tel:+${business.phone}`}>Phone number: {formattedPhone}</a>
        </address>
      </section>
    </article>
  );
}
export default FavoriteCard;
