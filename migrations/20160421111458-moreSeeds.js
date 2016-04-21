exports.up = function (r, connection) {
  return Promise.all([
    r.table('goals').insert({
      id: 'dfe17610-2ad3-4370-9044-eba2112b1eac',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      title: 'Practice songs',
      active: true
    }).run(connection),
    r.table('goals').insert({
      id: 'c42bb443-8c4c-4862-ba2c-c43f7d589a36',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      title: 'Increase speed',
      active: true
    }).run(connection),
    r.table('sessions').insert({
      id: '7178deaa-d5e7-4a19-9474-9faca715f652',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'dfe17610-2ad3-4370-9044-eba2112b1eac',
      instrumentId: '8d76e546-ce33-489b-af74-4a6979e0113a',
      date: new Date(2016, 1, 10),
      duration: 120,
      rating: 4,
      location: 'Home',
      notes: 'Went well!'
    }).run(connection),
    r.table('sessions').insert({
      id: '87d38ae5-66c1-46ab-b271-30e3ead27215',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'c42bb443-8c4c-4862-ba2c-c43f7d589a36',
      instrumentId: '8d76e546-ce33-489b-af74-4a6979e0113a',
      date: new Date(2016, 1, 10),
      duration: 120,
      rating: 4,
      location: 'Studio',
      notes: 'Strings broke'
    }).run(connection),
    r.table('sessions').insert({
      id: '52cfac33-e778-4751-ad3a-5505f802986a',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'dfe17610-2ad3-4370-9044-eba2112b1eac',
      instrumentId: '8d76e546-ce33-489b-af74-4a6979e0113a',
      date: new Date(2016, 1, 12),
      duration: 120,
      rating: 3,
      location: 'Work',
      notes: 'Got blisters'
    }).run(connection),
    r.table('sessions').insert({
      id: '8c43a37f-3e7f-44cd-bb02-a006b721a106',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'c42bb443-8c4c-4862-ba2c-c43f7d589a36',
      instrumentId: '8d76e546-ce33-489b-af74-4a6979e0113a',
      date: new Date(2016, 2, 3),
      duration: 120,
      rating: 4,
      location: 'Home',
      notes: 'I need to practice the bridge more'
    }).run(connection),
    r.table('sessions').insert({
      id: 'dd09dffc-87ce-49b5-8038-8bc038dd231c',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'dfe17610-2ad3-4370-9044-eba2112b1eac',
      instrumentId: '0c522884-b768-44b2-aaf8-47d667137203',
      date: new Date(2015, 11, 12),
      duration: 120,
      rating: 5,
      location: 'Studio',
      notes: 'Went well!'
    }).run(connection),
    r.table('sessions').insert({
      id: '2db2f35b-c88b-452d-940e-a2563946cf33',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'c42bb443-8c4c-4862-ba2c-c43f7d589a36',
      instrumentId: '0c522884-b768-44b2-aaf8-47d667137203',
      date: new Date(2016, 3, 3),
      duration: 120,
      rating: 3,
      location: 'Work',
      notes: 'Good'
    }).run(connection),
    r.table('sessions').insert({
      id: 'bc2ce509-bad9-45ba-ab82-6c07126e9f2d',
      userId: '8bdd0c6c-a9f4-4255-ab92-c5f52d74bb2a',
      goalId: 'dfe17610-2ad3-4370-9044-eba2112b1eac',
      instrumentId: '0c522884-b768-44b2-aaf8-47d667137203',
      date: new Date(2016, 4, 10),
      duration: 120,
      rating: 1,
      location: 'Home',
      notes: 'Horrible'
    }).run(connection)
  ]);
};

exports.down = function (r, connection) {

};
