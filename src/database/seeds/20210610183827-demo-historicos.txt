'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('historicos', [
      
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('historicos', null, {})
  }
};