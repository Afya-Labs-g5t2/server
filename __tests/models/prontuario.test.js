const Prontuario = require('../../src/app/models/Prontuario');
require('../../src/database/index');

describe("Testando modelo Prontuario", () => {

  test("Inserir valores válidos no modelo Prontuario", async () => {
    let novoProntuario = await Prontuario.create({
      id_paciente: 1,
    });
    expect(novoProntuario.id).not.toBe(undefined);
  });
});