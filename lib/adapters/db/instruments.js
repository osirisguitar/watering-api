'use strict';

const r = require('./index');

function getInstrumentsForUser (userId) {
  return r.table('instruments').filter({ userId: userId })
    .merge(function (instrument) {
      return {
        sessions: r.db('guitarjournal').table('sessions').filter({ instrumentId: instrument('id') }).count(),
        sessionDurations: r.db('guitarjournal').table('sessions').filter({ instrumentId: instrument('id') }).sum('duration')
      };
    });
}

function update (instrumentId, instrument) {
  delete instrument.sessions;
  delete instrument.sessionDurations;
  return r.table('instruments').get(instrumentId).update(instrument);
}

function create (instrument) {
  return r.table('instruments').insert(instrument);
}

function getById (instrumentId) {
  return r.table('instruments').get(instrumentId);
}

module.exports = {
  getInstrumentsForUser,
  getById,
  update,
  create
};

