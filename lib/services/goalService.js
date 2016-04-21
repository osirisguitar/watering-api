'use strict';

let goalDb = require('../adapters/db/goals.js');

function getByUser (userId) {
  return goalDb.getGoalsForUser();
}

function update (goal) {

}

module.exports = {
  getByUser,
  update
};
