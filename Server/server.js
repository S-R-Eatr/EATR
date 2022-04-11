// const express = require('express');
// const path = require('path');

import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route handlers
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/restaurants', (req, res) => {
  return res.status(200).json(res.locals.restaurants);
});

//Unknown Route Handler
app.get('/*', (req, res) => {
  return res.status(404).send('404 No Food Found!');
});

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//Start listening on specified port
app.listen(3000);
