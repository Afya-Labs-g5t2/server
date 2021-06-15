const { Model, Sequelize } = require('sequelize');

class Profissao extends Model {
  static init(sequelize) {
    super.init({
      profissao: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true,
        }
      }
    }, {
      sequelize,
      updatedAt: false,
      tableName: 'profissoes'
    })

    return this;
  }
  static associate(models) {
    this.hasMany(models.Especialista, { foreignKey: 'id_profissao', as: 'profissionais'});
  }
}

module.exports = Profissao;