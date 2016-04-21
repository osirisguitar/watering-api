'use strict';

const r = require('./index');

function getSessionsForUser (userId) {
  return r.table('sessions').filter({})
    .merge(function (session) {
      return {
        goal: r.table('goals').get(session('goalId'))
      };
    })
    .merge(function (session) {
      return {
        instrument: r.table('instruments').get(session('instrumentId'))
      };
    });
}

module.exports = {
  getSessionsForUser
};
