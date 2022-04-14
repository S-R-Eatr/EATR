// const apiSearch = require('../api');
// import express from 'express';
// ('use strict');
// import yelp from 'yelp-fusion';
const express = require('express');
('use strict');
const yelp = require('yelp-fusion');
const client = yelp.client( //using API key from yelp to send request and get response
  '3aDQPNXQIadamGnn1R6xLa85YzpbL_e_dSuSAZllNVG2iHlZJAS92o0j_wxRvubiBZEOhQ_AdhQE20aWcSLaV-XGJE-d46ExFa8vnsmbDe3oRJc7rYWTIQKNU1NXYnYx'
);

const apiController = {
  async storeRest(req, res, next){

    const { term, location } = req.query;
    try {
      const obj = { //request body; passing to yelp API on line 22
        term: term,
        location: location,
        limit: 5,
        sort_by: 'best_match',
        categories: 'restaurants',
      };
      const response = await client.search(obj) 
      const businesses = response.jsonBody.businesses; 
      console.log(businesses)
      const now = new Date()
      const day = now.getDay()

      // GET business' hours
      for (let i = 0; i < businesses.length; i++) {
        const respo = await client.business(businesses[i].alias);
        console.log(respo)
        if (respo.jsonBody.hours) {
          businesses[i].hours = respo.jsonBody.hours[0].open[day]; // errors if no hours listed?
        }
      }
      res.locals.restaurants = businesses; //businesses = array
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