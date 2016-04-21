'use strict';

let sessionDb = require('../adapters/db/sessions.js');

function getByUser (userId) {
  return sessionDb.getSessionsForUser();
}

function update (session) {

}

module.exports = {
  getByUser,
  update
};
