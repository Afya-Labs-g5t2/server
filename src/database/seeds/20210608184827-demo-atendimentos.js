'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {   
    const pacientes = await queryInterface.sequelize.query(
      'SELECT id FROM pacientes;'
    ); // cria um array, mas só o [0] é um array com os dados retornados da tabela
    const pacientesRows = pacientes[0];

    const especialistas = await queryInterface.sequelize.query(
      'SELECT id FROM especialistas;'
    ); // cria um array, mas só o [0] é um array com os dados retornados da tabela
    const especialistasRows = especialistas[0];

    await queryInterface.bulkInsert('atendimentos', [
      {
        data_agendamento: new Date(),
        data_atendimento: new Date(),
        hora_atendimento: '12:34',
        valor: 230.50,
        status: 'AGENDADO',
        id_paciente: pacientesRows[0].id,
        id_especialista: especialistasRows[0].id
      }      
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('atendimentos', null, {})
  }
};