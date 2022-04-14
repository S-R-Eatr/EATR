// import express from 'express';

'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('3aDQPNXQIadamGnn1R6xLa85YzpbL_e_dSuSAZllNVG2iHlZJAS92o0j_wxRvubiBZEOhQ_AdhQE20aWcSLaV-XGJE-d46ExFa8vnsmbDe3oRJc7rYWTIQKNU1NXYnYx');


// const apiSearch = client.search({
//   term: 'bagels',
//   location: 'Charlottesville,VA',
//   limit: 2,
//   sort_by: 'best_match',
//   categories: 'restaurants'
// }).then(res => {
//   console.log(res.jsonBody.businesses);
//   return res.jsonBody.businesses;
// }).catch(e => {
//   console.log(e);
// });

// const apiSearch = (obj) => {
//   client.search(obj).then(res => {
//   // console.log(res.jsonBody.businesses);
//   return "res.jsonBody.businesses";
// }).catch(e => {
//   return e;
// })};

//  client.business('beauvine-burger-concept')
//           .then((resp) => {
//           //res.locals.restaurants = response.jsonBody.business
//           console.log(resp.jsonBody.hours)
//           return next()
//           } )
          // client.business().then(response => {
          //   console.log(response.jsonBody.hours);
          // }).catch(e => {
          //   console.log(e);
          // });

    // .then((response) => {
        //   res.locals.restaurants = response.jsonBody.businesses;
        //   res.locals.name = response.jsonBody.businesses[0].name
          
        // })
     // console.log(businesses)
      // }); 
      // client.business(res.locals.name)
      //     .then((resp) => {
      //     //res.locals.restaurants = response.jsonBody.business
      //     console.log(resp.jsonBody.hours)
      //     return next()
          
// module.exports = apiSearch;