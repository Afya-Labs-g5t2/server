const Profissao = require('../../src/app/models/Profissao');
require('../../src/database/index');

describe("Testando model Profissao", () => {

  test("Inserir valores válidos no modelo Profissao", async () => {
    let novaProfissao = await Profissao.create({
      profissao: "Cardiologia"
    });
    expect(novaProfissao.id).not.toBe(undefined);
    expect(novaProfissao.profissao).toBe("Cardiologia");
    expect(novaProfissao.createdAt).not.toBe(undefined);
    expect(typeof novaProfissao.profissao).toBe("string");
  });
  
  test("Inserir tipo de dado inválido no campo profissao do modelo Profissao", async () => {
    let profissaoInvalida = await Profissao.create({ profissao: 1 }).catch((err) => {
      return err.message;
    });
    expect(profissaoInvalida).toBe("Validation error: Validation isAlpha on profissao failed");
  });

  test("Base de dados só aceita valores válidos", async () => {
    let profissoes = await Profissao.findAll();
    expect(profissoes.length).toBe(1);
  });
});