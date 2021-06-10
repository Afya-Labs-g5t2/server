'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profissoes', [
    {
      profissao: 'Cardiologia',
      created_at: new Date()
    },
    {
      profissao: 'Cirurgia',
      created_at: new Date()
    },
    {
      profissao: 'Clínica Médica',
      created_at: new Date()
    },
    {
      profissao: 'Dermatologia',
      created_at: new Date()
    },
    {
      profissao: 'Endocrinologia',
      created_at: new Date()
    },
    {
      profissao: 'Gastroentrologia',
      created_at: new Date()
    },
    {
      profissao: 'Geriatria',
      created_at: new Date()
    },
    {
      profissao: 'Ginegologia',
      created_at: new Date()
    },
    {
      profissao: 'Nefrologia',
      created_at: new Date()
    },
    {
      profissao: 'Neurologia',
      created_at: new Date()
    },
    {
      profissao: 'Oftalmologia',
      created_at: new Date()
    },
    {
      profissao: 'Ortopedia',
      created_at: new Date()
    },
    {
      profissao: 'Otorrinolaringologia',
      created_at: new Date()
    },
    {
      profissao: 'Pediatria',
      created_at: new Date()
    },
    {
      profissao: 'Pneumologia',
      created_at: new Date()
    },
    {
      profissao: 'Psiquiatria',
      created_at: new Date()
    },
    {
      profissao: 'Radiologia',
      created_at: new Date()
    },
    {
      profissao: 'Infectologia',
      created_at: new Date()      
    }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('profissoes', null, {})
  }
};