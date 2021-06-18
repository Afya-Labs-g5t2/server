const { Model, Sequelize } = require('sequelize');

class Prontuario extends Model {
  static init(sequelize) {
    super.init({
      data_abertura: Sequelize.DATE,
      id_paciente: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'prontuarios',
      createdAt: 'data_abertura',
      updatedAt: false
    })

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Paciente, { foreignKey: 'id_paciente', as: 'paciente'});
  }
}

module.exports = Prontuario;