const Atendimento = require('../../src/app/models/Atendimento');
const Paciente = require('../../src/app/models/Paciente');
const Especialista = require('../../src/app/models/Especialista');
const Profissao = require('../../src/app/models/Profissao');
const Endereco = require('../../src/app/models/Endereco');
require('../../src/database/index');

describe("Testando modelo Especialista", () => {
  let paciente = {};
  let especialista = {};

  beforeAll(async () => {
    let endereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "Cidade Nova",
      uf: "sp"
    });
    let profissao = await Profissao.create({
      profissao: "Ortopedia"
    });
    paciente = await Paciente.create({
      cpf: "999.999.999-11",
      nome: "Larissa Luiza",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",
      email: "larissaluiza@email.com",
      tipo_sangue: "O+",
      id_endereco: endereco.id
    });
    especialista = await Especialista.create({      
      registro: "1111-SP",
      nome: "Nicolas Cage",
      telefone: "(23)7777-7777",
      celular: "(23)97777-7777",
      email: "nicolascage@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    });
  });

  test("Inserir valores válidos no modelo Especialista", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-12",
      hora_atendimento: "15:00:00",
      valor: 200.50,
      status: "AGENDADO",
      id_paciente: paciente.id,
      id_especialista: especialista.id
    });
    expect(novoAtendimento.id).not.toBe(undefined);
    expect(novoAtendimento.id_paciente).not.toBe(undefined);
    expect(novoAtendimento.id_especialista).not.toBe(undefined);
  });
});