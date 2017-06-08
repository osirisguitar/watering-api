'use strict';

const r = require('./index');

function getPlantsForUser (userId) {
  return r.table('plants').filter({ userId: userId });
}

function update (plantId, plant) {
  return r.table('plants').get(plantId).update(plant);
}

function create (plant) {
  return r.table('plants').insert(plant);
}

function getById (plantId) {
  return r.table('plants').get(plantId);
}

module.exports = {
  getplantsForUser,
  getById,
  update,
  create
};
