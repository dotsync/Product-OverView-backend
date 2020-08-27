/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
/* OBJECTIVE: Build required Routes from the API documentation

                                   Express              MongoDB                MongoDB Shell
Routes                    [client] ------> [server.js] ---------> [MongoDB] ------------> [AWS]

TODO MATCH ENDPOINTS and VERB between frontend and routes */
const express = require('express');
const bodyParser = require('body-parser');
// const port = process.env.PORT || 5000;
const port = 5000;

const app = express();
/* ******************************************************* */
// MIDDLEWARE
app.use(bodyParser.json());
// future forms needs urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'))
// app.use('/products/:productId', express.static('public'));
app.use((req, res, next) => {
  console.log('Middleware');
  next();
});
// END MIDDLE WARE
/* ******************************************************* */
// ROUTES

/* Now make a database and connect to express
(ADDITIONAL STEPS MAY BE REQUIRED) */

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
