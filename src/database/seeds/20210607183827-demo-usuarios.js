'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      {
        login: 'root',
        nome: 'usuario raiz',
        senha: '1234',
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        login: 'admin',
        nome: 'Administrador',
        senha: 'admin',
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        login: 'doutorX',
        nome: 'cliente padrao da clinica X',
        senha: '!@#$',
        created_at: new Date(),
        updated_at: new Date()
      }      
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('usuarios', null, {})
  }
};