'use strict';

const r = require('./index');

function getGoalsForUser (userId) {
  return r.table('goals').filter({});
}

module.exports = {
  getGoalsForUser
};
