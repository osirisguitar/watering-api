'use strict';

let instruments = require('./routes/instrumentRoutes');
let sessions = require('./routes/sessionRoutes');
let goals = require('./routes/goalRoutes');

module.exports = {
  register (app) {
    app.get('/instruments', /* authenticated.signature,*/ instruments.getForUser);

    app.get('/goals', goals.getForUser);

    app.get('/sessions', sessions.getForUser);
  }
};
