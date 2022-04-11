// const apiSearch = require('../api');
import express from 'express';
('use strict');
import yelp from 'yelp-fusion';
const client = yelp.client(
  'xKtPwI4Rj7xRNlLYekgqpwlRmgtq0dUxBeYWDsbCTQhqUnqFSRluOURoDbvvXQ3G9kLWR7c3rmmNB92Ofr8cBgpy5mk4U2WdQIKWINQFGyXWG7anfSLSenMmWEFUYnYx'
);

const apiController = {
  storeRest(req, res, next) {
    // const { term, location } = req.body;
    // const obj = {
    //   term: term,
    //   location: location,
    //   limit: 10,
    //   sort_by: 'best_match',
    //   categories: 'restaurants',
    // };

    try {
      const obj = {
        term: 'bagels',
        location: 'Richmond,VA',
        limit: 10,
        sort_by: 'best_match',
        categories: 'restaurants',
      };
      client.search(obj)
        .then((response) => {
          res.locals.restaurants = response.jsonBody.businesses;
          console.log(res.locals.restaurants)
          return next();
      });
    } catch (error) {
      return next({
        log: `Error caught in apiController.storeRest middleware ${error}`,
        message: {
          error: 'apiController.storeRest ERROR: Check server logs for details',
        },
      });
    }
  },
};

export default apiController;
