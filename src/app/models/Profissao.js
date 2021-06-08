const { Model, Sequelize } = require('sequelize');

class Profissoes extends Model {
  static init(sequelize) {
    super.init({
      profissao: Sequelize.STRING
    }, {
      sequelize,
      updatedAt: false,
      tableName: 'profissoes'
    })

    return this;
  }
}

module.exports = Profissoes;