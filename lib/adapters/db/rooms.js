'use strict';

const r = require('./index');

function getRoomsForUser (userId) {
  return r.table('rooms')
    .filter(room => {
      return r.table('houses')
        .filter({ userId: userId }).getField('id').contains(room('houseId'));
    });
}

function update (roomId, room) {
  return r.table('rooms').get(roomId).update(room);
}

function create (room) {
  return r.table('rooms').insert(room);
}

function getById (roomId) {
  return r.table('rooms').get(roomId);
}

module.exports = {
  getRoomsForUser,
  getById,
  update,
  create
};
