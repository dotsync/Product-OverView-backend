const express = require('express');

const router = express.Router();

router.get('/products/:product_id/styles', (req, res) => {
  res.send('hello from styles');
});

module.exports = router;
