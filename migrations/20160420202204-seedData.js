exports.up = function (r, connection) {
  return Promise.all([
    r.table('users').insert({
      id: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      name: 'Anders',
      email: 'anders@bornholm.se'
    }).run(connection),
    r.table('rooms').insert({
      id: '8d76e546-ce33-489b-af74-4a6979e0113a',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      name: 'Vardagsrummet'
    }).run(connection),
    r.table('rooms').insert({
      id: '0c522884-b768-44b2-aaf8-47d667137203',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      name: 'Matsalen'
    }).run(connection),
    r.table('plants').insert({
      id: 'd664fae7-3ea0-4afe-89d4-dce1c4d2e127',
      roomId: '8d76e546-ce33-489b-af74-4a6979e0113a',
      name: 'Apelsinträd',
      waterInterval: 4,
      lastWatered: new Date(),
      imageUrl: 'http://loremflickr.com/640/640/pottedplant'
    }),
    r.table('plants').insert({
      id: 'd664fae7-3ea0-4afe-89d4-dce1c4d2e126',
      roomId: '0c522884-b768-44b2-aaf8-47d667137203',
      name: 'Kaktus',
      waterInterval: 21,
      lastWatered: new Date(),
      imageUrl: 'http://loremflickr.com/640/640/pottedplant'
    }),
    r.table('plants').insert({
      id: 'd664fae7-3ea0-4afe-89d4-dce1c4d2e8ef',
      roomId: '0c522884-b768-44b2-aaf8-47d667137203',
      name: 'Murgröna',
      waterInterval: 7,
      lastWatered: new Date(),
      imageUrl: 'http://loremflickr.com/640/640/pottedplant'
    }),
    r.table('plants').insert({
      id: 'd664fae7-3ea0-4afe-89d4-dce1c4d2e124',
      roomId: '0c522884-b768-44b2-aaf8-47d667137203',
      name: 'Murgröna',
      waterInterval: 7,
      lastWatered: new Date(),
      imageUrl: 'http://loremflickr.com/640/640/pottedplant'
    }),
    r.table('plants').insert({
      id: 'd664fae7-3ea0-4afe-89d4-dce1c4d2e125',
      roomId: '0c522884-b768-44b2-aaf8-47d667137203',
      name: 'Murgröna',
      waterInterval: 7,
      lastWatered: new Date(),
      imageUrl: 'http://loremflickr.com/640/640/pottedplant'
    }),
    r.table('plants').insert({
      id: 'd664fae7-3ea0-4afe-89d4-dce1c4d2e123',
      roomId: '0c522884-b768-44b2-aaf8-47d667137203',
      name: 'Murgröna',
      waterInterval: 7,
      lastWatered: new Date(),
      imageUrl: 'http://loremflickr.com/640/640/pottedplant'
    }).run(connection)
  ]);
};

exports.down = function (r, connection) {
  return Promise.all([
    r.table('users').get('8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a').delete().run(connection),
    r.table('instruments').get('8d76e546-ce33-489b-af74-4a6979e0113a').delete().run(connection),
    r.table('instruments').get('0c522884-b768-44b2-aaf8-47d667137203').delete().run(connection)
  ]);
};
