const Atendimento = require('../../src/app/models/Atendimento');
const Paciente = require('../../src/app/models/Paciente');
const Especialista = require('../../src/app/models/Especialista');
const Profissao = require('../../src/app/models/Profissao');
const Endereco = require('../../src/app/models/Endereco');
require('../../src/database/index');

describe("Testando modelo Atendimento", () => {
  let paciente = {};
  let especialista = {};

  beforeAll(async () => {
    let endereco = await Endereco.create({
      id: 5,
      cep: "10000-001",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "Cidade Nova",
      uf: "sp"
    });
    let profissao = await Profissao.create({
      id: 6,
      profissao: "Ortopedia"
    });
    paciente = await Paciente.create({
      id: 4, 
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
      id: 4,
      registro: "1111-SP",
      nome: "Nicolas Cage",
      telefone: "(23)7777-7777",
      celular: "(23)97777-7777",
      email: "nicolascage@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    });
  });

  test("Inserir valores válidos no modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      id: 1,
      data_atendimento: "2021-07-12",
      hora_atendimento: "15:00:00",
      valor: 200.50,
      status: "AGENDADO",
      id_paciente: paciente.id,
      id_especialista: especialista.id
    });
    expect(novoAtendimento.id).not.toBe(undefined);
    expect(novoAtendimento.data_atendimento).toBe("2021-07-12");
    expect(novoAtendimento.hora_atendimento).toBe("15:00:00");
    expect(typeof novoAtendimento.valor).toBe("number");
    expect(typeof novoAtendimento.status).toBe("string");
    expect(novoAtendimento.id_paciente).not.toBe(undefined);
    expect(novoAtendimento.id_especialista).not.toBe(undefined);
  });

  test("Inserir valores inválidos no campo data_atendimento do modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-32",
      hora_atendimento: "15:00:00",
      valor: 200.50,
      status: "AGENDADO",
      id_paciente: paciente.id,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoAtendimento).toBe("Validation error: Validation isDate on data_atendimento failed");
  });

  test("Inserir valores inválidos no campo hora_atendimento do modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-12",
      hora_atendimento: "25:00:00",
      valor: 200.50,
      status: "AGENDADO",
      id_paciente: paciente.id,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoAtendimento).toBe("Validation error: Validation is on hora_atendimento failed");
  });

  test("Inserir valores inválidos no campo valor do modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-12",
      hora_atendimento: "15:00:00",
      valor: "grátis",
      status: "AGENDADO",
      id_paciente: paciente.id,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoAtendimento).toBe("Validation error: Validation isDecimal on valor failed");
  });

  test("Inserir valores inválidos no campo status do modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-12",
      hora_atendimento: "15:00:00",
      valor: 200.50,
      status: "foi cancelado",
      id_paciente: paciente.id,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoAtendimento).toBe("Validation error: Validation isIn on status failed");
  });

  test("Inserir valores inválidos no campo id_paciente do modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-12",
      hora_atendimento: "15:00:00",
      valor: 200.50,
      status: "AGENDADO",
      id_paciente: 0,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoAtendimento).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });

  test("Inserir valores inválidos no campo id_especialista do modelo Atendimento", async () => {
    let novoAtendimento = await Atendimento.create({
      data_atendimento: "2021-07-12",
      hora_atendimento: "15:00:00",
      valor: 200.50,
      status: "AGENDADO",
      id_paciente: paciente.id,
      id_especialista: 0
    }).catch((err) => {
      return err.message;
    });
    expect(novoAtendimento).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });
});