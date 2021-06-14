'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    const enderecos = await queryInterface.sequelize.query(
      'SELECT id FROM enderecos;'
    ); // cria um array, mas só o [0] é um array com os dados retornados da tabela
    const enderecosRows = enderecos[0];

    const profissoes = await queryInterface.sequelize.query(
      'SELECT id FROM profissoes;'
    ); // cria um array, mas só o [0] é um array com os dados retornados da tabela
    const profissoesRows = profissoes[0];

    await queryInterface.bulkInsert('especialistas', [
      {
          id: 1,
          registro: '194528-SP',
          nome: 'Aarao Andrade Napoleao Lima',
          celular: '11922334459',
          telefone: '11922234567',
          email: 'araoo@example.com',
          id_endereco: enderecosRows[9].id,
          id_profissao: profissoesRows[3].id,
          created_at: new Date(),
          updated_at: new Date()

      },
      {
          id: 2,
          registro: '39558-MG',
          nome: 'Abdalla Campos Felicio',
          celular: '11922334458',
          telefone: '11922234567',
          email: 'bdalla@example.com',
          id_endereco: enderecosRows[10].id,
          id_profissao: profissoesRows[17].id,
          created_at: new Date(),
          updated_at: new Date()

      },
      {
          id: 3,
          registro: '235072-RJ',
          nome: 'Abdo Miguel Kather Filho',
          celular: '11922334457',
          telefone: '11922234567',
          email: 'amiguel@example.com',
          id_endereco: enderecosRows[11].id,
          id_profissao: profissoesRows[11].id, 
          created_at: new Date(),
          updated_at: new Date()

      },
      {
          id: 4,
          registro: '180968-SP',
          nome: 'Abigail Ballone',
          celular: '11911334456',
          telefone: '11532234567',
          email: 'abigail@example.com',
          id_endereco: enderecosRows[12].id,
          id_profissao: profissoesRows[12].id, 
          created_at: new Date(),
          updated_at: new Date()

      },
      {
          id: 5,
          registro: '20621-SP',
          nome: 'Flavio Matias',
          celular: '11922334455',
          telefone: '11922234567',
          email: 'alberto@example.com',
          id_endereco: enderecosRows[13].id,
          id_profissao: profissoesRows[13].id, 
          created_at: new Date(),
          updated_at: new Date()

      },
      {
          id: 6,
          registro: '86221-MG',
          nome: 'Aaron Paulo Tavares Delladona',
          celular: '11911772222',
          telefone: '11922234567',
          email: 'aaron@example.com',
          id_endereco: enderecosRows[14].id,
          id_profissao: profissoesRows[13].id, 
          created_at: new Date(),
          updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('especialistas', null, {})
  }
};