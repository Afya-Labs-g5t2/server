const { Model, Sequelize } = require('sequelize');

class Atendimento extends Model {
  static init(sequelize) {
    super.init({
      data_agendamento: Sequelize.DATE,
      data_atendimento: Sequelize.DATEONLY,
      hora_atendimento: Sequelize.STRING,
      valor: Sequelize.REAL,
      status: Sequelize.STRING(9),
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