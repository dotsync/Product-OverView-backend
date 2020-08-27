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
app.use(productIdRoutes);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// clean code psuedocode up
// add routes into server.js as middle ware to keep the file lean and readabile
