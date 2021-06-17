const { Model, Sequelize } = require('sequelize');

class Historico extends Model {
  static init(sequelize) {
    super.init({
      data_consulta: Sequelize.DATEONLY,
      hora_consulta: {
        type: Sequelize.STRING,
        validate: {
          is: /^(([0-1]\d)|([2][0-3]))([:][0-5]\d){2}$/
        }
      },
      descricao: Sequelize.TEXT,
      id_prontuario: Sequelize.INTEGER,
      id_especialista: Sequelize.INTEGER
    }, {
      sequelize,
      tableName: 'historicos',
      createdAt: 'data_consulta',
      updatedAt: false
    })

    return this;
  }
}

module.exports = Historico;