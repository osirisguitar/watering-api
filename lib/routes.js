'use strict';

let instruments = require('./routes/instrumentRoutes');
let sessions = require('./routes/sessionRoutes');
let goals = require('./routes/goalRoutes');
let authentication = require('./utils/authentication');

module.exports = {
  register (app) {
    app.get('/instruments', authentication.authenticate, instruments.getForUser);

    app.post('/instruments', authentication.authenticate, instruments.create);

    app.put('/instruments/:id', authentication.authenticate, instruments.update);

    app.get('/goals', authentication.authenticate, goals.getForUser);

    app.post('/goals', authentication.authenticate, goals.create);

    app.put('/goals/:id', authentication.authenticate, goals.update);

    app.get('/sessions', authentication.authenticate, sessions.getForUser);

    app.post('/sessions', authentication.authenticate, sessions.create);

    app.put('/sessions/:id', authentication.authenticate, sessions.update);
  }
};
