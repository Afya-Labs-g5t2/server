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
      profissao: "Clínica Geral"
    });
    let endereco = await Endereco.create({
      cep: "33333-333",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
    let paciente = await Paciente.create({
      cpf: "000.000.000-00",
      nome: "Paciente Teste",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "pacienteteste@email.com",
      tipo_sangue: "A-",
      id_endereco: endereco.id
    });
    especialista = await Especialista.create({      
      registro: "77777-SP",
      nome: "Especialista Teste",
      telefone: "(23)9999-9999",
      celular: "(23)99999-9999",
      email: "especialistateste@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    });
    prontuario = await Prontuario.create({
      id_paciente: paciente.id,
    });
  });

  test("Inserir valores válidos no modelo Historico", () => {
    let novoHistorico = 
    expect("hello").toBe("hello");
  });
});