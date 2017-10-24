'use strict';

const r = require('./index');

function getPlantsForUser (userId) {
  return r.table('plants').filter(plant => {
    return r.table('rooms')
      .filter(room => {
        return r.table('houses')
          .filter({ userId: userId }).getField('id').contains(room('houseId'));
      })
      .getField('id').contains(plant('roomId'));
  });
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
  getPlantsForUser,
  getById,
  update,
  create
};
