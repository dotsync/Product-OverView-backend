/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
const file = require('fs').createWriteStream('./data-files/photos.json');
const faker = require('faker');
const Photos = require('../models/photos');

const createBatchesOfPhotos = (amountPerBatch, desiredAmountOfBatches) => {
  const globalStart = Date.now();
  console.log(`

Creating Photos file now...
..
`);
  /* *********************DRAIN */


  /* *********************DRAIN */
  const photoBatch = (n, idprefix) => {
    for (let i = 1; i < n + 1; i++) {
      const createPhoto = async (req) => {
        const {
          style_id,
          photo_id,
          thumbnail_url,
          url,
        } = req;
        // create photo
        const createdPhoto = new Photos({
          style_id,
          photo_id,
          thumbnail_url,
          url,
        });
        try {
          const data = `${await JSON.stringify(createdPhoto, null, 2)}, `;
          file.write(data);
        } catch (err) {
          console.log(err);
        }
      };
      // create new faker dummy input
      const DUMMYINPUT = {
        style_id: idprefix.toString() + '-' + i.toString(),
        thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
        url: 'urlplaceholder/style_1_photo_number.jpg',
      };
      createPhoto(DUMMYINPUT);
    }
  };
  // file.write('['); // uncomment for create starting bracket
  const photoFileGenerator = (n) => {
    for (let j = 1; j <= n; j++) {
      const batchStart = Date.now();
      // how many per batch?
      photoBatch(amountPerBatch, j);
      const batchEnd = Date.now();
      const elapsed = batchEnd - batchStart; // elapsed time in milliseconds
      const seconds = Math.floor(elapsed / 1000);
      console.log(`photo batch ${j}(${n})took ${seconds} seconds to build`);
    }
  };
  // how many batches
  photoFileGenerator(desiredAmountOfBatches);
  // time
  const globalEnd = Date.now();
  const globalElapsed = globalEnd - globalStart; // elapsed time in milliseconds
  const globalSeconds = Math.floor(globalElapsed / 1000); // elapsed time in milliseconds
  console.log(`Success!
Photo file constructed!
Took a total of ${globalSeconds} seconds.`);
};
exports.createBatchesOfPhotos = createBatchesOfPhotos;
