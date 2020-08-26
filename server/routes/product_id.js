const express = require('express');

const router = express.Router();

router.get('/products/:product_id', (req, res) => {
  if (1 === 1) {
    // res.sendStatus(200);
    // hardcoded for now, but later it will have to fetch from the mongodb server
    res.json({
      id: 11,
      name: 'Air Minis 250',
      slogan: 'Full court support',
      description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
      category: 'Basketball Shoes',
      default_price: '0',
      features: [
        {
          feature: 'Sole',
          value: 'Rubber',
        },
        {
          feature: 'Material',
          value: 'FullControlSkin',
        },
      ],
    });
  }
});

module.exports = router;
