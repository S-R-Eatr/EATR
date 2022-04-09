// import express from 'express';

'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('Nf92DVhp69FI1Lj8q9X1JjZNpSCTy2zgJSQK4jnDmopSTSczsj-kYBkf-qf3oq1e-jesqK8cgrLpC-XM52eIfnxgQGvX0CwEz9QZKwcvguLID62A2WsSCe3ECqVRYnYx');


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

// module.exports = apiSearch;