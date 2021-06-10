'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('enderecos', [
      {
        cep: '58070-145',
        logradouro: 'Vila Nossa Senhora das Neves',
        numero: 1584,
        bairro: 'Bairro Estrela',
        cidade: 'João Pessoa',
        uf: 'PB',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '54440-240',
        logradouro: 'Rua Adélia Cabus',
        numero: 1895,
        bairro: 'Bairro Lua',
        cidade: 'Jaboatão dos Guararapes',
        uf: 'PE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '13058-143',
        logradouro: 'Rua Aristides Leite Penteado',
        numero: 1457,
        bairro: 'Bairro Sol',
        cidade: 'Campinas',
        uf: 'sp',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '45606-280',
        logradouro: 'Rua Londrina',
        numero: 1148,
        bairro: 'Bairro Terra',
        cidade: 'Itabuna',
        uf: 'BA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '45606-280',
        logradouro: 'Rua Quatro',
        numero: 223,
        bairro: 'Bairro Terra',
        cidade: 'Itu',
        uf: 'SP',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '13060-285',
        logradouro: 'Caminho do Progresso',
        numero: 118,
        bairro: 'Bairro Terra',
        cidade: 'Campinas',
        uf: 'SP',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '11451-190',
        logradouro: 'Rua Lisboa',
        numero: 128,
        bairro: 'Bairro Terra',
        cidade: 'Guarujá',
        uf: 'SP',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '06757-125',
        logradouro: 'Avenida Goiás',
        numero: 1148,
        bairro: 'Bairro Terra',
        cidade: 'Itabuna',
        uf: 'BA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '27347-000',
        logradouro: 'Rodovia Presidente Dutra',
        numero: 28,
        bairro: 'Bairro Terra',
        cidade: 'Barra Mansa',
        uf: 'RJ',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '08567-110',
        logradouro: 'Rua Delta',
        numero: 1148,
        bairro: 'Bairro Terra',
        cidade: 'Poá',
        uf: 'SP',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cep: '31760-470',
        logradouro: 'Rua Aurélio Dolabela',
        numero: 1148,
        bairro: 'Belo Horizonte',
        cidade: 'Belo Horizonte',
        uf: 'MG',
        created_at: new Date(),
        updated_at: new Date()
      },
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
