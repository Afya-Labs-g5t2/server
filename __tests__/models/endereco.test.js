const Endereco = require('../../src/app/models/Endereco');
require('../../src/database/index');

describe("Testando modelo Endereco", () => {

  test("Inserir valores válidos no modelo Endereco", async () => {
    let novoEndereco = await Endereco.create({
      cep: "00000-000",
      logradouro: "Rua Paralela",
      numero: 404,
      bairro: "Bairro Alegria",
      cidade: "São Paulo",
      uf: "sp"
    });
    expect(novoEndereco.id).not.toBe(undefined);
  });

  test("Banco de dados só aceita valores", () => {

  });
});