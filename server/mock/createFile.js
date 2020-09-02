/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
const fs = require('fs');
const faker = require('faker');

const Product = require('../models/product');

// const stream = fs.createWriteStream('./data');
// const append = fs.appendFileSync();
/* 100,000 in about 30secs */
// const start = Date.now();
// const thou = 1000;
// const tenMil = 10000000;

fs.appendFileSync('appdata.json', '[');
// const last = 5;
const productBatch = (n) => {
  const start = Date.now();
  for (let i = 0; i < n; i++) {
    const createProduct = async (req) => {
      console.log(i);
      const {
        product_id, name, slogan, description, category, default_price,
      } = req;
      // create product
      const createdProduct = new Product({
        product_id,
        name,
        slogan,
        description,
        category,
        default_price,
      });

      try {
        const data = `${await JSON.stringify(createdProduct, null, 2)}, `;
        fs.appendFileSync('appdata.json', data);
      } catch (err) {
        console.log(err);
      }
    };

    // create new faker dummy input each iteration
    const DUMMYINPUT = {
      product_id: i,
      name: faker.name.findName(),
      slogan: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      category: 'Jackets',
      default_price: '140',
    };
    createProduct(DUMMYINPUT);
  }
  const end = Date.now();
  const elapsed = end - start; // elapsed time in milliseconds
  const seconds = Math.floor(elapsed / 1000);
  console.log(seconds, 'seconds');
};

// const end = Date.now();
// const elapsed = end - start; // elapsed time in milliseconds
// const seconds = Math.floor(elapsed / 1000);
// console.log(seconds, 'seconds');
productBatch(100);
