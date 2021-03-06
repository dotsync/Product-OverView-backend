/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
const port = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const productListRoutes = require('./routes/product_list');
// const productIdRoutes = require('./routes/product_id');
// const productIdStylesRoutes = require('./routes/product_id_styles');

const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(bodyParser.json());
// future forms needs urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
// app.use('/products/:productId', express.static('public'));

// app.post('/products', mongoTestServer.createProduct);

app.use('/products', productsRoutes);
// app.use('/products', productListRoutes);
// app.use('/products', productIdRoutes);

// err handling
app.use((error, req, res, next) => {
  // check if response has already been sent
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  // return route error message or an umbrella error
  res.json({ message: error.message || 'Something strange happend' });
});

// connect to mongoose
mongoose
  .connect('mongodb+srv://optomize-prime:prime@cluster0.mydyw.mongodb.net/products', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Succesfully connected to mongo database');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
