'use strict';

const r = require('./index');

function getGoalsForUser (userId) {
  return r.table('goals').filter({ userId: userId })
    .merge(function (goal) {
      return {
        sessions: r.table('sessions').filter({ goalId: goal('id') }).count(),
        sessionDurations: r.table('sessions').filter({ goalId: goal('id') }).sum('duration')
      };
    });
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
