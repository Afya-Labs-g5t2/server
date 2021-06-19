const Especialista = require('../../../src/app/models/Especialista');
const Profissao = require('../../../src/app/models/Profissao');
const Endereco = require('../../../src/app/models/Endereco');
require('../../../src/database/index');

describe("Testando modelo Especialista", () => {
  let profissao = {};
  let endereco = {};

  beforeAll(async () => {
    profissao = await Profissao.create({      
      profissao: "Pediatria"
    });
    endereco = await Endereco.create({
      cep: "22222-222",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
  });

  test("Inserir valores válidos no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "22222-SP",
      nome: "João Carlos",
      telefone: "(23)2222-2222",
      celular: "(23)92222-2222",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    });
    expect(novoEspecialista.id).not.toBe(undefined);
    expect(typeof novoEspecialista.registro).toBe("string");
    expect(typeof novoEspecialista.nome).toBe("string");
    expect(typeof novoEspecialista.telefone).toBe("string");
    expect(typeof novoEspecialista.celular).toBe("string");
    expect(typeof novoEspecialista.email).toBe("string");
    expect(novoEspecialista.id_profissao).not.toBe(undefined);
    expect(novoEspecialista.id_endereco).not.toBe(undefined);
    expect(novoEspecialista.createdAt).not.toBe(undefined);
    expect(novoEspecialista.updatedAt).not.toBe(undefined);
  });

  test("Inserir registro repetido é inválido no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "22222-SP",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)93333-3333",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error");
  });

  test("Inserir email repetido é inválido no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "333-SP",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)92222-2222",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error");
  });

  test("Inserir valor inválido no campo registro no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)93333-3333",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error: Validation is on registro failed");
  });

  test("Inserir valor inválido no campo nome no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333-P-SP",
      nome: "Afy@ L@bs",
      telefone: "(23)2222-2222",
      celular: "(23)93333-3333",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error: Validation is on nome failed");
  });

  test("Inserir valor inválido no campo telefone no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333-P-SP",
      nome: "Novo Especialista",
      telefone: "(23)2-2222",
      celular: "(23)93333-3333",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error: Validation is on telefone failed");
  });

  test("Inserir valor inválido no campo celular no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333-P-SP",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)933",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error: Validation is on celular failed");
  });

  test("Inserir valor inválido no campo email no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333-P-SP",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)93333-3333",
      email: "joaoca.com",
      id_profissao: profissao.id,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("Validation error: Validation isEmail on email failed");
  });

  test("Inserir valor inválido no campo id_profissao no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333-P-SP",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)93333-3333",
      email: "joaocarlos@email.com",
      id_profissao: 0,
      id_endereco: endereco.id
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });

  test("Inserir valor inválido no campo id_profissao no modelo Especialista", async () => {
    let novoEspecialista = await Especialista.create({
      registro: "33333-P-SP",
      nome: "Novo Especialista",
      telefone: "(23)2222-2222",
      celular: "(23)93333-3333",
      email: "joaocarlos@email.com",
      id_profissao: profissao.id,
      id_endereco: 0
    }).catch((err) => {
      return err.message;
    });
    expect(novoEspecialista).toBe("SQLITE_CONSTRAINT: FOREIGN KEY constraint failed");
  });
});