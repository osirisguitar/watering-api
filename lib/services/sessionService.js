'use strict';

let sessionDb = require('../adapters/db/sessions.js');

function getByUser (userId) {
  return sessionDb.getSessionsForUser(userId);
}

function update (sessionId, session) {
  return sessionDb.update(sessionId, session)
    .then(() => {
      return sessionDb.getById(sessionId);
    });
}

function create (session) {
  return sessionDb.create(session)
    .then(result => {
      return sessionDb.getById(result.generated_keys[0]);
    });
}

module.exports = {
  getByUser,
  update,
  create
};
