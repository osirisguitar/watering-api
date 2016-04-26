'use strict';

let instrumentDb = require('../adapters/db/instruments.js');

function getByUser (userId) {
  return instrumentDb.getInstrumentsForUser(userId);
}

function update (instrumentId, instrument) {
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

