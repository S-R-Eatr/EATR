import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

const FavoriteCard = () => {
  // const business = useSelector(store => store.favsList[props.index]);
  const business = {
    image_url: 'url',
    name: 'business name',
    phone: 'business phone',
  };
  // const formattedPhone = `(${business.phone.slice(1,4)}) ${business.phone.slice(4,7)}-${business.phone.slice(7,11)}`;
  const formattedPhone = 'formattedPhone';
  // const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
  const formattedAddress = 'formattedAddress';

  return (
    <Grid container spacing={2} align="center" justifyContent="center">
      <Grid item>
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
              <Typography gutterBottom variant="h4" component="div" id="red">
                {business.name}
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Location:
              </Typography>
              <Typography variant="body" color="text.secondary" component="div">
                Phone
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );

  // return (
  //   <article className="favorite-card">
  //     <img href={business.image_url} alt="restaurant's main photo"></img>
  //     <section className="favorites-business-info">
  //       <title>{business.name}</title>
  //       <address>
  //         <p>{formattedAddress}</p>
  //         {/* <br></br> */}
  //         <a href={`tel:+${business.phone}`}>{formattedPhone}</a>
  //       </address>
  //     </section>
  //   </article>
  // );
};

// const FavoriteCard = () => {
//   const business = useSelector(store => store.favsList[props.index]);
//   const formatedPhone = `(${business.phone.slice(1,4)}) ${business.phone.slice(4,7)}-${business.phone.slice(7,11)}`;
//   const formattedAddress = `${location['address1']} ${location['address2']}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
//   return(
//     <article className="favorite-card">
//       <img href={business.image_url} alt="restaurant's main photo"></img>
//       <section className="favorites-business-info">
//         <title>{business.name}</title>
//         <address>
//           <p>{formattedAddress}</p>
//           {/* <br></br> */}
//           <a href={`tel:+${business.phone}`}>{formattedPhone}</a>
//         </address>
//       </section>
//     </article>
//   );
// }
export default FavoriteCard;
