const HttpError = require('../models/http-error.js');

const DUMMY_STYLES = {
  product_id: '11',
  results: [
    {
      style_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': 1,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15,
      },
    },
    {
      style_id: 2,
      name: 'Desert Brown & Tan',
      original_price: '140',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_2_photo_number.jpg',
        },
      ],
      skus: {
        S: 16,
        XS: 8,
        M: 17,
        L: 10,
        XL: 15,
        XXL: 6,
      },
    },
  ],
};

const getProductStylesById = (req, res, next) => {
  const productId = Number(req.params.product_id);
  const styles = DUMMY_STYLES.results;
  // const product = DUMMY_STYLES.find((p) => p.id === productId);
  if (!styles) {
    throw new HttpError('Could not find product with the given id');
  }
  res.json({ styles });
};

exports.getProductStylesById = getProductStylesById;
