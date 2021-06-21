const Prontuario = require('../../src/app/models/Prontuario');
const Paciente = require('../../src/app/models/Paciente');
const Endereco = require('../../src/app/models/Endereco');
require('../../src/database/index');

describe("Testando modelo Prontuario", () => {
  let paciente = {};

  beforeAll(async () => {
    let endereco = await Endereco.create({
      id:6,
      cep: "20202-222",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
    paciente = await Paciente.create({
      id:6,
      cpf: "123.406.789-01",
      nome: "Ana Leticia",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1122",
      celular: "(11)91111-1122",      
      email: "analeticia@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    });
  });

  test("Inserir valores válidos no modelo Prontuario", async () => {
    let novoProntuario = await Prontuario.create({
      id:1,
      data_abertura: "2021-06-02",
      id_paciente: paciente.id,
    });
    expect(novoProntuario.id).not.toBe(undefined);
    expect(novoProntuario.id_paciente).not.toBe(undefined);
    expect(novoProntuario.data_abertura).not.toBe(undefined);
  });

  test("Inserir dado inválido no campo id_paciente do modelo Prontuario", async () => {
    let novoProntuario = await Prontuario.create({
      id_paciente: 0
    }).catch((err) => {
      return err.message;
    });
    expect(novoProntuario).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });
});