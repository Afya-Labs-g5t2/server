'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('enderecos', [
      {

      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('enderecos', null, {})
  }
};
