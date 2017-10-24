'use strict';

const r = require('./index');

function getHousesForUser (userId) {
  return r.table('houses')
    .filter({ userId: userId });
}

function update (houseId, house) {
  return r.table('houses').get(houseId).update(house);
}

function create (house) {
  return r.table('houses').insert(house);
}

function getById (houseId) {
  return r.table('houses').get(houseId);
}

module.exports = {
  getHousesForUser,
  getById,
  update,
  create
};
