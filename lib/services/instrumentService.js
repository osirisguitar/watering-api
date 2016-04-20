'use strict';

let instrumentDb = require('../adapters/db/instruments.js');

function getByUser (userId) {
  return instrumentDb.getInstrumentsForUser();
}

function update (instrument) {

}

module.exports = {
  getByUser,
  update
};
