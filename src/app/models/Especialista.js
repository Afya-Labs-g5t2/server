const { Model, Sequelize } = require('sequelize');

class Especialista extends Model {
  static init(sequelize) {
    super.init({
      registro: {
        type: Sequelize.STRING,
        validate: {
          is: /^\d+(-P)?[-][A-Z]{2}$/
        }
      },
      nome: {
        type: Sequelize.STRING(150),
        validate: {
          is: /^\D[^@_]{0,149}$/
        }
      },
      telefone: {
        type: Sequelize.STRING,
        validate: {
          is: /^[(]\d{2}[)]\d{4}-?\d{4}$/
        }
      },
      celular: {
        type: Sequelize.STRING,
        validate: {
          is: /^[(]\d{2}[)][9]\d{4}-?\d{4}$/
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      id_profissao: Sequelize.INTEGER,
      id_endereco: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'especialistas'
    })

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Endereco, { foreignKey: 'id_endereco', as: 'endereco'});
    this.belongsTo(models.Profissao, { foreignKey: 'id_profissao', as: 'profissao'});    
    this.hasMany(models.Atendimento, { foreignKey: 'id_especialista', as: 'agenda'});
  };
}

module.exports = Especialista;