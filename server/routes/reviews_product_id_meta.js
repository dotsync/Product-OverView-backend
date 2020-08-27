const express = require('express');

const router = express.Router();

/* this is a reviews? Should I do it? */
app.get('/reviews/:product_id/meta', (req, res) => {
  res.send('hello from meta');
});
// this will reference greenfield api

module.exports = router;
