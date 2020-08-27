const express = require('express');

const router = express.Router();

app.get('/products/:product_id/styles', (req, res) => {
  res.send({});
});

module.exports = router;
