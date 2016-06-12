'use strict';

const restify = require('restify');
const routes = require('./routes');
const config = require('./config');

let server;

function createServer () {
  if (!server) {
    server = restify.createServer({
      name: 'Guitar Journal API'
    });

    // parse querystring into req.query
    server.use(restify.queryParser());

    // parse body into awesomeness
    server.use(restify.jsonBodyParser());

    // set charset to utf-8
    server.use(function (req, res, next) {
      res.charSet('utf-8');
      return next();
    });

    server.use(restify.CORS({
      origins: ['*'],
      credentials: false, // defaults to false
      headers: ['']  // sets expose-headers
    }));

    server.on('request', (request, response) => {
      console.log(request.url);
    });

    server.get(/\/images\/?.*/, restify.serveStatic({
      directory: '/data/instrument-photos'
    }));

    routes.register(server);
  }

  return server;
}

module.exports = {
  create: createServer
};
