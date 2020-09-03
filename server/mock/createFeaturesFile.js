/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
const file = require('fs').createWriteStream('./data-files/features.json');
const faker = require('faker');
const Feature = require('../models/features');

const createBatchesOfFeatures = (amountPerBatch, desiredAmountOfBatches) => {
  const globalStart = Date.now();
  console.log(`

Creating Feature file now...
..
`);
  /* *********************DRAIN */


  /* *********************DRAIN */
  const featureBatch = (n, idprefix) => {
    for (let i = 1; i < n + 1; i++) {
      const createFeature = async (req) => {
        const {
          product_id, feature, value,
        } = req;
        // create feature
        const createdFeature = new Feature({
          product_id,
          feature,
          value,
        });
        try {
          const data = `${await JSON.stringify(createdFeature, null, 2)}, `;
          file.write(data);
        } catch (err) {
          console.log(err);
        }
      };
      // create new faker dummy input
      const DUMMYINPUT = {
        product_id: idprefix.toString() + '-' + i.toString(),
        feature: faker.lorem.word(),
        value: faker.lorem.word(),
      };
      createFeature(DUMMYINPUT);
    }
  };
  // file.write('['); // uncomment for create starting bracket
  const featureFileGenerator = (n) => {
    for (let j = 1; j <= n; j++) {
      const batchStart = Date.now();
      // how many per batch?
      featureBatch(amountPerBatch, j);
      const batchEnd = Date.now();
      const elapsed = batchEnd - batchStart; // elapsed time in milliseconds
      const seconds = Math.floor(elapsed / 1000);
      console.log(`feature batch ${j}(${n})took ${seconds} seconds to build`);
    }
  };
  // how many batches
  featureFileGenerator(desiredAmountOfBatches);
  // time
  const globalEnd = Date.now();
  const globalElapsed = globalEnd - globalStart; // elapsed time in milliseconds
  const globalSeconds = Math.floor(globalElapsed / 1000); // elapsed time in milliseconds
  console.log(`Success!
Feature file constructed!
Took a total of ${globalSeconds} seconds.`);
};
exports.createBatchesOfFeatures = createBatchesOfFeatures;
