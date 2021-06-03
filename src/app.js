const express = require('express');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.route();
  }

  routes() {
    this.server.use(express.json());
    this.server.use(routes);
  }
}

module.exports = new App().server;