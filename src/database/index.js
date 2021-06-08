const Sequelize =  require('sequelize');
const dbConfig = require('../config/database');

const Profissoes = require('../app/models/Profissoes');
const Enderecos = require('../app/models/Enderecos');
const Pacientes = require('../app/models/Pacientes');

const connection = new Sequelize(dbConfig);


Profissoes.init(connection);
Enderecos.init(connection);
Pacientes.init(connection);

Pacientes.associate(connection.models);
Enderecos.associate(connection.models);

module.exports = connection;