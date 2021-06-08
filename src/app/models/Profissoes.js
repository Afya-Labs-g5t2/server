const { Model, DataTypes } = require('sequelize');

class Profissoes extends Model {
  static init(sequelize) {
    super.init({
      profissao: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Profissoes;