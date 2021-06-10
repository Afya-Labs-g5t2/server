'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('prontuarios', [
      
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('prontuarios', null, {})
  }
};