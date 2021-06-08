const { Model, Sequelize } = require('sequelize');

class Paciente extends Model {
  static init(sequelize) {
    super.init({
      cpf: Sequelize.STRING,
      nome: Sequelize.STRING(150),
      data_nascimento: Sequelize.STRING,
      telefone: Sequelize.STRING,
      celular: Sequelize.STRING,
      email: Sequelize.STRING,
      tipo_sangue: Sequelize.STRING(3),
      id_endereco: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'pacientes'
    })

    return this;
  }
}

module.exports = Paciente;