'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('historicos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      data_consulta: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hora_consulta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      id_prontuario: {
        type: Sequelize.INTEGER,
        references: { model: 'prontuarios', key: 'id' },
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
    return queryInterface.dropTable('historicos');
  }
};
