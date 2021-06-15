'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [
      {
        login: 'root',
        nome: 'usuario raiz',
        senha_hash: bcrypt.hashSync('root', 15),
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        login: 'admin',
        nome: 'Administrador',
        senha_hash: bcrypt.hashSync('admin', 15),
        created_at: new Date(),
        updated_at: new Date()

      },
      {
        login: 'doutorX',
        nome: 'cliente padrao da clinica X',
        senha_hash: bcrypt.hashSync('!@#$', 15),
        created_at: new Date(),
        updated_at: new Date()
      }      
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('usuarios', null, {})
  }
};