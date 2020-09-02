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
const start = Date.now();
console.log('Creating File now...');
// const last = 5;
const productBatch = (n, idprefix) => {
  for (let i = 1; i < n + 1; i++) {
    const createProduct = async (req) => {
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
        fs.appendFile('products.json', data, (err) => { err });
      } catch (err) {
        console.log(err);
      }
    };
    // create new faker dummy input each iteration
    const DUMMYINPUT = {
      product_id: idprefix.toString() + i.toString(),
      name: faker.name.findName(),
      slogan: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      category: 'Jackets',
      default_price: '140',
    };
    createProduct(DUMMYINPUT);
  }
};

// create product.json 10 million function
fs.appendFile('products.json', '[', (err) => { err });
const productFileGenerator = (n) => {
  for (let j = 1; j < n + 1; j++) {
    const start = Date.now();
    productBatch(100000, j);
    const end = Date.now();
    const elapsed = end - start; // elapsed time in milliseconds
    const seconds = Math.floor(elapsed / 1000);
    console.log(`batch ${j} took ${seconds} seconds to build
    ...`);
  }
};
// how many batches
productFileGenerator(100); // 500k
const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds
const seconds = Math.floor(elapsed / 1000);
console.log(`ProductFile took ${seconds} seconds.`);
// end of file
// fs.appendFile('products.json', ']', (err) => { err });
