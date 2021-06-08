const { Model, Sequelize } = require('sequelize');

class Profissao extends Model {
  static init(sequelize) {
    super.init({
      profissao: Sequelize.STRING,
    }, {
      sequelize,
      updatedAt: false,
      tableName: 'profissoes'
    })

    return this;
  }
}

module.exports = Profissao;