'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('prontuarios', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      data_abertura: {
        type: Sequelize.DATE,
        allowNull: false
      },
      id_paciente: {
        type: Sequelize.INTEGER,
        references: { model: 'pacientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('prontuarios')
  }
};
