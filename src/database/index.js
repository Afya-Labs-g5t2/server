const Sequelize =  require('sequelize');
const dbConfig = require('../config/database');

const Endereco = require('../app/models/Endereco');
const Paciente = require('../app/models/Paciente');
const Profissao = require('../app/models/Profissao');

const models = [Endereco, Paciente, Profissao];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    // Associações entre tabelas
    Paciente.associate(this.connection.models);
    Endereco.associate(this.connection.models);

    models.map( (model) => { model.init(this.connection) })
  }
}

module.exports = new Database;