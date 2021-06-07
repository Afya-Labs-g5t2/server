'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('pacientes', [
      {
        
      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pacientes')
  }
};
