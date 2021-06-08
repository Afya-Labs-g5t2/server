const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// const User = require('../app/models/User');
const Endereco = require('../app/models/Endereco');
const Paciente = require('../app/models/Paciente');

const models = [Endereco, Paciente];


class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map( (model) => { model.init(this.connection) })
  }
}

module.exports = new Database();