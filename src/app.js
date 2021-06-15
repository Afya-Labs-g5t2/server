const express = require('express');
const routes = require('./routes');

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

class App {
  constructor() {
    this.server = express();
    this.route();
  }

  route() {
    this.server.use(express.json());
    this.server.use(routes);
  }
}

module.exports = new App().server;