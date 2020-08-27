const express = require('express');

const router = express.Router();

router.get('/products/list', (req, res) => {
  res.send('hello from list');
});

module.exports = router;
