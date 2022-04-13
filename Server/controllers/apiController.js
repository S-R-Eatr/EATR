// const apiSearch = require('../api');
// import express from 'express';
// ('use strict');
// import yelp from 'yelp-fusion';
const express = require('express');
('use strict');
const yelp = require('yelp-fusion');
const client = yelp.client( //using API key from yelp to send request and get response
  'xKtPwI4Rj7xRNlLYekgqpwlRmgtq0dUxBeYWDsbCTQhqUnqFSRluOURoDbvvXQ3G9kLWR7c3rmmNB92Ofr8cBgpy5mk4U2WdQIKWINQFGyXWG7anfSLSenMmWEFUYnYx'
);
// import Scraper from '../scraper.js'

const apiController = {
  async storeRest(req, res, next){

    const { term, location } = req.query;
    try {
      const obj = { //request body; passing to yelp API on line 22
        term: term,
        location: location,
        limit: 10,
        sort_by: 'best_match',
        categories: 'restaurants',
      };
      const response = await client.search(obj) //what does response obj look like?
      const businesses = response.jsonBody.businesses; 
      console.log(businesses)
      const now = new Date()
      const day = now.getDay()
      // console.log(businesses.length)


      // GET business' hours
      for (let i = 0; i < businesses.length; i++) {
        const respo = await client.business(businesses[i].alias);
        console.log(respo)
        businesses[i].hours = respo.jsonBody.hours[0].open[day]; // errors if no hours listed?
        // console.log("calling:", i)
        // const photos = await Scraper.scrapePhotos(businesses[i].alias);
        // businesses[i].photos = photos;
      }
      res.locals.restaurants = businesses; //businesses = array
      // console.log(res.locals.restaurants);
      return next()
    
      }
      catch (error) {
        console.log(error);
      return next({
        log: `Error caught in apiController.storeRest middleware ${error}`,
        message: {
          error: 'apiController.storeRest ERROR: Check server logs for details',
        },
      });
    }
  },
};

module.exports = apiController;