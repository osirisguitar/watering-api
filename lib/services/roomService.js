'use strict';

let roomDb = require('../adapters/db/rooms.js');

function getByUser (userId) {
  return roomDb.getRoomsForUser(userId);
}

function update (roomId, room) {
  return roomDb.update(roomId, room)
    .then(() => {
      return roomDb.getById(roomId);
    });
}

function create (room) {
  return roomDb.create(room)
    .then(result => {
      return roomDb.getById(result.generated_keys[0]);
    });
}

module.exports = {
  getByUser,
  update,
  create
};
