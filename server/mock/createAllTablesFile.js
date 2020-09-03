// Products
const createProductFile = require('./createProductFile');
const createFeaturesFile = require('./createFeaturesFile');
// Styles
const createStylesFile = require('./createStylesFile');
const createSkusFile = require('./createSkusFile');
const createPhotosFile = require('./createPhotosFile');

// node --max-old-space-size=16384 createAllTablesFile.js
// (amountPerBatch, desiredAmountOfBatches)
const execute = (amountPerBatch, desiredAmountOfBatches) => {
  // products
  createProductFile.createBatchesOfProducts(amountPerBatch, desiredAmountOfBatches);
  createFeaturesFile.createBatchesOfFeatures(amountPerBatch, desiredAmountOfBatches);
  // styles
  createStylesFile.createBatchesOfStyles(amountPerBatch, desiredAmountOfBatches);
  createSkusFile.createBatchesOfSkus(amountPerBatch, desiredAmountOfBatches);
  createPhotosFile.createBatchesOfPhotos(amountPerBatch, desiredAmountOfBatches);
};
execute(1, 10);
