const Endereco = require('../../../src/app/models/Endereco');
require('../../../src/database/index');

describe("Testando modelo Endereco", () => {

  test("Inserir valores válidos no modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
    expect(novoEndereco.id).not.toBe(undefined);
    expect(novoEndereco.cep.length <= 9).toBe(true);
    expect(typeof novoEndereco.logradouro).toBe("string");
    expect(typeof novoEndereco.numero).toBe("number");
    expect(typeof novoEndereco.bairro).toBe("string");
    expect(typeof novoEndereco.cidade).toBe("string");
    expect(novoEndereco.uf.length).toBe(2);
    expect(novoEndereco.createdAt).not.toBe(undefined);
    expect(novoEndereco.updatedAt).not.toBe(undefined);
  });

  test("Inserir dado inválido no campo cep do modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    }).catch((err) => {
      return err.message;
    });
    expect(novoEndereco).toBe("Validation error: Validation is on cep failed");
  });

  test("Inserir dado inválido no campo logradouro do modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: 202020,
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    }).catch((err) => {
      return err.message;
    });
    expect(novoEndereco).toBe("Validation error: Validation is on logradouro failed");
  });

  test("Inserir tipo de dado inválido no campo numero do modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua 25 de Março",
      numero: "Um",
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    }).catch((err) => {
      return err.message;
    });
    expect(novoEndereco).toBe("Validation error: Validation isInt on numero failed");
  });

  test("Inserir tipo de dado inválido no campo bairro do modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: 156.4,
      cidade: "São Paulo",
      uf: "sp"
    }).catch((err) => {
      return err.message;
    });
    expect(novoEndereco).toBe("Validation error: Validation is on bairro failed");
  });

  test("Inserir tipo de dado inválido no campo cidade do modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: 555,
      uf: "sp"
    }).catch((err) => {
      return err.message;
    });
    expect(novoEndereco).toBe("Validation error: Validation is on cidade failed");
  });

  test("Inserir dado inválido no campo uf do modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua 25 de Março",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "pj"
    }).catch((err) => {
      return err.message;
    });
    expect(novoEndereco).toBe("Validation error: Validation isIn on uf failed");
  });
});