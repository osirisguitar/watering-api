'use strict';

let goalDb = require('../adapters/db/goals.js');

function getByUser (userId) {
  return goalDb.getGoalsForUser();
}

function update (goalId, goal) {
  return goalDb.update(goalId, goal)
    .then(() => {
      return goalDb.getById(goalId);
    });
}

function create (goal) {
  return goalDb.create(goal)
    .then(result => {
      return goalDb.getById(result.generated_keys[0]);
    });
}

module.exports = {
  getByUser,
  update,
  create
};
