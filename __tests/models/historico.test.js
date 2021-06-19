const Historico = require('../../src/app/models/Historico');
const Especialista = require('../../src/app/models/Especialista');
const Prontuario = require('../../src/app/models/Prontuario');
const Endereco = require('../../src/app/models/Endereco');
const Paciente = require('../../src/app/models/Paciente');
const Profissao = require('../../src/app/models/Profissao');
require('../../src/database/index');

describe("Testando modelo ", () => {
  let especialista = {};
  let prontuario = {};

  beforeAll(async () => {
    let profissao = await Profissao.create({  
      id: 10,    
      profissao: "Obstetra"
    });
    let endereco = await Endereco.create({
      id: 10,
      cep: "33333-333",
      logradouro: "Rua 25 de Março",
      numero: 400,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
    let paciente = await Paciente.create({
      id: 10,
      cpf: "888.000.000-00",
      nome: "Paciente Teste",
      data_nascimento: "2021-06-15",
      telefone: "(11)1118-1000",
      celular: "(11)91111-1000",      
      email: "pacienteteste@email.com",
      tipo_sangue: "A-",
      id_endereco: endereco.id
    });
    especialista = await Especialista.create({  
      id: 10,    
      registro: "77777-SP",
      nome: "Especialista Teste",
      telefone: "(23)9999-9999",
      celular: "(23)99999-9999",
      email: "especialistateste@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    });
    prontuario = await Prontuario.create({
      id: 10,
      id_paciente: paciente.id,
    });
  });

  test("Inserir valores válidos no modelo Historico", async () => {
    let novoHistorico = await Historico.create({
      hora_consulta: "12:30:00",
      descricao: "Paciente está com febre e calafrios",
      id_prontuario: prontuario.id,
      id_especialista: especialista.id
    });
    expect(novoHistorico.id).not.toBe(undefined);
    expect(novoHistorico.data_consulta).not.toBe(undefined);
    expect(novoHistorico.hora_consulta).toBe("12:30:00");
    expect(novoHistorico.descricao).not.toBe(undefined);
    expect(novoHistorico.id_prontuario).not.toBe(null);
    expect(novoHistorico.id_especialista).not.toBe(null);
  });

  test("Inserir valores inválidos no campo hora_consulta do modelo Historico", async () => {
    let novoHistorico = await Historico.create({
      hora_consulta: "12:30:60",
      descricao: "Paciente está com febre e calafrios",
      id_prontuario: prontuario.id,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoHistorico).toBe("Validation error: Validation is on hora_consulta failed");
  });
  
  test("Inserir valores inválidos no campo id_prontuario do modelo Historico", async () => {
    let novoHistorico = await Historico.create({
      hora_consulta: "12:30:00",
      descricao: "Paciente está com febre e calafrios",
      id_prontuario: 0,
      id_especialista: especialista.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoHistorico).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });
  
  test("Inserir valores inválidos no campo id_especialista do modelo Historico", async () => {
    let novoHistorico = await Historico.create({
      hora_consulta: "12:30:00",
      descricao: "Paciente está com febre e calafrios",
      id_prontuario: prontuario.id,
      id_especialista: 0
    }).catch((err) => {
      return err.message;
    });
    expect(novoHistorico).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });
});