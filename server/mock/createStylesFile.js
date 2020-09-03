/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
const file = require('fs').createWriteStream('./data-files/styles.json');
const faker = require('faker');
const Style = require('../models/styles');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}
const createBatchesOfStyles = (amountPerBatch, desiredAmountOfBatches) => {
  const globalStart = Date.now();
  console.log(`

Creating Style file now...
..
`);
  /* *********************DRAIN */


  /* *********************DRAIN */

  const styleBatch = (n, idprefix) => {
    for (let i = 1; i < n + 1; i++) {
      const createStyle = async (req) => {
        const {
          product_id,
          style_id,
          name,
          original_price,
          sale_price,
          def,
        } = req;
        // create style
        const createdStyle = new Style({
          product_id,
          style_id,
          name,
          original_price,
          sale_price,
          def,
        });
        try {
          const data = `${await JSON.stringify(createdStyle, null, 2)}, `;
          file.write(data);
        } catch (err) {
          console.log(err);
        }
      };
      // create new faker dummy input
      const DUMMYINPUT = {
        product_id: getRandomInt(1, 100000),
        style_id: getRandomInt(1, 100000),
        name: faker.lorem.word(),
        original_price: getRandomInt(100, 250),
        sale_price: getRandomInt(20, 100),
        def: '{ type: Boolean, required: true }',
      };
      createStyle(DUMMYINPUT);
    }
  };
  // file.write('['); // uncomment for create starting bracket
  const styleFileGenerator = (n) => {
    for (let j = 1; j <= n; j++) {
      const batchStart = Date.now();
      // how many per batch?
      styleBatch(amountPerBatch, j);
      const batchEnd = Date.now();
      const elapsed = batchEnd - batchStart; // elapsed time in milliseconds
      const seconds = Math.floor(elapsed / 1000);
      console.log(`style batch ${j}(${n})took ${seconds} seconds to build`);
    }
  };
  // how many batches
  styleFileGenerator(desiredAmountOfBatches);
  // time
  const globalEnd = Date.now();
  const globalElapsed = globalEnd - globalStart; // elapsed time in milliseconds
  const globalSeconds = Math.floor(globalElapsed / 1000); // elapsed time in milliseconds
  console.log(`Success!
Style file constructed!
Took a total of ${globalSeconds} seconds.`);
  // setTimeout(() => {
  //   file.write(']');
  // }, 500);
};
exports.createBatchesOfStyles = createBatchesOfStyles;
