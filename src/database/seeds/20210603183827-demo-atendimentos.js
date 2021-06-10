'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('atendimentos', [
      
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('atendimentos', null, {})
  }
};