'use strict';

const r = require('./index');

function getInstrumentsForUser (userId) {
  return r.table('instruments').filter({ userId: userId });
}

function update (instrumentId, instrument) {
  return r.table('instrument').get(instrumentId).update(instrument);
}

function create (instrument) {
  return r.table('instrument').insert(instrument);
}

function getById (instrumentId) {
  return r.table('instrument').get(goalId);
}

module.exports = {
  getInstrumentsForUser,
  getById,
  update,
  create
};

