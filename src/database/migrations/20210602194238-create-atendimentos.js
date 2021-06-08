'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('atendimentos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      data_agendamento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_atendimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hora_atendimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.REAL,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(9),
        allowNull: false
      },
      id_paciente: {
        type: Sequelize.INTEGER,
        references: { model: 'pacientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      id_especialista: {
        type: Sequelize.INTEGER,
        references: { model: 'especialistas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('atendimentos');
  }
};
