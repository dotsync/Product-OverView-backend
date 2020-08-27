/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
const port = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');

const productListRoutes = require('./routes/product_list');
const productIdRoutes = require('./routes/product_id');
const productIdStylesRoutes = require('./routes/product_id_styles');

const app = express();

app.use(bodyParser.json());
// future forms needs urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'))
// app.use('/products/:productId', express.static('public'));

// app.use(productIdStylesRoutes)
// app.use(productListRoutes)

app.use('/products', productIdRoutes);

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

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
