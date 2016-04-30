'use strict';

const fs = require('fs');
const uuid = require('node-uuid');
const config = require('../config');

const base64Header = 'data:image/jpeg;base64,';

let instrumentDb = require('../adapters/db/instruments.js');

function getByUser (userId) {
  return instrumentDb.getInstrumentsForUser(userId);
}

function update (instrumentId, instrument) {
  if (instrument.imageUrl && instrument.imageUrl.startsWith(base64Header)) {
    let imageDataBase64 = instrument.imageUrl.substring(base64Header.length);
    let filename = uuid.v4();
    fs.writeFileSync(config.imageFolder + filename + '.jpg', imageDataBase64, 'base64');
    console.log('filename', config.imageFolder + filename + '.jpg');
    instrument.imageUrl = '/images/' + filename + '.jpg';
  }

  return instrumentDb.update(instrumentId, instrument)
    .then(() => {
      return instrumentDb.getById(instrumentId);
    });
}

function create (instrument) {
  return instrumentDb.create(instrument)
    .then(result => {
      return instrumentDb.getById(result.generated_keys[0]);
    });
}

module.exports = {
  getByUser,
  update,
  create
};

