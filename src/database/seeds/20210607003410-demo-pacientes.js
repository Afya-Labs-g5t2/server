'use strict';

module.exports = {
  up: async (queryInterface) => {
    const enderecos = await queryInterface.sequelize.query(
      'SELECT id FROM enderecos;'
    ); // cria um array, mas só o [0] é um array com os dados retornados da tabela

    const enderecosRows = enderecos[0];

    await queryInterface.bulkInsert('pacientes', [
      {
        cpf: '000.000.000-00',
        nome: 'Ana Clara dos Santos',
        data_nascimento: new Date('2000-01-01'),
        telefone: '(00)0000-0000',
        celular: '(00)90000-0000',
        email: 'anaclara@email.com',
        tipo_sangue: null,
        id_endereco: enderecosRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '111.111.111-11',
        nome: 'Roberto Silva',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(11)1111-1111',
        celular: '(11)91111-1111',
        email: 'robertosilva@email.com',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[1].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pacientes')
  }
};
