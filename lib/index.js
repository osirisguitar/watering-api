'use strict';

let config = require('./config');

// ---------- server ------------

const port = config.port;
const dbConfig = {
  host: config.rethinkdb.host,
  port: config.rethinkdb.port,
  db: config.rethinkdb.db,
  discovery: config.rethinkdb.discovery
};

require('./adapters/db').init(dbConfig);

let server = require('./app');

process.on('uncaughtException', (error) => {
  console.error('Error', error.stack, error.message);
  process.exit(1);
});

server.create().listen(port, function () {
  console.log('API listening to', port, 'in environment', config.env);
});
