'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profissoes', [
    {
      profissao: 'Cardiologia',
      createdAt: new Date()
    },
    {
      profissao: 'Cirurgia',
      createdAt: new Date()
    },
    {
      profissao: 'Clínica Médica',
      createdAt: new Date()
    },
    {
      profissao: 'Dermatologia',
      createdAt: new Date()
    },
    {
      profissao: 'Endocrinologia',
      createdAt: new Date()
    },
    {
      profissao: 'Gastroentrologia',
      createdAt: new Date()
    },
    {
      profissao: 'Geriatria',
      createdAt: new Date()
    },
    {
      profissao: 'Ginegologia',
      createdAt: new Date()
    },
    {
      profissao: 'Nefrologia',
      createdAt: new Date()
    },
    {
      profissao: 'Neurologia',
      createdAt: new Date()
    },
    {
      profissao: 'Oftalmologia',
      createdAt: new Date()
    },
    {
      profissao: 'Ortopedia',
      createdAt: new Date()
    },
    {
      profissao: 'Otorrinolaringologia',
      createdAt: new Date()
    },
    {
      profissao: 'Pediatria',
      createdAt: new Date()
    },
    {
      profissao: 'Pneumologia',
      createdAt: new Date()
    },
    {
      profissao: 'Psiquiatria',
      createdAt: new Date()
    },
    {
      profissao: 'Radiologia',
      createdAt: new Date()
    }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('profissoes', null, {})
  }
};