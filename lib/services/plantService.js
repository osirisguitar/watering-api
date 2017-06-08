'use strict';

const fs = require('fs');
const uuid = require('node-uuid');
const config = require('../config');

const base64Header = 'data:image/jpeg;base64,';

let plantDb = require('../adapters/db/plants.js');

function getByUser (userId) {
  return plantDb.getPlantsForUser(userId);
}

function update (plantId, plant) {
  if (plant.imageUrl && plant.imageUrl.startsWith(base64Header)) {
    let imageDataBase64 = plant.imageUrl.substring(base64Header.length);
    let filename = uuid.v4();
    fs.writeFileSync(config.imageFolder + filename + '.jpg', imageDataBase64, 'base64');
    plant.imageUrl = '/images/' + filename + '.jpg';
  }

  return plantDb.update(plantId, plant)
    .then(() => {
      return plantDb.getById(plantId);
    });
}

function create (plant) {
  return plantDb.create(plant)
    .then(result => {
      return plantDb.getById(result.generated_keys[0]);
    });
}

module.exports = {
  getByUser,
  update,
  create
};

