import express from 'express';

'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('Nf92DVhp69FI1Lj8q9X1JjZNpSCTy2zgJSQK4jnDmopSTSczsj-kYBkf-qf3oq1e-jesqK8cgrLpC-XM52eIfnxgQGvX0CwEz9QZKwcvguLID62A2WsSCe3ECqVRYnYx');


const apiSearch = client.search({
  term: 'Thai Restaurant',
  location: '22947',
  limit: 15,
  sort_by: 'best_match',
}).then(res => {
  // res.locals.restaurantQuery = res.jsonBody.businesses;
  console.log(res.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});

module.exports = apiSearch;