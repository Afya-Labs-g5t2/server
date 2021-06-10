'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('usuarios', null, {})
  }
};