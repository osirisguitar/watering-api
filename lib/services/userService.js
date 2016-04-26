'use strict';

let userDb = require('../adapters/db/users.js');

/* function getByUser (userId) {
  return goalDb.getGoalsForUser();
}

function update (goalId, goal) {
  return goalDb.update(goalId, goal)
    .then(() => {
      return goalDb.getById(goalId);
    });
}*/

function create (user) {
  return userDb.create(user)
    .then(result => {
      return result.generated_keys[0];
    });
}

module.exports = {
/*  getByUser,
  update,*/
  create
};
