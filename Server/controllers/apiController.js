// const apiSearch = require('../api');
import express from 'express';
('use strict');
import yelp from 'yelp-fusion';
const client = yelp.client(
  'xKtPwI4Rj7xRNlLYekgqpwlRmgtq0dUxBeYWDsbCTQhqUnqFSRluOURoDbvvXQ3G9kLWR7c3rmmNB92Ofr8cBgpy5mk4U2WdQIKWINQFGyXWG7anfSLSenMmWEFUYnYx'
);
import Scraper from '../scraper.js'

const apiController = {
  async storeRest(req, res, next) {
    const { term, location } = req.body;
    try {
      const obj = {
        term: term,
        location: location,
        limit: 10,
        sort_by: 'best_match',
        categories: 'restaurants',
      };
      const response = await client.search(obj)
      const businesses = response.jsonBody.businesses;
      const now = new Date()
      const day = now.getDay()
      for (let i = 0; i < businesses.length; i++) {
        const respo = await client.business(businesses[i].alias);
        businesses[i].hours = respo.jsonBody.hours[0].open[day];
        const photos = await Scraper.scrapePhotos(businesses[i].alias);
        businesses[i].photos = photos;
      }
      res.locals.restaurants = businesses;
      return next()
    
      }
      catch (error) {
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
