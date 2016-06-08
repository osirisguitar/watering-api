'use strict';

let mongoClient = require('mongodb').MongoClient;
const _r = require('rethinkdbdash');
const extend = require('extend');
let r = {};

let dbOptions = {
  host: 'localhost',
  port: 28016,
  db: 'guitarjournal',
  discovery: false
};

r.init = options => extend(true, r, _r(options));

r.init(dbOptions);

mongoClient.connect('mongodb://localhost/guitarjournal2', (err, connection) => {
  connection.collection('Users').find({ email: 'anders@bornholm.se' }).toArray((err, users) => {
    users.forEach(user => {
      // Save user to rethink
      r.table('users').insert({
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        facebookId: user.facebookId
      })
      .then(result => {
        let userId = result.generated_keys[0];

        let userCollections = {
          goals: {},
          instruments: {}
        };

        connection.collection('Instruments').find({ userId: user._id }).toArray((err, instruments) => {
          let instrumentPromises = [];
          instruments.forEach(instrument => {
            instrumentPromises.push(
              r.table('instruments').insert({
                userId: userId,
                name: instrument.name,
                type: instrument.type,
                description: instrument.description,
                imageUrl: instrument.imageFile ? '/images/' + instrument.imageFile + '.jpg' : null
              })
              .then(result => {
                userCollections.instruments[instrument._id] = result.generated_keys[0];
              })
            );
          });

          return Promise.all(instrumentPromises)
            .then(result => {
              connection.collection('Goals').find({ userId: user._id }).toArray((err, goals) => {
                let goalPromises = [];
                goals.forEach(goal => {
                  goalPromises.push(
                    r.table('goals').insert({
                      userId: userId,
                      date: goal.date,
                      title: goal.title,
                      description: goal.description,
                      completionDate: goal.completionDate,
                      completed: goal.completed
                    })
                    .then(result => {
                      console.log('Adding to userCollections', goal._id, result.generated_keys[0]);
                      userCollections.goals[goal._id] = result.generated_keys[0];
                    })
                  );
                });

                return Promise.all(goalPromises)
                  .then(result => {
                    console.log('userCollections', userCollections);

                    connection.collection('Sessions').find({ userId: user._id }).toArray((err, sessions) => {
                      sessions.forEach(session => {
                        r.table('sessions').insert({
                          userId: userId,
                          goalId: userCollections.goals[session.goalId],
                          instrumentId: userCollections.instruments[session.instrumentId],
                          date: session.date,
                          notes: session.notes,
                          startTime: session.startTime,
                          endTime: session.endTime,
                          duration: session.length,
                          rating: session.rating
                        })
                        .then(result => {
                          // console.log('Inserted session', result.generated_keys[0]);
                        });
                      });
                    });
                  });
              });
            });
        });
      });
    });
  });
});
