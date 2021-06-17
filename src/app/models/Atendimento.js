const { Model, Sequelize } = require('sequelize');

class Atendimento extends Model {
  static init(sequelize) {
    super.init({
      data_agendamento: Sequelize.DATE,
      data_atendimento: {
        type: Sequelize.DATEONLY,
        validate: {
          isDate: true
        }
      },
      hora_atendimento: {
        type: Sequelize.STRING,
        validate: {
          is: /^(([0-1]\d)|([2][0-3]))([:][0-5]\d){2}$/
        }
      },
      valor: {
        type: Sequelize.REAL,
        validate: {
          isDecimal: true
        }
      },
      status: {
        type: Sequelize.STRING(9),
        validate: {
          isIn: [["AGENDADO", "REALIZADO", "CANCELADO"]]
        }
      },
      id_paciente: Sequelize.INTEGER,
      id_especialista: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'atendimentos',
      createdAt: false,
      updatedAt: 'data_agendamento'
    })

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Paciente, { foreignKey: 'id_paciente', as: 'paciente'});
    this.belongsTo(models.Especialista, { foreignKey: 'id_especialista', as: 'especialista'});
  };
}

module.exports = Atendimento;