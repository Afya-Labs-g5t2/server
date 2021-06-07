const { Model, Sequelize } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cep: Sequelize.STRING,
      logradouro: Sequelize.STRING,
      numero: Sequelize.INTEGER,
      bairro: Sequelize.STRING,
      cidade: Sequelize.STRING,
      uf: Sequelize.CHAR(2)
    }, {
      sequelize,
      createAt: 'created_at',
      updatedAt: 'updated_at'
    })
  }
}

module.exports = Endereco;