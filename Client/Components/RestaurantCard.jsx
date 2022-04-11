import React from 'react';
import { useSelector } from 'react-redux';
import store from '../store.js';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

const RestaurantCard = (props) => {
  const scene = useSelector((store) => store.setScene.sceneState);
  let business;
  //If the scene is favorites, display the info for the restaurant at the current index of the favsList array
  if (scene === 'favorites')
    business = useSelector((store) => store.favs.favsList[props.index]);
  //otherwise display whatever is the first restaurant in the restaurantsList array
  else business = useSelector((store) => store.restaurants.restaurantList[0]);

  const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
  if (business === undefined) return <p>loading</p>;

  return (
    <Grid align="center">
      <Card sx={{ maxWidth: 420 }} align="left">
        <CardActionArea>
          <CardMedia
            className="food"
            component="img"
            height="340"
            image="https://s3-media0.fl.yelpcdn.com/bphoto/eyYUz3Xl7NtcJeN7x7SQwg/258s.jpg"
            alt="restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {business.name}
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              {business.rating}
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              {business.review_count}
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              {business.price}
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              Hours: 2:00 pm - 11:00 pm
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              Locaation: New York, NY
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              Reviews:
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  // return (
  //   <>
  //     <h3>This is the RestaurantCard </h3>
  //     <article className="restaurant-card">
  //       <title>{business.name}</title>
  //       <img src={business.photos[0]} alt="main restaurant photo"></img>
  //       <section className="review-info">
  //         <p>Avg. Review: {business.rating}</p>
  //         <p># of Reviews: {business.review_count}</p>
  //       </section>
  //       <section className="business-info">
  //         <p>Price: {business.price}</p>
  //         <p>WE NEED HOURS!</p>
  //       </section>
  //       <section className="location-info">
  //         Location: {formattedAddress}
  //       </section>
  //       <section className="reviews">WE NEED TO GET REVIEWS!</section>
  //     </article>
  //   </>
  // );
};

export default RestaurantCard;
