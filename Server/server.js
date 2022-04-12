import express from 'express';
import path from 'path';
import apiController from './controllers/apiController.js';
import mongoose from 'mongoose';
import 'dotenv/config';
// require('dotenv').config({ path: path.resolve(__dirname, '../.env')})

const app = express();
const connection_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@eatr-app.lyexl.mongodb.net/sreatr?retryWrites=true&w=majority`;

mongoose.connect(connection_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'sreatr'
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//hi bill
//Route handlers
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/restaurants', apiController.storeRest, (req, res) => {
  return res.status(201).send(res.locals.restaurants);
});
//hey bill
//Unknown Route Handler
app.get('/*', (req, res) => {
  return res.status(404).send('404 No Food Found!');
});
//whats up bill
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
