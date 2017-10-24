'use strict';

let houseDb = require('../adapters/db/houses.js');

function getByUser (userId) {
  return houseDb.getHousesForUser(userId);
}

function update (houseId, house) {
  return houseDb.update(houseId, house)
    .then(() => {
      return houseDb.getById(houseId);
    });
}

function create (house) {
  return houseDb.create(house)
    .then(result => {
      return houseDb.getById(result.generated_keys[0]);
    });
}

module.exports = {
  getByUser,
  update,
  create
};
