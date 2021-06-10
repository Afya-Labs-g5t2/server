const Sequelize =  require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../app/models/Usuario');
const Endereco = require('../app/models/Endereco');
const Paciente = require('../app/models/Paciente');
const Profissao = require('../app/models/Profissao');
const Prontuario = require('../app/models/Prontuario');
const Especialista = require('../app/models/Especialista');
const Atendimento = require('../app/models/Atendimento');
const Historico = require('../app/models/Historico');

const models = [
  Usuario, Endereco, Paciente,
  Profissao, Prontuario, Especialista,
  Atendimento, Historico
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map( (model) => { model.init(this.connection) })

    //substituir quando tiver prontas todas as associações das tabelas
    //models.map( (model) => {model.associate(this.connection.models) }) 

    // Associações entre tabelas
    Paciente.associate(this.connection.models);
    Endereco.associate(this.connection.models);
    Profissao.associate(this.connection.models);
    Especialista.associate(this.connection.models);
  }
}

module.exports = new Database;