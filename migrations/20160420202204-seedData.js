exports.up = function (r, connection) {
  return Promise.all([
    r.table('users').insert({
      id: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      name: 'Anders',
      email: 'test@bornholm.se'
    }).run(connection),
    r.table('instruments').insert({
      id: '8d76e546-ce33-489b-af74-4a6979e0113a',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      name: 'Fender Stratocaster',
      type: 'Electric 6-string',
      imageUrl: 'http://loremflickr.com/640/640/fender'
    }).run(connection),
    r.table('instruments').insert({
      id: '0c522884-b768-44b2-aaf8-47d667137203',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      name: 'Gibson Les Paul',
      type: 'Electric 6-string',
      imageUrl: 'http://loremflickr.com/640/640/lespaul'
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
