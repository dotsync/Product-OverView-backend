/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
const file = require('fs').createWriteStream('./data-files/products.json');

const faker = require('faker');
const Product = require('../models/products');

const createBatchesOfProducts = (amountPerBatch, desiredAmountOfBatches) => {
  const globalStart = Date.now();
  console.log(`

Creating product file now...
..
`);

  /* *********************DRAIN */


  /* *********************DRAIN */

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
        // try {
        const data = `${await JSON.stringify(createdProduct, null, 2)}, `;
        // fs.appendFile('products.json', data, (err) => { err; });
        file.write(data);
        // } catch (err) {
        //   console.log(err);
        // }
      };
      // create new faker dummy input each iteration
      const DUMMYINPUT = {
        product_id: `${idprefix.toString()}-${i.toString()}`,
        name: faker.lorem.word(),
        slogan: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        category: faker.lorem.word(),
        default_price: faker.random.number({ min: 40, max: 350 }),
      };
      createProduct(DUMMYINPUT);
    }
  };

  // create product.json 10 million function
  // fs.appendFile('products.json', '[', (err) => { console.log(`Error while appending '[' ${err}`); });
  file.write('[');

  const productFileGenerator = (n) => {
    for (let j = 1; j <= n; j++) {
      const batchStart = Date.now();
      // how many per batch?
      productBatch(amountPerBatch, j);
      const batchEnd = Date.now();
      const elapsed = batchEnd - batchStart; // elapsed time in milliseconds
      const seconds = Math.floor(elapsed / 1000);
      console.log(`product batch ${j}(${n})took ${seconds} seconds to build`);
    }
  };
  // how many batches
  productFileGenerator(desiredAmountOfBatches);

  // capture time
  const globalEnd = Date.now();
  const globalElapsed = globalEnd - globalStart; // elapsed time in milliseconds
  const globalSeconds = Math.floor(globalElapsed / 1000);
  console.log(`Success!
Product file constructed!
Took a total of ${globalSeconds} seconds.`);
  // node --max-old-space-size=16384 createProductFile.js
  setTimeout(() => {
    file.write(']');
    // fs.appendFile('products.json', ']', (err) => { console.log(`Error while appending ']' ${err}`); });
  }, 500);
};
// createBatchesOfProducts = (amountPerBatch, desiredAmountOfBatches)
exports.createBatchesOfProducts = createBatchesOfProducts;
