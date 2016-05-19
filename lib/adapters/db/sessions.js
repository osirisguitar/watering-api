'use strict';

const r = require('./index');

function getSessionsForUser (userId) {
  return r.table('sessions').filter({ userId: userId })
    .orderBy(r.desc('date'))
    .merge(function (session) {
      return {
        goal: r.table('goals').get(session('goalId'))
      };
    })
    .merge(function (session) {
      return r.branch(session.hasFields('instrumentId'), {
        instrument: r.table('instruments').get(session('instrumentId'))
      }, {});
    });
}

function update (sessionId, session) {
  delete session.goal;
  delete session.instrument;

  return r.table('sessions').get(sessionId).update(session);
}

function create (session) {
  delete session.goal;
  delete session.instrument;

  return r.table('sessions').insert(session);
}

function getById (sessionId) {
  return r.table('sessions').get(sessionId)
    .merge(function (session) {
      return {
        goal: r.table('goals').get(session('goalId'))
      };
    })
    .merge(function (session) {
      if (session('instrumentId')) {
        return {
          instrument: r.table('instruments').get(session('instrumentId'))
        };
      } else {
        return {};
      }
    });
}

module.exports = {
  getSessionsForUser,
  getById,
  update,
  create
};
