const Paciente = require('../../../src/app/models/Paciente');
const Endereco = require('../../../src/app/models/Endereco');
require('../../../src/database/index');

describe("Testando modelo Paciente", () => {
  let endereco = {};

  beforeAll(async () => {
    endereco = await Endereco.create({
      cep: "11111-111",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
  });

  test("Inserir valores válidos no modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "111.111.111-11",
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    });
    expect(novoPaciente.id).not.toBe(undefined);
    expect(novoPaciente.cpf.length <= 14).toBe(true);
    expect(novoPaciente.data_nascimento).toBe("2021-06-15");
    expect(typeof novoPaciente.telefone).toBe("string");
    expect(typeof novoPaciente.celular).toBe("string");
    expect(typeof novoPaciente.email).toBe("string");
    expect(novoPaciente.tipo_sangue.length <= 3).toBe(true);
    expect(novoPaciente.id_endereco).not.toBe(undefined);
    expect(novoPaciente.createdAt).not.toBe(undefined);
    expect(novoPaciente.updatedAt).not.toBe(undefined);
  });

  test("Inserir cpf repetido é inválido no modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "111.111.111-11",
      nome: "Outro nome",
      data_nascimento: "2021-06-15",
      telefone: "(22)2222-2222",
      celular: "(22)92222-2222",      
      email: "outronome@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error");
  });

  test("Inserir dados inválidos no campo cpf do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: 25,
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation is on cpf failed");
  });

  test("Inserir dados inválidos no campo nome do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "111.111.111-11",
      nome: 261035,
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation is on nome failed");
  });

  test("Inserir dados inválidos no campo data_nascimento do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "222.222.222-22",
      nome: "Ana Roberta",
      data_nascimento: "2021-13-32",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation isDate on data_nascimento failed");
  });

  test("Inserir dados inválidos no campo telefone do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "333.333.333-33",
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)aaaa-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation is on telefone failed");
  });

  test("Inserir dados inválidos no campo celular do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "444.444.444-44",
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)aaaaa-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation is on celular failed");
  });

  test("Inserir dados inválidos no campo email do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "555.555.555-55",
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta",
      tipo_sangue: "AB+",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation isEmail on email failed");
  });

  test("Inserir dados inválidos no campo tipo_sangue do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "666.666.666-66",
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "ABC",
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("Validation error: Validation is on tipo_sangue failed");
  });

  test("Inserir dados inválidos no campo id_endereco do modelo Paciente", async () => {
    let novoPaciente = await Paciente.create({
      cpf: "777.777.777-77",
      nome: "Ana Roberta",
      data_nascimento: "2021-06-15",
      telefone: "(11)1111-1111",
      celular: "(11)91111-1111",      
      email: "anaroberta@email.com",
      tipo_sangue: "AB+",
      id_endereco: 0
    }).catch((err) => {
      return err.message;
    });
    expect(novoPaciente).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });
});