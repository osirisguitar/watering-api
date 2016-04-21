'use strict';

const r = require('./index');

function getGoalsForUser (userId) {
  return r.table('goals').filter({ userId: userId });
}

function update (goalId, goal) {
  return r.table('goals').get(goalId).update(goal);
}

function create (goal) {
  return r.table('goals').insert(goal);
}

function getById (goalId) {
  return r.table('goals').get(goalId);
}

module.exports = {
  getGoalsForUser,
  getById,
  update,
  create
};
