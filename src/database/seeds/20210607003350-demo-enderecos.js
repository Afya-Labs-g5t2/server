'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('enderecos', [
      {
        cep: '00000000',
        logradouro: 'Rua 1',
        numero: 11,
        bairro: 'Bairro Estrela',
        cidade: 'Cidade Nova',
        uf: 'ac',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '11111111',
        logradouro: 'Rua 2',
        numero: 22,
        bairro: 'Bairro Lua',
        cidade: 'Cidade Velha',
        uf: 'ba',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '22222222',
        logradouro: 'Rua 3',
        numero: 33,
        bairro: 'Bairro Sol',
        cidade: 'Cidade Antiga',
        uf: 'sp',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '33333333',
        logradouro: 'Rua 4',
        numero: 44,
        bairro: 'Bairro Terra',
        cidade: 'Cidade Recente',
        uf: 'rj',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('enderecos', null, {})
  }
};
