const { Model, Sequelize } = require('sequelize');

class Profissao extends Model {
  static init(sequelize) {
    super.init({
      profissao: {
        type: Sequelize.STRING,
        validate: {
          is: /\D+\s?/
          // aceita letras, espaços e símbolos
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
    this.hasMany(models.Especialista, { foreignKey: 'id_profissao', as: 'profissionais',　constraints: false});
  }
}

module.exports = Profissao;