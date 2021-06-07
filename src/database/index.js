const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// const User = require('../app/models/User');
const Enderecos = require('../app/models/Enderecos');
const Pacientes = require('../app/models/Pacientes');
const Profissoes = require('../app/models/Profissoes');

const models = [Enderecos, Pacientes, Profissoes];

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