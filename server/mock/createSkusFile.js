/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
const file = require('fs').createWriteStream('./data-files/skus.json');
const faker = require('faker');
const Sku = require('../models/skus');

const createBatchesOfSkus = (amountPerBatch, desiredAmountOfBatches) => {
  const globalStart = Date.now();
  console.log(`

Creating Sku file now...
..
`);
  /* *********************DRAIN */


  /* *********************DRAIN */
  const skuBatch = (n, idprefix) => {
    for (let i = 1; i < n + 1; i++) {
      const createSku = async (req) => {
        const {
          style_id,
          sku_id,
          quantity,
          size,
        } = req;
        // create sku
        const createdSku = new Sku({
          style_id,
          sku_id,
          quantity,
          size,
        });
        try {
          const data = `${await JSON.stringify(createdSku, null, 2)}, `;
          file.write(data);
        } catch (err) {
          console.log(err);
        }
      };
      // create new faker dummy input
      const DUMMYINPUT = {
        style_id: '{ type: String },',
        sku_id: '{ type: String },',
        quantity: '{ type: String, required: true },',
        size: '{ type: String, required: true },',
      };
      createSku(DUMMYINPUT);
    }
  };
  // file.write('['); // uncomment for create starting bracket
  const skuFileGenerator = (n) => {
    for (let j = 1; j <= n; j++) {
      const batchStart = Date.now();
      // how many per batch?
      skuBatch(amountPerBatch, j);
      const batchEnd = Date.now();
      const elapsed = batchEnd - batchStart; // elapsed time in milliseconds
      const seconds = Math.floor(elapsed / 1000);
      console.log(`sku batch ${j}(${n})took ${seconds} seconds to build`);
    }
  };
  // how many batches
  skuFileGenerator(desiredAmountOfBatches);
  // time
  const globalEnd = Date.now();
  const globalElapsed = globalEnd - globalStart; // elapsed time in milliseconds
  const globalSeconds = Math.floor(globalElapsed / 1000); // elapsed time in milliseconds
  console.log(`Success!
Sku file constructed!
Took a total of ${globalSeconds} seconds.`);
  setTimeout(() => {
    file.write(']');
  }, 500);
};
exports.createBatchesOfSkus = createBatchesOfSkus;
