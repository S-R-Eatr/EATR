import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

const RestaurantCard = () => {
  // const business = useSelector((store) => store.favsList[0]);
  // const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;

  return (
    <Grid spacing={0} align="center">
      <Card sx={{ maxWidth: 420 }} align="left">
        <CardActionArea>
          <CardMedia
            className="food"
            component="img"
            height="340"
            image="https://s3-media0.fl.yelpcdn.com/bphoto/eyYUz3Xl7NtcJeN7x7SQwg/258s.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Johnny's
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              Avg review: 4 stars
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              # of reviews: 4,187
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              $$
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
};

// const RestaurantCard = () => {
//   const business = useSelector((store) => store.favsList[0]);
//   const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
//   return (
//     <article className="restaurant-card">
//       <title>{business.name}</title>
//       {/* <img> */}
//       <section className="review-info">
//         <p>Avg. Review: {business.rating}</p>
//         <p># of Reviews: {business.review_count}</p>
//       </section>
//       <section className="business-info">
//         <p>Price: {business.price}</p>
//         <p>WE NEED HOURS!</p>
//       </section>
//       <section className="location-info">Location: </section>
//       <section className="reviews">WE NEED TO GET REVIEWS!</section>
//     </article>
//   );
// };
export default RestaurantCard;
