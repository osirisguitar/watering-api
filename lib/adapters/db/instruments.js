'use strict';

const r = require('./index');

function getInstrumentsForUser (userId) {
  return r.table('instruments').filter({});
}

module.exports = {
  getInstrumentsForUser
};
