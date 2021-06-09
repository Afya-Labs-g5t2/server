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
      },
      {
        cpf: '000.000.000-01',
        nome: 'Tomás Pinto Barbosa',
        data_nascimento: new Date('2000-01-01'),
        telefone: '(83) 3144-3304',
        celular: '(83) 3144-3304',
        email: 'TomasPintoBarbosa@dayrep.com',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '410.235.333-08',
        nome: 'Renan Azevedo Correia',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(81) 3513-8008',
        celular: '(81) 3513-8008',
        email: 'RenanAzevedoCorreia@teleworm.us',
        tipo_sangue: 'O-',
        id_endereco: enderecosRows[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '898.027.095-06',
        nome: 'Vinicius Pereira Ribeiro',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(19) 4496-8907',
        celular: '(19) 4496-8907',
        email: 'ViniciusPereiraRibeiro@armyspy.com',
        tipo_sangue: 'A+',
        id_endereco: enderecosRows[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '161.853.342-83',
        nome: 'Luís Gomes Melo',
        data_nascimento: new Date('1936-02-02'),
        telefone: '(73) 6228-2071',
        celular: '(73) 6228-2071',
        email: 'LuisGomesMelo@armyspy.com',
        tipo_sangue: 'B+',
        id_endereco: enderecosRows[3].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '423.173.667-79',
        nome: 'Gabrielle Sousa Almeida',
        data_nascimento: new Date('1961-02-29'),
        telefone: '(11) 5293-9632',
        celular: '(11) 5293-9632',
        email: 'robertosilva@email.com',
        tipo_sangue: 'AB-',
        id_endereco: enderecosRows[4].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '132.120.779-48',
        nome: 'Luiza Oliveira Santos',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(19) 6549-6783',
        celular: '(19) 6549-6783',
        email: 'LuizaOliveiraSantos@teleworm.us',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[5].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '914.783.178-25',
        nome: 'Vitoria Dias Ferreira',
        data_nascimento: new Date('1951-02-02'),
        telefone: '(13) 4262-6733',
        celular: '(13) 4262-6733',
        email: 'VitoriaDiasFerreira@rhyta.com',
        tipo_sangue: 'B+',
        id_endereco: enderecosRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '665.654.100-38',
        nome: 'Marisa Azevedo Costa',
        data_nascimento: new Date('1961-02-08'),
        telefone: '(11) 8448-9746',
        celular: '(11) 8448-9746',
        email: 'MarisaAzevedoCosta@armyspy.com',
        tipo_sangue: 'B+',
        id_endereco: enderecosRows[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '866.904.952-05',
        nome: 'Lara Ribeiro Alves',
        data_nascimento: new Date('1977-02-02'),
        telefone: '(24) 8342-3347',
        celular: '(24) 8342-3347',
        email: 'LaraRibeiroAlves@armyspy.com',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '967.101.958-72',
        nome: 'Ágatha Oliveira Costa',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(11) 9569-5421',
        celular: '(11) 9569-5421',
        email: 'AgathaOliveiraCosta@rhyta.com',
        tipo_sangue: 'A+',
        id_endereco: enderecosRows[3].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '810.346.377-97',
        nome: 'Danilo Rodrigues Correia',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(31) 6281-3028',
        celular: '(31) 6281-3028',
        email: 'DaniloRodriguesCorreia@armyspy.com',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[4].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '728.619.419-44',
        nome: 'Erick Alves Pinto',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(51) 4247-6018',
        celular: '(51) 4247-6018',
        email: 'ErickAlvesPinto@armyspy.com',
        tipo_sangue: 'B+',
        id_endereco: enderecosRows[5].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '119.420.526-77',
        nome: 'Pedro Castro Silva',
        data_nascimento: new Date('1941-02-02'),
        telefone: '(21) 6812-8805',
        celular: '(21) 6812-8805',
        email: 'PedroCastroSilva@jourrapide.com',
        tipo_sangue: 'A+',
        id_endereco: enderecosRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '426.310.319-03',
        nome: 'Caio Azevedo Pinto',
        data_nascimento: new Date('1998-07-02'),
        telefone: '(82) 9888-6757',
        celular: '(82) 9888-6757',
        email: 'CaioAzevedoPinto@dayrep.com',
        tipo_sangue: 'A-',
        id_endereco: enderecosRows[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '526.099.564-36',
        nome: 'Marcos Barros Castro',
        data_nascimento: new Date('1975-02-22'),
        telefone: '(21) 9342-6593',
        celular: '(21) 9342-6593',
        email: 'MarcosBarrosCastro@rhyta.com',
        tipo_sangue: 'B+',
        id_endereco: enderecosRows[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '492.976.094-14',
        nome: 'Cauã Barbosa Alves',
        data_nascimento: new Date('1942-02-02'),
        telefone: '(31) 6628-4580',
        celular: '(31) 6628-4580',
        email: 'CauaBarbosaAlves@teleworm.us',
        tipo_sangue: 'B-',
        id_endereco: enderecosRows[3].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '181.598.111-36',
        nome: 'Gabriela Martins Fernandes',
        data_nascimento: new Date('1998-02-25'),
        telefone: '(62) 8304-2084',
        celular: '(62) 8304-2084',
        email: 'GabrielaMartinsFernandes@jourrapide.com',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[4].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '454.524.096-88',
        nome: 'Laura Pinto Ferreira',
        data_nascimento: new Date('1987-06-02'),
        telefone: '(27) 3795-4678',
        celular: '(27) 3795-4678',
        email: 'LauraPintoFerreira@jourrapide.com',
        tipo_sangue: 'AB-',
        id_endereco: enderecosRows[5].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '158.268.380-86',
        nome: 'Daniel Araujo Sousa',
        data_nascimento: new Date('1959-03-02'),
        telefone: '(94) 4544-8812',
        celular: '(94) 4544-8812',
        email: 'DanielAraujoSousa@armyspy.com',
        tipo_sangue: 'O-',
        id_endereco: enderecosRows[6].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '552.093.142-94',
        nome: 'Letícia Costa Cunha',
        data_nascimento: new Date('2000-07-20'),
        telefone: '(19) 3435-7869',
        celular: '(19) 3435-7869',
        email: 'LeticiaCostaCunha@dayrep.com',
        tipo_sangue: 'O-',
        id_endereco: enderecosRows[7].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '643.320.583-64',
        nome: 'Martim Correia Pinto',
        data_nascimento: new Date('2001-02-02'),
        telefone: '(61) 8799-4421',
        celular: '(61) 8799-4421',
        email: 'MartimCorreiaPinto@jourrapide.com',
        tipo_sangue: 'A-',
        id_endereco: enderecosRows[8].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '902.745.720-45',
        nome: 'Isabella Gomes Pinto',
        data_nascimento: new Date('1936-02-02'),
        telefone: '(12) 3632-7516',
        celular: '(12) 3632-7516',
        email: 'IsabellaGomesPinto@rhyta.com',
        tipo_sangue: 'O-',
        id_endereco: enderecosRows[3].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '948.880.810-18',
        nome: 'Julieta Silva Rocha',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(62) 7406-4722',
        celular: '(62) 7406-4722',
        email: 'JulietaSilvaRocha@jourrapide.com',
        tipo_sangue: 'O+',
        id_endereco: enderecosRows[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '395.357.950-90',
        nome: 'Rafaela Fernandes Gomes',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(11) 2497-5320',
        celular: '(11) 2497-5320',
        email: 'RafaelaFernandesGomes@armyspy.com',
        tipo_sangue: 'B-',
        id_endereco: enderecosRows[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cpf: '589.280.710-03',
        nome: 'Júlia Pinto Araujo',
        data_nascimento: new Date('1999-02-02'),
        telefone: '(11) 4010-7774',
        celular: '(11) 4010-7774',
        email: 'JuliaPintoAraujo@dayrep.com',
        tipo_sangue: 'B-',
        id_endereco: enderecosRows[0].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pacientes')
  }
};
